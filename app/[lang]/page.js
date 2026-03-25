import Hero from '@/components/Hero';
import About from '@/components/About';
import Products from '@/components/Products';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';

export default function HomePage() {
  return (
    <>
      <a href="#main-content" className="skip-to-content">Skip to main content</a>
      <main id="main-content">
        <Hero />
        <About />
        <Products />
        <Services />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
}