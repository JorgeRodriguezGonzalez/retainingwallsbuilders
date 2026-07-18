import type { ServiceInSuburbPageData } from "@/types/service-in-suburb";

/**
 * OpenClaw writes generated service-and-suburb landing pages here.
 * Slugs must be unique across every root-level dynamic collection.
 */
export const serviceInSuburbs: ServiceInSuburbPageData[] = [];

export const serviceInSuburbRoutes = serviceInSuburbs.map((page) => ({
  slug: page.slug,
  path: `/${page.slug.replace(/^\/+|\/+$/g, "")}/`,
  data: page,
}));

export const getServiceInSuburbBySlug = (slug: string) =>
  serviceInSuburbs.find(
    (page) => page.slug.replace(/^\/+|\/+$/g, "") === slug
  );
