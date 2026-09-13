import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { business } from "@/data/business";

type FloatingCTAProps = { onGetQuote: () => void };

export default function FloatingCTA({ onGetQuote }: FloatingCTAProps) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handle = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", handle, { passive: true });
    handle();
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <div className={`fixed bottom-3 left-3 right-3 z-40 transition duration-300 lg:bottom-6 lg:left-auto lg:right-6 lg:w-auto ${visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-5 opacity-0"}`}>
      <div className="flex items-center gap-2 rounded-full border border-white/10 bg-brand-deep/95 p-2 shadow-2xl backdrop-blur-xl">
        <a href={business.contact.phoneHref} className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/15 px-4 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white lg:flex-none"><Phone className="h-4 w-4" />Call</a>
        <button onClick={onGetQuote} className="flex-1 rounded-full bg-brand-gold px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:bg-brand-goldDark lg:flex-none">Request a Quote</button>
      </div>
    </div>
  );
}
