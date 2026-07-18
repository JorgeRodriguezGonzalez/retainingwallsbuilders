import type { GuidePageData } from "@/types/guide";

/**
 * OpenClaw writes evergreen root-level guide pages into this collection.
 * The explicit path field remains the canonical routing source.
 */
export const guides: GuidePageData[] = [];

export const guideRoutes = guides.map((guide) => ({
  slug: guide.slug,
  path: guide.path,
  data: guide,
}));

export const getGuideBySlug = (slug: string) =>
  guides.find((guide) => guide.slug.replace(/^\/+|\/+$/g, "") === slug);
