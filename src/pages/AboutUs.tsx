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
  { icon: Compass, title: "Assess before recommending", text: "A useful retaining wall scope starts with the site conditions, soil type, drainage and load requirements." },
  { icon: MessageSquareText, title: "Explain the options", text: "We separate structural requirements, material choices and finishing options so you can make informed decisions." },
  { icon: ShieldCheck, title: "Plan around the property", text: "Residential gardens, sloped blocks, commercial sites and subdivisions each require different construction approaches." },
];

export default function AboutUs() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  return (
    <div className="min-h-screen bg-brand-cream">
      <SEO title={`About ${business.name} | Local Retaining Wall Team`} description={`Learn about ${business.name}, our practical approach to retaining wall construction, repair and replacement, and the ${business.areaServed.name} areas we service.`} canonical={`${business.url}/about-us/`} />
      <Header />
      <main>
        <PageHero eyebrow="About Us" title="A practical approach to retaining wall construction" description={`${business.areaServed.name} properties range from suburban homes and sloped blocks to commercial developments and landscaping projects. We shape the retaining wall scope around the site, not a generic package.`} image="/images/sandstone3.jpg" />
        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div><p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-gold">Our Approach</p><h2 className="mt-3 text-3xl font-bold text-brand-deep sm:text-4xl">Clear information supports better construction decisions</h2><div className="mt-5 space-y-4 text-base leading-8 text-brand-slate"><p>Retaining wall projects can range from a straightforward garden bed wall to complex structural walls supporting buildings or managing significant level changes. We aim to make the next step easier to understand by assessing the site and explaining the scope in plain English.</p><p>Our service pages are structured to help homeowners, developers, landscapers and commercial clients find relevant information before making an enquiry.</p></div></div>
            <img src="/images/concreteblock3.jpeg" alt={`${business.name} retaining wall team`} className="aspect-[4/3] w-full rounded-[32px] object-cover shadow-[0_28px_75px_rgba(22,58,53,.15)]" />
          </div>
        </section>
        <section className="bg-brand-cream py-16 md:py-20"><div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8"><div className="grid gap-5 md:grid-cols-3">{values.map(({ icon: Icon, title, text }) => <div key={title} className="rounded-[26px] bg-white p-6"><Icon className="h-7 w-7 text-brand-gold" /><h2 className="mt-5 text-xl font-bold text-brand-deep">{title}</h2><p className="mt-3 text-sm leading-7 text-brand-slate">{text}</p></div>)}</div></div></section>
        <section className="bg-brand-deep py-16 text-white"><div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-6 lg:grid-cols-2 lg:px-8"><div><p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-sand">Our Service Area</p><h2 className="mt-3 text-3xl font-bold text-white">{`Local coverage across ${business.areaServed.name}`}</h2></div><div className="space-y-3">{["Northern Beaches, Sutherland Shire and Eastern Suburbs", "Hills District, North Shore and Hornsby", "Parramatta, Blacktown and Western Sydney", "Campbelltown, Penrith and surrounding areas"].map((item) => <div key={item} className="flex gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 text-brand-gold" /><p className="text-sm leading-7 text-white/70">{item}</p></div>)}</div></div></section>
      </main>
      <Footer /><FloatingCTA onGetQuote={() => setQuoteOpen(true)} /><QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </div>
  );
}
