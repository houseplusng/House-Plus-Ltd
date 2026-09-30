import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import SeoTags from '@/components/SeoTags';
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
      placename: 'Zhongshan, Guangdong',
      position: '22.5170;113.3925',
    },
    icbm: '22.5170,113.3925',
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
        {/* Page-aware canonical + hreflang (replaces static tags that pointed
            every subpage to the language homepage) */}
        <SeoTags />

        {/* 地理定位标签 */}
        <meta name="geo.region" content="CN-44" />
        <meta name="geo.placename" content="Zhongshan, Guangdong" />
        <meta name="geo.position" content="22.5170;113.3925" />
        <meta name="ICBM" content="22.5170,113.3925" />

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
