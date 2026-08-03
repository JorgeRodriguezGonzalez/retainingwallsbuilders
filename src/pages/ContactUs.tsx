import { Mail, MapPin, Phone } from "lucide-react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/shared/PageHero";
import SimpleContactForm from "@/components/shared/SimpleContactForm";
import { business } from "@/data/business";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-roof-cream">
      <SEO title={`Contact ${business.name} | Request a Roofing Quote`} description={`Contact ${business.name} for roof repairs, leak detection, restoration, replacement, gutter work and roofing services across ${business.areaServed.display}.`} canonical={`${business.url}/contact-us/`} />
      <Header />
      <main>
        <PageHero eyebrow="Contact Us" title="Tell us about your roof or planned project" description="Send the property location, roof concern and any helpful details. For urgent leaks or storm damage, call us directly." image="/images/contact-us-hero.webp" />
        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-roof-copper">Contact Details</p>
              <h2 className="mt-3 text-3xl font-bold text-roof-deep">{`Speak with ${business.name}`}</h2>
              <p className="mt-4 text-base leading-8 text-roof-slate">Describe the leak, damage, maintenance need or project. Ground-level photos can be useful, but never climb onto a roof to take them.</p>
              <div className="mt-8 space-y-4">
                <a href={business.contact.phoneHref} className="flex items-center gap-4 rounded-2xl bg-roof-cream p-4"><span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-roof-teal text-white"><Phone className="h-5 w-5" /></span><span><strong className="block text-roof-deep">Phone</strong><span className="text-sm text-roof-slate">{business.contact.phoneDisplay}</span></span></a>
                {business.contact.email && (
                  <a href={business.contact.emailHref} className="flex items-center gap-4 rounded-2xl bg-roof-cream p-4"><span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-roof-teal text-white"><Mail className="h-5 w-5" /></span><span><strong className="block text-roof-deep">Email</strong><span className="text-sm text-roof-slate">{business.contact.email}</span></span></a>
                )}
                <div className="flex items-center gap-4 rounded-2xl bg-roof-cream p-4"><span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-roof-teal text-white"><MapPin className="h-5 w-5" /></span><span><strong className="block text-roof-deep">Service Area</strong><span className="text-sm text-roof-slate">{business.areaServed.display}</span></span></div>
              </div>
            </div>
            <div className="rounded-[30px] border border-roof-mist bg-roof-cream/60 p-5 sm:p-8">
              <h2 className="text-2xl font-bold text-roof-deep">Request a roofing quote</h2>
              <p className="mt-2 text-sm leading-6 text-roof-slate">Complete the form and include enough detail for us to understand the property and the likely service required.</p>
              <SimpleContactForm formLocation="contact-page" className="mt-6 grid gap-4 md:grid-cols-2" fields={{ suburbLabel: "Suburb or address", suburbPlaceholder: "Suburb or address", messagePlaceholder: "Describe the roof issue or planned work" }} buttonLabel="Send Request" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
