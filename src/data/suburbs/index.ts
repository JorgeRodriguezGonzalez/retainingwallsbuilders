import type { SuburbPageData } from "@/types/suburb";

import { upperNorthShoreSuburbs } from "./upper-north-shore";

/**
 * Cloud Agents factory writes generated suburb hub records into this collection.
 * Keep paths at the site root, for example /northern-beaches/.
 */
export const suburbs: SuburbPageData[] = [
  ...upperNorthShoreSuburbs,
];

export const suburbRoutes = suburbs.map((suburb) => ({
  slug: suburb.slug,
  path: `/${suburb.slug.replace(/^\/+|\/+$/g, "")}/`,
  data: suburb,
}));

export const getSuburbBySlug = (slug: string) =>
  suburbs.find((suburb) => suburb.slug.replace(/^\/+|\/+$/g, "") === slug);

/**
 * Returns all suburbs belonging to a given parent area.
 * Used by LocationTemplate to list child suburb links on area pages.
 */
export const getSuburbsByParentArea = (areaSlug: string): SuburbPageData[] =>
  suburbs.filter((suburb) => suburb.parentArea === areaSlug);
