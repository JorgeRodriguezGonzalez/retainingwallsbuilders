import type { ServicePageData } from "@/types/service";
import { retainingWallsServices } from "./retaining-walls-services";

export const services: ServicePageData[] = retainingWallsServices;

export const serviceRoutes = services.map((service) => ({
  slug: service.slug,
  path: `/${service.slug}/`,
  data: service,
}));

export const getServiceBySlug = (slug: string) =>
  services.find((service) => service.slug === slug);
