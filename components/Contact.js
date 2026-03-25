'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { translations } from '@/lib/i18n';

export default function Contact() {
  const pathname = usePathname();
  const currentLang = pathname.split('/')[1] || 'en';
  const t = translations[currentLang]?.contact || translations.en.contact;
  const dir = translations[currentLang]?.dir || 'ltr';
  
  const [formStatus, setFormStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    try {
      // 替换为您的实际 API 端点
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      if (response.ok) {
        setFormStatus('success');
        e.target.reset();
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-primary text-white" aria-label="Contact section">
      <div className="container-custom">
        <div className={`grid md:grid-cols-2 gap-12 items-center ${dir === 'rtl' ? 'md:grid-flow-dense' : ''}`}>
          {/* Left Content */}
          <div className={dir === 'rtl' ? 'md:order-last' : ''}>
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${dir === 'rtl' ? 'text-right' : ''}`}>{t.title}</h2>
            <p className={`text-primary/90 mb-8 text-lg ${dir === 'rtl' ? 'text-right' : ''}`}>{t.subtitle}</p>

            <div className={`space-y-4 ${dir === 'rtl' ? 'text-right' : ''}`}>
              <div className={`flex items-center gap-4 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:jack@houseplus-ch.com" className="hover:underline break-all">jack@houseplus-ch.com</a>
              </div>
              <div className={`flex items-center gap-4 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="https://wa.me/8615578119543" target="_blank" rel="noopener noreferrer" className="hover:underline">+86 15578119543</a>
              </div>
              <div className={`flex items-center gap-4 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{t.address}</span>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="https://wa.me/8615578119543"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
                aria-label="Contact us on WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                </svg>
                {t.whatsapp}
              </a>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-xl p-8 text-dark shadow-lg">
            <h3 className="text-2xl font-bold mb-6">{currentLang === 'en' ? 'Send Inquiry' : currentLang === 'fr' ? 'Envoyer une demande' : currentLang === 'es' ? 'Enviar consulta' : 'إرسال استفسار'}</h3>
            
            {formStatus === 'success' && (
              <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg">
                {t.form.success}
              </div>
            )}
            {formStatus === 'error' && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
                {currentLang === 'en' ? 'Something went wrong. Please try again.' : 
                 currentLang === 'fr' ? 'Une erreur est survenue. Veuillez réessayer.' : 
                 currentLang === 'es' ? 'Algo salió mal. Por favor, intente de nuevo.' : 
                 'حدث خطأ. يرجى المحاولة مرة أخرى.'}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className={`grid md:grid-cols-2 gap-4 ${dir === 'rtl' ? 'md:grid-flow-dense' : ''}`}>
                <input 
                  type="text" 
                  name="name" 
                  placeholder={t.form.name} 
                  required 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                  aria-label="Your name"
                />
                <input 
                  type="email" 
                  name="email" 
                  placeholder={t.form.email} 
                  required 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                  aria-label="Your email"
                />
              </div>
              <input 
                type="text" 
                name="company" 
                placeholder={t.form.company} 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                aria-label="Company name"
              />
              <textarea 
                name="message" 
                rows="4" 
                placeholder={t.form.message} 
                required 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                aria-label="Your message"
              ></textarea>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full btn-primary text-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <span className="inline-flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : t.form.submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}