// src/components/LocationTemplate.tsx

import { useState } from "react";
import SEO from "@/components/SEO";
import {
  SITE_URL,
  canonicalUrl,
  createBreadcrumbSchema,
  createFaqSchema,
  serviceProvider,
} from "@/lib/seo";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Phone, MapPin } from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import QuoteModal from "@/components/QuoteModal";
import type { LocationPageData } from "@/types/location";
import type { SuburbPageData } from "@/types/suburb";
import { business } from "@/data/business";
import { getSuburbsByParentArea } from "@/data/suburbs";
import { getLocationBySlug } from "@/data/locations";

type LocationTemplateProps = {
  data: LocationPageData | SuburbPageData;
};

/**
 * Type guard to check if data is a SuburbPageData (has parentArea).
 */
function isSuburbPage(
  data: LocationPageData | SuburbPageData
): data is SuburbPageData {
  return "parentArea" in data && typeof data.parentArea === "string";
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#2e6957]">
      {children}
    </p>
  );
}

function SectionTitle({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <h2
      className={`text-3xl font-semibold leading-tight md:text-4xl ${
        dark ? "text-white" : "text-[#1d5242]"
      }`}
    >
      {children}
    </h2>
  );
}

function RichTextParagraphs({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="space-y-5">
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="text-[15px] leading-8 text-neutral-600">
          {paragraph}
        </p>
      ))}
    </div>
  );
}

function Checklist({ items }: { items: string[] }) {
  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2">
      {items.map((item, index) => (
        <div key={index} className="flex items-start gap-3">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#2e6957]" />
          <span className="text-sm leading-7 text-neutral-700">{item}</span>
        </div>
      ))}
    </div>
  );
}

