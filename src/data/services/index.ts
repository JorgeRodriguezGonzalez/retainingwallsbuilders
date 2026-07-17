import type { ServicePageData } from "@/types/service";
import { additionalRoofingServices } from "./additional-roofing-services";

export const services: ServicePageData[] = additionalRoofingServices;

export const serviceRoutes = services.map((service) => ({
  slug: service.slug,
  path: `/${service.slug}/`,
  data: service,
}));

export const getServiceBySlug = (slug: string) =>
  services.find((service) => service.slug === slug);
