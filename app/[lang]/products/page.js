import Products from '@/components/Products';
import { translations } from '@/lib/i18n';

export async function generateMetadata({ params }) {
  const { lang } = params;
  const t = translations[lang]?.products || translations.en.products;
  
  return {
    title: `${t.title} | House Plus Ltd`,
    description: t.subtitle,
  };
}

export default function ProductsPage() {
  return (
    <>
      <div className="bg-gradient-to-r from-primary/5 to-secondary/5 py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold mb-4">Our Products</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of high-quality products, designed for global markets
          </p>
        </div>
      </div>
      <Products />
    </>
  );
}