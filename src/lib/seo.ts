import { business } from "@/data/business";

export type JsonLd = Record<string, unknown>;

export const SITE_URL = business.url;
export const SITE_NAME = business.name;
export const BRAND_LOGO_URL = `${SITE_URL}${business.brand.assets.headerLogo}`;
export const DEFAULT_OG_IMAGE = `${SITE_URL}${business.brand.assets.ogImage}`;
export const BUSINESS_ID = `${SITE_URL}/#localbusiness`;
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;

const PAGE_URL_KEYS = new Set([
  "url",
  "item",
  "mainEntityOfPage",
  "@id",
]);

const hasFileExtension = (pathname: string) => /\.[a-z0-9]{2,8}$/i.test(pathname);

const withTrailingSlash = (pathname: string) => {
  if (pathname === "/" || pathname.endsWith("/") || hasFileExtension(pathname)) {
    return pathname;
  }

  return `${pathname}/`;
};

export const canonicalUrl = (input: string) => {
  const parsed = new URL(input || "/", SITE_URL);
  const pathname = withTrailingSlash(
    `/${parsed.pathname}`.replace(/\/{2,}/g, "/")
  );

  return `${SITE_URL}${pathname}`;
};

export const absoluteAssetUrl = (input?: string) => {
  if (!input) return DEFAULT_OG_IMAGE;

  const parsed = new URL(input, SITE_URL);
  const isPreviewHost = parsed.hostname.endsWith(".netlify.app");

  if (parsed.origin === SITE_URL || isPreviewHost) {
    return `${SITE_URL}${parsed.pathname}`;
  }

  return parsed.toString();
};

export const createBreadcrumbSchema = (
  items: Array<{ name: string; url: string }>
): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: canonicalUrl(item.url),
  })),
});

export const createFaqSchema = (
  items: Array<{ question: string; answer: string }>
): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
});

export const roofingProvider = (): JsonLd => ({
  "@type": "RoofingContractor",
  "@id": BUSINESS_ID,
  name: business.name,
  url: `${business.url}/`,
  telephone: business.contact.phoneSchema,
  ...(business.contact.email ? { email: business.contact.email } : {}),
  areaServed: {
    "@type": "AdministrativeArea",
    name: business.legalArea,
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address.streetAddress,
    addressLocality: business.address.locality,
    addressRegion: business.address.region,
    postalCode: business.address.postalCode,
    addressCountry: business.address.country,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: business.hours.schemaDays,
    opens: business.hours.schemaOpens,
    closes: business.hours.schemaCloses,
  },
  ...(business.social.sameAs.length > 0
    ? { sameAs: business.social.sameAs }
    : {}),
});

const normaliseSchemaString = (value: string, key?: string) => {
  if (!/^https?:\/\//i.test(value) || key === "@context") return value;

  const parsed = new URL(value);
  const isPreviewHost = parsed.hostname.endsWith(".netlify.app");

  if (parsed.origin !== SITE_URL && !isPreviewHost) return value;

  const productionUrl = `${SITE_URL}${parsed.pathname}`;
  return PAGE_URL_KEYS.has(key || "")
    ? canonicalUrl(productionUrl)
    : productionUrl;
};

export const normaliseJsonLd = (value: unknown, key?: string): unknown => {
  if (Array.isArray(value)) {
    return value.map((item) => normaliseJsonLd(item));
  }

  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([entryKey, entryValue]) => [
        entryKey,
        normaliseJsonLd(entryValue, entryKey),
      ])
    );
  }

  if (typeof value === "string") {
    return normaliseSchemaString(value, key);
  }

  return value;
};
