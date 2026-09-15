import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { locations, whyChooseUs } from "@/data/home";

export default function HomeWhyChoose() {
  return (
    <section className="bg-brand-deep py-16 text-white md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-sand">Why Choose Us</p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">Straightforward retaining wall support from first enquiry to completed construction</h2>
          <p className="mt-5 text-base leading-8 text-white/65">Good retaining wall decisions depend on understanding the site, not only the desired outcome. We explain what we find and why a particular approach is being recommended.</p>
          <Link to="/contact-us/" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-brand-sand">Discuss your project <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {whyChooseUs.map((item) => <div key={item} className="rounded-[1rem] border border-white/15 bg-white/5 p-6"><CheckCircle2 className="h-6 w-6 text-brand-gold" /><p className="mt-4 text-sm leading-7 text-white/75">{item}</p></div>)}
          <div className="rounded-[1rem] bg-brand-gold p-6 sm:col-span-2"><p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-ink">Areas we cover</p><p className="mt-3 text-sm leading-7 text-brand-ink">{locations.join(" - ")}</p></div>
        </div>
      </div>
    </section>
  );
}
