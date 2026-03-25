import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getBlogPost, getBlogPosts } from '@/lib/blogData';
import { translations } from '@/lib/i18n';

// 生成静态路径（可选，提高性能）
export async function generateStaticParams() {
  const langs = ['en', 'fr', 'es', 'ar'];
  const paths = [];
  
  for (const lang of langs) {
    const posts = getBlogPosts(lang);
    for (const post of posts) {
      paths.push({ lang, slug: post.slug });
    }
  }
  
  return paths;
}

export async function generateMetadata({ params }) {
  const { lang, slug } = params;
  const post = getBlogPost(lang, slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }
  
  return {
    title: `${post.title} | House Plus Ltd Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }) {
  const { lang, slug } = params;
  const post = getBlogPost(lang, slug);
  const dir = lang === 'ar' ? 'rtl' : 'ltr';
  
  if (!post) {
    notFound();
  }
  
  return (
    <>
      <div className="bg-gradient-to-r from-primary/5 to-secondary/5 py-16">
        <div className="container-custom">
          <Link 
            href={`/${lang}/blog`}
            className="text-primary hover:underline inline-flex items-center gap-1 mb-6"
          >
            ← {lang === 'en' ? 'Back to Blog' : lang === 'fr' ? 'Retour au Blog' : lang === 'es' ? 'Volver al Blog' : 'العودة إلى المدونة'}
          </Link>
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${dir === 'rtl' ? 'text-right' : ''}`}>
            {post.title}
          </h1>
          <div className={`flex items-center gap-4 text-gray-500 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
            <span>•</span>
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
              {post.category}
            </span>
          </div>
          <p className={`text-gray-600 mt-4 text-lg ${dir === 'rtl' ? 'text-right' : ''}`}>
            {post.excerpt}
          </p>
        </div>
      </div>
      
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className={`prose prose-lg max-w-none ${dir === 'rtl' ? 'prose-rtl' : ''}`}
                 dangerouslySetInnerHTML={{ __html: post.content }} />
            
            <div className="border-t pt-8 mt-8 text-center">
              <Link 
                href={`/${lang}/contact`}
                className="btn-primary inline-flex items-center gap-2"
              >
                {lang === 'en' ? 'Contact Us for More Information' : 
                 lang === 'fr' ? 'Contactez-nous pour plus d\'informations' : 
                 lang === 'es' ? 'Contáctenos para más información' : 
                 'اتصل بنا لمزيد من المعلومات'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
