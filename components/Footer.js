'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { translations } from '@/lib/i18n';

export default function Footer() {
  const pathname = usePathname();
  const currentLang = pathname.split('/')[1] || 'en';
  const t = translations[currentLang]?.footer || translations.en.footer;
  const dir = translations[currentLang]?.dir || 'ltr';

  return (
    <footer className="bg-dark text-white pt-16 pb-8" aria-label="Site footer">
      <div className="container-custom">
        <div className={`grid md:grid-cols-4 gap-8 mb-12 ${dir === 'rtl' ? 'md:grid-flow-dense' : ''}`}>
          {/* Brand */}
          <div className={dir === 'rtl' ? 'text-right' : ''}>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-primary">House</span>
              <span className="text-secondary"> Plus</span>
              <span className="text-xs ml-1 text-gray-400 align-top">Ltd</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">{t.tagline}</p>
            <p className="text-gray-500 text-xs mt-3">{t.certifications}</p>
          </div>

          {/* Quick Links */}
          <div className={dir === 'rtl' ? 'text-right' : ''}>
            <h4 className="font-semibold mb-4">{t.quickLinks}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href={`/${currentLang}`} className="hover:text-primary transition">{translations[currentLang]?.nav.home}</Link></li>
              <li><Link href={`/${currentLang}/products`} className="hover:text-primary transition">{translations[currentLang]?.nav.products}</Link></li>
              <li><Link href={`/${currentLang}/about`} className="hover:text-primary transition">{translations[currentLang]?.nav.about}</Link></li>
              <li><Link href={`/${currentLang}/contact`} className="hover:text-primary transition">{translations[currentLang]?.nav.contact}</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div className={dir === 'rtl' ? 'text-right' : ''}>
            <h4 className="font-semibold mb-4">{t.products}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href={`/${currentLang}/products#appliances`} className="hover:text-primary transition">Household Appliances</Link></li>
              <li><Link href={`/${currentLang}/products#solar`} className="hover:text-primary transition">Solar Solutions</Link></li>
              <li><Link href={`/${currentLang}/products#electronics`} className="hover:text-primary transition">3C Electronics</Link></li>
              <li><Link href={`/${currentLang}/contact`} className="hover:text-primary transition">OEM/ODM Services</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className={dir === 'rtl' ? 'text-right' : ''}>
            <h4 className="font-semibold mb-4">{t.contactInfo}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:jack@houseplus-ch.com" className="hover:text-primary transition">jack@houseplus-ch.com</a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="https://wa.me/8615578119543" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">+86 15578119543</a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Foshan, Guangdong, China</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={`border-t border-gray-800 pt-8 text-center text-sm text-gray-400 ${dir === 'rtl' ? 'text-right md:text-center' : ''}`}>
          <p>&copy; {new Date().getFullYear()} House Plus Ltd. {t.rights}</p>
          <p className="text-xs text-gray-500 mt-2">ISO 9001:2015 Certified | CE | RoHS | FCC</p>
        </div>
      </div>
    </footer>
  );
}