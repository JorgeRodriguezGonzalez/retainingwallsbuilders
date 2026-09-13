/**
 * Sutherland Shire suburb data - Cloud Agents factory, not OpenClaw.
 */
import type { SuburbPageData } from "@/types/suburb";
import { business } from "@/data/business";

export const cronulla: SuburbPageData = {
  slug: "cronulla",
  parentArea: "sutherland-shire",

  seo: {
    title: "Retaining Wall Builders Cronulla | Coastal Wall Specialists",
    description:
      "Expert retaining wall builders in Cronulla. Specialising in sandy coastal soils, beachside properties and sloping blocks near the esplanade. Free quotes available.",
    canonical: "https://retainingwallsbuilders.com.au/cronulla/",
  },

  hero: {
    eyebrow: "Cronulla Retaining Walls",
    title: "Retaining Wall Builders in Cronulla",
    description:
      "Coastal retaining wall specialists for Cronulla properties. We understand the sandy soils, salt air exposure and beachside conditions that affect wall construction in this iconic surf suburb.",
    backgroundImage: "/images/home-hero.webp",
    backgroundAlt: "Retaining wall construction in Cronulla",
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
    eyebrow: "Cronulla Specialists",
    heading: "Retaining Walls Built for Beachside Living",
    paragraphs: [
      "Cronulla properties face unique challenges that require specialised retaining wall solutions. The sandy coastal soils, salt-laden air and proximity to the beach all influence how walls must be designed and built to last.",
      "From the esplanade apartments to the hillside homes overlooking the ocean, we have built retaining walls across Cronulla that withstand the coastal environment. Our designs account for soil movement, drainage in sandy conditions and material choices that resist salt corrosion.",
      "Whether you are creating a level backyard for entertaining, stabilising a sloping front garden or building terraced areas to maximise ocean views, we deliver walls engineered for Cronulla conditions.",
    ],
    image: "/images/services01.webp",
    imageAlt: "Retaining wall project in Cronulla",
    checklist: [
      "Sandy soil expertise",
      "Salt resistant materials",
      "Beachside property experience",
      "Drainage for coastal blocks",
      "View maximisation designs",
      "Council approval assistance",
    ],
  },

  benefits: {
    eyebrow: "Why Choose Us",
    heading: "Cronulla Retaining Wall Expertise",
    items: [
      {
        title: "Coastal Soil Knowledge",
        description:
          "Sandy soils in Cronulla require deeper footings and specialised drainage. We engineer foundations that remain stable despite the shifting nature of beach-adjacent ground.",
      },
      {
        title: "Salt Air Resistance",
        description:
          "Materials exposed to salt air in Cronulla corrode faster. We select concrete mixes, steel reinforcement and finishes designed to resist the coastal environment.",
      },
      {
        title: "Maximising Beach Views",
        description:
          "Many Cronulla walls are designed to create level entertaining areas while preserving ocean views. We work with your landscape to optimise both function and outlook.",
      },
      {
        title: "Local Beach Culture",
        description:
          "We understand Cronulla residents want outdoor spaces suited to the beach lifestyle. Our designs create areas for entertaining, gardens and access to suit how you live.",
      },
    ],
  },

  process: {
    eyebrow: "Our Approach",
    heading: "Building Your Cronulla Retaining Wall",
    image: "/images/services02.webp",
    imageAlt: "Retaining wall construction in Cronulla",
    steps: [
      {
        title: "Coastal Site Assessment",
        description:
          "We evaluate your Cronulla property for soil conditions, slope, proximity to the beach and salt exposure to determine the right wall approach.",
      },
      {
        title: "Engineered Design",
        description:
          "Based on site conditions, we design footings and drainage suited to sandy coastal soils. Walls over 600mm include certified engineering.",
      },
      {
        title: "Material Selection",
        description:
          "We recommend materials that resist salt corrosion and suit your aesthetic preferences, from concrete sleepers to natural sandstone.",
      },
      {
        title: "Construction",
        description:
          "Our crew builds your wall with proper coastal-grade materials, comprehensive drainage and techniques proven in beachside conditions.",
      },
      {
        title: "Completion",
        description:
          "We ensure drainage functions correctly, clean your site and leave you with a wall built to handle decades of Cronulla weather.",
      },
    ],
  },

  faq: {
    eyebrow: "Cronulla FAQs",
    heading: "Common Questions About Cronulla Retaining Walls",
    items: [
      {
        question: "How do sandy soils affect retaining walls in Cronulla?",
        answer:
          "Sandy soils can shift and settle, especially when wet. We install deeper footings that extend into stable ground and comprehensive drainage to prevent water pooling behind the wall, which causes movement in sandy conditions.",
      },
      {
        question: "What materials resist salt air in Cronulla?",
        answer:
          "We use high-strength concrete mixes with appropriate cover over reinforcement, galvanised or stainless steel where needed, and protective coatings. For timber walls, we select treated species rated for coastal exposure.",
      },
      {
        question: "Can you build walls on sloping Cronulla blocks?",
        answer:
          "Yes, many Cronulla properties slope toward or away from the beach. We regularly build tiered walls that create level areas while managing the challenging combination of slope and sandy soil.",
      },
      {
        question: "Do Cronulla retaining walls need council approval?",
        answer:
          "Walls over 600mm generally require approval from Sutherland Shire Council. Properties near the beach or foreshore may have additional heritage or environmental requirements we can help navigate.",
      },
    ],
  },

  cta: {
    eyebrow: "Start Your Project",
    heading: "Get Your Free Cronulla Quote",
    text: "Contact us for a free site assessment and detailed quote for your Cronulla retaining wall project.",
    primaryLabel: "Request Quote",
    primaryHref: "#quote",
    secondaryLabel: business.contact.phoneDisplay,
    secondaryHref: business.contact.phoneHref,
  },

  schema: {
    serviceType: "Retaining Wall Construction",
    areaServed: "Cronulla, NSW",
    description:
      "Expert retaining wall builders in Cronulla specialising in coastal conditions, sandy soils and beachside properties.",
    provider: business.name,
  },
};

