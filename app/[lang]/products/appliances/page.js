import { translations } from '@/lib/i18n';
import Link from 'next/link';
import Image from 'next/image';

export async function generateMetadata({ params }) {
  const { lang } = params;
  const t = translations[lang]?.products?.appliances || translations.en.products.appliances;
  
  return {
    title: `${t.title} | House Plus Ltd`,
    description: t.description,
  };
}

export default function AppliancesPage({ params }) {
  const { lang } = params;
  const t = translations[lang]?.products?.appliances || translations.en.products.appliances;
  const nav = translations[lang]?.nav || translations.en.nav;
  const dir = lang === 'ar' ? 'rtl' : 'ltr';
  
  return (
    <>
      <div className="bg-gradient-to-r from-primary/5 to-secondary/5 py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold mb-4">{t.title}</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">{t.description}</p>
        </div>
      </div>
      
      {/* 产品主图 */}
      <div className="container-custom py-8">
        <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/images/products/appliances.jpg"
            alt={t.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
      
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className={`text-2xl font-bold mb-4 ${dir === 'rtl' ? 'text-right' : ''}`}>
                {lang === 'en' ? 'Product Features' : lang === 'fr' ? 'Caractéristiques' : lang === 'es' ? 'Características' : 'مميزات المنتج'}
              </h2>
              <ul className={`space-y-3 text-gray-600 ${dir === 'rtl' ? 'text-right' : ''}`}>
                {t.keyProducts.split(',').map((product, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {product.trim()}
                  </li>
                ))}
              </ul>
              <p className={`mt-6 text-gray-600 leading-relaxed ${dir === 'rtl' ? 'text-right' : ''}`}>
                {t.longDescription}
              </p>
              <Link
                href={`/${lang}/contact`}
                className="inline-block mt-8 btn-primary"
              >
                {lang === 'en' ? 'Get a Quote' : lang === 'fr' ? 'Demander un devis' : lang === 'es' ? 'Solicitar presupuesto' : 'احصل على عرض سعر'}
              </Link>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8 text-center">
              <div className="relative w-full h-64">
                <Image
                  src="/images/products/appliances.jpg"
                  alt={t.title}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="mt-4 text-gray-500">{t.title} {lang === 'en' ? 'Showcase' : lang === 'fr' ? 'Présentation' : lang === 'es' ? 'Exhibición' : 'عرض'}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
