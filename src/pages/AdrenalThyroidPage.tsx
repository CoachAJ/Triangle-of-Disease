import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { FaStethoscope, FaBrain, FaSpa } from 'react-icons/fa'
import { GiStomach, GiMedicines } from 'react-icons/gi'
import { MdBloodtype } from 'react-icons/md'
import HeroSection from '../components/HeroSection'
import InfoCard from '../components/InfoCard'

const AdrenalThyroidPage = () => {
  return (
    <>
      <Helmet>
        <title>The Adrenal-Thyroid Complex - Triangle of Disease</title>
        <meta name="description" content="Learn about the Adrenal-Thyroid Complex - Point Three of the Triangle of Disease. Understand how this regulatory hub affects hormonal balance, stress response, and overall health." />
      </Helmet>

      <HeroSection
        title="The Adrenal-Thyroid Complex"
        subtitle="Point Three of the Triangle of Disease"
        description="The regulatory hub that influences everything from energy production to hormonal balance and stress response. This third point of the Triangle is crucial for whole-body regulation."
        backgroundImage="/assets/adrenal-thyroid-hero-bg.jpg"
      />

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-2/5">
              <img 
                src="/adrenal-thyroid.png" 
                alt="Adrenal-Thyroid Complex Diagram" 
                className="rounded-lg shadow-xl mx-auto"
                style={{ maxHeight: '500px', objectFit: 'contain', width: '100%' }}
              />
            </div>
            <div className="w-full lg:w-3/5">
              <h2 className="text-tangy-yellow mb-6">The Body's Regulatory Hub</h2>
              <p className="mb-4 text-lg">
                The adrenal-thyroid complex is the <strong>third point</strong> on the Triangle of Disease. It represents the regulatory system that governs metabolism, energy production, stress response, and hormonal balance.
              </p>
              <p className="mb-4">
                The thyroid gland is often described as the "master regulator" as it <strong>regulates everything</strong> in the body. Meanwhile, the adrenal glands produce cortisol for emergency energy and reproductive hormones for growth.
              </p>
              <p className="mb-4">
                Hypothyroidism is positioned as the "tip of the triangle" and is described as the jumping-off point to all chronic degenerative disease. However, a key insight is that you <strong>cannot effectively address the thyroid by itself</strong>.
              </p>
              <div className="mt-8 p-4 bg-yellow-50 rounded-lg border-l-4 border-tangy-yellow">
                <div className="flex">
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-800">Key Insight</h3>
                    <p className="text-gray-700">
                      "To work on the thyroid and adrenal health, you must first address the first two points of the triangle - the digestive system and blood sugar system."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Concepts Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="section-title">
            <h2>Understanding Adrenal-Thyroid Dysfunction</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <InfoCard 
              title="Hypothyroidism" 
              icon={<FaStethoscope />}
              color="yellow"
              className="h-full"
            >
              <p className="mb-3">
                Hypothyroidism refers to an underactive thyroid gland that doesn't produce enough thyroid hormones, which regulate metabolism and energy production.
              </p>
              <p className="mb-3">
                It is described as "the tip of the triangle and the jumping off point to all chronic degenerative disease."
              </p>
              <p>
                Symptoms include fatigue, cold intolerance, weight gain, dry skin, depression, and cognitive issues – affecting virtually every system in the body.
              </p>
            </InfoCard>

            <InfoCard 
              title="Adrenal Dysfunction" 
              icon={<FaSpa />}
              color="orange"
              className="h-full"
            >
              <p className="mb-3">
                The adrenal glands produce cortisol (for emergency energy) and reproductive hormones. When stressed, they prioritize cortisol production over other hormones.
              </p>
              <p className="mb-3">
                Chronic stress leads to dysfunctional cortisol patterns that can manifest as fatigue, insomnia, anxiety, and hormonal imbalances.
              </p>
              <p>
                Cortisol in the long run accelerates the deterioration of tissue, contributing to chronic degenerative conditions.
              </p>
            </InfoCard>

            <InfoCard 
              title="Hormonal Cascade" 
              icon={<GiMedicines />}
              color="blue"
              className="h-full"
            >
              <p className="mb-3">
                The adrenal-thyroid complex influences a cascade of hormones throughout the body, including sex hormones, insulin, and neurotransmitters.
              </p>
              <p className="mb-3">
                Hormonal issues in men and women are linked to metabolic syndrome and leaky gut through this complex interplay.
              </p>
              <p>
                When this regulatory system breaks down, it creates ripple effects throughout the entire endocrine system.
              </p>
            </InfoCard>
          </div>

          <div className="mt-12 p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-proxima font-bold mb-4">The Triangle Connection</h3>
            <p className="mb-4">
              The adrenal-thyroid complex doesn't function in isolation. It is profoundly influenced by the other points of the Triangle:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Digestive Impact:</strong> The thyroid regulates the digestive system, creating a potential downward spiral where hypothyroidism worsens digestive dysfunction.</li>
              <li><strong>Blood Sugar Connection:</strong> Blood sugar fluctuations stress the adrenals, leading to cortisol imbalances.</li>
              <li><strong>Feedback Loop:</strong> Hypothyroidism should be backtracked to adrenal issues and then to metabolic syndrome and leaky gut.</li>
            </ul>
            <p>
              This is why you cannot effectively address the adrenal-thyroid complex without first working on the digestive system and blood sugar regulation.
            </p>
          </div>
        </div>
      </section>

      {/* How It Affects Health Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="section-title">
            <h2>How Adrenal-Thyroid Health Affects the Entire Body</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-proxima font-bold mb-4 text-tangy-yellow">Connected Health Challenges</h3>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Energy Production</h4>
                  <p>
                    The thyroid regulates metabolism at the cellular level, influencing mitochondrial function and energy production throughout the body.
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Cognitive Function</h4>
                  <p>
                    Both thyroid hormones and cortisol affect brain function, influencing mood, memory, focus, and cognitive processing.
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Reproductive Health</h4>
                  <p>
                    The adrenal-thyroid axis directly impacts sex hormone production and balance, affecting fertility, menstrual cycles, and sexual function.
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Immune Function</h4>
                  <p>
                    Thyroid hormones and cortisol modulate immune responses, with imbalances potentially contributing to autoimmune conditions.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-proxima font-bold mb-4 text-tangy-yellow">The Stress Connection</h3>
              <p className="mb-4">
                Stress plays a central role in adrenal-thyroid dysfunction:
              </p>
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 rounded-full bg-glorious-sunset flex items-center justify-center text-white">
                      <FaBrain size={24} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Stress Response Mechanism</h4>
                    <p className="text-gray-700">
                      When stressed, the body produces cortisol through the HPA axis (hypothalamic-pituitary-adrenal). Chronic activation of this system leads to dysregulation and eventually exhaustion.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 rounded-full bg-health-blue flex items-center justify-center text-white">
                      <FaStethoscope size={24} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Thyroid Suppression</h4>
                    <p className="text-gray-700">
                      Chronic stress and elevated cortisol can suppress thyroid function and inhibit the conversion of T4 to the more active T3 hormone, leading to symptoms of hypothyroidism even when basic lab tests appear normal.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold mb-2">Modern Stressors</h4>
                <p className="text-gray-700">
                  Our bodies weren't designed for the chronic stressors of modern life. Physical stressors (poor diet, toxins, infections), emotional stressors, and even "invisible" stressors like electromagnetic fields and constant digital stimulation all contribute to adrenal-thyroid burden.
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
            <h2>Strategies for Adrenal-Thyroid Health</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-tangy-yellow flex items-center justify-center text-gray-800 mb-4">
                <FaStethoscope size={24} />
              </div>
              <h3 className="text-xl font-proxima font-bold mb-3">Foundation First</h3>
              <p className="mb-4">
                The primary strategy for adrenal-thyroid health is addressing the first two points of the triangle:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Heal the digestive system to reduce toxin load</li>
                <li>Stabilize blood sugar to reduce stress on the adrenals</li>
                <li>Support detoxification pathways</li>
                <li>Provide essential nutrients needed for thyroid hormone production and conversion</li>
                <li>Reduce inflammation throughout the body</li>
              </ul>
              <p className="text-sm text-gray-600 italic">
                This approach recognizes that you cannot effectively address the thyroid by itself without first working on the foundational systems.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-health-blue flex items-center justify-center text-white mb-4">
                <FaSpa size={24} />
              </div>
              <h3 className="text-xl font-proxima font-bold mb-3">Stress Management</h3>
              <p className="mb-4">
                Key strategies to support stress response and lower cortisol:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Incorporate stress reduction techniques (meditation, deep breathing)</li>
                <li>Ensure adequate quality sleep</li>
                <li>Practice mindfulness and emotional regulation</li>
                <li>Engage in appropriate exercise (not too intense)</li>
                <li>Set healthy boundaries to reduce unnecessary stressors</li>
                <li>Connect with community and supportive relationships</li>
              </ul>
              <p className="text-sm text-gray-600 italic">
                Lowering cortisol by calming the body down is a crucial strategy that complements the foundation work.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-glorious-sunset flex items-center justify-center text-white mb-4">
                <GiMedicines size={24} />
              </div>
              <h3 className="text-xl font-proxima font-bold mb-3">Nutritional Support</h3>
              <p className="mb-4">
                Essential nutrients and supplements for adrenal-thyroid health:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Iodine, Selenium, Zinc, and Iron for thyroid function</li>
                <li>B vitamins for energy production and stress response</li>
                <li>Vitamin C for adrenal function</li>
                <li>Magnesium for nervous system support</li>
                <li>Adaptogenic herbs to modulate stress response</li>
                <li>Essential fatty acids for hormone production</li>
              </ul>
              <p className="text-sm text-gray-600 italic">
                The Healthy Start Pack providing the Mighty 90 essential nutrients forms a foundation for nutritional support of the entire system.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link 
              to="/health-strategies" 
              className="btn bg-tangy-yellow text-gray-800 hover:bg-glorious-sunset hover:text-white"
            >
              View Comprehensive Health Strategies
            </Link>
          </div>
        </div>
      </section>

      {/* Next Steps Section */}
      <section className="py-16 bg-tangy-yellow text-gray-800">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-gray-800 mb-6">Complete Your Triangle Understanding</h2>
            <p className="text-lg mb-8">
              Now that you've explored all three points of the Triangle of Disease, learn how to implement comprehensive strategies to address the entire system.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link 
                to="/digestive-system" 
                className="bg-white rounded-lg p-6 text-health-blue hover:bg-health-blue hover:text-white transition-all duration-300 hover:shadow-lg flex flex-col items-center"
              >
                <GiStomach size={40} className="mb-3" />
                <h3 className="text-xl font-proxima font-bold mb-2">Digestive System</h3>
                <p className="text-gray-700 hover:text-white">
                  Revisit Point One of the Triangle
                </p>
              </Link>
              <Link 
                to="/blood-sugar" 
                className="bg-white rounded-lg p-6 text-blue-sky hover:bg-blue-sky hover:text-white transition-all duration-300 hover:shadow-lg flex flex-col items-center"
              >
                <MdBloodtype size={40} className="mb-3" />
                <h3 className="text-xl font-proxima font-bold mb-2">Blood Sugar System</h3>
                <p className="text-gray-700 hover:text-white">
                  Revisit Point Two of the Triangle
                </p>
              </Link>
            </div>
            <div className="mt-8">
              <Link 
                to="/health-strategies" 
                className="btn bg-health-blue text-white hover:bg-blue-sky"
              >
                Implement Comprehensive Strategies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AdrenalThyroidPage
