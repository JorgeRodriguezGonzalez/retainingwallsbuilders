import { readdirSync, rmSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const projectRoot = path.resolve(path.dirname(__filename), "..");

const removeIfPresent = (relativePath) => {
  const target = path.join(projectRoot, relativePath);
  rmSync(target, { recursive: true, force: true });
  console.log(`Removed ${relativePath}`);
};

const removeMacMetadata = (directory) => {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    if (entry.name === ".git") continue;

    const entryPath = path.join(directory, entry.name);

    if (entry.name === ".DS_Store") {
      rmSync(entryPath, { force: true });
      continue;
    }

    if (entry.isDirectory()) removeMacMetadata(entryPath);
  }
};

removeIfPresent("dist");
removeIfPresent("node_modules");
removeMacMetadata(projectRoot);

console.log("Repository-generated files have been removed. Run npm install before the next build.");
