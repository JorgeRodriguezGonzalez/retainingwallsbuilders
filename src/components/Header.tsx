import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Mail, Menu, Phone, X } from "lucide-react";
import { business } from "@/data/business";
import { mainNavigation, type NavigationLink } from "@/data/navigation";

const normalise = (path: string) => (path === "/" ? "/" : `${path.replace(/\/+$/, "")}/`);

const isActive = (pathname: string, href: string, children?: NavigationLink[]) => {
  const current = normalise(pathname);
  if (current === normalise(href)) return true;
  return children?.some((item) => current === normalise(item.href)) ?? false;
};

export default function Header() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopMenu, setDesktopMenu] = useState<string | null>(null);
  const [mobileMenus, setMobileMenus] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setMobileOpen(false);
    setDesktopMenu(null);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#2c3424] shadow-[0_10px_30px_rgba(22,58,53,0.08)] backdrop-blur-xl">
      <div className="border-b border-white/10 bg-brand-deep text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-2 text-xs sm:px-6">
          <span className="hidden text-white/65 md:inline">{`Retaining walls across ${business.areaServed.primaryLocationNames.slice(0, 3).join(", ")} and the wider ${business.areaServed.name}`}</span>
          <div className="flex items-center gap-4">
            <a href={business.contact.phoneHref} className="flex items-center gap-2 hover:text-brand-sand"><Phone className="h-3.5 w-3.5" />{business.contact.phoneDisplay}</a>
            {business.contact.email && (
              <a href={business.contact.emailHref} className="hidden items-center gap-2 hover:text-brand-sand sm:flex"><Mail className="h-3.5 w-3.5" />{business.contact.email}</a>
            )}
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" aria-label={`${business.name} home`}>
          <img src={business.brand.assets.headerLogo} alt={business.name} className="h-auto w-[190px] sm:w-[220px]" />
        </Link>

        <nav className="hidden lg:block" aria-label="Primary navigation">
          <ul className="flex items-center gap-1">
            {mainNavigation.map((item) => {
              const active = isActive(location.pathname, item.href, item.children);
              return (
                <li key={item.name} className="relative" onMouseEnter={() => item.children && setDesktopMenu(item.name)} onMouseLeave={() => setDesktopMenu(null)}>
                  <div className={`flex items-center px-3 py-2 text-sm font-semibold transition ${active ? "bg-white text-[#2c3424]" : "text-white hover:bg-white/10"}`}>
                    <Link to={item.href}>{item.name}</Link>
                    {item.children && <ChevronDown className="ml-1 h-4 w-4" />}
                  </div>
                  {item.children && (
                    <div className={`absolute right-0 top-full w-[390px] pt-3 transition ${desktopMenu === item.name ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"}`}>
                      <div className="max-h-[68vh] overflow-y-auto border border-brand-mist bg-white p-3 shadow-[0_24px_70px_rgba(22,58,53,0.18)]">
                        <div className="grid grid-cols-2 gap-1">
                          {item.children.map((child) => (
                            <Link key={child.href} to={child.href} className="block px-3 py-2.5 text-sm leading-5 text-brand-slate transition hover:bg-brand-cream hover:text-brand-oliveDark">{child.name}</Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <button type="button" onClick={() => setMobileOpen((value) => !value)} className="border border-white/20 bg-white/10 p-2.5 text-white lg:hidden" aria-expanded={mobileOpen} aria-label="Toggle navigation">
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="border-t border-brand-mist bg-white px-4 py-4 lg:hidden" aria-label="Mobile navigation">
          <ul className="mx-auto max-w-7xl space-y-2">
            {mainNavigation.map((item) => (
              <li key={item.name} className="overflow-hidden border border-brand-mist">
                <div className="flex items-center">
                  <Link to={item.href} className="flex-1 px-4 py-3 text-sm font-semibold text-brand-ink">{item.name}</Link>
                  {item.children && (
                    <button type="button" onClick={() => setMobileMenus((current) => ({ ...current, [item.name]: !current[item.name] }))} className="px-4 py-3" aria-label={`Toggle ${item.name}`}>
                      <ChevronDown className={`h-4 w-4 transition ${mobileMenus[item.name] ? "rotate-180" : ""}`} />
                    </button>
                  )}
                </div>
                {item.children && mobileMenus[item.name] && (
                  <div className="max-h-72 overflow-y-auto border-t border-brand-mist bg-brand-cream/60 p-2">
                    {item.children.map((child) => <Link key={child.href} to={child.href} className="block px-3 py-2 text-sm text-brand-slate hover:bg-white hover:text-brand-oliveDark">{child.name}</Link>)}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
