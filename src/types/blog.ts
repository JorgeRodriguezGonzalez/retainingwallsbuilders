export type BlogCategory =
  | 'Roof Repairs'
  | 'Roof Restoration'
  | 'Roof Maintenance'
  | 'Local Roofing Guides';

export interface BlogIndexCard {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: BlogCategory;
}

export interface BlogTOCItem {
  id: string;
  label: string;
}

export interface BlogSection {
  id: string;
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  callout?: string;
}

export interface BlogFAQItem {
  question: string;
  answer: string;
}

export interface BlogPostData {
  slug: string;
  path: string;
  title: string;
  description: string;
  excerpt: string;
  category: BlogCategory;
  date: string;
  readTime: string;
  image: string;
  imageAlt: string;
  seo: {
    title: string;
    description: string;
    canonical: string;
    ogImage?: string;
  };
  hero: {
    eyebrow: string;
    kicker?: string;
  };
  intro: string;
  tableOfContents: BlogTOCItem[];
  sections: BlogSection[];
  faq?: BlogFAQItem[];
  sidebar: {
    searchPlaceholder?: string;
    usefulLinks: Array<{
      label: string;
      href: string;
    }>;
  };
  relatedPosts?: string[];
}