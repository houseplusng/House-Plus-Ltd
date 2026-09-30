import { translations } from '@/lib/i18n';

export async function generateMetadata({ params }) {
  const { lang } = params;
  const t = translations[lang]?.faq || translations.en.faq;

  return {
    title: `${t.title} | HousePlus Ltd`,
    description: t.subtitle,
    robots: 'index, follow',
  };
}

export default function FaqPage({ params }) {
  const { lang } = params;
  const t = translations[lang]?.faq || translations.en.faq;
  const dir = translations[lang]?.dir || 'ltr';
  const faqItems = t.items || [];

  return (
    <>
      <div className="bg-gradient-to-r from-primary/5 to-secondary/5 py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold mb-4">{t.title}</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>
      </div>

      <section className="py-20">
        <div className="container-custom max-w-3xl">
          <div className={`space-y-4 ${dir === 'rtl' ? 'text-right' : ''}`}>
            {faqItems.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h2 className="text-lg font-semibold mb-2 text-primary">{item.question}</h2>
                <p className="text-gray-600 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
