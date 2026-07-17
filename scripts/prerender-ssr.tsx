import React from "react";
import { PassThrough } from "node:stream";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { renderToPipeableStream } from "react-dom/server";
import type { HelmetServerState } from "../src/lib/helmet";

const reactGlobal = globalThis as typeof globalThis & { React?: typeof React };
reactGlobal.React = React;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const distDir = path.join(projectRoot, "dist");
const templatePath = path.join(distDir, "index.html");

const [
  { default: App },
  { HelmetProvider },
  { services },
  { locations },
  { blogPosts },
] = await Promise.all([
  import("../src/App"),
  import("../src/lib/helmet"),
  import("../src/data/services/index"),
  import("../src/data/locations/index"),
  import("../src/data/blog/index"),
]);

const staticRoutes = [
  "/",
  "/about-us",
  "/contact-us",
  "/contact-us/thank-you",
  "/areas",
  "/services",
  "/privacy-policy",
  "/faqs",
  "/blog/",
];

function normalizeRoute(route: string): string {
  if (route === "/") return route;

  return `/${route.replace(/^\/+|\/+$/g, "")}/`;
}

const routes = Array.from(
  new Set(
    [
      ...staticRoutes,
      ...services.map((service) => `/${service.slug}/`),
      ...locations.map((location) => `/${location.slug}/`),
      ...blogPosts.map((post) => post.path),
    ].map(normalizeRoute)
  )
);

type HelmetContext = {
  helmet?: HelmetServerState;
};

type RenderResult = {
  markup: string;
  helmet?: HelmetServerState;
};

function renderRoute(route: string): Promise<RenderResult> {
  return new Promise((resolve, reject) => {
    const helmetContext: HelmetContext = {};
    const output = new PassThrough();
    let markup = "";
    let renderError: unknown;

    output.setEncoding("utf8");
    output.on("data", (chunk: string) => {
      markup += chunk;
    });
    output.on("error", reject);
    output.on("end", () => {
      if (renderError) {
        reject(renderError);
        return;
      }

      resolve({ markup, helmet: helmetContext.helmet });
    });

    const { pipe, abort } = renderToPipeableStream(
      <HelmetProvider context={helmetContext}>
        <App ssrPath={route} />
      </HelmetProvider>,
      {
        onAllReady() {
          clearTimeout(timeout);
          pipe(output);
        },
        onShellError(error) {
          clearTimeout(timeout);
          reject(error);
        },
        onError(error) {
          renderError = error;
        },
      }
    );

    const timeout = setTimeout(() => {
      abort();
      reject(new Error(`SSR timed out for ${route}`));
    }, 30_000);
  });
}

function helmetToHead(helmet?: HelmetServerState): string {
  if (!helmet) return "";

  return [
    helmet.title.toString(),
    helmet.base.toString(),
    helmet.meta.toString(),
    helmet.link.toString(),
    helmet.style.toString(),
    helmet.script.toString(),
    helmet.noscript.toString(),
  ]
    .filter(Boolean)
    .join("\n    ");
}

function applyHelmetAttributes(
  html: string,
  tagName: "html" | "body",
  attributes: string
): string {
  if (!attributes) return html;

  return html.replace(
    new RegExp(`<${tagName}([^>]*)>`, "i"),
    `<${tagName}$1 ${attributes}>`
  );
}

function buildDocument(
  template: string,
  markup: string,
  helmet?: HelmetServerState
): string {
  if (!template.includes('<div id="root"></div>')) {
    throw new Error('Could not find <div id="root"></div> in dist/index.html');
  }

  const head = helmetToHead(helmet);
  let html = template
    .replace(/\s*<title\b[^>]*>[\s\S]*?<\/title>/gi, "")
    .replace('<div id="root"></div>', `<div id="root">${markup}</div>`)
    .replace("</head>", `${head ? `\n    ${head}` : ""}\n  </head>`);

  if (helmet) {
    html = applyHelmetAttributes(
      html,
      "html",
      helmet.htmlAttributes.toString()
    );
    html = applyHelmetAttributes(
      html,
      "body",
      helmet.bodyAttributes.toString()
    );
  }

  return html;
}

function outputPathForRoute(route: string): string {
  if (route === "/") return templatePath;

  const routeDirectory = route.replace(/^\/+|\/+$/g, "");
  return path.join(distDir, routeDirectory, "index.html");
}

const template = await readFile(templatePath, "utf8");
let successCount = 0;
let failureCount = 0;

for (const route of routes) {
  try {
    const { markup, helmet } = await renderRoute(route);
    const html = buildDocument(template, markup, helmet);
    const outputPath = outputPathForRoute(route);

    await mkdir(path.dirname(outputPath), { recursive: true });
    await writeFile(outputPath, html, "utf8");

    successCount += 1;
    const sizeKb = (Buffer.byteLength(html) / 1024).toFixed(1);
    console.log(`✓ ${route} -> ${path.relative(projectRoot, outputPath)} (${sizeKb} KB)`);
  } catch (error) {
    failureCount += 1;
    console.error(`✗ ${route}`, error);
  }
}

console.log(
  `\nSSR prerender complete: ${successCount} succeeded, ${failureCount} failed.`
);

if (failureCount > 0) {
  process.exitCode = 1;
}