export const caringbah: SuburbPageData = {
  slug: "caringbah",
  parentArea: "sutherland-shire",

  seo: {
    title: "Retaining Wall Builders Caringbah | Residential Wall Experts",
    description:
      "Professional retaining wall construction in Caringbah. Experienced with established residential blocks, sloping yards and drainage solutions. Free on-site quotes.",
    canonical: "https://retainingwallsbuilders.com.au/caringbah/",
  },

  hero: {
    eyebrow: "Caringbah Retaining Walls",
    title: "Retaining Wall Builders in Caringbah",
    description:
      "Trusted retaining wall construction for Caringbah homes. We work with the established residential blocks and varied terrain found throughout this central Shire suburb.",
    backgroundImage: "/images/home-hero.webp",
    backgroundAlt: "Retaining wall construction in Caringbah",
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
    eyebrow: "Caringbah Experts",
    heading: "Retaining Walls for Established Caringbah Properties",
    paragraphs: [
      "Caringbah features a mix of established homes on blocks that often need retaining walls to maximise usable space. The varied terrain includes gentle slopes, steeper sections near the waterways and properties that have settled over decades.",
      "We regularly work on Caringbah projects ranging from replacing aging timber walls to building new structures for renovations and extensions. Our team understands the access challenges of working in established residential streets and the care required around existing landscaping.",
      "Whether your backyard slopes away from the house, you need to level an area for a pool or outdoor entertaining, or existing walls have failed, we deliver solutions suited to Caringbah properties.",
    ],
    image: "/images/services03.webp",
    imageAlt: "Retaining wall project in Caringbah",
    checklist: [
      "Established block expertise",
      "Failed wall replacement",
      "Pool and patio preparation",
      "Renovation support walls",
      "Neighbour boundary solutions",
      "Minimal disruption approach",
    ],
  },

  benefits: {
    eyebrow: "Our Strengths",
    heading: "Why Caringbah Homeowners Choose Us",
    items: [
      {
        title: "Established Property Experience",
        description:
          "We understand working on mature blocks with existing gardens, structures and services. Our crews work carefully to minimise impact on your established property.",
      },
      {
        title: "Replacement Wall Specialists",
        description:
          "Many Caringbah homes have aging retaining walls that need replacement. We remove old structures safely and build new walls designed for another generation of service.",
      },
      {
        title: "Boundary Wall Expertise",
        description:
          "Walls near property boundaries require careful planning around access, footings and neighbour coordination. We handle these sensitive projects professionally.",
      },
      {
        title: "Renovation Integration",
        description:
          "Planning a home extension or outdoor renovation? We build retaining walls that integrate with your broader project and coordinate with other trades as needed.",
      },
    ],
  },

  process: {
    eyebrow: "How We Work",
    heading: "Your Caringbah Retaining Wall Project",
    image: "/images/services04.webp",
    imageAlt: "Retaining wall construction process in Caringbah",
    steps: [
      {
        title: "Property Assessment",
        description:
          "We inspect your Caringbah block to assess existing conditions, soil type, drainage patterns and any structures or services that affect the wall design.",
      },
      {
        title: "Solution Design",
        description:
          "We recommend the best wall type for your situation, considering height requirements, aesthetic preferences and how the wall integrates with your property.",
      },
      {
        title: "Access Planning",
        description:
          "Caringbah streets vary in access. We plan material delivery and equipment positioning to minimise disruption to you and your neighbours.",
      },
      {
        title: "Professional Construction",
        description:
          "Our experienced team builds your wall with proper drainage, quality materials and techniques that deliver lasting results.",
      },
      {
        title: "Site Restoration",
        description:
          "We restore disturbed areas, remove all waste and leave your property clean and ready for landscaping or immediate use.",
      },
    ],
  },

  faq: {
    eyebrow: "Caringbah FAQs",
    heading: "Questions About Caringbah Retaining Walls",
    items: [
      {
        question: "Can you replace an old retaining wall in Caringbah?",
        answer:
          "Yes, we regularly replace failed timber and concrete walls throughout Caringbah. We demolish the old structure, assess the underlying conditions and build a new wall designed for long-term performance.",
      },
      {
        question: "How do you work around existing gardens and structures?",
        answer:
          "We plan access routes and work areas to minimise impact on your established property. Where possible, we protect or relocate plants and restore landscaping after construction.",
      },
      {
        question: "What about retaining walls on boundaries with neighbours?",
        answer:
          "Boundary walls require coordination with neighbours regarding access, costs and design. We can assist with these discussions and ensure the wall meets council requirements for boundary construction.",
      },
      {
        question: "Do I need council approval for a Caringbah retaining wall?",
        answer:
          "Walls over 600mm high generally need development approval from Sutherland Shire Council. We assess your specific requirements and handle the approval process where needed.",
      },
    ],
  },

  cta: {
    eyebrow: "Get Started",
    heading: "Request Your Free Caringbah Quote",
    text: "Contact us for a free on-site assessment and quote for your Caringbah retaining wall project.",
    primaryLabel: "Request Quote",
    primaryHref: "#quote",
    secondaryLabel: business.contact.phoneDisplay,
    secondaryHref: business.contact.phoneHref,
  },

  schema: {
    serviceType: "Retaining Wall Construction",
    areaServed: "Caringbah, NSW",
    description:
      "Professional retaining wall builders in Caringbah. Experienced with established residential blocks and wall replacement projects.",
    provider: business.name,
  },
};

