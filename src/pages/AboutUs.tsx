import { useState } from "react";
import { CheckCircle2, Compass, MessageSquareText, ShieldCheck } from "lucide-react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import QuoteModal from "@/components/QuoteModal";
import PageHero from "@/components/shared/PageHero";
import { business } from "@/data/business";

const values = [
  { icon: Compass, title: "Assess before recommending", text: "A useful roofing scope starts with the roof condition, likely cause, material and access." },
  { icon: MessageSquareText, title: "Explain the options", text: "We separate urgent repairs, maintenance opportunities and longer-term replacement decisions." },
  { icon: ShieldCheck, title: "Plan around the property", text: "Homes, farms, accommodation venues and commercial sites each require different project planning." },
];

export default function AboutUs() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  return (
    <div className="min-h-screen bg-roof-cream">
      <SEO title={`About ${business.name} | Hunter Valley Roofing Team`} description={`Learn about ${business.name}, our practical approach to roof repairs, maintenance, restoration and replacement, and the Hunter Valley areas we service.`} canonical={`${business.url}/about-us/`} />
      <Header />
      <main>
        <PageHero eyebrow="About Us" title="A practical roofing approach for a diverse region" description="Hunter Valley properties range from suburban homes and growing estates to vineyards, rural buildings, accommodation venues and commercial sites. We shape the roofing scope around the building, not a generic package." image="/images/Standing-Seam-Metal-Roof.webp" />
        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div><p className="text-xs font-bold uppercase tracking-[0.24em] text-roof-copper">Our Approach</p><h2 className="mt-3 text-3xl font-bold text-roof-deep sm:text-4xl">Clear information supports better roofing decisions</h2><div className="mt-5 space-y-4 text-base leading-8 text-roof-slate"><p>Roofing work can range from a straightforward broken-tile repair to complex water entry, storm damage or a full replacement. We aim to make the next step easier to understand by identifying the likely issue and explaining the scope in plain English.</p><p>Our service pages and area pages are structured to help homeowners, landlords, property managers and business owners find relevant information before making an enquiry.</p></div></div>
            <img src="/images/contact-workers.webp" alt={`${business.name} roofing team`} className="aspect-[4/3] w-full rounded-[32px] object-cover shadow-[0_28px_75px_rgba(22,58,53,.15)]" />
          </div>
        </section>
        <section className="bg-roof-cream py-16 md:py-20"><div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8"><div className="grid gap-5 md:grid-cols-3">{values.map(({ icon: Icon, title, text }) => <div key={title} className="rounded-[26px] bg-white p-6"><Icon className="h-7 w-7 text-roof-copper" /><h2 className="mt-5 text-xl font-bold text-roof-deep">{title}</h2><p className="mt-3 text-sm leading-7 text-roof-slate">{text}</p></div>)}</div></div></section>
        <section className="bg-roof-deep py-16 text-white"><div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-6 lg:grid-cols-2 lg:px-8"><div><p className="text-xs font-bold uppercase tracking-[0.24em] text-roof-sand">Our Service Area</p><h2 className="mt-3 text-3xl font-bold text-white">Local content for the wider Hunter Valley</h2></div><div className="space-y-3">{["Maitland and surrounding residential communities", "Cessnock and the vineyard districts", "Singleton, Muswellbrook and Scone", "Rural, residential and commercial properties"].map((item) => <div key={item} className="flex gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 text-roof-copper" /><p className="text-sm leading-7 text-white/70">{item}</p></div>)}</div></div></section>
      </main>
      <Footer /><FloatingCTA onGetQuote={() => setQuoteOpen(true)} /><QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </div>
  );
}
