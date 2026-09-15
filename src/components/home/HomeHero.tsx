import { ArrowDown, ArrowRight, Phone } from "lucide-react";
import { business } from "@/data/business";
import { homeImages } from "@/data/home";

type Props = { onGetQuote: () => void };

export default function HomeHero({ onGetQuote }: Props) {
  return (
    <section className="landscape-hero">
      <div className="landscape-copy">
        <p className="visual-label">{business.areaServed.name} · Retaining wall specialists</p>
        <h1>Strong foundations.<br /><span>New possibilities.</span></h1>
        <p className="landscape-description">Retaining walls built around your property, from the first site assessment to the finishing details.</p>
        <div className="landscape-actions">
          <button type="button" onClick={onGetQuote} className="visual-cta">Discuss your project <ArrowRight aria-hidden="true" size={18} /></button>
          <a href="#wall-materials" className="visual-text-link">Explore materials <ArrowDown aria-hidden="true" size={18} /></a>
        </div>
        <a className="landscape-phone" href={business.contact.phoneHref}><Phone aria-hidden="true" size={16} />{business.contact.phoneDisplay}</a>
      </div>
      <div className="landscape-photo">
        <img src={homeImages.hero} alt={`Retaining wall construction across ${business.areaServed.name}`} fetchPriority="high" />
        <div className="landscape-caption"><span className="visual-label">Built for the way you live</span><span>Structure meets landscape.</span></div>
        <span className="landscape-line" aria-hidden="true" />
      </div>
      <div className="landscape-footnote"><span>Residential · Commercial · Landscape</span><a href="#wall-materials">Find your finish <ArrowDown aria-hidden="true" size={16} /></a></div>
    </section>
  );
}
