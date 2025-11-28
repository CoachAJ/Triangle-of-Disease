import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { FaStethoscope, FaHeartbeat, FaBrain } from 'react-icons/fa'
import { GiStomach, GiMedicines } from 'react-icons/gi'
import { MdBloodtype } from 'react-icons/md'
import HeroSection from '../components/HeroSection'
import InfoCard from '../components/InfoCard'
import TestimonialCard from '../components/TestimonialCard'
import SymptomChecker from '../components/SymptomChecker'

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Triangle of Disease - Understanding the Root of Chronic Health Issues</title>
        <meta name="description" content="Explore the Triangle of Disease concept to understand and address the root causes of chronic health issues. Learn about the digestive system, blood sugar system, and adrenal-thyroid complex." />
      </Helmet>

      <HeroSection
        title="The Triangle of Disease"
        subtitle="A Groundbreaking Approach to Health"
        description="Understand the fundamental biochemical breakdowns that contribute to chronic health challenges and discover the path to comprehensive healing."
        buttonText="Explore the Triangle"
        buttonLink="#triangle-explanation"
        showTriangle={true}
      />

      {/* Introduction Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="triangle-explanation">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-health-blue mb-6 text-4xl md:text-5xl">Understanding the Triangle of Disease</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              The Triangle of Disease is a simplified model that explains the fundamental biochemical breakdowns in the body that lead to chronic health issues. By focusing on these three core systems, we can address the root causes rather than just treating symptoms.
            </p>
          </div>

          {/* Triangle of Disease Cards - Responsive Layout */}
          <div className="mb-16">
            {/* Triangle SVG for larger screens only */}
            <div className="hidden md:block relative" style={{ height: '480px' }}>
              <svg
                width="100%"
                height="480"
                viewBox="0 0 500 480"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
                style={{ filter: 'drop-shadow(0 0 60px #3CAADF66)', maxWidth: '500px' }}
              >
                <defs>
                  <linearGradient id="triangleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFB81C" stopOpacity="0.4" />
                    <stop offset="50%" stopColor="#3CAADF" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#F58A34" stopOpacity="0.4" />
                  </linearGradient>
                </defs>
                <polygon
                  points="250,40 50,440 450,440"
                  fill="url(#triangleGradient)"
                  stroke="#FFB81C"
                  strokeWidth="12"
                  strokeLinejoin="round"
                  opacity="0.5"
                  className="animate-pulse"
                  style={{ animationDuration: '4s' }}
                />
              </svg>
              
              {/* Triangle Points positioned absolutely on larger screens */}
              <div className="absolute z-10 left-1/2 top-0 -translate-x-1/2" style={{ width: '280px', maxWidth: '90%' }}>
                <div className="triangle-point bg-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 rounded-2xl p-6 border-2 border-tangy-yellow/20">
                  <div className="mx-auto w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-tangy-yellow to-yellow-500 flex items-center justify-center text-gray-800 mb-4 shadow-xl ring-4 ring-yellow-300/50 transition-transform duration-300 hover:rotate-12">
                    <FaStethoscope size={40} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-proxima font-bold mb-3 text-center text-health-blue">Adrenal-Thyroid Complex</h3>
                  <p className="text-center mb-4 text-sm leading-relaxed text-gray-700">
                    The regulatory hub that influences everything from energy production to hormonal balance and stress response.
                  </p>
                  <div className="text-center">
                    <Link 
                      to="/adrenal-thyroid" 
                      className="btn py-2 px-6 bg-health-blue text-white hover:bg-blue-sky text-sm inline-block transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="absolute z-10 left-0 bottom-0" style={{ width: '280px', maxWidth: '90%' }}>
                <div className="triangle-point bg-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 rounded-2xl p-6 border-2 border-glorious-sunset/20">
                  <div className="mx-auto w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-glorious-sunset to-orange-600 flex items-center justify-center text-white mb-4 shadow-xl ring-4 ring-orange-300/50 transition-transform duration-300 hover:rotate-12">
                    <GiStomach size={40} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-proxima font-bold mb-3 text-center text-health-blue">Digestive System</h3>
                  <p className="text-center mb-4 text-sm leading-relaxed text-gray-700">
                    The place where the outside world meets the inside world. Issues here lead to toxicity and malnourishment entering the bloodstream.
                  </p>
                  <div className="text-center">
                    <Link 
                      to="/digestive-system" 
                      className="btn py-2 px-6 bg-health-blue text-white hover:bg-blue-sky text-sm inline-block transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="absolute z-10 right-0 bottom-0" style={{ width: '280px', maxWidth: '90%' }}>
                <div className="triangle-point bg-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 rounded-2xl p-6 border-2 border-blue-sky/20">
                  <div className="mx-auto w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-blue-sky to-blue-600 flex items-center justify-center text-white mb-4 shadow-xl ring-4 ring-blue-300/50 transition-transform duration-300 hover:rotate-12">
                    <MdBloodtype size={40} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-proxima font-bold mb-3 text-center text-health-blue">Blood Sugar System</h3>
                  <p className="text-center mb-4 text-sm leading-relaxed text-gray-700">
                    Disturbances in blood sugar (disglycemia) are consistently involved in chronic disease and metabolic syndrome.
                  </p>
                  <div className="text-center">
                    <Link 
                      to="/blood-sugar" 
                      className="btn py-2 px-6 bg-health-blue text-white hover:bg-blue-sky text-sm inline-block transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Mobile-friendly stacked cards */}
            <div className="md:hidden grid grid-cols-1 gap-8">
              {/* Adrenal-Thyroid Card */}
              <div className="bg-white shadow-xl rounded-2xl p-6 border-2 border-tangy-yellow/20 hover:shadow-2xl transition-all duration-300">
                <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-tangy-yellow to-yellow-500 flex items-center justify-center text-gray-800 mb-4 shadow-xl ring-4 ring-yellow-300/50">
                  <FaStethoscope size={36} />
                </div>
                <h3 className="text-2xl font-proxima font-bold mb-3 text-center text-health-blue">Adrenal-Thyroid Complex</h3>
                <p className="text-center mb-4 text-base leading-relaxed text-gray-700">
                  The regulatory hub that influences everything from energy production to hormonal balance and stress response.
                </p>
                <div className="text-center">
                  <Link 
                    to="/adrenal-thyroid" 
                    className="btn py-3 px-8 bg-health-blue text-white hover:bg-blue-sky text-base inline-block transform hover:scale-105 transition-all duration-300 shadow-md"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              
              {/* Digestive System Card */}
              <div className="bg-white shadow-xl rounded-2xl p-6 border-2 border-glorious-sunset/20 hover:shadow-2xl transition-all duration-300">
                <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-glorious-sunset to-orange-600 flex items-center justify-center text-white mb-4 shadow-xl ring-4 ring-orange-300/50">
                  <GiStomach size={36} />
                </div>
                <h3 className="text-2xl font-proxima font-bold mb-3 text-center text-health-blue">Digestive System</h3>
                <p className="text-center mb-4 text-base leading-relaxed text-gray-700">
                  The place where the outside world meets the inside world. Issues here lead to toxicity and malnourishment entering the bloodstream.
                </p>
                <div className="text-center">
                  <Link 
                    to="/digestive-system" 
                    className="btn py-3 px-8 bg-health-blue text-white hover:bg-blue-sky text-base inline-block transform hover:scale-105 transition-all duration-300 shadow-md"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              
              {/* Blood Sugar System Card */}
              <div className="bg-white shadow-xl rounded-2xl p-6 border-2 border-blue-sky/20 hover:shadow-2xl transition-all duration-300">
                <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-blue-sky to-blue-600 flex items-center justify-center text-white mb-4 shadow-xl ring-4 ring-blue-300/50">
                  <MdBloodtype size={36} />
                </div>
                <h3 className="text-2xl font-proxima font-bold mb-3 text-center text-health-blue">Blood Sugar System</h3>
                <p className="text-center mb-4 text-base leading-relaxed text-gray-700">
                  Disturbances in blood sugar (disglycemia) are consistently involved in chronic disease and metabolic syndrome.
                </p>
                <div className="text-center">
                  <Link 
                    to="/blood-sugar" 
                    className="btn py-3 px-8 bg-health-blue text-white hover:bg-blue-sky text-base inline-block transform hover:scale-105 transition-all duration-300 shadow-md"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center bg-gradient-to-r from-blue-50 via-orange-50 to-yellow-50 rounded-3xl p-8 md:p-12 shadow-lg">
            <div className="max-w-3xl mx-auto">
              <div className="text-6xl mb-6 text-tangy-yellow opacity-50">"</div>
              <p className="text-xl md:text-2xl italic mb-6 text-gray-800 leading-relaxed font-medium">
                All chronic and degenerative diseases can be backtracked to the Triangle of Disease. They are not primary conditions, but rather secondary conditions that arise when the fundamental systems break down.
              </p>
              <div className="h-1 w-24 bg-gradient-to-r from-health-blue via-tangy-yellow to-glorious-sunset mx-auto mb-8 rounded-full"></div>
            </div>
            <Link 
              to="/health-strategies" 
              className="btn bg-gradient-to-r from-glorious-sunset to-tangy-yellow text-white hover:from-tangy-yellow hover:to-glorious-sunset transform hover:scale-105 shadow-xl text-lg px-10 py-4"
            >
              View Health Strategies
            </Link>
          </div>
        </div>
      </section>

      {/* Decorative Divider */}
      <div className="relative h-24 bg-gradient-to-b from-white to-gray-50">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-health-blue animate-bounce" style={{ animationDelay: '0s' }}></div>
            <div className="w-3 h-3 rounded-full bg-tangy-yellow animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-3 h-3 rounded-full bg-glorious-sunset animate-bounce" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </div>

      {/* Key Health Challenges Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="section-title">
            <h2 className="text-4xl md:text-5xl mb-4">How the Triangle Explains Common Health Challenges</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Understanding the root causes behind chronic conditions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <InfoCard 
              title="Autoimmune Conditions" 
              icon={<FaHeartbeat />}
              color="orange"
            >
              <p>
                All autoimmune diseases share similar mechanisms regardless of where they manifest. They are linked to dirty blood and must be backtracked to intestinal issues, dysbiosis, SIBO, and leaky gut.
              </p>
              <p className="text-sm italic mt-4">
                Examples: Hashimoto's, Rheumatoid Arthritis, Lupus, Multiple Sclerosis
              </p>
            </InfoCard>

            <InfoCard 
              title="Skin Problems" 
              icon={<GiMedicines />}
              color="blue"
            >
              <p>
                Skin conditions start in the same place as internal issues. The skin responds to toxicity and nutritional deficiency, and should be approached by first addressing intestinal permeability.
              </p>
              <p className="text-sm italic mt-4">
                Examples: Psoriasis, Eczema, Acne, Cysts, Dark Spots
              </p>
            </InfoCard>

            <InfoCard 
              title="Neurological Issues" 
              icon={<FaBrain />}
              color="yellow"
            >
              <p>
                Brain and nervous system problems are intimately linked to digestive health and blood sugar. Inflammation at the brain level often involves dirty blood and toxicity.
              </p>
              <p className="text-sm italic mt-4">
                Examples: Dementia, Parkinson's, Tremors, Anxiety, Depression
              </p>
            </InfoCard>
          </div>

          <div className="text-center mt-16">
            <Link 
              to="/assessment-tools" 
              className="btn bg-gradient-to-r from-health-blue to-blue-sky text-white hover:from-blue-sky hover:to-health-blue transform hover:scale-105 shadow-xl text-lg px-10 py-4"
            >
              Try Our Assessment Tools
            </Link>
          </div>
        </div>
      </section>

      {/* Decorative Divider */}
      <div className="relative h-24 bg-gradient-to-b from-white to-orange-50">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-glorious-sunset to-transparent rounded-full"></div>
        </div>
      </div>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-orange-50 via-yellow-50 to-blue-50">
        <div className="container-custom">
          <div className="section-title">
            <h2 className="text-4xl md:text-5xl mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Real people achieving real results with the Triangle of Disease approach</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="After years of dealing with chronic fatigue and digestive issues, understanding the Triangle of Disease concept completely changed my approach. Working on all three points has given me my life back!"
              author="Sarah M."
              condition="Recovered from Chronic Fatigue"
            />

            <TestimonialCard
              quote="My autoimmune condition had me on multiple medications with little improvement. Addressing the digestive system first, then blood sugar and finally the adrenal-thyroid complex has put my condition into remission."
              author="Michael T."
              condition="Hashimoto's Thyroiditis"
            />

            <TestimonialCard
              quote="I was diagnosed with pre-diabetes and had skin issues. Learning about the connection between blood sugar, digestion, and skin health through the Triangle of Disease approach helped me reverse my condition naturally."
              author="Jennifer K."
              condition="Reversed Pre-diabetes"
            />
          </div>
        </div>
      </section>

      {/* Decorative Divider */}
      <div className="relative h-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-2 h-12 bg-gradient-to-b from-blue-sky to-health-blue rounded-full opacity-30" style={{ height: `${(i + 1) * 8}px` }}></div>
            ))}
          </div>
        </div>
      </div>

      {/* Symptom Checker */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="section-title">
            <h2 className="text-4xl md:text-5xl mb-4">Identify Your Health Patterns</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Discover which points of the Triangle may need your attention</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <SymptomChecker />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-health-blue via-blue-sky to-health-blue text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-tangy-yellow opacity-10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-glorious-sunset opacity-10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white mb-6 text-4xl md:text-5xl font-bold">Take Control of Your Health Today</h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              By understanding the Triangle of Disease, you have more power over your body's biochemistry and health challenges than you might realize. Start your journey to comprehensive health by exploring our resources.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link 
                to="/resources" 
                className="btn bg-white text-health-blue hover:bg-tangy-yellow hover:text-gray-800 transform hover:scale-105 shadow-xl text-lg px-10 py-4"
              >
                Explore Resources
              </Link>
              <Link 
                to="/health-strategies" 
                className="btn bg-gradient-to-r from-glorious-sunset to-tangy-yellow text-white hover:from-tangy-yellow hover:to-glorious-sunset transform hover:scale-105 shadow-xl text-lg px-10 py-4"
              >
                View Health Strategies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
