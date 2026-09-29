import Link from 'next/link';

export async function generateMetadata({ params }) {
  const { lang } = params;

  const titles = {
    en: 'HousePlus Ltd: A HousePlus Brand Under HousePlus Group',
    fr: 'HousePlus Ltd : une marque HousePlus sous HousePlus Group',
    es: 'HousePlus Ltd: una marca HousePlus bajo HousePlus Group',
    ar: 'HousePlus Ltd: علامة HousePlus تحت HousePlus Group',
  };

  return {
    title: `${titles[lang] || titles.en} | HousePlus Ltd Blog`,
    description: 'Learn how HousePlus Ltd is a HousePlus brand under HousePlus Group, and explore the full HousePlus Group resources at houseplus-ch.com.',
  };
}

export default function HousePlusBrandPage({ params }) {
  const { lang } = params;
  const dir = lang === 'ar' ? 'rtl' : 'ltr';
  const MAIN = 'https://www.houseplus-ch.com';

  const content = {
    en: {
      title: 'HousePlus Ltd: A HousePlus Brand Under HousePlus Group',
      intro: 'Our Place Within HousePlus Group',
      introText: 'HousePlus Ltd is the HousePlus brand operating this regional, syndicated site under HousePlus Group — the China-based OEM/ODM manufacturer of household appliances, solar power systems, and 3C electronics. This site (houseplus.ltd) is an affiliated presence; the complete, authoritative home of the brand is our main site, HousePlus Group at houseplus-ch.com.',
      group: 'What Awaits on the Main Site (houseplus-ch.com)',
      groupText: 'The HousePlus Group main site is the definitive resource: the full product catalog, certifications (ISO 9001, CE, RoHS, FCC, TÜV, IEC), in-depth OEM/ODM capabilities, case studies, and the latest company news. If you are evaluating a manufacturing partner, start there.',
      products: 'Our Core Product Lines',
      productList: [
        'Smart Home Appliances: air fryers, vacuum cleaners, blenders, kettles, and food processors.',
        'Solar Power Systems: solar panels, hybrid inverters, lithium batteries, solar lights, and water pumps.',
        '3C & Digital Accessories: GaN chargers, power banks, wireless earbuds, smart watches, and USB-C hubs.',
      ],
      whyChoose: 'Why HousePlus Group',
      advantages: [
        '15+ Years of Experience in manufacturing excellence.',
        '50+ Countries Served worldwide.',
        '98% On-time Delivery with reliable supply-chain management.',
        'Custom OEM/ODM Services tailored to your brand.',
        'Competitive Factory-Direct Pricing with no middlemen.',
      ],
      mainSite: 'Visit the Official HousePlus Group Site',
      mainSiteText: 'For the full catalog, certifications, and a free quote, visit our main site:',
      mainSiteCta: 'Explore houseplus-ch.com',
      connect: 'Contact HousePlus Ltd',
      email: 'jack@houseplus-ch.com',
      phone: '+86 15578119543',
      cta: 'Or reach our team via the contact page for a free consultation and quote within 24 hours!',
      backToBlog: '← Back to Blog',
    },
    fr: {
      title: 'HousePlus Ltd : une marque HousePlus sous HousePlus Group',
      intro: 'Notre place au sein de HousePlus Group',
      introText: 'HousePlus Ltd est la marque HousePlus qui exploite ce site régional et syndiqué sous HousePlus Group — le fabricant OEM/ODM basé en Chine d\'appareils électroménagers, de systèmes solaires et d\'électronique 3C. Ce site (houseplus.ltd) est une présence affiliée ; le foyer complet et officiel de la marque est notre site principal, HousePlus Group sur houseplus-ch.com.',
      group: 'Ce qui vous attend sur le site principal (houseplus-ch.com)',
      groupText: 'Le site principal de HousePlus Group est la ressource définitive : le catalogue complet, les certifications (ISO 9001, CE, RoHS, FCC, TÜV, IEC), les capacités OEM/ODM détaillées, des études de cas et les dernières actualités. Si vous évaluez un partenaire manufacturier, commencez ici.',
      products: 'Nos gammes de produits',
      productList: [
        'Appareils électroménagers intelligents : friteuses à air, aspirateurs, blenders, bouilloires.',
        'Systèmes solaires : panneaux, onduleurs hybrides, batteries lithium, lampes solaires.',
        'Accessoires 3C : chargeurs GaN, batteries externes, écouteurs sans fil, montres connectées.',
      ],
      whyChoose: 'Pourquoi HousePlus Group',
      advantages: [
        '15+ années d\'expérience dans l\'excellence manufacturière.',
        '50+ pays desservis dans le monde.',
        '98% de livraison à temps avec une gestion fiable de la chaîne d\'approvisionnement.',
        'Services OEM/ODM personnalisés adaptés à votre marque.',
        'Prix compétitifs usine directe, sans intermédiaire.',
      ],
      mainSite: 'Visitez le site officiel de HousePlus Group',
      mainSiteText: 'Pour le catalogue complet, les certifications et un devis gratuit, visitez notre site principal :',
      mainSiteCta: 'Explorer houseplus-ch.com',
      connect: 'Contactez HousePlus Ltd',
      email: 'jack@houseplus-ch.com',
      phone: '+86 15578119543',
      cta: 'Ou contactez notre équipe via la page contact pour une consultation gratuite et un devis sous 24 heures !',
      backToBlog: '← Retour au Blog',
    },
    es: {
      title: 'HousePlus Ltd: una marca HousePlus bajo HousePlus Group',
      intro: 'Nuestro lugar dentro de HousePlus Group',
      introText: 'HousePlus Ltd es la marca HousePlus que opera este sitio regional y sindicado bajo HousePlus Group — el fabricante OEM/ODM con base en China de electrodomésticos, sistemas solares y electrónica 3C. Este sitio (houseplus.ltd) es una presencia afiliada; el hogar completo y oficial de la marca es nuestro sitio principal, HousePlus Group en houseplus-ch.com.',
      group: 'Qué le espera en el sitio principal (houseplus-ch.com)',
      groupText: 'El sitio principal de HousePlus Group es el recurso definitivo: el catálogo completo, las certificaciones (ISO 9001, CE, RoHS, FCC, TÜV, IEC), las capacidades OEM/ODM detalladas, estudios de caso y las últimas noticias. Si está evaluando un socio manufacturero, empiece aquí.',
      products: 'Nuestras líneas de productos',
      productList: [
        'Electrodomésticos inteligentes: freidoras de aire, aspiradoras, licuadoras, hervidores.',
        'Sistemas solares: paneles, inversores híbridos, baterías de litio, luces solares.',
        'Accesorios 3C: cargadores GaN, bancos de energía, auriculares inalámbricos, relojes inteligentes.',
      ],
      whyChoose: 'Por qué HousePlus Group',
      advantages: [
        '15+ años de experiencia en excelencia manufacturera.',
        '50+ países atendidos en todo el mundo.',
        '98% de entregas a tiempo con gestión fiable de la cadena de suministro.',
        'Servicios OEM/ODM personalizados adaptados a su marca.',
        'Precios competitivos de fábrica directa, sin intermediarios.',
      ],
      mainSite: 'Visite el sitio oficial de HousePlus Group',
      mainSiteText: 'Para el catálogo completo, las certificaciones y un presupuesto gratuito, visite nuestro sitio principal:',
      mainSiteCta: 'Explorar houseplus-ch.com',
      connect: 'Contacte con HousePlus Ltd',
      email: 'jack@houseplus-ch.com',
      phone: '+86 15578119543',
      cta: '¡O contacte con nuestro equipo a través de la página de contacto para una consulta gratuita y presupuesto en 24 horas!',
      backToBlog: '← Volver al Blog',
    },
    ar: {
      title: 'HousePlus Ltd: علامة HousePlus تحت HousePlus Group',
      intro: 'مكاننا ضمن HousePlus Group',
      introText: 'HousePlus Ltd هي علامة HousePlus التي تشغل هذا الموقع الإقليمي والمتزامن تحت HousePlus Group — الشركة المصنعة OEM/ODM التي تتخذ من الصين مقراً لها في الأجهزة المنزلية وأنظمة الطاقة الشمسية والإلكترونيات 3C. هذا الموقع (houseplus.ltd) هو وجود تابع؛ الموطن الكامل والرسمي للعلامة التجارية هو موقعنا الرئيسي، HousePlus Group على houseplus-ch.com.',
      group: 'ما ينتظرك على الموقع الرئيسي (houseplus-ch.com)',
      groupText: 'الموقع الرئيسي لـ HousePlus Group هو المصدر النهائي: الكتالوج الكامل، والشهادات (ISO 9001 وCE وRoHS وFCC وTÜV وIEC)، وقدرات OEM/ODM المفصلة، ودراسات الحالة، وأحدث الأخبار. إذا كنت تقيّم شريكاً تصنيعياً، ابدأ من هنا.',
      products: 'خطوط منتجاتنا',
      productList: [
        'الأجهزة المنزلية الذكية: مقلايات هوائية، مكانس كهربائية، خلاطات، غلايات.',
        'أنظمة الطاقة الشمسية: ألواح، محولات هجينة، بطاريات ليثيوم، أضواء شمسية.',
        'إكسسوارات 3C: شواحن GaN، بنوك طاقة، سماعات لاسلكية، ساعات ذكية.',
      ],
      whyChoose: 'لماذا HousePlus Group',
      advantages: [
        'أكثر من 15 عاماً من الخبرة في التميز التصنيعي.',
        'خدمة أكثر من 50 دولة حول العالم.',
        '98% تسليم في الوقت المحدد مع إدارة موثوقة لسلسلة التوريد.',
        'خدمات OEM/ODM مخصصة مصممة لعلامتك التجارية.',
        'أسعار تنافسية مباشرة من المصنع دون وسطاء.',
      ],
      mainSite: 'قم بزيارة الموقع الرسمي لـ HousePlus Group',
      mainSiteText: 'للحصول على الكتالوج الكامل والشهادات وعرض سعر مجاني، قم بزيارة موقعنا الرئيسي:',
      mainSiteCta: 'استكشف houseplus-ch.com',
      connect: 'تواصل مع HousePlus Ltd',
      email: 'jack@houseplus-ch.com',
      phone: '+86 15578119543',
      cta: 'أو تواصل مع فريقنا عبر صفحة الاتصال للحصول على استشارة مجانية وعرض سعر خلال 24 ساعة!',
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

            <h2 className={`text-2xl font-bold mb-4 ${dir === 'rtl' ? 'text-right' : ''}`}>{c.group}</h2>
            <p className={`text-gray-600 mb-8 leading-relaxed ${dir === 'rtl' ? 'text-right' : ''}`}>{c.groupText}</p>

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
              <h3 className={`text-xl font-bold mb-4 ${dir === 'rtl' ? 'text-right' : ''}`}>{c.mainSite}</h3>
              <p className="mb-2">
                {c.mainSiteText}{' '}
                <a href={`${MAIN}/en/`} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:underline">houseplus-ch.com</a>
              </p>
              <a
                href={`${MAIN}/en/`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block mt-2"
              >
                {c.mainSiteCta}
              </a>
            </div>

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
