import { Helmet } from "@/lib/helmet";
import {
  SITE_NAME,
  SITE_URL,
  absoluteAssetUrl,
  canonicalUrl,
  createBreadcrumbSchema,
  normaliseJsonLd,
  type JsonLd,
} from "@/lib/seo";

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  schema?: JsonLd | JsonLd[];
}

const SEO = ({ title, description, canonical, ogImage, schema }: SEOProps) => {
  const resolvedCanonical = canonicalUrl(canonical);
  const resolvedImage = absoluteAssetUrl(ogImage);
  const suppliedSchemas = schema ? (Array.isArray(schema) ? schema : [schema]) : [];
  const hasBreadcrumbSchema = suppliedSchemas.some((schemaItem) => {
    const schemaType = schemaItem["@type"];
    return (
      schemaType === "BreadcrumbList" ||
      (Array.isArray(schemaType) && schemaType.includes("BreadcrumbList"))
    );
  });
  const isHomePage = new URL(resolvedCanonical).pathname === "/";
  const schemas =
    !isHomePage && !hasBreadcrumbSchema
      ? [
          ...suppliedSchemas,
          createBreadcrumbSchema([
            { name: "Home", url: `${SITE_URL}/` },
            {
              name: title.split("|")[0].trim(),
              url: resolvedCanonical,
            },
          ]),
        ]
      : suppliedSchemas;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={resolvedCanonical} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={resolvedCanonical} />
      <meta property="og:image" content={resolvedImage} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={resolvedImage} />

      {schemas.map((schemaItem, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(normaliseJsonLd(schemaItem)).replace(
            /</g,
            "\\u003c"
          )}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
