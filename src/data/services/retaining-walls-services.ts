import { business } from "@/data/business";
import type { ServicePageData } from "@/types/service";

type ServiceConfig = {
  slug: string;
  title: string;
  keyword: string;
  eyebrow: string;
  summary: string;
  focus: string;
  image: string;
  checklist: string[];
  secondary?: string[];
};

const configs: ServiceConfig[] = [
  {
    slug: "block-retaining-wall",
    title: "Block Retaining Walls",
    keyword: "block retaining wall",
    eyebrow: "Sturdy Block Construction",
    summary: "Professional block retaining wall construction for residential and commercial properties across Greater Sydney. Besser block, interlocking block and link block systems for lasting structural support.",
    focus: "We assess the site conditions, soil type, drainage requirements and load expectations to recommend the most suitable block system for your property.",
    image: "/images/services01.webp",
    checklist: ["Besser block retaining walls", "Interlocking block systems", "Link block construction", "Structural engineering coordination"],
    secondary: ["besser block retaining wall", "interlocking retaining wall", "link block retaining wall"],
  },
  {
    slug: "concrete-sleeper-retaining-walls",
    title: "Concrete Sleeper Retaining Walls",
    keyword: "concrete sleeper retaining walls",
    eyebrow: "Durable Sleeper Systems",
    summary: "Concrete sleeper retaining wall installation for properties requiring strong, low-maintenance solutions. Suitable for residential gardens, driveways and commercial landscaping.",
    focus: "Concrete sleepers offer excellent durability and a clean finish. We coordinate post placement, drainage and backfill to ensure long-term performance.",
    image: "/images/services02.webp",
    checklist: ["Residential sleeper walls", "Commercial sleeper installations", "Steel post systems", "Integrated drainage solutions"],
  },
  {
    slug: "concrete-retaining-wall",
    title: "Concrete Retaining Walls",
    keyword: "concrete retaining wall",
    eyebrow: "Solid Concrete Solutions",
    summary: "Poured concrete and rendered retaining wall construction for properties needing maximum strength and a finished appearance across Greater Sydney.",
    focus: "Poured concrete walls suit sites with high load requirements or where a rendered finish is desired. We coordinate formwork, reinforcement and finishing to achieve a durable result.",
    image: "/images/services03.webp",
    checklist: ["Poured concrete walls", "Rendered retaining walls", "Reinforced construction", "Custom height and design options"],
    secondary: ["rendered retaining wall"],
  },
  {
    slug: "sandstone-retaining-wall",
    title: "Sandstone Retaining Walls",
    keyword: "sandstone retaining wall",
    eyebrow: "Natural Stone Elegance",
    summary: "Sandstone retaining wall construction for properties seeking a natural, timeless appearance. Ideal for Sydney gardens, estates and heritage-sensitive sites.",
    focus: "Sandstone suits properties where natural aesthetics matter. We source quality stone and construct walls that complement the landscape while providing structural integrity.",
    image: "/images/services04.webp",
    checklist: ["Natural sandstone blocks", "Dry-stack and mortared options", "Garden and estate walls", "Heritage-sympathetic construction"],
  },
  {
    slug: "timber-retaining-wall",
    title: "Timber Retaining Walls",
    keyword: "timber retaining wall",
    eyebrow: "Treated Timber Construction",
    summary: "Timber and timber sleeper retaining wall construction for residential properties across Greater Sydney. A cost-effective solution for garden beds, level changes and boundary walls.",
    focus: "Treated timber can provide an economical solution for low to medium height walls. We assess drainage, post spacing and timber selection for the expected conditions.",
    image: "/images/services05.webp",
    checklist: ["Timber sleeper retaining walls", "Treated pine construction", "Hardwood options available", "Garden bed and boundary walls"],
    secondary: ["timber sleeper retaining wall"],
  },
  {
    slug: "brick-retaining-wall",
    title: "Brick Retaining Walls",
    keyword: "brick retaining wall",
    eyebrow: "Classic Brick Finish",
    summary: "Brick retaining wall construction for properties requiring a traditional finish that complements existing brickwork or architectural styles.",
    focus: "Brick walls suit properties where matching existing structures or achieving a specific aesthetic is important. We coordinate footing, reinforcement and weep holes for structural soundness.",
    image: "/images/services06.webp",
    checklist: ["Matching existing brickwork", "New brick construction", "Reinforced brick walls", "Weep hole and drainage provision"],
  },
  {
    slug: "gabion-retaining-wall",
    title: "Gabion Retaining Walls",
    keyword: "gabion retaining wall",
    eyebrow: "Rock-Filled Wire Baskets",
    summary: "Gabion retaining wall construction using wire baskets filled with rock or stone. A distinctive option for contemporary landscapes and erosion control.",
    focus: "Gabion walls offer excellent drainage and a modern industrial aesthetic. We assess site suitability, basket specification and fill material for the intended application.",
    image: "/images/services01.webp",
    checklist: ["Wire basket systems", "Rock and stone fill options", "Erosion control applications", "Contemporary landscape design"],
  },
  {
    slug: "rock-retaining-wall",
    title: "Rock Retaining Walls",
    keyword: "rock retaining wall",
    eyebrow: "Natural Boulder Construction",
    summary: "Rock and boulder retaining wall construction for properties seeking a rugged, natural appearance. Suitable for gardens, sloped blocks and rural properties.",
    focus: "Boulder walls use the natural weight of large rocks to retain soil. We select appropriate stone sizes and placement techniques for stability and visual appeal.",
    image: "/images/services02.webp",
    checklist: ["Boulder retaining walls", "Natural rock placement", "Sloped block solutions", "Garden and landscape integration"],
    secondary: ["boulder retaining wall"],
  },
  {
    slug: "retaining-wall-repair-sydney",
    title: "Retaining Wall Repair",
    keyword: "retaining wall repair sydney",
    eyebrow: "Restoration and Repair",
    summary: "Retaining wall repair and replacement services for damaged, leaning or failing walls across Greater Sydney. We assess the cause and recommend the most practical solution.",
    focus: "A failing retaining wall may need repair, partial reconstruction or full replacement depending on the cause and extent of damage. We inspect drainage, footings and structural elements before recommending a scope.",
    image: "/images/services03.webp",
    checklist: ["Leaning wall repair", "Drainage correction", "Partial reconstruction", "Full wall replacement"],
    secondary: ["retaining wall replacement sydney"],
  },
];