export const sylvania: SuburbPageData = {
  slug: "sylvania",
  parentArea: "sutherland-shire",

  seo: {
    title: "Retaining Wall Builders Sylvania | Waterfront Wall Specialists",
    description:
      "Retaining wall experts in Sylvania. Specialising in Georges River waterfront properties, marina-side blocks and residential slopes. Free site inspections.",
    canonical: "https://retainingwallsbuilders.com.au/sylvania/",
  },

  hero: {
    eyebrow: "Sylvania Retaining Walls",
    title: "Retaining Wall Builders in Sylvania",
    description:
      "Waterfront and residential retaining wall specialists for Sylvania. We understand the unique challenges of properties along the Georges River and the sloping terrain throughout this waterside suburb.",
    backgroundImage: "/images/home-hero.webp",
    backgroundAlt: "Retaining wall construction in Sylvania",
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
    eyebrow: "Sylvania Specialists",
    heading: "Retaining Walls for Waterfront and Residential Properties",
    paragraphs: [
      "Sylvania properties range from prestigious waterfront homes along the Georges River to established residential blocks throughout the suburb. Each presents distinct retaining wall requirements that demand local expertise.",
      "Waterfront properties face challenges including tidal influence, erosion, moisture levels and often require specialised approvals. Inland Sylvania blocks frequently slope toward the river, needing walls to create level outdoor areas and manage water flow.",
      "Our team has extensive experience building walls throughout Sylvania, from the marina precinct to the quieter residential streets. We understand the soil conditions, drainage requirements and aesthetic expectations of this sought after suburb.",
    ],
    image: "/images/services05.webp",
    imageAlt: "Retaining wall project in Sylvania",
    checklist: [
      "Waterfront property expertise",
      "Georges River conditions",
      "Erosion control solutions",
      "Sloping block levelling",
      "Marina-side experience",
      "Drainage integration",
    ],
  },

  benefits: {
    eyebrow: "Sylvania Advantages",
    heading: "Why Sylvania Residents Trust Our Work",
    items: [
      {
        title: "Waterfront Expertise",
        description:
          "Properties along the Georges River require walls that handle moisture, tidal movement and erosion. We design foundations and drainage suited to waterfront conditions.",
      },
      {
        title: "River View Optimisation",
        description:
          "Many Sylvania walls are built to create level entertaining areas while preserving river views. We work with your landscape to maximise both function and outlook.",
      },
      {
        title: "Quality Materials",
        description:
          "Sylvania homeowners expect quality that matches their properties. We use premium materials and finishes that complement the high standards of the area.",
      },
      {
        title: "Approval Navigation",
        description:
          "Waterfront walls often need additional approvals beyond standard council requirements. We understand these processes and handle applications professionally.",
      },
    ],
  },

  process: {
    eyebrow: "Our Method",
    heading: "Building Your Sylvania Retaining Wall",
    image: "/images/services06.webp",
    imageAlt: "Retaining wall construction in Sylvania",
    steps: [
      {
        title: "Site Evaluation",
        description:
          "We assess your Sylvania property for soil conditions, water table levels, slope and proximity to the river to determine the optimal wall approach.",
      },
      {
        title: "Custom Design",
        description:
          "Based on site conditions and your requirements, we design a wall system with appropriate footings, drainage and materials for lasting performance.",
      },
      {
        title: "Approval Handling",
        description:
          "We prepare applications for council and any additional waterfront approvals, managing the process to minimise delays.",
      },
      {
        title: "Expert Construction",
        description:
          "Our skilled team builds your wall using techniques proven in Sylvania conditions, with comprehensive drainage and quality workmanship.",
      },
      {
        title: "Final Handover",
        description:
          "We complete final inspections, ensure all drainage functions correctly and leave your property ready for landscaping or immediate enjoyment.",
      },
    ],
  },

  faq: {
    eyebrow: "Sylvania FAQs",
    heading: "Common Questions About Sylvania Retaining Walls",
    items: [
      {
        question: "Do waterfront walls in Sylvania need special approvals?",
        answer:
          "Yes, walls near the Georges River often require approval from both Sutherland Shire Council and potentially other authorities depending on proximity to the waterway. We assess your property and manage all necessary applications.",
      },
      {
        question: "How do you handle high water tables near the river?",
        answer:
          "We design drainage systems that manage groundwater pressure behind the wall. This may include agricultural drains, weep holes and connection to stormwater systems to prevent hydrostatic pressure buildup.",
      },
      {
        question: "Can retaining walls help with erosion near the water?",
        answer:
          "Yes, properly designed walls can stabilise banks and prevent erosion. The design depends on your specific conditions, including wave action, tidal range and soil type.",
      },
      {
        question: "What materials suit Sylvania waterfront properties?",
        answer:
          "We commonly use concrete sleeper systems and sandstone for Sylvania waterfront walls. Both handle moisture well and suit the aesthetic of riverside properties. Material choice depends on wall height, conditions and your preferences.",
      },
    ],
  },

  cta: {
    eyebrow: "Ready to Begin",
    heading: "Get Your Free Sylvania Quote",
    text: "Contact us for a free site inspection and detailed quote for your Sylvania retaining wall project.",
    primaryLabel: "Request Quote",
    primaryHref: "#quote",
    secondaryLabel: business.contact.phoneDisplay,
    secondaryHref: business.contact.phoneHref,
  },

  schema: {
    serviceType: "Retaining Wall Construction",
    areaServed: "Sylvania, NSW",
    description:
      "Retaining wall specialists in Sylvania. Expert builders for waterfront properties along the Georges River and residential slopes.",
    provider: business.name,
  },
};

