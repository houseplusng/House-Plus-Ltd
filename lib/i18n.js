export const locales = ['en', 'fr', 'es', 'ar'];
export const defaultLocale = 'en';

export const getAlternateUrls = (lang, path = '') => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.houseplus.ltd';
  return locales.reduce((acc, locale) => {
    acc[locale] = `${siteUrl}/${locale}${path}`;
    return acc;
  }, {});
};

export const translations = {
  en: {
    dir: 'ltr',
    seo: {
      title: 'HousePlus Ltd - Professional Manufacturer of Home Appliances, Solar Products & 3C Electronics',
      description: 'HousePlus Ltd is a leading OEM/ODM manufacturer in China. We produce high-quality household appliances, solar power systems, and 3C electronics. ISO9001, CE, RoHS certified. Factory direct pricing.',
      keywords: 'HousePlus Ltd, household appliances manufacturer, solar products supplier, 3C electronics factory, OEM manufacturer China, wholesale home appliances, solar inverter supplier, China factory direct',
      breadcrumbHome: 'Home',
    },
    nav: {
      home: 'Home',
      products: 'Products',
      about: 'About',
      blog: 'Blog',
      faq: 'FAQ',
      contact: 'Contact',
    },
    hero: {
      title: 'Powering Homes & Business Worldwide – Your Trusted OEM/ODM Partner',
      subtitle: '15+ Years of Excellence in Household Appliances, Solar Solutions & 3C Electronics',
      description: 'From concept to mass production, we deliver certified quality with flexible customization. One-stop manufacturing solution for global brands, distributors, and entrepreneurs.',
      cta1: 'Get Free Quote',
      cta2: 'Explore Products',
    },
    about: {
      title: 'Who We Are',
      description: 'HousePlus Ltd is a leading manufacturer integrating R&D, production, and global sales. With our 20,000㎡ smart factory and 200+ skilled professionals, we transform ideas into market-ready products.',
      features: ['ISO 9001 Certified', 'In-house R&D Team', 'Global Compliance', 'End-to-End Service'],
      stats: [
        { value: '15+', label: 'Years Experience' },
        { value: '50+', label: 'Countries Served' },
        { value: '10', label: 'Production Lines' },
        { value: '98%', label: 'On-time Delivery' },
      ],
    },
    products: {
      title: 'Our Core Product Lines',
      subtitle: 'Engineered for reliability, designed for global markets',
      appliances: {
        title: 'Smart Home Appliances',
        description: 'Energy-efficient kitchen electronics, floor care systems, and personal care devices. Customizable appearance and functions. CE, RoHS certified.',
        keyProducts: 'Air Fryers, Vacuum Cleaners, Blenders, Electric Kettles, Food Processors',
        longDescription: 'Our smart home appliances combine innovative design with energy efficiency. Each product undergoes rigorous quality testing to ensure durability and safety for international markets.',
      },
      solar: {
        title: 'Solar Power Systems',
        description: 'Complete renewable energy solutions for residential and commercial use. Reduce carbon footprint while saving costs. TUV, IEC certified.',
        keyProducts: 'Solar Panels, Hybrid Inverters, Lithium Batteries, Solar Lights, Solar Water Pumps',
        longDescription: 'Our solar solutions are designed for maximum efficiency in various climates. From off-grid systems to grid-tied inverters, we provide complete renewable energy packages.',
      },
      electronics: {
        title: '3C & Digital Accessories',
        description: 'High-quality charging solutions, audio devices, and smart wearables. Designed for modern digital lifestyles. CE, FCC, RoHS certified.',
        keyProducts: 'GaN Chargers, Power Banks, Wireless Earbuds, Smart Watches, USB-C Hubs',
        longDescription: 'Stay connected with our premium 3C accessories. We use advanced GaN technology for faster, safer charging, and premium materials for long-lasting durability.',
      },
      cta: 'View Collection →',
    },
    services: {
      title: 'Turn Your Vision into Reality',
      subtitle: 'Complete Custom Manufacturing Solutions',
      steps: [
        { number: '01', title: 'Requirement Analysis', description: 'Share your concept, target specs, and budget' },
        { number: '02', title: 'Sample Development', description: 'Prototyping with 3D modeling and functional testing' },
        { number: '03', title: 'Mass Production', description: 'Automated assembly with strict QC checkpoints' },
        { number: '04', title: 'Global Logistics', description: 'Sea, air, or express shipping to your destination' },
      ],
      advantages: [
        'Custom Branding – Logo, packaging, and user manual design',
        'Function Customization – Adjust features to match your market needs',
        'Flexible MOQ – Support both small trial orders and bulk production',
        'Comprehensive Support – Certification assistance, technical documentation',
      ],
      cta: 'Start Your Project →',
    },
    testimonials: {
      title: 'What Our Clients Say',
      subtitle: 'Trusted by partners worldwide',
      items: [
        { quote: "HousePlus Ltd delivered exceptional quality on our custom blender order. Their team was responsive throughout the entire process, and the samples matched our specifications perfectly. Will definitely reorder.", name: "Mark T.", title: "US Home Appliance Brand", country: "USA" },
        { quote: "We've partnered with HousePlus Ltd for our solar inverter line for two years. Consistent quality, competitive pricing, and they helped us with CE certification. Highly recommended.", name: "Carlos M.", title: "European Renewable Energy Distributor", country: "Spain" },
        { quote: "As a startup, we needed a partner willing to work with smaller MOQ. HousePlus Ltd provided excellent support from prototyping to packaging design. Our first batch sold out in weeks!", name: "Sarah L.", title: "Australian Consumer Electronics Brand", country: "Australia" },
      ],
    },
    contact: {
      hero: {
        title: 'Contact Us',
        subtitle: 'Get in touch with our team for inquiries, quotes, or partnership opportunities',
      },
      title: 'Ready to Discuss Your Project?',
      subtitle: 'Get a free consultation and quotation within 24 hours',
      email: 'jack@houseplus-ch.com',
      phone: '+86 155 7811 9543',
      address: 'No. 29 Kangsheng Road, Huangpu Town, Zhongshan City, Guangdong Province, China',
      hoursLabel: 'Business Hours',
      hours: 'Mon–Fri 08:00–18:00 (GMT+8)',
      wechat: 'JackHousePlus',
      form: {
        name: 'Your Name *',
        email: 'Email Address *',
        company: 'Company Name',
        message: 'Tell us about your project...',
        submit: 'Send Message →',
        success: 'Thank you! We will contact you within 24 hours.',
      },
      whatsapp: 'WhatsApp Us',
    },
    footer: {
      tagline: 'Professional Manufacturer of Household Appliances, Solar Products & 3C Goods',
      quickLinks: 'Quick Links',
      products: 'Products',
      contactInfo: 'Contact Info',
      rights: 'All rights reserved.',
      certifications: 'Certifications: ISO9001, CE, RoHS, FCC, IEC',
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Answers to common questions about our OEM/ODM manufacturing services',
      items: [
        {
          question: 'What products does HousePlus Ltd manufacture?',
          answer: 'We are an OEM/ODM manufacturer producing smart home appliances (air fryers, vacuum cleaners, blenders, kettles), solar power systems (panels, hybrid inverters, lithium batteries), and 3C electronics (GaN chargers, power banks, earbuds, smart watches).',
        },
        {
          question: 'What is your minimum order quantity (MOQ)?',
          answer: 'MOQ varies by product category, typically from 500 to 1,000 units for standard models. We support small trial orders for new partners and scale up to full container loads for established distributors.',
        },
        {
          question: 'Can you customize products with our brand and logo?',
          answer: 'Yes. We offer full custom branding — logo printing, packaging design, user manuals, and functional customization (specs, colors, features) to match your target market.',
        },
        {
          question: 'What certifications do your products carry?',
          answer: 'Our products are certified to ISO9001, CE, RoHS, FCC, and IEC standards. We also assist clients with regional certification such as TUV and local compliance documentation.',
        },
        {
          question: 'How long does production take?',
          answer: 'Sample development takes 7–15 days. Mass production typically runs 25–40 days after sample approval and deposit confirmation, depending on order complexity and volume.',
        },
        {
          question: 'Do you provide samples before a bulk order?',
          answer: 'Yes, we provide pre-production samples for quality verification. Sample costs are refundable against your first bulk order once MOQ is met.',
        },
        {
          question: 'What shipping and Incoterms options do you offer?',
          answer: 'We ship by sea, air, or express. Common Incoterms are EXW, FOB Shenzhen/Guangzhou, and CIF to your port. We handle global logistics to 50+ countries.',
        },
        {
          question: 'What are your payment terms and warranty?',
          answer: 'We typically require a 30% deposit with the balance before shipment (T/T). We offer a 12-month warranty on manufacturing defects and lifetime technical support.',
        },
      ],
    },
  },
  fr: {
    dir: 'ltr',
    seo: {
      title: 'HousePlus Ltd - Fabricant professionnel d\'électroménager, produits solaires et électronique 3C',
      description: 'HousePlus Ltd est un fabricant leader en Chine. Nous produisons des appareils électroménagers de qualité, des systèmes d\'énergie solaire et des produits électroniques 3C. Certifié ISO9001, CE, RoHS. Prix usine.',
      keywords: 'HousePlus Ltd, fabricant électroménager, fournisseur panneaux solaires, usine électronique 3C, fabricant OEM Chine',
      breadcrumbHome: 'Accueil',
    },
    nav: {
      home: 'Accueil',
      products: 'Produits',
      about: 'À propos',
      blog: 'Blog',
      faq: 'FAQ',
      contact: 'Contact',
    },
    hero: {
      title: 'Alimenter les foyers et les entreprises dans le monde – Votre partenaire OEM/ODM de confiance',
      subtitle: 'HousePlus Ltd – 15+ années d\'excellence en électroménager, solutions solaires et électronique 3C',
      description: 'De la conception à la production de masse, nous offrons une qualité certifiée avec une personnalisation flexible. Solution de fabrication complète pour les marques mondiales, distributeurs et entrepreneurs.',
      cta1: 'Obtenir un devis',
      cta2: 'Découvrir les produits',
    },
    about: {
      title: 'Qui sommes-nous',
      description: 'HousePlus Ltd est un fabricant leader intégrant R&D, production et ventes mondiales. Avec notre usine intelligente de 20 000㎡ et plus de 200 professionnels qualifiés, nous transformons les idées en produits prêts à être commercialisés.',
      features: ['Certifié ISO 9001', 'Équipe R&D interne', 'Conformité mondiale', 'Service complet'],
      stats: [
        { value: '15+', label: "Années d'expérience" },
        { value: '50+', label: 'Pays desservis' },
        { value: '10', label: 'Chaînes de production' },
        { value: '98%', label: 'Livraison à temps' },
      ],
    },
    products: {
      title: 'Nos gammes de produits principales',
      subtitle: 'Conçu pour la fiabilité, pensé pour les marchés mondiaux',
      appliances: {
        title: 'Appareils électroménagers intelligents',
        description: 'Électronique de cuisine économe en énergie, systèmes d\'entretien des sols et appareils de soins personnels. Apparence et fonctions personnalisables.',
        keyProducts: 'Friteuses à air, Aspirateurs, Blenders, Bouilloires électriques',
        longDescription: 'Nos appareils électroménagers intelligents allient design innovant et efficacité énergétique.',
      },
      solar: {
        title: 'Systèmes solaires',
        description: 'Solutions complètes d\'énergie renouvelable pour usage résidentiel et commercial. Réduisez votre empreinte carbone tout en économisant.',
        keyProducts: 'Panneaux solaires, Onduleurs hybrides, Batteries lithium, Lampes solaires',
        longDescription: 'Nos solutions solaires sont conçues pour une efficacité maximale dans divers climats.',
      },
      electronics: {
        title: 'Accessoires 3C et numériques',
        description: 'Solutions de charge de haute qualité, appareils audio et wearables intelligents. Conçus pour les modes de vie numériques modernes.',
        keyProducts: 'Chargeurs GaN, Batteries externes, Écouteurs sans fil, Montres intelligentes',
        longDescription: 'Restez connecté avec nos accessoires 3C premium.',
      },
      cta: 'Voir la collection →',
    },
    services: {
      title: 'Transformez votre vision en réalité',
      subtitle: 'Solutions de fabrication sur mesure complètes',
      steps: [
        { number: '01', title: 'Analyse des besoins', description: 'Partagez votre concept, vos spécifications cibles et votre budget' },
        { number: '02', title: 'Développement d\'échantillons', description: 'Prototypage avec modélisation 3D et tests fonctionnels' },
        { number: '03', title: 'Production de masse', description: 'Assemblage automatisé avec points de contrôle qualité stricts' },
        { number: '04', title: 'Logistique mondiale', description: 'Expédition maritime, aérienne ou express vers votre destination' },
      ],
      advantages: [
        'Marque personnalisée – Logo, emballage et conception du manuel utilisateur',
        'Personnalisation des fonctions – Ajustez les fonctionnalités selon les besoins de votre marché',
        'MOQ flexible – Soutien des petites commandes d\'essai et de la production en gros',
        'Support complet – Assistance à la certification, documentation technique',
      ],
      cta: 'Commencer votre projet →',
    },
    testimonials: {
      title: 'Ce que disent nos clients',
      subtitle: 'Approuvé par des partenaires du monde entier',
      items: [
        { quote: "HousePlus Ltd a livré une qualité exceptionnelle sur notre commande de blender personnalisé. Leur équipe a été réactive tout au long du processus.", name: "Mark T.", title: "Marque d'électroménager américaine", country: "USA" },
        { quote: "Nous collaborons avec HousePlus Ltd pour notre gamme d'onduleurs solaires depuis deux ans. Qualité constante, prix compétitifs.", name: "Carlos M.", title: "Distributeur européen d'énergies renouvelables", country: "Espagne" },
        { quote: "En tant que startup, nous avions besoin d'un partenaire prêt à travailler avec des MOQ plus petits. HousePlus Ltd nous a fourni un excellent support.", name: "Sarah L.", title: "Marque australienne d'électronique grand public", country: "Australie" },
      ],
    },
    contact: {
      hero: {
        title: 'Contactez-nous',
        subtitle: 'Contactez notre équipe pour vos demandes, devis ou partenariats',
      },
      title: 'Prêt à discuter de votre projet ?',
      subtitle: 'Obtenez une consultation gratuite et un devis sous 24 heures',
      email: 'jack@houseplus-ch.com',
      hoursLabel: 'Heures d\'ouverture',
      hours: 'Lun–Ven 08:00–18:00 (GMT+8)',
      wechat: 'JackHousePlus',
      phone: '+86 155 7811 9543',
      address: '29 Rue Kangsheng, Ville de Huangpu, Zhongshan, Guangdong, Chine',
      form: {
        name: 'Votre nom *',
        email: 'Adresse email *',
        company: 'Nom de l\'entreprise',
        message: 'Parlez-nous de votre projet...',
        submit: 'Envoyer le message →',
        success: 'Merci ! Nous vous contacterons dans les 24 heures.',
      },
      whatsapp: 'Nous contacter sur WhatsApp',
    },
    footer: {
      tagline: 'Fabricant professionnel d\'électroménager, de produits solaires et de biens 3C',
      quickLinks: 'Liens rapides',
      products: 'Produits',
      contactInfo: 'Coordonnées',
      rights: 'Tous droits réservés.',
      certifications: 'Certifications : ISO9001, CE, RoHS, FCC, IEC',
    },
    faq: {
      title: 'Questions Fréquentes',
      subtitle: 'Réponses aux questions courantes sur nos services de fabrication OEM/ODM',
      items: [
        {
          question: 'Quels produits HousePlus Ltd fabrique-t-il ?',
          answer: 'Nous sommes un fabricant OEM/ODM produisant des appareils électroménagers intelligents (friteuses à air, aspirateurs, blenders, bouilloires), des systèmes solaires (panneaux, onduleurs hybrides, batteries lithium) et l\'électronique 3C (chargeurs GaN, batteries externes, écouteurs, montres intelligentes).',
        },
        {
          question: 'Quelle est votre quantité minimale de commande (MOQ) ?',
          answer: 'Le MOQ varie selon la catégorie, généralement de 500 à 1 000 unités pour les modèles standards. Nous acceptons les petites commandes d\'essai et montons jusqu\'aux conteneurs complets.',
        },
        {
          question: 'Pouvez-vous personnaliser les produits avec notre marque et logo ?',
          answer: 'Oui. Nous offrons une marque complète — impression de logo, conception d\'emballage, manuels utilisateur et personnalisation fonctionnelle (spécifications, couleurs, fonctionnalités) selon votre marché.',
        },
        {
          question: 'Quelles certifications vos produits possèdent-ils ?',
          answer: 'Nos produits sont certifiés ISO9001, CE, RoHS, FCC et IEC. Nous aidons également pour les certifications régionales comme TUV et la documentation de conformité locale.',
        },
        {
          question: 'Combien de temps prend la production ?',
          answer: 'Le développement d\'échantillons prend 7 à 15 jours. La production de masse dure généralement 25 à 40 jours après approbation de l\'échantillon et confirmation de l\'acompte, selon la complexité et le volume.',
        },
        {
          question: 'Fournissez-vous des échantillons avant une commande en gros ?',
          answer: 'Oui, nous fournissons des échantillons pré-production pour vérification qualité. Les frais d\'échantillon sont remboursables sur votre première commande en gros au-delà du MOQ.',
        },
        {
          question: 'Quelles options d\'expédition et d\'Incoterms proposez-vous ?',
          answer: 'Nous expédions par mer, air ou express. Les Incoterms courants sont EXW, FOB Shenzhen/Guangzhou et CIF vers votre port. Nous gérons la logistique vers plus de 50 pays.',
        },
        {
          question: 'Quelles sont vos conditions de paiement et de garantie ?',
          answer: 'Nous demandons généralement un acompte de 30 % et le solde avant expédition (T/T). Nous offrons une garantie de 12 mois sur les défauts de fabrication et un support technique à vie.',
        },
      ],
    },
  },
  es: {
    dir: 'ltr',
    seo: {
      title: 'HousePlus Ltd - Fabricante profesional de electrodomésticos, productos solares y electrónica 3C',
      description: 'HousePlus Ltd es un fabricante líder en China. Producimos electrodomésticos de calidad, sistemas de energía solar y productos electrónicos 3C. Certificado ISO9001, CE, RoHS. Precio de fábrica.',
      keywords: 'HousePlus Ltd, fabricante electrodomésticos, proveedor paneles solares, fábrica electrónica 3C, fabricante OEM China',
      breadcrumbHome: 'Inicio',
    },
    nav: {
      home: 'Inicio',
      products: 'Productos',
      about: 'Nosotros',
      blog: 'Blog',
      faq: 'Preguntas frecuentes',
      contact: 'Contacto',
    },
    hero: {
      title: 'Potenciamos Hogares y Negocios en Todo el Mundo – Su Socio OEM/ODM de Confianza',
      subtitle: 'HousePlus Ltd – 15+ Años de Excelencia en Electrodomésticos, Soluciones Solares y Electrónica 3C',
      description: 'Desde el concepto hasta la producción en masa, ofrecemos calidad certificada con personalización flexible. Solución de fabricación integral para marcas globales, distribuidores y emprendedores.',
      cta1: 'Solicitar Presupuesto',
      cta2: 'Ver Productos',
    },
    about: {
      title: 'Quiénes Somos',
      description: 'HousePlus Ltd es un fabricante líder que integra I+D, producción y ventas globales. Con nuestra fábrica inteligente de 20,000㎡ y más de 200 profesionales calificados, transformamos ideas en productos listos para el mercado.',
      features: ['Certificado ISO 9001', 'Equipo de I+D interno', 'Cumplimiento global', 'Servicio integral'],
      stats: [
        { value: '15+', label: 'Años de experiencia' },
        { value: '50+', label: 'Países atendidos' },
        { value: '10', label: 'Líneas de producción' },
        { value: '98%', label: 'Entrega a tiempo' },
      ],
    },
    products: {
      title: 'Nuestras Líneas de Productos Principales',
      subtitle: 'Diseñado para la fiabilidad, pensado para los mercados globales',
      appliances: {
        title: 'Electrodomésticos Inteligentes',
        description: 'Electrónica de cocina eficiente, sistemas de cuidado de pisos y dispositivos de cuidado personal. Apariencia y funciones personalizables.',
        keyProducts: 'Freidoras de aire, Aspiradoras, Licuadoras, Hervidores eléctricos',
        longDescription: 'Nuestros electrodomésticos inteligentes combinan diseño innovador con eficiencia energética.',
      },
      solar: {
        title: 'Sistemas de Energía Solar',
        description: 'Soluciones completas de energía renovable para uso residencial y comercial. Reduce tu huella de carbono mientras ahorras costos.',
        keyProducts: 'Paneles solares, Inversores híbridos, Baterías de litio, Luces solares',
        longDescription: 'Nuestras soluciones solares están diseñadas para máxima eficiencia en diversos climas.',
      },
      electronics: {
        title: 'Accesorios 3C y Digitales',
        description: 'Soluciones de carga de alta calidad, dispositivos de audio y wearables inteligentes. Diseñados para estilos de vida digitales modernos.',
        keyProducts: 'Cargadores GaN, Bancos de energía, Auriculares inalámbricos, Relojes inteligentes',
        longDescription: 'Manténgase conectado con nuestros accesorios 3C premium.',
      },
      cta: 'Ver Colección →',
    },
    services: {
      title: 'Convierta su Visión en Realidad',
      subtitle: 'Soluciones Completas de Fabricación Personalizada',
      steps: [
        { number: '01', title: 'Análisis de Requisitos', description: 'Comparta su concepto, especificaciones objetivo y presupuesto' },
        { number: '02', title: 'Desarrollo de Muestras', description: 'Prototipado con modelado 3D y pruebas funcionales' },
        { number: '03', title: 'Producción en Masa', description: 'Ensamble automatizado con estrictos puntos de control de calidad' },
        { number: '04', title: 'Logística Global', description: 'Envío marítimo, aéreo o exprés a su destino' },
      ],
      advantages: [
        'Marca personalizada – Logotipo, embalaje y diseño del manual de usuario',
        'Personalización de funciones – Ajuste las características según las necesidades de su mercado',
        'MOQ flexible – Apoyo tanto para pedidos pequeños de prueba como producción a gran escala',
        'Soporte completo – Asistencia para certificación, documentación técnica',
      ],
      cta: 'Comenzar su Proyecto →',
    },
    testimonials: {
      title: 'Lo que Dicen Nuestros Clientes',
      subtitle: 'Confiado por socios en todo el mundo',
      items: [
        { quote: "HousePlus Ltd entregó una calidad excepcional en nuestro pedido personalizado de licuadora. Su equipo fue receptivo durante todo el proceso.", name: "Mark T.", title: "Marca de electrodomésticos de EE.UU.", country: "EE.UU." },
        { quote: "Hemos trabajado con HousePlus Ltd para nuestra línea de inversores solares durante dos años. Calidad consistente, precios competitivos.", name: "Carlos M.", title: "Distribuidor europeo de energías renovables", country: "España" },
        { quote: "Como startup, necesitábamos un socio dispuesto a trabajar con MOQ más pequeños. HousePlus Ltd nos brindó un excelente apoyo.", name: "Sarah L.", title: "Marca australiana de electrónica de consumo", country: "Australia" },
      ],
    },
    contact: {
      hero: {
        title: 'Contáctenos',
        subtitle: 'Póngase en contacto con nuestro equipo para consultas, cotizaciones o oportunidades de asociación',
      },
      title: '¿Listo para Discutir su Proyecto?',
      subtitle: 'Obtenga una consulta gratuita y presupuesto en 24 horas',
      email: 'jack@houseplus-ch.com',
      phone: '+86 155 7811 9543',
      address: 'Camino Kangsheng 29, Pueblo de Huangpu, Zhongshan, Guangdong, China',
      hoursLabel: 'Horario comercial',
      hours: 'Lun–Vie 08:00–18:00 (GMT+8)',
      wechat: 'JackHousePlus',
      form: {
        name: 'Su Nombre *',
        email: 'Correo Electrónico *',
        company: 'Nombre de la Empresa',
        message: 'Cuéntenos sobre su proyecto...',
        submit: 'Enviar Mensaje →',
        success: '¡Gracias! Nos comunicaremos con usted en 24 horas.',
      },
      whatsapp: 'Contáctenos por WhatsApp',
    },
    footer: {
      tagline: 'Fabricante profesional de electrodomésticos, productos solares y artículos 3C',
      quickLinks: 'Enlaces Rápidos',
      products: 'Productos',
      contactInfo: 'Información de Contacto',
      rights: 'Todos los derechos reservados.',
      certifications: 'Certificaciones: ISO9001, CE, RoHS, FCC, IEC',
    },
    faq: {
      title: 'Preguntas Frecuentes',
      subtitle: 'Respuestas a preguntas comunes sobre nuestros servicios de fabricación OEM/ODM',
      items: [
        {
          question: '¿Qué productos fabrica HousePlus Ltd?',
          answer: 'Somos un fabricante OEM/ODM que produce electrodomésticos inteligentes (freidoras de aire, aspiradoras, licuadoras, hervidores), sistemas solares (paneles, inversores híbridos, baterías de litio) y electrónica 3C (cargadores GaN, bancos de energía, auriculares, relojes inteligentes).',
        },
        {
          question: '¿Cuál es su pedido mínimo (MOQ)?',
          answer: 'El MOQ varía según la categoría, normalmente de 500 a 1 000 unidades para modelos estándar. Apoyamos pedidos de prueba pequeños y escalamos hasta contenedores completos.',
        },
        {
          question: '¿Pueden personalizar productos con nuestra marca y logo?',
          answer: 'Sí. Ofrecemos marca completa — impresión de logo, diseño de embalaje, manuales de usuario y personalización funcional (especificaciones, colores, funciones) según su mercado.',
        },
        {
          question: '¿Qué certificaciones tienen sus productos?',
          answer: 'Nuestros productos están certificados bajo ISO9001, CE, RoHS, FCC e IEC. También ayudamos con certificaciones regionales como TUV y documentación de cumplimiento local.',
        },
        {
          question: '¿Cuánto tarda la producción?',
          answer: 'El desarrollo de muestras tarda 7 a 15 días. La producción en masa suele tardar 25 a 40 días tras la aprobación de la muestra y el depósito, según complejidad y volumen.',
        },
        {
          question: '¿Proporcionan muestras antes del pedido en gros?',
          answer: 'Sí, proporcionamos muestras preproducción para verificación de calidad. El costo de muestra es reembolsable en su primer pedido en gros al alcanzar el MOQ.',
        },
        {
          question: '¿Qué opciones de envío e Incoterms ofrecen?',
          answer: 'Enviamos por mar, aire o express. Los Incoterms comunes son EXW, FOB Shenzhen/Guangzhou y CIF a su puerto. Gestionamos logística global a más de 50 países.',
        },
        {
          question: '¿Cuáles son sus condiciones de pago y garantía?',
          answer: 'Solicitamos generalmente un depósito del 30 % y el saldo antes del envío (T/T). Ofrecemos garantía de 12 meses por defectos de fabricación y soporte técnico de por vida.',
        },
      ],
    },
  },
  ar: {
    dir: 'rtl',
    seo: {
      title: 'هاوس بلس المحدودة - الشركة المصنعة المتخصصة في الأجهزة المنزلية والمنتجات الشمسية والإلكترونيات 3C',
      description: 'هاوس بلس المحدودة هي شركة تصنيع رائدة في الصين. ننتج أجهزة منزلية عالية الجودة وأنظمة طاقة شمسية ومنتجات إلكترونيات 3C. حاصلة على شهادات ISO9001، CE، RoHS. أسعار المصنع مباشرة.',
      keywords: 'هاوس بلس المحدودة، مصنع أجهزة منزلية، مورد منتجات شمسية، مصنع إلكترونيات 3C، تصنيع OEM الصين',
      breadcrumbHome: 'الرئيسية',
    },
    nav: {
      home: 'الرئيسية',
      products: 'المنتجات',
      about: 'من نحن',
      blog: 'المدونة',
      faq: 'الأسئلة الشائعة',
      contact: 'اتصل بنا',
    },
    hero: {
      title: 'تزويد المنازل والشركات حول العالم – شريك OEM/ODM الموثوق',
      subtitle: 'هاوس بلس المحدودة – 15+ عاماً من التميز في الأجهزة المنزلية والحلول الشمسية والإلكترونيات 3C',
      description: 'من الفكرة إلى الإنتاج الضخم، نقدم جودة معتمدة مع تخصيص مرن. حل تصنيع شامل للعلامات التجارية العالمية والموزعين ورواد الأعمال.',
      cta1: 'احصل على عرض سعر',
      cta2: 'استكشف المنتجات',
    },
    about: {
      title: 'من نحن',
      description: 'هاوس بلس المحدودة هي شركة تصنيع رائدة تدمج البحث والتطوير والإنتاج والمبيعات العالمية. من خلال مصنعنا الذكي بمساحة 20,000 متر مربع وأكثر من 200 متخصص، نحول الأفكار إلى منتجات جاهزة للسوق.',
      features: ['معتمد ISO 9001', 'فريق بحث وتطوير داخلي', 'مطابقة للمعايير العالمية', 'خدمة شاملة'],
      stats: [
        { value: '15+', label: 'سنوات الخبرة' },
        { value: '50+', label: 'دولة مخدومة' },
        { value: '10', label: 'خطوط إنتاج' },
        { value: '98%', label: 'تسليم في الوقت المحدد' },
      ],
    },
    products: {
      title: 'خطوط منتجاتنا الأساسية',
      subtitle: 'مصممة للموثوقية، مصنعة للأسواق العالمية',
      appliances: {
        title: 'الأجهزة المنزلية الذكية',
        description: 'إلكترونيات مطبخ موفرة للطاقة، وأنظمة العناية بالأرضيات، وأجهزة العناية الشخصية. مظهر ووظائف قابلة للتخصيص.',
        keyProducts: 'مقلايات هوائية، مكانس كهربائية، خلاطات، غلايات كهربائية',
        longDescription: 'أجهزتنا المنزلية الذكية تجمع بين التصميم المبتكر وكفاءة الطاقة.',
      },
      solar: {
        title: 'أنظمة الطاقة الشمسية',
        description: 'حلول طاقة متجددة متكاملة للاستخدام السكني والتجاري. قلل بصمتك الكربونية مع توفير التكاليف.',
        keyProducts: 'ألواح شمسية، محولات هجينة، بطاريات ليثيوم، أضواء شمسية',
        longDescription: 'حلولنا الشمسية مصممة لتحقيق أقصى كفاءة في مختلف المناخات.',
      },
      electronics: {
        title: 'إكسسوارات 3C والرقمية',
        description: 'حلول شحن عالية الجودة، وأجهزة صوتية، وأجهزة ذكية قابلة للارتداء. مصممة لأنماط الحياة الرقمية الحديثة.',
        keyProducts: 'شواحن GaN، بنوك طاقة، سماعات لاسلكية، ساعات ذكية',
        longDescription: 'ابق على اتصال مع إكسسواراتنا 3C المتميزة.',
      },
      cta: 'عرض المجموعة ←',
    },
    services: {
      title: 'حول رؤيتك إلى واقع',
      subtitle: 'حلول تصنيع مخصصة متكاملة',
      steps: [
        { number: '٠١', title: 'تحليل المتطلبات', description: 'شارك مفهومك ومواصفاتك المستهدفة وميزانيتك' },
        { number: '٠٢', title: 'تطوير العينات', description: 'نماذج أولية باستخدام النمذجة ثلاثية الأبعاد والاختبارات الوظيفية' },
        { number: '٠٣', title: 'الإنتاج الضخم', description: 'تجميع آلي مع نقاط مراقبة جودة صارمة' },
        { number: '٠٤', title: 'الخدمات اللوجستية العالمية', description: 'شحن بحري أو جوي أو سريع إلى وجهتك' },
      ],
      advantages: [
        'علامة تجارية مخصصة – الشعار والتغليف وتصميم دليل المستخدم',
        'تخصيص الوظائف – تعديل الميزات لتتناسب مع احتياجات السوق الخاص بك',
        'كمية طلب مرنة – دعم الطلبات التجريبية الصغيرة والإنتاج بالجملة',
        'دعم شامل – المساعدة في الشهادات والتوثيق الفني',
      ],
      cta: 'ابدأ مشروعك →',
    },
    testimonials: {
      title: 'ماذا يقول عملاؤنا',
      subtitle: 'موثوق من قبل شركاء حول العالم',
      items: [
        { quote: "قدمت هاوس بلس المحدودة جودة استثنائية في طلب الخلاط المخصص الخاص بنا. كان فريقهم متجاوباً طوال العملية.", name: "مارك ت.", title: "علامة تجارية أمريكية للأجهزة المنزلية", country: "الولايات المتحدة" },
        { quote: "تعاونا مع هاوس بلس المحدودة لمنتجات العاكس الشمسي لمدة عامين. جودة ثابتة، أسعار تنافسية.", name: "كارلوس م.", title: "موزع أوروبي للطاقة المتجددة", country: "إسبانيا" },
        { quote: "كشركة ناشئة، احتجنا شريكاً مستعداً للعمل بكميات طلب أقل. قدمت هاوس بلس المحدودة دعماً ممتازاً.", name: "سارة ل.", title: "علامة تجارية أسترالية للإلكترونيات الاستهلاكية", country: "أستراليا" },
      ],
    },
    contact: {
      hero: {
        title: 'اتصل بنا',
        subtitle: 'تواصل مع فريقنا للاستفسارات أو عروض الأسعار أو فرص الشراكة',
      },
      title: 'هل أنت مستعد لمناقشة مشروعك؟',
      subtitle: 'احصل على استشارة مجانية وعرض سعر خلال 24 ساعة',
      email: 'jack@houseplus-ch.com',
      phone: '+86 155 7811 9543',
      address: 'طريق كانغشنغ 29، بلدة هوانغبو، تشونغشان، قوانغدونغ، الصين',
      hoursLabel: 'ساعات العمل',
      hours: 'الإثنين–الجمعة 08:00–18:00 (GMT+8)',
      wechat: 'JackHousePlus',
      form: {
        name: 'اسمك *',
        email: 'البريد الإلكتروني *',
        company: 'اسم الشركة',
        message: 'أخبرنا عن مشروعك...',
        submit: 'إرسال الرسالة →',
        success: 'شكراً لك! سوف نتصل بك خلال 24 ساعة.',
      },
      whatsapp: 'راسلنا على واتساب',
    },
    footer: {
      tagline: 'الشركة المصنعة المتخصصة في الأجهزة المنزلية والمنتجات الشمسية والسلع 3C',
      quickLinks: 'روابط سريعة',
      products: 'المنتجات',
      contactInfo: 'معلومات الاتصال',
      rights: 'جميع الحقوق محفوظة.',
      certifications: 'الشهادات: ISO9001، CE، RoHS، FCC، IEC',
    },
    faq: {
      title: 'الأسئلة الشائعة',
      subtitle: 'إجابات على الأسئلة الشائعة حول خدمات التصنيع OEM/ODM الخاصة بنا',
      items: [
        {
          question: 'ما المنتجات التي تصنعها هاوس بلس المحدودة؟',
          answer: 'نحن شركة تصنيع OEM/ODM ننتج أجهزة منزلية ذكية (مقلايات هوائية، مكانس كهربائية، خلاطات، غلايات) وأنظمة طاقة شمسية (ألواح، محولات هجينة، بطاريات ليثيوم) وإلكترونيات 3C (شواحن GaN، بنوك طاقة، سماعات، ساعات ذكية).',
        },
        {
          question: 'ما هي الكمية الدنيا للطلب (MOQ)؟',
          answer: 'تختلف الكمية الدنيا حسب الفئة، عادة من 500 إلى 1000 وحدة للطرازات القياسية. ندعم الطلبات التجريبية الصغيرة ونصعد حتى حاويات كاملة.',
        },
        {
          question: 'هل يمكنكم تخصيص المنتجات بعلامتنا التجارية وشعارنا؟',
          answer: 'نعم. نقدم علامة تجارية كاملة – طباعة الشعار، تصميم التغليف، أدلة المستخدم، وتخصيص الوظائف (المواصفات، الألوان، الميزات) ليناسب سوقك.',
        },
        {
          question: 'ما الشهادات التي تحملها منتجاتكم؟',
          answer: 'منتجاتنا معتمدة وفق ISO9001 وCE وRoHS وFCC وIEC. كما نساعد في الشهادات الإقليمية مثل TUV ووثائق الامتثال المحلي.',
        },
        {
          question: 'كم تستغرق مدة الإنتاج؟',
          answer: 'يستغرق تطوير العينات 7 إلى 15 يوماً. ويستغرق الإنتاج الضخم عادة 25 إلى 40 يوماً بعد اعتماد العينة وتأكيد الدفعة، حسب التعقيد والحجم.',
        },
        {
          question: 'هل تقدمون عينات قبل الطلب بالجملة؟',
          answer: 'نعم، نقدم عينات ما قبل الإنتاج للتحقق من الجودة. تُسترد تكلفة العينة من أول طلب جملة عند بلوغ الحد الأدنى للطلب.',
        },
        {
          question: 'ما خيارات الشحن وإنكوتيرمز التي تقدمونها؟',
          answer: 'نشحن بحرياً أو جوياً أو سريعاً. مصطلحات الشحن الشائعة هي EXW وFOB شنتشن/قوانغتشو وCIF إلى مينائك. ندير لوجستيات عالمية لأكثر من 50 دولة.',
        },
        {
          question: 'ما هي شروط الدفع والضمان لديكم؟',
          answer: 'عادة نطلب دفعة مقدمة 30% والرصيد قبل الشحن (T/T). نقدم ضماناً لمدة 12 شهراً على عيوب التصنيع ودعماً فنياً مدى الحياة.',
        },
      ],
    },
  },
};
