import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const distDir = path.join(projectRoot, "dist");
const sitemapPath = path.join(distDir, "sitemap.xml");
const netlifyConfigPath = path.join(projectRoot, "netlify.toml");
const businessDataPath = path.join(projectRoot, "src", "data", "business.ts");
const minimumHtmlBytes = 10_000;

function decodeXml(value) {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"')
    .replaceAll("&apos;", "'");
}

async function readBusinessAsset(key) {
  const source = await readFile(businessDataPath, "utf8");
  const match = source.match(new RegExp(`\\b${key}:\\s*["']([^"']+)["']`));

  if (!match) {
    throw new Error(`Could not read business.${key} from src/data/business.ts`);
  }

  return match[1];
}

function outputPathForUrl(url) {
  const pathname = new URL(url).pathname;
  if (pathname === "/") return path.join(distDir, "index.html");

  return path.join(distDir, pathname.replace(/^\/+|\/+$/g, ""), "index.html");
}

function canonicalFromHtml(html) {
  return html.match(
    /<link\s+[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["'][^>]*>/i
  )?.[1] ?? html.match(
    /<link\s+[^>]*href=["']([^"']+)["'][^>]*rel=["']canonical["'][^>]*>/i
  )?.[1];
}

async function verifyNetlifyConfig() {
  const errors = [];
  const config = await readFile(netlifyConfigPath, "utf8");

  if (!/\[build\][\s\S]*?publish\s*=\s*["']dist["']/m.test(config)) {
    errors.push('netlify.toml must set [build] publish = "dist"');
  }

  if (!/\[build\][\s\S]*?command\s*=\s*["']npm run build["']/m.test(config)) {
    errors.push('netlify.toml must set [build] command = "npm run build"');
  }

  const nodeVersion = config.match(/NODE_VERSION\s*=\s*["'](\d+)["']/)?.[1];
  if (!nodeVersion || Number(nodeVersion) < 18) {
    errors.push("netlify.toml must set NODE_VERSION to 18 or newer");
  }

  const catchAllIndex = config.lastIndexOf('from = "/*"');
  const lastRedirectIndex = config.lastIndexOf("[[redirects]]");
  if (catchAllIndex === -1 || catchAllIndex < lastRedirectIndex) {
    errors.push("The SPA /* fallback must be the final redirect rule");
  }

  return errors;
}

async function verifyDist() {
  const failures = await verifyNetlifyConfig();
  const sitemap = await readFile(sitemapPath, "utf8");
  const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) =>
    decodeXml(match[1])
  );

  if (urls.length === 0) {
    failures.push("dist/sitemap.xml does not contain any URLs");
  }

  const expectedBaseUrl = (await readBusinessAsset("url")).replace(/\/+$/, "");
  let checkedPages = 0;

  for (const url of urls) {
    const parsedUrl = new URL(url);
    const htmlPath = outputPathForUrl(url);

    if (`${parsedUrl.protocol}//${parsedUrl.host}` !== expectedBaseUrl) {
      failures.push(`${url}: sitemap URL does not use ${expectedBaseUrl}`);
      continue;
    }

    if (parsedUrl.pathname !== "/" && !parsedUrl.pathname.endsWith("/")) {
      failures.push(`${url}: sitemap URL is missing its trailing slash`);
    }

    try {
      const [html, fileStats] = await Promise.all([
        readFile(htmlPath, "utf8"),
        stat(htmlPath),
      ]);
      checkedPages += 1;

      if (fileStats.size < minimumHtmlBytes) {
        failures.push(
          `${url}: prerendered HTML is only ${fileStats.size} bytes (minimum ${minimumHtmlBytes})`
        );
      }

      if (/<div\s+id=["']root["']\s*><\/div>/i.test(html)) {
        failures.push(`${url}: contains an empty React root placeholder`);
      }

      if (!/<title[^>]*>[^<]+<\/title>/i.test(html)) {
        failures.push(`${url}: missing a populated <title>`);
      }

      if (!/<script\s+[^>]*type=["']application\/ld\+json["'][^>]*>/i.test(html)) {
        failures.push(`${url}: missing application/ld+json schema`);
      }

      const canonical = canonicalFromHtml(html);
      if (!canonical) {
        failures.push(`${url}: missing canonical link`);
      } else {
        const canonicalUrl = new URL(canonical);
        if (`${canonicalUrl.protocol}//${canonicalUrl.host}` !== expectedBaseUrl) {
          failures.push(`${url}: canonical does not use ${expectedBaseUrl}`);
        }
        if (canonicalUrl.pathname !== "/" && !canonicalUrl.pathname.endsWith("/")) {
          failures.push(`${url}: canonical is missing its trailing slash`);
        }
        if (canonicalUrl.hostname.endsWith(".netlify.app")) {
          failures.push(`${url}: canonical references a netlify.app subdomain`);
        }
      }
    } catch (error) {
      failures.push(
        `${url}: missing prerender output ${path.relative(projectRoot, htmlPath)} (${String(error)})`
      );
    }
  }

  if (failures.length > 0) {
    console.error(`✗ Netlify dist verification failed with ${failures.length} issue(s):`);
    failures.forEach((failure) => console.error(`  - ${failure}`));
    process.exitCode = 1;
    return;
  }

  console.log(
    `✓ Netlify dist verification passed: ${checkedPages} prerendered pages, schemas and production canonicals verified.`
  );
}

verifyDist().catch((error) => {
  console.error("✗ Netlify dist verification failed:", error);
  process.exitCode = 1;
});
