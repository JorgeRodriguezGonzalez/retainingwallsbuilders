import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import QuoteModal from "@/components/QuoteModal";
import PageHero from "@/components/shared/PageHero";
import { blogPosts } from "@/data/blog";
import { business } from "@/data/business";

export default function Blog() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  return (
    <div className="min-h-screen bg-brand-cream">
      <SEO title={`${business.name} Blog`} description={`Read practical ${business.areaServed.name} retaining wall guides about wall types, materials, drainage, council approval and construction considerations.`} canonical={`${business.url}/blog/`} />
      <Header />
      <main>
        <PageHero eyebrow="Retaining Wall Advice" title={`Practical guides for ${business.areaServed.name} property owners`} description="Learn about retaining wall materials, site considerations, drainage requirements and what to know before requesting a quote." image="/images/timber4.jpeg" />
        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            {blogPosts.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{blogPosts.map((post) => <Link key={post.slug} to={post.path} className="group overflow-hidden rounded-[26px] border border-brand-mist bg-brand-cream/55 transition hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(22,58,53,.12)]"><div className="aspect-[16/10] overflow-hidden"><img src={post.image} alt={post.imageAlt} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /></div><div className="p-5"><span className="text-xs font-bold uppercase tracking-[0.22em] text-brand-gold">{post.category}</span><h3 className="mt-2 text-xl font-bold text-brand-deep">{post.title}</h3><p className="mt-2 line-clamp-3 text-sm leading-7 text-brand-slate">{post.excerpt}</p><span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-brand-oliveDark">Read guide <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span></div></Link>)}</div>
            ) : (
              <div className="text-center py-12"><p className="text-brand-slate">Retaining wall guides are being developed. Check back soon for practical advice on wall materials, construction and site considerations.</p></div>
            )}
          </div>
        </section>
      </main>
      <Footer /><FloatingCTA onGetQuote={() => setQuoteOpen(true)} /><QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </div>
  );
}
