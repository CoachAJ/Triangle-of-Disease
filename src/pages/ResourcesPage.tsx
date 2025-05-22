import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { FaBook, FaUser, FaDownload, FaExternalLinkAlt, FaYoutube, FaPodcast } from 'react-icons/fa'
import HeroSection from '../components/HeroSection'

const ResourcesPage = () => {
  return (
    <>
      <Helmet>
        <title>Resources - Triangle of Disease</title>
        <meta name="description" content="Explore resources to deepen your understanding of the Triangle of Disease concept. Books, publications, videos, and connection to health coaches and community support." />
      </Helmet>

      <HeroSection
        title="Resources & Support"
        subtitle="Deepen Your Understanding"
        description="Explore resources to enhance your knowledge of the Triangle of Disease concept and connect with support to implement the approach."
        backgroundImage="/assets/resources-hero-bg.jpg"
      />

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-health-blue mb-6">Finding Support and Information</h2>
            <p className="text-lg mb-6">
              Information empowers individuals to help themselves and others. Understanding the Triangle of Disease concept can free you from being solely reliant on pharmaceuticals and help you take control of your health journey.
            </p>
            <p className="mb-6">
              On this page, you'll find resources to deepen your knowledge, connect with health coaches, and join a community of individuals implementing this approach.
            </p>
          </div>
        </div>
      </section>

      {/* Books & Publications Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="section-title">
            <h2>Books & Publications</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: 'url(/assets/book-metabolic-syndrome.jpg)' }}></div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <FaBook className="text-health-blue mr-2" />
                  <h3 className="text-xl font-proxima font-bold">Metabolic Syndrome</h3>
                </div>
                <p className="mb-4 text-gray-700">
                  This comprehensive book links symptoms to metabolism and Triangle breakdown. It explains how various health challenges connect to the fundamental biochemical issues described in the Triangle of Disease concept.
                </p>
                <a 
                  href="https://www.wellnesspublications.com/metabolic-syndrome" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-health-blue hover:text-blue-sky transition-colors font-medium"
                >
                  Learn More <FaExternalLinkAlt className="ml-1" size={12} />
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: 'url(/assets/book-hells-kitchen.jpg)' }}></div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <FaBook className="text-health-blue mr-2" />
                  <h3 className="text-xl font-proxima font-bold">Hell's Kitchen</h3>
                </div>
                <p className="mb-4 text-gray-700">
                  This eye-opening book reveals how modern food processing and dietary choices impact the Triangle of Disease. It provides practical guidance on making food choices that support all three points of the Triangle.
                </p>
                <a 
                  href="https://www.wellnesspublications.com/hells-kitchen" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-health-blue hover:text-blue-sky transition-colors font-medium"
                >
                  Learn More <FaExternalLinkAlt className="ml-1" size={12} />
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: 'url(/assets/book-lets-play-doctor.jpg)' }}></div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <FaBook className="text-health-blue mr-2" />
                  <h3 className="text-xl font-proxima font-bold">Let's Play Doctor</h3>
                </div>
                <p className="mb-4 text-gray-700">
                  This practical guide helps you understand common health challenges through the lens of the Triangle of Disease. It offers insights into symptoms and their connection to the three fundamental points.
                </p>
                <a 
                  href="https://www.wellnesspublications.com/lets-play-doctor" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-health-blue hover:text-blue-sky transition-colors font-medium"
                >
                  Learn More <FaExternalLinkAlt className="ml-1" size={12} />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-proxima font-bold mb-4">Additional Publications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="flex items-center mb-2">
                  <FaBook className="text-health-blue mr-2" />
                  <h4 className="font-semibold">Triangle of Disease Flip Chart</h4>
                </div>
                <p className="text-gray-700 mb-3">
                  A visual reference detailing diseases and their connection to the Triangle of Disease concept.
                </p>
                <a 
                  href="#" 
                  className="text-health-blue hover:text-blue-sky transition-colors font-medium"
                >
                  Request Information
                </a>
              </div>
              <div>
                <div className="flex items-center mb-2">
                  <FaDownload className="text-health-blue mr-2" />
                  <h4 className="font-semibold">Downloadable Guides</h4>
                </div>
                <p className="text-gray-700 mb-3">
                  Free PDF guides on specific health topics viewed through the Triangle of Disease lens.
                </p>
                <a 
                  href="#" 
                  className="text-health-blue hover:text-blue-sky transition-colors font-medium"
                >
                  Browse Guides
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video & Audio Resources */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="section-title">
            <h2>Video & Audio Resources</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 h-full">
                <div className="flex items-center mb-4">
                  <FaYoutube className="text-red-600 mr-2 text-2xl" />
                  <h3 className="text-xl font-proxima font-bold">YouTube Channel</h3>
                </div>
                <p className="mb-4 text-gray-700">
                  Visit the Critical Health News YouTube channel for in-depth discussions about the Triangle of Disease and related health topics.
                </p>
                <div className="aspect-w-16 aspect-h-9 mb-4 bg-gray-200 rounded">
                  <iframe 
                    className="rounded" 
                    src="https://www.youtube.com/embed/videoseries?list=PLYZ0d6vULJZnIGBXJNFqGMrHW7-T5_6iV" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
                <a 
                  href="https://www.youtube.com/c/CriticalHealthNews" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-health-blue hover:text-blue-sky transition-colors font-medium"
                >
                  Visit YouTube Channel <FaExternalLinkAlt className="ml-1" size={12} />
                </a>
              </div>
            </div>

            <div>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 h-full">
                <div className="flex items-center mb-4">
                  <FaPodcast className="text-purple-600 mr-2 text-2xl" />
                  <h3 className="text-xl font-proxima font-bold">Podcast Episodes</h3>
                </div>
                <p className="mb-4 text-gray-700">
                  Listen to Daily with Doc & Becca discuss the Triangle of Disease and interview health experts on implementing this approach.
                </p>
                <div className="space-y-4 mb-4">
                  <div className="bg-white p-3 rounded shadow-sm">
                    <h4 className="font-semibold">Understanding the Triangle of Disease</h4>
                    <p className="text-sm text-gray-600">Episode 42 • 45 min</p>
                  </div>
                  <div className="bg-white p-3 rounded shadow-sm">
                    <h4 className="font-semibold">Healing the Digestive System</h4>
                    <p className="text-sm text-gray-600">Episode 45 • 38 min</p>
                  </div>
                  <div className="bg-white p-3 rounded shadow-sm">
                    <h4 className="font-semibold">Blood Sugar Balance for Optimal Health</h4>
                    <p className="text-sm text-gray-600">Episode 48 • 42 min</p>
                  </div>
                </div>
                <a 
                  href="#" 
                  className="flex items-center text-health-blue hover:text-blue-sky transition-colors font-medium"
                >
                  Browse All Episodes <FaExternalLinkAlt className="ml-1" size={12} />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a 
              href="https://dailywithdoc.com/media" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn bg-health-blue text-white hover:bg-blue-sky"
            >
              Explore All Media Resources
            </a>
          </div>
        </div>
      </section>

      {/* Health Coaches & Community */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="section-title">
            <h2>Health Coaches & Community</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <div className="flex items-center mb-4">
                <FaUser className="text-health-blue mr-3 text-2xl" />
                <h3 className="text-xl font-proxima font-bold">Connect with Health Coaches</h3>
              </div>
              <p className="mb-6 text-gray-700">
                Work with health coaches trained in the Triangle of Disease approach for personalized guidance on implementing these strategies for your specific health challenges.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Benefits of Working with a Coach:</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Personalized implementation strategies</li>
                    <li>Guidance on supplement protocols</li>
                    <li>Help interpreting lab results</li>
                    <li>Accountability and ongoing support</li>
                    <li>Customized food plans and elimination diets</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Institute of Holistic Health:</h4>
                  <p className="text-gray-700 mb-3">
                    The Institute teaches about the four areas of health (nutritional, emotional, spiritual, financial) and identifying nutritional deficiencies and solutions.
                  </p>
                  <a 
                    href="#" 
                    className="text-health-blue hover:text-blue-sky transition-colors font-medium"
                  >
                    Find a Certified Health Coach
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-proxima font-bold mb-4">Join the Community</h3>
              <p className="mb-6 text-gray-700">
                Connect with others implementing the Triangle of Disease approach through these community resources:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 bg-gray-50 rounded-lg text-center">
                  <h4 className="font-semibold mb-2">Facebook Group</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Join discussions and share experiences with others on the same journey.
                  </p>
                  <a 
                    href="https://www.facebook.com/Healthwith90forlife" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-health-blue hover:text-blue-sky transition-colors font-medium"
                  >
                    Join Group
                  </a>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg text-center">
                  <h4 className="font-semibold mb-2">Monthly Webinars</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Participate in live Q&A sessions with health experts and coaches.
                  </p>
                  <a 
                    href="#" 
                    className="text-health-blue hover:text-blue-sky transition-colors font-medium"
                  >
                    View Schedule
                  </a>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg text-center">
                  <h4 className="font-semibold mb-2">Newsletter</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Receive regular updates, success stories, and implementation tips.
                  </p>
                  <a 
                    href="#" 
                    className="text-health-blue hover:text-blue-sky transition-colors font-medium"
                  >
                    Subscribe
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="section-title">
            <h2>Downloadable Resources</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-proxima font-bold mb-3 text-health-blue">Food Diary Template</h3>
              <p className="mb-4 text-gray-700">
                A printable template for tracking food intake and symptoms to identify potential trigger foods.
              </p>
              <a 
                href="#" 
                className="flex items-center text-health-blue hover:text-blue-sky transition-colors font-medium"
              >
                <FaDownload className="mr-2" /> Download PDF
              </a>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-proxima font-bold mb-3 text-health-blue">Healthy Shopping Guide</h3>
              <p className="mb-4 text-gray-700">
                A comprehensive guide to selecting foods that support all three points of the Triangle of Disease.
              </p>
              <a 
                href="#" 
                className="flex items-center text-health-blue hover:text-blue-sky transition-colors font-medium"
              >
                <FaDownload className="mr-2" /> Download PDF
              </a>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-proxima font-bold mb-3 text-health-blue">Health Assessment Questionnaires</h3>
              <p className="mb-4 text-gray-700">
                In-depth questionnaires for each point of the Triangle to help identify specific areas of focus.
              </p>
              <a 
                href="#" 
                className="flex items-center text-health-blue hover:text-blue-sky transition-colors font-medium"
              >
                <FaDownload className="mr-2" /> Download PDF
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-health-blue text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white mb-6">Ready to Begin Your Health Journey?</h2>
            <p className="text-lg text-blue-100 mb-8">
              Explore our comprehensive health strategies and assessment tools to start implementing the Triangle of Disease approach today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/health-strategies" 
                className="btn bg-white text-health-blue hover:bg-tangy-yellow hover:text-gray-800"
              >
                View Health Strategies
              </Link>
              <Link 
                to="/assessment-tools" 
                className="btn bg-glorious-sunset text-white hover:bg-tangy-yellow hover:text-gray-800"
              >
                Try Assessment Tools
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ResourcesPage
