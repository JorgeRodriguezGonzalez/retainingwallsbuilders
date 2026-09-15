import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { services } from "@/data/services";

export default function HomeServices() {
  const [selectedSlug, setSelectedSlug] = useState(services[0]?.slug);
  const selected = services.find((service) => service.slug === selectedSlug) ?? services[0];
  if (!selected) return null;

  return (
    <section id="wall-materials" className="bg-brand-cream py-16 md:py-24" aria-labelledby="materials-heading">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-oliveDark">Find your finish</p>
            <h2 id="materials-heading" className="mt-3 text-balance text-4xl font-bold text-brand-deep md:text-5xl">Different materials.<br />One considered approach.</h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-brand-slate">Explore the options for your property. The right choice starts with soil, drainage, access and the way you want to use your space.</p>
          </div>
          <Link to="/services/" className="inline-flex items-center gap-2 self-start border-b border-brand-gold pb-2 text-sm font-bold text-brand-oliveDark md:self-auto">View all services <ArrowRight aria-hidden="true" className="h-4 w-4" /></Link>
        </div>
        <div className="mt-10 grid overflow-hidden rounded-[1.5rem] border border-brand-mist bg-white lg:grid-cols-[0.8fr_1.2fr]">
          <div className="p-5 sm:p-8">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-brand-slate">Select a service to explore</p>
            <div className="grid gap-1 sm:grid-cols-2 lg:grid-cols-1" role="group" aria-label="Wall services">
              {services.map((service, index) => (
                <button key={service.slug} type="button" aria-pressed={selected.slug === service.slug} aria-controls="material-preview" onClick={() => setSelectedSlug(service.slug)}
                  onPointerEnter={(event) => { if (event.pointerType === "mouse" || event.pointerType === "pen") setSelectedSlug(service.slug); }}
                  className={`material-option flex min-h-12 items-center gap-3 rounded-[0.75rem] px-4 py-3 text-left text-sm font-semibold transition-colors ${selected.slug === service.slug ? "bg-brand-deep text-white" : "text-brand-ink hover:bg-brand-cream"}`}>
                  <span aria-hidden="true" className={`text-xs tabular-nums ${selected.slug === service.slug ? "text-brand-sand" : "text-brand-slate"}`}>{String(index + 1).padStart(2, "0")}</span>
                  <span className="flex-1">{service.hero.title}</span>
                  <ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0" />
                </button>
              ))}
            </div>
          </div>
          <div id="material-preview" className="min-w-0 border-t border-brand-mist bg-brand-deep text-white lg:border-l lg:border-t-0">
            <img key={selected.hero.backgroundImage} src={selected.hero.backgroundImage} alt={selected.hero.backgroundAlt} loading="lazy" decoding="async" className="material-image aspect-[16/9] w-full object-cover" />
            <div className="p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-sand">{selected.hero.eyebrow}</p>
              <h3 className="mt-3 text-3xl font-bold" aria-live="polite" aria-atomic="true">{selected.hero.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/80">{selected.hero.description}</p>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {selected.intro.checklist?.map((item) => <li key={item} className="flex items-start gap-2 text-sm leading-6 text-white/85"><Check aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-brand-gold" />{item}</li>)}
              </ul>
              <Link to={`/${selected.slug}/`} className="design-button mt-7 inline-flex items-center gap-3 rounded-full bg-brand-gold px-6 py-3 text-sm font-bold text-brand-ink hover:bg-brand-sand">Explore this service <ArrowRight aria-hidden="true" className="h-4 w-4" /></Link>
            </div>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-brand-slate">
          <span className="font-semibold text-brand-deep">Service guides:</span>
          {services.map((service) => <Link key={service.slug} to={`/${service.slug}/`} className="underline decoration-brand-mist underline-offset-4 hover:text-brand-oliveDark hover:decoration-brand-gold">{service.hero.title}</Link>)}
        </div>
      </div>
    </section>
  );
}
