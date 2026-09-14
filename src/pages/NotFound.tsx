import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return <div className="min-h-screen bg-brand-cream"><Header /><main className="flex min-h-[60vh] items-center justify-center px-5 py-16"><div className="text-center"><p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-gold">404</p><h1 className="mt-3 text-4xl font-bold text-brand-deep">Page not found</h1><p className="mt-4 text-brand-slate">The page may have moved or the address may be incorrect.</p><Link to="/" className="mt-7 inline-block bg-brand-olive px-6 py-3.5 text-sm font-bold text-white">Return home</Link></div></main><Footer /></div>;
}
