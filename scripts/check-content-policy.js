import fs from "node:fs";
import path from "node:path";
import ts from "typescript";

const PROJECT_ROOT = process.cwd();
const SOURCE_ROOT = path.join(PROJECT_ROOT, "src");
const SOURCE_EXTENSIONS = new Set([".ts", ".tsx"]);

const FORBIDDEN_TERMS = [
  "warranty",
  "warranties",
  "guarantee",
  "guaranteed",
  "guarantees",
  "lifetime",
  "assured",
  "assurance",
];

const US_ENGLISH_TERMS = [
  "color",
  "colors",
  "colored",
  "coloring",
  "center",
  "centers",
  "centered",
  "centering",
  "neighbor",
  "neighbors",
  "neighborhood",
  "neighborhoods",
  "organize",
  "organized",
  "organizes",
  "organizing",
  "organization",
  "organizations",
  "optimize",
  "optimized",
  "optimizes",
  "optimizing",
  "specialize",
  "specialized",
  "specializes",
  "specializing",
  "labor",
  "favorite",
  "favorites",
  "customize",
  "customized",
  "customizes",
  "customizing",
  "recognize",
  "recognized",
  "recognizes",
  "recognizing",
  "behavior",
  "behaviors",
  "defense",
  "offense",
  "gray",
  "program",
  "programs",
  "specialty",
  "specialties",
  "prioritize",
  "prioritized",
  "prioritizes",
  "prioritizing",
  "minimize",
  "minimized",
  "minimizes",
  "minimizing",
  "maximize",
  "maximized",
  "maximizes",
  "maximizing",
  "utilize",
  "utilized",
  "utilizes",
  "utilizing",
];

const IGNORED_JSX_ATTRIBUTES = new Set([
  "className",
  "style",
  "align",
  "side",
  "variant",
  "size",
  "type",
  "id",
  "href",
  "to",
  "src",
]);

const IGNORED_PROPERTY_NAMES = new Set([
  "className",
  "style",
  "path",
  "href",
  "to",
  "src",
  "slug",
  "canonical",
  "ogImage",
  "image",
  "imageUrl",
  "icon",
  "logo",
  "url",
  "phoneHref",
  "emailHref",
  "id",
  "@type",
  "datePublished",
  "dateModified",
  "uploadDate",
  "contentUrl",
  "embedUrl",
  "type",
  "color",
  "backgroundColor",
  "theme",
]);

const TECHNICAL_VALUES = new Set([
  "center",
  "left",
  "right",
  "top",
  "bottom",
  "default",
  "primary",
  "secondary",
  "outline",
  "ghost",
  "destructive",
]);

const forbiddenPattern = new RegExp(
  `\\b(?:${FORBIDDEN_TERMS.join("|")})\\b`,
  "i",
);
const usEnglishPattern = new RegExp(
  `\\b(?:${US_ENGLISH_TERMS.join("|")})\\b`,
  "i",
);

const violations = [];

function collectSourceFiles(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const filePath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      return collectSourceFiles(filePath);
    }

    return SOURCE_EXTENSIONS.has(path.extname(entry.name)) ? [filePath] : [];
  });
}

function getPropertyName(node) {
  const parent = node.parent;

  if (ts.isPropertyAssignment(parent) && parent.initializer === node) {
    if (ts.isIdentifier(parent.name) || ts.isStringLiteral(parent.name)) {
      return parent.name.text;
    }
  }

  if (ts.isJsxAttribute(parent) && parent.initializer === node) {
    return parent.name.text;
  }

  return null;
}

function getEnclosingJsxAttributeName(node) {
  let current = node.parent;

  while (current) {
    if (ts.isJsxAttribute(current)) {
      return current.name.text;
    }

    if (
      ts.isSourceFile(current) ||
      ts.isJsxElement(current) ||
      ts.isJsxSelfClosingElement(current)
    ) {
      return null;
    }

    current = current.parent;
  }

  return null;
}

