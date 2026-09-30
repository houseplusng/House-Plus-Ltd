'use client';

import { usePathname } from 'next/navigation';
import { locales } from '@/lib/i18n';

// Page-aware canonical + hreflang tags.
// Fixes the bug where the [lang] layout canonicalized every subpage to the
// language homepage, which de-indexed all subpages.
export default function SeoTags() {
  const pathname = usePathname();
  if (!pathname) return null;

  const segments = pathname.split('/').filter(Boolean); // e.g. ['en','contact']
  const lang = segments[0] || 'en';
  const sub = segments.slice(1).join('/'); // 'contact' | 'blog/slug' | ''
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.houseplus.ltd';
  const canonical = `${siteUrl}/${lang}${sub ? '/' + sub : ''}`;
  const xDefault = `${siteUrl}/en${sub ? '/' + sub : ''}`;

  return (
    <>
      <link rel="canonical" href={canonical} />
      {locales.map((locale) => (
        <link
          key={locale}
          rel="alternate"
          hrefLang={locale}
          href={`${siteUrl}/${locale}${sub ? '/' + sub : ''}`}
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href={xDefault} />
    </>
  );
}
