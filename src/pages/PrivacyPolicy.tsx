import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/shared/PageHero";
import { business } from "@/data/business";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-roof-cream">
      <SEO title={`Privacy Policy | ${business.name}`} description={`Read the ${business.name} privacy policy covering website enquiries, contact details, analytics and information handling.`} canonical={`${business.url}/privacy-policy/`} />
      <Header />
      <main>
        <PageHero eyebrow="Website Information" title="Privacy Policy" description="This policy explains how information submitted through this website may be collected and used." image="/images/contact-us-hero.webp" />
        <article className="bg-white py-16"><div className="prose prose-neutral mx-auto max-w-3xl px-5 sm:px-6"><h2>Information we collect</h2><p>We may collect information you submit through enquiry forms, including your name, email address, phone number, property location and details about a roofing enquiry.</p><h2>How information is used</h2><p>Information may be used to respond to enquiries, understand the requested service, communicate about roofing work and improve the website.</p><h2>Website analytics</h2><p>The website may use analytics and advertising tracking parameters to understand traffic sources and website performance. These tools may use cookies or similar technologies.</p><h2>Sharing information</h2><p>Personal information is not sold. It may be shared with service providers where reasonably required to operate the website or respond to an enquiry.</p><h2>Contact</h2><p>Questions about this policy can be sent using the enquiry form on our contact page.</p></div></article>
      </main>
      <Footer />
    </div>
  );
}
