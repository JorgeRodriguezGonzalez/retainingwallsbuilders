import type { SuburbPageData } from "@/types/suburb";

/**
 * OpenClaw writes generated suburb hub records into this collection.
 * Keep paths at the site root, for example /northern-beaches/.
 */
export const suburbs: SuburbPageData[] = [];

export const suburbRoutes = suburbs.map((suburb) => ({
  slug: suburb.slug,
  path: `/${suburb.slug.replace(/^\/+|\/+$/g, "")}/`,
  data: suburb,
}));

export const getSuburbBySlug = (slug: string) =>
  suburbs.find((suburb) => suburb.slug.replace(/^\/+|\/+$/g, "") === slug);