function isTechnicalLiteral(node, value) {
  const parent = node.parent;

  if (
    ts.isImportDeclaration(parent) ||
    ts.isExportDeclaration(parent) ||
    ts.isExternalModuleReference(parent)
  ) {
    return true;
  }

  const jsxAttribute = getEnclosingJsxAttributeName(node);
  if (jsxAttribute && IGNORED_JSX_ATTRIBUTES.has(jsxAttribute)) {
    return true;
  }

  const propertyName = getPropertyName(node);
  if (propertyName && IGNORED_PROPERTY_NAMES.has(propertyName)) {
    return true;
  }

  const trimmed = value.trim();

  if (TECHNICAL_VALUES.has(trimmed)) {
    return true;
  }

  if (
    /^(?:https?:|mailto:|tel:|\/|#|\.)/i.test(trimmed) ||
    /^[\w-]+\.(?:webp|png|jpe?g|svg|ico)$/i.test(trimmed)
  ) {
    return true;
  }

  return false;
}

function report(sourceFile, node, rule, value) {
  const position = sourceFile.getLineAndCharacterOfPosition(
    node.getStart(sourceFile),
  );

  violations.push({
    file: path.relative(PROJECT_ROOT, sourceFile.fileName),
    line: position.line + 1,
    column: position.character + 1,
    rule,
    value: value.replace(/\s+/g, " ").trim().slice(0, 180),
  });
}

function inspectLiteral(sourceFile, node, value) {
  if (!value || isTechnicalLiteral(node, value)) {
    return;
  }

  if (forbiddenPattern.test(value)) {
    report(sourceFile, node, "restricted wording", value);
  }

  if (usEnglishPattern.test(value)) {
    report(sourceFile, node, "US English", value);
  }

  if (value.includes("'")) {
    report(sourceFile, node, "straight apostrophe in content", value);
  }
}

for (const filePath of collectSourceFiles(SOURCE_ROOT)) {
  const sourceText = fs.readFileSync(filePath, "utf8");
  const scriptKind = filePath.endsWith(".tsx")
    ? ts.ScriptKind.TSX
    : ts.ScriptKind.TS;
  const sourceFile = ts.createSourceFile(
    filePath,
    sourceText,
    ts.ScriptTarget.Latest,
    true,
    scriptKind,
  );

  if (sourceText.includes("—")) {
    const offset = sourceText.indexOf("—");
    const position = sourceFile.getLineAndCharacterOfPosition(offset);
    violations.push({
      file: path.relative(PROJECT_ROOT, filePath),
      line: position.line + 1,
      column: position.character + 1,
      rule: "em dash",
      value: "Replace the em dash with punctuation that is safe for generated content.",
    });
  }

  if (sourceText.includes("\\'")) {
    const offset = sourceText.indexOf("\\'");
    const position = sourceFile.getLineAndCharacterOfPosition(offset);
    violations.push({
      file: path.relative(PROJECT_ROOT, filePath),
      line: position.line + 1,
      column: position.character + 1,
      rule: "escaped straight apostrophe",
      value: "Use a typographic apostrophe in user-facing content.",
    });
  }

  const isGenericUiPrimitive = path
    .relative(SOURCE_ROOT, filePath)
    .startsWith(`components${path.sep}ui${path.sep}`);

  if (isGenericUiPrimitive) {
    continue;
  }

  function visit(node) {
    if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) {
      inspectLiteral(sourceFile, node, node.text);
    } else if (
      ts.isTemplateHead(node) ||
      ts.isTemplateMiddle(node) ||
      ts.isTemplateTail(node)
    ) {
      inspectLiteral(sourceFile, node, node.text);
    } else if (ts.isJsxText(node)) {
      inspectLiteral(sourceFile, node, node.getText(sourceFile));
    }

    ts.forEachChild(node, visit);
  }

  visit(sourceFile);
}

if (violations.length > 0) {
  console.error(`Content policy check failed with ${violations.length} issue(s):`);

  for (const violation of violations) {
    console.error(
      `- ${violation.file}:${violation.line}:${violation.column} ` +
        `[${violation.rule}] ${violation.value}`,
    );
  }

  process.exit(1);
}

console.log(
  `Content policy check passed for ${collectSourceFiles(SOURCE_ROOT).length} source files.`,
);
