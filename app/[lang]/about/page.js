import About from '@/components/About';
import { translations } from '@/lib/i18n';

export async function generateMetadata({ params }) {
  const { lang } = params;
  const t = translations[lang]?.about || translations.en.about;
  
  return {
    title: `${t.title} | House Plus Ltd`,
    description: t.description,
  };
}

export default function AboutPage() {
  return (
    <>
      <div className="bg-gradient-to-r from-primary/5 to-secondary/5 py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold mb-4">About House Plus Ltd</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Learn about our journey, mission, and commitment to quality manufacturing
          </p>
        </div>
      </div>
      <About />
    </>
  );
}