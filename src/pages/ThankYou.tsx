import { Link } from "react-router-dom";
import { CheckCircle2, Phone } from "lucide-react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { business } from "@/data/business";

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-roof-cream"><SEO title={`Thank You | ${business.name}`} description="Your roofing enquiry has been submitted." canonical={`${business.url}/contact-us/thank-you/`} /><Header /><main className="flex min-h-[65vh] items-center justify-center px-5 py-16"><div className="max-w-xl rounded-[32px] bg-white p-8 text-center shadow-[0_25px_70px_rgba(22,58,53,.12)] sm:p-12"><CheckCircle2 className="mx-auto h-14 w-14 text-roof-teal" /><h1 className="mt-5 text-4xl font-bold text-roof-deep">Thank you for your enquiry</h1><p className="mt-4 text-base leading-8 text-roof-slate">Your details have been submitted. For an urgent roof leak or make-safe request, call us directly.</p><div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row"><a href={business.contact.phoneHref} className="inline-flex items-center justify-center gap-2 rounded-full bg-roof-copper px-6 py-3.5 text-sm font-bold text-white"><Phone className="h-4 w-4" />{business.contact.phoneDisplay}</a><Link to="/" className="rounded-full border border-roof-mist px-6 py-3.5 text-sm font-bold text-roof-deep">Return home</Link></div></div></main><Footer /></div>
  );
}
