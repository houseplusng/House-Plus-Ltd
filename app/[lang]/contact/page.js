import Contact from '@/components/Contact';
import { translations } from '@/lib/i18n';

export async function generateMetadata({ params }) {
  const { lang } = params;
  const t = translations[lang]?.contact || translations.en.contact;

  return {
    title: `${t.hero.title} | HousePlus Ltd`,
    description: t.hero.subtitle,
    robots: 'index, follow',
  };
}

export default function ContactPage({ params }) {
  const { lang } = params;
  const t = translations[lang]?.contact || translations.en.contact;

  return (
    <>
      <div className="bg-gradient-to-r from-primary/5 to-secondary/5 py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold mb-4">{t.hero.title}</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t.hero.subtitle}
          </p>
        </div>
      </div>
      <Contact />
    </>
  );
}
