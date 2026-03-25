'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Blog({ posts }) {
  const pathname = usePathname();
  const currentLang = pathname.split('/')[1] || 'en';
  const dir = currentLang === 'ar' ? 'rtl' : 'ltr';

  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article 
              key={index} 
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              {/* 文章图片占位 */}
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              
              <div className="p-6">
                {/* 分类和日期 */}
                <div className={`flex items-center gap-3 text-sm text-gray-500 mb-3 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">
                    {post.category}
                  </span>
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                
                {/* 标题 */}
                <h3 className={`text-xl font-bold mb-3 hover:text-primary transition ${dir === 'rtl' ? 'text-right' : ''}`}>
                  <Link href={`/${currentLang}/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>
                
                {/* 摘要 */}
                <p className={`text-gray-600 mb-4 ${dir === 'rtl' ? 'text-right' : ''}`}>
                  {post.excerpt}
                </p>
                
                {/* 作者和阅读更多 */}
                <div className={`flex items-center justify-between pt-4 border-t ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                  <span className="text-sm text-gray-500">
                    {currentLang === 'en' ? 'By' : currentLang === 'fr' ? 'Par' : currentLang === 'es' ? 'Por' : 'بواسطة'} {post.author}
                  </span>
                  <Link 
                    href={`/${currentLang}/blog/${post.slug}`}
                    className="text-primary font-semibold hover:underline inline-flex items-center gap-1"
                  >
                    {currentLang === 'en' ? 'Read More' : currentLang === 'fr' ? 'Lire la suite' : currentLang === 'es' ? 'Leer más' : 'اقرأ المزيد'}
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
