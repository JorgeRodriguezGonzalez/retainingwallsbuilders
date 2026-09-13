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
      headerLogo: "/images/retaining-walls-builders-logo.svg",
      footerLogo: "/images/retaining-walls-builders-logo-footer.svg",
      ogImage: "/images/retaining-walls-builders-og.png",
      favicon: "/favicon.svg",
      appleTouchIcon: "/apple-touch-icon.png",
      manifest: "/site.webmanifest",
    },
  },
  contact: {
    phoneDisplay: "(02) 4063 3440",
    phoneHref: "tel:0240633440",
    phoneSchema: "+61 2 4063 3440",
    email: "",
    emailHref: "",
  },
  address: {
    display: "79 Barton St, Kurri Kurri NSW 2327",
    streetAddress: "79 Barton St",
    locality: "Kurri Kurri",
    region: "NSW",
    postalCode: "2327",
    country: "AU",
  },
  areaServed: {
    name: "Hunter Valley",
    withArticle: "the Hunter Valley",
    display: "Hunter Valley, NSW",
    primaryLocationNames: serviceAreaNames.slice(0, 5),
    primaryLocationListText: formatLocationList(serviceAreaNames.slice(0, 5)),
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
