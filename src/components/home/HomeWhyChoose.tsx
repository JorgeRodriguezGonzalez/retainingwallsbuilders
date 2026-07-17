import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { locations, whyChooseUs } from "@/data/home";

export default function HomeWhyChoose() {
  return (
    <section className="bg-roof-deep py-16 text-white md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-roof-sand">Why Choose Us</p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">Straightforward roofing support from first enquiry to final scope</h2>
          <p className="mt-5 text-base leading-8 text-white/65">Good roofing decisions depend on understanding the condition, not only the symptom. We explain what we find and why a particular option is being recommended.</p>
          <Link to="/contact-us/" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-roof-sand">Discuss your roof <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {whyChooseUs.map((item) => <div key={item} className="rounded-[24px] border border-white/10 bg-white/7 p-5"><CheckCircle2 className="h-6 w-6 text-roof-copper" /><p className="mt-4 text-sm leading-7 text-white/75">{item}</p></div>)}
          <div className="rounded-[24px] bg-roof-copper p-5 sm:col-span-2"><p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">Areas we cover</p><p className="mt-3 text-sm leading-7 text-white">{locations.join(" · ")}</p></div>
        </div>
      </div>
    </section>
  );
}
