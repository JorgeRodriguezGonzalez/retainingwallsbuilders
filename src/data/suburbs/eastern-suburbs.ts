import type { SuburbPageData } from "@/types/suburb";
import { business } from "@/data/business";

/**
 * Eastern Suburbs suburb pages.
 * Cloud Agents factory, not OpenClaw.
 */

export const vaucluse: SuburbPageData = {
  slug: "vaucluse",
  parentArea: "eastern-suburbs",

  seo: {
    title: `Retaining Walls Vaucluse - ${business.name}`,
    description:
      "Expert retaining wall construction in Vaucluse. Sandstone and concrete walls for harbour-facing slopes, deep rock excavation and heritage-sensitive properties.",
    canonical: "https://retainingwallsbuilders.com.au/vaucluse/",
  },

  hero: {
    eyebrow: "Vaucluse",
    title: "Retaining Walls Vaucluse",
    description:
      "Retaining wall construction for Vaucluse properties, where harbour-facing slopes, established gardens and heritage considerations require walls that combine structural integrity with refined aesthetics.",
    backgroundImage: "/images/sandstone.jpeg",
    backgroundAlt: "Retaining wall construction in Vaucluse Sydney",
    primaryCtaLabel: "Request a Quote",
    primaryCtaHref: "/contact/",
    secondaryCtaLabel: business.contact.phoneDisplay,
    secondaryCtaHref: business.contact.phoneHref,
  },

  intro: {
    eyebrow: "Vaucluse Specialists",
    heading: "Retaining walls for Vaucluse harbour-side properties",
    paragraphs: [
      "Vaucluse properties occupy some of the most prized harbour-facing land in Sydney. The terrain descends steeply toward the water, with sandstone bedrock often sitting just below the surface. These conditions demand retaining walls engineered for both structural performance and visual harmony with the prestigious surroundings.",
      "Many Vaucluse homes feature established landscaping, mature trees and heritage elements that must be protected during construction. We plan wall alignments and excavation methods to preserve existing garden assets while creating the terraced spaces that maximise harbour views.",
      "Our sandstone walls complement the natural geology and period character common in Vaucluse. Where greater height or load capacity is needed, reinforced concrete provides the strength while architectural treatments maintain the aesthetic standard expected in this suburb.",
    ],
    image: "/images/sandstone2.webp",
    imageAlt: "Sandstone retaining wall in Vaucluse",
    checklist: [
      "Harbour-view terrace creation",
      "Heritage-sensitive construction",
      "Sandstone feature walls",
      "Deep rock excavation",
      "Mature garden protection",
      "Pool surrounds and level changes",
    ],
  },

  benefits: {
    eyebrow: "Why Choose Us",
    heading: "Built for Vaucluse conditions",
    items: [
      {
        title: "Heritage Awareness",
        description:
          "Vaucluse contains conservation areas and character homes. We work within heritage guidelines and design walls that complement rather than conflict with established property aesthetics.",
      },
      {
        title: "Harbour Slope Engineering",
        description:
          "The steep grades toward Sydney Harbour require walls calculated for significant earth pressures. Our engineering accounts for slope angle, surcharge loads and long-term stability.",
      },
      {
        title: "Premium Sandstone Work",
        description:
          "We source and construct with quality sandstone blocks that match the natural rock outcrops found throughout Vaucluse, creating walls that appear part of the landscape.",
      },
      {
        title: "Established Garden Care",
        description:
          "Construction methods protect root zones of mature trees and preserve existing plantings. We sequence work to minimise disturbance to gardens that have developed over decades.",
      },
    ],
  },

  process: {
    eyebrow: "Our Process",
    heading: "Vaucluse project delivery",
    image: "/images/sandstone3.jpg",
    imageAlt: "Retaining wall construction process in Vaucluse",
    steps: [
      {
        title: "Site and heritage assessment",
        description:
          "We evaluate slope conditions, rock depth and any heritage overlay requirements. Existing trees and garden features are documented for protection planning.",
      },
      {
        title: "Design development",
        description:
          "Wall specifications balance structural requirements with aesthetic goals. We coordinate with heritage consultants where conservation area rules apply.",
      },
      {
        title: "Careful construction",
        description:
          "Excavation proceeds with tree protection measures in place. Sandstone or concrete construction follows approved designs with quality controls at each stage.",
      },
      {
        title: "Landscape integration",
        description:
          "Completed walls receive backfilling, drainage commissioning and surface restoration that allows immediate replanting or turf establishment.",
      },
    ],
  },

  faq: {
    eyebrow: "Common Questions",
    heading: "Retaining walls in Vaucluse",
    items: [
      {
        question: "Do Vaucluse heritage rules affect retaining wall construction?",
        answer:
          "Properties within Woollahra Council heritage conservation areas may face additional requirements for wall materials and finishes. Sandstone is generally well-received in heritage contexts. We advise on approval pathways based on your specific property classification.",
      },
      {
        question: "How do you protect harbour views during wall construction?",
        answer:
          "Wall heights and alignments are designed to create usable terraces without blocking sight lines. We work with property owners to position walls that maximise both functional space and view retention.",
      },
      {
        question: "What access challenges are common in Vaucluse?",
        answer:
          "Steep driveways, narrow lanes and established gardens often restrict equipment access. We select appropriately sized machinery and plan material staging to work within these constraints without damaging existing landscaping.",
      },
    ],
  },

  cta: {
    eyebrow: "Start Your Project",
    heading: "Discuss your Vaucluse retaining wall",
    text: "Share your property details and project goals. We provide practical advice on wall solutions that suit Vaucluse conditions and aesthetic expectations.",
    primaryLabel: "Request a Quote",
    primaryHref: "/contact/",
    secondaryLabel: business.contact.phoneDisplay,
    secondaryHref: business.contact.phoneHref,
  },

  schema: {
    serviceType: "Retaining Wall Construction",
    areaServed: "Vaucluse, Sydney, NSW",
    description:
      "Professional retaining wall construction in Vaucluse, specialising in sandstone walls, harbour-slope engineering and heritage-sensitive installations.",
    provider: business.name,
  },
};

