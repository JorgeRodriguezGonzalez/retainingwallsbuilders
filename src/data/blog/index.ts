import type { BlogPostData } from "@/types/blog";

export const blogPosts: BlogPostData[] = [];

export const blogRoutes = blogPosts.map((post) => ({
  slug: post.slug,
  path: post.path,
  data: post,
}));

export const getBlogPostBySlug = (slug: string) =>
  blogPosts.find((post) => post.slug === slug);
