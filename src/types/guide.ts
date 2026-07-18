import type { BlogPostData } from "@/types/blog";

/**
 * Evergreen root-level guide generated independently from dated blog posts.
 * It uses the established long-form article structure while remaining a
 * separate collection for routing, prerendering and sitemap controls.
 */
export interface GuidePageData extends BlogPostData {}
