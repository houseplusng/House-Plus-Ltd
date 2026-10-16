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



    '@id': 'https://www.houseplus.ltd/#organization',



    name: 'HousePlus Ltd',



    legalName: 'HousePlus Ltd',



    brand: {



      '@id': 'https://www.houseplus-ch.com/#brand',



    },



    parentOrganization: {



      '@type': 'Organization',



      '@id': 'https://www.houseplus-ch.com/#organization',



      name: 'HousePlus Group',



      url: 'https://www.houseplus-ch.com',



    },



    foundingDate: '2010',



    founder: {



      '@type': 'Person',
      '@id': 'https://www.houseplus-ch.com/#person-jack-hu',



      name: 'Jack Hu',



    },



    url: siteUrl,



    logo: `${siteUrl}/images/logo.png`,



    description: t.description,



    disambiguatingDescription: 'Affiliated site operating under HousePlus Group; not the group’s main site. The main site is houseplus-ch.com.',



    additionalType: 'https://www.wikidata.org/wiki/Q658255',



    email: 'jack@houseplus.ltd',



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



      'https://wa.me/8615578119543',



    ],



  };







  const localBusinessData = {



    '@context': 'https://schema.org',



    '@type': 'LocalBusiness',



    '@id': 'https://www.houseplus.ltd/#localbusiness',



    name: 'HousePlus Ltd',



    description: t.description,



    image: `${siteUrl}/images/factory.jpg`,



    telephone: '+8615578119543',



    email: 'jack@houseplus.ltd',



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



      '@id': 'https://www.houseplus-ch.com/#brand',



    },



    manufacturer: {



      '@type': 'Organization',



      '@id': 'https://www.houseplus.ltd/#organization',



      name: 'HousePlus Ltd',



    },



    offers: {



      '@type': 'AggregateOffer',



      priceCurrency: 'USD',



      availability: 'https://schema.org/InStock',



    },



  } : null;







  // 联系页面添加 ContactPage 结构化数据



  const isContactPage = pathname?.includes('/contact');



  const contactPageData = isContactPage ? {



    '@context': 'https://schema.org',



    '@type': 'ContactPage',



    name: 'Contact HousePlus Ltd',



    mainEntity: {
      '@type': 'Organization',
      '@id': 'https://www.houseplus.ltd/#organization',
      name: 'HousePlus Ltd',
    },



  } : null;







  // FAQ 页面添加 FAQPage 结构化数据



  const isFaqPage = pathname?.includes('/faq');



  const faqItems = translations[currentLang]?.faq?.items || [];



  const faqPageData = isFaqPage && faqItems.length ? {



    '@context': 'https://schema.org',



    '@type': 'FAQPage',



    mainEntity: faqItems.map((item) => ({



      '@type': 'Question',



      name: item.question,



      acceptedAnswer: {



        '@type': 'Answer',



        text: item.answer,



      },



    })),



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



          ...(contactPageData ? [contactPageData] : []),



          ...(faqPageData ? [faqPageData] : []),



        ]),



      }}



    />



  );



}



