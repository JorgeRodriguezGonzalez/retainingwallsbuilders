import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Calendar,
  ChevronRight,
  Clock3,
  List,
  Search,
} from 'lucide-react';

import SEO from '@/components/SEO';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import QuoteModal from '@/components/QuoteModal';
import { blogPosts } from '@/data/blog';
import type { BlogPostData } from '@/types/blog';
import { business } from '@/data/business';
import {
  BRAND_LOGO_URL,
  ORGANIZATION_ID,
  SITE_NAME,
  SITE_URL,
  absoluteAssetUrl,
  canonicalUrl,
  createBreadcrumbSchema,
  createFaqSchema,
} from '@/lib/seo';

type BlogPostTemplateProps = {
  data: BlogPostData;
};

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-AU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default function BlogPostTemplate({ data }: BlogPostTemplateProps) {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [search, setSearch] = useState('');

  const filteredArticles = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return blogPosts;

    return blogPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(term) ||
        post.excerpt.toLowerCase().includes(term) ||
        post.category.toLowerCase().includes(term)
    );
  }, [search]);

  const relatedPosts = blogPosts.filter(
    (post) => post.slug !== data.slug && (data.relatedPosts?.includes(post.slug) ?? true)
  );

  const canonical = canonicalUrl(data.seo.canonical);
  const faqSchema = data.faq?.length ? createFaqSchema(data.faq) : null;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${canonical}#article`,
    headline: data.title,
    description: data.seo.description,
    image: [absoluteAssetUrl(data.seo.ogImage || data.image)],
    datePublished: data.date,
    dateModified: data.date,
    author: {
      '@type': 'Organization',
      '@id': ORGANIZATION_ID,
      name: SITE_NAME,
      url: `${SITE_URL}/`,
    },
    publisher: {
      '@type': 'Organization',
      '@id': ORGANIZATION_ID,
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      logo: {
        '@type': 'ImageObject',
        url: BRAND_LOGO_URL,
      },
    },
    mainEntityOfPage: canonical,
  };

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: `${SITE_URL}/` },
    { name: 'Blog', url: `${SITE_URL}/blog/` },
    { name: data.title, url: canonical },
  ]);

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <SEO
        title={data.seo.title}
        description={data.seo.description}
        canonical={canonical}
        ogImage={data.seo.ogImage}
        schema={faqSchema ? [articleSchema, breadcrumbSchema, faqSchema] : [articleSchema, breadcrumbSchema]}
      />

      <Header />

      <main>
        <section className="relative overflow-hidden bg-black pt-28 text-white md:pt-32">
          <div className="absolute inset-0">
            <img
              src={data.image}
              alt={data.imageAlt}
              className="h-full w-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/60 to-black/85" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 pb-14 md:pb-20">
            <div className="max-w-4xl">
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#c4a35a]">
                {data.hero.eyebrow}
              </p>

              <div className="mb-5 flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">
                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-white">
                  {data.hero.kicker || data.category}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5 text-[#c4a35a]" />
                  {formatDate(data.date)}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock3 className="h-3.5 w-3.5 text-[#c4a35a]" />
                  {data.readTime}
                </span>
              </div>

              <h1 className="max-w-4xl text-white mt-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                {data.title}
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-white/80 md:text-lg">
                {data.intro}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/contact-us/"
                  className="inline-flex items-center gap-2 rounded-full bg-[#c4a35a] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  Request a Free Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/blog/"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
                >
                  Back to Blog
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f5f5f5] py-10 md:py-14">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 lg:flex-row lg:items-start">
            <article className="min-w-0 flex-1 rounded-[28px] border border-neutral-200 bg-white p-6 shadow-sm md:p-8 lg:p-10">
              <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm text-neutral-500">
                <Link to="/" className="transition hover:text-[#c4a35a]">Home</Link>
                <ChevronRight className="h-4 w-4" />
                <Link to="/blog/" className="transition hover:text-[#c4a35a]">Blog</Link>
                <ChevronRight className="h-4 w-4" />
                <span className="text-neutral-900">{data.title}</span>
              </nav>

              <div className="mb-10 overflow-hidden rounded-[24px] border border-neutral-200">
                <img
                  src={data.image}
                  alt={data.imageAlt}
                  className="h-[260px] w-full object-cover md:h-[360px]"
                />
              </div>

              <div className="mb-10 rounded-[24px] border border-neutral-200 bg-[#f5f6f3] p-5 md:p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#c4a35a] text-white">
                    <List className="h-5 w-5" />
                  </div>
                  <h2 className="text-[#2c3424] text-3xl font-semibold leading-tight md:text-4xl">Table of contents</h2>
                </div>

                <ol className="space-y-3 text-sm text-neutral-700 md:text-[15px]">
                  {data.tableOfContents.map((item, index) => (
                    <li key={item.id}>
                      <a href={`#${item.id}`} className="group flex gap-3 transition hover:text-[#c4a35a]">
                        <span className="font-semibold text-[#c4a35a]">{index + 1}.</span>
                        <span className="group-hover:translate-x-0.5 transition-transform">{item.label}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="space-y-10">
                {data.sections.map((section) => (
                  <section key={section.id} id={section.id} className="scroll-mt-28">
                    <h2 className="text-[#2c3424] text-3xl font-semibold leading-tight md:text-4xl">
                      {section.heading}
                    </h2>

                    <div className="mt-5 space-y-5">
                      {section.paragraphs.map((paragraph, index) => (
                        <p key={index} className="text-[15px] leading-8 text-neutral-700 md:text-base">
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    {section.bullets?.length ? (
                      <ul className="mt-6 space-y-3 rounded-[20px] bg-neutral-50 p-5">
                        {section.bullets.map((bullet, index) => (
                          <li key={index} className="flex gap-3 text-[15px] leading-7 text-neutral-700">
                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#c4a35a]" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}

                    {section.callout ? (
                      <div className="mt-6 rounded-[20px] border border-[#c4a35a]/20 bg-[#f5f6f3] p-5 text-[15px] leading-7 text-neutral-800">
                        {section.callout}
                      </div>
                    ) : null}
                  </section>
                ))}

                {data.faq?.length ? (
                  <section id="faqs" className="scroll-mt-28">
                    <h2 className="text-[#2c3424] text-3xl font-semibold leading-tight md:text-4xl">
                      Frequently asked questions
                    </h2>
                    <div className="mt-6 space-y-4">
                      {data.faq.map((item, index) => (
                        <details
                          key={index}
                          className="group overflow-hidden rounded-[20px] border border-neutral-200 bg-white"
                        >
                          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 text-left font-semibold text-[#2c3424]">
                            <span>{item.question}</span>
                            <span className="text-[#c4a35a] transition-transform group-open:rotate-45">+</span>
                          </summary>
                          <div className="px-5 pb-5 text-[15px] leading-7 text-neutral-700">
                            {item.answer}
                          </div>
                        </details>
                      ))}
                    </div>
                  </section>
                ) : null}
              </div>
            </article>

            <aside className="w-full space-y-6 lg:sticky lg:top-28 lg:w-[320px]">
              <div className="rounded-[24px] border border-neutral-200 bg-white p-5 shadow-sm">
                <label className="mb-3 block text-sm font-semibold text-[#2c3424]">Search</label>
                <div className="relative">
                  <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
                  <input
                    type="search"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder={data.sidebar.searchPlaceholder || 'Search'}
                    className="h-11 w-full rounded-full border border-neutral-200 bg-neutral-50 pl-11 pr-4 text-sm outline-none transition focus:border-[#c4a35a] focus:bg-white"
                  />
                </div>
                <div className="mt-4 space-y-3">
                  {filteredArticles.length > 0 ? (
                    filteredArticles.slice(0, 4).map((post) => (
                      <Link
                        key={post.slug}
                        to={post.path}
                        className="block rounded-2xl border border-neutral-200 p-4 transition hover:border-[#c4a35a]/40 hover:bg-[#f5f6f3]"
                      >
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c4a35a]">
                          {post.category}
                        </p>
                        <h3 className="mt-2 text-[#2c3424] text-xl font-semibold">
                          {post.title}
                        </h3>
                      </Link>
                    ))
                  ) : (
                    <p className="text-sm text-neutral-500">No matching articles yet.</p>
                  )}
                </div>
              </div>

              <div className="rounded-[24px] border border-neutral-200 bg-white p-5 shadow-sm">
                <h3 className="text-[#2c3424] text-xl font-semibold">Useful links</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {data.sidebar.usefulLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="rounded-full border border-neutral-200 px-3 py-2 text-xs font-medium text-neutral-700 transition hover:border-[#c4a35a] hover:text-[#c4a35a]"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="rounded-[24px] border border-neutral-200 bg-[#2c3424] p-6 text-white shadow-sm">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#c4a35a]">
                  Roofing enquiries
                </p>
                <h3 className="mt-3 text-xl font-semibold">
                  Need help with roof repairs in {business.areaServed.display}?
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/75">
                  Speak with our team about roof leaks, damaged tiles, flashing issues and practical repair options.
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  <Link
                    to="/contact-us/"
                    className="inline-flex items-center justify-center rounded-full bg-[#c4a35a] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                  >
                    Contact Us
                  </Link>
                  <a
                    href={business.contact.phoneHref}
                    className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
                  >
                    Call {business.contact.phoneDisplay}
                  </a>
                </div>
              </div>

              {relatedPosts.length > 0 ? (
                <div className="rounded-[24px] border border-neutral-200 bg-white p-5 shadow-sm">
                  <h3 className="text-[#2c3424] text-xl font-semibold">You might also like</h3>
                  <div className="mt-4 space-y-4">
                    {relatedPosts.slice(0, 3).map((post) => (
                      <Link key={post.slug} to={post.path} className="group block">
                        <div className="overflow-hidden rounded-[18px] border border-neutral-200">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="h-36 w-full object-cover transition duration-500 group-hover:scale-105"
                          />
                        </div>
                        <h4 className="mt-3 text-sm font-semibold leading-6 text-[#2c3424] group-hover:text-[#c4a35a]">
                          {post.title}
                        </h4>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </aside>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingCTA onGetQuote={() => setIsQuoteModalOpen(true)} />
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </div>
  );
}