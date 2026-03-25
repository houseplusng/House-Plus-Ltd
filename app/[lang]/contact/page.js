import Contact from '@/components/Contact';
import { translations } from '@/lib/i18n';

export async function generateMetadata({ params }) {
  const { lang } = params;
  const t = translations[lang]?.contact || translations.en.contact;
  
  return {
    title: `Contact Us | House Plus Ltd`,
    description: `Get in touch with House Plus Ltd for inquiries, quotes, or partnership opportunities. ${t.email} | ${t.phone}`,
  };
}

export default function ContactPage() {
  return (
    <>
      <div className="bg-gradient-to-r from-primary/5 to-secondary/5 py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get in touch with our team for inquiries, quotes, or partnership opportunities
          </p>
        </div>
      </div>
      <Contact />
    </>
  );
}