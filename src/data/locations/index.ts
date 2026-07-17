import type { LocationPageData } from "@/types/location";
import { hunterValleyAreas } from "./hunter-valley-areas";

export const locations: LocationPageData[] = hunterValleyAreas;

export const locationRoutes = locations.map((location) => ({
  slug: location.slug,
  path: `/${location.slug}/`,
  data: location,
}));

export const getLocationBySlug = (slug: string) =>
  locations.find((location) => location.slug === slug);
