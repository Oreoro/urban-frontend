import { readdir, readFile } from "node:fs/promises";
import { join, relative } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const ignored = new Set([
  ".astro",
  ".git",
  "dist",
  "legacy-framer-export",
  "node_modules"
]);

const runtimePatterns = [
  { label: "Framer bundle script", pattern: /data-framer-bundle/i },
  { label: "Framer globals", pattern: /__framer/i },
  { label: "Framer appear script", pattern: /framer\/appear/i },
  { label: "Framer main runtime", pattern: /script_main/i },
  {
    label: "Framer hosted module runtime",
    pattern: /framerusercontent\.com\/sites\/[^"'`\s)]+\.mjs/i
  }
];

const sourceExtensions = new Set([
  ".astro",
  ".css",
  ".html",
  ".js",
  ".jsx",
  ".mjs",
  ".ts",
  ".tsx"
]);

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (ignored.has(entry.name)) continue;

    const path = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await walk(path));
      continue;
    }

    const extension = entry.name.slice(entry.name.lastIndexOf("."));
    if (sourceExtensions.has(extension)) {
      files.push(path);
    }
  }

  return files;
}

const files = await walk(root);
const failures = [];

for (const file of files) {
  if (relative(root, file) === "scripts/check-framer-runtime.mjs") continue;

  const text = await readFile(file, "utf8");
  for (const check of runtimePatterns) {
    if (check.pattern.test(text)) {
      failures.push(`${relative(root, file)}: ${check.label}`);
    }
  }
}

if (failures.length > 0) {
  console.error("Framer runtime code was found in active source:");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log("No Framer runtime code found in active source.");
