import { access, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { tsImport } from "tsx/esm/api";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const businessPath = path.join(projectRoot, "src", "data", "business.ts");
const { business } = await tsImport(pathToFileURL(businessPath).href, import.meta.url);
const failures = [];

for (const relative of [
  "src/components/Header.tsx",
  "src/components/Footer.tsx",
  "src/components/ServiceTemplate.tsx",
  "src/components/LocationTemplate.tsx",
  "src/components/BlogPostTemplate.tsx",
]) {
  const source = await readFile(path.join(projectRoot, relative), "utf8");
  if (!source.includes("@/data/business") || !source.includes("business.")) {
    failures.push(`${relative} must consume src/data/business.ts`);
  }
}

for (const asset of Object.values(business.brand.assets)) {
  if (typeof asset !== "string" || !asset.startsWith("/")) continue;
  try {
    await access(path.join(projectRoot, "public", asset.replace(/^\/+/, "")));
  } catch {
    failures.push(`Missing business asset: ${asset}`);
  }
}

if (!business.url.startsWith("https://")) failures.push("business.url must use HTTPS");
if (!/^tel:\d+$/.test(business.contact.phoneHref)) failures.push("business.contact.phoneHref must use a digits-only tel link");
if (!business.contact.emailHref.endsWith(business.contact.email)) failures.push("business.contact.emailHref must match business.contact.email");
if (business.areaServed.locationNames.length !== 20) failures.push("business.areaServed.locationNames must contain the 20 approved service areas");

if (failures.length) {
  console.error(`Business data check failed with ${failures.length} issue(s):`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}
console.log("Business data check passed: central contact details, 20 service areas and all brand assets verified.");