export const bellevueHill: SuburbPageData = {
  slug: "bellevue-hill",
  parentArea: "eastern-suburbs",

  seo: {
    title: `Retaining Walls Bellevue Hill - ${business.name}`,
    description:
      "Professional retaining wall construction in Bellevue Hill. Engineered walls for steep grades, terraced gardens and premium residential properties.",
    canonical: "https://retainingwallsbuilders.com.au/bellevue-hill/",
  },

  hero: {
    eyebrow: "Bellevue Hill",
    title: "Retaining Walls Bellevue Hill",
    description:
      "Retaining wall solutions for Bellevue Hill, where dramatic elevation changes, manicured gardens and architectural homes require walls engineered for both function and presentation.",
    backgroundImage: "/images/sandstone2.webp",
    backgroundAlt: "Retaining wall construction in Bellevue Hill Sydney",
    primaryCtaLabel: "Request a Quote",
    primaryCtaHref: "/contact/",
    secondaryCtaLabel: business.contact.phoneDisplay,
    secondaryCtaHref: business.contact.phoneHref,
  },

  intro: {
    eyebrow: "Bellevue Hill Specialists",
    heading: "Retaining walls for Bellevue Hill elevation challenges",
    paragraphs: [
      "Bellevue Hill rises steeply above the surrounding suburbs, creating properties with significant level changes that demand thoughtfully engineered retaining solutions. The reputation of this suburb for immaculate gardens and architectural homes raises the bar for wall construction quality.",
      "Many Bellevue Hill blocks require multiple terrace levels to create functional outdoor spaces. We design integrated wall systems that step down slopes gracefully, incorporating planting pockets, stairs and drainage that work together as a cohesive landscape structure.",
      "The mix of sandstone bedrock and clay soils across Bellevue Hill means wall foundations must suit the specific ground conditions on each site. Our assessment identifies the substrate before specifying footings, drainage and wall types that perform reliably long-term.",
    ],
    image: "/images/sandstone3.jpg",
    imageAlt: "Terraced retaining walls in Bellevue Hill",
    checklist: [
      "Multi-level terrace systems",
      "Architectural wall finishes",
      "Integrated stair construction",
      "Garden bed incorporation",
      "Pool terrace engineering",
      "Driveway retaining structures",
    ],
  },

  benefits: {
    eyebrow: "Why Choose Us",
    heading: "Built for Bellevue Hill terrain",
    items: [
      {
        title: "Multi-Terrace Design",
        description:
          "Steep Bellevue Hill blocks often need several wall levels working together. We engineer complete terrace systems rather than treating each wall in isolation.",
      },
      {
        title: "Architectural Integration",
        description:
          "Walls complement existing home architecture and landscape design. We coordinate finishes, materials and details with architects and landscape designers.",
      },
      {
        title: "Variable Ground Expertise",
        description:
          "Bellevue Hill geology varies from solid sandstone to clay pockets. Our assessment determines foundation requirements for the specific conditions on your site.",
      },
      {
        title: "Premium Execution",
        description:
          "Construction quality matches the standard expected in Bellevue Hill. Clean formwork, accurate stone placement and precise finishing distinguish our completed walls.",
      },
    ],
  },

  process: {
    eyebrow: "Our Process",
    heading: "Bellevue Hill project approach",
    image: "/images/sandstone.jpeg",
    imageAlt: "Retaining wall construction in Bellevue Hill",
    steps: [
      {
        title: "Slope and soil analysis",
        description:
          "We survey elevation changes, test soil conditions and identify rock levels. This information drives terrace planning and foundation design.",
      },
      {
        title: "Terrace system design",
        description:
          "Wall heights, setbacks and materials are specified as an integrated system. Stair locations, planting areas and drainage are incorporated from the start.",
      },
      {
        title: "Staged construction",
        description:
          "Multi-level walls proceed from lowest to highest terrace. Each level is completed and backfilled before the next begins, ensuring proper compaction and drainage.",
      },
      {
        title: "Finishing and handover",
        description:
          "Wall surfaces receive specified finishes. Drainage is tested, planting zones prepared and site restored ready for landscaping completion.",
      },
    ],
  },

  faq: {
    eyebrow: "Common Questions",
    heading: "Retaining walls in Bellevue Hill",
    items: [
      {
        question: "How many terrace levels can be built on a steep Bellevue Hill block?",
        answer:
          "The number of terraces depends on total elevation change, desired usable widths and wall height limits. We design terrace systems that balance the number of levels against construction complexity and ongoing maintenance access.",
      },
      {
        question: "Can retaining walls incorporate built-in seating or planters?",
        answer:
          "Walls can include integrated features like seating ledges, raised planter sections and recessed lighting provisions. These elements are designed into the wall structure rather than added afterward.",
      },
      {
        question: "What wall finishes suit Bellevue Hill homes?",
        answer:
          "Options include natural sandstone, off-form concrete with board marking, rendered masonry and stone veneer over structural concrete. We recommend finishes that complement your home architecture and landscape design.",
      },
    ],
  },

  cta: {
    eyebrow: "Start Your Project",
    heading: "Discuss your Bellevue Hill retaining wall",
    text: "Share your site details and design objectives. We provide advice on terrace configurations, materials and budgets suited to Bellevue Hill properties.",
    primaryLabel: "Request a Quote",
    primaryHref: "/contact/",
    secondaryLabel: business.contact.phoneDisplay,
    secondaryHref: business.contact.phoneHref,
  },

  schema: {
    serviceType: "Retaining Wall Construction",
    areaServed: "Bellevue Hill, Sydney, NSW",
    description:
      "Professional retaining wall construction in Bellevue Hill, specialising in multi-terrace systems, architectural finishes and steep slope engineering.",
    provider: business.name,
  },
};

