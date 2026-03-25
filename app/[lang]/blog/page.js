import Link from 'next/link';

// 博客文章列表配置
const blogPostsConfig = {
  en: [
    {
      slug: 'house-plus-ltd-news',
      title: 'House Plus Ltd - Your Trusted Manufacturing Partner',
      excerpt: 'Discover why House Plus Ltd is the preferred OEM/ODM partner for global brands in household appliances, solar products, and 3C electronics.',
      date: '2025-03-25',
      readTime: '3 min read',
      category: 'Company News',
      author: 'House Plus Ltd Team',
    },
    {
      slug: 'why-choose-oem-manufacturer-china',
      title: 'Why Choose an OEM Manufacturer in China?',
      excerpt: 'Discover the key benefits of partnering with Chinese OEM manufacturers for your business.',
      date: '2025-03-20',
      readTime: '5 min read',
      category: 'Manufacturing',
      author: 'Jack Zhang',
    },
    {
      slug: 'solar-energy-trends-2025',
      title: 'Solar Energy Trends to Watch in 2025',
      excerpt: 'Stay ahead of the curve with these emerging trends in the solar energy industry.',
      date: '2025-03-15',
      readTime: '4 min read',
      category: 'Solar Energy',
      author: 'Maria Chen',
    },
    {
      slug: 'smart-home-appliances-guide',
      title: 'The Ultimate Guide to Smart Home Appliances',
      excerpt: 'Learn how smart appliances can improve your daily life and reduce energy consumption.',
      date: '2025-03-10',
      readTime: '6 min read',
      category: 'Home Appliances',
      author: 'David Wang',
    },
  ],
  fr: [
    {
      slug: 'house-plus-ltd-news',
      title: 'House Plus Ltd - Votre Partenaire de Confiance',
      excerpt: 'Découvrez pourquoi House Plus Ltd est le partenaire OEM/ODM privilégié des marques mondiales.',
      date: '2025-03-25',
      readTime: '3 min de lecture',
      category: 'Actualités',
      author: 'Équipe House Plus Ltd',
    },
    {
      slug: 'why-choose-oem-manufacturer-china',
      title: 'Pourquoi choisir un fabricant OEM en Chine ?',
      excerpt: 'Découvrez les avantages clés de collaborer avec des fabricants OEM chinois pour votre entreprise.',
      date: '2025-03-20',
      readTime: '5 min de lecture',
      category: 'Fabrication',
      author: 'Jack Zhang',
    },
    {
      slug: 'solar-energy-trends-2025',
      title: 'Tendances de l\'énergie solaire à surveiller en 2025',
      excerpt: 'Restez en avance avec ces tendances émergentes dans l\'industrie solaire.',
      date: '2025-03-15',
      readTime: '4 min de lecture',
      category: 'Énergie Solaire',
      author: 'Maria Chen',
    },
    {
      slug: 'smart-home-appliances-guide',
      title: 'Guide ultime des appareils électroménagers intelligents',
      excerpt: 'Apprenez comment les appareils intelligents peuvent améliorer votre quotidien.',
      date: '2025-03-10',
      readTime: '6 min de lecture',
      category: 'Électroménager',
      author: 'David Wang',
    },
  ],
  es: [
    {
      slug: 'house-plus-ltd-news',
      title: 'House Plus Ltd - Su Socio de Confianza',
      excerpt: 'Descubra por qué House Plus Ltd es el socio OEM/ODM preferido por marcas globales.',
      date: '2025-03-25',
      readTime: '3 min de lectura',
      category: 'Noticias',
      author: 'Equipo House Plus Ltd',
    },
    {
      slug: 'why-choose-oem-manufacturer-china',
      title: '¿Por qué elegir un fabricante OEM en China?',
      excerpt: 'Descubra los beneficios clave de asociarse con fabricantes OEM chinos.',
      date: '2025-03-20',
      readTime: '5 min de lectura',
      category: 'Fabricación',
      author: 'Jack Zhang',
    },
    {
      slug: 'solar-energy-trends-2025',
      title: 'Tendencias de energía solar para 2025',
      excerpt: 'Manténgase a la vanguardia con estas tendencias emergentes en la industria solar.',
      date: '2025-03-15',
      readTime: '4 min de lectura',
      category: 'Energía Solar',
      author: 'Maria Chen',
    },
    {
      slug: 'smart-home-appliances-guide',
      title: 'Guía definitiva de electrodomésticos inteligentes',
      excerpt: 'Aprenda cómo los electrodomésticos inteligentes pueden mejorar su vida diaria.',
      date: '2025-03-10',
      readTime: '6 min de lectura',
      category: 'Electrodomésticos',
      author: 'David Wang',
    },
  ],
  ar: [
    {
      slug: 'house-plus-ltd-news',
      title: 'هاوس بلس المحدودة - شريكك الموثوق في التصنيع',
      excerpt: 'اكتشف لماذا تعتبر هاوس بلس المحدودة الشريك المفضل في التصنيع للعلامات التجارية العالمية.',
      date: '2025-03-25',
      readTime: '٣ دقائق قراءة',
      category: 'أخبار الشركة',
      author: 'فريق هاوس بلس المحدودة',
    },
    {
      slug: 'why-choose-oem-manufacturer-china',
      title: 'لماذا تختار مصنع OEM في الصين؟',
      excerpt: 'اكتشف الفوائد الرئيسية للشراكة مع مصنعي OEM في الصين.',
      date: '2025-03-20',
      readTime: '٥ دقائق قراءة',
      category: 'تصنيع',
      author: 'جاك تشانغ',
    },
    {
      slug: 'solar-energy-trends-2025',
      title: 'اتجاهات الطاقة الشمسية لعام 2025',
      excerpt: 'ابق في المقدمة مع هذه الاتجاهات الناشئة في صناعة الطاقة الشمسية.',
      date: '2025-03-15',
      readTime: '٤ دقائق قراءة',
      category: 'طاقة شمسية',
      author: 'ماريا تشن',
    },
    {
      slug: 'smart-home-appliances-guide',
      title: 'الدليل الشامل للأجهزة المنزلية الذكية',
      excerpt: 'تعلم كيف يمكن للأجهزة الذكية تحسين حياتك اليومية وتقليل استهلاك الطاقة.',
      date: '2025-03-10',
      readTime: '٦ دقائق قراءة',
      category: 'الأجهزة المنزلية',
      author: 'ديفيد وانغ',
    },
  ],
};

