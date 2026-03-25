'use client';

import { usePathname } from 'next/navigation';
import { translations } from '@/lib/i18n';

export default function Testimonials() {
  const pathname = usePathname();
  const currentLang = pathname.split('/')[1] || 'en';
  const t = translations[currentLang]?.testimonials || translations.en.testimonials;
  const dir = translations[currentLang]?.dir || 'ltr';

  return (
    <section className="py-20" aria-label="Client testimonials">
      <div className="container-custom">
        <h2 className={`section-title ${dir === 'rtl' ? 'text-right md:text-center' : ''}`}>
          {t.title}
        </h2>
        <p className={`section-subtitle ${dir === 'rtl' ? 'text-right md:text-center' : ''}`}>
          {t.subtitle}
        </p>

        <div className={`grid md:grid-cols-3 gap-8 ${dir === 'rtl' ? 'lg:grid-flow-dense' : ''}`}>
          {t.items.map((testimonial, index) => (
            <div key={index} className="bg-light rounded-xl p-6 shadow-soft hover:shadow-medium transition-shadow">
              {/* Quote Icon */}
              <svg className="w-8 h-8 text-primary/30 mb-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              
              {/* Quote Text */}
              <p className="text-gray-700 mb-4 italic leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              {/* Author */}
              <div className="border-t pt-4 mt-2">
                <p className="font-bold text-primary">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.title}</p>
                {testimonial.country && (
                  <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {testimonial.country}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}