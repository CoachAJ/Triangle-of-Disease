import { Helmet } from 'react-helmet-async'

const HealthStrategiesPage = () => {
  return (
    <>
      <Helmet>
        <title>Health Strategies - Triangle of Disease | Daily with Doc & Becca</title>
        <meta name="description" content="Practical strategies to address all three points of the Triangle of Disease and restore optimal health." />
        <meta property="og:title" content="Health Strategies - Triangle of Disease | Daily with Doc & Becca" />
        <meta property="og:description" content="Practical strategies to address all three points of the Triangle of Disease and restore optimal health." />
        <meta property="og:image" content="/assets/health-strategies.jpg" />
        <meta property="og:url" content="https://triangleofdisease.netlify.app/health-strategies" />
        <link rel="canonical" href="https://triangleofdisease.netlify.app/health-strategies" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-health-blue to-glorious-sunset text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Health Strategies</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Practical approaches to address all three points of the Triangle of Disease and restore optimal health.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-health-blue">Comprehensive Approach to the Triangle of Disease</h2>
            <p className="mb-10 text-lg">
              Addressing the Triangle of Disease requires a comprehensive approach that targets all three points simultaneously. 
              While each point has specific strategies, the most powerful results come from an integrated approach that recognizes how these systems influence each other.
            </p>

            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-6 text-health-blue inline-flex items-center">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-health-blue text-white mr-3">1</span>
                Digestive System Strategies
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div className="bg-gray-50 p-6 rounded-lg shadow">
                  <h4 className="font-bold text-xl mb-3 text-health-blue">Restore Gut Microbiome Balance</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Incorporate fermented foods like sauerkraut, kimchi, and kefir</li>
                    <li>Consider a high-quality probiotic supplement with multiple strains</li>
                    <li>Consume prebiotic-rich foods like garlic, onions, and Jerusalem artichokes</li>
                    <li>Minimize factors that harm gut bacteria: antibiotics, alcohol, processed foods</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg shadow">
                  <h4 className="font-bold text-xl mb-3 text-health-blue">Heal the Intestinal Barrier</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Identify and eliminate food sensitivities through an elimination diet</li>
                    <li>Supplement with gut-healing nutrients like L-glutamine, zinc, and collagen</li>
                    <li>Consider digestive enzymes to support proper food breakdown</li>
                    <li>Reduce stress with mindfulness practices and adequate sleep</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-6 text-blue-sky inline-flex items-center">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-sky text-white mr-3">2</span>
                Blood Sugar Regulation Strategies
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div className="bg-gray-50 p-6 rounded-lg shadow">
                  <h4 className="font-bold text-xl mb-3 text-blue-sky">Stabilize Blood Sugar Through Diet</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Pair carbohydrates with protein and healthy fat at every meal</li>
                    <li>Focus on low-glycemic, fiber-rich carbohydrates</li>
                    <li>Consume adequate protein (0.8-1g per pound of lean body mass)</li>
                    <li>Consider intermittent fasting after consulting with a healthcare provider</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg shadow">
                  <h4 className="font-bold text-xl mb-3 text-blue-sky">Support Glucose Metabolism</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Incorporate regular movement throughout the day</li>
                    <li>Consider supplements like berberine, chromium, and alpha-lipoic acid</li>
                    <li>Ensure adequate magnesium intake</li>
                    <li>Prioritize quality sleep (7-9 hours) in a dark, cool room</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-6 text-glorious-sunset inline-flex items-center">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-glorious-sunset text-white mr-3">3</span>
                Adrenal-Thyroid Support Strategies
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div className="bg-gray-50 p-6 rounded-lg shadow">
                  <h4 className="font-bold text-xl mb-3 text-glorious-sunset">Stress Management</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Incorporate daily stress reduction practices (meditation, deep breathing)</li>
                    <li>Set boundaries around work, technology, and energy-draining activities</li>
                    <li>Consider adaptogenic herbs like ashwagandha and rhodiola</li>
                    <li>Practice active relaxation rather than stimulating activities when tired</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg shadow">
                  <h4 className="font-bold text-xl mb-3 text-glorious-sunset">Thyroid Nutrition</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Ensure adequate iodine and selenium intake</li>
                    <li>Support T4 to T3 conversion with zinc, vitamin A, and B vitamins</li>
                    <li>Minimize goitrogenic foods if you have thyroid issues</li>
                    <li>Address underlying inflammation that may affect thyroid function</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg mb-12">
              <h3 className="text-2xl font-bold mb-4 text-health-blue">Daily Foundation Practices</h3>
              <p className="mb-4">
                These core practices support all three points of the Triangle of Disease:
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li><strong>Hydration:</strong> Drink half your body weight (in pounds) in ounces of filtered water daily.</li>
                <li><strong>Anti-inflammatory Diet:</strong> Focus on colorful vegetables, quality proteins, and healthy fats while minimizing processed foods, refined carbohydrates, and industrial seed oils.</li>
                <li><strong>Movement:</strong> Incorporate both regular exercise and frequent movement throughout the day.</li>
                <li><strong>Sleep Hygiene:</strong> Prioritize 7-9 hours of quality sleep with consistent sleep and wake times.</li>
                <li><strong>Stress Management:</strong> Practice daily stress reduction techniques and set healthy boundaries.</li>
                <li><strong>Targeted Supplementation:</strong> Address specific nutritional needs based on your health status and lab work.</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mb-4 text-health-blue">Working with Healthcare Providers</h3>
            <p className="mb-6">
              While these strategies can be powerful for addressing the Triangle of Disease, it's important to work with qualified healthcare providers who can:
            </p>
            <ul className="list-disc pl-6 mb-10 space-y-2">
              <li>Order appropriate lab testing to identify specific imbalances</li>
              <li>Help customize these strategies to your unique needs</li>
              <li>Monitor your progress and adjust interventions as needed</li>
              <li>Ensure these approaches are compatible with any medical conditions or medications</li>
            </ul>

            <div className="text-center my-12">
              <h3 className="text-2xl font-bold mb-6">Ready to Transform Your Health?</h3>
              <a 
                href="https://102742703.youngevity.com/" 
                className="btn bg-glorious-sunset hover:bg-tangy-yellow"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started Now
              </a>
            </div>

            {/* Schema.org structured data for SEO */}
            <script type="application/ld+json">
              {`
                {
                  "@context": "https://schema.org",
                  "@type": "MedicalWebPage",
                  "name": "Health Strategies - Triangle of Disease",
                  "description": "Practical strategies to address all three points of the Triangle of Disease and restore optimal health.",
                  "url": "https://triangleofdisease.netlify.app/health-strategies",
                  "author": {
                    "@type": "Organization",
                    "name": "Daily with Doc & Becca"
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

export default HealthStrategiesPage
