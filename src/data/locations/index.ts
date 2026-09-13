import type { LocationPageData } from "@/types/location";

import { upperNorthShoreLocation } from "./upper-north-shore";

export const locations: LocationPageData[] = [
  upperNorthShoreLocation,
];

export const locationRoutes = locations.map((location) => ({
  slug: location.slug,
  path: `/${location.slug}/`,
  data: location,
}));

export const getLocationBySlug = (slug: string) =>
  locations.find((location) => location.slug === slug);