function FAQAccordion({
  items,
}: {
  items: NonNullable<LocationPageData["faq"]>["items"];
}) {
  return (
    <div className="mx-auto mt-10 max-w-4xl divide-y divide-neutral-200 overflow-hidden rounded-2xl border border-neutral-200 bg-white">
      {items.map((item, index) => (
        <details key={index} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-6 py-5 text-left font-medium text-[#1d5242]">
            <span>{item.question}</span>
            <span className="text-[#2e6957] transition-transform duration-200 group-open:rotate-45">
              +
            </span>
          </summary>
          <div className="px-6 pb-5 text-sm leading-7 text-neutral-600">
            {item.answer}
          </div>
        </details>
      ))}
    </div>
  );
}

export default function LocationTemplate({ data }: LocationTemplateProps) {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const canonical = canonicalUrl(data.seo.canonical);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${canonical}#service`,
    name: data.schema?.serviceType || data.hero.title,
    serviceType: data.schema?.serviceType || data.hero.title,
    description: data.schema?.description || data.seo.description,
    url: canonical,
    areaServed: data.schema?.areaServed || business.areaServed.display,
    provider: serviceProvider(),
  };

  const breadcrumbItems = isSuburbPage(data)
    ? (() => {
        const parentLocation = getLocationBySlug(data.parentArea);
        const parentName = parentLocation?.hero.title || data.parentArea;
        return [
          { name: "Home", url: `${SITE_URL}/` },
          { name: "Areas", url: `${SITE_URL}/areas/` },
          { name: parentName, url: `${SITE_URL}/${data.parentArea}/` },
          { name: data.hero.title, url: canonical },
        ];
      })()
    : [
        { name: "Home", url: `${SITE_URL}/` },
        { name: "Areas", url: `${SITE_URL}/areas/` },
        { name: data.hero.title, url: canonical },
      ];

  const breadcrumbSchema = createBreadcrumbSchema(breadcrumbItems);

  const schemas = [serviceSchema, breadcrumbSchema];
  if (data.faq?.items?.length) {
    schemas.push(createFaqSchema(data.faq.items));
  }

  return (
    <>
      <SEO
        title={data.seo.title}
        description={data.seo.description}
        canonical={canonical}
        ogImage={data.seo.ogImage}
        schema={schemas}
      />

      <div className="min-h-screen bg-white">
        <Header />

        <main>
          {/* HERO */}
          <section className="relative isolate overflow-hidden bg-[#1d5242] pt-32 text-white md:pt-36">
            <div className="absolute inset-0">
              <img
                src={data.hero.backgroundImage}
                alt={data.hero.backgroundAlt}
                className="h-full w-full object-cover opacity-35"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1d5242]/95 via-[#1d5242]/75 to-[#1d5242]/35" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1d5242]/80 via-transparent to-[#1d5242]/35" />
            </div>

            <div className="relative mx-auto max-w-7xl px-6 pb-16 md:pb-20">
              <div className="max-w-3xl">
                {data.hero.eyebrow && <Eyebrow>{data.hero.eyebrow}</Eyebrow>}

                <h1 className="text-white mt-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                  {data.hero.title}
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 md:text-lg">
                  {data.hero.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    to={data.hero.primaryCtaHref}
                    className="inline-flex items-center gap-2 rounded-full bg-[#c4a35a] px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[#1d5242] shadow-[0_18px_38px_rgba(201,120,69,0.28)] transition hover:-translate-y-0.5 hover:bg-[#ded4bf]"
                  >
                    {data.hero.primaryCtaLabel}
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  {data.hero.secondaryCtaLabel && data.hero.secondaryCtaHref && (
                    <a
                      href={data.hero.secondaryCtaHref}
                      className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white hover:text-[#1d5242]"
                    >
                      <Phone className="h-4 w-4" />
                      {data.hero.secondaryCtaLabel}
                    </a>
                  )}
                </div>

                {data.hero.stats && data.hero.stats.length > 0 && (
                  <div className="mt-10 grid max-w-3xl grid-cols-2 gap-6 border-t border-white/15 pt-8 md:grid-cols-4">
                    {data.hero.stats.map((stat, index) => (
                      <div key={index}>
                        <div className="text-2xl font-semibold text-[#c4a35a]">
                          {stat.value}
                        </div>
                        <div className="mt-1 text-sm text-white/70">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* INTRO */}
          <section className="py-20 md:py-24">
            <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
              <div>
                {data.intro.eyebrow && <Eyebrow>{data.intro.eyebrow}</Eyebrow>}
                <SectionTitle>{data.intro.heading}</SectionTitle>

                <div className="mt-6">
                  <RichTextParagraphs paragraphs={data.intro.paragraphs} />
                </div>

                {data.intro.checklist?.length ? (
                  <Checklist items={data.intro.checklist} />
                ) : null}
              </div>

              <div>
                <img
                  src={data.intro.image}
                  alt={data.intro.imageAlt}
                  className="h-full max-h-[460px] w-full rounded-2xl object-cover shadow-sm"
                />
              </div>
            </div>
          </section>

          {/* CHILD SUBURBS - Only rendered for area pages with children */}
          {(() => {
            const childSuburbs =
              !isSuburbPage(data) && data.childSuburbSlugs?.length
                ? data.childSuburbSlugs
                    .map((slug) => {
                      const suburb = getSuburbsByParentArea(data.slug).find(
                        (s) => s.slug === slug
                      );
                      return suburb ? { slug: suburb.slug, title: suburb.hero.title } : null;
                    })
                    .filter(Boolean)
                : !isSuburbPage(data)
                  ? getSuburbsByParentArea(data.slug).map((s) => ({
                      slug: s.slug,
                      title: s.hero.title,
                    }))
                  : [];

            return childSuburbs.length > 0 ? (
              <section className="bg-[#f8fafc] py-16 md:py-20">
                <div className="mx-auto max-w-7xl px-6">
                  <div className="mb-10 text-center">
                    <Eyebrow>Areas We Serve</Eyebrow>
                    <SectionTitle>Suburbs in {data.hero.title}</SectionTitle>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {childSuburbs.map((suburb) => (
                      <Link
                        key={suburb!.slug}
                        to={`/${suburb!.slug}/`}
                        className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-white px-5 py-4 transition hover:border-[#2e6957] hover:shadow-sm"
                      >
                        <MapPin className="h-5 w-5 shrink-0 text-[#2e6957]" />
                        <span className="font-medium text-[#1d5242]">
                          {suburb!.title}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </section>
            ) : null;
          })()}

          {/* BENEFITS */}
          {data.benefits?.items?.length ? (
            <section className="bg-[#1d5242] py-20 md:py-24">
              <div className="mx-auto max-w-7xl px-6">
                <div className="max-w-2xl">
                  {data.benefits.eyebrow && (
                    <Eyebrow>{data.benefits.eyebrow}</Eyebrow>
                  )}
                  <SectionTitle dark>{data.benefits.heading}</SectionTitle>
                </div>

                <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                  {data.benefits.items.map((item, index) => (
                    <div
                      key={index}
                      className="rounded-2xl border border-white/10 bg-white/5 p-6"
                    >
                      <div className="mb-4 text-3xl font-semibold text-[#c4a35a]">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <h3 className="text-white text-xl font-semibold">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-white/70">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ) : null}

          {/* PROCESS */}
          {data.process?.steps?.length ? (
            <section className="py-20 md:py-24">
              <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
                <div>
                  {data.process.eyebrow && (
                    <Eyebrow>{data.process.eyebrow}</Eyebrow>
                  )}
                  <SectionTitle>{data.process.heading}</SectionTitle>

                  <div className="mt-10 space-y-6">
                    {data.process.steps.map((step, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2e6957]/10 text-sm font-semibold text-[#2e6957]">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="text-[#1d5242] text-xl font-semibold">
                            {step.title}
                          </h3>
                          <p className="mt-2 text-sm leading-7 text-neutral-600">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <img
                    src={data.process.image}
                    alt={data.process.imageAlt}
                    className="h-full max-h-[760px] w-full rounded-2xl object-cover shadow-sm"
                  />
                </div>
              </div>
            </section>
          ) : null}

          {/* FLEXIBLE CONTENT SECTIONS */}
          {data.sections?.map((section, index) => {
            const imageLeft = section.imagePosition === "left";
            const dark = index % 2 === 0;

            return (
              <section
                key={`${section.heading}-${index}`}
                className={
                  dark
                    ? "bg-[#1d5242] py-20 md:py-24"
                    : "bg-white py-20 md:py-24"
                }
              >
                <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
                  <div className={imageLeft ? "order-1" : "order-2 lg:order-1"}>
                    <img
                      src={section.image}
                      alt={section.imageAlt}
                      className="h-full max-h-[460px] w-full rounded-2xl object-cover shadow-sm"
                    />
                  </div>

                  <div className={imageLeft ? "order-2" : "order-1 lg:order-2"}>
                    {section.eyebrow && <Eyebrow>{section.eyebrow}</Eyebrow>}
                    <SectionTitle dark={dark}>{section.heading}</SectionTitle>

                    <div className="mt-6 space-y-5">
                      {section.paragraphs.map((paragraph, paragraphIndex) => (
                        <p
                          key={paragraphIndex}
                          className={`text-[15px] leading-8 ${
                            dark ? "text-white/75" : "text-neutral-600"
                          }`}
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    {section.items?.length ? (
                      <div className="mt-8 grid gap-4 sm:grid-cols-2">
                        {section.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-start gap-3">
                            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#c4a35a]" />
                            <span
                              className={`text-sm leading-7 ${
                                dark ? "text-white/80" : "text-neutral-700"
                              }`}
                            >
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              </section>
            );
          })}

          {/* CTA */}
          {data.cta ? (
            <section className="bg-[#2e6957] py-14 md:py-16">
              <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 lg:flex-row lg:items-center">
                <div className="max-w-2xl">
                  {data.cta.eyebrow && (
                    <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/80">
                      {data.cta.eyebrow}
                    </p>
                  )}
                  <h2 className="text-white text-3xl font-semibold leading-tight md:text-4xl">
                    {data.cta.heading}
                  </h2>
                  <p className="mt-4 text-base leading-8 text-white/85">
                    {data.cta.text}
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link
                    to={data.cta.primaryHref}
                    className="inline-flex items-center gap-2 rounded-full bg-[#1d5242] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                  >
                    {data.cta.primaryLabel}
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  {data.cta.secondaryLabel && data.cta.secondaryHref && (
                    <a
                      href={data.cta.secondaryHref}
                      className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                    >
                      <Phone className="h-4 w-4" />
                      {data.cta.secondaryLabel}
                    </a>
                  )}
                </div>
              </div>
            </section>
          ) : null}

          {/* FAQ */}
          {data.faq?.items?.length ? (
            <section className="bg-[#f8fafc] py-20 md:py-24">
              <div className="mx-auto max-w-7xl px-6 text-center">
                {data.faq.eyebrow && <Eyebrow>{data.faq.eyebrow}</Eyebrow>}
                <SectionTitle>{data.faq.heading}</SectionTitle>
                <FAQAccordion items={data.faq.items} />
              </div>
            </section>
          ) : null}
        </main>

        <Footer />

        <FloatingCTA onGetQuote={() => setIsQuoteModalOpen(true)} />

        <QuoteModal
          isOpen={isQuoteModalOpen}
          onClose={() => setIsQuoteModalOpen(false)}
        />
      </div>
    </>
  );
}