export const gymea: SuburbPageData = {
  slug: "gymea",
  parentArea: "sutherland-shire",

  seo: {
    title: "Retaining Wall Builders Gymea | Residential Slope Solutions",
    description:
      "Professional retaining wall construction in Gymea. Specialists in residential slopes, backyard levelling and tiered garden walls. Free quotes for all projects.",
    canonical: "https://retainingwallsbuilders.com.au/gymea/",
  },

  hero: {
    eyebrow: "Gymea Retaining Walls",
    title: "Retaining Wall Builders in Gymea",
    description:
      "Local retaining wall experts for Gymea properties. We specialise in the residential slopes and varying terrain found throughout this family-friendly Shire suburb.",
    backgroundImage: "/images/home-hero.webp",
    backgroundAlt: "Retaining wall construction in Gymea",
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
    eyebrow: "Gymea Experts",
    heading: "Retaining Walls for Family Homes and Gardens",
    paragraphs: [
      "Gymea properties typically feature the sloping blocks common throughout the Shire, with many homes needing retaining walls to create level backyards, garden beds and usable outdoor areas for families.",
      "The suburb sits between the bay and inland bushland, with soil conditions varying from sandy near Gymea Bay to clay-based further inland. This variation requires careful assessment to design walls suited to your specific block.",
      "We have built walls throughout Gymea, from small garden terraces to substantial structures supporting new extensions. Our team understands the residential character of the area and works with minimal disruption to your household.",
    ],
    image: "/images/services01.webp",
    imageAlt: "Retaining wall project in Gymea",
    checklist: [
      "Family home expertise",
      "Backyard levelling",
      "Garden terrace walls",
      "Pool area preparation",
      "Extension support walls",
      "Minimal household disruption",
    ],
  },

  benefits: {
    eyebrow: "Our Strengths",
    heading: "Why Gymea Families Choose Our Services",
    items: [
      {
        title: "Family Property Focus",
        description:
          "We understand Gymea families want safe, functional outdoor spaces. Our walls create level play areas, accessible gardens and practical entertaining zones.",
      },
      {
        title: "Garden Integration",
        description:
          "Many Gymea walls incorporate planting areas and garden beds. We design walls that work with your landscaping plans, not against them.",
      },
      {
        title: "Soil Variation Knowledge",
        description:
          "Gymea soil varies significantly by location. We assess your specific conditions and design foundations suited to whether you have sand, clay or rock.",
      },
      {
        title: "Residential Consideration",
        description:
          "We schedule work to minimise disruption to your family, maintain clean and safe sites, and communicate clearly throughout the project.",
      },
    ],
  },

  process: {
    eyebrow: "How We Work",
    heading: "Your Gymea Retaining Wall Project",
    image: "/images/services02.webp",
    imageAlt: "Retaining wall construction in Gymea",
    steps: [
      {
        title: "Home Visit Assessment",
        description:
          "We visit your Gymea property to understand your needs, assess conditions and discuss how a retaining wall can improve your outdoor space.",
      },
      {
        title: "Design and Quote",
        description:
          "We prepare a design suited to your block and budget, with a detailed quote covering all materials, labour and inclusions.",
      },
      {
        title: "Scheduling",
        description:
          "We schedule construction at a time that suits your family, with clear timelines for each stage of the project.",
      },
      {
        title: "Construction",
        description:
          "Our crew builds your wall efficiently while maintaining a safe, tidy site. We keep you informed of progress throughout.",
      },
      {
        title: "Completion",
        description:
          "We complete final checks, ensure drainage works correctly and leave your property clean and ready for use or landscaping.",
      },
    ],
  },

  faq: {
    eyebrow: "Gymea FAQs",
    heading: "Questions About Gymea Retaining Walls",
    items: [
      {
        question: "What wall height needs council approval in Gymea?",
        answer:
          "Walls over 600mm high generally require development approval from Sutherland Shire Council. We assess your requirements and handle the approval process if needed.",
      },
      {
        question: "Can you build walls for sloping backyards?",
        answer:
          "Yes, this is one of our most common projects in Gymea. We design walls to create level areas for lawns, play equipment, gardens or entertaining, transforming sloped yards into functional spaces.",
      },
      {
        question: "How do you handle different soil types in Gymea?",
        answer:
          "We test soil conditions during our assessment and design footings accordingly. Sandy areas near the bay need different treatment than clay soils inland. Proper foundation design prevents wall movement regardless of soil type.",
      },
      {
        question: "Can retaining walls prepare sites for pools?",
        answer:
          "Yes, we regularly build walls to level sites before pool installation. We coordinate with pool builders on timing and ensure our walls handle the additional loads and drainage requirements.",
      },
    ],
  },

  cta: {
    eyebrow: "Get Started",
    heading: "Request Your Free Gymea Quote",
    text: "Contact us for a free home visit and quote for your Gymea retaining wall project.",
    primaryLabel: "Request Quote",
    primaryHref: "#quote",
    secondaryLabel: business.contact.phoneDisplay,
    secondaryHref: business.contact.phoneHref,
  },

  schema: {
    serviceType: "Retaining Wall Construction",
    areaServed: "Gymea, NSW",
    description:
      "Professional retaining wall builders in Gymea. Specialists in residential slopes, backyard levelling and family property solutions.",
    provider: business.name,
  },
};

