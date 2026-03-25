'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { translations } from '@/lib/i18n';
import Image from 'next/image';

const productIcons = [
  <svg key="appliances" className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
  </svg>,
  <svg key="solar" className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>,
  <svg key="electronics" className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>,
];

const productImages = {
  appliances: '/images/products/appliances.jpg',
  solar: '/images/products/solar.jpg',
  electronics: '/images/products/electronics.jpg',
};

export default function Products() {
  const pathname = usePathname();
  const currentLang = pathname.split('/')[1] || 'en';
  const t = translations[currentLang]?.products || translations.en.products;
  const dir = translations[currentLang]?.dir || 'ltr';

  const products = [
    { 
      id: 1, 
      icon: productIcons[0], 
      data: t.appliances, 
      link: `/products/appliances`,
      imageKey: 'appliances',
      badge: 'Best Seller',
    },
    { 
      id: 2, 
      icon: productIcons[1], 
      data: t.solar, 
      link: `/products/solar`,
      imageKey: 'solar',
      badge: 'Eco Friendly',
    },
    { 
      id: 3, 
      icon: productIcons[2], 
      data: t.electronics, 
      link: `/products/electronics`,
      imageKey: 'electronics',
      badge: 'New',
    },
  ];

  return (
    <section className="py-20 bg-light" aria-label="Product categories">
      <div className="container-custom">
        <h2 className={`section-title ${dir === 'rtl' ? 'text-right md:text-center' : ''}`}>{t.title}</h2>
        <p className={`section-subtitle ${dir === 'rtl' ? 'text-right md:text-center' : ''}`}>{t.subtitle}</p>

        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 ${dir === 'rtl' ? 'lg:grid-flow-dense' : ''}`}>
          {products.map((product) => (
            <article key={product.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
              {/* Product Image Placeholder - replace with actual images */}
              <div className="relative h-48 bg-gray-100">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  {product.icon}
                </div>
                {product.badge && (
                  <span className="absolute top-3 right-3 bg-primary text-white text-xs px-2 py-1 rounded-full">
                    {product.badge}
                  </span>
                )}
              </div>
              
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-3 ${dir === 'rtl' ? 'text-right' : ''}`}>{product.data.title}</h3>
                <p className={`text-gray-600 mb-4 ${dir === 'rtl' ? 'text-right' : ''}`}>{product.data.description}</p>
                
                <div className="mb-4">
                  <span className="text-sm font-semibold text-primary block mb-1">
                    {currentLang === 'en' ? 'Key Products:' : currentLang === 'fr' ? 'Produits clés :' : currentLang === 'es' ? 'Productos clave:' : 'المنتجات الرئيسية:'}
                  </span>
                  <p className={`text-sm text-gray-500 ${dir === 'rtl' ? 'text-right' : ''}`}>{product.data.keyProducts}</p>
                </div>
                
                <Link 
                  href={`/${currentLang}${product.link}`} 
                  className={`text-primary font-semibold hover:underline inline-flex items-center group-hover:gap-2 transition-all ${dir === 'rtl' ? 'flex-row-reverse gap-1' : 'gap-1'}`}
                  aria-label={`View ${product.data.title} collection`}
                >
                  {t.cta}
                  <span aria-hidden="true">{dir === 'ltr' ? '→' : '←'}</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
        
        {/* SEO-friendly hidden content for keywords */}
        <div className="sr-only" aria-hidden="true">
          <h3>Household Appliances Manufacturer China</h3>
          <p>House Plus Ltd specializes in manufacturing high-quality household appliances including air fryers, vacuum cleaners, blenders, and electric kettles. We are a leading OEM/ODM manufacturer in China with ISO9001 certification.</p>
          <h3>Solar Products Supplier</h3>
          <p>Our solar solutions include solar panels, hybrid inverters, lithium batteries, and solar lighting systems. We provide complete renewable energy solutions for residential and commercial applications.</p>
          <h3>3C Electronics Factory</h3>
          <p>We manufacture premium 3C electronics including GaN chargers, power banks, wireless earbuds, and smart watches. All products meet CE, RoHS, and FCC standards.</p>
        </div>
      </div>
    </section>
  );
}