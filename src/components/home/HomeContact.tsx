import { business } from "@/data/business";
import { homeImages } from "@/data/home";
import SimpleContactForm from "@/components/shared/SimpleContactForm";

export default function HomeContact() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-6 lg:grid-cols-[.85fr_1.15fr] lg:px-8">
        <img src={homeImages.contact} alt={`${business.name} roofing enquiry`} className="aspect-[4/5] w-full rounded-[32px] object-cover shadow-[0_25px_70px_rgba(22,58,53,.15)]" />
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-gold">Get In Touch</p>
          <h2 className="mt-3 text-3xl font-bold text-brand-deep sm:text-4xl lg:text-5xl">Tell us what is happening with your roof</h2>
          <p className="mt-4 text-base leading-8 text-brand-slate">Send your suburb, contact details and a description of the leak, damage, maintenance need or planned roofing project. For urgent matters, call {business.contact.phoneDisplay}.</p>
          <div className="mt-8 rounded-[28px] border border-brand-mist bg-brand-cream/60 p-5 sm:p-6"><SimpleContactForm formLocation="home-contact" className="grid gap-4 md:grid-cols-2" fields={{ suburbLabel: "Suburb", suburbPlaceholder: "Suburb", messagePlaceholder: "Describe the roof issue or project" }} buttonLabel="Send Enquiry" /></div>
        </div>
      </div>
    </section>
  );
}
