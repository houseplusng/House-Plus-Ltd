import Link from 'next/link';

export async function generateMetadata({ params }) {
  const { lang } = params;
  return {
    title: `The Ultimate Guide to Smart Home Appliances | House Plus Ltd Blog`,
    description: 'Learn how smart appliances can improve your daily life and reduce energy consumption.',
  };
}

export default function SmartHomePage({ params }) {
  const { lang } = params;
  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  const content = {
    en: {
      title: 'The Ultimate Guide to Smart Home Appliances',
      backToBlog: '← Back to Blog',
      sections: [
        { title: 'What Are Smart Home Appliances?', text: 'Smart home appliances are devices that connect to the internet, allowing remote control, automation, and energy monitoring.' },
        { title: 'Benefits of Smart Appliances', items: ['Energy Efficiency: Smart appliances optimize energy usage, reducing utility bills.', 'Convenience: Control appliances from anywhere using your smartphone.', 'Predictive Maintenance: Receive alerts when maintenance is needed.', 'Integration: Works with voice assistants like Alexa and Google Home.'] },
        { title: 'Popular Smart Appliances', items: ['Smart Air Fryers', 'Smart Vacuum Cleaners', 'Smart Blenders and Food Processors', 'Smart Electric Kettles'] },
        { title: 'House Plus Ltd Smart Appliances', text: 'Our smart appliances combine innovative design with energy efficiency. All products are CE and RoHS certified.' },
      ],
      cta: 'Contact us to learn more about our smart appliance solutions.',
    },
    fr: {
      title: 'Guide ultime des appareils électroménagers intelligents',
      backToBlog: '← Retour au Blog',
      sections: [
        { title: 'Que sont les appareils électroménagers intelligents ?', text: 'Les appareils électroménagers intelligents se connectent à Internet.' },
        { title: 'Avantages des appareils intelligents', items: ['Efficacité énergétique', 'Commodité', 'Maintenance prédictive', 'Intégration avec assistants vocaux'] },
        { title: 'Appareils intelligents populaires', items: ['Friteuses à air intelligentes', 'Aspirateurs intelligents', 'Blenders intelligents', 'Bouilloires électriques intelligentes'] },
        { title: 'Appareils intelligents House Plus Ltd', text: 'Nos appareils allient design innovant et efficacité énergétique.' },
      ],
      cta: 'Contactez-nous pour en savoir plus sur nos solutions.',
    },
    es: {
      title: 'Guía definitiva de electrodomésticos inteligentes',
      backToBlog: '← Volver al Blog',
      sections: [
        { title: '¿Qué son los electrodomésticos inteligentes?', text: 'Son dispositivos que se conectan a internet.' },
        { title: 'Beneficios de los electrodomésticos inteligentes', items: ['Eficiencia energética', 'Comodidad', 'Mantenimiento predictivo', 'Integración con asistentes de voz'] },
        { title: 'Electrodomésticos inteligentes populares', items: ['Freidoras de aire inteligentes', 'Aspiradoras inteligentes', 'Licuadoras inteligentes', 'Hervidores inteligentes'] },
        { title: 'Electrodomésticos inteligentes de House Plus Ltd', text: 'Nuestros electrodomésticos combinan diseño innovador con eficiencia energética.' },
      ],
      cta: 'Contáctenos para conocer más sobre nuestras soluciones.',
    },
    ar: {
      title: 'الدليل الشامل للأجهزة المنزلية الذكية',
      backToBlog: '← العودة إلى المدونة',
      sections: [
        { title: 'ما هي الأجهزة المنزلية الذكية؟', text: 'الأجهزة المنزلية الذكية هي أجهزة تتصل بالإنترنت.' },
        { title: 'فوائد الأجهزة الذكية', items: ['كفاءة الطاقة', 'الراحة', 'الصيانة التنبؤية', 'التكامل مع المساعدات الصوتية'] },
        { title: 'الأجهزة الذكية الشائعة', items: ['مقلايات هوائية ذكية', 'مكانس كهربائية ذكية', 'خلاطات ذكية', 'غلايات كهربائية ذكية'] },
        { title: 'أجهزة هاوس بلس الذكية', text: 'أجهزتنا تجمع بين التصميم المبتكر وكفاءة الطاقة.' },
      ],
      cta: 'اتصل بنا لمعرفة المزيد عن حلولنا.',
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
