import { business } from "@/data/business";
import type { SuburbPageData } from "@/types/suburb";

const parentArea = "lower-north-shore";

/**
 * Lower North Shore suburbs.
 * Cloud Agents factory - each suburb has distinct local character.
 */

// Mosman - iconic harbour suburb, military heritage, grand estates, steep waterfront blocks
const mosmanSuburb: SuburbPageData = {
  slug: "mosman",
  parentArea,
  seo: {
    title: `Retaining Walls Mosman | ${business.name}`,
    description: `Retaining wall construction in Mosman. Sandstone walls, terraced gardens and harbour-view properties across Balmoral, Clifton Gardens and the Mosman waterfront. Contact ${business.name}.`,
    canonical: `${business.url}/mosman/`,
    ogImage: business.brand.assets.ogImage,
  },
  hero: {
    eyebrow: "Mosman Retaining Walls",
    title: "Retaining Walls Mosman",
    description:
      "Retaining wall construction for harbour-front estates, steep sandstone blocks and heritage gardens in Mosman. From Balmoral slopes to Clifton Gardens, we build walls suited to this iconic Sydney suburb.",
    backgroundImage: "/images/home-hero.webp",
    backgroundAlt: "Retaining wall construction in Mosman",
    primaryCtaLabel: "Request a Quote",
    primaryCtaHref: "/contact-us/",
    secondaryCtaLabel: business.contact.phoneDisplay,
    secondaryCtaHref: business.contact.phoneHref,
    stats: [
      { value: "Harbour", label: "Waterfront blocks" },
      { value: "Sandstone", label: "Heritage materials" },
      { value: "Steep", label: "Grade challenges" },
      { value: "Premium", label: "Property standards" },
    ],
  },
  intro: {
    eyebrow: "Local Expertise",
    heading: "Retaining walls for Mosman properties",
    paragraphs: [
      "Properties in Mosman face some of the most demanding retaining wall conditions in Sydney. Blocks drop steeply toward Balmoral Beach, Middle Harbour and Clifton Gardens, with Sydney sandstone close to the surface and established gardens requiring careful integration.",
      "We construct sandstone, concrete sleeper and rendered walls for Mosman homes. Heritage considerations, neighbour relationships and access through narrow streets all factor into our approach for each project.",
    ],
    image: "/images/services04.webp",
    imageAlt: "Sandstone retaining wall suited to Mosman terrain",
    checklist: [
      "Sandstone walls for heritage properties",
      "Harbour-view terrace construction",
      "Steep driveway and access walls",
      "Integration with established gardens",
    ],
  },
  benefits: {
    eyebrow: "Why Mosman Expertise Matters",
    heading: "Understanding the unique conditions of Mosman",
    items: [
      {
        title: "Harbour-front grades",
        description:
          "Mosman blocks often drop dramatically toward the water. We design terraced walls and stepped systems that manage these steep grades while preserving views.",
      },
      {
        title: "Sandstone base rock",
        description:
          "Sydney sandstone lies close to the surface across much of Mosman. We assess rock conditions and select wall systems that work with the existing geology.",
      },
      {
        title: "Heritage streetscapes",
        description:
          "Many Mosman streets feature sandstone fencing and period gardens. Our walls complement this character rather than disrupting established aesthetics.",
      },
      {
        title: "Restricted vehicle access",
        description:
          "Narrow lanes and steep driveways limit machinery access. We plan logistics carefully to complete construction without damaging verges or neighbouring properties.",
      },
    ],
  },
  process: {
    eyebrow: "Our Approach",
    heading: "How we handle Mosman projects",
    image: "/images/contact-workers.webp",
    imageAlt: `${business.name} preparing a Mosman retaining wall`,
    steps: [
      {
        title: "Site discussion",
        description:
          "Share your address, the wall location and any photos showing the slope, existing features and access route.",
      },
      {
        title: "On-site assessment",
        description:
          "We inspect drainage paths, rock depth, boundary setbacks and any heritage or neighbour considerations affecting the wall design.",
      },
      {
        title: "Detailed recommendation",
        description:
          "You receive a scope covering materials, construction method, drainage provisions and any council or engineering requirements.",
      },
      {
        title: "Construction",
        description:
          "The wall is built with attention to backfill quality, drainage installation and restoration of landscaping affected by the work.",
      },
    ],
  },
  sections: [
    {
      eyebrow: "Local Conditions",
      heading: "Building on the sandstone slopes of Mosman",
      paragraphs: [
        "Mosman sits on Sydney sandstone with thin topsoil in many areas. This creates excellent foundation conditions but requires excavation planning and drainage management to prevent water pooling against walls.",
        "Properties near Balmoral, Clifton Gardens and the Spit often have multiple level changes requiring terraced retaining systems. We design walls that create usable garden areas while managing stormwater from upper slopes.",
      ],
      image: "/images/services03.webp",
      imageAlt: "Concrete retaining wall on steep Mosman block",
      imagePosition: "left",
      items: [
        "Natural sandstone construction",
        "Terraced garden walls",
        "Stormwater management",
        "Multi-level systems",
      ],
    },
  ],
  faq: {
    eyebrow: "Common Questions",
    heading: "Mosman Retaining Wall FAQs",
    items: [
      {
        question: "Can you match existing sandstone features?",
        answer:
          "Yes. We source sandstone blocks that complement existing fencing, steps and garden walls common in Mosman heritage properties.",
      },
      {
        question: "How do you handle steep harbour-facing blocks?",
        answer:
          "We design terraced walls or stepped systems that break the grade into manageable sections, incorporating drainage between levels to manage water flow.",
      },
      {
        question: "Is council approval required in Mosman?",
        answer:
          "Walls over 600mm typically require approval. Mosman Council has heritage conservation areas with additional requirements - we can advise on the likely pathway for your property.",
      },
      {
        question: "How do I get started?",
        answer: `Call ${business.contact.phoneDisplay} or complete the contact form with your Mosman address and project details.`,
      },
    ],
  },
  cta: {
    eyebrow: "Start Your Project",
    heading: "Discuss your Mosman retaining wall",
    text: `Contact ${business.name} to talk through your site conditions and wall requirements.`,
    primaryLabel: "Request a Quote",
    primaryHref: "/contact-us/",
    secondaryLabel: business.contact.phoneDisplay,
    secondaryHref: business.contact.phoneHref,
  },
  schema: {
    serviceType: "Retaining Wall Construction",
    areaServed: "Mosman, Sydney, NSW",
    description:
      "Professional retaining wall construction in Mosman, including sandstone, concrete and engineered walls for harbour-front properties and steep terrain.",
    provider: business.name,
  },
};

