export async function generateMetadata({ params }) {
  const { lang } = params;
  
  const titles = {
    en: 'How to Choose the Right Solar Inverter for Your Home',
    fr: 'Comment choisir le bon onduleur solaire pour votre maison',
    es: 'Cómo elegir el inversor solar adecuado para su hogar',
    ar: 'كيفية اختيار محول الطاقة الشمسية المناسب لمنزلك',
  };
  
  return {
    title: `${titles[lang] || titles.en} | House Plus Ltd Blog`,
    description: 'Learn how to choose the right solar inverter for your home. Comparison of string inverters, microinverters, and hybrid inverters.',
  };
}

export default function SolarInverterGuidePage({ params }) {
  const { lang } = params;
  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  const content = {
    en: {
      title: 'How to Choose the Right Solar Inverter for Your Home',
      author: 'House Plus Ltd',
      date: '2026-04-20',
      intro: 'The solar inverter is the brain of any home solar system. While solar panels capture energy, it\'s the inverter that converts DC power into usable AC power, manages system performance, and ensures safety. Choosing the wrong inverter can lead to 15-20% energy loss or premature system failure.',
      section1: 'Three Types of Solar Inverters for Homes',
      section1Content: [
        {
          title: '1. String Inverters',
          description: 'How they work: Solar panels are connected in a "string" to a single inverter.',
          bestFor: 'Homes with unshaded, south-facing roofs and consistent sunlight.',
          advantages: ['Lowest cost per watt', 'Simple design, easier to maintain', 'Proven technology with 15+ year lifespan'],
          disadvantages: ['Performance of all panels drops to the lowest-performing panel', 'No panel-level monitoring'],
        },
        {
          title: '2. Microinverters',
          description: 'How they work: A small inverter is installed under each solar panel.',
          bestFor: 'Roofs with shading issues, multiple orientations, or complex designs.',
          advantages: ['Each panel operates independently', 'Panel-level monitoring', 'Safer because only low-voltage DC runs on the roof'],
          disadvantages: ['Higher upfront cost ($1,000-$2,000 more for 5kW)', 'More components that could fail'],
        },
        {
          title: '3. Hybrid Inverters',
          description: 'How they work: Combines a solar inverter and a battery inverter in one unit.',
          bestFor: 'Homeowners planning to add battery storage now or in the future.',
          advantages: ['Ready for battery storage', 'Can power critical loads during outages', 'Higher self-consumption (70-90% vs 30-50%)'],
          disadvantages: ['Higher upfront cost', 'More complex programming'],
        },
      ],
      section2: 'Key Technical Specifications to Evaluate',
      specifications: [
        { spec: 'Efficiency', meaning: 'How much DC power converts to AC', recommendation: '>97%' },
        { spec: 'Input Voltage Range', meaning: 'Works with different panel configurations', recommendation: '100-500V for residential' },
        { spec: 'IP Rating', meaning: 'Weather and dust protection', recommendation: 'IP65 for outdoor' },
        { spec: 'Warranty', meaning: 'Standard for residential inverters', recommendation: '5-10 years' },
        { spec: 'Certifications', meaning: 'Required for grid connection', recommendation: 'UL 1741, CE, VDE-AR-N 4105' },
      ],
      section3: '5 Questions to Ask Before Choosing',
      questions: [
        'Does the home have shading issues? If yes, microinverters or power optimizers are worth the extra cost.',
        'Will the homeowner add batteries later? If yes, choose a hybrid inverter.',
        'What is the local grid code? Some utilities require specific certifications.',
        'How important is monitoring? Microinverters offer the best panel-level data.',
        'What is the budget? String inverters are most affordable.',
      ],
      section4: 'Why Work with an OEM Manufacturer Like House Plus Ltd',
      section4Content: 'Sourcing from an experienced OEM partner ensures you get inverters that meet your local market requirements. House Plus Ltd offers:',
      benefits: [
        'Customizable specifications – Match voltage, frequency, and communication protocols to your region',
        'Certification assistance – We help navigate UL, CE, TUV, and other compliance requirements',
        'Flexible MOQ – From test orders to bulk production',
        '15+ years of manufacturing experience – Proven reliability for global distributors',
      ],
      cta: 'Ready to discuss your solar inverter project? Contact our team for a free consultation →',
      backToBlog: '← Back to Blog',
    },
    fr: {
      title: 'Comment choisir le bon onduleur solaire pour votre maison',
      author: 'House Plus Ltd',
      date: '2026-04-20',
      intro: 'L\'onduleur solaire est le cerveau de tout système solaire résidentiel...',
      cta: 'Prêt à discuter de votre projet d\'onduleur solaire? Contactez notre équipe pour une consultation gratuite →',
      backToBlog: '← Retour au Blog',
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
              {c.section1Content?.map((item, idx) => (
                <div key={idx} className="mb-8">
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="mb-3">{item.description}</p>
                  <p className="mb-3"><strong>Best for:</strong> {item.bestFor}</p>
                  <div className="mb-3">
                    <strong>Advantages:</strong>
                    <ul className="list-disc list-inside ml-4">
                      {item.advantages?.map((adv, i) => <li key={i}>{adv}</li>)}
                    </ul>
                  </div>
                  <div>
                    <strong>Disadvantages:</strong>
                    <ul className="list-disc list-inside ml-4">
                      {item.disadvantages?.map((dis, i) => <li key={i}>{dis}</li>)}
                    </ul>
                  </div>
                </div>
              ))}
            </>
          )}

          {c.section2 && (
            <>
              <h2 className="text-3xl font-bold mt-12 mb-6">{c.section2}</h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-3 text-left">Specification</th>
                      <th className="border border-gray-300 p-3 text-left">What It Means</th>
                      <th className="border border-gray-300 p-3 text-left">Recommendation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {c.specifications?.map((item, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="border border-gray-300 p-3"><strong>{item.spec}</strong></td>
                        <td className="border border-gray-300 p-3">{item.meaning}</td>
                        <td className="border border-gray-300 p-3">{item.recommendation}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {c.section3 && (
            <>
              <h2 className="text-3xl font-bold mt-12 mb-6">{c.section3}</h2>
              <ol className="list-decimal list-inside space-y-3 mb-8">
                {c.questions?.map((q, idx) => <li key={idx} className="ml-4">{q}</li>)}
              </ol>
            </>
          )}

          {c.section4 && (
            <>
              <h2 className="text-3xl font-bold mt-12 mb-6">{c.section4}</h2>
              <p className="mb-4">{c.section4Content}</p>
              <ul className="list-disc list-inside space-y-2 mb-8">
                {c.benefits?.map((b, idx) => <li key={idx} className="ml-4">{b}</li>)}
              </ul>
            </>
          )}

          <div className="bg-primary text-white p-8 rounded-lg mt-12 mb-8">
            <p className="text-lg">{c.cta}</p>
          </div>
        </div>

        {/* Back Link */}
        <div className={`mt-12 ${dir === 'rtl' ? 'text-right' : ''}`}>
          <a href={`/${lang}/blog`} className="text-primary hover:underline font-semibold">
            {c.backToBlog}
          </a>
        </div>
      </div>
    </article>
  );
}
