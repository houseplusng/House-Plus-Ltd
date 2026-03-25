import Link from 'next/link';

export async function generateMetadata({ params }) {
  const { lang } = params;
  return {
    title: `Why Choose an OEM Manufacturer in China? | House Plus Ltd Blog`,
    description: 'Discover the key benefits of partnering with Chinese OEM manufacturers for your business.',
  };
}

export default function OemPage({ params }) {
  const { lang } = params;
  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  const content = {
    en: {
      title: 'Why Choose an OEM Manufacturer in China?',
      backToBlog: '← Back to Blog',
      sections: [
        { title: 'The Rise of Chinese Manufacturing', text: 'China has established itself as the world\'s manufacturing hub, offering unparalleled advantages for businesses looking to produce high-quality products at competitive prices.' },
        { title: 'Key Benefits of OEM Manufacturing in China', items: ['Cost-Effective Production: Lower labor and material costs translate to better margins.', 'Advanced Manufacturing Capabilities: Access to state-of-the-art facilities and equipment.', 'Skilled Workforce: Experienced engineers and production specialists.', 'Scalability: Ability to handle both small batches and mass production.'] },
        { title: 'Why House Plus Ltd?', text: 'With 15+ years of experience, ISO9001 certification, and a 20,000㎡ smart factory, House Plus Ltd delivers reliability and quality you can trust.' },
      ],
      cta: 'Contact our team to discuss your OEM manufacturing needs and get a free quote within 24 hours.',
    },
    fr: {
      title: 'Pourquoi choisir un fabricant OEM en Chine ?',
      backToBlog: '← Retour au Blog',
      sections: [
        { title: 'L\'essor de la fabrication chinoise', text: 'La Chine s\'est imposée comme le centre de fabrication mondial, offrant des avantages inégalés.' },
        { title: 'Avantages clés de la fabrication OEM en Chine', items: ['Production rentable', 'Capacités de fabrication avancées', 'Main-d\'œuvre qualifiée', 'Évolutivité'] },
        { title: 'Pourquoi House Plus Ltd ?', text: 'Avec plus de 15 ans d\'expérience, la certification ISO9001 et une usine intelligente de 20 000㎡, House Plus Ltd offre fiabilité et qualité.' },
      ],
      cta: 'Contactez notre équipe pour discuter de vos besoins de fabrication OEM.',
    },
    es: {
      title: '¿Por qué elegir un fabricante OEM en China?',
      backToBlog: '← Volver al Blog',
      sections: [
        { title: 'El auge de la fabricación china', text: 'China se ha establecido como el centro de fabricación mundial.' },
        { title: 'Beneficios clave de la fabricación OEM en China', items: ['Producción rentable', 'Capacidades de fabricación avanzadas', 'Mano de obra calificada', 'Escalabilidad'] },
        { title: '¿Por qué House Plus Ltd?', text: 'Con más de 15 años de experiencia, certificación ISO9001 y una fábrica inteligente de 20,000㎡, House Plus Ltd ofrece confiabilidad y calidad.' },
      ],
      cta: 'Comuníquese con nuestro equipo para discutir sus necesidades de fabricación OEM.',
    },
    ar: {
      title: 'لماذا تختار مصنع OEM في الصين؟',
      backToBlog: '← العودة إلى المدونة',
      sections: [
        { title: 'صعود التصنيع الصيني', text: 'لقد أثبتت الصين نفسها كمركز تصنيع عالمي.' },
        { title: 'الفوائد الرئيسية للتصنيع في الصين', items: ['إنتاج فعال من حيث التكلفة', 'قدرات تصنيع متقدمة', 'قوى عاملة ماهرة', 'قابلية التوسع'] },
        { title: 'لماذا هاوس بلس المحدودة؟', text: 'مع أكثر من 15 عامًا من الخبرة وشهادة ISO9001، تقدم هاوس بلس المحدودة الموثوقية والجودة.' },
      ],
      cta: 'اتصل بفريقنا لمناقشة احتياجات التصنيع الخاصة بك.',
    },
  };

  const c = content[lang] || content.en;

  return (
    <>
      <div className="bg-gradient-to-r from-primary/5 to-secondary/5 py-16">
        <div className="container-custom">
          <Link href={`/${lang}/blog`} className="text-primary hover:underline inline-flex items-center gap-1 mb-6">{c.backToBlog}</Link>
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${dir === 'rtl' ? 'text-right' : ''}`}>{c.title}</h1>
        </div>
      </div>
      
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {c.sections.map((section, idx) => (
              <div key={idx} className="mb-8">
                <h2 className={`text-2xl font-bold mb-4 ${dir === 'rtl' ? 'text-right' : ''}`}>{section.title}</h2>
                {section.text && <p className={`text-gray-600 mb-4 leading-relaxed ${dir === 'rtl' ? 'text-right' : ''}`}>{section.text}</p>}
                {section.items && (
                  <ul className={`list-disc pl-6 text-gray-600 ${dir === 'rtl' ? 'text-right pr-6' : ''}`}>
                    {section.items.map((item, i) => <li key={i} className="mb-2">{item}</li>)}
                  </ul>
                )}
              </div>
            ))}
            <div className="bg-primary/10 rounded-xl p-6 text-center mt-8">
              <p className="mb-4">{c.cta}</p>
              <Link href={`/${lang}/contact`} className="btn-primary inline-block">Contact Us →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
