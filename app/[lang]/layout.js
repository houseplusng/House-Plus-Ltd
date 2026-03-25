import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import { locales, translations, getAlternateUrls } from '@/lib/i18n';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata({ params }) {
  const { lang } = params;
  const t = translations[lang]?.seo || translations.en.seo;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.houseplus.ltd';
  
  return {
    title: t.title,
    description: t.description,
    keywords: t.keywords,
    robots: 'index, follow',
    alternates: {
      canonical: `${siteUrl}/${lang}`,
      languages: {
        'en': `${siteUrl}/en`,
        'fr': `${siteUrl}/fr`,
        'es': `${siteUrl}/es`,
        'ar': `${siteUrl}/ar`,
        'x-default': `${siteUrl}/en`,
      },
    },
    openGraph: {
      title: t.title,
      description: t.description,
      url: `${siteUrl}/${lang}`,
      siteName: 'House Plus Ltd',
      locale: lang === 'ar' ? 'ar_AE' : `${lang}_${lang === 'en' ? 'US' : lang === 'fr' ? 'FR' : 'ES'}`,
      type: 'website',
      images: [
        {
          url: `${siteUrl}/images/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: 'House Plus Ltd - Professional Manufacturer',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.title,
      description: t.description,
      images: [`${siteUrl}/images/og-image.jpg`],
    },
    geo: {
      region: 'CN-44',
      placename: 'Foshan, Guangdong',
      position: '23.0215;113.1214',
    },
    icbm: '23.0215,113.1214',
  };
}

export default function RootLayout({ children, params }) {
  const { lang } = params;
  
  if (!locales.includes(lang)) {
    notFound();
  }
  
  const t = translations[lang] || translations.en;
  const dir = t.dir || 'ltr';
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.houseplus.ltd';

  return (
    <html lang={lang} dir={dir}>
      <head>
        {/* hreflang 标签 - 多语言 SEO 关键 */}
        {locales.map((locale) => (
          <link
            key={locale}
            rel="alternate"
            hrefLang={locale}
            href={`${siteUrl}/${locale}`}
          />
        ))}
        <link rel="alternate" hrefLang="x-default" href={`${siteUrl}/en`} />
        
        {/* 地理定位标签 */}
        <meta name="geo.region" content="CN-44" />
        <meta name="geo.placename" content="Foshan, Guangdong" />
        <meta name="geo.position" content="23.0215;113.1214" />
        <meta name="ICBM" content="23.0215, 113.1214" />
        
        {/* 验证标签（可选） */}
        <meta name="google-site-verification" content="your-verification-code" />
      </head>
      <body className={inter.className}>
        <StructuredData lang={lang} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}