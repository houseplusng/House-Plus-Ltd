export async function generateMetadata({ params }) {
  const { lang } = params;
  
  const titles = {
    en: 'What is the Installation Cost of a 5kW Solar System in the US?',
    fr: 'Quel est le coût d\'installation d\'un système solaire de 5 kW aux États-Unis?',
    es: '¿Cuál es el costo de instalación de un sistema solar de 5 kW en los EE.UU.?',
    ar: 'ما هي تكلفة تثبيت نظام شمسي بقوة 5 كيلوواط في الولايات المتحدة؟',
  };
  
  return {
    title: `${titles[lang] || titles.en} | House Plus Ltd Blog`,
    description: 'Complete breakdown of 5kW solar system costs in the US for 2026. Learn about equipment, labor, and how to reduce installation costs.',
  };
}

export default function SolarCostGuidePage({ params }) {
  const { lang } = params;
  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  const content = {
    en: {
      title: 'What is the Installation Cost of a 5kW Solar System in the US?',
      author: 'House Plus Ltd',
      date: '2026-04-20',
      intro: 'A 5kW solar system is one of the most popular sizes for average American homes. It typically produces 500-700 kWh per month, enough to cover the electricity needs of a 2-3 bedroom home. But for installers and distributors, understanding the real cost breakdown is essential – both for your own pricing and for educating your customers.',
      section1: 'Average 5kW Solar System Cost in the US (2026)',
      costBreakdown: [
        { component: 'Solar panels (15-17 panels, 300-350W each)', low: '$2,500', avg: '$3,500', high: '$4,500' },
        { component: 'Inverter (string or microinverters)', low: '$1,200', avg: '$2,000', high: '$3,500' },
        { component: 'Racking & mounting hardware', low: '$500', avg: '$800', high: '$1,200' },
        { component: 'Electrical components (wiring, disconnects, meter)', low: '$300', avg: '$500', high: '$800' },
        { component: 'Permits & inspection fees', low: '$300', avg: '$600', high: '$1,200' },
        { component: 'Labor & installation', low: '$2,000', avg: '$3,000', high: '$5,000' },
      ],
      totals: [
        { label: 'Total before incentives', low: '$6,800', avg: '$10,400', high: '$16,200' },
        { label: 'Average per watt', low: '$1.36/W', avg: '$2.08/W', high: '$3.24/W' },
      ],
      section2: 'Why Such a Wide Range?',
      factors: [
        {
          title: '1. Equipment Quality',
          items: [
            'Budget tier: Chinese Tier-1 panels + string inverter → $6,800-$8,500',
            'Mid-tier: REC, Qcells, or Longi panels + hybrid inverter → $8,500-$12,000',
            'Premium: SunPower, Panasonic panels + microinverters → $12,000-$16,200',
          ],
        },
        {
          title: '2. Roof Complexity',
          items: [
            'Simple, south-facing asphalt roof → lowest labor cost',
            'Complex tile, slate, or flat roofs with multiple angles → +$1,000-$3,000',
            'Older roofs needing reinforcement → additional $2,000-$5,000',
          ],
        },
        {
          title: '3. Local Permitting & Labor Rates',
          items: [
            'Low-cost states (TX, FL, AZ): $2,000-$2,500 installation',
            'Mid-cost states (CA, NY, MA): $3,000-$4,000 installation',
            'High-cost states (HI, AK): $5,000-$8,000 installation',
          ],
        },
        {
          title: '4. Soft Costs (Financing, Design, Inspections)',
          items: [
            'Design & engineering: $200-$500',
            'Financing fees: $300-$800',
            'Interconnection & utility fees: $200-$500',
          ],
        },
      ],
      section3: 'Cost Breakdown by Component (Average System)',
      breakdown: [
        { category: 'Equipment: $6,300 (61%)', items: ['Panels: $3,500', 'Inverter: $2,000', 'Racking & electrical: $800'] },
        { category: 'Labor & Installation: $3,000 (29%)', items: ['Installation labor: $2,000', 'Permits & inspections: $600', 'Design & engineering: $400'] },
        { category: 'Soft Costs: $1,100 (10%)', items: ['Financing fees: $500', 'Utility interconnection: $300', 'Miscellaneous: $300'] },
      ],
      section4: 'How to Reduce Costs',
      tips: [
        'Choose Tier-1 Chinese panels – 20-30% cheaper than premium brands, still reliable',
        'Use string inverters – $800 cheaper than microinverters (unless shading is an issue)',
        'Optimize roof layout – Fewer penetrations = lower labor costs',
        'Combine with other work – If re-roofing anyway, bundle solar installation',
        'Shop for permits – Some jurisdictions are faster/cheaper than others',
      ],
      section5: 'Why House Plus Ltd for Your Supply Chain',
      section5Content: 'If you\'re an installer or EPC company sourcing components, House Plus Ltd provides:',
      benefits: [
        'Competitive panel pricing – Direct from factory, no middleman markup',
        'Customizable inverters – Match your regional voltage and grid codes',
        'Fast delivery – 30-45 days from order to installation site',
        'Technical support – Our team helps with system design and troubleshooting',
        'Bulk discounts – The more you order, the better your per-unit cost',
      ],
      cta: 'Ready to source components for your next project? Contact House Plus Ltd for a volume quote →',
      backToBlog: '← Back to Blog',
    },
  };

  const c = content[lang] || content.en;

  return (
    <article className={`min-h-screen bg-white py-12 ${dir === 'rtl' ? 'rtl' : 'ltr'}`}>
      <div className="container-custom max-w-4xl">
        {/* Header */}
        <div className={`mb-8 ${dir === 'rtl' ? 'text-right' : ''}`}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-dark">{c.title}</h1>
          <div className="flex gap-4 text-gray-600 mb-6">
            <span>By {c.author}</span>
            <span>•</span>
            <span>{c.date}</span>
          </div>
        </div>

        {/* Content */}
        <div className={`prose prose-lg max-w-none ${dir === 'rtl' ? 'text-right' : ''}`}>
          <p className="text-xl text-gray-700 mb-8">{c.intro}</p>

          {c.section1 && (
            <>
              <h2 className="text-3xl font-bold mt-12 mb-6">{c.section1}</h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse border border-gray-300 text-sm">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-3 text-left">Cost Component</th>
                      <th className="border border-gray-300 p-3 text-right">Low Range</th>
                      <th className="border border-gray-300 p-3 text-right">Average</th>
                      <th className="border border-gray-300 p-3 text-right">High Range</th>
                    </tr>
                  </thead>
                  <tbody>
                    {c.costBreakdown?.map((item, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="border border-gray-300 p-3">{item.component}</td>
                        <td className="border border-gray-300 p-3 text-right">{item.low}</td>
                        <td className="border border-gray-300 p-3 text-right">{item.avg}</td>
                        <td className="border border-gray-300 p-3 text-right">{item.high}</td>
                      </tr>
                    ))}
                    {c.totals?.map((item, idx) => (
                      <tr key={`total-${idx}`} className="bg-primary text-white font-bold">
                        <td className="border border-gray-300 p-3">{item.label}</td>
                        <td className="border border-gray-300 p-3 text-right">{item.low}</td>
                        <td className="border border-gray-300 p-3 text-right">{item.avg}</td>
                        <td className="border border-gray-300 p-3 text-right">{item.high}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {c.section2 && (
            <>
              <h2 className="text-3xl font-bold mt-12 mb-6">{c.section2}</h2>
              {c.factors?.map((factor, idx) => (
                <div key={idx} className="mb-6">
                  <h3 className="text-2xl font-bold mb-3">{factor.title}</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    {factor.items?.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                </div>
              ))}
            </>
          )}

          {c.section3 && (
            <>
              <h2 className="text-3xl font-bold mt-12 mb-6">{c.section3}</h2>
              {c.breakdown?.map((item, idx) => (
                <div key={idx} className="mb-6">
                  <h3 className="text-xl font-bold mb-2">{item.category}</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    {item.items?.map((i, j) => <li key={j}>{i}</li>)}
                  </ul>
                </div>
              ))}
            </>
          )}

          {c.section4 && (
            <>
              <h2 className="text-3xl font-bold mt-12 mb-6">{c.section4}</h2>
              <ol className="list-decimal list-inside space-y-2 mb-8">
                {c.tips?.map((tip, idx) => <li key={idx} className="ml-4">{tip}</li>)}
              </ol>
            </>
          )}

          {c.section5 && (
            <>
              <h2 className="text-3xl font-bold mt-12 mb-6">{c.section5}</h2>
              <p className="mb-4">{c.section5Content}</p>
              <ul className="list-disc list-inside space-y-2 mb-8">
                {c.benefits?.map((b, idx) => <li key={idx} className="ml-4">{b}</li>)}
              </ul>
            </>
          )}

          <div className="bg-primary text-white p-8 rounded-lg mt-12 mb-8">
            <p className="text-lg">{c.cta}</p>
          </div>
        </div>

        {/* CTA and Back Links */}
        <div className={`mt-12 space-y-6 ${dir === 'rtl' ? 'text-right' : ''}`}>
          {/* WhatsApp CTA */}
          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded">
            <p className="text-gray-700 mb-3">Have questions about this article?</p>
            <a 
              href="https://wa.me/8615578119543?text=I%20have%20a%20question%20about%20your%20blog%20article" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.947 1.227l-.356.214-.369-.057c-1.279-.195-2.497-.537-3.639-1.06L2.5 3.702l.645 2.11c-.339 1.005-.512 2.055-.512 3.107 0 5.289 4.418 9.583 9.85 9.583 1.326 0 2.618-.24 3.856-.707l.355-.124.37.057c1.278.194 2.497.537 3.638 1.06l2.327 1.06-.646-2.11c.34-1.006.513-2.056.513-3.107 0-5.289-4.418-9.583-9.85-9.583"/>
              </svg>
              Contact us on WhatsApp
            </a>
          </div>

          {/* Back Link */}
          <a href={`/${lang}/blog`} className="text-primary hover:underline font-semibold">
            {c.backToBlog}
          </a>
        </div>
      </div>
    </article>
  );
}
