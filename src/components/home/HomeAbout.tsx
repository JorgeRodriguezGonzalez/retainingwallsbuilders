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
          <img src={homeImages.about} alt={`Metal roofing by ${business.name}`} className="relative aspect-[4/3] w-full rounded-[32px] object-cover shadow-[0_30px_80px_rgba(22,58,53,.16)]" />
          <div className="absolute bottom-5 left-5 right-5 flex items-start gap-3 rounded-2xl bg-white/95 p-4 shadow-lg backdrop-blur"><MapPin className="mt-0.5 h-5 w-5 text-roof-copper" /><p className="text-sm leading-6 text-roof-slate">Serving Maitland, Cessnock, Singleton, Muswellbrook, Scone and surrounding Hunter Valley communities.</p></div>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-roof-copper">About Hunter Valley Roofing</p>
          <h2 className="mt-3 text-3xl font-bold text-roof-deep sm:text-4xl lg:text-5xl">Roofing advice shaped around local property types</h2>
          <div className="mt-5 space-y-4 text-base leading-8 text-roof-slate">
            <p>The Hunter Valley includes established town centres, new estates, rural homes, vineyards, accommodation venues, sheds, workshops and commercial buildings. Those property types need different approaches to access, drainage, roof materials and project planning.</p>
            <p>We focus on clear assessments and practical scopes. That may mean a targeted repair, a maintenance plan, restoration for a suitable roof or replacement when deterioration is too widespread for smaller work to be sensible.</p>
          </div>
          <Link to="/about-us/" className="mt-7 inline-flex items-center gap-2 rounded-full bg-roof-teal px-6 py-3.5 text-sm font-bold text-white transition hover:bg-roof-tealDark">Learn about our approach <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </div>
    </section>
  );
}
