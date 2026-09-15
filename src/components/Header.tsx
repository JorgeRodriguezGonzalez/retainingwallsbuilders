import { useEffect, useRef, useState } from "react";
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
  const menuButton = useRef<HTMLButtonElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopMenu, setDesktopMenu] = useState<string | null>(null);
  const [mobileMenus, setMobileMenus] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setMobileOpen(false);
    setDesktopMenu(null);
  }, [location.pathname]);

  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setDesktopMenu(null);
      if (mobileOpen) {
        setMobileOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener("keydown", onEscape);
    return () => document.removeEventListener("keydown", onEscape);
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-ink/95 shadow-[0_10px_30px_rgba(22,58,53,0.08)] backdrop-blur-xl">
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
                <li key={item.name} className="relative" onKeyDown={(event) => { if (event.key === "Escape") { event.currentTarget.querySelector<HTMLButtonElement>("button")?.focus(); setDesktopMenu(null); } }} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setDesktopMenu(null); }} onMouseEnter={() => item.children && setDesktopMenu(item.name)} onMouseLeave={() => setDesktopMenu(null)}>
                  <div className={`flex items-center rounded-full px-3 py-2 text-sm font-semibold transition ${active ? "bg-white text-brand-ink" : "text-white hover:bg-white/10"}`}>
                    <Link to={item.href} aria-current={normalise(location.pathname) === normalise(item.href) ? "page" : undefined}>{item.name}</Link>
                    {item.children && <button type="button" aria-label={`Toggle ${item.name} submenu`} aria-expanded={desktopMenu === item.name} aria-controls={`desktop-${item.name.replace(/\s+/g, "-")}`} onClick={() => setDesktopMenu((current) => current === item.name ? null : item.name)} className="ml-1 rounded-full p-1"><ChevronDown aria-hidden="true" className={`h-4 w-4 transition-transform ${desktopMenu === item.name ? "rotate-180" : ""}`} /></button>}
                  </div>
                  {item.children && (
                    <div id={`desktop-${item.name.replace(/\s+/g, "-")}`} className={`absolute right-0 top-full w-[390px] pt-3 transition ${desktopMenu === item.name ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"}`}>
                      <div className="max-h-[68vh] overflow-y-auto rounded-[1rem] border border-brand-mist bg-white p-3 shadow-[0_24px_70px_rgba(22,58,53,0.18)]">
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

        <button ref={menuButton} type="button" aria-controls="mobile-navigation" onClick={() => setMobileOpen((value) => !value)} className="rounded-full border border-white/20 bg-white/10 p-2.5 text-white lg:hidden" aria-expanded={mobileOpen} aria-label="Toggle navigation">
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <nav id="mobile-navigation" className="max-h-[calc(100dvh-130px)] overflow-y-auto border-t border-brand-mist bg-white px-4 py-4 lg:hidden" aria-label="Mobile navigation">
          <ul className="mx-auto max-w-7xl space-y-2">
            {mainNavigation.map((item) => (
              <li key={item.name} className="overflow-hidden rounded-[0.75rem] border border-brand-mist">
                <div className="flex items-center">
                  <Link to={item.href} className="flex-1 px-4 py-3 text-sm font-semibold text-brand-ink">{item.name}</Link>
                  {item.children && (
                    <button type="button" onClick={() => setMobileMenus((current) => ({ ...current, [item.name]: !current[item.name] }))} className="px-4 py-3" aria-label={`Toggle ${item.name}`} aria-expanded={!!mobileMenus[item.name]}>
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
