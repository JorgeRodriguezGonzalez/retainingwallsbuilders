import type { LocationPageData } from "@/types/location";

export const northernBeachesLocation: LocationPageData = {
  slug: "northern-beaches",

  childSuburbSlugs: [
    "avalon-beach",
    "newport",
    "mona-vale",
    "freshwater",
    "manly",
    "narrabeen",
  ],

  seo: {
    title: "Retaining Walls Northern Beaches | Expert Wall Builders Sydney",
    description:
      "Professional retaining wall construction across Northern Beaches. Specialists in coastal slope stabilisation, sandy soil engineering and salt-resistant wall systems for sloped properties.",
    canonical: "https://retainingwallsbuilders.com.au/northern-beaches/",
  },

  hero: {
    eyebrow: "Northern Beaches Retaining Wall Specialists",
    title: "Retaining Walls for Northern Beaches Properties",
    description:
      "Expert retaining wall construction for the unique coastal terrain of Northern Beaches. We engineer walls that handle sandy soils, salt exposure and sloped blocks with ocean views - protecting your property while maximising usable outdoor space.",
    backgroundImage: "/images/home-hero.webp",
    backgroundAlt:
      "Retaining wall construction on sloped Northern Beaches property",
    primaryCtaLabel: "Get a Free Quote",
    primaryCtaHref: "/contact/",
    secondaryCtaLabel: "Call Now",
    secondaryCtaHref: "tel:0290720512",
    stats: [
      { value: "500+", label: "Walls Built" },
      { value: "25+", label: "Years Experience" },
      { value: "100%", label: "Licensed & Insured" },
      { value: "24/7", label: "Support" },
    ],
  },

  intro: {
    eyebrow: "Coastal Slope Specialists",
    heading: "Engineered for Northern Beaches Conditions",
    paragraphs: [
      "Northern Beaches properties present distinct engineering challenges. The coastal terrain features blocks that slope towards the water, sandy soil composition and constant salt spray exposure. Standard retaining wall approaches often fail within years under these conditions.",
      "Our team understands the specific demands of building on the peninsula. We engineer every wall to withstand the marine environment - using salt-resistant materials, proper drainage systems for sandy soils and foundations designed for the unique geology of the Northern Beaches coastline.",
      "From Manly to Avalon, we have built hundreds of retaining walls that level sloped gardens, create stable access paths and protect properties from erosion - all while meeting council requirements for this environmentally sensitive coastal zone.",
    ],
    image: "/images/services01.webp",
    imageAlt: "Completed retaining wall on coastal Northern Beaches property",
    checklist: [
      "Salt-resistant materials and coatings",
      "Sandy soil drainage solutions",
      "Coastal slope stabilisation",
      "Council-compliant engineering",
    ],
  },

  benefits: {
    eyebrow: "Why Choose Us",
    heading: "Built for the Coastal Environment",
    items: [
      {
        title: "Marine-Grade Materials",
        description:
          "We use galvanised steel, marine-grade concrete additives and salt-resistant finishes that withstand decades of coastal exposure without corrosion or degradation.",
      },
      {
        title: "Sandy Soil Expertise",
        description:
          "Northern Beaches sandy soils require specific drainage and foundation approaches. We engineer walls with proper aggregate backfill and weep systems to prevent water buildup.",
      },
      {
        title: "Slope Engineering",
        description:
          "Many Northern Beaches blocks slope steeply towards the ocean. We design terraced wall systems that maximise usable flat space while managing water runoff naturally.",
      },
      {
        title: "Local Council Knowledge",
        description:
          "We handle Northern Beaches Council development applications, complying construction certificates and all inspections - streamlining approvals for your project.",
      },
    ],
  },

  process: {
    eyebrow: "Our Process",
    heading: "From Site Assessment to Completion",
    image: "/images/services02.webp",
    imageAlt: "Retaining wall construction process on Northern Beaches site",
    steps: [
      {
        title: "Coastal Site Assessment",
        description:
          "We evaluate your block slope, soil composition, drainage patterns and salt exposure levels. For Northern Beaches properties, this includes checking for rock shelves and existing erosion.",
      },
      {
        title: "Engineering Design",
        description:
          "Our structural engineers design walls specifically for your site conditions - calculating loads, specifying marine-grade materials and planning drainage to suit sandy coastal soils.",
      },
      {
        title: "Council Approvals",
        description:
          "We prepare and lodge all documentation with Northern Beaches Council, managing the DA or CDC process and coordinating any required geotechnical reports.",
      },
      {
        title: "Professional Construction",
        description:
          "Our experienced crews build your wall to engineering specifications, with proper curing times, drainage installation and quality inspections throughout the process.",
      },
    ],
  },

  sections: [
    {
      eyebrow: "Common Applications",
      heading: "Retaining Wall Solutions for Coastal Properties",
      paragraphs: [
        "Northern Beaches homes often sit on blocks that drop away towards the water, limiting usable garden space and creating access challenges. Our retaining walls transform these slopes into functional terraced areas - flat lawns, entertainment spaces or productive gardens.",
        "We also specialise in driveway retention walls that create level parking on steep blocks, pool surrounds that require precise engineering, and boundary walls that prevent neighbour erosion disputes.",
      ],
      image: "/images/services03.webp",
      imageAlt: "Terraced retaining wall system on Northern Beaches hillside",
      imagePosition: "right" as const,
      items: [
        "Garden terrace walls",
        "Driveway retention systems",
        "Pool surround engineering",
        "Boundary stabilisation walls",
        "Erosion control structures",
        "Access path retention",
      ],
    },
  ],

  faq: {
    eyebrow: "Common Questions",
    heading: "Northern Beaches Retaining Wall FAQs",
    items: [
      {
        question:
          "Do I need council approval for a retaining wall in Northern Beaches?",
        answer:
          "Walls over 600mm in height generally require approval from Northern Beaches Council. Walls near boundaries, on sloping land or affecting drainage may have additional requirements. We handle all council submissions and can advise on what approvals your specific project needs.",
      },
      {
        question: "What materials work best in coastal salt conditions?",
        answer:
          "We recommend galvanised or stainless steel reinforcement, marine-grade concrete with appropriate admixtures, and salt-resistant finishes. Timber sleeper walls are not ideal for direct coastal exposure. We select materials based on your specific location and salt exposure levels.",
      },
      {
        question: "How do you handle the sandy soil on Northern Beaches?",
        answer:
          "Sandy soils drain quickly but can shift under load. We use compacted aggregate backfill, proper geotextile fabric to prevent soil migration, and design foundations that distribute loads appropriately for sandy conditions. Drainage is engineered to manage rapid water movement.",
      },
      {
        question: "Can you build walls on steep ocean-facing blocks?",
        answer:
          "Yes - steep coastal blocks are our speciality. We design terraced wall systems that work with the natural slope, managing both structural loads and water runoff. Access for machinery can be challenging on some sites, but we have solutions for difficult terrain.",
      },
      {
        question: "How long will a retaining wall last on the Northern Beaches?",
        answer:
          "Properly engineered walls using marine-grade materials should last 50 years or more. The key factors are correct material selection for salt exposure, proper drainage to prevent water damage, and quality construction. We design for long-term coastal durability.",
      },
    ],
  },

  cta: {
    eyebrow: "Ready to Start?",
    heading: "Get Your Northern Beaches Retaining Wall Quote",
    text: "Contact us for a free site assessment and detailed quote. We service all Northern Beaches suburbs from Manly to Palm Beach.",
    primaryLabel: "Request a Quote",
    primaryHref: "/contact/",
    secondaryLabel: "Call (02) 9072 0512",
    secondaryHref: "tel:0290720512",
  },

  schema: {
    serviceType: "Retaining Wall Construction",
    areaServed: "Northern Beaches, Sydney NSW",
    description:
      "Professional retaining wall construction services for Northern Beaches properties. Specialists in coastal slope stabilisation, sandy soil engineering and salt-resistant wall systems.",
    provider: "Retaining Walls Builders",
  },
};
