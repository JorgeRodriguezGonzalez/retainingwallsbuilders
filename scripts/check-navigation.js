import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const read = (file) => readFileSync(path.join(projectRoot, file), "utf8");
const normalise = (value) => {
  const clean = value.split(/[?#]/, 1)[0].replace(/^\/+|\/+$/g, "");
  return clean === "" ? "/" : `/${clean}/`;
};

const routes = new Set([...read("public/sitemap.xml").matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => normalise(new URL(match[1]).pathname)));
const source = read("src/data/navigation.ts");
const staticLinks = [...source.matchAll(/name:\s*["']([^"']+)["'][\s\S]*?href:\s*["'](\/[^"']*)["']/g)].map((match) => ({ name: match[1], href: match[2] }));
const errors = [];
for (const link of staticLinks) {
  if (!routes.has(normalise(link.href))) errors.push(`Navigation item “${link.name}” points to a missing route: ${link.href}`);
}
const business = read("src/data/business.ts");
const phoneDisplay = business.match(/phoneDisplay:\s*["']([^"']+)/)?.[1] ?? "";
const phoneHref = business.match(/phoneHref:\s*["']([^"']+)/)?.[1] ?? "";
if (!/^\(\d{2}\) \d{4} \d{4}$/.test(phoneDisplay)) errors.push(`Unexpected display phone format: ${phoneDisplay}`);
if (!/^tel:\d+$/.test(phoneHref)) errors.push(`Unexpected telephone link: ${phoneHref}`);
for (const file of ["src/components/Header.tsx", "src/components/Footer.tsx", "src/components/FloatingCTA.tsx", "src/utils/TrackingContext.tsx"]) {
  const fileSource = read(file);
  if (fileSource.includes("phone.label")) errors.push(`${file} still uses phone.label`);
}
if (errors.length) {
  console.error(`Navigation check failed with ${errors.length} issue(s):`);
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}
console.log(`Navigation check passed: ${staticLinks.length} static links and ${routes.size} sitemap routes verified.`);
