import { createContext, useContext, useEffect, useState, useRef, type ReactNode } from 'react';
import { business } from '@/data/business';

type TrafficSource = 'googleAds' | 'socialAds' | 'seo';

interface PhoneConfig {
  display: string;
  href: string;
}

const defaultPhone: PhoneConfig = {
  display: business.contact.phoneDisplay,
  href: business.contact.phoneHref,
};

const phoneMap: Record<TrafficSource, PhoneConfig> = {
  googleAds: defaultPhone,
  socialAds: defaultPhone,
  seo: defaultPhone,
};

const PARAMS_TO_KEEP = ['gclid','gbraid','wbraid','gad_source','utm_source','utm_medium','utm_campaign','utm_term','utm_content'] as const;
const COOKIE_NAME = 'hunter_valley_roofing_tracking';
const COOKIE_MAX_AGE = 60 * 60 * 24 * 5;

type TrackingParams = Partial<Record<(typeof PARAMS_TO_KEEP)[number], string>>;

function setCookie(name: string, value: string) {
  document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax`;
}

function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  const m = document.cookie.match(new RegExp('(?:^|; )' + name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '=([^;]*)'));
  return m ? decodeURIComponent(m[1]) : null;
}

function getParamsFromUrl(): TrackingParams {
  if (typeof window === 'undefined') return {};
  const search = window.location.search;
  if (!search) return {};
  const params: TrackingParams = {};
  const searchParams = new URLSearchParams(search);
  for (const name of PARAMS_TO_KEEP) {
    const value = searchParams.get(name);
    if (value) params[name] = value;
  }
  return params;
}

export function getSavedParams(): TrackingParams {
  if (typeof window === 'undefined') return {};
  try {
    const fromSession = sessionStorage.getItem(COOKIE_NAME);
    if (fromSession) {
      const parsed = JSON.parse(fromSession) as TrackingParams;
      if (parsed && typeof parsed === 'object') return parsed;
    }
    const fromCookie = getCookie(COOKIE_NAME);
    if (fromCookie) {
      const parsed = JSON.parse(fromCookie) as TrackingParams;
      if (parsed && typeof parsed === 'object') return parsed;
    }
  } catch {
    // ignore parse errors
  }
  return {};
}

function persistParams() {
  const params = getParamsFromUrl();
  if (Object.keys(params).length > 0) {
    const serialized = JSON.stringify(params);
    try {
      sessionStorage.setItem(COOKIE_NAME, serialized);
      setCookie(COOKIE_NAME, serialized);
    } catch {
      // storage full or unavailable
    }
  }
}

function detectSource(): TrafficSource {
  const saved = getSavedParams();
  const urlParams = new URLSearchParams(window.location.search);

  if (urlParams.has('gclid') || urlParams.has('gbraid') || urlParams.has('wbraid') ||
      saved.gclid || saved.gbraid || saved.wbraid) {
    return 'googleAds';
  }

  const utmSource = urlParams.get('utm_source') || saved.utm_source || '';
  const lower = utmSource.toLowerCase();
  if (lower.includes('facebook') || lower.includes('instagram') || lower.includes('fb') || lower.includes('ig')) {
    return 'socialAds';
  }

  return 'seo';
}

interface TrackingContextValue {
  source: TrafficSource;
  phone: PhoneConfig;
  inited: boolean;
}

const TrackingContext = createContext<TrackingContextValue>({
  source: 'seo',
  phone: phoneMap.seo,
  inited: false,
});

export const useTracking = () => useContext(TrackingContext);

export const TrackingProvider = ({ children }: { children: ReactNode }) => {
  const [source, setSource] = useState<TrafficSource>('seo');
  const [inited, setInited] = useState(false);
  const initedRef = useRef(false);

  useEffect(() => {
    persistParams();
    setSource(detectSource());
    setInited(true);
    initedRef.current = true;
  }, []);

  useEffect(() => {
    const injectParamsIntoLinks = () => {
      const params = getSavedParams();
      const entries = Object.entries(params).filter(([, v]) => v != null && v !== '');
      if (entries.length === 0) return;

      const anchors = document.querySelectorAll<HTMLAnchorElement>(
        'a[href^="/"], a[href^="' + window.location.origin + '"]'
      );
      anchors.forEach((a) => {
        const href = a.getAttribute('href');
        if (!href) return;
        const trimmed = href.trim();
        if (
          trimmed === '#' ||
          trimmed.toLowerCase().startsWith('javascript:') ||
          trimmed.toLowerCase().startsWith('mailto:') ||
          trimmed.toLowerCase().startsWith('tel:')
        ) return;

        try {
          const url = href.startsWith('http') ? new URL(href) : new URL(href, window.location.origin);
          if (url.origin !== window.location.origin) return;
          let changed = false;
          for (const [key, value] of entries) {
            if (!url.searchParams.has(key)) {
              url.searchParams.set(key, value);
              changed = true;
            }
          }
          if (changed) {
            a.setAttribute('href', `${url.pathname}?${url.searchParams.toString()}${url.hash || ''}`);
          }
        } catch {
          // ignore invalid URLs
        }
      });
    };

    let debounceId: ReturnType<typeof setTimeout> | null = null;
    const debouncedRun = () => {
      if (debounceId) clearTimeout(debounceId);
      debounceId = setTimeout(() => {
        injectParamsIntoLinks();
        debounceId = null;
      }, 300);
    };

    injectParamsIntoLinks();
    const observer = new MutationObserver(debouncedRun);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      if (debounceId) clearTimeout(debounceId);
    };
  }, []);

  const value: TrackingContextValue = {
    source,
    phone: phoneMap[source],
    inited,
  };

  return (
    <TrackingContext.Provider value={value}>
      {children}
    </TrackingContext.Provider>
  );
};

export { phoneMap };
export type { TrafficSource, PhoneConfig, TrackingParams };