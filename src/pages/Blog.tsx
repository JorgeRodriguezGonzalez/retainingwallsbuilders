import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock3 } from "lucide-react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/shared/PageHero";
import { blogPosts } from "@/data/blog";
import { business } from "@/data/business";

const formatDate = (date: string) => new Date(date).toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" });

export default function Blog() {
  return (
    <div className="min-h-screen bg-roof-cream">
      <SEO title={`${business.name} Blog`} description={`Read practical ${business.areaServed.name} roofing guides about roof leaks, storm damage, Colorbond and tile roofing, maintenance, restoration and replacement.`} canonical={`${business.url}/blog/`} />
      <Header />
      <main>
        <PageHero eyebrow="Roofing Advice" title={`Practical guides for ${business.areaServed.name} property owners`} description="Learn how to recognise common roof problems, compare roofing options and prepare useful information before arranging an inspection." image="/images/roof-hero.webp" />
        <section className="bg-white py-16 md:py-24"><div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8"><div className="grid gap-6 md:grid-cols-2">{blogPosts.map((post) => <article key={post.slug} className="group overflow-hidden rounded-[28px] border border-roof-mist bg-roof-cream/50"><Link to={post.path}><div className="aspect-[16/9] overflow-hidden"><img src={post.image} alt={post.imageAlt} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /></div></Link><div className="p-6 sm:p-7"><div className="flex flex-wrap items-center gap-3 text-xs text-roof-slate"><span className="rounded-full bg-roof-mist px-3 py-1 font-semibold text-roof-tealDark">{post.category}</span><span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" />{formatDate(post.date)}</span><span className="flex items-center gap-1.5"><Clock3 className="h-3.5 w-3.5" />{post.readTime}</span></div><h2 className="mt-4 text-2xl font-bold text-roof-deep"><Link to={post.path}>{post.title}</Link></h2><p className="mt-3 text-sm leading-7 text-roof-slate">{post.excerpt}</p><Link to={post.path} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-roof-copper">Read guide <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></Link></div></article>)}</div></div></section>
      </main>
      <Footer />
    </div>
  );
}
