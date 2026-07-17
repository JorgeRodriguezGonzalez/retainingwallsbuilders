import { business } from "@/data/business";
import type { LocationPageData } from "@/types/location";

type AreaConfig = {
  slug: string;
  name: string;
  profile: string;
  propertyMix: string;
  nearby: string[];
};

const areaConfigs: AreaConfig[] = [
  { slug: "maitland", name: "Maitland", profile: "a major Hunter Valley centre with established neighbourhoods, growing residential estates and a broad mix of commercial properties", propertyMix: "older tile roofs, modern Colorbond homes, townhouses, retail buildings and light-industrial sites", nearby: ["East Maitland", "Rutherford", "Morpeth"] },
  { slug: "cessnock", name: "Cessnock", profile: "a central Lower Hunter community serving homes, businesses and surrounding vineyard and rural properties", propertyMix: "traditional homes, investment properties, sheds, hospitality venues and commercial buildings", nearby: ["Pokolbin", "Lovedale", "Kurri Kurri"] },
  { slug: "singleton", name: "Singleton", profile: "an Upper Hunter service centre with suburban, rural and commercial roofing needs", propertyMix: "family homes, rural residences, sheds, workshops, offices and retail premises", nearby: ["Branxton", "Broke", "Muswellbrook"] },
  { slug: "muswellbrook", name: "Muswellbrook", profile: "an Upper Hunter town with residential areas, commercial premises and industrial property requirements", propertyMix: "tile homes, metal roofs, workshops, warehouses and rural buildings", nearby: ["Singleton", "Scone", "Aberdeen"] },
  { slug: "scone", name: "Scone", profile: "an Upper Hunter community known for residential, rural and equine properties", propertyMix: "country homes, farm buildings, sheds, stables, shops and community facilities", nearby: ["Muswellbrook", "Aberdeen", "Murrurundi"] },
  { slug: "east-maitland", name: "East Maitland", profile: "an established Maitland area with heritage character, family homes and busy commercial precincts", propertyMix: "older tile roofs, renovated homes, newer estates and retail properties", nearby: ["Maitland", "Metford", "Thornton"] },
  { slug: "rutherford", name: "Rutherford", profile: "a growing residential and commercial area west of Maitland", propertyMix: "modern homes, investment properties, shopping and trade premises, warehouses and workshops", nearby: ["Maitland", "Aberglasslyn", "Weston"] },
  { slug: "kurri-kurri", name: "Kurri Kurri", profile: "an established community with older housing, newer development and nearby industrial activity", propertyMix: "tile homes, metal roofs, commercial buildings, sheds and investment properties", nearby: ["Weston", "Cessnock", "Greta"] },
  { slug: "thornton", name: "Thornton", profile: "a fast-growing residential and employment area between Maitland and Newcastle", propertyMix: "newer Colorbond and tile homes, warehouses, offices and trade premises", nearby: ["Metford", "East Maitland", "Chisholm"] },
  { slug: "chisholm", name: "Chisholm", profile: "a modern residential area with contemporary homes and active construction", propertyMix: "newer tile and Colorbond roofs, extensions, outdoor structures and investment homes", nearby: ["Thornton", "Metford", "Maitland"] },
  { slug: "metford", name: "Metford", profile: "an established residential area close to major services and transport links", propertyMix: "family homes, duplexes, investment properties and nearby commercial buildings", nearby: ["East Maitland", "Thornton", "Chisholm"] },
  { slug: "aberglasslyn", name: "Aberglasslyn", profile: "a growing residential community on the western side of Maitland", propertyMix: "modern family homes, tile and Colorbond roofs, extensions and rental properties", nearby: ["Rutherford", "Maitland", "Largs"] },
  { slug: "branxton", name: "Branxton", profile: "a well-connected Hunter Valley township serving residential, rural and visitor-economy properties", propertyMix: "older homes, newer estates, rural sheds, shops and accommodation properties", nearby: ["Greta", "North Rothbury", "Singleton"] },
  { slug: "greta", name: "Greta", profile: "an established township with continuing residential growth and easy access to surrounding rural areas", propertyMix: "older homes, new estates, rental properties, sheds and small commercial sites", nearby: ["Branxton", "North Rothbury", "Rothbury"] },
  { slug: "north-rothbury", name: "North Rothbury", profile: "a rapidly developing residential area near the heart of the Hunter Valley", propertyMix: "new homes, Colorbond and tile roofing, outdoor structures and investment properties", nearby: ["Greta", "Branxton", "Pokolbin"] },
  { slug: "weston", name: "Weston", profile: "an established former mining community with a mix of older and updated homes", propertyMix: "traditional tile roofs, metal replacements, sheds, rental properties and small businesses", nearby: ["Kurri Kurri", "Cessnock", "Rutherford"] },
  { slug: "pokolbin", name: "Pokolbin", profile: "a prominent vineyard and visitor destination with rural residences, accommodation and hospitality properties", propertyMix: "country homes, cellar doors, restaurants, accommodation buildings, sheds and service structures", nearby: ["Lovedale", "Cessnock", "Rothbury"] },
  { slug: "lovedale", name: "Lovedale", profile: "a rural and vineyard district with residences, boutique accommodation and hospitality businesses", propertyMix: "country homes, cottages, sheds, function venues and accommodation buildings", nearby: ["Pokolbin", "Cessnock", "Branxton"] },
  { slug: "broke", name: "Broke", profile: "a rural village and wine district with homes, farms, visitor accommodation and hospitality properties", propertyMix: "country residences, cottages, sheds, farm buildings and tourism venues", nearby: ["Singleton", "Pokolbin", "Bulga"] },
  { slug: "morpeth", name: "Morpeth", profile: "a historic riverside township with heritage character, established homes and local businesses", propertyMix: "older tile and metal roofs, renovated residences, shops and accommodation properties", nearby: ["Maitland", "East Maitland", "Thornton"] },
];

