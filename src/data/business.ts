const serviceAreaNames = [
  "Maitland",
  "Cessnock",
  "Singleton",
  "Muswellbrook",
  "Scone",
  "East Maitland",
  "Rutherford",
  "Kurri Kurri",
  "Thornton",
  "Chisholm",
  "Metford",
  "Aberglasslyn",
  "Branxton",
  "Greta",
  "North Rothbury",
  "Weston",
  "Pokolbin",
  "Lovedale",
  "Broke",
  "Morpeth",
] as const;

const formatLocationList = (locations: readonly string[]) => {
  if (locations.length < 2) return locations.join("");
  return `${locations.slice(0, -1).join(", ")} and ${locations[locations.length - 1]}`;
};

export const business = {
  name: "Hunter Valley Roofing",
  url: "https://huntervalleyroofing.com.au",
  legalArea: "Hunter Valley, New South Wales, Australia",
  brand: {
    tagline: "Strong roofs for Hunter Valley homes, farms and businesses.",
    assets: {
      headerLogo: "/images/hunter-valley-roofing-logo.svg",
      footerLogo: "/images/hunter-valley-roofing-logo-footer.svg",
      ogImage: "/images/hunter-valley-roofing-og.png",
      favicon: "/favicon.svg",
      appleTouchIcon: "/apple-touch-icon.png",
      manifest: "/site.webmanifest",
    },
  },
  contact: {
    phoneDisplay: "(03) 1234 5678",
    phoneHref: "tel:0312345678",
    phoneSchema: "+61 3 1234 5678",
    email: "info@huntervalley.com.au",
    emailHref: "mailto:info@huntervalley.com.au",
  },
  address: {
    display: "Hunter Valley, NSW",
    locality: "Hunter Valley",
    region: "NSW",
    country: "AU",
  },
  areaServed: {
    display: "Hunter Valley, NSW",
    schemaPrimary: "Hunter Valley NSW",
    locationNames: serviceAreaNames,
    locationListText: formatLocationList(serviceAreaNames),
    locations: serviceAreaNames.map((location) => `${location} NSW`),
  },
  hours: {
    display: "Mon - Sat · 7:00am - 6:00pm",
    schemaOpens: "07:00",
    schemaCloses: "18:00",
    schemaDays: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
  },
  social: {
    sameAs: [] as string[],
  },
} as const;

export type Business = typeof business;
