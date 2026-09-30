import { locales } from '@/lib/i18n';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.houseplus.ltd';

const staticRoutes = ['', '/products', '/about', '/blog', '/contact', '/faq'];

// Blog post slugs are shared across all locales.
const blogSlugs = [
  'house-plus-ltd-news',
  'why-choose-oem-manufacturer-china',
  'solar-energy-trends-2025',
  'smart-home-appliances-guide',
  'solar-inverter-guide',
  'lithium-battery-manufacturers',
  '5kw-solar-system-cost',
];

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
            locales.map((locale) => [locale, `${baseUrl}/${locale}${route}`])
          ),
        },
      });
    }

    for (const slug of blogSlugs) {
      const path = `/${lang}/blog/${slug}`;
      sitemapEntries.push({
        url: `${baseUrl}${path}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
        alternates: {
          languages: Object.fromEntries(
            locales.map((locale) => [locale, `${baseUrl}/${locale}/blog/${slug}`])
          ),
        },
      });
    }
  }

  return sitemapEntries;
}
