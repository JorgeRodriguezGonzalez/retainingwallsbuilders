import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { business } from "@/data/business";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
};

export default function PageHero({ eyebrow, title, description, image = "/images/service-hero.webp" }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-brand-deep pt-28 text-white md:pt-32">
      <div className="absolute inset-0">
        <img src={image} alt="" className="h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-deep via-brand-deep/90 to-brand-deep/45" />
        <div className="absolute -right-24 top-20 h-72 w-72 rounded-full bg-brand-gold/20 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-5 pb-16 sm:px-6 md:pb-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand-sand">{eyebrow}</p>
          <h1 className="mt-4 text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 md:text-lg">{description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/contact-us/" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-gold px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-brand-goldDark">
              Request a Quote <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={business.contact.phoneHref} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white hover:text-brand-deep">
              <Phone className="h-4 w-4" /> {business.contact.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
