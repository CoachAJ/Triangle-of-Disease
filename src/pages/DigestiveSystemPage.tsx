import { Helmet } from 'react-helmet-async'

const DigestiveSystemPage = () => {
  return (
    <>
      <Helmet>
        <title>Digestive System - Triangle of Disease | Daily with Doc & Becca</title>
        <meta name="description" content="Learn how your digestive system impacts overall health and serves as a critical point in the Triangle of Disease." />
        <meta property="og:title" content="Digestive System - Triangle of Disease | Daily with Doc & Becca" />
        <meta property="og:description" content="Learn how your digestive system impacts overall health and serves as a critical point in the Triangle of Disease." />
        <meta property="og:image" content="/assets/digestive-system.jpg" />
        <meta property="og:url" content="https://triangleofdisease.netlify.app/digestive-system" />
        <link rel="canonical" href="https://triangleofdisease.netlify.app/digestive-system" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-health-blue text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Point 1: Digestive System</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Your digestive system is the gateway to health. When compromised, it affects nutrient absorption and allows toxins to enter the bloodstream.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-health-blue">Understanding Digestive Health</h2>
            <p className="mb-6 text-lg">
              The digestive system is often called "the foundation of health" because it's responsible for breaking down food, 
              absorbing nutrients, and eliminating waste. When this system is compromised, it affects every other system in the body.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-health-blue mt-10">Key Components of Digestive Health</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg shadow">
                <h4 className="font-bold text-xl mb-3 text-health-blue">Gut Microbiome</h4>
                <p>
                  The trillions of bacteria in your gut play a crucial role in digestion, immune function, and even mood regulation. 
                  Imbalances in this ecosystem can lead to inflammation, nutrient deficiencies, and systemic health issues.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow">
                <h4 className="font-bold text-xl mb-3 text-health-blue">Intestinal Barrier</h4>
                <p>
                  The lining of your intestines forms a critical barrier between your digestive tract and bloodstream. 
                  When this barrier becomes compromised (leaky gut), it allows undigested food particles and toxins to enter the bloodstream.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow">
                <h4 className="font-bold text-xl mb-3 text-health-blue">Digestive Enzymes</h4>
                <p>
                  These specialized proteins break down food into nutrients your body can absorb. 
                  Insufficient enzyme production can lead to malabsorption, nutrient deficiencies, and digestive discomfort.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow">
                <h4 className="font-bold text-xl mb-3 text-health-blue">Stomach Acid</h4>
                <p>
                  Proper levels of stomach acid are essential for protein digestion, mineral absorption, and protection against pathogens. 
                  Low stomach acid can contribute to nutritional deficiencies and bacterial overgrowth.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4 text-health-blue mt-10">Signs Your Digestive System Needs Support</h3>
            <ul className="list-disc pl-6 mb-10 space-y-2">
              <li>Frequent bloating, gas, or digestive discomfort</li>
              <li>Irregular bowel movements (constipation or diarrhea)</li>
              <li>Food sensitivities or intolerances</li>
              <li>Nutrient deficiencies despite adequate diet</li>
              <li>Skin issues such as eczema, acne, or rashes</li>
              <li>Chronic fatigue or low energy</li>
              <li>Autoimmune conditions</li>
              <li>Mood disturbances or brain fog</li>
            </ul>

            <div className="bg-blue-50 p-8 rounded-lg mb-10">
              <h3 className="text-2xl font-bold mb-4 text-health-blue">How Digestive Health Impacts the Triangle</h3>
              <p className="mb-4">
                Your digestive system directly affects the other two points of the Triangle of Disease:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Impact on Blood Sugar:</strong> Gut health affects how efficiently your body processes carbohydrates and regulates insulin.</li>
                <li><strong>Impact on Adrenal-Thyroid Function:</strong> Nutrient absorption is critical for hormone production and conversion.</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mb-4 text-health-blue">Strategies for Digestive Health</h3>
            <p className="mb-6">
              Improving your digestive health requires a comprehensive approach that addresses diet, lifestyle, and targeted supplementation.
            </p>
            <p className="mb-10">
              Visit our <a href="/health-strategies" className="text-health-blue font-bold hover:underline">Health Strategies</a> page to learn specific steps for supporting your digestive system.
            </p>

            {/* Schema.org structured data for SEO */}
            <script type="application/ld+json">
              {`
                {
                  "@context": "https://schema.org",
                  "@type": "MedicalWebPage",
                  "name": "Digestive System - Triangle of Disease",
                  "description": "Learn how your digestive system impacts overall health and serves as a critical point in the Triangle of Disease.",
                  "url": "https://triangleofdisease.netlify.app/digestive-system",
                  "author": {
                    "@type": "Organization",
                    "name": "Daily with Doc & Becca"
                  },
                  "about": {
                    "@type": "MedicalCondition",
                    "name": "Digestive System Disorders",
                    "description": "Conditions that affect the digestive system and its impact on overall health."
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

export default DigestiveSystemPage
