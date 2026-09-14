import type { LocationPageData } from "@/types/location";
import { business } from "@/data/business";

export const easternSuburbs: LocationPageData = {
  slug: "eastern-suburbs",
  navLabel: "Eastern Suburbs",
  childSuburbSlugs: [
    "vaucluse",
    "bellevue-hill",
    "dover-heights",
    "bondi",
    "coogee",
    "bronte",
  ],

  seo: {
    title: `Retaining Walls Eastern Suburbs Sydney - ${business.name}`,
    description:
      "Professional retaining wall construction across Eastern Suburbs Sydney. Sandstone and concrete walls for steep coastal blocks, near-surface rock and high-value sloping properties.",
    canonical: "https://retainingwallsbuilders.com.au/eastern-suburbs/",
  },

  hero: {
    eyebrow: "Eastern Suburbs",
    title: "Retaining Walls Eastern Suburbs",
    description:
      "Retaining wall solutions for the Eastern Suburbs, where steep coastal blocks, near-surface rock and compact high-value sites demand precise engineering. We build sandstone and concrete walls that maximise usable garden space on challenging slopes.",
    backgroundImage: "/images/home-hero.webp",
    backgroundAlt: "Retaining wall construction in Eastern Suburbs Sydney",
    primaryCtaLabel: "Request a Quote",
    primaryCtaHref: "/contact/",
    secondaryCtaLabel: business.contact.phoneDisplay,
    secondaryCtaHref: business.contact.phoneHref,
    stats: [
      { value: "Coastal", label: "Block Expertise" },
      { value: "Rock", label: "Excavation Ready" },
      { value: "Sandstone", label: "Specialists" },
      { value: "High-Value", label: "Properties" },
    ],
  },

  intro: {
    eyebrow: "Local Expertise",
    heading: "Retaining walls shaped by Eastern Suburbs terrain",
    paragraphs: [
      "The Eastern Suburbs sit on some of the most valuable and geologically demanding land in Sydney. Properties from Vaucluse to Bronte share common challenges: steep gradients carved into sandstone bedrock, compact block sizes that leave little margin for error, and owners who expect premium results.",
      "Our approach accounts for near-surface rock that standard contractors often underestimate. We assess excavation requirements before quoting, specify appropriate wall systems for the substrate, and build structures that turn difficult slopes into functional outdoor areas.",
      "Whether the goal is a terraced garden in Bellevue Hill, additional lawn space in Dover Heights, or stabilising a cliff-edge boundary in Bondi, we match the wall type to the site rather than forcing a standard solution onto unique conditions.",
    ],
    image: "/images/services01.webp",
    imageAlt: "Retaining wall project in Eastern Suburbs Sydney",
    checklist: [
      "Sandstone wall construction",
      "Concrete retaining systems",
      "Near-surface rock excavation",
      "Steep gradient engineering",
      "Compact site access solutions",
      "Heritage-sensitive installations",
    ],
  },

  benefits: {
    eyebrow: "Why Choose Us",
    heading: "Built for Eastern Suburbs conditions",
    items: [
      {
        title: "Rock-Ready Assessment",
        description:
          "We evaluate sandstone depth and hardness before finalising designs. This prevents budget surprises when excavation hits solid rock and ensures the wall system suits the substrate.",
      },
      {
        title: "Compact Site Capability",
        description:
          "Eastern Suburbs blocks often have restricted access and tight boundaries. Our crews work efficiently in constrained spaces without compromising structural quality.",
      },
      {
        title: "Premium Material Selection",
        description:
          "High-value properties deserve appropriate finishes. We source quality sandstone, select concrete mixes for coastal exposure, and match aesthetics to the neighbourhood character.",
      },
      {
        title: "Slope Maximisation",
        description:
          "Every square metre matters on compact Eastern Suburbs lots. We engineer walls that create the largest possible flat areas for gardens, entertainment spaces or pools.",
      },
    ],
  },

  process: {
    eyebrow: "Our Process",
    heading: "From site assessment to completed wall",
    image: "/images/services02.webp",
    imageAlt: "Retaining wall construction process Eastern Suburbs",
    steps: [
      {
        title: "Geological evaluation",
        description:
          "We inspect the site for rock depth, soil composition and drainage patterns. Eastern Suburbs properties often require probe testing to assess excavation complexity before accurate quoting.",
      },
      {
        title: "Engineering and design",
        description:
          "Wall specifications account for slope angle, surcharge loads, rock anchoring requirements and council setbacks. We produce drawings suitable for certification where required.",
      },
      {
        title: "Material procurement",
        description:
          "Sandstone blocks, reinforced concrete, steel reinforcement and drainage components are sourced to specification. We coordinate delivery timing to minimise disruption on narrow streets.",
      },
      {
        title: "Construction and completion",
        description:
          "Our crews excavate, form, pour or stack according to the approved design. Drainage installation, backfilling and site restoration follow systematic quality checks.",
      },
    ],
  },

  faq: {
    eyebrow: "Common Questions",
    heading: "Retaining walls in the Eastern Suburbs",
    items: [
      {
        question: "How does rock affect retaining wall costs in the Eastern Suburbs?",
        answer:
          "Near-surface sandstone is common throughout the Eastern Suburbs. When excavation encounters solid rock, specialised equipment and additional time are required. We assess rock depth during site inspection and factor excavation complexity into our quotes rather than presenting surprises during construction.",
      },
      {
        question: "What wall types suit steep Eastern Suburbs blocks?",
        answer:
          "Sandstone walls complement the natural geology and heritage character of suburbs like Vaucluse and Bellevue Hill. Reinforced concrete provides maximum strength for severe gradients and heavy surcharge loads. We recommend the appropriate system based on slope angle, height requirements and visual preferences.",
      },
      {
        question: "Can you work on properties with limited access?",
        answer:
          "Many Eastern Suburbs homes have narrow driveways, steep entries or rear-only access. We select equipment and plan material staging to suit constrained sites. Where crane access is unavailable, we use alternative lifting and placement methods.",
      },
      {
        question: "Do Eastern Suburbs councils have specific retaining wall requirements?",
        answer:
          "Waverley, Woollahra and Randwick councils each have development controls affecting wall height, setbacks and materials in certain zones. Heritage conservation areas may have additional aesthetic requirements. We advise on approval pathways based on your property location and wall specifications.",
      },
      {
        question: "How do you protect neighbouring properties during construction?",
        answer:
          "Boundary walls require careful excavation sequencing and temporary support measures. We install shoring where necessary, manage drainage to prevent water migration, and maintain clear communication with neighbours throughout the project.",
      },
    ],
  },

  cta: {
    eyebrow: "Start Your Project",
    heading: "Discuss your Eastern Suburbs retaining wall",
    text: "Share your site details and wall requirements. We provide straightforward advice on wall types, excavation considerations and realistic budgets for Eastern Suburbs properties.",
    primaryLabel: "Request a Quote",
    primaryHref: "/contact/",
    secondaryLabel: business.contact.phoneDisplay,
    secondaryHref: business.contact.phoneHref,
  },

  schema: {
    serviceType: "Retaining Wall Construction",
    areaServed: "Eastern Suburbs, Sydney, NSW",
    description:
      "Professional retaining wall construction services across Eastern Suburbs Sydney, specialising in sandstone and concrete walls for steep coastal blocks and high-value properties.",
    provider: business.name,
  },
};
