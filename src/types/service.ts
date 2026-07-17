// src/types/service.ts

export interface ServiceSEO {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
}

export interface ServiceHeroStat {
  value: string;
  label: string;
}

export interface ServiceIntro {
  eyebrow?: string;
  heading: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
  checklist?: string[];
}

export interface ServiceBenefit {
  title: string;
  description: string;
}

export interface ServiceProcessStep {
  title: string;
  description: string;
}

export interface ServiceContentSection {
  eyebrow?: string;
  heading: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
  items?: string[];
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceCTA {
  eyebrow?: string;
  heading: string;
  text: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export interface ServiceSchema {
  serviceType: string;
  areaServed: string;
  description: string;
  provider: string;
}

export interface ServicePageData {
  slug: string;

  seo: ServiceSEO;

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
    stats?: ServiceHeroStat[];
  };

  intro: ServiceIntro;

  benefits?: {
    eyebrow?: string;
    heading: string;
    items: ServiceBenefit[];
  };

  process?: {
    eyebrow?: string;
    heading: string;
    image: string;
    imageAlt: string;
    steps: ServiceProcessStep[];
  };

  sections?: ServiceContentSection[];

  faq?: {
    eyebrow?: string;
    heading: string;
    items: ServiceFAQ[];
  };

  cta?: ServiceCTA;

  schema?: ServiceSchema;
}