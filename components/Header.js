'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { locales, translations } from '@/lib/i18n';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const pathname = usePathname();
  const currentLang = pathname.split('/')[1] || 'en';
  const t = translations[currentLang]?.nav || translations.en.nav;
  const dir = translations[currentLang]?.dir || 'ltr';
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 关闭语言菜单（点击外部）
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isLangOpen && !e.target.closest('.lang-switcher')) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isLangOpen]);

  const switchLanguage = (lang) => {
    const segments = pathname.split('/').filter(Boolean);
    const newPathname = `/${lang}${segments.length > 1 ? '/' + segments.slice(1).join('/') : ''}`;
    window.location.href = newPathname;
  };

  const getCtaText = () => {
    const ctaMap = {
      en: 'Get Quote',
      fr: 'Devis',
      es: 'Presupuesto',
      ar: 'احصل على عرض',
    };
    return ctaMap[currentLang] || 'Get Quote';
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom">
        <div className={`flex justify-between items-center h-20 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
          {/* Logo with semantic HTML */}
          <Link 
            href={`/${currentLang}`} 
            className="text-2xl font-bold hover:opacity-80 transition-opacity"
            aria-label="House Plus Ltd - Home"
          >
            <span className="text-primary">House</span>
            <span className="text-secondary"> Plus</span>
            <span className="text-xs ml-1 text-gray-500 align-top" aria-label="Limited">Ltd</span>
          </Link>

          {/* Desktop Navigation - semantic nav */}
          <nav className="hidden md:block" aria-label="Main navigation">
            <ul className={`flex space-x-8 ${dir === 'rtl' ? 'space-x-reverse' : ''}`}>
              <li><Link href={`/${currentLang}`} className="hover:text-primary transition">{t.home}</Link></li>
              <li><Link href={`/${currentLang}/products`} className="hover:text-primary transition">{t.products}</Link></li>
              <li><Link href={`/${currentLang}/about`} className="hover:text-primary transition">{t.about}</Link></li>
              <li><Link href={`/${currentLang}/contact`} className="hover:text-primary transition">{t.contact}</Link></li>
            </ul>
          </nav>

          {/* Right Side */}
          <div className={`flex items-center gap-4 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
            {/* Language Switcher */}
            <div className="relative lang-switcher">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-gray-100 transition"
                aria-label="Switch language"
                aria-expanded={isLangOpen}
              >
                <span className="uppercase text-sm font-medium">{currentLang}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isLangOpen && (
                <div className={`absolute ${dir === 'rtl' ? 'right-0' : 'left-0'} mt-2 w-24 bg-white rounded-lg shadow-lg border py-1 z-50`}>
                  {locales.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => switchLanguage(lang)}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition ${currentLang === lang ? 'bg-gray-50 text-primary font-medium' : ''} ${dir === 'rtl' ? 'text-right' : ''}`}
                      aria-label={`Switch to ${lang} language`}
                    >
                      {lang.toUpperCase()}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Desktop CTA */}
            <Link 
              href={`/${currentLang}/contact`} 
              className="hidden md:block btn-primary text-sm px-5 py-2"
              aria-label="Get a free quote"
            >
              {getCtaText()}
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t" aria-label="Mobile navigation">
            <ul className={`flex flex-col space-y-3 ${dir === 'rtl' ? 'items-end' : ''}`}>
              <li><Link href={`/${currentLang}`} className="block py-2 hover:text-primary transition" onClick={() => setIsMenuOpen(false)}>{t.home}</Link></li>
              <li><Link href={`/${currentLang}/products`} className="block py-2 hover:text-primary transition" onClick={() => setIsMenuOpen(false)}>{t.products}</Link></li>
              <li><Link href={`/${currentLang}/about`} className="block py-2 hover:text-primary transition" onClick={() => setIsMenuOpen(false)}>{t.about}</Link></li>
              <li><Link href={`/${currentLang}/contact`} className="block py-2 hover:text-primary transition" onClick={() => setIsMenuOpen(false)}>{t.contact}</Link></li>
              <li><Link href={`/${currentLang}/contact`} className="btn-primary text-center block" onClick={() => setIsMenuOpen(false)}>{getCtaText()}</Link></li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}