export const doverHeights: SuburbPageData = {
  slug: "dover-heights",
  parentArea: "eastern-suburbs",

  seo: {
    title: `Retaining Walls Dover Heights - ${business.name}`,
    description:
      "Expert retaining wall construction in Dover Heights. Cliff-top engineering, ocean exposure solutions and walls built for dramatic coastal slopes.",
    canonical: "https://retainingwallsbuilders.com.au/dover-heights/",
  },

  hero: {
    eyebrow: "Dover Heights",
    title: "Retaining Walls Dover Heights",
    description:
      "Retaining wall construction for Dover Heights properties, where cliff-top locations, ocean exposure and dramatic slopes require walls engineered for extreme conditions.",
    backgroundImage: "/images/sandstone3.jpg",
    backgroundAlt: "Retaining wall construction in Dover Heights Sydney",
    primaryCtaLabel: "Request a Quote",
    primaryCtaHref: "/contact/",
    secondaryCtaLabel: business.contact.phoneDisplay,
    secondaryCtaHref: business.contact.phoneHref,
  },

  intro: {
    eyebrow: "Dover Heights Specialists",
    heading: "Retaining walls for Dover Heights cliff-top properties",
    paragraphs: [
      "Dover Heights perches on the cliffs above the Tasman Sea, exposing properties to salt spray, strong winds and the geological complexity of the coastal escarpment. Retaining walls here must withstand conditions that would compromise lesser construction.",
      "The steep topography of this suburb often places homes high above street level, creating dramatic entrance sequences that rely on robust retaining structures. Driveway walls, boundary stabilisation and garden terraces all face the same demanding exposure.",
      "We specify materials and construction methods suited to the Dover Heights coastal environment. Concrete mixes resist chloride penetration, steel receives appropriate cover depths, and drainage systems handle the rainfall intensity common on exposed headlands.",
    ],
    image: "/images/concreteblock1.jpg",
    imageAlt: "Coastal retaining wall in Dover Heights",
    checklist: [
      "Cliff-top boundary walls",
      "Salt-resistant construction",
      "Steep driveway structures",
      "Ocean-view terrace creation",
      "Wind-exposed site solutions",
      "Coastal drainage engineering",
    ],
  },

  benefits: {
    eyebrow: "Why Choose Us",
    heading: "Built for Dover Heights exposure",
    items: [
      {
        title: "Coastal Material Specification",
        description:
          "We select concrete grades, reinforcement cover and sealants appropriate for constant salt exposure. Materials resist the corrosion that destroys poorly specified coastal walls.",
      },
      {
        title: "Cliff-Edge Engineering",
        description:
          "Boundary walls near cliff edges require careful foundation design to avoid disturbing fragile sandstone formations. We assess stability before designing wall positions.",
      },
      {
        title: "Wind Load Consideration",
        description:
          "Exposed Dover Heights sites experience significant wind pressures. Wall heights and backfill grades account for these forces in addition to normal earth pressures.",
      },
      {
        title: "Drainage for Intensity",
        description:
          "Coastal storms deliver heavy rain in short periods. Our drainage systems handle peak flows without backing up or causing erosion behind walls.",
      },
    ],
  },

  process: {
    eyebrow: "Our Process",
    heading: "Dover Heights project delivery",
    image: "/images/concreteblock2.jpeg",
    imageAlt: "Retaining wall construction in Dover Heights",
    steps: [
      {
        title: "Exposure assessment",
        description:
          "We evaluate salt spray zones, prevailing wind directions and rock stability. These factors determine material grades and construction detailing.",
      },
      {
        title: "Coastal-rated design",
        description:
          "Wall specifications include concrete durability class, reinforcement protection and drainage capacity sized for coastal storm events.",
      },
      {
        title: "Weather-managed construction",
        description:
          "Concrete pours and masonry work are timed around weather windows. Salt-laden winds and rain are managed to ensure proper curing and bonding.",
      },
      {
        title: "Protective completion",
        description:
          "Exposed surfaces receive sealant treatments where specified. Drainage outlets are positioned to discharge without causing erosion on steep grades.",
      },
    ],
  },

  faq: {
    eyebrow: "Common Questions",
    heading: "Retaining walls in Dover Heights",
    items: [
      {
        question: "How does ocean exposure affect retaining wall longevity?",
        answer:
          "Salt spray accelerates corrosion of steel reinforcement and degrades concrete surfaces. We specify marine-grade durability measures including increased concrete cover, low-permeability mixes and protective coatings to achieve normal service life despite harsh exposure.",
      },
      {
        question: "Can walls be built close to cliff edges in Dover Heights?",
        answer:
          "Construction near cliff edges requires geotechnical assessment of the underlying rock stability. Setback distances and foundation depths protect both the wall and the cliff formation. We coordinate with geotechnical engineers where boundary conditions demand.",
      },
      {
        question: "What approvals apply to Dover Heights retaining walls?",
        answer:
          "Waverley Council has specific controls for the Dover Heights coastal area. Wall heights, materials and proximity to boundaries may trigger development application requirements. We advise on the approval pathway based on your wall specifications and site location.",
      },
    ],
  },

  cta: {
    eyebrow: "Start Your Project",
    heading: "Discuss your Dover Heights retaining wall",
    text: "Share your site conditions and wall requirements. We provide practical advice on coastal-rated solutions suited to the demanding Dover Heights environment.",
    primaryLabel: "Request a Quote",
    primaryHref: "/contact/",
    secondaryLabel: business.contact.phoneDisplay,
    secondaryHref: business.contact.phoneHref,
  },

  schema: {
    serviceType: "Retaining Wall Construction",
    areaServed: "Dover Heights, Sydney, NSW",
    description:
      "Professional retaining wall construction in Dover Heights, specialising in coastal exposure engineering, cliff-top stabilisation and salt-resistant construction.",
    provider: business.name,
  },
};

