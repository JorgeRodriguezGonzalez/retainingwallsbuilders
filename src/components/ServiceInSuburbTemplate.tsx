import ServiceTemplate from "@/components/ServiceTemplate";
import type { ServiceInSuburbPageData } from "@/types/service-in-suburb";

type ServiceInSuburbTemplateProps = {
  data: ServiceInSuburbPageData;
};

/**
 * Dedicated boundary for generated service-in-suburb pages. Keeping this
 * component separate allows the collection to evolve without changing the
 * standard service template or the dynamic router contract.
 */
export default function ServiceInSuburbTemplate({
  data,
}: ServiceInSuburbTemplateProps) {
  return <ServiceTemplate data={data} />;
}
