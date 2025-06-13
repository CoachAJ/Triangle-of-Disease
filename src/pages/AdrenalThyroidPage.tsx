import { Helmet } from 'react-helmet-async'

const AdrenalThyroidPage = () => {
  return (
    <>
      <Helmet>
        <title>Adrenal-Thyroid Axis - Triangle of Disease | Daily with Doc & Becca</title>
        <meta name="description" content="Learn how the adrenal-thyroid axis impacts overall health and serves as a critical point in the Triangle of Disease." />
        <meta property="og:title" content="Adrenal-Thyroid Axis - Triangle of Disease | Daily with Doc & Becca" />
        <meta property="og:description" content="Learn how the adrenal-thyroid axis impacts overall health and serves as a critical point in the Triangle of Disease." />
        <meta property="og:image" content="/assets/adrenal-thyroid.jpg" />
        <meta property="og:url" content="https://triangleofdisease.netlify.app/adrenal-thyroid" />
        <link rel="canonical" href="https://triangleofdisease.netlify.app/adrenal-thyroid" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-glorious-sunset text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Point 3: Adrenal-Thyroid Axis</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            These critical hormone-producing glands regulate metabolism, stress response, and energy production at the cellular level.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-glorious-sunset">Understanding the Adrenal-Thyroid Axis</h2>
            <p className="mb-6 text-lg">
              The adrenal-thyroid axis represents the delicate relationship between your adrenal glands and thyroid gland. 
              These hormone-producing powerhouses work together to regulate your metabolism, energy production, stress response, and countless other bodily functions.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-glorious-sunset mt-10">Key Components of Adrenal-Thyroid Health</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg shadow">
                <h4 className="font-bold text-xl mb-3 text-glorious-sunset">Adrenal Function</h4>
                <p>
                  Your adrenal glands produce stress hormones like cortisol and adrenaline that help you respond to threats and challenges. 
                  They also produce hormones that regulate blood pressure, fluid balance, and even sex hormone production.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow">
                <h4 className="font-bold text-xl mb-3 text-glorious-sunset">Thyroid Function</h4>
                <p>
                  Your thyroid gland produces hormones that regulate your metabolic rate, affecting everything from energy levels and body temperature to heart rate and digestion. 
                  These hormones influence every cell in your body.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow">
                <h4 className="font-bold text-xl mb-3 text-glorious-sunset">HPA Axis</h4>
                <p>
                  The hypothalamic-pituitary-adrenal (HPA) axis is the control system that regulates your stress response. 
                  Chronic activation of this system due to ongoing stress can disrupt your entire hormonal balance.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow">
                <h4 className="font-bold text-xl mb-3 text-glorious-sunset">Hormone Conversion</h4>
                <p>
                  For thyroid hormones to work properly, they must be converted from their inactive form (T4) to their active form (T3). 
                  This conversion process can be disrupted by stress, nutrient deficiencies, and inflammation.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4 text-glorious-sunset mt-10">Signs Your Adrenal-Thyroid Axis Needs Support</h3>
            <ul className="list-disc pl-6 mb-10 space-y-2">
              <li>Persistent fatigue, especially in the morning</li>
              <li>Feeling "wired but tired" - exhausted but unable to relax</li>
              <li>Cold hands and feet or overall cold intolerance</li>
              <li>Difficulty losing weight despite efforts</li>
              <li>Hair loss, including outer third of eyebrows</li>
              <li>Poor recovery from stress or exercise</li>
              <li>Afternoon energy crashes (typically around 3-4pm)</li>
              <li>Sleep disturbances despite feeling exhausted</li>
            </ul>

            <div className="bg-orange-50 p-8 rounded-lg mb-10">
              <h3 className="text-2xl font-bold mb-4 text-glorious-sunset">How Adrenal-Thyroid Health Impacts the Triangle</h3>
              <p className="mb-4">
                The adrenal-thyroid axis directly affects the other two points of the Triangle of Disease:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Impact on Digestive System:</strong> Stress hormones alter blood flow to digestive organs and affect gut motility and permeability.</li>
                <li><strong>Impact on Blood Sugar:</strong> Cortisol raises blood glucose levels, while thyroid hormones affect insulin sensitivity and glucose metabolism.</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mb-4 text-glorious-sunset">Strategies for Adrenal-Thyroid Health</h3>
            <p className="mb-6">
              Improving your adrenal-thyroid axis requires a comprehensive approach that addresses stress management, diet, lifestyle, and targeted supplementation.
            </p>
            <p className="mb-10">
              Visit our <a href="/health-strategies" className="text-glorious-sunset font-bold hover:underline">Health Strategies</a> page to learn specific steps for supporting your adrenal and thyroid function.
            </p>

            {/* Schema.org structured data for SEO */}
            <script type="application/ld+json">
              {`
                {
                  "@context": "https://schema.org",
                  "@type": "MedicalWebPage",
                  "name": "Adrenal-Thyroid Axis - Triangle of Disease",
                  "description": "Learn how the adrenal-thyroid axis impacts overall health and serves as a critical point in the Triangle of Disease.",
                  "url": "https://triangleofdisease.netlify.app/adrenal-thyroid",
                  "author": {
                    "@type": "Organization",
                    "name": "Daily with Doc & Becca"
                  },
                  "about": {
                    "@type": "MedicalCondition",
                    "name": "Adrenal and Thyroid Dysfunction",
                    "description": "Conditions related to the function of adrenal and thyroid glands and their impact on overall health."
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

export default AdrenalThyroidPage
