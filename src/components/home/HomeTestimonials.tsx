import { business } from "@/data/business";

const notes = [
  { title: "Clear priorities", text: "We explain which aspects need professional attention and which can be addressed in staged work if budget requires." },
  { title: "Property-aware planning", text: "Access, site conditions, existing structures and drainage requirements are considered before work begins." },
  { title: "Regional coverage", text: `Our service area spans ${business.areaServed.name}, making it easy to get retaining wall support for major suburbs and communities.` },
];

export default function HomeTestimonials() {
  return (
    <section className="bg-brand-cream py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">{notes.map((note) => <div key={note.title} className="bg-white p-6 shadow-[0_16px_45px_rgba(22,58,53,.08)]"><h2 className="text-xl font-bold text-brand-deep">{note.title}</h2><p className="mt-3 text-sm leading-7 text-brand-slate">{note.text}</p></div>)}</div>
      </div>
    </section>
  );
}
