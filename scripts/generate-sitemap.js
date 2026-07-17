import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { tsImport } from "tsx/esm/api";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const sitemapOutputPath = path.join(projectRoot, "public", "sitemap.xml");
const robotsOutputPath = path.join(projectRoot, "public", "robots.txt");
const today = new Date().toISOString().slice(0, 10);

const staticPages = [
  { path: "/", priority: 1.0, changefreq: "weekly" },
  { path: "/about-us/", priority: 0.7, changefreq: "monthly" },
  { path: "/contact-us/", priority: 0.8, changefreq: "monthly" },
  { path: "/contact-us/thank-you/", priority: 0.2, changefreq: "yearly" },
  { path: "/areas/", priority: 0.9, changefreq: "weekly" },
  { path: "/services/", priority: 0.9, changefreq: "weekly" },
  { path: "/privacy-policy/", priority: 0.3, changefreq: "yearly" },
  { path: "/faqs/", priority: 0.7, changefreq: "monthly" },
  { path: "/blog/", priority: 0.8, changefreq: "weekly" },
];

const routeSettings = {
  "service pages": { priority: 0.9, changefreq: "weekly" },
  "location pages": { priority: 0.8, changefreq: "weekly" },
  "suburb hubs": { priority: 0.8, changefreq: "weekly" },
  "service-in-suburb pages": { priority: 0.7, changefreq: "weekly" },
  guides: { priority: 0.7, changefreq: "monthly" },
  "blog posts": { priority: 0.7, changefreq: "monthly" },
};

function normalizePath(value) {
  if (typeof value !== "string" || value.trim() === "") {
    throw new TypeError(`Invalid sitemap route path: ${String(value)}`);
  }

  const raw = value.trim();
  const pathname = /^https?:\/\//i.test(raw) ? new URL(raw).pathname : raw;
  const withoutQueryOrHash = pathname.split(/[?#]/, 1)[0];
  const clean = withoutQueryOrHash
    .replace(/\/{2,}/g, "/")
    .replace(/^\/+|\/+$/g, "");

  return clean === "" ? "/" : `/${clean}/`;
}

function escapeXml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

async function loadSitemapData() {
  const moduleUrl = pathToFileURL(
    path.join(projectRoot, "scripts", "sitemap-data.ts")
  ).href;
  const { sitemapData } = await tsImport(moduleUrl, import.meta.url);

  if (!sitemapData || typeof sitemapData !== "object") {
    throw new TypeError("scripts/sitemap-data.ts must export sitemapData");
  }

  return sitemapData;
}

function buildRobots(baseUrl) {
  return [
    "User-agent: *",
    "Allow: /",
    "",
    `Sitemap: ${baseUrl}/sitemap.xml`,
    "",
  ].join("\n");
}

function buildXml(entries, baseUrl) {
  const urls = entries
    .map(({ path: routePath, priority, changefreq }) => {
      const loc = `${baseUrl}${routePath}`;

      return [
        "  <url>",
        `    <loc>${escapeXml(loc)}</loc>`,
        `    <lastmod>${today}</lastmod>`,
        `    <changefreq>${changefreq}</changefreq>`,
        `    <priority>${priority.toFixed(1)}</priority>`,
        "  </url>",
      ].join("\n");
    })
    .join("\n");

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urls,
    "</urlset>",
    "",
  ].join("\n");
}

async function generateSitemap() {
  const { baseUrl: rawBaseUrl, routeGroups } = await loadSitemapData();

  if (!rawBaseUrl || !/^https:\/\//i.test(rawBaseUrl)) {
    throw new Error("business.url must be a valid HTTPS production URL");
  }

  const baseUrl = rawBaseUrl.replace(/\/+$/, "");
  const dynamicEntries = [];
  const groupCounts = [];

  for (const [label, routes] of Object.entries(routeGroups)) {
    if (!Array.isArray(routes)) {
      throw new TypeError(`The sitemap route group "${label}" must be an array`);
    }

    const settings = routeSettings[label];
    if (!settings) {
      throw new Error(`Missing sitemap settings for route group "${label}"`);
    }

    groupCounts.push([label, routes.length]);

    routes.forEach((route, index) => {
      if (!route || typeof route.path !== "string") {
        throw new TypeError(
          `Route ${index} in sitemap group "${label}" is missing a string path`
        );
      }

      dynamicEntries.push({ path: route.path, ...settings });
    });
  }

  const allEntries = [...staticPages, ...dynamicEntries];
  const uniqueEntries = new Map();

  for (const entry of allEntries) {
    const routePath = normalizePath(entry.path);
    const existing = uniqueEntries.get(routePath);

    if (!existing || entry.priority > existing.priority) {
      uniqueEntries.set(routePath, { ...entry, path: routePath });
    }
  }

  const entries = [...uniqueEntries.values()].sort((a, b) => {
    if (a.path === "/") return -1;
    if (b.path === "/") return 1;
    return a.path.localeCompare(b.path);
  });

  mkdirSync(path.dirname(sitemapOutputPath), { recursive: true });
  writeFileSync(sitemapOutputPath, buildXml(entries, baseUrl), "utf8");
  writeFileSync(robotsOutputPath, buildRobots(baseUrl), "utf8");

  console.log(
    `✓ Sitemap generated: ${entries.length} unique URLs written to public/sitemap.xml`
  );
  console.log(`✓ robots.txt updated with ${baseUrl}/sitemap.xml`);
  console.log(`  - static pages: ${staticPages.length}`);

  for (const [label, count] of groupCounts) {
    console.log(`  - ${label}: ${count}`);
  }

  const duplicateCount = allEntries.length - entries.length;
  if (duplicateCount > 0) {
    console.log(`  - duplicate paths removed: ${duplicateCount}`);
  }
}

generateSitemap().catch((error) => {
  console.error("✗ Sitemap generation failed:", error);
  process.exitCode = 1;
});
