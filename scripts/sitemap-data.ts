import { business } from "../src/data/business";
import { serviceRoutes } from "../src/data/services";
import { locationRoutes } from "../src/data/locations";
import { blogRoutes } from "../src/data/blog";

export const sitemapData = {
  baseUrl: business.url,
  routeGroups: {
    "service pages": serviceRoutes,
    "location pages": locationRoutes,
    "blog posts": blogRoutes,
  },
};
