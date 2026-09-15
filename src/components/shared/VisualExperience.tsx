import { useId, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Plus } from "lucide-react";
import { services } from "@/data/services";

type ProcessProps = {
  eyebrow?: string;
  heading: string;
  image: string;
  imageAlt: string;
  steps: { title: string; description: string }[];
};

export function ProcessPanel({ eyebrow, heading, image, imageAlt, steps }: ProcessProps) {
  const id = useId();
  const [active, setActive] = useState(0);
  if (!steps.length) return null;
  return (
    <section className="process-panel" aria-labelledby={id}>
      <div className="process-layout">
        <div className="process-visual">
          <img src={image} alt={imageAlt} loading="lazy" decoding="async" />
          <div className="process-caption">
            <span className="visual-label">{eyebrow || "Our approach"}</span>
            <h2 id={id}>{heading}</h2>
            <div className="process-counter" aria-hidden="true">
              <span>{String(active + 1).padStart(2, "0")}</span>
              <span>/ {String(steps.length).padStart(2, "0")}</span>
            </div>
          </div>
        </div>
        <div className="process-steps">
          <p className="visual-label">Explore the details</p>
          {steps.map((step, index) => (
            <div key={step.title} className="process-step" data-active={active === index} onPointerEnter={(event) => { if (event.pointerType === "mouse" || event.pointerType === "pen") setActive(index); }}>
              <h3>
                <button type="button" aria-expanded={active === index} aria-controls={`${id}-step-${index}`} onClick={() => setActive(index)}>
                  <span className="step-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  <span>{step.title}</span><Plus aria-hidden="true" size={20} />
                </button>
              </h3>
              <div id={`${id}-step-${index}`} hidden={active !== index}>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MaterialGallery() {
  const id = useId();
  const rail = useRef<HTMLDivElement>(null);
  const items = services.filter((service) => service.slug !== "retaining-wall-repair-sydney");
  const move = (direction: number) => {
    const element = rail.current;
    if (!element) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    element.scrollBy({ left: direction * element.clientWidth * 0.8, behavior: reduced ? "auto" : "smooth" });
  };
  return (
    <section className="material-gallery" aria-labelledby={id}>
      <div className="gallery-heading">
        <div><p className="visual-label">Texture. Structure. Character.</p><h2 id={id}>See the possibilities.</h2></div>
        <div className="gallery-controls">
          <button type="button" onClick={() => move(-1)} aria-label="Previous materials"><ArrowLeft aria-hidden="true" /></button>
          <button type="button" onClick={() => move(1)} aria-label="Next materials"><ArrowRight aria-hidden="true" /></button>
        </div>
      </div>
      <div ref={rail} className="gallery-rail" tabIndex={0} role="region" aria-label="Wall material photographs">
        {items.map((service, index) => (
          <Link key={service.slug} to={`/${service.slug}/`} className="gallery-frame">
            <img src={service.hero.backgroundImage} alt={service.hero.backgroundAlt} loading="lazy" decoding="async" />
            <div><span className="visual-label">Material / {String(index + 1).padStart(2, "0")}</span><h3>{service.hero.title}</h3><ArrowRight aria-hidden="true" /></div>
          </Link>
        ))}
      </div>
      <p className="gallery-hint">Scroll to explore · Select a material to view the service</p>
    </section>
  );
}
