import type { LocationPageData } from "@/types/location";
import { business } from "@/data/business";

export const hillsDistrictLocation: LocationPageData = {
  slug: "hills-district",
  navLabel: "The Hills District",
  childSuburbSlugs: [
    "castle-hill",
    "baulkham-hills",
    "kellyville",
    "bella-vista",
    "dural",
    "west-pennant-hills",
  ],

  seo: {
    title: "Retaining Walls Hills District | Expert Builders Sydney",
    description:
      "Professional retaining wall construction across The Hills District. Specialists in reactive clay, estate cut and fill, and drainage solutions for undulating terrain.",
    canonical: `${business.url}/hills-district/`,
  },

  hero: {
    eyebrow: "Hills District Retaining Walls",
    title: "Retaining Walls in The Hills District",
    description:
      "Expert retaining wall construction for undulating terrain and reactive clay soils across The Hills District. From estate developments to established properties, we deliver engineered solutions for cut and fill challenges and effective drainage on expansive soils.",
    backgroundImage: "/images/home-hero.webp",
    backgroundAlt:
      "Retaining wall construction in The Hills District Sydney",
    primaryCtaLabel: "Get a Free Quote",
    primaryCtaHref: "/contact/",
    secondaryCtaLabel: business.contact.phoneDisplay,
    secondaryCtaHref: business.contact.phoneHref,
    stats: [
      { value: "500+", label: "Walls Built" },
      { value: "15+", label: "Years Experience" },
      { value: "100%", label: "Fully Licensed" },
      { value: "24/7", label: "Support" },
    ],
  },

  intro: {
    eyebrow: "Local Expertise",
    heading: "Retaining Wall Specialists for Hills District Properties",
    paragraphs: [
      "The Hills District presents unique challenges for retaining wall construction. The undulating landscape combined with reactive clay soils requires specialised engineering knowledge and proven construction techniques. Our team has extensive experience working across the region, from established suburbs to new estate developments.",
      "We understand the specific soil conditions prevalent throughout The Hills, including the expansive clays that can cause significant ground movement. Our retaining walls are designed and built to accommodate these conditions, incorporating proper drainage systems and engineering standards that protect your investment long-term.",
    ],
    image: "/images/services01.webp",
    imageAlt: "Retaining wall construction on Hills District sloped terrain",
    checklist: [
      "Reactive clay soil specialists",
      "Estate cut and fill expertise",
      "Engineered drainage solutions",
      "Council-approved designs",
    ],
  },

  benefits: {
    eyebrow: "Why Choose Us",
    heading: "Built for Hills District Conditions",
    items: [
      {
        title: "Reactive Clay Expertise",
        description:
          "We design walls specifically for the expansive clay soils common across The Hills, with proper footings and drainage to manage soil movement.",
      },
      {
        title: "Estate Development Experience",
        description:
          "Extensive experience with new estate cut and fill requirements, working with builders and developers across Kellyville, Bella Vista and surrounding growth areas.",
      },
      {
        title: "Undulating Terrain Solutions",
        description:
          "The rolling hills of this region demand carefully engineered retaining solutions. We assess each site to deliver walls that work with the natural landscape.",
      },
      {
        title: "Drainage Integration",
        description:
          "Proper water management is critical on expansive soils. Every wall includes integrated drainage to protect both the structure and your property.",
      },
    ],
  },

  process: {
    eyebrow: "Our Process",
    heading: "How We Deliver Your Retaining Wall",
    image: "/images/services02.webp",
    imageAlt: "Professional retaining wall installation process",
    steps: [
      {
        title: "Site Assessment",
        description:
          "We evaluate your slope, soil conditions, and drainage requirements to determine the optimal retaining wall solution for your Hills District block.",
      },
      {
        title: "Engineering and Design",
        description:
          "Our engineers design walls suited to local reactive clay conditions, with specifications for footings, drainage, and materials that meet council requirements.",
      },
      {
        title: "Council Approval",
        description:
          "We handle the Hills Shire Council approval process, preparing all documentation and engineering certificates required for your project.",
      },
      {
        title: "Professional Construction",
        description:
          "Our experienced crews build your wall to specification, with quality materials and proper drainage installation for long-lasting performance.",
      },
    ],
  },

  sections: [
    {
      eyebrow: "Local Knowledge",
      heading: "Understanding Hills District Terrain",
      paragraphs: [
        "The Hills District spans from established suburbs like Castle Hill and Baulkham Hills through to the newer developments of Kellyville and Bella Vista. Each area presents its own characteristics, from the steep blocks in Dural and West Pennant Hills to the engineered lots in master-planned estates.",
        "Our team has built retaining walls across all these environments. We know which suburbs have the most challenging clay soils, where drainage issues are most common, and what construction methods deliver the best results for each situation.",
      ],
      image: "/images/services03.webp",
      imageAlt: "Retaining wall suited to Hills District landscape",
      imagePosition: "right",
      items: [
        "Castle Hill and surrounds",
        "Kellyville growth corridor",
        "Dural semi-rural properties",
        "Bella Vista estate developments",
      ],
    },
    {
      eyebrow: "Materials",
      heading: "Quality Materials for Lasting Results",
      paragraphs: [
        "We use premium materials selected for durability in Hills District conditions. Our concrete sleeper walls, sandstone blocks, and timber solutions are all chosen for their ability to perform in reactive clay environments.",
        "Every material we specify is backed by appropriate engineering for the soil conditions on your property. Combined with proper installation techniques and drainage systems, your wall is built to last for decades.",
      ],
      image: "/images/services04.webp",
      imageAlt: "Quality retaining wall materials for Hills District homes",
      imagePosition: "left",
      items: [
        "Concrete sleeper systems",
        "Natural sandstone blocks",
        "Treated timber options",
        "Engineered block walls",
      ],
    },
  ],

  faq: {
    eyebrow: "FAQs",
    heading: "Common Questions About Hills District Retaining Walls",
    items: [
      {
        question:
          "Do I need council approval for a retaining wall in The Hills Shire?",
        answer:
          "Generally, walls over 600mm require approval from The Hills Shire Council. We handle the full approval process, including engineering certification and documentation, as part of our service.",
      },
      {
        question: "How do you handle reactive clay soils?",
        answer:
          "Reactive clay requires specific design considerations including deeper footings, flexible connections, and comprehensive drainage. We assess the soil conditions on your property and engineer the wall accordingly to accommodate potential ground movement.",
      },
      {
        question: "What is the best material for Hills District conditions?",
        answer:
          "The best material depends on your specific site conditions, budget, and aesthetic preferences. Concrete sleepers and engineered blocks perform well in reactive clay environments. We assess each property and recommend the most suitable option.",
      },
      {
        question: "How long does construction typically take?",
        answer:
          "Most residential retaining walls take one to two weeks to construct, depending on size and complexity. The approval process with Hills Shire Council typically adds four to six weeks before construction can begin.",
      },
      {
        question: "Do you work on new estate developments?",
        answer:
          "Yes, we have extensive experience with cut and fill retaining requirements on new estate blocks across Kellyville, Bella Vista, The Ponds, and surrounding growth areas. We work with builders and homeowners throughout the construction process.",
      },
    ],
  },

  cta: {
    eyebrow: "Get Started",
    heading: "Ready to Discuss Your Retaining Wall Project?",
    text: "Contact us for a free consultation and quote. We service all suburbs across The Hills District with professional retaining wall solutions.",
    primaryLabel: "Get a Free Quote",
    primaryHref: "/contact/",
    secondaryLabel: business.contact.phoneDisplay,
    secondaryHref: business.contact.phoneHref,
  },

  schema: {
    serviceType: "Retaining Wall Construction",
    areaServed: "Hills District, Sydney NSW",
    description:
      "Professional retaining wall construction services across The Hills District Sydney. Specialists in reactive clay soils, estate developments, and drainage solutions.",
    provider: business.name,
  },
};
