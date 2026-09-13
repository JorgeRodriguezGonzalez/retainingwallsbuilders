import { useState } from "react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import QuoteModal from "@/components/QuoteModal";
import HomeHero from "@/components/home/HomeHero";
import HomeAbout from "@/components/home/HomeAbout";
import HomeWhyChoose from "@/components/home/HomeWhyChoose";
import HomeServices from "@/components/home/HomeServices";
import HomeWhatWeDo from "@/components/home/HomeWhatWeDo";
import HomeTestimonials from "@/components/home/HomeTestimonials";
import HomeContact from "@/components/home/HomeContact";
import { business } from "@/data/business";
import { BRAND_LOGO_URL, BUSINESS_ID, DEFAULT_OG_IMAGE, ORGANIZATION_ID, SITE_URL } from "@/lib/seo";

export default function Index() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  return (
    <div className="min-h-screen bg-brand-cream text-brand-ink">
      <SEO
        title={`${business.name} | Roof Repairs & Roofing Services ${business.areaServed.name}`}
        description={`${business.name} provides roof repairs, leak detection, emergency make safes, restoration, replacement, gutters, Colorbond and commercial roofing across ${business.areaServed.display}.`}
        canonical={`${business.url}/`}
        schema={[
          {
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "RoofingContractor"],
            "@id": BUSINESS_ID,
            name: business.name,
            description: business.brand.tagline,
            url: `${SITE_URL}/`,
            telephone: business.contact.phoneSchema,
            ...(business.contact.email ? { email: business.contact.email } : {}),
            image: DEFAULT_OG_IMAGE,
            logo: BRAND_LOGO_URL,
            areaServed: business.areaServed.locations,
            address: { "@type": "PostalAddress", streetAddress: business.address.streetAddress, addressLocality: business.address.locality, addressRegion: business.address.region, postalCode: business.address.postalCode, addressCountry: business.address.country },
            openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: business.hours.schemaDays, opens: business.hours.schemaOpens, closes: business.hours.schemaCloses },
          },
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": ORGANIZATION_ID,
            name: business.name,
            url: `${SITE_URL}/`,
            logo: { "@type": "ImageObject", url: BRAND_LOGO_URL },
            contactPoint: { "@type": "ContactPoint", telephone: business.contact.phoneSchema, contactType: "customer service", areaServed: "AU", availableLanguage: "English" },
          },
        ]}
      />
      <Header />
      <main>
        <HomeHero onGetQuote={() => setQuoteOpen(true)} />
        <HomeServices />
        <HomeAbout />
        <HomeWhyChoose />
        <HomeWhatWeDo />
        <HomeTestimonials />
        <HomeContact />
      </main>
      <Footer />
      <FloatingCTA onGetQuote={() => setQuoteOpen(true)} />
      <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </div>
  );
}
