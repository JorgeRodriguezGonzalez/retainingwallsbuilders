import type { SuburbPageData } from "@/types/suburb";
import { sutherlandShireSuburbs } from "./sutherland-shire";
import { hillsDistrictSuburbs } from "./hills-district";
import { upperNorthShoreSuburbs } from "./upper-north-shore";
import { northernBeachesSuburbs } from "./northern-beaches";

/**
 * Cloud Agents factory, not OpenClaw.
 * Keep paths at the site root, for example /northern-beaches/.
 */
export const suburbs: SuburbPageData[] = [
  ...sutherlandShireSuburbs,
  ...hillsDistrictSuburbs,
  ...upperNorthShoreSuburbs,
  ...northernBeachesSuburbs,
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
