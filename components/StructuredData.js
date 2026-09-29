'use client';

import { usePathname } from 'next/navigation';
import { translations } from '@/lib/i18n';

export default function StructuredData({ lang }) {
  const pathname = usePathname();
  const currentLang = lang || pathname?.split('/')[1] || 'en';
  const t = translations[currentLang]?.seo || translations.en.seo;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.houseplus.ltd';
  
  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'HousePlus Ltd',
    alternateName: 'HousePlus',
    legalName: 'HousePlus Ltd',
    brand: {
      '@type': 'Brand',
      name: 'HousePlus',
    },
    parentOrganization: {
      '@type': 'Organization',
      name: 'HousePlus Group',
      url: 'https://www.houseplus-ch.com',
    },
    foundingDate: '2010',
    founder: {
      '@type': 'Person',
      name: 'Jack Hu',
    },
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      minValue: 500,
    },
    url: siteUrl,
    logo: `${siteUrl}/images/logo.png`,
    description: t.description,
    email: 'jack@houseplus-ch.com',
    telephone: '+8615578119543',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'No. 29 Kangsheng Road, Huangpu Town',
      addressLocality: 'Zhongshan',
      addressRegion: 'Guangdong',
      addressCountry: 'CN',
      postalCode: '528429',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+8615578119543',
      contactType: 'customer service',
      availableLanguage: ['English', 'French', 'Spanish', 'Arabic'],
    },
    sameAs: [
      'https://www.houseplus-ch.com',
      'https://wa.me/8615578119543',
      'https://www.facebook.com/houseplusgroup',
      'https://www.linkedin.com/company/houseplus-group',
      'https://www.youtube.com/@houseplusgroup',
    ],
  };
  
  const localBusinessData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'HousePlus Ltd',
    description: t.description,
    image: `${siteUrl}/images/factory.jpg`,
    telephone: '+8615578119543',
    email: 'jack@houseplus-ch.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'No. 29 Kangsheng Road, Huangpu Town',
      addressLocality: 'Zhongshan',
      addressRegion: 'Guangdong',
      addressCountry: 'CN',
      postalCode: '528429',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '22.5170',
      longitude: '113.3925',
    },
    priceRange: '$$',
    openingHours: 'Mo-Fr 08:00-18:00',
  };
  
  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: t.breadcrumbHome || 'Home',
        item: `${siteUrl}/${currentLang}`,
      },
    ],
  };
  
  // 如果是产品页面，添加产品结构化数据
  const isProductPage = pathname?.includes('/products');
  const productData = isProductPage ? {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Household Appliances & Solar Products',
    description: t.description,
    brand: {
      '@type': 'Brand',
      name: 'HousePlus',
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'HousePlus',
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
  } : null;
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([
          organizationData,
          localBusinessData,
          breadcrumbData,
          ...(productData ? [productData] : []),
        ]),
      }}
    />
  );
}