const createServicePage = (config: ServiceConfig): ServicePageData => {
  const canonical = `${business.url}/${config.slug}/`;
  const lowerTitle = config.title.toLowerCase();

  return {
    slug: config.slug,
    seo: {
      title: `${config.title} Sydney | ${business.name}`,
      description: `${config.summary} Request a quote from ${business.name} across ${business.areaServed.primaryLocationListText} and surrounding ${business.areaServed.name} areas.`,
      canonical,
      ogImage: business.brand.assets.ogImage,
    },
    hero: {
      eyebrow: config.eyebrow,
      title: config.title,
      description: config.summary,
      backgroundImage: config.image,
      backgroundAlt: `${config.title} in ${business.areaServed.name}`,
      primaryCtaLabel: "Request a Quote",
      primaryCtaHref: "/contact-us/",
      secondaryCtaLabel: business.contact.phoneDisplay,
      secondaryCtaHref: business.contact.phoneHref,
      stats: [
        { value: "Sydney", label: "Greater Sydney coverage" },
        { value: "All Types", label: "Wall materials" },
        { value: "Clear", label: "Practical recommendations" },
        { value: "Responsive", label: "Enquiry support" },
      ],
    },
    intro: {
      eyebrow: `${business.name} Services`,
      heading: `${config.title} for local properties`,
      paragraphs: [
        `${config.summary} ${business.name} supports homeowners, developers, landscapers and commercial clients throughout the region.`,
        config.focus,
      ],
      image: config.image,
      imageAlt: `${config.title} service for a ${business.areaServed.name} property`,
      checklist: config.checklist,
    },
    benefits: {
      eyebrow: "Why It Matters",
      heading: `A considered approach to ${lowerTitle}`,
      items: [
        { title: "Site assessment first", description: "The site is reviewed before a scope is recommended, considering soil, drainage, access and load requirements." },
        { title: "Suitable materials", description: "Wall systems are matched to the site conditions, height requirements and desired appearance." },
        { title: "Clear priorities", description: "Structural requirements, drainage provisions and finishing options are explained separately." },
        { title: "Local coverage", description: `Service is available across ${business.areaServed.display}, including major suburbs and surrounding communities.` },
      ],
    },
    process: {
      eyebrow: "Our Process",
      heading: `What to expect from your ${lowerTitle} enquiry`,
      image: "/images/contact-workers.webp",
      imageAlt: `${business.name} preparing retaining wall work`,
      steps: [
        { title: "Tell us about your project", description: "Share the property location, wall requirements, height, length and any photos that help explain the site." },
        { title: "Site assessment", description: "We review access, soil conditions, drainage, services and load requirements." },
        { title: "Recommended scope", description: "You receive a clear outline of the work, materials and practical considerations." },
        { title: "Construction and handover", description: "The agreed wall is constructed with attention to drainage, backfill and site restoration." },
      ],
    },
    sections: [
      {
        eyebrow: "Local Conditions",
        heading: `${config.title} across ${business.areaServed.name}`,
        paragraphs: [
          `${business.areaServed.name} properties present diverse site conditions, from sandy coastal soils to heavy clay, sloped blocks and established gardens. The right retaining wall system depends on these local factors.`,
          `Our service area includes ${business.areaServed.locationListText}. The recommended approach is based on the individual site rather than a one-size-fits-all solution.`,
        ],
        image: "/images/home-hero.webp",
        imageAlt: `Retaining wall conditions across ${business.areaServed.name}`,
        imagePosition: "right",
      },
    ],
    faq: {
      eyebrow: "Frequently Asked Questions",
      heading: `${config.title} FAQs`,
      items: [
        { question: `Do you provide ${lowerTitle} throughout ${business.areaServed.name}?`, answer: `Yes. ${business.name} services ${business.areaServed.primaryLocationListText} and the other areas listed on our Areas page.` },
        { question: "Do I need council approval for a retaining wall?", answer: "In NSW, walls over 600mm in height typically require development approval. Walls near boundaries or supporting significant loads may have additional requirements. We can advise on the likely approval pathway." },
        { question: "How do I request an assessment?", answer: `Call ${business.contact.phoneDisplay} or send an enquiry through the contact form with your suburb and a brief description of the retaining wall project.` },
        { question: "How long does a retaining wall last?", answer: "A well-constructed retaining wall with proper drainage can last decades. The expected lifespan depends on the materials used, site conditions and maintenance." },
      ],
    },
    cta: {
      eyebrow: "Talk to a Local Team",
      heading: `Need help with ${lowerTitle}?`,
      text: `Contact ${business.name} to discuss the site, wall requirements and the next practical step.`,
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

export const retainingWallsServices: ServicePageData[] = configs.map(createServicePage);
