import { Helmet } from 'react-helmet-async'

const BloodSugarPage = () => {
  return (
    <>
      <Helmet>
        <title>Blood Sugar Regulation - Triangle of Disease | Daily with Doc & Becca</title>
        <meta name="description" content="Learn how blood sugar regulation impacts overall health and serves as a critical point in the Triangle of Disease." />
        <meta property="og:title" content="Blood Sugar Regulation - Triangle of Disease | Daily with Doc & Becca" />
        <meta property="og:description" content="Learn how blood sugar regulation impacts overall health and serves as a critical point in the Triangle of Disease." />
        <meta property="og:image" content="/assets/blood-sugar.jpg" />
        <meta property="og:url" content="https://triangleofdisease.netlify.app/blood-sugar" />
        <link rel="canonical" href="https://triangleofdisease.netlify.app/blood-sugar" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-blue-sky text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Point 2: Blood Sugar Regulation</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Unstable blood sugar creates a cascade of hormonal imbalances, energy fluctuations, and cellular stress throughout the body.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-blue-sky">Understanding Blood Sugar Regulation</h2>
            <p className="mb-6 text-lg">
              Blood sugar regulation is the body's ability to maintain glucose levels within a healthy range. 
              This delicate balance affects every cell in your body and is critical for sustained energy, hormonal health, and long-term wellness.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-blue-sky mt-10">Key Components of Blood Sugar Health</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg shadow">
                <h4 className="font-bold text-xl mb-3 text-blue-sky">Insulin Sensitivity</h4>
                <p>
                  Insulin is the hormone that allows cells to take in glucose for energy. 
                  When cells become resistant to insulin's effects, glucose remains in the bloodstream, triggering a cascade of health issues.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow">
                <h4 className="font-bold text-xl mb-3 text-blue-sky">Glycemic Response</h4>
                <p>
                  How quickly your blood sugar rises and falls after eating affects your energy, mood, and hunger patterns. 
                  Rapid spikes and crashes create stress on the body and contribute to metabolic dysfunction.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow">
                <h4 className="font-bold text-xl mb-3 text-blue-sky">Metabolic Flexibility</h4>
                <p>
                  The ability to efficiently switch between using carbohydrates and fats for fuel is crucial for stable energy and hormonal balance. 
                  Many people have lost this natural flexibility due to dietary patterns and lifestyle factors.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow">
                <h4 className="font-bold text-xl mb-3 text-blue-sky">Glycation</h4>
                <p>
                  When elevated glucose binds to proteins in the body, it forms advanced glycation end products (AGEs) that damage tissues and accelerate aging. 
                  This process contributes to inflammation and degenerative conditions throughout the body.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4 text-blue-sky mt-10">Signs Your Blood Sugar Regulation Needs Support</h3>
            <ul className="list-disc pl-6 mb-10 space-y-2">
              <li>Energy crashes, especially after meals</li>
              <li>Constant hunger or cravings, particularly for sweets</li>
              <li>Difficulty concentrating or brain fog</li>
              <li>Morning fatigue or waking during the night</li>
              <li>Increased thirst and frequent urination</li>
              <li>Slow healing of wounds or infections</li>
              <li>Weight gain, especially around the abdomen</li>
              <li>Mood swings, irritability, or anxiety</li>
            </ul>

            <div className="bg-blue-50 p-8 rounded-lg mb-10">
              <h3 className="text-2xl font-bold mb-4 text-blue-sky">How Blood Sugar Impacts the Triangle</h3>
              <p className="mb-4">
                Blood sugar regulation directly affects the other two points of the Triangle of Disease:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Impact on Digestive System:</strong> Blood sugar fluctuations affect gut microbiome balance and intestinal permeability.</li>
                <li><strong>Impact on Adrenal-Thyroid Function:</strong> Blood sugar crashes trigger stress hormone release and disrupt thyroid function.</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mb-4 text-blue-sky">Strategies for Blood Sugar Health</h3>
            <p className="mb-6">
              Improving your blood sugar regulation requires a comprehensive approach that addresses diet, lifestyle, and targeted supplementation.
            </p>
            <p className="mb-10">
              Visit our <a href="/health-strategies" className="text-blue-sky font-bold hover:underline">Health Strategies</a> page to learn specific steps for supporting balanced blood sugar.
            </p>

            {/* Schema.org structured data for SEO */}
            <script type="application/ld+json">
              {`
                {
                  "@context": "https://schema.org",
                  "@type": "MedicalWebPage",
                  "name": "Blood Sugar Regulation - Triangle of Disease",
                  "description": "Learn how blood sugar regulation impacts overall health and serves as a critical point in the Triangle of Disease.",
                  "url": "https://triangleofdisease.netlify.app/blood-sugar",
                  "author": {
                    "@type": "Organization",
                    "name": "Daily with Doc & Becca"
                  },
                  "about": {
                    "@type": "MedicalCondition",
                    "name": "Blood Sugar Dysregulation",
                    "description": "Conditions related to the body's ability to regulate blood glucose levels."
                  }
                }
              `}
            </script>
          </div>
        </div>
      </section>
    </>
  )
}

export default BloodSugarPage
