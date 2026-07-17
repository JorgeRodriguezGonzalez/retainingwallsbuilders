const notes = [
  { title: "Clear priorities", text: "We explain which issues need prompt attention and which can be included in planned maintenance." },
  { title: "Property-aware planning", text: "Access, roof size, building use and surrounding property conditions are considered before work begins." },
  { title: "Regional coverage", text: "Our area pages make it easy to find roofing information for major Hunter Valley towns and communities." },
];

export default function HomeTestimonials() {
  return (
    <section className="bg-roof-cream py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">{notes.map((note) => <div key={note.title} className="rounded-[26px] bg-white p-6 shadow-[0_16px_45px_rgba(22,58,53,.08)]"><h2 className="text-xl font-bold text-roof-deep">{note.title}</h2><p className="mt-3 text-sm leading-7 text-roof-slate">{note.text}</p></div>)}</div>
      </div>
    </section>
  );
}
