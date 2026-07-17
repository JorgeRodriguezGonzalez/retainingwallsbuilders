import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const sitemapPath = path.join(projectRoot, "dist", "sitemap.xml");
const businessDataPath = path.join(projectRoot, "src", "data", "business.ts");
const businessSource = await readFile(businessDataPath, "utf8");

function readBusinessAsset(key) {
  const match = businessSource.match(
    new RegExp(`\\b${key}:\\s*["']([^"']+)["']`)
  );

  if (!match) {
    throw new Error(`Could not read business.${key} from src/data/business.ts`);
  }

  return match[1];
}

const productionUrl = readBusinessAsset("url");
const ogImagePath = readBusinessAsset("ogImage");
const requestedBaseUrl =
  process.argv[2] ||
  process.env.DEPLOY_PRIME_URL ||
  process.env.URL ||
  productionUrl;
const deploymentBaseUrl = requestedBaseUrl.replace(/\/+$/, "");
const verifyAllRoutes = process.env.VERIFY_ALL_ROUTES === "true";

function decodeXml(value) {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"')
    .replaceAll("&apos;", "'");
}

function pickRepresentativePaths(paths) {
  if (verifyAllRoutes) return paths;

  const predicates = [
    (pathname) => pathname === "/",
    (pathname) => pathname === "/about-us/",
    (pathname) => pathname === "/services/",
    (pathname) => pathname.startsWith("/services/") && pathname !== "/services/",
    (pathname) => pathname === "/areas/",
    (pathname) => pathname.startsWith("/areas/") && pathname !== "/areas/",
    (pathname) => pathname.startsWith("/blog/") && pathname !== "/blog/",
  ];

  return Array.from(
    new Set(predicates.map((predicate) => paths.find(predicate)).filter(Boolean))
  );
}

async function loadPaths() {
  const sitemap = await readFile(sitemapPath, "utf8");
  return [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(
    (match) => new URL(decodeXml(match[1])).pathname
  );
}

async function verifyPage(pathname) {
  const errors = [];
  const url = new URL(pathname, `${deploymentBaseUrl}/`).href;
  const response = await fetch(url, {
    redirect: "follow",
    headers: { "user-agent": "HunterValleyRoofingDeploymentVerifier/1.0" },
  });
  const html = await response.text();

  if (!response.ok) {
    errors.push(`${url}: returned HTTP ${response.status}`);
    return errors;
  }

  if (!response.headers.get("content-type")?.includes("text/html")) {
    errors.push(`${url}: did not return text/html`);
  }

  if (html.length < 10_000) {
    errors.push(`${url}: response is only ${html.length} characters`);
  }

  if (/<div\s+id=["']root["']\s*><\/div>/i.test(html)) {
    errors.push(`${url}: served the empty SPA shell instead of prerendered HTML`);
  }

  if (!/<script\s+[^>]*type=["']application\/ld\+json["'][^>]*>/i.test(html)) {
    errors.push(`${url}: missing application/ld+json schema`);
  }

  if (!/<link\s+[^>]*rel=["']canonical["'][^>]*>/i.test(html)) {
    errors.push(`${url}: missing canonical link`);
  }

  return errors;
}

async function verifyOgImage() {
  const errors = [];
  const imageUrl = new URL(ogImagePath, `${deploymentBaseUrl}/`).href;
  const response = await fetch(imageUrl, {
    redirect: "follow",
    headers: { "user-agent": "HunterValleyRoofingDeploymentVerifier/1.0" },
  });

  if (!response.ok) {
    errors.push(`${imageUrl}: returned HTTP ${response.status}`);
  }

  if (!response.headers.get("content-type")?.includes("image/png")) {
    errors.push(`${imageUrl}: did not return image/png`);
  }

  return errors;
}

async function verifyDeployment() {
  const paths = pickRepresentativePaths(await loadPaths());
  const failures = [];

  console.log(`Checking ${paths.length} representative route(s) on ${deploymentBaseUrl}...`);

  for (const pathname of paths) {
    try {
      const errors = await verifyPage(pathname);
      failures.push(...errors);
      console.log(errors.length === 0 ? `✓ ${pathname}` : `✗ ${pathname}`);
    } catch (error) {
      failures.push(`${pathname}: request failed (${String(error)})`);
      console.log(`✗ ${pathname}`);
    }
  }

  try {
    failures.push(...(await verifyOgImage()));
  } catch (error) {
    failures.push(`Open Graph image request failed (${String(error)})`);
  }

  if (failures.length > 0) {
    console.error(`\n✗ Deployment verification failed with ${failures.length} issue(s):`);
    failures.forEach((failure) => console.error(`  - ${failure}`));
    process.exitCode = 1;
    return;
  }

  console.log(
    `\n✓ Deployment verification passed for ${deploymentBaseUrl}. Prerendered HTML, JSON-LD and the Open Graph image are being served correctly.`
  );
}

verifyDeployment().catch((error) => {
  console.error("✗ Deployment verification failed:", error);
  process.exitCode = 1;
});
