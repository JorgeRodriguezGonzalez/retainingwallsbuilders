import { whatWeDo } from "@/data/home";

export default function HomeWhatWeDo() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[0.24em] text-roof-copper">What We Look After</p><h2 className="mt-3 text-3xl font-bold text-roof-deep sm:text-4xl">Complete retaining wall systems, not isolated components</h2><p className="mt-4 text-base leading-8 text-roof-slate">A retaining wall failure can be connected to drainage, footings, soil conditions or construction methods. We consider the complete system before recommending an approach.</p></div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whatWeDo.map(({ icon: Icon, text }, index) => <div key={text} className="rounded-[24px] border border-roof-mist bg-roof-cream/60 p-5"><div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-roof-teal text-white"><Icon className="h-5 w-5" /></div><p className="mt-4 text-sm leading-7 text-roof-slate">{text}</p><span className="mt-4 block text-xs font-bold uppercase tracking-[0.18em] text-roof-copper">0{index + 1}</span></div>)}
        </div>
      </div>
    </section>
  );
}
