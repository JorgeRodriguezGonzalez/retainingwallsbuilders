import type { BlogPostData } from "@/types/blog";
import { hunterValleyRoofingPosts } from "./hunter-valley-roofing-guides";

export const blogPosts: BlogPostData[] = hunterValleyRoofingPosts;

export const blogRoutes = blogPosts.map((post) => ({
  slug: post.slug,
  path: post.path,
  data: post,
}));

export const getBlogPostBySlug = (slug: string) =>
  blogPosts.find((post) => post.slug === slug);
