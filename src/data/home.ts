import { Building2, Droplets, Home, Paintbrush2, Search, ShieldCheck, Wrench, type LucideIcon } from "lucide-react";
import { business } from "@/data/business";
import { serviceNavigation } from "@/data/navigation";

export interface WhatWeDoItem { icon: LucideIcon; text: string; }

export const homeImages = {
  hero: "/images/home-hero.webp",
  about: "/images/standing-seam-metal-roof.webp",
  contact: "/images/contact-workers.webp",
};

export const quickBenefits = [
  "Roof repairs for tile, terracotta, metal and Colorbond roofs",
  "Emergency make-safe support for leaks and storm damage",
  "Residential, rural and commercial roofing services",
  "Coverage across Maitland, Cessnock, Singleton and the Upper Hunter",
];

export const whyChooseUs = [
  "Clear advice that separates urgent repairs, preventive work and longer-term options.",
  "Roofing support for homes, farms, investment properties, hospitality venues and commercial sites.",
  "A practical approach to roof leaks, storm damage, drainage, restoration and replacement.",
  `Local coverage across ${business.areaServed.locationListText}.`,
];

export const serviceLinks = serviceNavigation.map((service) => ({ label: service.name, href: service.href }));
export const locations = [...business.areaServed.locationNames];

export const whatWeDo: WhatWeDoItem[] = [
  { icon: Search, text: "Inspect roof coverings, flashings, valleys, penetrations, ridge capping and drainage to identify likely causes." },
  { icon: Wrench, text: "Repair localised defects such as cracked tiles, lifted sheets, failed fixings, flashing faults and damaged cappings." },
  { icon: Droplets, text: "Improve gutter and downpipe performance where blockages, poor falls or damaged sections are contributing to overflow." },
  { icon: Paintbrush2, text: "Restore suitable roofs with cleaning, repairs, ridge work and protective coatings." },
  { icon: Home, text: "Support homeowners, landlords and investors with repairs, maintenance, restoration and roof replacement." },
  { icon: Building2, text: "Plan commercial and rural roofing work around access, roof size, site operations and drainage needs." },
  { icon: ShieldCheck, text: "Provide make-safe work after storms to reduce immediate hazards and further weather exposure." },
];