export const bondi: SuburbPageData = {
  slug: "bondi",
  parentArea: "eastern-suburbs",

  seo: {
    title: `Retaining Walls Bondi - ${business.name}`,
    description:
      "Professional retaining wall construction in Bondi. Compact block solutions, sandstone excavation and walls that maximise outdoor space on tight coastal sites.",
    canonical: "https://retainingwallsbuilders.com.au/bondi/",
  },

  hero: {
    eyebrow: "Bondi",
    title: "Retaining Walls Bondi",
    description:
      "Retaining wall solutions for Bondi properties, where compact blocks, tight boundaries and near-surface sandstone demand efficient construction that maximises every square metre of outdoor space.",
    backgroundImage: "/images/concreteblock3.jpeg",
    backgroundAlt: "Retaining wall construction in Bondi Sydney",
    primaryCtaLabel: "Request a Quote",
    primaryCtaHref: "/contact/",
    secondaryCtaLabel: business.contact.phoneDisplay,
    secondaryCtaHref: business.contact.phoneHref,
  },

  intro: {
    eyebrow: "Bondi Specialists",
    heading: "Retaining walls for compact coastal blocks in Bondi",
    paragraphs: [
      "The Bondi mix of federation homes, apartments and contemporary builds creates diverse retaining wall requirements across a suburb where land values make every usable square metre valuable. Compact blocks with sloping rear yards are the norm rather than the exception.",
      "Sandstone bedrock underlies much of Bondi, surfacing unpredictably across building sites. Excavation for wall footings frequently encounters rock, requiring assessment and appropriate equipment to proceed efficiently without budget surprises.",
      "We work within typical Bondi constraints: limited side access, shared boundaries with neighbours, and expectations for rapid completion that minimise disruption to the surrounding community. Our crews understand the logistics of inner suburban construction.",
    ],
    image: "/images/retainingwall4.webp",
    imageAlt: "Retaining wall in Bondi Sydney",
    checklist: [
      "Compact block maximisation",
      "Sandstone excavation capability",
      "Narrow access construction",
      "Boundary wall solutions",
      "Courtyard level changes",
      "Unit block common areas",
    ],
  },

  benefits: {
    eyebrow: "Why Choose Us",
    heading: "Built for Bondi conditions",
    items: [
      {
        title: "Space Optimisation",
        description:
          "Bondi blocks rarely have room to waste. We position walls to create maximum usable area while maintaining appropriate distances from boundaries and structures.",
      },
      {
        title: "Rock-Ready Operations",
        description:
          "Our assessment identifies rock depth before construction begins. When excavation hits sandstone, we have the equipment and experience to proceed without costly delays.",
      },
      {
        title: "Constrained Access Methods",
        description:
          "Side passages, shared driveways and rear-only entry points are common in Bondi. We select equipment and stage materials to work within these access limitations.",
      },
      {
        title: "Neighbour Consideration",
        description:
          "Close-quarter construction requires communication and care. We manage dust, noise and site cleanliness to maintain neighbourly relations throughout the project.",
      },
    ],
  },

  process: {
    eyebrow: "Our Process",
    heading: "Bondi project approach",
    image: "/images/concreteblock1.jpg",
    imageAlt: "Retaining wall construction in Bondi",
    steps: [
      {
        title: "Site and access review",
        description:
          "We assess slope conditions, rock indicators and entry constraints. Neighbour notification and access agreements are identified early.",
      },
      {
        title: "Efficient design",
        description:
          "Wall specifications maximise usable space creation while keeping construction feasible within the typical Bondi access and working area limitations.",
      },
      {
        title: "Compact site construction",
        description:
          "Work proceeds with appropriately sized equipment and staged material delivery. Rock excavation uses methods suitable for close proximity to structures.",
      },
      {
        title: "Clean completion",
        description:
          "Site restoration includes removal of all construction materials and equipment. Surfaces are left ready for landscaping or paving completion.",
      },
    ],
  },

  faq: {
    eyebrow: "Common Questions",
    heading: "Retaining walls in Bondi",
    items: [
      {
        question: "How do you handle rock excavation on tight Bondi sites?",
        answer:
          "We use a combination of rock sawing, hydraulic breaking and careful removal methods that minimise vibration and noise. Equipment selection considers both the rock hardness and proximity to neighbouring structures.",
      },
      {
        question: "Can retaining walls be built on shared boundaries?",
        answer:
          "Boundary walls require coordination with neighbours regarding party wall agreements, cost sharing and construction access. We advise on the typical arrangements and help facilitate neighbour discussions.",
      },
      {
        question: "What permits does Waverley Council require for Bondi retaining walls?",
        answer:
          "Walls over certain heights or within setback zones typically require development approval. Exempt development provisions may apply to lower walls in specific circumstances. We assess your wall specifications against current council controls.",
      },
    ],
  },

  cta: {
    eyebrow: "Start Your Project",
    heading: "Discuss your Bondi retaining wall",
    text: "Share your site constraints and space goals. We provide straightforward advice on walls that work within typical Bondi block conditions.",
    primaryLabel: "Request a Quote",
    primaryHref: "/contact/",
    secondaryLabel: business.contact.phoneDisplay,
    secondaryHref: business.contact.phoneHref,
  },

  schema: {
    serviceType: "Retaining Wall Construction",
    areaServed: "Bondi, Sydney, NSW",
    description:
      "Professional retaining wall construction in Bondi, specialising in compact block solutions, sandstone excavation and constrained access construction.",
    provider: business.name,
  },
};

