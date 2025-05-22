import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { GiStomach, GiMedicines } from 'react-icons/gi'
import { FaListUl, FaClipboardCheck, FaExclamationTriangle } from 'react-icons/fa'
import HeroSection from '../components/HeroSection'
import InfoCard from '../components/InfoCard'

const DigestiveSystemPage = () => {
  return (
    <>
      <Helmet>
        <title>The Digestive System - Triangle of Disease</title>
        <meta name="description" content="Learn about the Digestive System - Point One of the Triangle of Disease. Understand leaky gut, dysbiosis, SIBO, and how digestive health impacts overall wellness." />
      </Helmet>

      <HeroSection
        title="The Digestive System"
        subtitle="Point One of the Triangle of Disease"
        description="The cornerstone of health where the outside world meets the inside world. The primary point on the Triangle and the foundation for addressing many chronic health challenges."
        backgroundImage="/assets/digestive-hero-bg.jpg"
      />

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-glorious-sunset mb-6">The Cornerstone of Health</h2>
              <p className="mb-4 text-lg">
                The digestive system is consistently identified as the <strong>first point</strong> on the Triangle of Disease. It represents the critical interface where the outside world (what we eat) meets our internal environment.
              </p>
              <p className="mb-4">
                The point where food components cross from the intestine into the bloodstream is the <strong>crux or nexus of health or disease</strong>. When this barrier is compromised, it leads to a cascade of issues throughout the body.
              </p>
              <p className="mb-4">
                A fundamental principle of the Triangle of Disease is that <strong>there is no chronic disease that does not involve a leaky gut</strong>. This makes addressing digestive health the essential first step in resolving many health challenges.
              </p>
              <div className="mt-8 p-4 bg-red-50 rounded-lg border-l-4 border-glorious-sunset">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <FaExclamationTriangle className="h-5 w-5 text-glorious-sunset" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-800">Key Insight</h3>
                    <p className="text-gray-700">
                      "All disease is cell disease, and all cell disease is preceded by dirty blood. The digestive system is where the blood becomes contaminated."
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/assets/digestive-system-diagram.jpg" 
                alt="Digestive System Diagram" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-health-blue text-white p-4 rounded-lg shadow-lg transform rotate-3 hidden md:block">
                <p className="font-proxima font-bold">Point 1 of the Triangle</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Concepts Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="section-title">
            <h2>Understanding Digestive Dysfunction</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <InfoCard 
              title="Leaky Gut" 
              icon={<GiStomach />}
              color="orange"
              className="h-full"
            >
              <p className="mb-3">
                Also known as intestinal permeability, this condition allows undigested food particles, toxins, and bacteria to "leak" through the intestinal wall into the bloodstream.
              </p>
              <p className="mb-3">
                This triggers immune responses, inflammation, and can lead to a wide range of health issues throughout the body.
              </p>
              <p>
                <strong>Important:</strong> There is no chronic disease that does not involve a leaky gut.
              </p>
            </InfoCard>

            <InfoCard 
              title="Dysbiosis" 
              icon={<GiMedicines />}
              color="blue"
              className="h-full"
            >
              <p className="mb-3">
                An imbalance in the gut microbiome where harmful bacteria, fungi, or parasites outnumber beneficial organisms.
              </p>
              <p className="mb-3">
                This disrupts normal digestive function, nutrient absorption, and immune system regulation.
              </p>
              <p>
                Dysbiosis contributes to inflammation, compromised intestinal barrier, and toxin production that can affect the entire body.
              </p>
            </InfoCard>

            <InfoCard 
              title="SIBO" 
              icon={<FaExclamationTriangle />}
              color="yellow"
              className="h-full"
            >
              <p className="mb-3">
                Small Intestinal Bacterial Overgrowth occurs when bacteria that normally live in the large intestine colonize the small intestine.
              </p>
              <p className="mb-3">
                This leads to fermentation of carbohydrates, producing gas, bloating, and digestive distress.
              </p>
              <p>
                SIBO is described as "the source of everything" in the Triangle of Disease concept and is intricately connected to leaky gut.
              </p>
            </InfoCard>
          </div>

          <div className="mt-12 p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-proxima font-bold mb-4">The Gut-Blood Barrier</h3>
            <p className="mb-4">
              The intestinal lining is meant to be selective, allowing only properly digested nutrients to enter the bloodstream while keeping everything else out. When this barrier is compromised:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Toxins enter the bloodstream, contributing to "dirty blood"</li>
              <li>Undigested food particles can trigger immune reactions</li>
              <li>Bacterial components can cause systemic inflammation</li>
              <li>Nutrient absorption is compromised, leading to deficiencies</li>
            </ul>
            <p>
              This is why the first strategy in the Triangle of Disease approach is to "stop the bleeding" - meaning prevent the leakage of undesirable substances into the bloodstream through the intestine.
            </p>
          </div>
        </div>
      </section>

      {/* How It Affects Health Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="section-title">
            <h2>How Digestive Health Affects the Entire Body</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-proxima font-bold mb-4 text-health-blue">Connected Health Challenges</h3>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Autoimmune Conditions</h4>
                  <p>
                    Molecular mimicry (where food particles resemble body tissues) and leaky gut are key factors in autoimmune disease development.
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Skin Conditions</h4>
                  <p>
                    Psoriasis, eczema, acne, and other skin issues begin at the digestive level, as the skin responds to internal toxicity.
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Neurological Issues</h4>
                  <p>
                    Anxiety, depression, brain fog, and even conditions like Parkinson's are linked to gut health through the gut-brain axis.
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Histamine & MCAS</h4>
                  <p>
                    Mast Cell Activation Syndrome and histamine intolerance are associated with toxicity entering through a leaky gut.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-proxima font-bold mb-4 text-health-blue">The Blood Connection</h3>
              <p className="mb-4">
                A central concept in the Triangle of Disease is that all disease is cell disease, and all cell disease is preceded by <strong>dirty blood</strong>. The digestive system is where the blood becomes contaminated.
              </p>
              <p className="mb-4">
                When toxins leak from the gut into the bloodstream, they can travel throughout the body and affect any organ or system, including:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>The brain and nervous system (causing anxiety, depression, brain fog)</li>
                <li>The skin (leading to various skin conditions)</li>
                <li>The joints (contributing to inflammation and pain)</li>
                <li>The thyroid and other endocrine organs</li>
                <li>The cardiovascular system</li>
              </ul>
              <p>
                This is why addressing the digestive system is fundamental to resolving many seemingly unrelated health issues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategies Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="section-title">
            <h2>Strategies for Digestive Health</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-glorious-sunset flex items-center justify-center text-white mb-4">
                <FaListUl size={24} />
              </div>
              <h3 className="text-xl font-proxima font-bold mb-3">Food Choices</h3>
              <p className="mb-4">
                Food choices are a major point of power in addressing digestive health. Focus on:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Eating nutrient-dense whole foods</li>
                <li>Identifying and eliminating problematic foods</li>
                <li>Avoiding fried and processed fats</li>
                <li>Consuming easy-to-digest foods when healing</li>
              </ul>
              <p className="text-sm text-gray-600 italic">
                A food diary and elimination diet are essential tools for identifying individual problem foods.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-health-blue flex items-center justify-center text-white mb-4">
                <GiMedicines size={24} />
              </div>
              <h3 className="text-xl font-proxima font-bold mb-3">Digestive Support</h3>
              <p className="mb-4">
                Key supplements to support digestive health include:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li><strong>Ultimate Enzymes:</strong> Contains betaine HCL, helps with digestion, anti-inflammatory</li>
                <li><strong>i26:</strong> Helps kill bacteria and stabilize the microbiome</li>
                <li><strong>Nightly Essence:</strong> Contains probiotics for gut health</li>
                <li><strong>Ultimate Microbiome:</strong> Supports healthy gut flora</li>
                <li><strong>Daily Digest:</strong> For leaky gut/SIBO support</li>
                <li><strong>Bile Support:</strong> Important for detoxifying, has antibacterial properties</li>
              </ul>
              <p className="text-sm text-gray-600 italic">
                Proper digestion improves nutrient absorption, especially important for healing the intestinal lining.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-tangy-yellow flex items-center justify-center text-gray-800 mb-4">
                <FaClipboardCheck size={24} />
              </div>
              <h3 className="text-xl font-proxima font-bold mb-3">Healing Protocol</h3>
              <p className="mb-4">
                A comprehensive approach to healing the digestive system includes:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Removing irritating foods and substances</li>
                <li>Supporting proper digestion with enzymes</li>
                <li>Rebalancing the gut microbiome</li>
                <li>Providing nutrients that support intestinal repair (like Vitamin A)</li>
                <li>Addressing inflammation</li>
                <li>Supporting detoxification pathways</li>
              </ul>
              <p className="text-sm text-gray-600 italic">
                This approach helps "stop the bleeding" - preventing toxins from entering the bloodstream through a leaky gut.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link 
              to="/health-strategies" 
              className="btn bg-glorious-sunset text-white hover:bg-tangy-yellow hover:text-gray-800"
            >
              View Comprehensive Health Strategies
            </Link>
          </div>
        </div>
      </section>

      {/* Next Steps Section */}
      <section className="py-16 bg-health-blue text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white mb-6">Continue Exploring the Triangle</h2>
            <p className="text-lg text-blue-100 mb-8">
              Understanding the digestive system is just the first step. Explore the other points of the Triangle of Disease to gain a complete picture of foundational health.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link 
                to="/blood-sugar" 
                className="bg-white rounded-lg p-6 text-health-blue hover:bg-tangy-yellow transition-all duration-300 hover:shadow-lg flex flex-col items-center"
              >
                <MdBloodtype size={40} className="mb-3" />
                <h3 className="text-xl font-proxima font-bold mb-2">Blood Sugar System</h3>
                <p className="text-gray-700">
                  Explore Point Two of the Triangle
                </p>
              </Link>
              <Link 
                to="/adrenal-thyroid" 
                className="bg-white rounded-lg p-6 text-health-blue hover:bg-tangy-yellow transition-all duration-300 hover:shadow-lg flex flex-col items-center"
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

export default DigestiveSystemPage