// Cremorne - compact harbour suburb, terraced blocks, ferry access, mix of apartments and houses
const cremorneSuburb: SuburbPageData = {
  slug: "cremorne",
  parentArea,
  seo: {
    title: `Retaining Walls Cremorne | ${business.name}`,
    description: `Retaining wall construction in Cremorne. Compact harbour blocks, terraced gardens and waterfront properties between Neutral Bay and Mosman. Contact ${business.name}.`,
    canonical: `${business.url}/cremorne/`,
    ogImage: business.brand.assets.ogImage,
  },
  hero: {
    eyebrow: "Cremorne Retaining Walls",
    title: "Retaining Walls Cremorne",
    description:
      "Retaining wall construction for compact harbour blocks and terraced gardens in Cremorne. We build walls suited to the mix of period homes, apartments and waterfront properties in this suburb.",
    backgroundImage: "/images/service-hero.webp",
    backgroundAlt: "Retaining wall construction in Cremorne",
    primaryCtaLabel: "Request a Quote",
    primaryCtaHref: "/contact-us/",
    secondaryCtaLabel: business.contact.phoneDisplay,
    secondaryCtaHref: business.contact.phoneHref,
    stats: [
      { value: "Compact", label: "Block sizes" },
      { value: "Terraced", label: "Garden layouts" },
      { value: "Mixed", label: "Property types" },
      { value: "Harbour", label: "Water proximity" },
    ],
  },
  intro: {
    eyebrow: "Local Knowledge",
    heading: "Retaining walls for Cremorne properties",
    paragraphs: [
      "Cremorne sits on the Lower North Shore peninsula between Neutral Bay and Mosman, with blocks sloping toward the harbour on multiple aspects. Compact lot sizes and established vegetation in this suburb require retaining walls that maximise usable garden space.",
      "We construct concrete sleeper, rendered concrete and sandstone walls for Cremorne homes. Tight boundaries, established trees and strata considerations all factor into our approach for this densely built suburb.",
    ],
    image: "/images/services02.webp",
    imageAlt: "Retaining wall construction suited to Cremorne conditions",
    checklist: [
      "Compact lot wall systems",
      "Boundary and party wall solutions",
      "Terraced garden construction",
      "Strata property experience",
    ],
  },
  benefits: {
    eyebrow: "Why Cremorne Expertise Matters",
    heading: "Working within the constraints of Cremorne",
    items: [
      {
        title: "Compact lot layouts",
        description:
          "Cremorne blocks are smaller than neighbouring suburbs. We design walls that create usable outdoor space without encroaching on setbacks or overshadowing neighbours.",
      },
      {
        title: "Mixed dwelling types",
        description:
          "The suburb includes free-standing homes, semi-detached pairs and apartment blocks. We adapt our approach to suit each property type and ownership structure.",
      },
      {
        title: "Established vegetation",
        description:
          "Mature trees and hedges define many Cremorne properties. We plan wall alignment and excavation to preserve significant plantings where possible.",
      },
      {
        title: "Harbour-side drainage",
        description:
          "Water flows toward the harbour from ridge areas. Our walls include drainage provisions to manage runoff and protect foundations.",
      },
    ],
  },
  process: {
    eyebrow: "Our Approach",
    heading: "How we approach Cremorne projects",
    image: "/images/contact-workers.webp",
    imageAlt: `${business.name} team on a Cremorne project`,
    steps: [
      {
        title: "Initial contact",
        description:
          "Share your Cremorne address, the wall purpose and any photos showing existing conditions and access.",
      },
      {
        title: "Site inspection",
        description:
          "We review boundary positions, drainage, existing structures and neighbour considerations to determine the best wall approach.",
      },
      {
        title: "Proposal",
        description:
          "You receive a clear scope covering wall type, dimensions, drainage and any council or strata requirements.",
      },
      {
        title: "Construction",
        description:
          "The wall is built efficiently to minimise disruption in this closely built suburb, with site restoration on completion.",
      },
    ],
  },
  sections: [
    {
      eyebrow: "Suburb Character",
      heading: "Walls for the terraced landscape of Cremorne",
      paragraphs: [
        "The position of Cremorne on the harbour peninsula means many blocks have multiple level changes across relatively small areas. Retaining walls here create garden terraces, define boundaries and support access paths on sloping sites.",
        "The heritage character of this suburb means walls often need to complement period architecture and existing sandstone features. We select materials and finishes that suit the established streetscape.",
      ],
      image: "/images/services01.webp",
      imageAlt: "Block retaining wall in Cremorne garden",
      imagePosition: "right",
      items: [
        "Garden terrace systems",
        "Boundary definition walls",
        "Access path support",
        "Heritage-sympathetic materials",
      ],
    },
  ],
  faq: {
    eyebrow: "Common Questions",
    heading: "Cremorne Retaining Wall FAQs",
    items: [
      {
        question: "Can you work on strata properties?",
        answer:
          "Yes. We coordinate with strata managers and owners corporations where common property is affected, providing documentation for required approvals.",
      },
      {
        question: "How do you handle tight access?",
        answer:
          "Many Cremorne properties have restricted access. We plan material delivery and equipment selection to suit the constraints of each site.",
      },
      {
        question: "What wall types suit Cremorne blocks?",
        answer:
          "Concrete sleeper and rendered concrete walls are common for their clean appearance. Sandstone suits properties with existing heritage features.",
      },
      {
        question: "How do I request a quote?",
        answer: `Call ${business.contact.phoneDisplay} or use the contact form with your Cremorne address and project details.`,
      },
    ],
  },
  cta: {
    eyebrow: "Get Started",
    heading: "Discuss your Cremorne retaining wall",
    text: `Contact ${business.name} to review your site and wall requirements.`,
    primaryLabel: "Request a Quote",
    primaryHref: "/contact-us/",
    secondaryLabel: business.contact.phoneDisplay,
    secondaryHref: business.contact.phoneHref,
  },
  schema: {
    serviceType: "Retaining Wall Construction",
    areaServed: "Cremorne, Sydney, NSW",
    description:
      "Professional retaining wall construction in Cremorne for compact harbour blocks, terraced gardens and mixed property types.",
    provider: business.name,
  },
};

