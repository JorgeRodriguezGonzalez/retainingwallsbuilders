import { serviceRoutes } from "@/data/services";
import { locationRoutes } from "@/data/locations";

export type NavigationLink = {
  name: string;
  href: string;
};

export type NavigationItem = NavigationLink & {
  children?: NavigationLink[];
};

export const serviceNavigation: NavigationLink[] = serviceRoutes.map(({ path, data }) => ({
  name: data.hero.title,
  href: path,
}));

export const areaNavigation: NavigationLink[] = locationRoutes.map(({ path, data }) => ({
  name: data.hero.title.replace(/^Roofing in /, ""),
  href: path,
}));

export const implementedServiceNavigation = serviceNavigation;

export const mainNavigation: NavigationItem[] = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/", children: serviceNavigation },
  { name: "Areas", href: "/areas/", children: areaNavigation },
  { name: "About Us", href: "/about-us/" },
  { name: "FAQs", href: "/faqs/" },
  { name: "Blog", href: "/blog/" },
  { name: "Contact", href: "/contact-us/" },
];

export const companyNavigation: NavigationLink[] = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us/" },
  { name: "Services", href: "/services/" },
  { name: "Areas", href: "/areas/" },
  { name: "FAQs", href: "/faqs/" },
  { name: "Blog", href: "/blog/" },
  { name: "Privacy Policy", href: "/privacy-policy/" },
  { name: "Contact Us", href: "/contact-us/" },
];
