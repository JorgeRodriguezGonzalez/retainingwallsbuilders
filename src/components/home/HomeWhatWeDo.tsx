import { whatWeDo, homeImages } from "@/data/home";
import { ProcessPanel } from "@/components/shared/VisualExperience";

const titles = ["Understand the site", "Choose the wall system", "Work with the landscape", "Coordinate engineering", "Plan the scope", "Consider access and staging", "Design the drainage"];

export default function HomeWhatWeDo() {
  return <ProcessPanel eyebrow="The complete picture" heading="Every detail has a purpose." image={homeImages.about} imageAlt="Natural sandstone retaining wall detail" steps={whatWeDo.map((item, index) => ({ title: titles[index] || "Project considerations", description: item.text }))} />;
}