// Northbridge - bushland edges, national park proximity, rocky terrain, larger blocks
const northbridgeSuburb: SuburbPageData = {
  slug: "northbridge",
  parentArea,
  seo: {
    title: `Retaining Walls Northbridge | ${business.name}`,
    description: `Retaining wall construction in Northbridge. Bushland properties, rocky terrain and harbour-view blocks near Flat Rock Gully and Middle Harbour. Contact ${business.name}.`,
    canonical: `${business.url}/northbridge/`,
    ogImage: business.brand.assets.ogImage,
  },
  hero: {
    eyebrow: "Northbridge Retaining Walls",
    title: "Retaining Walls Northbridge",
    description:
      "Retaining wall construction for bushland properties, rocky terrain and harbour-view blocks in Northbridge. We build walls suited to the natural setting of this suburb near Flat Rock Gully and Middle Harbour foreshore.",
    backgroundImage: "/images/home-hero.webp",
    backgroundAlt: "Retaining wall construction in Northbridge",
    primaryCtaLabel: "Request a Quote",
    primaryCtaHref: "/contact-us/",
    secondaryCtaLabel: business.contact.phoneDisplay,
    secondaryCtaHref: business.contact.phoneHref,
    stats: [
      { value: "Bushland", label: "Natural setting" },
      { value: "Rocky", label: "Sandstone terrain" },
      { value: "Harbour", label: "Water views" },
      { value: "Larger", label: "Block sizes" },
    ],
  },
  intro: {
    eyebrow: "Bushland Expertise",
    heading: "Retaining walls for Northbridge conditions",
    paragraphs: [
      "Northbridge borders Flat Rock Gully reserve and Middle Harbour foreshore, with many properties backing onto bushland. The rocky sandstone terrain and native vegetation of this suburb require retaining walls that work with the natural landscape.",
      "We construct sandstone, concrete and boulder walls for Northbridge homes. Fire protection considerations, bushland asset protection zones and natural rock outcrops all influence wall design in this unique suburb.",
    ],
    image: "/images/services04.webp",
    imageAlt: "Natural stone retaining wall in Northbridge bushland setting",
    checklist: [
      "Bushland boundary walls",
      "Natural stone and boulder systems",
      "Rocky terrain solutions",
      "Fire protection zone considerations",
    ],
  },
  benefits: {
    eyebrow: "Why Northbridge Knowledge Matters",
    heading: "Building walls in bushland terrain",
    items: [
      {
        title: "Natural rock integration",
        description:
          "Northbridge properties often feature exposed sandstone outcrops. We design walls that incorporate existing rock features rather than fighting against them.",
      },
      {
        title: "Bushland boundary management",
        description:
          "Properties adjoining reserves need walls that define garden areas, manage bushfire asset protection zones and control erosion on sloped boundaries.",
      },
      {
        title: "Native vegetation",
        description:
          "Established native trees and understorey are protected in many areas. We plan excavation and wall alignment to minimise impact on significant vegetation.",
      },
      {
        title: "Harbour-view blocks",
        description:
          "Many Northbridge properties have Middle Harbour views with steep drops toward the water. We build terraced walls that create usable garden space while managing these grades.",
      },
    ],
  },
  process: {
    eyebrow: "Our Process",
    heading: "Northbridge project approach",
    image: "/images/contact-workers.webp",
    imageAlt: `${business.name} team assessing a Northbridge site`,
    steps: [
      {
        title: "Site discussion",
        description:
          "Share your address, wall location, proximity to bushland or reserves, and any photos showing the terrain and access.",
      },
      {
        title: "Terrain assessment",
        description:
          "We inspect rock conditions, native vegetation, drainage patterns and any bushfire or environmental considerations affecting the design.",
      },
      {
        title: "Design recommendation",
        description:
          "You receive a scope covering wall system, materials suited to the natural setting, drainage provisions and relevant approval requirements.",
      },
      {
        title: "Construction",
        description:
          "The wall is built with care for the bushland environment, including erosion control and revegetation of disturbed areas.",
      },
    ],
  },
  sections: [
    {
      eyebrow: "Natural Terrain",
      heading: "Walls for the rocky landscape of Northbridge",
      paragraphs: [
        "Northbridge sits on sandstone ridges with rocky outcrops across many properties. This terrain creates excellent foundation conditions but requires careful planning to work around existing rock features and manage drainage in sandy soils.",
        "Boulder walls and natural sandstone construction suit properties seeking to blend retaining structures with the bushland character. Concrete systems work well where a cleaner aesthetic is preferred.",
      ],
      image: "/images/services02.webp",
      imageAlt: "Boulder retaining wall suited to Northbridge terrain",
      imagePosition: "left",
      items: [
        "Boulder and rock wall construction",
        "Sandstone block systems",
        "Concrete solutions",
        "Erosion control integration",
      ],
    },
  ],
  faq: {
    eyebrow: "Common Questions",
    heading: "Northbridge Retaining Wall FAQs",
    items: [
      {
        question: "Can you work around existing rock outcrops?",
        answer:
          "Yes. We design walls that incorporate natural rock features, using them as foundation elements or visual features within the retaining system.",
      },
      {
        question: "Do bushfire considerations affect wall design?",
        answer:
          "Properties in bushfire-prone areas may need non-combustible materials. Retaining walls in asset protection zones should be designed with fire resilience in mind.",
      },
      {
        question: "What about properties backing onto reserves?",
        answer:
          "Walls near council reserves or national park boundaries may require additional approvals. We can advise on requirements for your specific location.",
      },
      {
        question: "How do I arrange a site visit?",
        answer: `Call ${business.contact.phoneDisplay} or complete the contact form with your Northbridge address and project description.`,
      },
    ],
  },
  cta: {
    eyebrow: "Start Your Project",
    heading: "Discuss your Northbridge retaining wall",
    text: `Contact ${business.name} to talk through your bushland site and wall requirements.`,
    primaryLabel: "Request a Quote",
    primaryHref: "/contact-us/",
    secondaryLabel: business.contact.phoneDisplay,
    secondaryHref: business.contact.phoneHref,
  },
  schema: {
    serviceType: "Retaining Wall Construction",
    areaServed: "Northbridge, Sydney, NSW",
    description:
      "Professional retaining wall construction in Northbridge for bushland properties, rocky terrain and harbour-view blocks near Middle Harbour.",
    provider: business.name,
  },
};

