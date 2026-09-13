const serviceAreaNames = [
  "Northern Beaches",
  "Campbelltown",
  "Sutherland Shire",
  "Castle Hill",
  "Blacktown",
  "Eastern Suburbs",
  "Hills District",
  "Hornsby",
  "North Shore",
  "Parramatta",
  "Penrith",
  "Western Sydney",
  "Cronulla",
  "Inner West",
  "Liverpool",
  "Ryde",
  "Bankstown",
  "Canterbury",
  "Hurstville",
  "Chatswood",
] as const;

const formatLocationList = (locations: readonly string[]) => {
  if (locations.length < 2) return locations.join("");
  return `${locations.slice(0, -1).join(", ")} and ${locations[locations.length - 1]}`;
};

export const business = {
  name: "Retaining Walls Builders",
  url: "https://retainingwallsbuilders.com.au",
  legalArea: "Greater Sydney, New South Wales, Australia",
  brand: {
    tagline: "Retaining walls built for Greater Sydney properties.",
    assets: {
      headerLogo: "/images/retaining-walls-builders-logo.svg",
      footerLogo: "/images/retaining-walls-builders-logo-footer.svg",
      ogImage: "/images/retaining-walls-builders-og.png",
      favicon: "/favicon.svg",
      appleTouchIcon: "/apple-touch-icon.png",
      manifest: "/site.webmanifest",
    },
  },
  contact: {
    phoneDisplay: "(02) 9072 0512",
    phoneHref: "tel:0290720512",
    phoneSchema: "+61 2 9072 0512",
    email: "",
    emailHref: "",
  },
  address: {
    display: "Greater Sydney, NSW",
    streetAddress: "",
    locality: "Sydney",
    region: "NSW",
    postalCode: "",
    country: "AU",
  },
  areaServed: {
    name: "Greater Sydney",
    withArticle: "Greater Sydney",
    display: "Greater Sydney, NSW",
    primaryLocationNames: serviceAreaNames.slice(0, 5),
    primaryLocationListText: formatLocationList(serviceAreaNames.slice(0, 5)),
    schemaPrimary: "Greater Sydney NSW",
    locationNames: serviceAreaNames,
    locationListText: formatLocationList(serviceAreaNames),
    locations: serviceAreaNames.map((location) => `${location} NSW`),
  },
  hours: {
    display: "Open 24 hours - 7 days",
    schemaOpens: "00:00",
    schemaCloses: "23:59",
    schemaDays: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
  },
  social: {
    sameAs: [] as string[],
  },
} as const;

export type Business = typeof business;
