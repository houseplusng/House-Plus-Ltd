'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { translations } from '@/lib/i18n';
import Image from 'next/image';

export default function Products() {
  const pathname = usePathname();
  const currentLang = pathname.split('/')[1] || 'en';
  const t = translations[currentLang]?.products || translations.en.products;
  const dir = translations[currentLang]?.dir || 'ltr';

  const products = [
    { 
      id: 1, 
      data: t.appliances, 
      link: `/products/appliances`,
      imageKey: 'appliances',
      badge: 'Best Seller',
    },
    { 
      id: 2, 
      data: t.solar, 
      link: `/products/solar`,
      imageKey: 'solar',
      badge: 'Eco Friendly',
    },
    { 
      id: 3, 
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
              {/* 产品图片区域 */}
              <div className="relative h-48 bg-gray-100">
                <Image
                  src={`/images/products/${product.imageKey}.jpg`}
                  alt={product.data.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.badge && (
                  <span className="absolute top-3 right-3 bg-primary text-white text-xs px-2 py-1 rounded-full z-10">
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