// Cammeray - ridge-top suburb, golf course edges, apartment conversions, quieter streets
const cammeraySuburb: SuburbPageData = {
  slug: "cammeray",
  parentArea,
  seo: {
    title: `Retaining Walls Cammeray | ${business.name}`,
    description: `Retaining wall construction in Cammeray. Ridge-top properties, garden walls and level-change solutions near Cammeray Golf Course. Contact ${business.name}.`,
    canonical: `${business.url}/cammeray/`,
    ogImage: business.brand.assets.ogImage,
  },
  hero: {
    eyebrow: "Cammeray Retaining Walls",
    title: "Retaining Walls Cammeray",
    description:
      "Retaining wall construction for ridge-top properties, established gardens and mixed housing stock in Cammeray. We build walls suited to the varied terrain of this quiet residential suburb.",
    backgroundImage: "/images/service-hero.webp",
    backgroundAlt: "Retaining wall construction in Cammeray",
    primaryCtaLabel: "Request a Quote",
    primaryCtaHref: "/contact-us/",
    secondaryCtaLabel: business.contact.phoneDisplay,
    secondaryCtaHref: business.contact.phoneHref,
    stats: [
      { value: "Ridge", label: "Elevated position" },
      { value: "Mixed", label: "Housing types" },
      { value: "Established", label: "Garden settings" },
      { value: "Residential", label: "Quiet streets" },
    ],
  },
  intro: {
    eyebrow: "Local Knowledge",
    heading: "Retaining walls for Cammeray properties",
    paragraphs: [
      "Cammeray occupies elevated ground between Crows Nest and Northbridge, with many properties enjoying district views. The suburb includes a mix of original cottages, post-war homes and newer apartment developments, each with different retaining wall requirements.",
      "We construct concrete sleeper, rendered concrete and block walls for Cammeray homes. Garden terracing, driveway support and boundary definition are common applications in this established residential suburb.",
    ],
    image: "/images/services01.webp",
    imageAlt: "Block retaining wall in Cammeray garden",
    checklist: [
      "Garden terrace construction",
      "Driveway retaining walls",
      "Boundary definition systems",
      "Level-change solutions",
    ],
  },
  benefits: {
    eyebrow: "Why Local Understanding Helps",
    heading: "Working with the character of Cammeray",
    items: [
      {
        title: "Ridge-top drainage",
        description:
          "The elevated position of Cammeray means water drains away from many properties. We still provide proper drainage provisions to protect wall foundations and prevent undermining.",
      },
      {
        title: "Mixed housing stock",
        description:
          "From Federation cottages to 1960s apartments, wall design needs to suit varied architectural styles and property types across the suburb.",
      },
      {
        title: "Established garden settings",
        description:
          "Many Cammeray properties have mature gardens. We plan wall construction to preserve significant trees and integrate with existing landscaping.",
      },
      {
        title: "Quiet street considerations",
        description:
          "Residential amenity matters. We schedule work and manage construction impacts to maintain good relationships with neighbours.",
      },
    ],
  },
  process: {
    eyebrow: "Our Approach",
    heading: "Cammeray project process",
    image: "/images/contact-workers.webp",
    imageAlt: `${business.name} preparing Cammeray retaining wall work`,
    steps: [
      {
        title: "Initial enquiry",
        description:
          "Share your Cammeray address, wall purpose and any photos showing the current garden layout and access.",
      },
      {
        title: "Site review",
        description:
          "We assess drainage, soil conditions, existing vegetation and the relationship between the proposed wall and neighbouring properties.",
      },
      {
        title: "Quoted scope",
        description:
          "You receive a clear proposal covering wall type, dimensions, materials and any council notification requirements.",
      },
      {
        title: "Build and finish",
        description:
          "The wall is constructed with attention to the established garden setting, including backfill and surface restoration.",
      },
    ],
  },
  sections: [
    {
      eyebrow: "Suburb Profile",
      heading: "Walls for the residential character of Cammeray",
      paragraphs: [
        "Cammeray offers a quieter residential feel compared to busier Lower North Shore suburbs. Properties here benefit from established street trees, generous setbacks and mature gardens that give the suburb a settled character.",
        "Retaining walls in Cammeray often serve garden purposes, creating level planting beds, defining outdoor rooms and supporting driveways on sloping blocks. The wall design should enhance rather than dominate the garden setting.",
      ],
      image: "/images/services06.webp",
      imageAlt: "Garden retaining wall in established Cammeray property",
      imagePosition: "right",
      items: [
        "Garden bed terracing",
        "Driveway support walls",
        "Outdoor living spaces",
        "Boundary screening",
      ],
    },
  ],
  faq: {
    eyebrow: "Common Questions",
    heading: "Cammeray Retaining Wall FAQs",
    items: [
      {
        question: "What wall types suit Cammeray gardens?",
        answer:
          "Concrete sleeper walls offer clean lines for contemporary gardens. Rendered concrete and block walls suit properties wanting a painted finish that blends with the house.",
      },
      {
        question: "Can walls be built around existing trees?",
        answer:
          "Yes, with careful planning. We assess tree root zones and design wall alignment and footings to minimise impact on significant trees.",
      },
      {
        question: "Do small garden walls need council approval?",
        answer:
          "Walls under 600mm often qualify as exempt development. Taller walls or those near boundaries typically require development application. We can advise on requirements.",
      },
      {
        question: "How do I request a quote?",
        answer: `Call ${business.contact.phoneDisplay} or use the contact form with your Cammeray address and project details.`,
      },
    ],
  },
  cta: {
    eyebrow: "Get Started",
    heading: "Plan your Cammeray retaining wall",
    text: `Contact ${business.name} to discuss your garden, driveway or boundary wall requirements.`,
    primaryLabel: "Request a Quote",
    primaryHref: "/contact-us/",
    secondaryLabel: business.contact.phoneDisplay,
    secondaryHref: business.contact.phoneHref,
  },
  schema: {
    serviceType: "Retaining Wall Construction",
    areaServed: "Cammeray, Sydney, NSW",
    description:
      "Professional retaining wall construction in Cammeray for garden terracing, driveway support and boundary walls in this established residential suburb.",
    provider: business.name,
  },
};

