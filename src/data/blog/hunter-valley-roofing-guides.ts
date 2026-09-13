import { business } from "@/data/business";
import type { BlogPostData, BlogCategory } from "@/types/blog";

type PostConfig = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  category: BlogCategory;
  date: string;
  readTime: string;
  image: string;
  imageAlt: string;
  intro: string;
  sections: Array<{
    id: string;
    heading: string;
    paragraphs: string[];
    bullets?: string[];
    callout?: string;
  }>;
  faq: Array<{ question: string; answer: string }>;
};

const configs: PostConfig[] = [
  {
    slug: "roof-leaks-hunter-valley",
    title: "Roof Leaks in the Hunter Valley: Warning Signs and Repair Options",
    description: "Learn the common signs and causes of roof leaks in Hunter Valley homes, plus what to do before arranging professional roof repairs.",
    excerpt: "A practical guide to ceiling stains, flashing faults, damaged tiles, metal-roof leaks and drainage issues across Hunter Valley properties.",
    category: "Roof Repairs",
    date: "2026-07-10",
    readTime: "7 min read",
    image: "/images/roof-hero.webp",
    imageAlt: "Roof leak inspection on a Hunter Valley property",
    intro: "A roof leak may appear as a small ceiling mark, but the entry point can be several metres away. Understanding the likely causes helps property owners respond safely and avoid patching only the visible symptom.",
    sections: [
      {
        id: "early-signs",
        heading: "Early signs of a leaking roof",
        paragraphs: [
          "Water stains, bubbling paint, damp insulation, mouldy smells and dripping around light fittings can all indicate roof water entry. Outside, look for displaced tiles, rusted sheets, cracked pointing, debris in valleys and overflowing gutters.",
          "After a storm, check ceilings and accessible roof spaces without touching wet electrical fittings or climbing onto the roof.",
        ],
        bullets: ["Brown or yellow ceiling marks", "Damp roof-space insulation", "Water around chimneys or vents", "Overflowing gutters", "Missing tiles or lifted sheets"],
      },
      {
        id: "common-causes",
        heading: "Common causes across tile and metal roofs",
        paragraphs: [
          "Tile roofs can leak through cracked tiles, worn ridge pointing, damaged valleys and failed flashings. Metal roofs may develop issues around fixings, laps, penetrations, flashings or corrosion.",
          "Blocked gutters and downpipes can also force water back towards eaves or into roof cavities, especially during intense rain.",
        ],
      },
      {
        id: "repair-or-replace",
        heading: "When a repair may be enough",
        paragraphs: [
          "A focused repair is often suitable when the issue is isolated and the surrounding roof remains serviceable. Repeated leaks across several areas, widespread corrosion or severe tile deterioration may justify a broader restoration or replacement assessment.",
        ],
        callout: "The correct scope should follow an inspection. Repeated sealant patches can hide a larger flashing, drainage or material problem.",
      },
      {
        id: "next-step",
        heading: "What to do next",
        paragraphs: [
          `Record where the leak appears, when it happens and any recent storm activity. Send photos with your enquiry and contact ${business.name} for an assessment across the Hunter Valley.`,
        ],
      },
    ],
    faq: [
      { question: "Can the leak entry point be away from the ceiling stain?", answer: "Yes. Water can travel along framing, insulation or the underside of roof materials before becoming visible." },
      { question: "Should I climb onto the roof to find the leak?", answer: "No. Wet, damaged and unfamiliar roofs are unsafe. Keep clear and arrange a professional inspection." },
      { question: "Do blocked gutters cause roof leaks?", answer: "They can contribute to overflow and water entry, particularly around eaves, valleys and low points." },
    ],
  },
  {
    slug: "storm-damage-roof-checklist-hunter-valley",
    title: "Storm Damage Roof Checklist for Hunter Valley Property Owners",
    description: "Use this post-storm roof checklist to identify urgent hazards, visible damage and the information to gather before requesting repairs.",
    excerpt: "What to check safely after strong wind, hail or heavy rain, and when to request emergency make-safe roofing support.",
    category: "Roof Maintenance",
    date: "2026-07-07",
    readTime: "6 min read",
    image: "/images/services02.webp",
    imageAlt: "Storm damage roof inspection in the Hunter Valley",
    intro: "Strong wind, hail, falling branches and heavy rain can damage roofs quickly. The first step is to protect people and avoid creating a second hazard while checking what happened.",
    sections: [
      {
        id: "safety-first",
        heading: "Put safety before inspection",
        paragraphs: [
          "Stay away from fallen powerlines, sagging ceilings, loose roof materials and areas where water is near electrical fittings. Do not climb onto a wet or storm-damaged roof.",
        ],
        bullets: ["Keep children and pets away from debris", "Move valuables only when safe", "Photograph damage from ground level", "Call emergency services for immediate life-safety hazards"],
      },
      {
        id: "visible-damage",
        heading: "Visible signs to record",
        paragraphs: [
          "From a safe location, look for missing tiles, lifted metal sheets, damaged ridge caps, bent gutters, fallen branches, debris in valleys and water entering ceilings or walls.",
          "Note the time of the storm, the rooms affected and whether the leak continues after the rain eases.",
        ],
      },
      {
        id: "make-safe",
        heading: "What a roof make-safe is designed to do",
        paragraphs: [
          "A make-safe is temporary work intended to reduce immediate risk or weather exposure. Permanent repairs may require separate materials, better weather or a more detailed assessment.",
        ],
      },
      {
        id: "repair-planning",
        heading: "Planning permanent storm repairs",
        paragraphs: [
          "Once the roof is safe, the damaged components can be assessed and a permanent scope prepared. This may include tiles, sheets, flashings, gutters, roof penetrations or structural elements affected by impact.",
        ],
      },
    ],
    faq: [
      { question: "What is the difference between a make-safe and a permanent repair?", answer: "A make-safe reduces immediate risk or water entry. Permanent work restores the damaged roof components properly." },
      { question: "Should I keep photos of the damage?", answer: "Yes. Ground-level photos, dates and notes can help explain the event and the areas affected." },
      { question: "Can hail damage a metal roof without creating an immediate leak?", answer: "Yes. Some impacts affect coatings, profiles or fixings and may need closer assessment even when no leak is visible." },
    ],
  },
  {
    slug: "colorbond-vs-tile-roofing-hunter-valley",
    title: "Colorbond vs Tile Roofing for Hunter Valley Homes",
    description: "Compare Colorbond and tile roofing for Hunter Valley homes, including weight, appearance, maintenance, heat, storm and replacement considerations.",
    excerpt: "A balanced comparison of two common roof types for new homes, extensions and roof replacement projects in the region.",
    category: "Local Roofing Guides",
    date: "2026-07-03",
    readTime: "8 min read",
    image: "/images/standing-seam-metal-roof.webp",
    imageAlt: "Colorbond metal roofing on a Hunter Valley home",
    intro: "Colorbond and roof tiles can both perform well when the design, installation and drainage details suit the building. The better choice depends on the project rather than a universal winner.",
    sections: [
      {
        id: "colorbond",
        heading: "Where Colorbond roofing can suit",
        paragraphs: [
          "Colorbond is relatively lightweight and is available in a broad range of profiles and colours. It is commonly used for new homes, extensions, sheds, commercial buildings and replacements where a lighter roof system is desirable.",
        ],
        bullets: ["Lightweight roof covering", "Suitable for many low-pitch designs", "Broad colour range", "Common on rural and commercial buildings"],
      },
      {
        id: "tile",
        heading: "Where tile roofing can suit",
        paragraphs: [
          "Concrete and terracotta tiles remain common on established homes. Individual damaged tiles can often be replaced, and the roof may be suitable for ridge work or restoration when the main tile field remains sound.",
        ],
        bullets: ["Familiar appearance on established homes", "Individual tile replacement", "Concrete and terracotta options", "Can suit restoration when condition allows"],
      },
      {
        id: "decision-factors",
        heading: "Key decision factors",
        paragraphs: [
          "Consider structural capacity, roof pitch, building style, bushfire or exposure requirements, drainage design, solar installation, ventilation, maintenance access and the condition of the existing roof structure.",
          "For a replacement, the transition between the new roof and existing flashings, gutters, penetrations and insulation is as important as the roof covering itself.",
        ],
      },
      {
        id: "quote-comparison",
        heading: "Compare full scopes, not only roof material",
        paragraphs: [
          "Quotes should make clear what happens to existing roof materials, flashings, gutters, insulation, battens, penetrations and waste. A cheaper material allowance can be misleading when important supporting work is excluded.",
        ],
      },
    ],
    faq: [
      { question: "Is Colorbond always better than tile?", answer: "No. Both can be suitable. The building, roof pitch, structure, design goals and condition of existing components should guide the choice." },
      { question: "Can a tiled roof be replaced with metal roofing?", answer: "Often yes, but the structure, battens, roof geometry, drainage and detailing must be assessed first." },
      { question: "Which roof type is easier to repair?", answer: "That depends on the defect. Individual tiles can be replaced, while metal roofing often requires attention to sheet profiles, fixings and flashings." },
    ],
  },
  {
    slug: "roof-restoration-or-replacement",
    title: "Roof Restoration or Replacement: How to Decide",
    description: "Understand the signs that may point towards roof restoration, targeted repairs or complete roof replacement for a Hunter Valley property.",
    excerpt: "A practical framework for comparing repairs, restoration and replacement without relying on appearance alone.",
    category: "Roof Restoration",
    date: "2026-06-28",
    readTime: "7 min read",
    image: "/images/services03.webp",
    imageAlt: "Tile roof restoration in the Hunter Valley",
    intro: "A faded or weathered roof does not automatically need replacement, and a fresh coating cannot solve every roof problem. The decision should start with condition, failure patterns and expected future use of the building.",
    sections: [
      {
        id: "repair",
        heading: "When targeted repairs may be appropriate",
        paragraphs: [
          "Localised defects such as a small number of broken tiles, an isolated flashing issue or limited storm damage may be addressed with focused repairs when the wider roof remains sound.",
        ],
      },
      {
        id: "restoration",
        heading: "When restoration may be appropriate",
        paragraphs: [
          "A restoration may suit a roof that is structurally serviceable but needs cleaning, minor repairs, ridge work and a protective coating. It should not be used to hide widespread material failure or unresolved leaks.",
        ],
        bullets: ["Roof covering remains broadly serviceable", "Repairs are limited and identifiable", "Ridge work can be restored", "Surface is suitable for the proposed coating system"],
      },
      {
        id: "replacement",
        heading: "When replacement may be the stronger option",
        paragraphs: [
          "Replacement may be considered when deterioration is widespread, leaks recur across multiple areas, metal sheets are extensively corroded, tiles are failing broadly or the roof no longer suits planned building changes.",
        ],
      },
      {
        id: "assessment",
        heading: "Ask for condition-based advice",
        paragraphs: [
          "A useful assessment should explain what is failing, what remains serviceable and how long different options are expected to address the identified issues. That makes it easier to compare immediate cost with long-term value.",
        ],
        callout: "Painting a roof is not a substitute for repairing failed flashings, drainage faults, loose sheets or unsound ridge bedding.",
      },
    ],
    faq: [
      { question: "Can every tiled roof be restored?", answer: "No. The tile condition, roof structure, drainage, valleys, flashings and ridge bedding need to be suitable." },
      { question: "Does a roof need replacement because it looks faded?", answer: "Not necessarily. Appearance is only one factor. Condition and performance matter more." },
      { question: "Can I replace only one roof section?", answer: "Sometimes. Roof geometry, material matching, drainage and how the sections connect determine whether a partial replacement is practical." },
    ],
  },
];

