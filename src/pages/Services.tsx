import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import QuoteModal from "@/components/QuoteModal";
import PageHero from "@/components/shared/PageHero";
import { services } from "@/data/services";
import { business } from "@/data/business";

export default function Services() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  return (
    <div className="min-h-screen bg-roof-cream">
      <SEO title={`Roofing Services Hunter Valley | ${business.name}`} description={`Explore roof repairs, emergency make safes, leak detection, restoration, replacement, roof inspections, gutters, Colorbond, tile, commercial and residential roofing services across ${business.areaServed.display}.`} canonical={`${business.url}/services/`} />
      <Header />
      <main>
        <PageHero eyebrow="Complete Roofing Support" title="Roofing services across the Hunter Valley" description="Find practical information about repairs, maintenance, restoration, replacement and specialist roofing work for homes, rural properties and commercial buildings." image="/images/service-hero.webp" />
        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-[0.24em] text-roof-copper">Choose a Service</p><h2 className="mt-3 text-3xl font-bold text-roof-deep sm:text-4xl">Start with the issue, roof type or planned outcome</h2><p className="mt-4 text-base leading-8 text-roof-slate">Each service page explains common use cases, what an assessment considers, the typical process and answers to frequent questions.</p></div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <Link key={service.slug} to={`/${service.slug}/`} className="group flex h-full flex-col overflow-hidden rounded-[26px] border border-roof-mist bg-roof-cream/55 transition hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(22,58,53,.12)]">
                  <div className="aspect-[16/9] overflow-hidden"><img src={service.hero.backgroundImage} alt={service.hero.backgroundAlt} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /></div>
                  <div className="flex flex-1 flex-col p-6"><h3 className="text-xl font-bold text-roof-deep">{service.hero.title}</h3><p className="mt-3 flex-1 text-sm leading-7 text-roof-slate">{service.hero.description}</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-roof-copper">View service <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span></div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-roof-cream py-16 md:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div><p className="text-xs font-bold uppercase tracking-[0.24em] text-roof-copper">How to choose</p><h2 className="mt-3 text-3xl font-bold text-roof-deep">Repair, restore or replace?</h2><p className="mt-4 text-base leading-8 text-roof-slate">The most suitable option depends on how localised the damage is, the condition of surrounding materials, recurring failures, roof age and future plans for the property.</p></div>
            <div className="space-y-3">{["Targeted repairs can suit isolated defects on an otherwise serviceable roof.", "Restoration can suit certain roofs that need cleaning, repairs, ridge work and coating.", "Replacement may be more sensible when deterioration or corrosion is widespread.", "An inspection helps separate immediate work from longer-term improvements."].map((item) => <div key={item} className="flex gap-3 rounded-2xl bg-white p-4"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-roof-teal" /><p className="text-sm leading-7 text-roof-slate">{item}</p></div>)}</div>
          </div>
        </section>
      </main>
      <Footer /><FloatingCTA onGetQuote={() => setQuoteOpen(true)} /><QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </div>
  );
}
