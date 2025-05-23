import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { MdBloodtype } from 'react-icons/md'
import { FaStethoscope, FaHeartbeat, FaAppleAlt, FaFlask } from 'react-icons/fa'
import { GiStomach } from 'react-icons/gi'
import HeroSection from '../components/HeroSection'
import InfoCard from '../components/InfoCard'

const BloodSugarPage = () => {
  return (
    <>
      <Helmet>
        <title>The Blood Sugar System - Triangle of Disease</title>
        <meta name="description" content="Learn about the Blood Sugar System - Point Two of the Triangle of Disease. Understand disglycemia, metabolic syndrome, and how blood sugar control impacts overall health." />
      </Helmet>

      <HeroSection
        title="The Blood Sugar System"
        subtitle="Point Two of the Triangle of Disease"
        description="The fuel system of the body that powers all cellular functions. This second point on the Triangle is fundamental to energy production and metabolism."
        backgroundImage="/assets/blood-sugar-hero-bg.jpg"
      />

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-3/5">
              <h2 className="text-blue-sky mb-6">The Body's Fuel System</h2>
              <p className="mb-4 text-lg">
                The blood sugar system is identified as the <strong>second point</strong> on the Triangle of Disease. It represents how your body converts food into usable energy for all cellular functions.
              </p>
              <p className="mb-4">
                Disturbances in blood sugar, or <strong>disglycemia</strong>, are consistently involved in chronic disease. When this system breaks down, it affects every aspect of health, from energy levels to cognitive function.
              </p>
              <p className="mb-4">
                Working on the blood sugar system is a fundamental step in addressing various health challenges. Controlling blood sugar can lead to profound and dramatic improvements in overall health.
              </p>
              <div className="mt-8 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-sky">
                <div className="flex">
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-800">Key Insight</h3>
                    <p className="text-gray-700">
                      "The two base points (digestive and blood sugar) represent breakdowns in how the body turns food into energy, which is essentially metabolism."
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-2/5">
              <img 
                src="/blood-sugar.png"
                alt="Blood Sugar System Diagram"
                className="rounded-lg shadow-xl mx-auto"
                style={{ maxHeight: '500px', objectFit: 'contain', width: '100%' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Concepts Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="section-title">
            <h2>Understanding Blood Sugar Dysfunction</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <InfoCard 
              title="Disglycemia" 
              icon={<MdBloodtype />}
              color="blue"
              className="h-full"
            >
              <p className="mb-3">
                Disglycemia refers to abnormal blood glucose levels, which can include both high and low blood sugar fluctuations.
              </p>
              <p className="mb-3">
                These fluctuations can cause immediate symptoms like fatigue, irritability, and brain fog, while long-term disglycemia contributes to chronic inflammation and disease.
              </p>
              <p>
                Even without a diabetes diagnosis, blood sugar imbalances can be silently affecting your health.
              </p>
            </InfoCard>

            <InfoCard 
              title="Metabolic Syndrome" 
              icon={<FaHeartbeat />}
              color="orange"
              className="h-full"
            >
              <p className="mb-3">
                Metabolic syndrome is a collection of symptoms associated with metabolism that reflects breakdown at both the digestive and blood sugar points.
              </p>
              <p className="mb-3">
                It encompasses conditions like insulin resistance, high blood pressure, abnormal cholesterol levels, and excess abdominal fat.
              </p>
              <p>
                Metabolic syndrome increases risk for heart disease, stroke, and type 2 diabetes, making it a critical focus in the Triangle of Disease approach.
              </p>
            </InfoCard>

            <InfoCard 
              title="Insulin Resistance" 
              icon={<FaFlask />}
              color="yellow"
              className="h-full"
            >
              <p className="mb-3">
                Insulin resistance occurs when cells become less responsive to insulin, requiring the body to produce more insulin to manage blood sugar.
              </p>
              <p className="mb-3">
                This condition precedes type 2 diabetes and is influenced by diet, sedentary lifestyle, stress, and digestive health.
              </p>
              <p>
                Addressing insulin resistance through the Triangle approach can help prevent progression to more serious conditions.
              </p>
            </InfoCard>
          </div>

          <div className="mt-12 p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-proxima font-bold mb-4">The Blood Sugar-Inflammation Connection</h3>
            <p className="mb-4">
              Blood sugar imbalances drive inflammation throughout the body in several ways:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>High blood sugar damages blood vessels and tissues</li>
              <li>Insulin resistance promotes inflammatory cytokine production</li>
              <li>Blood sugar swings stress the adrenal glands</li>
              <li>Glycation (sugar binding to proteins) creates harmful advanced glycation end products (AGEs)</li>
            </ul>
            <p>
              This chronic inflammation becomes a driving force behind numerous health conditions, including autoimmune diseases, cardiovascular issues, and neurological disorders.
            </p>
          </div>
        </div>
      </section>

      {/* How It Affects Health Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="section-title">
            <h2>How Blood Sugar Health Affects the Entire Body</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-proxima font-bold mb-4 text-blue-sky">Connected Health Challenges</h3>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Cardiovascular Issues</h4>
                  <p>
                    Blood sugar imbalances contribute to heart disease, hypertension, and stroke through inflammation, glycation, and impaired circulation.
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Cognitive Function</h4>
                  <p>
                    The brain is highly dependent on stable glucose levels. Blood sugar swings can cause brain fog, mood disorders, and may contribute to dementia.
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Hormonal Balance</h4>
                  <p>
                    Blood sugar issues directly impact sex hormone production and function, contributing to conditions like PCOS and low testosterone.
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Energy Production</h4>
                  <p>
                    Mitochondrial function and cellular energy production are compromised by blood sugar dysregulation, leading to fatigue and reduced vitality.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-proxima font-bold mb-4 text-blue-sky">Blood Sugar and Other Triangle Points</h3>
              <p className="mb-4">
                The blood sugar system interacts closely with the other points of the Triangle of Disease:
              </p>
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 rounded-full bg-glorious-sunset flex items-center justify-center text-white">
                      <GiStomach size={24} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Connection to Digestive System (Point 1)</h4>
                    <p className="text-gray-700">
                      Leaky gut and dysbiosis affect how nutrients are absorbed and can trigger blood sugar imbalances. Conversely, blood sugar swings can damage the intestinal lining, creating a vicious cycle.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 rounded-full bg-tangy-yellow flex items-center justify-center text-gray-800">
                      <FaStethoscope size={24} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Connection to Adrenal-Thyroid Complex (Point 3)</h4>
                    <p className="text-gray-700">
                      Blood sugar swings stress the adrenal glands, leading to cortisol imbalances. Thyroid function is also intimately connected to metabolism and blood sugar regulation.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold mb-2">The Cycle of Dysfunction</h4>
                <p className="text-gray-700">
                  Blood sugar issues can both cause and result from problems at the other Triangle points, creating complex feedback loops that perpetuate chronic health challenges. Breaking this cycle requires addressing all points systematically.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategies Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="section-title">
            <h2>Strategies for Blood Sugar Health</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-blue-sky flex items-center justify-center text-white mb-4">
                <FaAppleAlt size={24} />
              </div>
              <h3 className="text-xl font-proxima font-bold mb-3">Dietary Modifications</h3>
              <p className="mb-4">
                Dietary changes are powerful tools for blood sugar management:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Adopt a low-carb approach, especially for refined carbohydrates</li>
                <li>Increase fiber intake to slow sugar release</li>
                <li>Combine proteins, healthy fats, and complex carbs at meals</li>
                <li>Eat regularly to avoid dramatic blood sugar swings</li>
                <li>Consider intermittent fasting (with professional guidance)</li>
                <li>Reduce or eliminate sugary beverages and desserts</li>
              </ul>
              <p className="text-sm text-gray-600 italic">
                The recommendation is to "treat yourself like a diabetic" even if you haven't been diagnosed with diabetes.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-health-blue flex items-center justify-center text-white mb-4">
                <FaFlask size={24} />
              </div>
              <h3 className="text-xl font-proxima font-bold mb-3">Supplement Support</h3>
              <p className="mb-4">
                Key supplements for blood sugar support include:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li><strong>Healthy Blood Sugar Pack:</strong> Comprehensive blood sugar support</li>
                <li><strong>Ultimate Niasin:</strong> Part of the glucose tolerance factor, helps process sugar</li>
                <li><strong>Selenium:</strong> Supports insulin function and protects against oxidative damage</li>
                <li><strong>MSM Sulfur:</strong> Improves insulin receptor sensitivity</li>
                <li><strong>Osteo Mag Zinc FX:</strong> Minerals critical for blood sugar regulation</li>
                <li><strong>Sweeties:</strong> Supports healthy blood sugar levels</li>
              </ul>
              <p className="text-sm text-gray-600 italic">
                These supplements work synergistically to support healthy glucose metabolism and insulin sensitivity.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-tangy-yellow flex items-center justify-center text-gray-800 mb-4">
                <FaHeartbeat size={24} />
              </div>
              <h3 className="text-xl font-proxima font-bold mb-3">Lifestyle Factors</h3>
              <p className="mb-4">
                Other important factors for blood sugar regulation:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li><strong>Hydration:</strong> Proper hydration is crucial for blood sugar control</li>
                <li><strong>Exercise:</strong> Regular physical activity improves insulin sensitivity</li>
                <li><strong>Stress Management:</strong> Stress hormones raise blood sugar</li>
                <li><strong>Sleep Quality:</strong> Poor sleep disrupts glucose metabolism</li>
                <li><strong>Circadian Rhythm:</strong> Align eating with natural biological cycles</li>
                <li><strong>Environmental Toxins:</strong> Some toxins disrupt blood sugar regulation</li>
              </ul>
              <p className="text-sm text-gray-600 italic">
                A comprehensive approach includes addressing these lifestyle factors alongside dietary changes and supplementation.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link 
              to="/health-strategies" 
              className="btn bg-blue-sky text-white hover:bg-health-blue"
            >
              View Comprehensive Health Strategies
            </Link>
          </div>
        </div>
      </section>

      {/* Next Steps Section */}
      <section className="py-16 bg-blue-sky text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white mb-6">Continue Exploring the Triangle</h2>
            <p className="text-lg text-blue-100 mb-8">
              Understanding the blood sugar system is essential, but it's just one point of the Triangle. Explore the other points to gain a complete picture of foundational health.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link 
                to="/digestive-system" 
                className="bg-white rounded-lg p-6 text-blue-sky hover:bg-tangy-yellow transition-all duration-300 hover:shadow-lg flex flex-col items-center"
              >
                <GiStomach size={40} className="mb-3" />
                <h3 className="text-xl font-proxima font-bold mb-2">Digestive System</h3>
                <p className="text-gray-700">
                  Explore Point One of the Triangle
                </p>
              </Link>
              <Link 
                to="/adrenal-thyroid" 
                className="bg-white rounded-lg p-6 text-blue-sky hover:bg-tangy-yellow transition-all duration-300 hover:shadow-lg flex flex-col items-center"
              >
                <FaStethoscope size={40} className="mb-3" />
                <h3 className="text-xl font-proxima font-bold mb-2">Adrenal-Thyroid Complex</h3>
                <p className="text-gray-700">
                  Explore Point Three of the Triangle
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BloodSugarPage