export const engadine: SuburbPageData = {
  slug: "engadine",
  parentArea: "sutherland-shire",

  seo: {
    title: "Retaining Wall Builders Engadine | Bushland Block Specialists",
    description:
      "Expert retaining wall construction in Engadine. Specialising in bushland blocks, steep terrain and larger properties near the Royal National Park. Free quotes.",
    canonical: "https://retainingwallsbuilders.com.au/engadine/",
  },

  hero: {
    eyebrow: "Engadine Retaining Walls",
    title: "Retaining Wall Builders in Engadine",
    description:
      "Bushland retaining wall specialists for Engadine properties. We work with the steep terrain, larger blocks and natural settings that define this suburb on the edge of the Royal National Park.",
    backgroundImage: "/images/home-hero.webp",
    backgroundAlt: "Retaining wall construction in Engadine",
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
    eyebrow: "Engadine Specialists",
    heading: "Retaining Walls for Bushland Properties",
    paragraphs: [
      "Engadine sits at the gateway to the Royal National Park, with properties that embrace the bushland setting. Many blocks feature steep terrain, sandstone outcrops and established native vegetation that require sensitive retaining wall solutions.",
      "The larger blocks common in Engadine often need substantial walls to create usable outdoor areas. Driveways climbing from the street, backyards falling away toward the bush and natural rock features all present opportunities for well-designed retaining structures.",
      "We appreciate the natural character that draws people to Engadine and design walls that work with the landscape. Whether you prefer sandstone that echoes local rock formations or contemporary concrete systems, we deliver walls suited to bushland living.",
    ],
    image: "/images/services03.webp",
    imageAlt: "Retaining wall project in Engadine bushland",
    checklist: [
      "Bushland block expertise",
      "Steep terrain solutions",
      "Sandstone rock integration",
      "Native garden compatibility",
      "Driveway support walls",
      "Bushfire zone compliance",
    ],
  },

  benefits: {
    eyebrow: "Why Choose Us",
    heading: "Engadine Retaining Wall Expertise",
    items: [
      {
        title: "Steep Terrain Specialists",
        description:
          "Engadine blocks often feature significant slopes requiring tiered walls or substantial single structures. We engineer walls to handle the loads and drainage challenges of steep sites.",
      },
      {
        title: "Natural Material Options",
        description:
          "Many Engadine residents prefer walls that complement the bushland setting. We offer sandstone, boulder walls and natural finishes that suit the environment.",
      },
      {
        title: "Bushfire Zone Experience",
        description:
          "Parts of Engadine fall within bushfire prone areas with specific requirements for construction. We understand these regulations and build compliant structures.",
      },
      {
        title: "Difficult Access Capability",
        description:
          "Engadine properties can present access challenges with steep driveways and bush surrounds. Our team has the equipment and experience to work in restricted conditions.",
      },
    ],
  },

  process: {
    eyebrow: "Our Approach",
    heading: "Building Your Engadine Retaining Wall",
    image: "/images/services04.webp",
    imageAlt: "Retaining wall construction in Engadine",
    steps: [
      {
        title: "Bushland Site Assessment",
        description:
          "We evaluate your Engadine property for slope angles, rock formations, soil conditions and vegetation to design a wall that works with your landscape.",
      },
      {
        title: "Sensitive Design",
        description:
          "We create designs that respect existing trees, rock features and the bushland character while delivering the structural outcomes you need.",
      },
      {
        title: "Approval Coordination",
        description:
          "We handle council applications and any additional requirements for bushfire zones or vegetation management.",
      },
      {
        title: "Careful Construction",
        description:
          "Our crew works with care around existing vegetation and features, using techniques that minimise site disturbance.",
      },
      {
        title: "Site Restoration",
        description:
          "We restore disturbed areas with appropriate materials and leave your bushland property in excellent condition.",
      },
    ],
  },

  faq: {
    eyebrow: "Engadine FAQs",
    heading: "Common Questions About Engadine Retaining Walls",
    items: [
      {
        question: "How do you work around existing sandstone on Engadine blocks?",
        answer:
          "We can incorporate natural rock features into wall designs, build against existing rock faces or work around outcrops. Often, existing sandstone becomes a feature of the finished project rather than an obstacle.",
      },
      {
        question: "What about retaining walls in bushfire prone areas?",
        answer:
          "We understand the requirements for construction in bushfire prone land. This includes material selection, vegetation clearance considerations and compliance with relevant standards.",
      },
      {
        question: "Can you access steep Engadine driveways with equipment?",
        answer:
          "We have equipment suited to difficult access sites and experience working on steep Engadine properties. We assess access during our site visit and plan accordingly.",
      },
      {
        question: "What wall materials suit the Engadine bushland setting?",
        answer:
          "Sandstone walls and natural boulder walls complement the bushland environment. We also offer concrete sleeper systems in earthy tones that blend with native surroundings.",
      },
    ],
  },

  cta: {
    eyebrow: "Start Your Project",
    heading: "Get Your Free Engadine Quote",
    text: "Contact us for a free site assessment and quote for your Engadine retaining wall project.",
    primaryLabel: "Request Quote",
    primaryHref: "#quote",
    secondaryLabel: business.contact.phoneDisplay,
    secondaryHref: business.contact.phoneHref,
  },

  schema: {
    serviceType: "Retaining Wall Construction",
    areaServed: "Engadine, NSW",
    description:
      "Expert retaining wall builders in Engadine. Specialists in bushland blocks, steep terrain and properties near the Royal National Park.",
    provider: business.name,
  },
};

