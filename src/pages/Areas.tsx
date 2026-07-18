import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import QuoteModal from "@/components/QuoteModal";
import PageHero from "@/components/shared/PageHero";
import { locations } from "@/data/locations";
import { business } from "@/data/business";

export default function Areas() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  return (
    <div className="min-h-screen bg-roof-cream">
      <SEO title={`Roofing Service Areas ${business.areaServed.name} | ${business.name}`} description={`${business.name} provides roof repairs, restoration, replacement, gutter and storm-damage roofing services across ${business.areaServed.primaryLocationListText} and surrounding ${business.areaServed.name} areas.`} canonical={`${business.url}/areas/`} />
      <Header />
      <main>
        <PageHero eyebrow="Local Service Areas" title={`Roofing across ${business.areaServed.withArticle}`} description="Explore local roofing information for major towns, growing residential communities, vineyard districts and Upper Hunter service areas." image="/images/home-hero.webp" />
        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-[0.24em] text-roof-copper">Areas We Cover</p><h2 className="mt-3 text-3xl font-bold text-roof-deep sm:text-4xl">Local pages for homes, rural properties and businesses</h2><p className="mt-4 text-base leading-8 text-roof-slate">Select an area to read about common roof types, property needs, nearby coverage and available services.</p></div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {locations.map((area) => (
                <Link key={area.slug} to={`/${area.slug}/`} className="group rounded-[24px] border border-roof-mist bg-roof-cream/55 p-5 transition hover:-translate-y-1 hover:border-roof-teal/40 hover:bg-white hover:shadow-[0_18px_45px_rgba(22,58,53,.1)]">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-roof-teal text-white"><MapPin className="h-5 w-5" /></div>
                  <h3 className="mt-4 text-xl font-bold text-roof-deep">{area.hero.title.replace("Roofing in ", "")}</h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-6 text-roof-slate">{area.hero.description}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-roof-copper">View area <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-roof-deep py-16 text-white">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8"><div className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-[0.24em] text-roof-sand">Regional Coverage</p><h2 className="mt-3 text-3xl font-bold text-white">From Maitland and the vineyards to the Upper Hunter</h2><p className="mt-4 text-base leading-8 text-white/65">Our coverage is structured around the areas listed here. For properties just outside a named location, contact us with the address so access and availability can be checked.</p></div></div>
        </section>
      </main>
      <Footer /><FloatingCTA onGetQuote={() => setQuoteOpen(true)} /><QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </div>
  );
}
