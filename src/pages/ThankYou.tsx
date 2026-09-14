import { Link } from "react-router-dom";
import { CheckCircle2, Phone } from "lucide-react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { business } from "@/data/business";

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-brand-cream"><SEO title={`Thank You | ${business.name}`} description="Your retaining wall enquiry has been submitted." canonical={`${business.url}/contact-us/thank-you/`} /><Header /><main className="flex min-h-[65vh] items-center justify-center px-5 py-16"><div className="max-w-xl bg-white p-8 text-center shadow-[0_25px_70px_rgba(22,58,53,.12)] sm:p-12"><CheckCircle2 className="mx-auto h-14 w-14 text-brand-olive" /><h1 className="mt-5 text-4xl font-bold text-brand-deep">Thank you for your enquiry</h1><p className="mt-4 text-base leading-8 text-brand-slate">Your details have been submitted. For urgent enquiries, call us directly.</p><div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row"><a href={business.contact.phoneHref} className="inline-flex items-center justify-center gap-2 bg-brand-gold px-6 py-3.5 text-sm font-bold text-white"><Phone className="h-4 w-4" />{business.contact.phoneDisplay}</a><Link to="/" className="inline-flex items-center justify-center gap-2 border border-brand-mist bg-brand-cream px-6 py-3.5 text-sm font-bold text-brand-deep">Back to Home</Link></div></div></main><Footer /></div>
  );
}
