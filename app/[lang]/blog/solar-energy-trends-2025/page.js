import Link from 'next/link';

export async function generateMetadata({ params }) {
  const { lang } = params;
  return {
    title: `Solar Energy Trends to Watch in 2025 | House Plus Ltd Blog`,
    description: 'Stay ahead of the curve with these emerging trends in the solar energy industry.',
  };
}

export default function SolarPage({ params }) {
  const { lang } = params;
  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  const content = {
    en: {
      title: 'Solar Energy Trends to Watch in 2025',
      backToBlog: '← Back to Blog',
      sections: [
        { title: 'The Growing Solar Market', text: 'The global solar energy market continues to expand rapidly, driven by falling costs and increasing environmental awareness.' },
        { title: 'Top Solar Trends for 2025', items: ['Bifacial Solar Panels: Capturing sunlight from both sides for increased efficiency.', 'Solar + Storage Integration: Combining solar panels with battery storage for 24/7 power.', 'Building-Integrated Photovoltaics (BIPV): Solar materials that blend seamlessly with architecture.', 'Smart Solar Inverters: Enhanced grid management and monitoring capabilities.'] },
        { title: 'How House Plus Ltd Can Help', text: 'We offer complete solar solutions including panels, inverters, and battery storage systems. Our products are TUV and IEC certified for international markets.' },
      ],
      cta: 'Contact our solar experts to discuss your renewable energy project today.',
    },
    fr: {
      title: 'Tendances de l\'énergie solaire à surveiller en 2025',
      backToBlog: '← Retour au Blog',
      sections: [
        { title: 'Le marché solaire en croissance', text: 'Le marché mondial de l\'énergie solaire continue de s\'expanser.' },
        { title: 'Principales tendances solaires pour 2025', items: ['Panneaux solaires bifaciaux', 'Intégration solaire + stockage', 'Photovoltaïque intégré au bâtiment', 'Onduleurs solaires intelligents'] },
        { title: 'Comment House Plus Ltd peut vous aider', text: 'Nous offrons des solutions solaires complètes, certifiées TUV et IEC.' },
      ],
      cta: 'Contactez nos experts solaires dès aujourd\'hui.',
    },
    es: {
      title: 'Tendencias de energía solar para 2025',
      backToBlog: '← Volver al Blog',
      sections: [
        { title: 'El mercado solar en crecimiento', text: 'El mercado global de energía solar continúa expandiéndose.' },
        { title: 'Principales tendencias solares para 2025', items: ['Paneles solares bifaciales', 'Integración solar + almacenamiento', 'Fotovoltaica integrada en edificios', 'Inversores solares inteligentes'] },
        { title: 'Cómo House Plus Ltd puede ayudar', text: 'Ofrecemos soluciones solares completas, certificadas TUV e IEC.' },
      ],
      cta: 'Comuníquese con nuestros expertos en energía solar.',
    },
    ar: {
      title: 'اتجاهات الطاقة الشمسية لعام 2025',
      backToBlog: '← العودة إلى المدونة',
      sections: [
        { title: 'سوق الطاقة الشمسية المتنامي', text: 'يستمر سوق الطاقة الشمسية العالمي في التوسع.' },
        { title: 'أهم اتجاهات الطاقة الشمسية لعام 2025', items: ['ألواح شمسية ثنائية الوجه', 'دمج الطاقة الشمسية مع التخزين', 'الخلايا الكهروضوئية المدمجة في المباني', 'محولات شمسية ذكية'] },
        { title: 'كيف يمكن لشركة هاوس بلس المساعدة', text: 'نحن نقدم حلولاً شمسية كاملة معتمدة.' },
      ],
      cta: 'اتصل بخبراء الطاقة الشمسية لدينا اليوم.',
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
