export default function robots() {
  // Host directive intentionally omitted: it is Yandex-only, deprecated, and the
  // main site (houseplus-ch.com) already removed it — keeping both sites consistent.
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.houseplus.ltd';
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