export const coogee: SuburbPageData = {
  slug: "coogee",
  parentArea: "eastern-suburbs",

  seo: {
    title: `Retaining Walls Coogee - ${business.name}`,
    description:
      "Expert retaining wall construction in Coogee. Beach-proximity engineering, sloped block solutions and walls built for coastal residential properties.",
    canonical: "https://retainingwallsbuilders.com.au/coogee/",
  },

  hero: {
    eyebrow: "Coogee",
    title: "Retaining Walls Coogee",
    description:
      "Retaining wall construction for Coogee properties, where beach-suburb character, variable topography and coastal conditions require walls that balance durability with neighbourhood aesthetics.",
    backgroundImage: "/images/concretesleeper.jpeg",
    backgroundAlt: "Retaining wall construction in Coogee Sydney",
    primaryCtaLabel: "Request a Quote",
    primaryCtaHref: "/contact/",
    secondaryCtaLabel: business.contact.phoneDisplay,
    secondaryCtaHref: business.contact.phoneHref,
  },

  intro: {
    eyebrow: "Coogee Specialists",
    heading: "Retaining walls for beach-side slopes in Coogee",
    paragraphs: [
      "Coogee spreads across the hillsides above its famous beach, creating a suburb where almost every property deals with some degree of slope. From modest terraces near the foreshore to larger homes on the upper ridges, retaining walls shape the usability of outdoor spaces throughout.",
      "The coastal environment brings salt exposure that varies with distance from the water. Properties closer to Coogee Beach face harsher conditions than those further inland, requiring material specifications calibrated to actual exposure levels.",
      "The residential character of Coogee includes a mix of older sandstone and brick homes alongside contemporary renovations. We design walls that complement this varied streetscape while delivering the structural performance each site demands.",
    ],
    image: "/images/concretesleeper2.jpg",
    imageAlt: "Retaining wall in Coogee Sydney",
    checklist: [
      "Beach-proximity construction",
      "Hillside terrace systems",
      "Salt-zone material selection",
      "Federation home compatibility",
      "Garden level creation",
      "Outdoor entertaining areas",
    ],
  },

  benefits: {
    eyebrow: "Why Choose Us",
    heading: "Built for the coastal slopes of Coogee",
    items: [
      {
        title: "Exposure-Calibrated Specification",
        description:
          "We assess actual salt exposure based on distance and aspect, specifying materials appropriate to conditions rather than over-engineering inland sites or under-protecting beachside ones.",
      },
      {
        title: "Hillside Experience",
        description:
          "The undulating terrain of Coogee creates varied wall requirements across single properties. We design systems that handle changes in slope angle, soil depth and drainage patterns.",
      },
      {
        title: "Character Compatibility",
        description:
          "Wall finishes complement the mix of architectural periods found in Coogee. Sandstone, rendered masonry and off-form concrete each suit different property styles.",
      },
      {
        title: "Outdoor Living Focus",
        description:
          "Coogee residents value outdoor entertaining space. We design walls that create level areas sized for practical use: dining settings, barbecue areas and garden zones.",
      },
    ],
  },

  process: {
    eyebrow: "Our Process",
    heading: "Coogee project delivery",
    image: "/images/concretesleeper3.jpeg",
    imageAlt: "Retaining wall construction in Coogee",
    steps: [
      {
        title: "Coastal zone assessment",
        description:
          "We evaluate distance from the beach, aspect and prevailing wind exposure to determine appropriate material durability specifications.",
      },
      {
        title: "Slope-responsive design",
        description:
          "Wall layouts follow the natural contours where possible, minimising cut volumes and creating organic-feeling terrace arrangements.",
      },
      {
        title: "Beach-suburb logistics",
        description:
          "Narrow streets, limited parking and pedestrian traffic require careful construction planning. We stage work to minimise community disruption.",
      },
      {
        title: "Landscape-ready finish",
        description:
          "Completed walls are backfilled and drained, surfaces finished and sites cleared ready for planting, turfing or paving by landscapers.",
      },
    ],
  },

  faq: {
    eyebrow: "Common Questions",
    heading: "Retaining walls in Coogee",
    items: [
      {
        question: "How far from the beach do salt-resistant specifications apply?",
        answer:
          "Direct salt spray exposure typically extends several hundred metres from the waterline, with the most severe zone within 100 metres. Aspect matters significantly: properties facing the ocean experience greater exposure than those sheltered by other buildings. We assess each site individually.",
      },
      {
        question: "Can sandstone walls be used near Coogee Beach?",
        answer:
          "Sandstone performs well in coastal environments as it does not contain steel reinforcement susceptible to salt corrosion. The stone itself weathers gracefully with salt exposure. Sandstone walls suit beach-area properties where natural materials complement the coastal character.",
      },
      {
        question: "What creates usable flat space on a Coogee hillside?",
        answer:
          "Retaining walls hold cut or fill to create level terraces. The usable width depends on total slope and acceptable wall heights. We design terrace systems that create the largest practical flat areas for your outdoor living requirements.",
      },
    ],
  },

  cta: {
    eyebrow: "Start Your Project",
    heading: "Discuss your Coogee retaining wall",
    text: "Share your slope challenges and outdoor living goals. We provide practical advice on walls that work with the coastal terrain of Coogee.",
    primaryLabel: "Request a Quote",
    primaryHref: "/contact/",
    secondaryLabel: business.contact.phoneDisplay,
    secondaryHref: business.contact.phoneHref,
  },

  schema: {
    serviceType: "Retaining Wall Construction",
    areaServed: "Coogee, Sydney, NSW",
    description:
      "Professional retaining wall construction in Coogee, specialising in beach-proximity engineering, hillside terracing and coastal-rated construction.",
    provider: business.name,
  },
};

