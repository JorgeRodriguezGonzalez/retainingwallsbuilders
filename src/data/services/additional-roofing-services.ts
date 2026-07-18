import { business } from "@/data/business";
import type { ServicePageData } from "@/types/service";

type ServiceConfig = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  focus: string;
  image: string;
  checklist: string[];
};

const configs: ServiceConfig[] = [
  {
    slug: "services/roof-repairs",
    title: "Roof Repairs",
    eyebrow: "Targeted Roofing Solutions",
    summary: "Practical roof repairs for leaks, cracked tiles, damaged metal sheets, flashing faults, loose fixings and general wear across the Hunter Valley.",
    focus: "We trace the visible symptom back to the likely entry point or failed component, then recommend a focused repair rather than unnecessary work.",
    image: "/images/services01.webp",
    checklist: ["Tile and metal roof repairs", "Flashing and valley repairs", "Localised leak repairs", "Repairs for homes, rentals and commercial sites"],
  },
  {
    slug: "services/emergency-roof-repairs-make-safes",
    title: "Emergency Roof Repairs & Make Safes",
    eyebrow: "Urgent Roof Support",
    summary: "Responsive make-safe support for active leaks, wind damage, fallen branches, displaced roofing and other urgent roof hazards.",
    focus: "The immediate priority is to reduce further water entry and secure unsafe roof elements until permanent repairs can be planned and completed.",
    image: "/images/services02.webp",
    checklist: ["Temporary weather protection", "Loose material removal or securing", "Storm and impact damage assessment", "Clear next-step repair recommendations"],
  },
  {
    slug: "services/roof-leak-detection-repairs",
    title: "Roof Leak Detection & Repairs",
    eyebrow: "Find the Source",
    summary: "Roof leak investigation and repairs for ceiling stains, damp insulation, overflowing roof drainage and difficult-to-trace water entry.",
    focus: "Because water can travel away from the original entry point, the inspection considers roof coverings, penetrations, flashings, valleys, ridge capping and gutters together.",
    image: "/images/roof-hero.webp",
    checklist: ["Visual leak investigation", "Roof penetration checks", "Flashing and valley assessment", "Targeted repair recommendations"],
  },
  {
    slug: "services/roof-restoration",
    title: "Roof Restoration",
    eyebrow: "Refresh an Ageing Roof",
    summary: "Roof restoration services combining cleaning, repairs, ridge work and protective coatings for suitable tile and metal roofs.",
    focus: "A restoration is considered only after assessing whether the underlying roof remains suitable for repair and coating rather than replacement.",
    image: "/images/services03.webp",
    checklist: ["Roof cleaning and preparation", "Tile replacement and minor repairs", "Rebedding and repointing where required", "Roof coating and colour refresh"],
  },
  {
    slug: "services/roof-replacement-installation",
    title: "Roof Replacement / Roof Installation",
    eyebrow: "New Roofing Systems",
    summary: "Roof replacement and new roof installation for ageing, extensively damaged or newly constructed residential and commercial properties.",
    focus: "We help compare suitable roofing profiles, materials, drainage details and ventilation considerations for the building and local conditions.",
    image: "/images/Standing-Seam-Metal-Roof.webp",
    checklist: ["Full roof replacement planning", "New-build roof installation", "Metal and Colorbond options", "Roofing for extensions and additions"],
  },
  {
    slug: "services/roof-maintenance",
    title: "Roof Maintenance",
    eyebrow: "Preventive Roof Care",
    summary: "Planned roof maintenance to address minor wear, drainage issues and vulnerable roof details before they develop into larger problems.",
    focus: "Maintenance can be scheduled around seasonal conditions, property management cycles or the needs of commercial and strata portfolios.",
    image: "/images/services05.webp",
    checklist: ["Routine condition checks", "Minor repairs and sealant renewal", "Gutter and drainage observations", "Maintenance reporting for property managers"],
  },
  {
    slug: "services/roof-inspections",
    title: "Roof Inspections",
    eyebrow: "Clear Roof Condition Advice",
    summary: "Roof inspections for homeowners, buyers, landlords, property managers and businesses that need a clearer picture of roof condition and priorities.",
    focus: "Inspections focus on visible roofing components, likely water-entry points, drainage performance, signs of movement and areas approaching the end of serviceable life.",
    image: "/images/contact-workers.webp",
    checklist: ["General roof condition inspections", "Leak and storm-damage inspections", "Maintenance planning", "Pre-purchase roofing observations"],
  },
  {
    slug: "services/gutter-repairs-installation-cleaning",
    title: "Gutter Repairs, Installation & Cleaning",
    eyebrow: "Roof Drainage Services",
    summary: "Gutter repairs, replacement, installation and cleaning to help roofs drain effectively during heavy Hunter Valley rain and storm events.",
    focus: "We assess gutters together with downpipes, roof valleys, fall, joins and overflow points so drainage work addresses the wider water-management issue.",
    image: "/images/services04.webp",
    checklist: ["Gutter and downpipe repairs", "New gutter installation", "Blocked gutter cleaning", "Overflow and drainage improvements"],
  },
  {
    slug: "services/metal-colorbond-roofing",
    title: "Metal & Colorbond Roofing",
    eyebrow: "Durable Metal Roofing",
    summary: "Metal and Colorbond roofing for homes, sheds, rural buildings, commercial properties, extensions and full roof replacement projects.",
    focus: "Material selection considers roof pitch, building use, exposure, drainage layout, appearance and compatibility with flashings and roof penetrations.",
    image: "/images/Standing-Seam-Metal-Roof.webp",
    checklist: ["Colorbond roof installation", "Metal roof repairs", "Flashings and cappings", "Residential, rural and commercial applications"],
  },
  {
    slug: "services/tile-terracotta-roofing",
    title: "Tile & Terracotta Roofing",
    eyebrow: "Tile Roof Specialists",
    summary: "Repairs, maintenance and restoration for concrete tile and terracotta roofs across established Hunter Valley homes and properties.",
    focus: "Work may include replacing damaged tiles, addressing slipped sections, repairing valleys and flashings, and restoring worn ridge capping.",
    image: "/images/services03.webp",
    checklist: ["Broken tile replacement", "Terracotta roof repairs", "Valley and flashing repairs", "Ridge capping and restoration work"],
  },
  {
    slug: "services/commercial-roofing",
    title: "Commercial Roofing",
    eyebrow: "Roofing for Business Properties",
    summary: "Commercial roofing support for warehouses, workshops, retail premises, offices, accommodation venues and property portfolios.",
    focus: "Commercial work is planned around access, site operations, safety requirements, drainage performance and the need to minimise disruption where practical.",
    image: "/images/services06.webp",
    checklist: ["Commercial roof repairs", "Planned maintenance", "Metal roof replacement", "Roofing support for property managers"],
  },
  {
    slug: "services/residential-roofing",
    title: "Residential Roofing",
    eyebrow: "Roofing for Hunter Valley Homes",
    summary: "Residential roofing services for family homes, investment properties, townhouses, rural residences, extensions and renovations.",
    focus: "We provide clear advice for immediate roof problems as well as longer-term decisions such as restoration, replacement and drainage upgrades.",
    image: "/images/home-hero.webp",
    checklist: ["Home roof repairs", "Roof restoration and replacement", "Gutter and drainage work", "Tile, metal and Colorbond roofing"],
  },
  {
    slug: "services/storm-damage-repairs",
    title: "Storm Damage Repairs",
    eyebrow: "After Wind, Rain or Hail",
    summary: "Storm damage roof repairs for lifted sheets, broken tiles, damaged flashings, fallen branches, blocked drainage and sudden water entry.",
    focus: "We identify urgent hazards first, document visible damage and separate temporary make-safe work from the permanent repair scope.",
    image: "/images/services02.webp",
    checklist: ["Wind and hail damage assessment", "Emergency make-safe work", "Tile and metal repairs", "Permanent storm repair scopes"],
  },
  {
    slug: "services/roof-cleaning-painting",
    title: "Roof Cleaning & Painting",
    eyebrow: "Improve Roof Presentation",
    summary: "Roof cleaning and painting for suitable tile and metal roofs that need surface preparation, colour renewal and a refreshed appearance.",
    focus: "Preparation is central to the result, so roof condition, repairs, coating compatibility and surrounding property protection are reviewed before painting.",
    image: "/images/service-hero.webp",
    checklist: ["Pressure cleaning for suitable roofs", "Repairs before coating", "Primer and roof coating systems", "Colour consultation"],
  },
  {
    slug: "services/ridge-capping-restoration-roof-repointing",
    title: "Ridge Capping Restoration / Roof Repointing",
    eyebrow: "Restore Roof Ridges",
    summary: "Ridge capping restoration, rebedding and roof repointing for cracked, loose or weathered ridge mortar on tile roofs.",
    focus: "The correct scope depends on whether existing ridge bedding remains sound enough for repointing or requires removal and rebedding first.",
    image: "/images/services03.webp",
    checklist: ["Ridge capping inspection", "Flexible pointing renewal", "Rebedding where required", "Hip and ridge repairs"],
  },
];

