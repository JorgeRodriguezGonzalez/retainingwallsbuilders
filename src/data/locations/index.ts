import type { LocationPageData } from "@/types/location";
import { easternSuburbs } from "./eastern-suburbs";

export const locations: LocationPageData[] = [easternSuburbs];

export const locationRoutes = locations.map((location) => ({
  slug: location.slug,
  path: `/${location.slug}/`,
  data: location,
}));

export const getLocationBySlug = (slug: string) =>
  locations.find((location) => location.slug === slug);
