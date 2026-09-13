import type { LocationPageData } from "@/types/location";

import { northernBeachesLocation } from "./northern-beaches";

export const locations: LocationPageData[] = [northernBeachesLocation];

export const locationRoutes = locations.map((location) => ({
  slug: location.slug,
  path: `/${location.slug}/`,
  data: location,
}));

export const getLocationBySlug = (slug: string) =>
  locations.find((location) => location.slug === slug);
