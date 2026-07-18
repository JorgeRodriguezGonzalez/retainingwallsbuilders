import { business } from "../src/data/business";
import { serviceRoutes } from "../src/data/services";
import { locationRoutes } from "../src/data/locations";
import { blogRoutes } from "../src/data/blog";
import { suburbRoutes } from "../src/data/suburbs";
import { serviceInSuburbRoutes } from "../src/data/service-in-suburbs";
import { guideRoutes } from "../src/data/guides";

export const sitemapData = {
  baseUrl: business.url,
  routeGroups: {
    "service pages": serviceRoutes,
    "location pages": locationRoutes,
    "suburb hubs": suburbRoutes,
    "service-in-suburb pages": serviceInSuburbRoutes,
    guides: guideRoutes,
    "blog posts": blogRoutes,
  },
};
