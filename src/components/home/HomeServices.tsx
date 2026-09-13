import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";

export default function HomeServices() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-gold">Roofing Services</p>
            <h2 className="mt-3 text-3xl font-bold text-brand-deep sm:text-4xl lg:text-5xl">The right scope starts with the roof condition</h2>
            <p className="mt-4 text-base leading-8 text-brand-slate">From a single leak to full replacement, our service pages explain what the work involves and when each option may be appropriate.</p>
          </div>
          <Link to="/services/" className="inline-flex items-center gap-2 text-sm font-bold text-brand-oliveDark">View all services <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service) => (
            <Link key={service.slug} to={`/${service.slug}/`} className="group overflow-hidden rounded-[26px] border border-brand-mist bg-brand-cream/60 transition hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(22,58,53,.12)]">
              <div className="aspect-[16/9] overflow-hidden"><img src={service.hero.backgroundImage} alt={service.hero.backgroundAlt} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-brand-deep">{service.hero.title}</h3>
                <p className="mt-3 line-clamp-3 text-sm leading-7 text-brand-slate">{service.hero.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-gold">Explore service <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