export const menai: SuburbPageData = {
  slug: "menai",
  parentArea: "sutherland-shire",

  seo: {
    title: "Retaining Wall Builders Menai | Hillside Property Specialists",
    description:
      "Professional retaining wall construction in Menai. Experts in hilly terrain, newer developments and properties near bushland reserves. Free quotes available.",
    canonical: "https://retainingwallsbuilders.com.au/menai/",
  },

  hero: {
    eyebrow: "Menai Retaining Walls",
    title: "Retaining Wall Builders in Menai",
    description:
      "Hillside retaining wall specialists for Menai properties. We understand the varied terrain, modern developments and bushland borders that characterise this inland Shire suburb.",
    backgroundImage: "/images/home-hero.webp",
    backgroundAlt: "Retaining wall construction in Menai",
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
    eyebrow: "Menai Experts",
    heading: "Retaining Walls for Hilly Menai Properties",
    paragraphs: [
      "Menai developed across hilly terrain that creates natural challenges for outdoor spaces. Many properties need retaining walls to maximise usable yard area, support driveways and create level zones for pools, entertaining and gardens.",
      "The suburb includes a mix of established homes from its original development and newer constructions. Both present opportunities for retaining walls, whether replacing aging structures or building new walls as part of property improvements.",
      "Bordered by bushland reserves, Menai properties often combine residential needs with natural settings. We design walls that create functional spaces while respecting the bushland character that makes this suburb appealing.",
    ],
    image: "/images/services05.webp",
    imageAlt: "Retaining wall project in Menai",
    checklist: [
      "Hilly terrain expertise",
      "Modern home integration",
      "Driveway stabilisation",
      "Pool site preparation",
      "Bushland border solutions",
      "Extension support walls",
    ],
  },

  benefits: {
    eyebrow: "Our Advantages",
    heading: "Why Menai Property Owners Choose Us",
    items: [
      {
        title: "Hillside Engineering",
        description:
          "The hilly terrain in Menai requires walls engineered for significant height and load. We design structures that handle the demands of steep sites safely and reliably.",
      },
      {
        title: "Modern Home Compatibility",
        description:
          "Many Menai homes feature contemporary architecture. We offer wall systems and finishes that complement modern designs and integrate with outdoor living areas.",
      },
      {
        title: "Development Experience",
        description:
          "We work on both new construction projects and renovations throughout Menai, coordinating with builders and other trades as needed.",
      },
      {
        title: "Reserve Border Sensitivity",
        description:
          "Properties backing onto bushland require walls that manage drainage toward reserves appropriately and meet any relevant environmental requirements.",
      },
    ],
  },

  process: {
    eyebrow: "How We Work",
    heading: "Your Menai Retaining Wall Project",
    image: "/images/services06.webp",
    imageAlt: "Retaining wall construction in Menai",
    steps: [
      {
        title: "Terrain Assessment",
        description:
          "We evaluate slope angles, soil conditions and existing structures to understand the engineering requirements for your Menai property.",
      },
      {
        title: "Engineered Design",
        description:
          "For walls addressing significant slopes, we provide certified engineering that ensures structural adequacy and council compliance.",
      },
      {
        title: "Approvals Management",
        description:
          "We prepare and lodge council applications, managing the approval process to keep your project moving forward.",
      },
      {
        title: "Professional Construction",
        description:
          "Our experienced crew builds your wall with proper drainage, quality materials and workmanship that meets engineering specifications.",
      },
      {
        title: "Quality Completion",
        description:
          "We complete thorough final inspections, test drainage function and leave your site clean and ready for landscaping or use.",
      },
    ],
  },

  faq: {
    eyebrow: "Menai FAQs",
    heading: "Questions About Menai Retaining Walls",
    items: [
      {
        question: "What wall heights are common in Menai?",
        answer:
          "The hilly terrain in Menai means walls of 1 to 2 metres are common, with some sites requiring higher structures or multiple tiers. We engineer walls to suit your specific slope and requirements.",
      },
      {
        question: "Can you build walls for new home construction?",
        answer:
          "Yes, we regularly work on new builds throughout Menai, constructing walls before main building works begin. We coordinate with builders on timing and specifications.",
      },
      {
        question: "How do you manage drainage on steep Menai sites?",
        answer:
          "Proper drainage is critical on hilly sites. We install comprehensive systems including agricultural drains behind walls, weep holes and connections to stormwater to prevent water pressure buildup.",
      },
      {
        question: "What about properties near bushland reserves?",
        answer:
          "Walls near reserves may need to consider drainage direction, vegetation management and potentially additional approvals. We assess your specific situation and ensure compliance with all requirements.",
      },
    ],
  },

  cta: {
    eyebrow: "Get Started",
    heading: "Request Your Free Menai Quote",
    text: "Contact us for a free site assessment and quote for your Menai retaining wall project.",
    primaryLabel: "Request Quote",
    primaryHref: "#quote",
    secondaryLabel: business.contact.phoneDisplay,
    secondaryHref: business.contact.phoneHref,
  },

  schema: {
    serviceType: "Retaining Wall Construction",
    areaServed: "Menai, NSW",
    description:
      "Professional retaining wall builders in Menai. Experts in hilly terrain, modern developments and properties near bushland reserves.",
    provider: business.name,
  },
};

export const sutherlandShireSuburbs: SuburbPageData[] = [
  cronulla,
  caringbah,
  sylvania,
  gymea,
  engadine,
  menai,
];
