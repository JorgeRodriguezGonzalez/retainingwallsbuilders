import { Building2, HardHat, Home, Layers, Mountain, Search, ShieldCheck, type LucideIcon } from "lucide-react";
import { business } from "@/data/business";
import { serviceNavigation } from "@/data/navigation";

export interface WhatWeDoItem { icon: LucideIcon; text: string; }

export const homeImages = {
  hero: "/images/home-hero.webp",
  about: "/images/services01.webp",
  contact: "/images/contact-workers.webp",
};

export const quickBenefits = [
  "Block, concrete, sandstone and timber retaining walls",
  "Structural engineering coordination when required",
  "Residential, commercial and landscape applications",
  `Coverage across ${business.areaServed.primaryLocationListText} and surrounding areas`,
];

export const whyChooseUs = [
  "Clear advice that separates structural requirements, drainage and finishing options.",
  "Retaining wall support for homes, developments, landscaping and commercial sites.",
  "A practical approach to site assessment, material selection and construction.",
  `Local coverage across ${business.areaServed.locationListText}.`,
];

export const serviceLinks = serviceNavigation.map((service) => ({ label: service.name, href: service.href }));
export const locations = [...business.areaServed.locationNames];

export const whatWeDo: WhatWeDoItem[] = [
  { icon: Search, text: "Assess site conditions, soil type, drainage requirements and load expectations to recommend the right wall system." },
  { icon: Layers, text: "Construct block, concrete sleeper, poured concrete, sandstone, timber, brick, gabion and rock retaining walls." },
  { icon: Mountain, text: "Address sloped blocks, level changes, garden beds, driveways and boundary walls." },
  { icon: HardHat, text: "Coordinate with structural engineers when wall height, proximity to structures or load conditions require certification." },
  { icon: Home, text: "Support homeowners, developers and landscapers with new construction, repairs and replacements." },
  { icon: Building2, text: "Plan commercial and subdivision retaining wall work around access, staging and site requirements." },
  { icon: ShieldCheck, text: "Provide drainage solutions, weep holes and backfill specifications for long-term wall performance." },
];
