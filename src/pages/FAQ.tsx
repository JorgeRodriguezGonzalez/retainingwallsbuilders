import { useState } from "react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import QuoteModal from "@/components/QuoteModal";
import PageHero from "@/components/shared/PageHero";
import { business } from "@/data/business";
import { createFaqSchema } from "@/lib/seo";

const faqs = [
  { question: `What roofing services do you provide in ${business.areaServed.withArticle}?`, answer: "We provide roof repairs, emergency make safes, leak detection, restoration, replacement, maintenance, inspections, gutter work, metal and Colorbond roofing, tile and terracotta work, commercial roofing, residential roofing, storm damage repairs, ridge capping restoration, cleaning and painting." },
  { question: "Which areas do you service?", answer: `Our listed service areas include ${business.areaServed.locationListText}. Contact us for nearby properties that are not listed.` },
  { question: "Do you repair both tile and metal roofs?", answer: "Yes. We work with common concrete tile, terracotta, metal and Colorbond roofing systems. The exact scope depends on the profile, condition, pitch and access." },
  { question: "What should I do if my roof is leaking during a storm?", answer: "Keep people away from unsafe areas, avoid wet electrical fittings and do not climb onto the roof. Protect belongings only where it is safe, then contact a roofer for make-safe advice." },
  { question: "What is an emergency roof make-safe?", answer: "A make-safe is temporary work intended to reduce an immediate hazard or further weather exposure. Permanent repair work may be completed later under a separate scope." },
  { question: "How can I tell whether my roof needs repair or replacement?", answer: "Localised damage may suit repair. Repeated leaks, widespread corrosion, broad tile failure or multiple failing roof details may justify restoration or replacement. An inspection is the best starting point." },
  { question: "Can a roof be restored instead of replaced?", answer: "Sometimes. The roof covering, flashings, valleys, structure, drainage and ridge condition must be suitable. Restoration should not be used to cover unresolved failure." },
  { question: "Do you provide roof inspections?", answer: "Yes. Roof inspections can help identify visible defects, maintenance priorities, likely leak points and areas approaching the end of serviceable life." },
  { question: "Do you work on rural and commercial properties?", answer: "Yes, subject to site access and project requirements. We support homes, farms, sheds, workshops, accommodation venues, retail premises, offices and other commercial buildings." },
  { question: "Can you repair gutters and downpipes?", answer: "Yes. We provide gutter repairs, installation and cleaning, and consider downpipes, valleys, falls, joins and overflow points as part of the wider drainage system." },
  { question: "Do you install Colorbond roofs?", answer: "Yes. Colorbond and other metal roofing may suit new homes, extensions, sheds, rural buildings, commercial properties and roof replacement projects." },
  { question: "What information should I include with my enquiry?", answer: "Include the property address or suburb, roof type if known, what you have noticed, when it began, any recent storm activity and clear ground-level photos where available." },
];

export default function FAQ() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  return (
    <div className="min-h-screen bg-roof-cream">
      <SEO title={`Roofing FAQs ${business.areaServed.name} | ${business.name}`} description={`Answers to common questions about roof repairs, leaks, emergency make safes, restoration, replacement, gutters, Colorbond roofing and service areas across ${business.areaServed.withArticle}.`} canonical={`${business.url}/faqs/`} schema={createFaqSchema(faqs)} />
      <Header />
      <main>
        <PageHero eyebrow="Frequently Asked Questions" title="Straight answers about roofing work" description="Use these answers as a starting point, then contact us with the details of your roof and property for advice relevant to your situation." image="/images/roof-hero.webp" />
        <section className="bg-white py-16 md:py-24"><div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8"><div className="space-y-4">{faqs.map((faq) => <details key={faq.question} className="group overflow-hidden rounded-[22px] border border-roof-mist bg-roof-cream/45"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-5 font-bold text-roof-deep sm:px-6"><span>{faq.question}</span><span className="text-2xl font-light text-roof-copper transition group-open:rotate-45">+</span></summary><div className="px-5 pb-5 text-sm leading-7 text-roof-slate sm:px-6">{faq.answer}</div></details>)}</div></div></section>
      </main>
      <Footer /><FloatingCTA onGetQuote={() => setQuoteOpen(true)} /><QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </div>
  );
}