// Willoughby - commercial centre, larger blocks, family homes, gentler terrain
const willoughbySuburb: SuburbPageData = {
  slug: "willoughby",
  parentArea,
  seo: {
    title: `Retaining Walls Willoughby | ${business.name}`,
    description: `Retaining wall construction in Willoughby. Family homes, garden walls and property boundaries across this established Lower North Shore suburb. Contact ${business.name}.`,
    canonical: `${business.url}/willoughby/`,
    ogImage: business.brand.assets.ogImage,
  },
  hero: {
    eyebrow: "Willoughby Retaining Walls",
    title: "Retaining Walls Willoughby",
    description:
      "Retaining wall construction for family homes, generous blocks and established gardens in Willoughby. We build walls suited to the residential character of this accessible Lower North Shore suburb.",
    backgroundImage: "/images/home-hero.webp",
    backgroundAlt: "Retaining wall construction in Willoughby",
    primaryCtaLabel: "Request a Quote",
    primaryCtaHref: "/contact-us/",
    secondaryCtaLabel: business.contact.phoneDisplay,
    secondaryCtaHref: business.contact.phoneHref,
    stats: [
      { value: "Family", label: "Home focus" },
      { value: "Generous", label: "Block sizes" },
      { value: "Accessible", label: "Site conditions" },
      { value: "Established", label: "Garden settings" },
    ],
  },
  intro: {
    eyebrow: "Local Experience",
    heading: "Retaining walls for Willoughby homes",
    paragraphs: [
      "Willoughby offers larger blocks and more accessible terrain than the steeper harbour suburbs. Properties here include family homes with substantial gardens, requiring retaining walls for level changes, garden beds and boundary definition.",
      "We construct concrete sleeper, block and rendered walls for Willoughby properties. Better access conditions in this suburb often allow more efficient construction compared to the tighter streets closer to the harbour.",
    ],
    image: "/images/services03.webp",
    imageAlt: "Concrete retaining wall for Willoughby family home",
    checklist: [
      "Garden level-change walls",
      "Boundary retaining systems",
      "Pool surround walls",
      "Driveway and garage support",
    ],
  },
  benefits: {
    eyebrow: "Why Willoughby Works Well",
    heading: "Advantages of Willoughby conditions",
    items: [
      {
        title: "Better site access",
        description:
          "Wider streets and larger blocks in Willoughby typically allow standard equipment access, making construction more straightforward and cost-effective.",
      },
      {
        title: "Generous garden space",
        description:
          "Larger blocks mean retaining walls often serve garden purposes - creating terraced planting areas, defining lawn edges and supporting outdoor living spaces.",
      },
      {
        title: "Family property focus",
        description:
          "Many Willoughby homes serve families with children. We consider safety, durability and low maintenance when designing walls for these properties.",
      },
      {
        title: "Moderate terrain",
        description:
          "While some areas slope, Willoughby terrain is generally less severe than harbour-front suburbs, often requiring simpler wall solutions.",
      },
    ],
  },
  process: {
    eyebrow: "Our Process",
    heading: "Willoughby project workflow",
    image: "/images/contact-workers.webp",
    imageAlt: `${business.name} on a Willoughby retaining wall project`,
    steps: [
      {
        title: "Project enquiry",
        description:
          "Share your Willoughby address, what the wall needs to achieve and photos showing the site and access.",
      },
      {
        title: "Site assessment",
        description:
          "We review terrain, drainage, soil conditions, existing features and the most practical wall approach for your property.",
      },
      {
        title: "Clear quotation",
        description:
          "You receive a detailed scope covering wall type, dimensions, materials and timeframe.",
      },
      {
        title: "Efficient construction",
        description:
          "The wall is built with good site management, proper drainage installation and clean completion.",
      },
    ],
  },
  sections: [
    {
      eyebrow: "Family Focus",
      heading: "Walls for family properties in Willoughby",
      paragraphs: [
        "The character of Willoughby as a family suburb shapes retaining wall requirements. Walls here often define play areas, support pool surrounds, create level lawn space and provide safe boundaries for children.",
        "Durability and low maintenance matter for busy households. We recommend wall systems that perform reliably over time without requiring ongoing attention.",
      ],
      image: "/images/services05.webp",
      imageAlt: "Family garden retaining wall in Willoughby",
      imagePosition: "left",
      items: [
        "Play area boundaries",
        "Pool surround construction",
        "Level lawn creation",
        "Low-maintenance systems",
      ],
    },
  ],
  faq: {
    eyebrow: "Common Questions",
    heading: "Willoughby Retaining Wall FAQs",
    items: [
      {
        question: "What wall types suit family gardens?",
        answer:
          "Concrete sleeper and rendered concrete walls offer durability with smooth surfaces that are easy to keep clean. Block walls suit properties wanting a painted finish.",
      },
      {
        question: "Can you build walls around pools?",
        answer:
          "Yes. Pool surround walls need proper drainage and may require engineering certification. We coordinate with pool builders and council requirements as needed.",
      },
      {
        question: "How long does a typical wall take?",
        answer:
          "A straightforward garden wall often takes a few days. Larger projects with multiple levels or complex drainage take longer. We provide timeframe estimates with each quote.",
      },
      {
        question: "How do I get a quote?",
        answer: `Call ${business.contact.phoneDisplay} or complete the contact form with your Willoughby address and project details.`,
      },
    ],
  },
  cta: {
    eyebrow: "Start Your Project",
    heading: "Plan your Willoughby retaining wall",
    text: `Contact ${business.name} to discuss your garden, pool or boundary wall requirements.`,
    primaryLabel: "Request a Quote",
    primaryHref: "/contact-us/",
    secondaryLabel: business.contact.phoneDisplay,
    secondaryHref: business.contact.phoneHref,
  },
  schema: {
    serviceType: "Retaining Wall Construction",
    areaServed: "Willoughby, Sydney, NSW",
    description:
      "Professional retaining wall construction in Willoughby for family homes, gardens, pools and boundary definition.",
    provider: business.name,
  },
};

