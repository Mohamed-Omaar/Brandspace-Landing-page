import { access, readFile } from "node:fs/promises";

const required = [
  "index.html",
  "styles-1.css",
  "styles-2.css",
  "styles-3.css",
  "mobile-fix.css",
  "concept-override.css",
  "app-1.js",
  "app-2.js",
  "app-3.js",
  "app-4.js",
  "icons.js",
  "brand-brain-preview/index.html",
];

await Promise.all(required.map((file) => access(new URL(file, import.meta.url))));

const html = await readFile(new URL("index.html", import.meta.url), "utf8");
for (const file of required.filter((file) => !file.endsWith("index.html"))) {
  if (!html.includes(`./${file}`) && !file.startsWith("brand-brain-preview/")) {
    throw new Error(`index.html does not reference ${file}`);
  }
}

const app = await readFile(new URL("app-4.js", import.meta.url), "utf8");
if (!app.includes('./brand-brain-preview/?embedded=1')) {
  throw new Error("Brand Brain is not self-contained inside this preview");
}

const icons = await readFile(new URL("icons.js", import.meta.url), "utf8");
if (!icons.includes("node.dataset.bsIcon === key")) {
  throw new Error("Icon observer must guard against self-triggered redraw loops");
}

console.log(`Validated ${required.length} preview assets.`);