const createLocationPage = (area: AreaConfig): LocationPageData => {
  const slug = `areas/${area.slug}`;
  const canonical = `${business.url}/${slug}/`;
  const nearbyText = area.nearby.join(", ");

  return {
    slug,
    seo: {
      title: `Roofing ${area.name} NSW | Roof Repairs & Roofing Services | ${business.name}`,
      description: `${business.name} provides roof repairs, leak detection, restoration, replacement, gutter and storm-damage roofing services in ${area.name} and nearby Hunter Valley areas.`,
      canonical,
      ogImage: business.brand.assets.ogImage,
    },
    hero: {
      eyebrow: `Local Roofing in ${area.name}`,
      title: `Roofing in ${area.name}`,
      description: `${business.name} provides practical roofing support for homes, rural properties and businesses in ${area.name}, from roof leaks and repairs to maintenance, restoration and replacement.`,
      backgroundImage: "/images/home-hero.webp",
      backgroundAlt: `Roofing services in ${area.name}, NSW`,
      primaryCtaLabel: "Request a Quote",
      primaryCtaHref: "/contact-us/",
      secondaryCtaLabel: business.contact.phoneDisplay,
      secondaryCtaHref: business.contact.phoneHref,
      stats: [
        { value: area.name, label: "Local service area" },
        { value: "Tile + Metal", label: "Roofing support" },
        { value: "Homes + Business", label: "Property types" },
        { value: "Hunter Valley", label: "Regional coverage" },
      ],
    },
    intro: {
      eyebrow: `${area.name} Roofing Services`,
      heading: `Roof repairs and roofing work for ${area.name} properties`,
      paragraphs: [
        `${area.name} is ${area.profile}. Roofing needs in the area can range from sudden storm leaks and blocked drainage to planned restoration, maintenance and full roof replacement.`,
        `We work with ${area.propertyMix}. Every recommendation starts with the roof condition, material, access and the priorities of the property owner or manager.`,
      ],
      image: "/images/services01.webp",
      imageAlt: `Roof repair work in ${area.name}`,
      checklist: [
        "Roof repairs and leak detection",
        "Storm damage and make-safe support",
        "Roof restoration and replacement",
        "Gutters, ridge capping and roof maintenance",
      ],
    },
    benefits: {
      eyebrow: "Local Roofing Support",
      heading: `Why ${area.name} property owners contact us`,
      items: [
        { title: "Practical advice", description: "We separate urgent repairs from optional improvements and longer-term work." },
        { title: "Multiple roof types", description: "Support is available for tile, terracotta, metal and Colorbond roofing." },
        { title: "Regional experience", description: "The scope considers heat, storms, wind, debris, rural access and property use." },
        { title: "Clear communication", description: "Homeowners, landlords and commercial clients receive a straightforward explanation of the proposed work." },
      ],
    },
    process: {
      eyebrow: "How It Works",
      heading: `Arranging roofing work in ${area.name}`,
      image: "/images/contact-workers.webp",
      imageAlt: `Roof inspection for a property in ${area.name}`,
      steps: [
        { title: "Send your details", description: `Tell us the ${area.name} address, roof concern and any timing requirements.` },
        { title: "Assess the roof", description: "Accessible roof areas and likely problem points are reviewed." },
        { title: "Confirm the scope", description: "We outline the recommended repair, maintenance, restoration or replacement work." },
        { title: "Complete the work", description: "The agreed roofing work is carried out and the completed areas are reviewed." },
      ],
    },
    sections: [
      {
        eyebrow: "Common Local Roofing Needs",
        heading: `Roofing services available in ${area.name}`,
        paragraphs: [
          `Common enquiries include active roof leaks, cracked or shifted tiles, ageing ridge capping, rusted metal sheets, damaged flashings, blocked gutters, storm damage and roofs approaching replacement age.`,
          `We also service nearby areas including ${nearbyText}, with broader coverage throughout Maitland, Cessnock, Singleton, the vineyards and the Upper Hunter.`,
        ],
        image: "/images/service-hero.webp",
        imageAlt: `Roofing services near ${area.name}`,
        imagePosition: "right",
        items: ["Roof repairs", "Emergency make safes", "Leak detection", "Roof restoration", "Roof replacement", "Gutter services"],
      },
      {
        eyebrow: "Property Types",
        heading: `Residential, rural and commercial roofing in ${area.name}`,
        paragraphs: [
          "Residential work may involve family homes, investment properties, additions and older roofs needing staged improvements. Rural and commercial work often requires extra attention to roof size, access, operational timing, drainage and metal-roof detailing.",
          "The best solution depends on the individual building. A localised repair can be the right choice for an isolated defect, while repeated failures across several roof areas may point towards restoration or replacement.",
        ],
        image: "/images/services06.webp",
        imageAlt: `Residential and commercial roofing in ${area.name}`,
        imagePosition: "left",
      },
    ],
    faq: {
      eyebrow: `${area.name} Roofing FAQs`,
      heading: `Questions about roofing in ${area.name}`,
      items: [
        { question: `Do you provide roof repairs in ${area.name}?`, answer: `Yes. We provide roof repair, leak detection, maintenance, restoration, replacement and gutter services in ${area.name} and nearby areas.` },
        { question: `Can you attend rural or commercial properties near ${area.name}?`, answer: "Yes, subject to access and project requirements. Share the property type and location when you enquire so the visit can be planned appropriately." },
        { question: "Do you repair both tile and metal roofs?", answer: "Yes. We work with common tile, terracotta, metal and Colorbond roofing systems." },
        { question: "What should I do when a roof starts leaking during a storm?", answer: "Keep people away from unsafe areas, protect belongings where it is safe to do so and contact a roofer for make-safe advice. Do not climb onto a wet or storm-damaged roof." },
      ],
    },
    cta: {
      eyebrow: `Roofing Help in ${area.name}`,
      heading: `Discuss your ${area.name} roofing project`,
      text: "Send through the property details and a short description of the roof issue or planned work.",
      primaryLabel: "Request a Quote",
      primaryHref: "/contact-us/",
      secondaryLabel: business.contact.phoneDisplay,
      secondaryHref: business.contact.phoneHref,
    },
    schema: {
      serviceType: `Roofing services in ${area.name}`,
      areaServed: `${area.name}, NSW`,
      description: `${business.name} provides roofing services in ${area.name}, including roof repairs, leak detection, restoration, replacement, gutter work and storm damage repairs.`,
      provider: business.name,
    },
  };
};

export const hunterValleyAreas: LocationPageData[] = areaConfigs.map(createLocationPage);