export const bronte: SuburbPageData = {
  slug: "bronte",
  parentArea: "eastern-suburbs",

  seo: {
    title: `Retaining Walls Bronte - ${business.name}`,
    description:
      "Professional retaining wall construction in Bronte. Gully terrain expertise, sandstone solutions and walls engineered for the dramatic natural amphitheatre of this suburb.",
    canonical: "https://retainingwallsbuilders.com.au/bronte/",
  },

  hero: {
    eyebrow: "Bronte",
    title: "Retaining Walls Bronte",
    description:
      "Retaining wall solutions for Bronte, where the natural gully amphitheatre creates dramatic slopes and properties that step down toward Bronte Beach through a series of terraced gardens and boundary walls.",
    backgroundImage: "/images/naturalstone.jpeg",
    backgroundAlt: "Retaining wall construction in Bronte Sydney",
    primaryCtaLabel: "Request a Quote",
    primaryCtaHref: "/contact/",
    secondaryCtaLabel: business.contact.phoneDisplay,
    secondaryCtaHref: business.contact.phoneHref,
  },

  intro: {
    eyebrow: "Bronte Specialists",
    heading: "Retaining walls for gully terrain in Bronte",
    paragraphs: [
      "Bronte occupies a natural amphitheatre that sweeps down to the beach, creating one of the most dramatically sloped residential areas in Sydney. Properties on the gully sides face grades that would be challenging anywhere, made more complex by the premium land values that demand maximum use of every contour.",
      "The gully formation channels stormwater toward the beach, meaning drainage design for Bronte retaining walls must account for not just local runoff but potential flows from upslope properties. Failed drainage in this terrain can cause significant erosion and wall damage.",
      "Sandstone outcrops throughout Bronte provide both a construction material and an excavation challenge. Many walls can be built from rock excavated on site, turning a disposal cost into an aesthetic feature that matches the natural geology.",
    ],
    image: "/images/naturalstone2.jpeg",
    imageAlt: "Sandstone retaining wall in Bronte",
    checklist: [
      "Gully slope engineering",
      "Stormwater drainage design",
      "On-site sandstone utilisation",
      "Multi-level terrace creation",
      "Beach-view optimisation",
      "Natural rock integration",
    ],
  },

  benefits: {
    eyebrow: "Why Choose Us",
    heading: "Built for the unique terrain of Bronte",
    items: [
      {
        title: "Gully Drainage Expertise",
        description:
          "The amphitheatre shape of Bronte concentrates stormwater. Our walls incorporate drainage systems sized for the catchment area, not just the immediate site.",
      },
      {
        title: "Sandstone Utilisation",
        description:
          "Rock excavated during construction can become wall material. This reduces disposal costs and creates walls that blend with the natural sandstone character of Bronte.",
      },
      {
        title: "Severe Slope Experience",
        description:
          "Bronte contains some of the steepest residential land in the Eastern Suburbs. We engineer walls for gradients that demand careful calculation of earth pressures and foundation requirements.",
      },
      {
        title: "View Consideration",
        description:
          "Gully-side properties often have beach views worth preserving. We position walls to create usable terraces without blocking sight lines from living areas.",
      },
    ],
  },

  process: {
    eyebrow: "Our Process",
    heading: "Bronte project approach",
    image: "/images/naturalstone3.jpeg",
    imageAlt: "Retaining wall construction in Bronte",
    steps: [
      {
        title: "Catchment analysis",
        description:
          "We assess upslope drainage patterns and design retention systems that handle both site runoff and potential flows from higher properties.",
      },
      {
        title: "Rock assessment and design",
        description:
          "Site rock is evaluated for construction use. Wall designs specify whether excavated sandstone will be incorporated or alternative materials sourced.",
      },
      {
        title: "Slope-staged construction",
        description:
          "Work proceeds with appropriate shoring and drainage management. Steep sites require careful excavation sequencing to maintain stability throughout construction.",
      },
      {
        title: "Drainage commissioning",
        description:
          "Completed drainage systems are tested under flow conditions. Outlets are positioned to discharge without causing erosion on the steep terrain below.",
      },
    ],
  },

  faq: {
    eyebrow: "Common Questions",
    heading: "Retaining walls in Bronte",
    items: [
      {
        question: "Why is drainage so critical for Bronte retaining walls?",
        answer:
          "The gully topography funnels rainwater from a large catchment area. Walls without adequate drainage capacity can experience hydrostatic pressure buildup during storms, leading to structural failure. We design drainage for storm event flows, not just average conditions.",
      },
      {
        question: "Can excavated rock be used for my retaining wall?",
        answer:
          "Bronte sandstone is often suitable for wall construction. We assess the quality and quantity of rock encountered during excavation. When appropriate, using site rock reduces material costs and creates walls that match the surrounding geology.",
      },
      {
        question: "How do steep Bronte sites affect construction costs?",
        answer:
          "Severe slopes increase excavation complexity, require more substantial footings and often demand additional engineering. Access can also be challenging. We assess these factors during site inspection and reflect them accurately in our quotations.",
      },
    ],
  },

  cta: {
    eyebrow: "Start Your Project",
    heading: "Discuss your Bronte retaining wall",
    text: "Share your gully-side challenges and terrace goals. We provide practical advice on walls engineered for the demanding terrain of Bronte.",
    primaryLabel: "Request a Quote",
    primaryHref: "/contact/",
    secondaryLabel: business.contact.phoneDisplay,
    secondaryHref: business.contact.phoneHref,
  },

  schema: {
    serviceType: "Retaining Wall Construction",
    areaServed: "Bronte, Sydney, NSW",
    description:
      "Professional retaining wall construction in Bronte, specialising in gully terrain engineering, sandstone utilisation and stormwater drainage design.",
    provider: business.name,
  },
};

export const easternSuburbsSuburbs: SuburbPageData[] = [
  vaucluse,
  bellevueHill,
  doverHeights,
  bondi,
  coogee,
  bronte,
];
