import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "@/pages/Index";
import AboutUs from "@/pages/AboutUs";
import ContactUs from "@/pages/ContactUs";
import Areas from "@/pages/Areas";
import Services from "@/pages/Services";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import FAQ from "@/pages/FAQ";
import Blog from "@/pages/Blog";
import NotFound from "@/pages/NotFound";
import ThankYou from "@/pages/ThankYou";
import ServiceTemplate from "@/components/ServiceTemplate";
import LocationTemplate from "@/components/LocationTemplate";
import BlogPostTemplate from "@/components/BlogPostTemplate";
import { blogRoutes } from "@/data/blog";
import { serviceRoutes } from "@/data/services";
import { locationRoutes } from "@/data/locations";

interface AppProps { ssrPath?: string; }
const queryClient = new QueryClient();

const AppRoutes = () => (
  <>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/contact-us/thank-you" element={<ThankYou />} />
      <Route path="/areas" element={<Areas />} />
      <Route path="/services" element={<Services />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/faqs" element={<FAQ />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/locations" element={<Navigate to="/areas/" replace />} />
      <Route path="/projects" element={<Navigate to="/services/" replace />} />
      <Route path="/resources" element={<Navigate to="/blog/" replace />} />

      {serviceRoutes.map((route) => <Route key={route.slug} path={route.path} element={<ServiceTemplate data={route.data} />} />)}
      {locationRoutes.map((route) => <Route key={route.slug} path={route.path} element={<LocationTemplate data={route.data} />} />)}
      {blogRoutes.map((route) => <Route key={route.slug} path={route.path} element={<BlogPostTemplate data={route.data} />} />)}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
);

export default function App({ ssrPath }: AppProps) {
  const router = ssrPath ? <StaticRouter location={ssrPath}><AppRoutes /></StaticRouter> : <BrowserRouter><AppRoutes /></BrowserRouter>;
  return <QueryClientProvider client={queryClient}><TooltipProvider><Toaster /><Sonner />{router}</TooltipProvider></QueryClientProvider>;
}
