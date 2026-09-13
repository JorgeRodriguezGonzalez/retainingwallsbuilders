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
  { question: `What retaining wall services do you provide in ${business.areaServed.name}?`, answer: "We provide block retaining walls, concrete sleeper walls, poured concrete walls, sandstone walls, timber walls, brick walls, gabion walls, rock and boulder walls, plus retaining wall repair and replacement services." },
  { question: "Which areas do you service?", answer: `Our service area covers ${business.areaServed.locationListText}. Contact us for properties in other Greater Sydney locations.` },
  { question: "Do I need council approval for a retaining wall?", answer: "In NSW, walls over 600mm in height typically require development approval. Walls near boundaries, supporting buildings or managing significant loads may have additional requirements. We can advise on the likely approval pathway for your project." },
  { question: "What type of retaining wall is best for my property?", answer: "The best wall type depends on site conditions, height requirements, soil type, drainage needs and desired appearance. Block walls suit structural applications, concrete sleepers offer a clean modern look, sandstone provides natural aesthetics, and timber can be cost-effective for lower walls." },
  { question: "How long does a retaining wall last?", answer: "A well-constructed retaining wall with proper drainage can last decades. Concrete and block walls typically last 50 plus years, timber walls 15 to 25 years depending on treatment and conditions." },
  { question: "What causes retaining walls to fail?", answer: "Common causes include inadequate drainage, poor footing design, insufficient reinforcement, hydrostatic pressure buildup, tree root damage, and walls not designed for the actual loads they need to support." },
  { question: "Do retaining walls need drainage?", answer: "Yes. Proper drainage is critical for retaining wall performance. This typically includes gravel backfill, drainage pipe at the base and weep holes to relieve hydrostatic pressure." },
  { question: "Can you repair a leaning retaining wall?", answer: "Sometimes. Minor leaning may be correctable with drainage improvements and soil stabilisation. Significant lean often requires partial or full reconstruction to address the underlying cause." },
  { question: "What information should I include with my enquiry?", answer: "Include the property address or suburb, approximate wall height and length, purpose of the wall, any site photos showing the area, and any specific material preferences you have." },
  { question: "Do you provide structural engineering for retaining walls?", answer: "We coordinate with structural engineers when wall height, proximity to structures or load conditions require certified engineering. This is typically needed for walls over 600mm or those supporting significant loads." },
  { question: "Can you build retaining walls on sloped blocks?", answer: "Yes. Sloped blocks are one of the most common applications for retaining walls. We assess the slope, soil conditions and drainage to recommend the most suitable wall system and staging approach." },
  { question: "What is the difference between a retaining wall and a garden wall?", answer: "A retaining wall holds back soil and manages level changes, bearing significant lateral loads. A garden wall is primarily decorative or defines garden beds without major structural requirements. Construction standards differ accordingly." },
];

export default function FAQ() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  return (
    <div className="min-h-screen bg-brand-cream">
      <SEO title={`Retaining Wall FAQs ${business.areaServed.name} | ${business.name}`} description={`Answers to common questions about retaining wall construction, materials, council approval, drainage, repairs and service areas across ${business.areaServed.name}.`} canonical={`${business.url}/faqs/`} schema={createFaqSchema(faqs)} />
      <Header />
      <main>
        <PageHero eyebrow="Frequently Asked Questions" title="Straight answers about retaining walls" description="Use these answers as a starting point, then contact us with the details of your site and project for advice relevant to your situation." image="/images/services01.webp" />
        <section className="bg-white py-16 md:py-24"><div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8"><div className="space-y-4">{faqs.map((faq) => <details key={faq.question} className="group overflow-hidden rounded-[22px] border border-brand-mist bg-brand-cream/45"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-5 font-bold text-brand-deep sm:px-6"><span>{faq.question}</span><span className="text-2xl font-light text-brand-gold transition group-open:rotate-45">+</span></summary><div className="px-5 pb-5 text-sm leading-7 text-brand-slate sm:px-6">{faq.answer}</div></details>)}</div></div></section>
      </main>
      <Footer /><FloatingCTA onGetQuote={() => setQuoteOpen(true)} /><QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </div>
  );
}
