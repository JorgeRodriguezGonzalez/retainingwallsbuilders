import BlogPostTemplate from "@/components/BlogPostTemplate";
import type { GuidePageData } from "@/types/guide";

type GuideTemplateProps = {
  data: GuidePageData;
};

/**
 * Dedicated boundary for evergreen guides generated outside the dated blog
 * collection while reusing the established long-form article presentation.
 */
export default function GuideTemplate({ data }: GuideTemplateProps) {
  return <BlogPostTemplate data={data} />;
}
