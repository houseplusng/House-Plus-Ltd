import Link from 'next/link';

export async function generateMetadata({ params }) {
  const { lang } = params;
  
  const titles = {
    en: 'House Plus Ltd - Your Trusted Manufacturing Partner',
    fr: 'House Plus Ltd - Votre Partenaire de Confiance',
    es: 'House Plus Ltd - Su Socio de Confianza',
    ar: 'هاوس بلس المحدودة - شريكك الموثوق في التصنيع',
  };
  
  return {
    title: `${titles[lang] || titles.en} | House Plus Ltd Blog`,
    description: 'Discover why House Plus Ltd is the preferred OEM/ODM partner for global brands.',
  };
}

export default function HousePlusNewsPage({ params }) {
  const { lang } = params;
  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  const content = {
    en: {
      title: 'House Plus Ltd - Your Trusted Manufacturing Partner',
      intro: 'Who We Are',
      introText: 'House Plus Ltd is a premier manufacturer specializing in household appliances, solar products, and 3C electronics. With over 15 years of industry experience, we have established ourselves as a trusted OEM/ODM partner for brands across the globe.',
      quality: 'Our Commitment to Quality',
      qualityText: 'Quality is at the heart of everything we do. Our 20,000㎡ smart factory is equipped with state-of-the-art manufacturing equipment and staffed by over 200 skilled professionals. Every product undergoes rigorous testing to ensure it meets international standards including ISO9001, CE, RoHS, and FCC certifications.',
      products: 'Our Product Lines',
      productList: [
        'Smart Home Appliances: Air fryers, vacuum cleaners, blenders, electric kettles, and food processors.',
        'Solar Power Systems: Solar panels, hybrid inverters, lithium batteries, solar lights, and solar water pumps.',
        '3C Electronics: GaN chargers, power banks, wireless earbuds, smart watches, and USB-C hubs.',
      ],
      whyChoose: 'Why Partner with House Plus Ltd?',
      advantages: [
        '15+ Years of Experience: Proven track record in manufacturing excellence.',
        '50+ Countries Served: Trusted by partners worldwide.',
        '98% On-time Delivery: Reliable supply chain management.',
        'Custom OEM/ODM Services: Tailored solutions for your brand.',
        'Competitive Pricing: Factory direct pricing with no middlemen.',
      ],
      connect: 'Connect With Us',
      email: 'jack@houseplus-ch.com',
      phone: '+86 15578119543',
      cta: 'Contact us today for a free consultation and quote within 24 hours!',
      backToBlog: '← Back to Blog',
    },
    fr: {
      title: 'House Plus Ltd - Votre Partenaire de Confiance',
      intro: 'Qui sommes-nous',
      introText: 'House Plus Ltd est un fabricant de premier plan spécialisé dans les appareils électroménagers, les produits solaires et l\'électronique 3C. Avec plus de 15 ans d\'expérience, nous sommes un partenaire OEM/ODM de confiance pour les marques du monde entier.',
      quality: 'Notre engagement pour la qualité',
      qualityText: 'La qualité est au cœur de tout ce que nous faisons. Notre usine intelligente de 20 000㎡ est équipée d\'équipements de pointe et emploie plus de 200 professionnels qualifiés.',
      products: 'Nos gammes de produits',
      productList: [
        'Appareils électroménagers intelligents : Friteuses à air, aspirateurs, blenders, bouilloires électriques.',
        'Systèmes solaires : Panneaux solaires, onduleurs hybrides, batteries lithium, lampes solaires.',
        'Accessoires 3C : Chargeurs GaN, batteries externes, écouteurs sans fil, montres intelligentes.',
      ],
      whyChoose: 'Pourquoi choisir House Plus Ltd ?',
      advantages: [
        '15+ années d\'expérience : Excellence éprouvée en fabrication.',
        '50+ pays desservis : Fiable par des partenaires mondiaux.',
        '98% de livraison à temps : Gestion de chaîne d\'approvisionnement fiable.',
        'Services OEM/ODM personnalisés : Solutions sur mesure pour votre marque.',
        'Prix compétitifs : Prix direct usine sans intermédiaires.',
      ],
      connect: 'Connectez-vous avec nous',
      email: 'jack@houseplus-ch.com',
      phone: '+86 15578119543',
      cta: 'Contactez-nous dès aujourd\'hui pour une consultation gratuite et un devis sous 24 heures !',
      backToBlog: '← Retour au Blog',
    },
    es: {
      title: 'House Plus Ltd - Su Socio de Confianza',
      intro: 'Quiénes Somos',
      introText: 'House Plus Ltd es un fabricante líder especializado en electrodomésticos, productos solares y electrónica 3C. Con más de 15 años de experiencia, somos un socio OEM/ODM de confianza para marcas de todo el mundo.',
      quality: 'Nuestro Compromiso con la Calidad',
      qualityText: 'La calidad está en el corazón de todo lo que hacemos. Nuestra fábrica inteligente de 20,000㎡ está equipada con tecnología de punta y cuenta con más de 200 profesionales calificados.',
      products: 'Nuestras Líneas de Productos',
      productList: [
        'Electrodomésticos Inteligentes: Freidoras de aire, aspiradoras, licuadoras, hervidores eléctricos.',
        'Sistemas Solares: Paneles solares, inversores híbridos, baterías de litio, luces solares.',
        'Accesorios 3C: Cargadores GaN, bancos de energía, auriculares inalámbricos, relojes inteligentes.',
      ],
      whyChoose: '¿Por qué asociarse con House Plus Ltd?',
      advantages: [
        '15+ Años de Experiencia: Trayectoria comprobada en excelencia de fabricación.',
        '50+ Países Atendidos: Confiable para socios en todo el mundo.',
        '98% de Entrega a Tiempo: Gestión de cadena de suministro confiable.',
        'Servicios OEM/ODM Personalizados: Soluciones a medida para su marca.',
        'Precios Competitivos: Precio directo de fábrica sin intermediarios.',
      ],
      connect: 'Conéctese con Nosotros',
      email: 'jack@houseplus-ch.com',
      phone: '+86 15578119543',
      cta: '¡Contáctenos hoy para una consulta gratuita y presupuesto en 24 horas!',
      backToBlog: '← Volver al Blog',
    },
    ar: {
      title: 'هاوس بلس المحدودة - شريكك الموثوق في التصنيع',
      intro: 'من نحن',
      introText: 'هاوس بلس المحدودة هي شركة تصنيع رائدة متخصصة في الأجهزة المنزلية والمنتجات الشمسية والإلكترونيات 3C. مع أكثر من 15 عامًا من الخبرة، أنشأنا أنفسنا كشريك OEM/ODM موثوق للعلامات التجارية حول العالم.',
      quality: 'التزامنا بالجودة',
      qualityText: 'الجودة هي جوهر كل ما نقوم به. مصنعنا الذكي بمساحة 20,000 متر مربع مجهز بأحدث معدات التصنيع ويوظف أكثر من 200 متخصص ماهر.',
      products: 'خطوط منتجاتنا',
      productList: [
        'الأجهزة المنزلية الذكية: مقلايات هوائية، مكانس كهربائية، خلاطات، غلايات كهربائية.',
        'أنظمة الطاقة الشمسية: ألواح شمسية، محولات هجينة، بطاريات ليثيوم، أضواء شمسية.',
        'إكسسوارات 3C: شواحن GaN، بنوك طاقة، سماعات لاسلكية، ساعات ذكية.',
      ],
      whyChoose: 'لماذا تختار هاوس بلس المحدودة؟',
      advantages: [
        '١٥+ سنة خبرة: سجل حافل في التميز التصنيعي.',
        '٥٠+ دولة مخدومة: موثوق من قبل شركاء حول العالم.',
        '٩٨٪ تسليم في الوقت المحدد: إدارة سلسلة توريد موثوقة.',
        'خدمات OEM/ODM مخصصة: حلول مصممة خصيصًا لعلامتك التجارية.',
        'أسعار تنافسية: أسعار مباشرة من المصنع بدون وسطاء.',
      ],
      connect: 'تواصل معنا',
      email: 'jack@houseplus-ch.com',
      phone: '+86 15578119543',
      cta: 'اتصل بنا اليوم للحصول على استشارة مجانية وعرض سعر خلال 24 ساعة!',
      backToBlog: '← العودة إلى المدونة',
    },
  };

  const c = content[lang] || content.en;

  return (
    <>
      <div className="bg-gradient-to-r from-primary/5 to-secondary/5 py-16">
        <div className="container-custom">
          <Link 
            href={`/${lang}/blog`}
            className="text-primary hover:underline inline-flex items-center gap-1 mb-6"
          >
            {c.backToBlog}
          </Link>
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${dir === 'rtl' ? 'text-right' : ''}`}>
            {c.title}
          </h1>
        </div>
      </div>
      
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-2xl font-bold mb-4 ${dir === 'rtl' ? 'text-right' : ''}`}>{c.intro}</h2>
            <p className={`text-gray-600 mb-8 leading-relaxed ${dir === 'rtl' ? 'text-right' : ''}`}>{c.introText}</p>
            
            <h2 className={`text-2xl font-bold mb-4 ${dir === 'rtl' ? 'text-right' : ''}`}>{c.quality}</h2>
            <p className={`text-gray-600 mb-8 leading-relaxed ${dir === 'rtl' ? 'text-right' : ''}`}>{c.qualityText}</p>
            
            <h2 className={`text-2xl font-bold mb-4 ${dir === 'rtl' ? 'text-right' : ''}`}>{c.products}</h2>
            <ul className={`list-disc pl-6 mb-8 text-gray-600 ${dir === 'rtl' ? 'text-right pr-6' : ''}`}>
              {c.productList.map((item, idx) => (
                <li key={idx} className="mb-2">{item}</li>
              ))}
            </ul>
            
            <h2 className={`text-2xl font-bold mb-4 ${dir === 'rtl' ? 'text-right' : ''}`}>{c.whyChoose}</h2>
            <ul className={`list-disc pl-6 mb-8 text-gray-600 ${dir === 'rtl' ? 'text-right pr-6' : ''}`}>
              {c.advantages.map((item, idx) => (
                <li key={idx} className="mb-2">{item}</li>
              ))}
            </ul>
            
            <div className="bg-primary/10 rounded-xl p-6 text-center mt-8">
              <h3 className={`text-xl font-bold mb-4 ${dir === 'rtl' ? 'text-right' : ''}`}>{c.connect}</h3>
              <p className="mb-2">📧 {c.email}</p>
              <p className="mb-4">📞 {c.phone}</p>
              <Link 
                href={`/${lang}/contact`}
                className="btn-primary inline-block"
              >
                {c.cta}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
