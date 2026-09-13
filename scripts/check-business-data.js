import { access, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { tsImport } from "tsx/esm/api";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const businessPath = path.join(projectRoot, "src", "data", "business.ts");
const configPath = path.join(projectRoot, "build-config.jsonc");
const { business } = await tsImport(pathToFileURL(businessPath).href, import.meta.url);

const configText = await readFile(configPath, "utf8");
const stripJsoncComments = (text) => {
  let result = "";
  let inString = false;
  let escape = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (escape) { escape = false; result += c; continue; }
    if (c === "\\") { escape = true; result += c; continue; }
    if (c === '"' && !escape) { inString = !inString; result += c; continue; }
    if (!inString && c === "/" && text[i + 1] === "/") {
      while (i < text.length && text[i] !== "\n") i++;
      result += "\n";
      continue;
    }
    if (!inString && c === "/" && text[i + 1] === "*") {
      i += 2;
      while (i < text.length && !(text[i] === "*" && text[i + 1] === "/")) i++;
      i++;
      continue;
    }
    result += c;
  }
  return result;
};
const configJson = JSON.parse(stripJsoncComments(configText));
const expectedAreaCount = configJson.areaServed?.length ?? 0;

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
if (business.areaServed.locationNames.length !== expectedAreaCount) failures.push(`business.areaServed.locationNames must contain the ${expectedAreaCount} approved service areas from build-config.jsonc`);

if (failures.length) {
  console.error(`Business data check failed with ${failures.length} issue(s):`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}
console.log(`Business data check passed: central contact details, ${expectedAreaCount} service areas and all brand assets verified.`);
