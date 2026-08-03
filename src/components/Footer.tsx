import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { business } from "@/data/business";
import { areaNavigation, companyNavigation, serviceNavigation } from "@/data/navigation";

export default function Footer() {
  return (
    <footer className="bg-roof-deep text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.25fr_0.75fr_1fr_1fr] lg:px-8">
        <div>
          <img src={business.brand.assets.footerLogo} alt={business.name} className="w-[230px]" />
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/65">{business.brand.tagline} We provide roof repairs, restoration, replacement, gutter work and roofing maintenance across the region.</p>
          <div className="mt-6 space-y-3 text-sm">
            <a href={business.contact.phoneHref} className="flex items-center gap-3 hover:text-roof-sand"><Phone className="h-4 w-4 text-roof-copper" />{business.contact.phoneDisplay}</a>
            {business.contact.email && (
              <a href={business.contact.emailHref} className="flex items-center gap-3 hover:text-roof-sand"><Mail className="h-4 w-4 text-roof-copper" />{business.contact.email}</a>
            )}
            <span className="flex items-center gap-3 text-white/70"><MapPin className="h-4 w-4 text-roof-copper" />{business.address.display}</span>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-roof-sand">Company</h2>
          <div className="mt-5 space-y-2.5">
            {companyNavigation.map((item) => <Link key={item.href} to={item.href} className="block text-sm text-white/65 hover:text-white">{item.name}</Link>)}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-roof-sand">Services</h2>
          <div className="mt-5 space-y-2.5">
            {serviceNavigation.slice(0, 9).map((item) => <Link key={item.href} to={item.href} className="block text-sm leading-5 text-white/65 hover:text-white">{item.name}</Link>)}
            <Link to="/services/" className="block pt-1 text-sm font-semibold text-roof-sand">View all services</Link>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-roof-sand">Service Areas</h2>
          <div className="mt-5 grid grid-cols-2 gap-x-3 gap-y-2.5">
            {areaNavigation.slice(0, 12).map((item) => <Link key={item.href} to={item.href} className="text-sm text-white/65 hover:text-white">{item.name}</Link>)}
          </div>
          <Link to="/areas/" className="mt-4 inline-block text-sm font-semibold text-roof-sand">View all areas</Link>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-white/45 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <span>© {new Date().getFullYear()} {business.name}. All rights reserved.</span>
          <span>{`Roofing services across ${business.areaServed.display}.`}</span>
        </div>
      </div>
    </footer>
  );
}
