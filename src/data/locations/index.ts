import type { LocationPageData } from "@/types/location";
import { sutherlandShire } from "./sutherland-shire";
import { hillsDistrictLocation } from "./hills-district";
import { upperNorthShoreLocation } from "./upper-north-shore";
import { northernBeachesLocation } from "./northern-beaches";
import { lowerNorthShoreLocation } from "./lower-north-shore";
import { easternSuburbs } from "./eastern-suburbs";

export const locations: LocationPageData[] = [
  sutherlandShire,
  hillsDistrictLocation,
  upperNorthShoreLocation,
  northernBeachesLocation,
  lowerNorthShoreLocation,
  easternSuburbs,
];

export const locationRoutes = locations.map((location) => ({
  slug: location.slug,
  path: `/${location.slug}/`,
  data: location,
}));

export const getLocationBySlug = (slug: string) =>
  locations.find((location) => location.slug === slug);
