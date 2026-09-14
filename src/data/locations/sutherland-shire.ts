import type { LocationPageData } from "@/types/location";
import { business } from "@/data/business";

export const sutherlandShire: LocationPageData = {
  slug: "sutherland-shire",
  navLabel: "Sutherland Shire",

  childSuburbSlugs: [
    "cronulla",
    "caringbah",
    "sylvania",
    "gymea",
    "engadine",
    "menai",
  ],

  seo: {
    title: "Retaining Wall Builders Sutherland Shire | Local Wall Experts",
    description:
      "Professional retaining wall builders serving Sutherland Shire. Specialising in coastal and sloping block solutions for sandy soils and waterfront properties. Free quotes.",
    canonical: "https://retainingwallsbuilders.com.au/sutherland-shire/",
  },

  hero: {
    eyebrow: "Sutherland Shire Retaining Walls",
    title: "Retaining Wall Builders in Sutherland Shire",
    description:
      "Expert retaining wall construction for coastal Shire suburbs and sloping blocks. We understand sandy soils, waterfront challenges and hillside properties across Sutherland Shire.",
    backgroundImage: "/images/home-hero.webp",
    backgroundAlt: "Retaining wall construction in Sutherland Shire",
    primaryCtaLabel: "Get a Free Quote",
    primaryCtaHref: "#quote",
    secondaryCtaLabel: business.contact.phoneDisplay,
    secondaryCtaHref: business.contact.phoneHref,
    stats: [
      { value: "20+", label: "Years Experience" },
      { value: "500+", label: "Walls Built" },
      { value: "100%", label: "Licensed & Insured" },
      { value: "Free", label: "Site Inspections" },
    ],
  },

  intro: {
    eyebrow: "Why Choose Us",
    heading: "Retaining Wall Specialists for Coastal and Sloping Blocks",
    paragraphs: [
      "Sutherland Shire presents unique challenges for retaining wall construction. From the sandy soils near the coast to the steep terrain inland, every property requires careful assessment and tailored solutions.",
      "Our team has extensive experience working throughout the Shire, from waterfront homes along the Georges River to bushland properties near the Royal National Park. We understand the local geology, drainage requirements and council regulations that affect wall construction in this region.",
      "Whether you need to level a sloping backyard, create usable outdoor space, or stabilise a driveway access on a hillside block, we deliver retaining walls built to handle the specific conditions found across Sutherland Shire.",
    ],
    image: "/images/services01.webp",
    imageAlt: "Retaining wall project in Sutherland Shire",
    checklist: [
      "Sandy soil stabilisation expertise",
      "Coastal and waterfront solutions",
      "Sloping block specialists",
      "Drainage integration included",
      "Council approval assistance",
      "Local Shire knowledge",
    ],
  },

  benefits: {
    eyebrow: "Our Advantages",
    heading: "Why Sutherland Shire Trusts Our Retaining Wall Services",
    items: [
      {
        title: "Coastal Soil Expertise",
        description:
          "Sandy and unstable soils near the coast require specialised footing designs and drainage solutions. We engineer walls that remain stable in these challenging conditions.",
      },
      {
        title: "Waterfront Property Solutions",
        description:
          "Properties along the Georges River and Port Hacking need walls that handle tidal influences, erosion and moisture. Our designs account for these waterfront factors.",
      },
      {
        title: "Hillside Block Specialists",
        description:
          "Many Shire properties sit on sloping land requiring tiered retaining walls. We maximise usable space while maintaining structural integrity on steep sites.",
      },
      {
        title: "Local Council Experience",
        description:
          "Sutherland Shire Council has specific requirements for retaining walls. We handle approvals and ensure compliance with local regulations from the start.",
      },
    ],
  },

  process: {
    eyebrow: "Our Process",
    heading: "How We Build Your Retaining Wall",
    image: "/images/services02.webp",
    imageAlt: "Retaining wall construction process in Sutherland Shire",
    steps: [
      {
        title: "Site Assessment",
        description:
          "We inspect your property to assess soil conditions, slope gradients, drainage patterns and access requirements specific to your Sutherland Shire block.",
      },
      {
        title: "Design and Engineering",
        description:
          "Based on site conditions, we design a wall system suited to your property. For walls over 600mm, we provide certified engineering drawings.",
      },
      {
        title: "Council Approvals",
        description:
          "Where required, we prepare and lodge applications with Sutherland Shire Council, managing the approval process on your behalf.",
      },
      {
        title: "Construction",
        description:
          "Our experienced crew builds your wall using quality materials and proven techniques, with proper drainage and backfill throughout.",
      },
      {
        title: "Final Inspection",
        description:
          "We complete a thorough check of the finished wall, ensure drainage is functioning and leave your site clean and ready to use.",
      },
    ],
  },

  sections: [
    {
      eyebrow: "Local Conditions",
      heading: "Understanding Sutherland Shire Terrain",
      paragraphs: [
        "The Sutherland Shire landscape varies dramatically from coastal beaches to inland bushland. This creates diverse challenges for retaining wall construction that require local knowledge and experience.",
        "Near the coast, sandy soils can shift and settle, requiring deeper footings and robust drainage systems. Inland areas often feature clay soils on sloping terrain, where water management becomes critical to wall longevity.",
        "Our team has worked across every suburb in the Shire, giving us firsthand knowledge of the soil conditions, water table levels and site access challenges you may face.",
      ],
      image: "/images/services03.webp",
      imageAlt: "Sutherland Shire landscape and terrain",
      imagePosition: "right",
      items: [
        "Sandy coastal soils",
        "Clay inland terrain",
        "Waterfront properties",
        "Bushland block challenges",
        "Steep driveway access",
        "Flood prone areas",
      ],
    },
    {
      eyebrow: "Materials",
      heading: "Retaining Wall Options for Shire Properties",
      paragraphs: [
        "We offer a full range of retaining wall materials suited to Sutherland Shire conditions. The right choice depends on your soil type, wall height, aesthetic preferences and budget.",
        "Concrete sleeper walls remain popular for their strength and clean lines. Sandstone walls suit heritage homes and natural bushland settings. Timber options work well for garden walls and lighter applications.",
        "During your consultation, we discuss the pros and cons of each material for your specific site conditions and recommend the best solution for lasting performance.",
      ],
      image: "/images/services04.webp",
      imageAlt: "Retaining wall materials for Sutherland Shire",
      imagePosition: "left",
      items: [
        "Concrete sleeper systems",
        "Natural sandstone walls",
        "Treated timber sleepers",
        "Interlocking block systems",
        "Boulder rock walls",
        "Rendered masonry walls",
      ],
    },
  ],

  faq: {
    eyebrow: "Common Questions",
    heading: "Retaining Wall FAQs for Sutherland Shire",
    items: [
      {
        question: "Do I need council approval for a retaining wall in Sutherland Shire?",
        answer:
          "Walls over 600mm high generally require development approval from Sutherland Shire Council. Walls near boundaries, on waterfront properties or in bushfire prone areas may have additional requirements. We assess your specific situation and handle approvals where needed.",
      },
      {
        question: "How do you handle sandy soil conditions near the coast?",
        answer:
          "Sandy soils require deeper footings, often with concrete bases extending below the unstable layer. We also install comprehensive drainage systems to prevent water pooling behind the wall, which can cause movement in sandy conditions.",
      },
      {
        question: "What retaining wall type suits sloping blocks in the Shire?",
        answer:
          "For steeper blocks, we often recommend tiered concrete sleeper walls. These distribute the load across multiple levels, reduce the engineering requirements at each tier and create usable terraced areas. The specific design depends on your slope gradient and intended use.",
      },
      {
        question: "How long does retaining wall construction take?",
        answer:
          "Most residential retaining walls take between three to seven days to complete, depending on size and complexity. Larger projects or those requiring engineering and council approval may take longer. We provide a detailed timeline during your quote.",
      },
      {
        question: "Do you work on waterfront properties along the Georges River?",
        answer:
          "Yes, we regularly work on waterfront properties throughout Sutherland Shire. These sites require special consideration for tidal influence, erosion control and often need additional approvals. Our team understands the unique requirements for riverside and estuarine properties.",
      },
    ],
  },

  cta: {
    eyebrow: "Ready to Start?",
    heading: "Get Your Free Sutherland Shire Quote",
    text: "Contact us today for a free on-site assessment and detailed quote for your retaining wall project anywhere in Sutherland Shire.",
    primaryLabel: "Request Quote",
    primaryHref: "#quote",
    secondaryLabel: business.contact.phoneDisplay,
    secondaryHref: business.contact.phoneHref,
  },

  schema: {
    serviceType: "Retaining Wall Construction",
    areaServed: "Sutherland Shire, NSW",
    description:
      "Professional retaining wall builders serving Sutherland Shire. Specialising in coastal, waterfront and sloping block solutions.",
    provider: business.name,
  },
};
