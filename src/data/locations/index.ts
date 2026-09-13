import type { LocationPageData } from "@/types/location";

import { hillsDistrictLocation } from "./hills-district";

export const locations: LocationPageData[] = [
  hillsDistrictLocation,
];

export const locationRoutes = locations.map((location) => ({
  slug: location.slug,
  path: `/${location.slug}/`,
  data: location,
}));

export const getLocationBySlug = (slug: string) =>
  locations.find((location) => location.slug === slug);
