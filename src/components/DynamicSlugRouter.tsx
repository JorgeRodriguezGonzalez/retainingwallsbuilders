import { Navigate, useParams } from "react-router-dom";
import GuideTemplate from "@/components/GuideTemplate";
import LocationTemplate from "@/components/LocationTemplate";
import ServiceInSuburbTemplate from "@/components/ServiceInSuburbTemplate";
import NotFound from "@/pages/NotFound";
import { getGuideBySlug } from "@/data/guides";
import { getServiceInSuburbBySlug } from "@/data/service-in-suburbs";
import { getSuburbBySlug } from "@/data/suburbs";

const reservedRootSlugs = new Map([
  ["locations", "/areas/"],
  ["projects", "/services/"],
  ["resources", "/blog/"],
]);

/**
 * Dispatches root-level generated pages by slug. Route order is intentional:
 * exact static, service, area and blog routes are declared before /:slug in
 * App.tsx, so this component only handles OpenClaw-managed collections.
 */
export default function DynamicSlugRouter() {
  const { slug = "" } = useParams<{ slug: string }>();
  const normalisedSlug = slug.trim().replace(/^\/+|\/+$/g, "");

  const legacyDestination = reservedRootSlugs.get(normalisedSlug);
  if (legacyDestination) {
    return <Navigate to={legacyDestination} replace />;
  }

  const serviceInSuburb = getServiceInSuburbBySlug(normalisedSlug);
  if (serviceInSuburb) {
    return <ServiceInSuburbTemplate data={serviceInSuburb} />;
  }

  const suburb = getSuburbBySlug(normalisedSlug);
  if (suburb) {
    return <LocationTemplate data={suburb} />;
  }

  const guide = getGuideBySlug(normalisedSlug);
  if (guide) {
    return <GuideTemplate data={guide} />;
  }

  return <NotFound />;
}
