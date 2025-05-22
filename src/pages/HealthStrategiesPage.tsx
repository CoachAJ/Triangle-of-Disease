import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { FaLeaf, FaSpa, FaHeart, FaShieldAlt, FaAppleAlt, FaWater } from 'react-icons/fa'
import { GiStomach, GiMedicines } from 'react-icons/gi'
import { MdBloodtype } from 'react-icons/md'
import HeroSection from '../components/HeroSection'
import InfoCard from '../components/InfoCard'

const HealthStrategiesPage = () => {
  return (
    <>
      <Helmet>
        <title>Health Strategies - Triangle of Disease</title>
        <meta name="description" content="Comprehensive health strategies for addressing the Triangle of Disease. Learn practical steps to support digestive health, blood sugar balance, and adrenal-thyroid function." />
      </Helmet>

      <HeroSection
        title="Taking Action: Health Strategies"
        subtitle="Implementing the Triangle of Disease Approach"
        description="Practical strategies to address all three points of the Triangle of Disease for comprehensive health improvement."
        backgroundImage="/assets/health-strategies-hero-bg.jpg"
      />

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-health-blue mb-6">A Holistic Approach to Health</h2>
            <p className="text-lg mb-6">
              The strategies for addressing the Triangle of Disease are remarkably consistent across various biochemical breakdowns and health challenges. The more severe the health challenge, the more crucial it is to implement these foundational approaches.
            </p>
            <p className="mb-6">
              This holistic approach addresses the digestive system, blood sugar system, and supports the adrenal-thyroid axis simultaneously, recognizing their interconnected nature.
            </p>
            <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200 text-left">
              <h3 className="text-xl font-proxima font-bold mb-3 text-center">Key Principles</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Address Root Causes:</strong> Focus on the fundamental points of breakdown rather than just symptoms</li>
                <li><strong>Systematic Approach:</strong> Work on all three points of the triangle, with emphasis on the digestive system first</li>
                <li><strong>Personalization:</strong> Adjust strategies based on individual needs, symptoms, and response</li>
                <li><strong>Patience:</strong> Understand that healing is a process that requires consistent implementation over time</li>
                <li><strong>Empowerment:</strong> You have more control and power over your body's biochemistry than often perceived</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Three Points Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="section-title">
            <h2>The Three Points at a Glance</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="bg-glorious-sunset text-white p-4">
                <div className="flex items-center">
                  <GiStomach size={24} className="mr-3" />
                  <h3 className="text-xl font-proxima font-bold">Point 1: Digestive System</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="mb-4">
                  The cornerstone where the outside world meets the inside world. The primary point and foundation for addressing many chronic health challenges.
                </p>
                <h4 className="font-semibold mb-2">Key Focus Areas:</h4>
                <ul className="list-disc pl-6 mb-4 space-y-1 text-gray-700">
                  <li>Healing leaky gut/intestinal permeability</li>
                  <li>Addressing dysbiosis and SIBO</li>
                  <li>Identifying and eliminating problem foods</li>
                  <li>Supporting proper digestion and nutrient absorption</li>
                </ul>
                <Link to="/digestive-system" className="text-glorious-sunset hover:text-tangy-yellow transition-colors font-semibold">
                  Learn more about Point 1 →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="bg-blue-sky text-white p-4">
                <div className="flex items-center">
                  <MdBloodtype size={24} className="mr-3" />
                  <h3 className="text-xl font-proxima font-bold">Point 2: Blood Sugar System</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="mb-4">
                  The fuel system of the body that powers all cellular functions. This second point is fundamental to energy production and metabolism.
                </p>
                <h4 className="font-semibold mb-2">Key Focus Areas:</h4>
                <ul className="list-disc pl-6 mb-4 space-y-1 text-gray-700">
                  <li>Stabilizing blood glucose levels</li>
                  <li>Addressing insulin resistance</li>
                  <li>Supporting metabolic health</li>
                  <li>Reducing inflammation driven by blood sugar swings</li>
                </ul>
                <Link to="/blood-sugar" className="text-blue-sky hover:text-health-blue transition-colors font-semibold">
                  Learn more about Point 2 →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="bg-tangy-yellow text-gray-800 p-4">
                <div className="flex items-center">
                  <FaLeaf size={24} className="mr-3" />
                  <h3 className="text-xl font-proxima font-bold">Point 3: Adrenal-Thyroid Complex</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="mb-4">
                  The regulatory hub that influences everything from energy production to hormonal balance and stress response.
                </p>
                <h4 className="font-semibold mb-2">Key Focus Areas:</h4>
                <ul className="list-disc pl-6 mb-4 space-y-1 text-gray-700">
                  <li>Supporting thyroid function</li>
                  <li>Modulating stress response</li>
                  <li>Balancing cortisol production</li>
                  <li>Addressing hormonal cascades</li>
                </ul>
                <Link to="/adrenal-thyroid" className="text-tangy-yellow hover:text-glorious-sunset transition-colors font-semibold">
                  Learn more about Point 3 →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Strategies */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="section-title">
            <h2>Comprehensive Health Strategies</h2>
          </div>

          <div className="space-y-12">
            {/* Digestive Health Strategy */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-1">
                <InfoCard 
                  title="Prioritize Digestive Health" 
                  icon={<GiStomach />}
                  color="orange"
                >
                  <p className="mb-4">
                    Start by examining what you are eating and how your digestion is functioning. This is the foundation of the Triangle approach.
                  </p>
                  <div className="flex items-center text-glorious-sunset mb-2">
                    <FaHeart className="mr-2" />
                    <span className="font-semibold">Why It Matters:</span>
                  </div>
                  <p className="text-gray-700 ml-6 mb-3">
                    The digestive system is where the blood becomes contaminated. Addressing this "stops the bleeding" - preventing toxins from entering the bloodstream.
                  </p>
                </InfoCard>
              </div>
              <div className="lg:col-span-2 bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-proxima font-bold mb-4 text-glorious-sunset">Implementation Steps:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center">
                      <FaAppleAlt className="mr-2 text-glorious-sunset" /> Food Choices
                    </h4>
                    <ul className="list-disc pl-6 mb-4 space-y-1 text-gray-700">
                      <li>Maintain a food diary to identify trigger foods</li>
                      <li>Implement an elimination diet if needed</li>
                      <li>Focus on whole, nutrient-dense foods</li>
                      <li>Avoid processed foods, especially fried foods</li>
                      <li>Chew thoroughly and eat mindfully</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center">
                      <GiMedicines className="mr-2 text-glorious-sunset" /> Digestive Support
                    </h4>
                    <ul className="list-disc pl-6 mb-4 space-y-1 text-gray-700">
                      <li><strong>Ultimate Enzymes:</strong> With meals for digestion support</li>
                      <li><strong>i26:</strong> For microbiome stabilization</li>
                      <li><strong>Nightly Essence:</strong> Contains probiotics</li>
                      <li><strong>Ultimate Microbiome:</strong> For gut flora support</li>
                      <li><strong>Daily Digest:</strong> For leaky gut/SIBO work</li>
                      <li><strong>Bile Support:</strong> For detoxification</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Blood Sugar Strategy */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-1">
                <InfoCard 
                  title="Manage Blood Sugar" 
                  icon={<MdBloodtype />}
                  color="blue"
                >
                  <p className="mb-4">
                    Address blood sugar issues even if not diagnosed as diabetic. Stabilizing glucose levels reduces stress on all body systems.
                  </p>
                  <div className="flex items-center text-blue-sky mb-2">
                    <FaHeart className="mr-2" />
                    <span className="font-semibold">Why It Matters:</span>
                  </div>
                  <p className="text-gray-700 ml-6 mb-3">
                    Blood sugar fluctuations drive inflammation, stress the adrenals, and contribute to metabolic syndrome - a collection of symptoms that reflect Triangle breakdown.
                  </p>
                </InfoCard>
              </div>
              <div className="lg:col-span-2 bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-proxima font-bold mb-4 text-blue-sky">Implementation Steps:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center">
                      <FaAppleAlt className="mr-2 text-blue-sky" /> Dietary Approach
                    </h4>
                    <ul className="list-disc pl-6 mb-4 space-y-1 text-gray-700">
                      <li>Reduce intake of sugar and processed carbohydrates</li>
                      <li>Adopt a lower-carb approach if needed</li>
                      <li>Increase fiber intake to slow sugar release</li>
                      <li>Combine protein, fat, and fiber at meals</li>
                      <li>Space meals appropriately</li>
                      <li>Consider intermittent fasting (with guidance)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center">
                      <GiMedicines className="mr-2 text-blue-sky" /> Nutritional Support
                    </h4>
                    <ul className="list-disc pl-6 mb-4 space-y-1 text-gray-700">
                      <li><strong>Healthy Blood Sugar Pack:</strong> Comprehensive support</li>
                      <li><strong>Ultimate Niasin:</strong> Helps process sugar</li>
                      <li><strong>Selenium:</strong> Supports insulin function</li>
                      <li><strong>MSM Sulfur:</strong> Improves insulin sensitivity</li>
                      <li><strong>Osteo Mag Zinc FX:</strong> Critical minerals</li>
                      <li><strong>Hydration:</strong> Proper water intake</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Adrenal-Thyroid Strategy */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-1">
                <InfoCard 
                  title="Support Adrenal-Thyroid Function" 
                  icon={<FaLeaf />}
                  color="yellow"
                >
                  <p className="mb-4">
                    The way to work on thyroid and adrenal health is primarily by addressing the first two points of the triangle, then adding specific support.
                  </p>
                  <div className="flex items-center text-tangy-yellow mb-2">
                    <FaHeart className="mr-2" />
                    <span className="font-semibold">Why It Matters:</span>
                  </div>
                  <p className="text-gray-700 ml-6 mb-3">
                    The adrenal-thyroid complex influences everything from energy production to hormonal balance. Supporting this system helps regulate the entire body.
                  </p>
                </InfoCard>
              </div>
              <div className="lg:col-span-2 bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-proxima font-bold mb-4 text-tangy-yellow">Implementation Steps:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center">
                      <FaSpa className="mr-2 text-tangy-yellow" /> Stress Management
                    </h4>
                    <ul className="list-disc pl-6 mb-4 space-y-1 text-gray-700">
                      <li>Practice daily relaxation techniques</li>
                      <li>Ensure adequate sleep (7-9 hours)</li>
                      <li>Engage in appropriate exercise</li>
                      <li>Implement mind-body practices</li>
                      <li>Set healthy boundaries</li>
                      <li>Build supportive relationships</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center">
                      <GiMedicines className="mr-2 text-tangy-yellow" /> Nutritional Support
                    </h4>
                    <ul className="list-disc pl-6 mb-4 space-y-1 text-gray-700">
                      <li>Ensure adequate iodine, selenium, zinc</li>
                      <li>Support with B vitamins and vitamin C</li>
                      <li>Include healthy fats for hormone production</li>
                      <li>Provide minerals like magnesium</li>
                      <li>Consider adaptogenic herbs</li>
                      <li>Ensure complete nutritional support</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Strategies */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-health-blue flex items-center justify-center text-white mb-4">
                  <FaShieldAlt size={24} />
                </div>
                <h3 className="text-xl font-proxima font-bold mb-3">Reduce Inflammation</h3>
                <p className="mb-4">
                  Inflammation begins at the three points of the triangle. Working on these points helps resolve inflammatory processes throughout the body.
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-1 text-gray-700">
                  <li>Use digestive enzymes (anti-inflammatory)</li>
                  <li>Include omega-3 and omega-6 fatty acids</li>
                  <li>Adopt an anti-inflammatory diet</li>
                  <li>Address leaky gut to reduce immune triggers</li>
                  <li>Support detoxification pathways</li>
                  <li>Consider turmeric, ginger, and other natural anti-inflammatories</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-glorious-sunset flex items-center justify-center text-white mb-4">
                  <FaWater size={24} />
                </div>
                <h3 className="text-xl font-proxima font-bold mb-3">Support Detoxification</h3>
                <p className="mb-4">
                  Since all cell disease is preceded by dirty blood, cleaning the blood is crucial for overall health.
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-1 text-gray-700">
                  <li>Support liver and bile function</li>
                  <li>Enhance glutathione production (whey protein, selenium, MSM)</li>
                  <li>Use enzymes to help clean the blood</li>
                  <li>Ensure proper hydration</li>
                  <li>Avoid injecting foreign substances</li>
                  <li>Support elimination pathways (kidney, bowel, skin)</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-tangy-yellow flex items-center justify-center text-gray-800 mb-4">
                  <GiMedicines size={24} />
                </div>
                <h3 className="text-xl font-proxima font-bold mb-3">Address Nutritional Deficiencies</h3>
                <p className="mb-4">
                  Nutritional deficiencies contribute to health challenges. Complete supplementation ensures the body has what it needs to heal.
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-1 text-gray-700">
                  <li>Use the <strong>Healthy Start Pack</strong> (Mighty 90 nutrients)</li>
                  <li>Add <strong>Ultimate EFAs</strong> for essential fatty acids</li>
                  <li>Include protein sources like <strong>TMR/Whey Protein</strong></li>
                  <li>Consider <strong>Collagen Peptides</strong> for structural support</li>
                  <li>Support methylation with B vitamins</li>
                  <li>Add <strong>Vitamin C</strong> for immune and adrenal support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Guide */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="section-title">
            <h2>Implementation Guide</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-proxima font-bold mb-6 text-health-blue">Steps to Get Started</h3>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-health-blue text-white font-bold">
                      1
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold mb-2">Assess Your Current Status</h4>
                    <p className="text-gray-700">
                      Use our assessment tools to identify which points of the Triangle might be most affected in your case. This helps prioritize your approach.
                    </p>
                    <div className="mt-2">
                      <Link 
                        to="/assessment-tools" 
                        className="text-health-blue hover:text-blue-sky transition-colors font-medium"
                      >
                        Try our assessment tools →
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-health-blue text-white font-bold">
                      2
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold mb-2">Start with Digestive Health</h4>
                    <p className="text-gray-700">
                      Begin a food diary to identify potential problem foods. Start basic digestive support with enzymes and consider an elimination diet if necessary.
                    </p>
                    <div className="mt-2">
                      <Link 
                        to="/digestive-system" 
                        className="text-health-blue hover:text-blue-sky transition-colors font-medium"
                      >
                        Digestive system strategies →
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-health-blue text-white font-bold">
                      3
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold mb-2">Address Blood Sugar Simultaneously</h4>
                    <p className="text-gray-700">
                      Begin making dietary changes to stabilize blood sugar, such as reducing refined carbohydrates and including protein and healthy fats with meals.
                    </p>
                    <div className="mt-2">
                      <Link 
                        to="/blood-sugar" 
                        className="text-health-blue hover:text-blue-sky transition-colors font-medium"
                      >
                        Blood sugar strategies →
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-health-blue text-white font-bold">
                      4
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold mb-2">Implement Basic Supplementation</h4>
                    <p className="text-gray-700">
                      Begin with the Healthy Start Pack to provide essential nutrition. Add digestive enzymes and any specific supplements for your needs.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-health-blue text-white font-bold">
                      5
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold mb-2">Add Stress Management Practices</h4>
                    <p className="text-gray-700">
                      Incorporate daily stress reduction techniques such as deep breathing, meditation, or gentle movement to support adrenal function.
                    </p>
                    <div className="mt-2">
                      <Link 
                        to="/adrenal-thyroid" 
                        className="text-health-blue hover:text-blue-sky transition-colors font-medium"
                      >
                        Adrenal-thyroid strategies →
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-health-blue text-white font-bold">
                      6
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold mb-2">Track Your Progress</h4>
                    <p className="text-gray-700">
                      Keep a journal of symptoms, energy levels, and other health markers. This helps identify improvements and areas that need more attention.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-health-blue text-white font-bold">
                      7
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold mb-2">Seek Support and Guidance</h4>
                    <p className="text-gray-700">
                      Consider working with a health coach or practitioner familiar with the Triangle of Disease approach for personalized guidance.
                    </p>
                    <div className="mt-2">
                      <Link 
                        to="/resources" 
                        className="text-health-blue hover:text-blue-sky transition-colors font-medium"
                      >
                        Find resources and support →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-yellow-50 rounded-lg border-l-4 border-tangy-yellow">
                <h4 className="font-semibold mb-2">Important Note:</h4>
                <p className="text-gray-700">
                  This guide provides general strategies based on the Triangle of Disease concept. Always consult with qualified healthcare providers, especially when dealing with existing health conditions or before making significant changes to diet, lifestyle, or supplements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-health-blue text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white mb-6">Ready to Take Control of Your Health?</h2>
            <p className="text-lg text-blue-100 mb-8">
              Begin implementing these strategies today and take the first steps toward addressing the root causes of health challenges through the Triangle of Disease approach.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/assessment-tools" 
                className="btn bg-white text-health-blue hover:bg-tangy-yellow hover:text-gray-800"
              >
                Start with Assessments
              </Link>
              <Link 
                to="/resources" 
                className="btn bg-glorious-sunset text-white hover:bg-tangy-yellow hover:text-gray-800"
              >
                Explore Resources
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HealthStrategiesPage
