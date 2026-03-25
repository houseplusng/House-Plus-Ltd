// 博客文章数据（后续可以替换为数据库或 CMS）

export const blogPosts = {
  en: [
    {
      slug: 'why-choose-oem-manufacturer-china',
      title: 'Why Choose an OEM Manufacturer in China?',
      excerpt: 'Discover the key benefits of partnering with Chinese OEM manufacturers for your business.',
      content: `
        <h2>The Rise of Chinese Manufacturing</h2>
        <p>China has established itself as the world's manufacturing hub, offering unparalleled advantages for businesses looking to produce high-quality products at competitive prices.</p>
        
        <h2>Key Benefits of OEM Manufacturing in China</h2>
        <ul>
          <li><strong>Cost-Effective Production:</strong> Lower labor and material costs translate to better margins.</li>
          <li><strong>Advanced Manufacturing Capabilities:</strong> Access to state-of-the-art facilities and equipment.</li>
          <li><strong>Skilled Workforce:</strong> Experienced engineers and production specialists.</li>
          <li><strong>Scalability:</strong> Ability to handle both small batches and mass production.</li>
        </ul>
        
        <h2>Why House Plus Ltd?</h2>
        <p>With 15+ years of experience, ISO9001 certification, and a 20,000㎡ smart factory, House Plus Ltd delivers reliability and quality you can trust.</p>
        
        <h2>Get Started Today</h2>
        <p>Contact our team to discuss your OEM manufacturing needs and get a free quote within 24 hours.</p>
      `,
      date: '2025-03-20',
      author: 'Jack Zhang',
      readTime: '5 min read',
      category: 'Manufacturing',
    },
    {
      slug: 'solar-energy-trends-2025',
      title: 'Solar Energy Trends to Watch in 2025',
      excerpt: 'Stay ahead of the curve with these emerging trends in the solar energy industry.',
      content: `
        <h2>The Growing Solar Market</h2>
        <p>The global solar energy market continues to expand rapidly, driven by falling costs and increasing environmental awareness.</p>
        
        <h2>Top Solar Trends for 2025</h2>
        <ul>
          <li><strong>Bifacial Solar Panels:</strong> Capturing sunlight from both sides for increased efficiency.</li>
          <li><strong>Solar + Storage Integration:</strong> Combining solar panels with battery storage for 24/7 power.</li>
          <li><strong>Building-Integrated Photovoltaics (BIPV):</strong> Solar materials that blend seamlessly with architecture.</li>
          <li><strong>Smart Solar Inverters:</strong> Enhanced grid management and monitoring capabilities.</li>
        </ul>
        
        <h2>How House Plus Ltd Can Help</h2>
        <p>We offer complete solar solutions including panels, inverters, and battery storage systems. Our products are TUV and IEC certified for international markets.</p>
        
        <h2>Ready to Go Solar?</h2>
        <p>Contact our solar experts to discuss your renewable energy project today.</p>
      `,
      date: '2025-03-15',
      author: 'Maria Chen',
      readTime: '4 min read',
      category: 'Solar Energy',
    },
    {
      slug: 'smart-home-appliances-guide',
      title: 'The Ultimate Guide to Smart Home Appliances',
      excerpt: 'Learn how smart appliances can improve your daily life and reduce energy consumption.',
      content: `
        <h2>What Are Smart Home Appliances?</h2>
        <p>Smart home appliances are devices that connect to the internet, allowing remote control, automation, and energy monitoring.</p>
        
        <h2>Benefits of Smart Appliances</h2>
        <ul>
          <li><strong>Energy Efficiency:</strong> Smart appliances optimize energy usage, reducing utility bills.</li>
          <li><strong>Convenience:</strong> Control appliances from anywhere using your smartphone.</li>
          <li><strong>Predictive Maintenance:</strong> Receive alerts when maintenance is needed.</li>
          <li><strong>Integration:</strong> Works with voice assistants like Alexa and Google Home.</li>
        </ul>
        
        <h2>Popular Smart Appliances</h2>
        <ul>
          <li>Smart Air Fryers</li>
          <li>Smart Vacuum Cleaners</li>
          <li>Smart Blenders and Food Processors</li>
          <li>Smart Electric Kettles</li>
        </ul>
        
        <h2>House Plus Ltd Smart Appliances</h2>
        <p>Our smart appliances combine innovative design with energy efficiency. All products are CE and RoHS certified.</p>
      `,
      date: '2025-03-10',
      author: 'David Wang',
      readTime: '6 min read',
      category: 'Home Appliances',
    },
  ],
  fr: [
    {
      slug: 'pourquoi-choisir-fabricant-oem-chine',
      title: 'Pourquoi choisir un fabricant OEM en Chine ?',
      excerpt: 'Découvrez les avantages clés de collaborer avec des fabricants OEM chinois pour votre entreprise.',
      content: `<h2>L'essor de la fabrication chinoise</h2><p>La Chine s'est imposée comme le centre de fabrication mondial...</p>`,
      date: '2025-03-20',
      author: 'Jack Zhang',
      readTime: '5 min de lecture',
      category: 'Fabrication',
    },
    {
      slug: 'tendances-energie-solaire-2025',
      title: 'Tendances de l\'énergie solaire à surveiller en 2025',
      excerpt: 'Restez en avance avec ces tendances émergentes dans l\'industrie solaire.',
      content: `<h2>Le marché solaire en croissance</h2><p>Le marché mondial de l'énergie solaire continue de s'expanser...</p>`,
      date: '2025-03-15',
      author: 'Maria Chen',
      readTime: '4 min de lecture',
      category: 'Énergie Solaire',
    },
  ],
  es: [
    {
      slug: 'por-que-elegir-fabricante-oem-china',
      title: '¿Por qué elegir un fabricante OEM en China?',
      excerpt: 'Descubra los beneficios clave de asociarse con fabricantes OEM chinos.',
      content: `<h2>El auge de la fabricación china</h2><p>China se ha establecido como el centro de fabricación mundial...</p>`,
      date: '2025-03-20',
      author: 'Jack Zhang',
      readTime: '5 min de lectura',
      category: 'Fabricación',
    },
  ],
  ar: [
    {
      slug: 'لماذا-تختار-مصنع-أويم-في-الصين',
      title: 'لماذا تختار مصنع OEM في الصين؟',
      excerpt: 'اكتشف الفوائد الرئيسية للشراكة مع مصنعي OEM في الصين.',
      content: `<h2>صعود التصنيع الصيني</h2><p>لقد أثبتت الصين نفسها كمركز تصنيع عالمي...</p>`,
      date: '2025-03-20',
      author: 'جاك تشانغ',
      readTime: '٥ دقائق قراءة',
      category: 'تصنيع',
    },
  ],
};

// 获取指定语言的所有文章
export function getBlogPosts(lang) {
  return blogPosts[lang] || blogPosts.en;
}

// 获取指定语言的单篇文章
export function getBlogPost(lang, slug) {
  const posts = getBlogPosts(lang);
  return posts.find(post => post.slug === slug);
}
