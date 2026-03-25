import { locales } from '@/lib/i18n';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.houseplus.ltd';

const staticRoutes = ['', '/products', '/about', '/contact'];

export default function sitemap() {
  const sitemapEntries = [];
  
  for (const lang of locales) {
    for (const route of staticRoutes) {
      const path = route === '' ? `/${lang}` : `/${lang}${route}`;
      sitemapEntries.push({
        url: `${baseUrl}${path}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1.0 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map(locale => [locale, `${baseUrl}/${locale}${route}`])
          ),
        },
      });
    }
  }
  
  return sitemapEntries;
}
