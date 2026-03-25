import Blog from '@/components/Blog';
import { getBlogPosts } from '@/lib/blogData';
import { translations } from '@/lib/i18n';

export async function generateMetadata({ params }) {
  const { lang } = params;
  
  return {
    title: `Blog | House Plus Ltd`,
    description: `Latest news, insights, and updates from House Plus Ltd - ${translations[lang]?.tagline || 'Professional Manufacturer'}`,
  };
}

export default function BlogPage({ params }) {
  const { lang } = params;
  const posts = getBlogPosts(lang);
  
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
      <Blog posts={posts} />
    </>
  );
}
