import { translations } from '@/lib/i18n';
import Link from 'next/link';

export async function generateMetadata({ params }) {
  const { lang } = params;
  const t = translations[lang]?.products?.electronics || translations.en.products.electronics;
  
  return {
    title: `${t.title} | House Plus Ltd`,
    description: t.description,
  };
}

export default function ElectronicsPage({ params }) {
  const { lang } = params;
  const t = translations[lang]?.products?.electronics || translations.en.products.electronics;
  
  return (
    <>
      <div className="bg-gradient-to-r from-primary/5 to-secondary/5 py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold mb-4">{t.title}</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">{t.description}</p>
        </div>
      </div>
      
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">
                {lang === 'en' ? 'Product Features' : lang === 'fr' ? 'Caractéristiques' : lang === 'es' ? 'Características' : 'مميزات المنتج'}
              </h2>
              <ul className="space-y-3 text-gray-600">
                {t.keyProducts.split(',').map((product, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {product.trim()}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-gray-600">{t.longDescription}</p>
              <Link
                href={`/${lang}/contact`}
                className="inline-block mt-8 btn-primary"
              >
                {lang === 'en' ? 'Get a Quote' : lang === 'fr' ? 'Demander un devis' : lang === 'es' ? 'Solicitar presupuesto' : 'احصل على عرض سعر'}
              </Link>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8 text-center">
              <svg className="w-full h-64 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <p className="mt-4 text-gray-500">{t.title} {lang === 'en' ? 'Showcase' : lang === 'fr' ? 'Présentation' : lang === 'es' ? 'Exhibición' : 'عرض'}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
