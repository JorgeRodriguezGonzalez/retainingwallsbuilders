import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { business } from "@/data/business";
import { homeImages, quickBenefits } from "@/data/home";
import SimpleContactForm from "@/components/shared/SimpleContactForm";

type Props = { onGetQuote: () => void };

export default function HomeHero({ onGetQuote }: Props) {
  return (
    <section className="relative overflow-hidden bg-roof-deep text-white">
      <div className="absolute inset-0">
        <img src={homeImages.hero} alt={`Retaining wall services across ${business.areaServed.name}`} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-roof-deep via-roof-deep/90 to-roof-deep/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-roof-deep via-transparent to-roof-deep/15" />
      </div>
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 sm:px-6 md:py-20 lg:grid-cols-[1.1fr_440px] lg:px-8 lg:py-24">
        <div>
          <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-roof-copper" />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-roof-sand">{`Local retaining walls across ${business.areaServed.name}`}</span>
          </div>
          <h1 className="mt-6 max-w-3xl text-balance text-4xl font-bold leading-[1.03] text-white sm:text-5xl lg:text-7xl">{`Retaining walls built for ${business.areaServed.name} properties`}</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 md:text-lg">{business.name} helps homeowners, developers and landscapers with block, concrete sleeper, sandstone, timber and rock retaining wall construction across the region.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button onClick={onGetQuote} className="inline-flex items-center justify-center gap-2 rounded-full bg-roof-copper px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-roof-copperDark">Request a Quote <ArrowRight className="h-4 w-4" /></button>
            <a href={business.contact.phoneHref} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-roof-deep"><Phone className="h-4 w-4" />Call {business.contact.phoneDisplay}</a>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {quickBenefits.map((item) => <div key={item} className="flex gap-3 rounded-2xl border border-white/12 bg-white/8 p-4 backdrop-blur"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-roof-sand" /><span className="text-sm leading-6 text-white/85">{item}</span></div>)}
          </div>
        </div>
        <div className="rounded-[30px] border border-white/15 bg-white/12 p-4 shadow-[0_30px_90px_rgba(0,0,0,.35)] backdrop-blur-xl sm:p-5">
          <div className="rounded-[24px] bg-roof-cream p-5 text-roof-ink">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-roof-copper">Tell us about your project</p>
            <h2 className="mt-2 text-3xl font-bold text-roof-deep">Get a retaining wall quote</h2>
            <p className="mt-2 text-sm leading-6 text-roof-slate">Share your suburb and the retaining wall requirements. We will respond with the next practical step.</p>
          </div>
          <SimpleContactForm formLocation="home-hero" variant="hero" className="mt-4 space-y-4" fields={{ suburbLabel: "Suburb", suburbPlaceholder: `${business.areaServed.name} suburb`, messagePlaceholder: "Describe the wall location, height and purpose" }} buttonLabel="Send Enquiry" />
        </div>
      </div>
    </section>
  );
}
