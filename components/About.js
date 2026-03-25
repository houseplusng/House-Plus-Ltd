'use client';

import { usePathname } from 'next/navigation';
import { translations } from '@/lib/i18n';
import Image from 'next/image';

export default function About() {
  const pathname = usePathname();
  const currentLang = pathname.split('/')[1] || 'en';
  const t = translations[currentLang]?.about || translations.en.about;
  const dir = translations[currentLang]?.dir || 'ltr';

  return (
    <section className="py-20" aria-label="About House Plus Ltd">
      <div className="container-custom">
        <div className={`grid md:grid-cols-2 gap-12 items-center ${dir === 'rtl' ? 'md:grid-flow-dense' : ''}`}>
          {/* Left Content */}
          <div className={dir === 'rtl' ? 'md:order-last' : ''}>
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${dir === 'rtl' ? 'text-right' : ''}`}>
              {t.title}
            </h2>
            <p className={`text-gray-600 mb-6 leading-relaxed ${dir === 'rtl' ? 'text-right' : ''}`}>
              {t.description}
            </p>

            {/* Features Grid */}
            <div className={`grid grid-cols-2 gap-4 mb-6 ${dir === 'rtl' ? 'text-right' : ''}`}>
              {t.features.map((item) => (
                <div key={item} className={`flex items-center gap-2 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                  <svg className="w-5 h-5 text-success flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* Statistics */}
            <div className={`grid grid-cols-4 gap-4 pt-6 border-t ${dir === 'rtl' ? 'text-right' : ''}`}>
              {t.stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className={dir === 'rtl' ? 'md:order-first' : ''}>
            <div className="bg-gray-100 rounded-2xl p-8 text-center relative overflow-hidden">
              <div className="relative w-full h-64">
                <Image
                  src="/images/factory-interior.jpg"
                  alt="House Plus Ltd factory interior with advanced manufacturing equipment"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent rounded-2xl" />
              <p className="absolute bottom-4 left-0 right-0 text-white text-sm font-medium">
                {currentLang === 'en' ? 'ISO 9001:2015 Certified Facility' : 
                 currentLang === 'fr' ? 'Installation certifiée ISO 9001:2015' : 
                 currentLang === 'es' ? 'Instalación certificada ISO 9001:2015' : 
                 'منشأة معتمدة ISO 9001:2015'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}