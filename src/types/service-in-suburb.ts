import type { ServicePageData } from "@/types/service";

/**
 * Root-level landing page targeting one roofing service in one suburb.
 * serviceSlug and suburbSlug provide stable relationships for generators,
 * internal linking and future validation without affecting the page template.
 */
export interface ServiceInSuburbPageData extends ServicePageData {
  serviceSlug: string;
  suburbSlug: string;
}
