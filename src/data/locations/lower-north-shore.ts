import { business } from "@/data/business";
import type { LocationPageData } from "@/types/location";

const areaName = "Lower North Shore";
const areaSlug = "lower-north-shore";
const canonical = `${business.url}/${areaSlug}/`;

export const lowerNorthShoreLocation: LocationPageData = {
  slug: areaSlug,
  childSuburbSlugs: [
    "mosman",
    "cremorne",
    "northbridge",
    "cammeray",
    "willoughby",
    "naremburn",
  ],
  seo: {
    title: `Retaining Walls ${areaName} | ${business.name}`,
    description: `Professional retaining wall construction across the ${areaName}. Sandstone, concrete and engineered walls for harbour-facing blocks, steep access and premium properties. Contact ${business.name}.`,
    canonical,
    ogImage: business.brand.assets.ogImage,
  },
  hero: {
    eyebrow: `${areaName} Retaining Walls`,
    title: `Retaining Walls ${areaName}`,
    description: `Retaining wall construction for harbour-facing slopes, premium properties and challenging access across the ${areaName}. From Mosman to Naremburn, we build sandstone, concrete and engineered walls suited to Sydney sandstone terrain and steep blocks with water views.`,
    backgroundImage: "/images/home-hero.webp",
    backgroundAlt: `Retaining wall construction across the ${areaName}`,
    primaryCtaLabel: "Request a Quote",
    primaryCtaHref: "/contact-us/",
    secondaryCtaLabel: business.contact.phoneDisplay,
    secondaryCtaHref: business.contact.phoneHref,
    stats: [
      { value: "6", label: "Suburbs covered" },
      { value: "Sandstone", label: "Local rock expertise" },
      { value: "Steep", label: "Harbour-facing blocks" },
      { value: "Premium", label: "Property standards" },
    ],
  },
  intro: {
    eyebrow: "Local Expertise",
    heading: `Retaining walls built for ${areaName} conditions`,
    paragraphs: [
      `The ${areaName} presents distinct challenges for retaining wall construction. Blocks slope steeply toward the harbour, often with exposed Sydney sandstone, established gardens and premium homes requiring walls that perform structurally while respecting the streetscape.`,
      `We work across Mosman, Cremorne, Northbridge, Cammeray, Willoughby and Naremburn, constructing sandstone, concrete sleeper, rendered concrete and engineered walls. Each site is assessed for drainage, rock conditions, access constraints and the structural requirements of harbour-facing terrain.`,
    ],
    image: "/images/services04.webp",
    imageAlt: `Retaining wall suited to ${areaName} sandstone terrain`,
    checklist: [
      "Sandstone and natural stone walls",
      "Concrete and rendered finishes",
      "Steep block and terracing solutions",
      "Harbour-view property experience",
    ],
  },
  benefits: {
    eyebrow: "Why Local Knowledge Matters",
    heading: `Building walls that suit ${areaName} properties`,
    items: [
      {
        title: "Sydney sandstone conditions",
        description:
          "The Lower North Shore sits on Sydney sandstone. We assess rock depth, drainage paths and excavation requirements before recommending a wall system.",
      },
      {
        title: "Steep harbour-facing blocks",
        description:
          "Many properties slope sharply toward the water. We design terraced walls, stepped retaining systems and access-friendly structures for challenging grades.",
      },
      {
        title: "Premium streetscape standards",
        description:
          "Heritage overlays and neighbourhood expectations require walls that integrate with established gardens, sandstone fencing and period architecture.",
      },
      {
        title: "Difficult access solutions",
        description:
          "Narrow lanes, steep driveways and limited machinery access are common. We plan construction logistics to minimise disruption to the property and neighbours.",
      },
    ],
  },
  process: {
    eyebrow: "Our Approach",
    heading: "From enquiry to completed wall",
    image: "/images/contact-workers.webp",
    imageAlt: `${business.name} team preparing a ${areaName} retaining wall project`,
    steps: [
      {
        title: "Initial discussion",
        description:
          "Share your suburb, the wall location, approximate height and any site photos. We confirm whether the project suits our scope.",
      },
      {
        title: "Site assessment",
        description:
          "We inspect drainage, rock conditions, access, boundary setbacks and load requirements to determine the most practical wall system.",
      },
      {
        title: "Recommendation and quote",
        description:
          "You receive a clear scope covering materials, construction method, drainage provisions and any engineering or council considerations.",
      },
      {
        title: "Construction and completion",
        description:
          "The wall is built with attention to backfill, drainage and site restoration. We coordinate access and timing to minimise impact on your property.",
      },
    ],
  },
  sections: [
    {
      eyebrow: "Terrain and Materials",
      heading: "Walls suited to harbour-side slopes",
      paragraphs: [
        `The ${areaName} runs from the harbour foreshore up to ridge-top suburbs, with many blocks dropping steeply toward the water. Retaining walls here must handle significant height changes, manage stormwater from above and integrate with established landscaping.`,
        `Sandstone walls suit heritage properties and complement the local rock. Concrete sleeper and rendered walls offer clean lines for contemporary homes. We match the wall system to the site conditions, structural load and visual expectations of each property.`,
      ],
      image: "/images/services03.webp",
      imageAlt: "Concrete retaining wall on a sloped Lower North Shore block",
      imagePosition: "left",
      items: [
        "Natural sandstone construction",
        "Concrete sleeper systems",
        "Rendered and poured concrete",
        "Terraced multi-level walls",
      ],
    },
  ],
  faq: {
    eyebrow: "Common Questions",
    heading: `${areaName} Retaining Wall FAQs`,
    items: [
      {
        question: `Which suburbs do you cover in the ${areaName}?`,
        answer: `We service Mosman, Cremorne, Northbridge, Cammeray, Willoughby and Naremburn across the ${areaName}.`,
      },
      {
        question: "Can you build sandstone retaining walls?",
        answer:
          "Yes. Sandstone suits many Lower North Shore properties, particularly those with heritage considerations or existing sandstone features. We source quality blocks and construct dry-stack or mortared walls as appropriate.",
      },
      {
        question: "How do you handle steep blocks with limited access?",
        answer:
          "We assess access routes, plan material delivery and select equipment suited to tight spaces. For very restricted sites, we may use smaller machinery or hand-build sections where necessary.",
      },
      {
        question: "Do I need council approval for a retaining wall?",
        answer:
          "In NSW, walls over 600mm typically require development approval. Properties in heritage conservation areas or near boundaries may have additional requirements. We can advise on the likely approval pathway for your suburb.",
      },
      {
        question: "How do I request a quote?",
        answer: `Call ${business.contact.phoneDisplay} or complete the contact form with your suburb, wall location and any photos that help explain the site.`,
      },
    ],
  },
  cta: {
    eyebrow: "Start Your Project",
    heading: `Discuss your ${areaName} retaining wall`,
    text: `Contact ${business.name} to talk through your site, wall requirements and the next practical step.`,
    primaryLabel: "Request a Quote",
    primaryHref: "/contact-us/",
    secondaryLabel: business.contact.phoneDisplay,
    secondaryHref: business.contact.phoneHref,
  },
  schema: {
    serviceType: "Retaining Wall Construction",
    areaServed: `${areaName}, Sydney, NSW`,
    description: `Professional retaining wall construction across the ${areaName}, including sandstone, concrete and engineered walls for harbour-facing properties and steep terrain.`,
    provider: business.name,
  },
};