// Naremburn - quiet village feel, brick cottages, gentle slopes, tree-lined streets
const naremburnSuburb: SuburbPageData = {
  slug: "naremburn",
  parentArea,
  seo: {
    title: `Retaining Walls Naremburn | ${business.name}`,
    description: `Retaining wall construction in Naremburn. Cottage gardens, gentle slopes and established streetscapes in this quiet Lower North Shore village. Contact ${business.name}.`,
    canonical: `${business.url}/naremburn/`,
    ogImage: business.brand.assets.ogImage,
  },
  hero: {
    eyebrow: "Naremburn Retaining Walls",
    title: "Retaining Walls Naremburn",
    description:
      "Retaining wall construction for cottage gardens, gentle slopes and tree-lined streets in Naremburn. We build walls suited to the established residential character of this quiet village suburb.",
    backgroundImage: "/images/service-hero.webp",
    backgroundAlt: "Retaining wall construction in Naremburn",
    primaryCtaLabel: "Request a Quote",
    primaryCtaHref: "/contact-us/",
    secondaryCtaLabel: business.contact.phoneDisplay,
    secondaryCtaHref: business.contact.phoneHref,
    stats: [
      { value: "Village", label: "Quiet character" },
      { value: "Cottage", label: "Garden style" },
      { value: "Gentle", label: "Terrain slopes" },
      { value: "Tree-lined", label: "Streetscapes" },
    ],
  },
  intro: {
    eyebrow: "Village Character",
    heading: "Retaining walls for Naremburn properties",
    paragraphs: [
      "Naremburn retains a village character with quiet streets, brick cottages and established gardens. The gentler terrain of this suburb compared to the steeper harbour suburbs means many walls serve garden purposes rather than managing dramatic level changes.",
      "We construct block, concrete sleeper and rendered walls for Naremburn homes. The heritage character and mature street trees of this suburb require walls that complement the established streetscape.",
    ],
    image: "/images/services06.webp",
    imageAlt: "Garden retaining wall suited to Naremburn cottage setting",
    checklist: [
      "Cottage garden walls",
      "Gentle slope solutions",
      "Heritage-sympathetic designs",
      "Tree protection planning",
    ],
  },
  benefits: {
    eyebrow: "Why Village Character Matters",
    heading: "Respecting the setting of Naremburn",
    items: [
      {
        title: "Cottage garden scale",
        description:
          "Naremburn gardens often have a cottage character with layered planting. Retaining walls should complement this informal style rather than imposing a stark modern look.",
      },
      {
        title: "Gentle terrain",
        description:
          "Most Naremburn blocks have manageable slopes without the dramatic drops found closer to the harbour. This often allows simpler wall solutions.",
      },
      {
        title: "Heritage streetscapes",
        description:
          "Many streets feature original brick cottages and mature trees. New walls should respect this established character.",
      },
      {
        title: "Tree canopy protection",
        description:
          "Street trees and garden specimens in Naremburn are valued. We plan construction to avoid damage to significant trees.",
      },
    ],
  },
  process: {
    eyebrow: "Our Approach",
    heading: "Naremburn project process",
    image: "/images/contact-workers.webp",
    imageAlt: `${business.name} preparing Naremburn garden wall work`,
    steps: [
      {
        title: "Initial contact",
        description:
          "Share your Naremburn address, wall purpose and photos showing your garden and any trees near the proposed wall location.",
      },
      {
        title: "Garden assessment",
        description:
          "We review the slope, existing plantings, mature trees and the appropriate wall style for the character of your property.",
      },
      {
        title: "Proposal",
        description:
          "You receive a scope covering wall design, materials suited to the garden setting and any approval considerations.",
      },
      {
        title: "Construction",
        description:
          "The wall is built with care for existing garden features and restored planting beds on completion.",
      },
    ],
  },
  sections: [
    {
      eyebrow: "Garden Focus",
      heading: "Walls for cottage gardens in Naremburn",
      paragraphs: [
        "Cottage gardens in Naremburn feature established plantings, layered beds and informal pathways. Retaining walls here often create planting terraces, define garden rooms and edge pathways rather than holding back major excavations.",
        "Materials that weather naturally or accept a painted finish suit these garden settings. The wall becomes part of the planted landscape rather than a dominant structural element.",
      ],
      image: "/images/services01.webp",
      imageAlt: "Cottage garden retaining wall in Naremburn",
      imagePosition: "right",
      items: [
        "Planting terrace walls",
        "Garden room definition",
        "Pathway edging",
        "Weathered natural finishes",
      ],
    },
  ],
  faq: {
    eyebrow: "Common Questions",
    heading: "Naremburn Retaining Wall FAQs",
    items: [
      {
        question: "What wall styles suit cottage gardens?",
        answer:
          "Block walls with rendered or painted finishes, sandstone for heritage properties, and timber sleepers for informal settings all work well in the cottage garden context of Naremburn.",
      },
      {
        question: "Can you work around mature trees?",
        answer:
          "Yes. We assess root zones and plan wall alignment and footings to protect significant trees. Some wall locations may need adjustment to avoid major roots.",
      },
      {
        question: "Are Naremburn walls typically smaller?",
        answer:
          "Often yes. The gentler terrain means many walls are under 1m in height. These can sometimes be built as exempt development without full council approval.",
      },
      {
        question: "How do I request a quote?",
        answer: `Call ${business.contact.phoneDisplay} or use the contact form with your Naremburn address and project details.`,
      },
    ],
  },
  cta: {
    eyebrow: "Get Started",
    heading: "Plan your Naremburn garden wall",
    text: `Contact ${business.name} to discuss your cottage garden retaining wall requirements.`,
    primaryLabel: "Request a Quote",
    primaryHref: "/contact-us/",
    secondaryLabel: business.contact.phoneDisplay,
    secondaryHref: business.contact.phoneHref,
  },
  schema: {
    serviceType: "Retaining Wall Construction",
    areaServed: "Naremburn, Sydney, NSW",
    description:
      "Professional retaining wall construction in Naremburn for cottage gardens, gentle slopes and heritage-sympathetic garden design.",
    provider: business.name,
  },
};

export const lowerNorthShoreSuburbs: SuburbPageData[] = [
  mosmanSuburb,
  cremorneSuburb,
  northbridgeSuburb,
  cammeraySuburb,
  willoughbySuburb,
  naremburnSuburb,
];