const createPost = (config: PostConfig): BlogPostData => ({
  slug: config.slug,
  path: `/blog/${config.slug}/`,
  title: config.title,
  description: config.description,
  excerpt: config.excerpt,
  category: config.category,
  date: config.date,
  readTime: config.readTime,
  image: config.image,
  imageAlt: config.imageAlt,
  seo: {
    title: `${config.title} | ${business.name}`,
    description: config.description,
    canonical: `${business.url}/blog/${config.slug}/`,
    ogImage: business.brand.assets.ogImage,
  },
  hero: {
    eyebrow: `${business.name} Advice`,
    kicker: config.category,
  },
  intro: config.intro,
  tableOfContents: [
    ...config.sections.map((section) => ({ id: section.id, label: section.heading })),
    { id: "faqs", label: "Frequently asked questions" },
  ],
  sections: config.sections,
  faq: config.faq,
  sidebar: {
    searchPlaceholder: "Search roofing guides",
    usefulLinks: [
      { label: "Roof Repairs", href: "/services/roof-repairs/" },
      { label: "Roof Inspections", href: "/services/roof-inspections/" },
      { label: "Storm Damage Repairs", href: "/services/storm-damage-repairs/" },
      { label: "Contact Us", href: "/contact-us/" },
    ],
  },
  relatedPosts: configs.filter((post) => post.slug !== config.slug).map((post) => post.slug),
});

export const hunterValleyRoofingPosts = configs.map(createPost);
