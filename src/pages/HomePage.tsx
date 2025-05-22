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
      <section className="py-16 bg-gray-50" id="triangle-explanation">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-health-blue mb-6">Understanding the Triangle of Disease</h2>
            <p className="text-lg">
              The Triangle of Disease is a simplified model that explains the fundamental biochemical breakdowns in the body that lead to chronic health issues. By focusing on these three core systems, we can address the root causes rather than just treating symptoms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="triangle-point bg-white shadow-md hover:shadow-lg">
              <div className="w-20 h-20 rounded-full bg-glorious-sunset flex items-center justify-center text-white mb-4">
                <GiStomach size={40} />
              </div>
              <h3 className="text-xl font-proxima font-bold mb-3">Point 1: Digestive System</h3>
              <p className="text-center mb-4">
                The place where the outside world meets the inside world. Issues here lead to toxicity and malnourishment entering the bloodstream.
              </p>
              <Link 
                to="/digestive-system" 
                className="btn py-2 px-4 bg-health-blue text-white hover:bg-blue-sky"
              >
                Learn More
              </Link>
            </div>

            <div className="triangle-point bg-white shadow-md hover:shadow-lg">
              <div className="w-20 h-20 rounded-full bg-blue-sky flex items-center justify-center text-white mb-4">
                <MdBloodtype size={40} />
              </div>
              <h3 className="text-xl font-proxima font-bold mb-3">Point 2: Blood Sugar System</h3>
              <p className="text-center mb-4">
                Disturbances in blood sugar (disglycemia) are consistently involved in chronic disease and metabolic syndrome.
              </p>
              <Link 
                to="/blood-sugar" 
                className="btn py-2 px-4 bg-health-blue text-white hover:bg-blue-sky"
              >
                Learn More
              </Link>
            </div>

            <div className="triangle-point bg-white shadow-md hover:shadow-lg">
              <div className="w-20 h-20 rounded-full bg-tangy-yellow flex items-center justify-center text-gray-800 mb-4">
                <FaStethoscope size={40} />
              </div>
              <h3 className="text-xl font-proxima font-bold mb-3">Point 3: Adrenal-Thyroid Complex</h3>
              <p className="text-center mb-4">
                The regulatory hub that influences everything from energy production to hormonal balance and stress response.
              </p>
              <Link 
                to="/adrenal-thyroid" 
                className="btn py-2 px-4 bg-health-blue text-white hover:bg-blue-sky"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg italic mb-8">
              "All chronic and degenerative diseases can be backtracked to the Triangle of Disease. They are not primary conditions, but rather secondary conditions that arise when the fundamental systems break down."
            </p>
            <Link 
              to="/health-strategies" 
              className="btn bg-glorious-sunset text-white hover:bg-tangy-yellow hover:text-gray-800"
            >
              View Health Strategies
            </Link>
          </div>
        </div>
      </section>

      {/* Key Health Challenges Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="section-title">
            <h2>How the Triangle Explains Common Health Challenges</h2>
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

          <div className="text-center mt-12">
            <Link 
              to="/assessment-tools" 
              className="btn bg-health-blue text-white hover:bg-blue-sky"
            >
              Try Our Assessment Tools
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="section-title">
            <h2>Success Stories</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="After years of dealing with chronic fatigue and digestive issues, understanding the Triangle of Disease concept completely changed my approach. Working on all three points has given me my life back!"
              author="Sarah M."
              condition="Recovered from Chronic Fatigue"
              imageSrc="/assets/testimonial-1.jpg"
            />

            <TestimonialCard
              quote="My autoimmune condition had me on multiple medications with little improvement. Addressing the digestive system first, then blood sugar and finally the adrenal-thyroid complex has put my condition into remission."
              author="Michael T."
              condition="Hashimoto's Thyroiditis"
              imageSrc="/assets/testimonial-2.jpg"
            />

            <TestimonialCard
              quote="I was diagnosed with pre-diabetes and had skin issues. Learning about the connection between blood sugar, digestion, and skin health through the Triangle of Disease approach helped me reverse my condition naturally."
              author="Jennifer K."
              condition="Reversed Pre-diabetes"
              imageSrc="/assets/testimonial-3.jpg"
            />
          </div>
        </div>
      </section>

      {/* Symptom Checker */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="section-title">
            <h2>Identify Your Health Patterns</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <SymptomChecker />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-health-blue text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white mb-6">Take Control of Your Health Today</h2>
            <p className="text-lg text-blue-100 mb-8">
              By understanding the Triangle of Disease, you have more power over your body's biochemistry and health challenges than you might realize. Start your journey to comprehensive health by exploring our resources.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/resources" 
                className="btn bg-white text-health-blue hover:bg-tangy-yellow hover:text-gray-800"
              >
                Explore Resources
              </Link>
              <Link 
                to="/health-strategies" 
                className="btn bg-glorious-sunset text-white hover:bg-tangy-yellow hover:text-gray-800"
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
