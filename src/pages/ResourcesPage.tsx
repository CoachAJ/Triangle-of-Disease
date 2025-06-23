import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { FaBook, FaUser, FaDownload, FaExternalLinkAlt, FaYoutube, FaFileAlt, FaDatabase, FaBell, FaNewspaper, FaPills, FaHeartbeat, FaPodcast, FaSpotify, FaAmazon, FaApple, FaRss, FaFacebook, FaTv, FaVideo } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import { useAffiliate } from '../contexts/AffiliateContext'
import HeroSection from '../components/HeroSection'
import NutrientResourceApp from '../components/NutrientResourceApp'

const ResourcesPage = () => {
  const { addAffiliateToLink } = useAffiliate()

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

      {/* Resource Library Section */}
      <section className="py-16 bg-blue-50">
        <div className="container-custom">
          <div className="section-title">
            <h2>Resource Library</h2>
            <p className="text-lg text-gray-600 mt-4">Downloadable resources to support your health journey</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Food Diary Template */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-32 bg-gradient-to-br from-tangy-yellow to-glorious-sunset flex items-center justify-center">
                <FaFileAlt className="text-white text-4xl" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-proxima font-bold mb-3 text-health-blue">Food Diary Template</h3>
                <p className="text-gray-600 mb-4">
                  A printable template for tracking food intake and symptoms to identify potential trigger foods.
                </p>
                <a
                  href="https://docs.google.com/document/d/16taR9IlYlrtGA4k6AhG0OeaOQMXAxU6lNE0SO-zSRgA/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-health-blue text-white px-4 py-2 rounded-lg hover:bg-blue-sky transition-colors"
                >
                  <FaDownload className="mr-2" />
                  Download Template
                </a>
              </div>
            </div>

            {/* eBooks */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-32 bg-gradient-to-br from-health-blue to-blue-sky flex items-center justify-center">
                <FaBook className="text-white text-4xl" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-proxima font-bold mb-3 text-health-blue">eBooks</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive guides on the Triangle of Disease approach and health optimization strategies.
                </p>
                <button className="inline-flex items-center bg-health-blue text-white px-4 py-2 rounded-lg hover:bg-blue-sky transition-colors">
                  <FaDownload className="mr-2" />
                  Browse eBooks
                </button>
              </div>
            </div>

            {/* Meal Templates */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-32 bg-gradient-to-br from-glorious-sunset to-hot-chocolate flex items-center justify-center">
                <FaFileAlt className="text-white text-4xl" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-proxima font-bold mb-3 text-health-blue">Meal Templates</h3>
                <p className="text-gray-600 mb-4">
                  Ready-to-use meal planning templates designed around the Triangle of Disease principles.
                </p>
                <button 
                  onClick={() => alert('Meal templates coming soon!')}
                  className="inline-flex items-center bg-health-blue text-white px-4 py-2 rounded-lg hover:bg-blue-sky transition-colors"
                >
                  <FaDownload className="mr-2" />
                  Get Templates
                </button>
              </div>
            </div>

            {/* Grocery Checklists */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-32 bg-gradient-to-br from-blue-sky to-health-blue flex items-center justify-center">
                <FaFileAlt className="text-white text-4xl" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-proxima font-bold mb-3 text-health-blue">Grocery Checklists</h3>
                <p className="text-gray-600 mb-4">
                  Organized shopping lists to help you stock your kitchen with health-supporting foods.
                </p>
                <a
                  href="https://docs.google.com/document/d/1m6cfpQ0EP1gtHSlnXxMTSQhL25k7UvLx9Za--EuLDLo/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-health-blue text-white px-4 py-2 rounded-lg hover:bg-blue-sky transition-colors"
                >
                  <FaDownload className="mr-2" />
                  Download Lists
                </a>
              </div>
            </div>

            {/* Nutrient Database */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-32 bg-gradient-to-br from-tangy-yellow to-glorious-sunset flex items-center justify-center">
                <FaDatabase className="text-white text-4xl" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-proxima font-bold mb-3 text-health-blue">Nutrient Database</h3>
                <p className="text-gray-600 mb-4">
                  Searchable information on food items, including nutrient profiles and allergen alerts.
                </p>
                <a
                  href="https://docs.google.com/document/d/1ruleR7QARN5ITVV5UsjWtP_ED5wVug3nh2r8ehb5Pqk/edit?tab=t.0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-health-blue text-white px-4 py-2 rounded-lg hover:bg-blue-sky transition-colors"
                >
                  <FaDatabase className="mr-2" />
                  INFO PREVIEW
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Video Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="section-title">
            <h2>Featured Video</h2>
            <p className="text-lg text-gray-600 mt-4">Latest insights from Critical Health News</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-video">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/hS5lWmBnqeg?si=Z3cxaRQcVQo1cItR" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                  className="rounded-t-lg"
                ></iframe>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-health-blue mb-2">Critical Health News</h3>
                    <p className="text-gray-600">Stay informed with the latest health insights and research</p>
                  </div>
                  <a
                    href="https://www.youtube.com/@CriticalHealthNews/streams"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                  >
                    <FaYoutube className="mr-2" />
                    Visit Channel
                  </a>
                </div>
              </div>
            </div>
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
              <div className="h-48 bg-gradient-to-br from-health-blue to-blue-sky flex items-center justify-center">
                <FaBook className="text-white text-6xl opacity-50" />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <FaBook className="text-health-blue mr-2" />
                  <h3 className="text-xl font-proxima font-bold">Metabolic Syndrome</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Understanding the root causes and natural approaches to metabolic dysfunction.
                </p>
                <button className="inline-flex items-center text-health-blue hover:text-blue-sky font-medium">
                  <FaExternalLinkAlt className="mr-2" />
                  Learn More
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-glorious-sunset to-hot-chocolate flex items-center justify-center">
                <FaBook className="text-white text-6xl opacity-50" />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <FaBook className="text-health-blue mr-2" />
                  <h3 className="text-xl font-proxima font-bold">Nutritional Deficiencies</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Identifying and addressing common nutrient gaps in modern diets.
                </p>
                <button className="inline-flex items-center text-health-blue hover:text-blue-sky font-medium">
                  <FaExternalLinkAlt className="mr-2" />
                  Learn More
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-tangy-yellow to-glorious-sunset flex items-center justify-center">
                <FaBook className="text-white text-6xl opacity-50" />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <FaBook className="text-health-blue mr-2" />
                  <h3 className="text-xl font-proxima font-bold">Toxic Overload</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Strategies for reducing environmental toxins and supporting detoxification.
                </p>
                <button className="inline-flex items-center text-health-blue hover:text-blue-sky font-medium">
                  <FaExternalLinkAlt className="mr-2" />
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supplement Recommendations Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="section-title">
            <h2>Supplement Recommendations</h2>
            <p className="text-lg text-gray-600 mt-4">Deep dive into some of our favorite supplements</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-24 bg-gradient-to-br from-blue-sky to-health-blue flex items-center justify-center">
                <FaPills className="text-white text-3xl" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-proxima font-bold mb-2 text-health-blue">Top Shelf Collagen</h3>
                <a
                  href="https://topshelfcollagen.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-health-blue hover:text-blue-sky font-medium"
                >
                  <FaExternalLinkAlt className="mr-2" />
                  Learn More
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-24 bg-gradient-to-br from-glorious-sunset to-hot-chocolate flex items-center justify-center">
                <FaPills className="text-white text-3xl" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-proxima font-bold mb-2 text-health-blue">Clear Brain Fog</h3>
                <a
                  href="https://clearbrainfog.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-health-blue hover:text-blue-sky font-medium"
                >
                  <FaExternalLinkAlt className="mr-2" />
                  Learn More
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-24 bg-gradient-to-br from-tangy-yellow to-glorious-sunset flex items-center justify-center">
                <FaPills className="text-white text-3xl" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-proxima font-bold mb-2 text-health-blue">Tangy Tangerine</h3>
                <a
                  href="https://tangytangerineliving.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-health-blue hover:text-blue-sky font-medium"
                >
                  <FaExternalLinkAlt className="mr-2" />
                  Learn More
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-24 bg-gradient-to-br from-health-blue to-blue-sky flex items-center justify-center">
                <FaPills className="text-white text-3xl" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-proxima font-bold mb-2 text-health-blue">Bones Plus</h3>
                <a
                  href="https://bonesplus.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-health-blue hover:text-blue-sky font-medium"
                >
                  <FaExternalLinkAlt className="mr-2" />
                  Learn More
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-24 bg-gradient-to-br from-blue-sky to-health-blue flex items-center justify-center">
                <FaPills className="text-white text-3xl" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-proxima font-bold mb-2 text-health-blue">EFA Supplements</h3>
                <a
                  href="https://efasupplements.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-health-blue hover:text-blue-sky font-medium"
                >
                  <FaExternalLinkAlt className="mr-2" />
                  Learn More
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-24 bg-gradient-to-br from-glorious-sunset to-hot-chocolate flex items-center justify-center">
                <FaPills className="text-white text-3xl" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-proxima font-bold mb-2 text-health-blue">Pro Power Drink</h3>
                <a
                  href="https://propowerdrink.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-health-blue hover:text-blue-sky font-medium"
                >
                  <FaExternalLinkAlt className="mr-2" />
                  Learn More
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-24 bg-gradient-to-br from-tangy-yellow to-glorious-sunset flex items-center justify-center">
                <FaPills className="text-white text-3xl" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-proxima font-bold mb-2 text-health-blue">Discover Selenium</h3>
                <a
                  href="https://discoverselenium.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-health-blue hover:text-blue-sky font-medium"
                >
                  <FaExternalLinkAlt className="mr-2" />
                  Learn More
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-24 bg-gradient-to-br from-health-blue to-blue-sky flex items-center justify-center">
                <FaPills className="text-white text-3xl" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-proxima font-bold mb-2 text-health-blue">Manage Stress</h3>
                <a
                  href="https://managestressnaturally.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-health-blue hover:text-blue-sky font-medium"
                >
                  <FaExternalLinkAlt className="mr-2" />
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Podcast Platforms Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="section-title">
            <h2>Listen to Our Podcast</h2>
            <p className="text-lg text-gray-600 mt-4">Ways to view and listen to the Daily with Doc & Becca podcast</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <a 
              href={addAffiliateToLink("https://amazon.dailywithdoc.com/")} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <FaAmazon className="text-3xl text-health-blue mb-2" />
              <span className="text-gray-700 font-medium">Amazon</span>
            </a>

            <a 
              href={addAffiliateToLink("https://apple.dailywithdoc.com")} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <FaApple className="text-3xl text-health-blue mb-2" />
              <span className="text-gray-700 font-medium">Apple Podcasts</span>
            </a>

            <a 
              href={addAffiliateToLink("https://audible.dailywithdoc.com")} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <FaRss className="text-3xl text-health-blue mb-2" />
              <span className="text-gray-700 font-medium">Audible</span>
            </a>

            <a 
              href={addAffiliateToLink("https://deezer.dailywithdoc.com")} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <FaPodcast className="text-3xl text-health-blue mb-2" />
              <span className="text-gray-700 font-medium">Deezer</span>
            </a>

            <a 
              href={addAffiliateToLink("https://facebook.dailywithdoc.com")} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <FaFacebook className="text-3xl text-health-blue mb-2" />
              <span className="text-gray-700 font-medium">Facebook</span>
            </a>

            <a 
              href={addAffiliateToLink("https://iheart.dailywithdoc.com")} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <FaHeartbeat className="text-3xl text-health-blue mb-2" />
              <span className="text-gray-700 font-medium">iHeart Radio</span>
            </a>

            <a 
              href={addAffiliateToLink("https://pocketcasts.dailywithdoc.com")} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <FaPodcast className="text-3xl text-health-blue mb-2" />
              <span className="text-gray-700 font-medium">Pocket Casts</span>
            </a>

            <a 
              href={addAffiliateToLink("https://roku.dailywithdoc.com")} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <FaTv className="text-3xl text-health-blue mb-2" />
              <span className="text-gray-700 font-medium">Roku</span>
            </a>

            <a 
              href={addAffiliateToLink("https://rumble.dailywithdoc.com")} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <FaVideo className="text-3xl text-health-blue mb-2" />
              <span className="text-gray-700 font-medium">Rumble</span>
            </a>

            <a 
              href={addAffiliateToLink("https://spotify.dailywithdoc.com")} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <FaSpotify className="text-3xl text-health-blue mb-2" />
              <span className="text-gray-700 font-medium">Spotify</span>
            </a>

            <a 
              href={addAffiliateToLink("https://x.dailywithdoc.com")} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <BsTwitter className="text-3xl text-health-blue mb-2" />
              <span className="text-gray-700 font-medium">X (Twitter)</span>
            </a>

            <a 
              href={addAffiliateToLink("https://youtube.dailywithdoc.com")} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <FaYoutube className="text-3xl text-health-blue mb-2" />
              <span className="text-gray-700 font-medium">YouTube</span>
            </a>
          </div>
        </div>
      </section>

      {/* Regular Updates & Engagement Section */}
      <section className="py-16 bg-health-blue text-white">
        <div className="container-custom">
          <div className="section-title text-white">
            <h2>Stay Connected</h2>
            <p className="text-blue-100 mt-4">Regular updates and engagement opportunities</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Newsletters */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center mb-4">
                <FaNewspaper className="text-tangy-yellow text-3xl mr-4" />
                <h3 className="text-2xl font-bold">Newsletters</h3>
              </div>
              <p className="text-blue-100 mb-6">
                Receive curated health tips, seasonal recipes, and the latest site updates delivered to your inbox.
              </p>
              <button className="bg-tangy-yellow text-health-blue px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
                Subscribe Now
              </button>
            </div>

            {/* Push Notifications */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center mb-4">
                <FaBell className="text-tangy-yellow text-3xl mr-4" />
                <h3 className="text-2xl font-bold">Push Notifications</h3>
              </div>
              <p className="text-blue-100 mb-6">
                Get instant alerts for new content, health tips, and reminders to log your meals and symptoms.
              </p>
              <button className="bg-tangy-yellow text-health-blue px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
                Enable Notifications
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Health Coaches Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="section-title">
            <h2>Connect with Health Coaches</h2>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg mb-8">
              Work with certified wholistic health coaches who understand the Triangle of Disease approach and can provide personalized guidance for your health journey.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-blue-50 rounded-lg p-6">
                <FaUser className="text-health-blue text-4xl mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-health-blue">Personalized Support</h3>
                <p className="text-gray-600">
                  Get one-on-one guidance tailored to your specific health challenges and goals.
                </p>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <FaBook className="text-health-blue text-4xl mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-health-blue">Evidence-Based Approach</h3>
                <p className="text-gray-600">
                  Work with coaches trained in the Triangle of Disease methodology and wholistic health principles.
                </p>
              </div>
            </div>

            <Link
              to="/health-coaches"
              className="inline-flex items-center bg-health-blue text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-sky transition-colors"
            >
              <FaUser className="mr-3" />
              Meet Our Health Coaches
            </Link>
          </div>
        </div>
      </section>

      {/* Community Support Section */}
      <section className="py-16 bg-gradient-to-r from-health-blue to-blue-sky text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Connect with others on similar health journeys. Share experiences, ask questions, and find support in our growing community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={addAffiliateToLink("https://dailywithdoc.com/")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-health-blue px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              <FaExternalLinkAlt className="mr-2" />
              Visit Daily with Doc & Becca
            </a>
            <a
              href="https://www.youtube.com/@CriticalHealthNews/streams"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors inline-flex items-center justify-center"
            >
              <FaYoutube className="mr-2" />
              Subscribe to Our Channel
            </a>
          </div>
        </div>
      </section>

      {/* Nutrient Resource App */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="section-title">
            <h2>Nutrient Resource App</h2>
          </div>
          <NutrientResourceApp />
        </div>
      </section>
    </>
  )
}

export default ResourcesPage
