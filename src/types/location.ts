// src/types/location.ts

export interface LocationSEO {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
}

export interface LocationHeroStat {
  value: string;
  label: string;
}

export interface LocationIntro {
  eyebrow?: string;
  heading: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
  checklist?: string[];
}

export interface LocationBenefit {
  title: string;
  description: string;
}

export interface LocationProcessStep {
  title: string;
  description: string;
}

export interface LocationContentSection {
  eyebrow?: string;
  heading: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
  items?: string[];
}

export interface LocationFAQ {
  question: string;
  answer: string;
}

export interface LocationCTA {
  eyebrow?: string;
  heading: string;
  text: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export interface LocationSchema {
  serviceType: string;
  areaServed: string;
  description: string;
  provider: string;
}

export interface LocationPageData {
  slug: string;

  /**
   * Short label for navigation menus (e.g. "Sutherland Shire" instead of
   * "Retaining Wall Builders in Sutherland Shire"). Optional for suburbs.
   */
  navLabel?: string;

  /**
   * Optional list of child suburb slugs for area pages.
   * Used by LocationTemplate to render links to child suburb pages.
   */
  childSuburbSlugs?: string[];

  seo: LocationSEO;

  hero: {
    eyebrow?: string;
    title: string;
    description: string;
    backgroundImage: string;
    backgroundAlt: string;
    primaryCtaLabel: string;
    primaryCtaHref: string;
    secondaryCtaLabel?: string;
    secondaryCtaHref?: string;
    stats?: LocationHeroStat[];
  };

  intro: LocationIntro;

  benefits?: {
    eyebrow?: string;
    heading: string;
    items: LocationBenefit[];
  };

  process?: {
    eyebrow?: string;
    heading: string;
    image: string;
    imageAlt: string;
    steps: LocationProcessStep[];
  };

  sections?: LocationContentSection[];

  faq?: {
    eyebrow?: string;
    heading: string;
    items: LocationFAQ[];
  };

  cta?: LocationCTA;

  schema?: LocationSchema;
}