export async function generateMetadata({ params }) {
  const { lang } = params;
  return {
    title: `Blog | House Plus Ltd`,
    description: `Latest news, insights, and updates from House Plus Ltd`,
  };
}

export default function BlogPage({ params }) {
  const { lang } = params;
  const posts = blogPostsConfig[lang] || blogPostsConfig.en;
  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  return (
    <>
      <div className="bg-gradient-to-r from-primary/5 to-secondary/5 py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold mb-4">
            {lang === 'en' ? 'Blog' : lang === 'fr' ? 'Blog' : lang === 'es' ? 'Blog' : 'المدونة'}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {lang === 'en' ? 'Latest news, insights, and updates from House Plus Ltd' : 
             lang === 'fr' ? 'Dernières nouvelles, informations et mises à jour de House Plus Ltd' : 
             lang === 'es' ? 'Últimas noticias, información y actualizaciones de House Plus Ltd' : 
             'أحدث الأخبار والرؤى والتحديثات من هاوس بلس المحدودة'}
          </p>
        </div>
      </div>
      
      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article 
                key={index} 
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                
                <div className="p-6">
                  <div className={`flex items-center gap-3 text-sm text-gray-500 mb-3 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">
                      {post.category}
                    </span>
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className={`text-xl font-bold mb-3 hover:text-primary transition ${dir === 'rtl' ? 'text-right' : ''}`}>
                    <Link href={`/${lang}/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className={`text-gray-600 mb-4 ${dir === 'rtl' ? 'text-right' : ''}`}>
                    {post.excerpt}
                  </p>
                  
                  <div className={`flex items-center justify-between pt-4 border-t ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                    <span className="text-sm text-gray-500">
                      {lang === 'en' ? 'By' : lang === 'fr' ? 'Par' : lang === 'es' ? 'Por' : 'بواسطة'} {post.author}
                    </span>
                    <Link 
                      href={`/${lang}/blog/${post.slug}`}
                      className="text-primary font-semibold hover:underline inline-flex items-center gap-1"
                    >
                      {lang === 'en' ? 'Read More' : lang === 'fr' ? 'Lire la suite' : lang === 'es' ? 'Leer más' : 'اقرأ المزيد'}
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
