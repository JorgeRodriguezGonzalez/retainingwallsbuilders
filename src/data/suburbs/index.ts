import type { SuburbPageData } from "@/types/suburb";
import { lowerNorthShoreSuburbs } from "./lower-north-shore";

/**
 * Cloud Agents factory - suburb hub records for location pages.
 * Keep paths at the site root, for example /northern-beaches/.
 */
export const suburbs: SuburbPageData[] = [
  ...lowerNorthShoreSuburbs,
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
