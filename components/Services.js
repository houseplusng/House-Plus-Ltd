'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { translations } from '@/lib/i18n';

export default function Services() {
  const pathname = usePathname();
  const currentLang = pathname.split('/')[1] || 'en';
  const t = translations[currentLang]?.services || translations.en.services;
  const dir = translations[currentLang]?.dir || 'ltr';

  return (
    <section className="py-20 bg-light" aria-label="OEM/ODM Services">
      <div className="container-custom">
        <h2 className={`section-title ${dir === 'rtl' ? 'text-right md:text-center' : ''}`}>
          {t.title}
        </h2>
        <p className={`section-subtitle ${dir === 'rtl' ? 'text-right md:text-center' : ''}`}>
          {t.subtitle}
        </p>

        {/* Process Steps */}
        <div className="relative mb-16">
          <div className="grid md:grid-cols-4 gap-6">
            {t.steps.map((step, index) => (
              <div key={step.number} className="text-center relative">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
                {index < t.steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-gray-200 -z-10" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Why Partner */}
        <div className="bg-white rounded-2xl p-8 shadow-soft">
          <h3 className={`text-2xl font-bold text-center mb-8 ${dir === 'rtl' ? 'text-right md:text-center' : ''}`}>
            {currentLang === 'en' ? 'Why Partner With Us' : 
             currentLang === 'fr' ? 'Pourquoi s\'associer à nous' : 
             currentLang === 'es' ? 'Por qué asociarse con nosotros' : 
             'لماذا تختار الشراكة معنا'}
          </h3>
          <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 ${dir === 'rtl' ? 'text-right' : ''}`}>
            {t.advantages.map((adv) => (
              <div key={adv} className={`flex items-start gap-3 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                <svg className="w-6 h-6 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-sm text-gray-700">{adv}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link 
              href={`/${currentLang}/contact`} 
              className="btn-primary inline-flex items-center gap-2"
              aria-label="Start your custom manufacturing project"
            >
              {t.cta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}