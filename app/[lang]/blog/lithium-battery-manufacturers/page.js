export async function generateMetadata({ params }) {
  const { lang } = params;
  
  const titles = {
    en: 'Top 5 Lithium Battery Manufacturers for European Distributors',
    fr: 'Top 5 des fabricants de batteries lithium pour les distributeurs européens',
    es: 'Top 5 fabricantes de baterías de litio para distribuidores europeos',
    ar: 'أفضل 5 مصنعي بطاريات الليثيوم للموزعين الأوروبيين',
  };
  
  return {
    title: `${titles[lang] || titles.en} | House Plus Ltd Blog`,
    description: 'Comprehensive guide to the top 5 lithium battery manufacturers for European distributors. Compare features, certifications, and customization options.',
  };
}

export default function LithiumBatteryGuidePage({ params }) {
  const { lang } = params;
  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  const content = {
    en: {
      title: 'Top 5 Lithium Battery Manufacturers for European Distributors',
      author: 'House Plus Ltd',
      date: '2026-04-20',
      intro: 'Europe is rapidly adopting residential and commercial battery storage. With high electricity prices and government incentives, demand for lithium batteries has grown over 40% year-over-year. But for distributors, finding the right manufacturing partner is critical – battery quality, certifications, and supply chain reliability directly impact your reputation.',
      section1: 'What European Distributors Should Look For',
      requirements: [
        'CE certification (including LVD, EMC, RoHS, and RED for communication modules)',
        'TUV or VDE reports – Often required for utility rebate programs',
        'UN38.3 – Required for air and sea transport',
        'Battery passport readiness – Upcoming EU regulation requiring full material traceability',
        'Warehouse in EU – Reduces lead times and handles returns locally',
      ],
      section2: 'The 5 Manufacturers',
      manufacturers: [
        {
          name: 'BYD (Build Your Dreams)',
          hq: 'China (Shenzhen)',
          eu: 'Warehouse in Rotterdam, NL',
          strengths: ['Vertically integrated – makes own cells', 'Strong brand recognition in Europe', '10-year warranty standard'],
          bestFor: 'Large distributors requiring volume and established brand support.',
          consideration: 'Higher minimum order quantities; less flexibility for custom branding.',
        },
        {
          name: 'Sungrow',
          hq: 'China (Hefei)',
          eu: 'Offices in Germany, UK, Netherlands',
          strengths: ['Originally an inverter company – offers complete storage systems', 'Strong technical support in Europe', 'Extensive certification portfolio'],
          bestFor: 'Distributors who also sell Sungrow inverters (single-brand solution).',
          consideration: 'Battery only works optimally with Sungrow inverters.',
        },
        {
          name: 'Pylontech',
          hq: 'China (Shanghai)',
          eu: 'Multiple warehouses across EU',
          strengths: ['Specializes in LFP battery modules only', 'High compatibility with most hybrid inverters (over 30 brands)', 'Very competitive pricing'],
          bestFor: 'Distributors needing flexible, compatible batteries for various inverter brands.',
          consideration: 'Less customization for enclosure design or BMS software.',
        },
        {
          name: 'Growatt',
          hq: 'China (Shenzhen)',
          eu: 'Warehouse in Netherlands, Spain, Italy',
          strengths: ['Aggressive pricing on complete storage kits', 'Good warranty terms (up to 10 years)', 'Easy-to-use monitoring platform'],
          bestFor: 'Price-sensitive residential projects.',
          consideration: 'Battery cells are sourced from third parties.',
        },
        {
          name: 'House Plus Ltd',
          hq: 'China (Foshan, Guangdong)',
          eu: 'Direct shipping to EU ports; partner warehouses in development',
          strengths: ['Full customization – Logo, enclosure color, BMS parameters, packaging', 'Low MOQ – Ideal for startups and regional distributors', 'Fast sample development – Prototypes in 15-20 working days', 'Certification support – We manage CE, TUV, UN38.3 documentation', '20,000m² smart factory – Scalable production'],
          bestFor: 'European distributors wanting their own brand (private label) with flexible order quantities.',
          consideration: 'Newer to European market; brand recognition building.',
        },
      ],
      section3: 'Comparison Summary',
      comparisonNote: 'See detailed comparison table below for customization, MOQ, EU warehouse, and cell source information.',
      section4: 'Recommendation for European Distributors',
      recommendations: [
        'If you want an established brand → BYD or Sungrow',
        'If you need broad inverter compatibility → Pylontech',
        'If price is your primary concern → Growatt',
        'If you want to build your own brand → House Plus Ltd offers the most flexibility for private labeling',
      ],
      section5: 'Next Steps',
      nextSteps: 'House Plus Ltd can provide:',
      nextStepsList: [
        'Sample batteries for testing with your preferred inverters',
        'CE/TUV-ready documentation for your market registration',
        'Custom BMS settings to match local grid requirements',
      ],
      cta: 'Request a sample or get a quote for your first test order →',
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
              <ul className="list-disc list-inside space-y-2 mb-8">
                {c.requirements?.map((req, idx) => <li key={idx} className="ml-4">{req}</li>)}
              </ul>
            </>
          )}

          {c.section2 && (
            <>
              <h2 className="text-3xl font-bold mt-12 mb-6">{c.section2}</h2>
              {c.manufacturers?.map((mfg, idx) => (
                <div key={idx} className="mb-10 pb-8 border-b border-gray-200">
                  <h3 className="text-2xl font-bold mb-3">{idx + 1}. {mfg.name}</h3>
                  <p className="mb-2"><strong>Headquarters:</strong> {mfg.hq}</p>
                  <p className="mb-4"><strong>European presence:</strong> {mfg.eu}</p>
                  <div className="mb-4">
                    <strong>Strengths:</strong>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      {mfg.strengths?.map((s, i) => <li key={i}>{s}</li>)}
                    </ul>
                  </div>
                  <p className="mb-2"><strong>Best for:</strong> {mfg.bestFor}</p>
                  <p><strong>Consideration:</strong> {mfg.consideration}</p>
                </div>
              ))}
            </>
          )}

          {c.section3 && (
            <>
              <h2 className="text-3xl font-bold mt-12 mb-6">{c.section3}</h2>
              <p className="mb-4">{c.comparisonNote}</p>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse border border-gray-300 text-sm">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-3 text-left">Manufacturer</th>
                      <th className="border border-gray-300 p-3 text-left">Customization</th>
                      <th className="border border-gray-300 p-3 text-left">MOQ</th>
                      <th className="border border-gray-300 p-3 text-left">EU Warehouse</th>
                      <th className="border border-gray-300 p-3 text-left">Cell Source</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="border border-gray-300 p-3"><strong>BYD</strong></td>
                      <td className="border border-gray-300 p-3">Low</td>
                      <td className="border border-gray-300 p-3">High</td>
                      <td className="border border-gray-300 p-3">Yes</td>
                      <td className="border border-gray-300 p-3">In-house</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3"><strong>Sungrow</strong></td>
                      <td className="border border-gray-300 p-3">Medium</td>
                      <td className="border border-gray-300 p-3">Medium-High</td>
                      <td className="border border-gray-300 p-3">Yes</td>
                      <td className="border border-gray-300 p-3">In-house</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 p-3"><strong>Pylontech</strong></td>
                      <td className="border border-gray-300 p-3">Low-Medium</td>
                      <td className="border border-gray-300 p-3">Medium</td>
                      <td className="border border-gray-300 p-3">Yes</td>
                      <td className="border border-gray-300 p-3">Third-party</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3"><strong>Growatt</strong></td>
                      <td className="border border-gray-300 p-3">Medium</td>
                      <td className="border border-gray-300 p-3">Medium</td>
                      <td className="border border-gray-300 p-3">Yes</td>
                      <td className="border border-gray-300 p-3">Third-party</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 p-3"><strong>House Plus Ltd</strong></td>
                      <td className="border border-gray-300 p-3">High</td>
                      <td className="border border-gray-300 p-3">Low</td>
                      <td className="border border-gray-300 p-3">Developing</td>
                      <td className="border border-gray-300 p-3">Tier-1 partners</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          )}

          {c.section4 && (
            <>
              <h2 className="text-3xl font-bold mt-12 mb-6">{c.section4}</h2>
              <ul className="list-disc list-inside space-y-2 mb-8">
                {c.recommendations?.map((rec, idx) => <li key={idx} className="ml-4">{rec}</li>)}
              </ul>
            </>
          )}

          {c.section5 && (
            <>
              <h2 className="text-3xl font-bold mt-12 mb-6">{c.section5}</h2>
              <p className="mb-4">{c.nextSteps}</p>
              <ol className="list-decimal list-inside space-y-2 mb-8">
                {c.nextStepsList?.map((step, idx) => <li key={idx} className="ml-4">{step}</li>)}
              </ol>
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