const createServicePage = (config: ServiceConfig): ServicePageData => {
  const canonical = `${business.url}/${config.slug}/`;
  const lowerTitle = config.title.toLowerCase();

  return {
    slug: config.slug,
    seo: {
      title: `${config.title} Hunter Valley | ${business.name}`,
      description: `${config.summary} Request an assessment from ${business.name} across Maitland, Cessnock, Singleton and surrounding Hunter Valley areas.`,
      canonical,
      ogImage: business.brand.assets.ogImage,
    },
    hero: {
      eyebrow: config.eyebrow,
      title: config.title,
      description: config.summary,
      backgroundImage: config.image,
      backgroundAlt: `${config.title} in the Hunter Valley`,
      primaryCtaLabel: "Request a Quote",
      primaryCtaHref: "/contact-us/",
      secondaryCtaLabel: business.contact.phoneDisplay,
      secondaryCtaHref: business.contact.phoneHref,
      stats: [
        { value: "Local", label: "Hunter Valley coverage" },
        { value: "Tile + Metal", label: "Roofing experience" },
        { value: "Clear", label: "Practical recommendations" },
        { value: "Responsive", label: "Enquiry support" },
      ],
    },
    intro: {
      eyebrow: `${business.name} Services`,
      heading: `${config.title} for local properties`,
      paragraphs: [
        `${config.summary} ${business.name} supports homeowners, landlords, rural property owners, commercial clients and property managers throughout the region.`,
        config.focus,
      ],
      image: config.image,
      imageAlt: `${config.title} service for a Hunter Valley property`,
      checklist: config.checklist,
    },
    benefits: {
      eyebrow: "Why It Matters",
      heading: `A considered approach to ${lowerTitle}`,
      items: [
        { title: "Assessment first", description: "The roof is reviewed before a scope is recommended, helping distinguish the cause from the visible symptom." },
        { title: "Suitable materials", description: "Repairs and installations are matched to the existing roof type, building details and exposure." },
        { title: "Clear priorities", description: "Urgent work, preventive maintenance and longer-term options are explained separately." },
        { title: "Local coverage", description: `Service is available across ${business.areaServed.display}, including major towns and surrounding communities.` },
      ],
    },
    process: {
      eyebrow: "Our Process",
      heading: `What to expect from your ${lowerTitle} enquiry`,
      image: "/images/contact-workers.webp",
      imageAlt: `${business.name} preparing roofing work`,
      steps: [
        { title: "Tell us what is happening", description: "Share the property location, roof concern, timing and any photos that help explain the issue." },
        { title: "Roof assessment", description: "We review accessible roof areas, relevant components and signs of water entry or material failure." },
        { title: "Recommended scope", description: "You receive a clear outline of the work, materials and practical considerations." },
        { title: "Complete and review", description: "The agreed roofing work is completed with attention to site care, weather protection and final checks." },
      ],
    },
    sections: [
      {
        eyebrow: "Local Roof Conditions",
        heading: `${config.title} across the Hunter Valley`,
        paragraphs: [
          "Hunter Valley roofs can be exposed to strong sun, seasonal storms, wind-driven rain, falling debris and long periods of heat. Older homes, rural buildings, modern estates and commercial properties each present different roof access and material considerations.",
          `Our service area includes ${business.areaServed.locationListText}. The recommended approach is based on the individual roof rather than a one-size-fits-all package.`,
        ],
        image: "/images/roof-hero.webp",
        imageAlt: "Roofing conditions across the Hunter Valley",
        imagePosition: "right",
      },
    ],
    faq: {
      eyebrow: "Frequently Asked Questions",
      heading: `${config.title} FAQs`,
      items: [
        { question: `Do you provide ${lowerTitle} throughout the Hunter Valley?`, answer: `Yes. ${business.name} services Maitland, Cessnock, Singleton, Muswellbrook, Scone and the other areas listed on our Areas page.` },
        { question: "Can you work on both tile and metal roofs?", answer: "Yes. The appropriate repair or project scope depends on the roof profile, material, pitch, condition and access." },
        { question: "How do I request an assessment?", answer: `Call ${business.contact.phoneDisplay} or send an enquiry through the contact form with your suburb and a brief description of the roof issue.` },
        { question: "Will I need a repair, restoration or replacement?", answer: "That depends on the extent and pattern of deterioration. A focused repair may be suitable for localised damage, while widespread failure may justify restoration or replacement." },
      ],
    },
    cta: {
      eyebrow: "Talk to a Local Roofing Team",
      heading: `Need help with ${lowerTitle}?`,
      text: `Contact ${business.name} to discuss the roof, property location and the next practical step.`,
      primaryLabel: "Request a Quote",
      primaryHref: "/contact-us/",
      secondaryLabel: business.contact.phoneDisplay,
      secondaryHref: business.contact.phoneHref,
    },
    schema: {
      serviceType: config.title,
      areaServed: business.areaServed.display,
      description: config.summary,
      provider: business.name,
    },
  };
};

export const additionalRoofingServices: ServicePageData[] = configs.map(createServicePage);
