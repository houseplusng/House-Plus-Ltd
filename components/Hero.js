'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { translations } from '@/lib/i18n';
import Image from 'next/image';

export default function Hero() {
  const pathname = usePathname();
  const currentLang = pathname.split('/')[1] || 'en';
  const t = translations[currentLang]?.hero || translations.en.hero;
  const dir = translations[currentLang]?.dir || 'ltr';

  const trustBadges = {
    en: ['500+ Projects', '50+ Countries', '15+ Years', '24/7 Support'],
    fr: ['500+ Projets', '50+ Pays', '15+ Ans', 'Support 24/7'],
    es: ['500+ Proyectos', '50+ Países', '15+ Años', 'Soporte 24/7'],
    ar: ['٥٠٠+ مشروع', '٥٠+ دولة', '١٥+ سنة', 'دعم ٢٤/٧'],
  };

  const badges = trustBadges[currentLang] || trustBadges.en;

  return (
    <section className="bg-gradient-to-r from-primary/5 to-secondary/5 py-20 md:py-28">
      <div className="container-custom">
        <div className={`grid md:grid-cols-2 gap-12 items-center ${dir === 'rtl' ? 'md:grid-flow-dense' : ''}`}>
          {/* Left Content */}
          <div className={dir === 'rtl' ? 'md:order-last' : ''}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {t.title}
            </h1>
            <p className="text-xl text-primary font-semibold mb-4">
              House Plus Ltd – {t.subtitle}
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">{t.description}</p>
            
            {/* Trust Badges */}
            <div className={`flex flex-wrap gap-6 mb-8 ${dir === 'rtl' ? 'justify-end' : ''}`}>
              {badges.map((badge) => (
                <div key={badge} className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm font-medium text-gray-700">{badge}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className={`flex flex-wrap gap-4 ${dir === 'rtl' ? 'justify-end' : ''}`}>
              <Link href={`/${currentLang}/contact`} className="btn-primary" aria-label="Get free quote">
                {t.cta1} {dir === 'ltr' ? '→' : '←'}
              </Link>
              <Link href={`/${currentLang}/products`} className="btn-secondary" aria-label="Explore our products">
                {t.cta2} {dir === 'ltr' ? '↓' : '↓'}
              </Link>
            </div>
          </div>

          {/* Right Image - optimized with next/image */}
          <div className={dir === 'rtl' ? 'md:order-first' : ''}>
            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-8 text-center">
              <div className="relative w-full h-64">
                <Image
                  src="/images/factory-preview.jpg"
                  alt="House Plus Ltd Factory - Professional manufacturing facility in Foshan, China"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <p className="mt-4 text-gray-500 font-medium">
                {currentLang === 'en' ? 'House Plus Ltd Factory' : 
                 currentLang === 'fr' ? 'Usine House Plus Ltd' : 
                 currentLang === 'es' ? 'Fábrica House Plus Ltd' : 
                 'مصنع هاوس بلس المحدودة'}
              </p>
              <p className="text-xs text-gray-400 mt-1">20,000㎡ Smart Factory | 200+ Professionals</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}