import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { business } from "@/data/business";
import { homeImages } from "@/data/home";

export default function HomeAbout() {
  return (
    <section className="surface-grid bg-roof-cream py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="relative">
          <div className="absolute -left-4 -top-4 h-32 w-32 rounded-[30px] bg-roof-copper/20" />
          <img src={homeImages.about} alt={`Retaining wall construction by ${business.name}`} className="relative aspect-[4/3] w-full rounded-[32px] object-cover shadow-[0_30px_80px_rgba(22,58,53,.16)]" />
          <div className="absolute bottom-5 left-5 right-5 flex items-start gap-3 rounded-2xl bg-white/95 p-4 shadow-lg backdrop-blur"><MapPin className="mt-0.5 h-5 w-5 text-roof-copper" /><p className="text-sm leading-6 text-roof-slate">{`Serving ${business.areaServed.primaryLocationListText} and surrounding ${business.areaServed.name} communities.`}</p></div>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-roof-copper">{`About ${business.name}`}</p>
          <h2 className="mt-3 text-3xl font-bold text-roof-deep sm:text-4xl lg:text-5xl">Retaining wall solutions shaped around local site conditions</h2>
          <div className="mt-5 space-y-4 text-base leading-8 text-roof-slate">
            <p>{`${business.areaServed.name} includes coastal suburbs, established hills areas, growing western communities and commercial precincts. Each location presents different soil types, drainage requirements and construction considerations.`}</p>
            <p>We focus on clear site assessments and practical scopes. That may mean a block wall for structural support, concrete sleepers for a clean finish, sandstone for natural aesthetics or timber for a budget-conscious garden application.</p>
          </div>
          <Link to="/about-us/" className="mt-7 inline-flex items-center gap-2 rounded-full bg-roof-teal px-6 py-3.5 text-sm font-bold text-white transition hover:bg-roof-tealDark">Learn about our approach <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </div>
    </section>
  );
}
