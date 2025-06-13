import { Helmet } from 'react-helmet-async'

const ResourcesPage = () => {
  return (
    <>
      <Helmet>
        <title>Resources - Triangle of Disease | Daily with Doc & Becca</title>
        <meta name="description" content="Articles, videos, and educational resources about the Triangle of Disease concept and holistic health strategies." />
        <meta property="og:title" content="Resources - Triangle of Disease | Daily with Doc & Becca" />
        <meta property="og:description" content="Articles, videos, and educational resources about the Triangle of Disease concept and holistic health strategies." />
        <meta property="og:image" content="/assets/resources.jpg" />
        <meta property="og:url" content="https://triangleofdisease.netlify.app/resources" />
        <link rel="canonical" href="https://triangleofdisease.netlify.app/resources" />
      </Helmet>

      {/* Video & Audio Resources Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center text-health-blue">Video & Audio Resources</h2>
            
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">Featured Video</h3>
              <div className="aspect-w-16 aspect-h-9 w-full max-w-4xl mx-auto mb-6">
                <iframe 
                  width="100%" 
                  height="315" 
                  src="https://www.youtube.com/embed/hS5lWmBnqeg?si=Z3cxaRQcVQo1cItR" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                  className="rounded-lg shadow-xl w-full h-[500px]"
                ></iframe>
              </div>
              <div className="text-center">
                <a 
                  href="https://www.youtube.com/@CriticalHealthNews/streams" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-health-blue hover:text-blue-sky font-bold text-lg"
                >
                  <span>Watch more on our YouTube Channel</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-tangy-yellow to-glorious-sunset text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Resources</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Educational articles, videos, and tools to help you understand and address the Triangle of Disease.
          </p>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center text-health-blue">Featured Articles</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {/* Article 1 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-600">Article Image</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-health-blue">Understanding the Triangle of Disease</h3>
                  <p className="text-gray-600 mb-4">
                    An introduction to the three foundational systems that form the Triangle of Disease and how they interact.
                  </p>
                  <a href="#" className="text-health-blue font-bold hover:underline">Read More →</a>
                </div>
              </div>

              {/* Article 2 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-600">Article Image</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-health-blue">The Hidden Connection Between Digestion and Hormones</h3>
                  <p className="text-gray-600 mb-4">
                    How your digestive health directly influences your hormonal balance and what you can do about it.
                  </p>
                  <a href="#" className="text-health-blue font-bold hover:underline">Read More →</a>
                </div>
              </div>

              {/* Article 3 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-600">Article Image</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-health-blue">Blood Sugar: The Hidden Driver of Inflammation</h3>
                  <p className="text-gray-600 mb-4">
                    How blood sugar fluctuations contribute to systemic inflammation and what you can do to stabilize it.
                  </p>
                  <a href="#" className="text-health-blue font-bold hover:underline">Read More →</a>
                </div>
              </div>

              {/* Article 4 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-600">Article Image</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-health-blue">Adrenal Fatigue: Myth or Reality?</h3>
                  <p className="text-gray-600 mb-4">
                    A deep dive into the science behind adrenal dysfunction and how it affects your entire body.
                  </p>
                  <a href="#" className="text-health-blue font-bold hover:underline">Read More →</a>
                </div>
              </div>

              {/* Article 5 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-600">Article Image</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-health-blue">The Gut-Brain Connection</h3>
                  <p className="text-gray-600 mb-4">
                    How your digestive system communicates with your brain and influences mood, cognition, and behavior.
                  </p>
                  <a href="#" className="text-health-blue font-bold hover:underline">Read More →</a>
                </div>
              </div>

              {/* Article 6 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-600">Article Image</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-health-blue">Breaking the Cycle: Healing the Triangle</h3>
                  <p className="text-gray-600 mb-4">
                    Success stories and case studies of people who have healed their Triangle of Disease.
                  </p>
                  <a href="#" className="text-health-blue font-bold hover:underline">Read More →</a>
                </div>
              </div>
            </div>

            {/* Videos Section */}
            <h2 className="text-3xl font-bold mb-10 text-center text-health-blue mt-20">Educational Videos</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Video 1 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-64 bg-gray-800 flex items-center justify-center">
                  <span className="text-gray-400">Video Player</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-health-blue">Triangle of Disease: An Introduction</h3>
                  <p className="text-gray-600 mb-4">
                    Doc & Becca explain the three points of the Triangle of Disease and how they interact to create health challenges.
                  </p>
                </div>
              </div>

              {/* Video 2 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-64 bg-gray-800 flex items-center justify-center">
                  <span className="text-gray-400">Video Player</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-health-blue">Healing the Digestive System</h3>
                  <p className="text-gray-600 mb-4">
                    Practical strategies for restoring gut health and healing the intestinal barrier.
                  </p>
                </div>
              </div>

              {/* Video 3 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-64 bg-gray-800 flex items-center justify-center">
                  <span className="text-gray-400">Video Player</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-health-blue">Balancing Blood Sugar Naturally</h3>
                  <p className="text-gray-600 mb-4">
                    Diet, lifestyle, and supplement strategies to help regulate blood sugar and improve insulin sensitivity.
                  </p>
                </div>
              </div>

              {/* Video 4 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-64 bg-gray-800 flex items-center justify-center">
                  <span className="text-gray-400">Video Player</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-health-blue">Supporting Adrenal and Thyroid Health</h3>
                  <p className="text-gray-600 mb-4">
                    How to support your stress response system and optimize thyroid function with natural approaches.
                  </p>
                </div>
              </div>
            </div>

            {/* Free Resources Section */}
            <h2 className="text-3xl font-bold mb-10 text-center text-health-blue mt-20">Free Resources</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Resource 1 */}
              <div className="bg-blue-50 rounded-lg shadow-lg overflow-hidden p-6">
                <h3 className="text-xl font-bold mb-3 text-health-blue">Triangle of Disease Checklist</h3>
                <p className="text-gray-600 mb-4">
                  A printable checklist to help you identify which points of your Triangle may need support.
                </p>
                <a href="#" className="btn bg-health-blue hover:bg-blue-sky w-full text-center">Download PDF</a>
              </div>

              {/* Resource 2 */}
              <div className="bg-blue-50 rounded-lg shadow-lg overflow-hidden p-6">
                <h3 className="text-xl font-bold mb-3 text-health-blue">Meal Planning Guide</h3>
                <p className="text-gray-600 mb-4">
                  A 7-day meal plan designed to support all three points of the Triangle of Disease.
                </p>
                <a href="#" className="btn bg-health-blue hover:bg-blue-sky w-full text-center">Download PDF</a>
              </div>

              {/* Resource 3 - Food Diary Template */}
              <div className="bg-blue-50 rounded-lg shadow-lg overflow-hidden p-6">
                <h3 className="text-xl font-bold mb-3 text-health-blue">Food Diary Template</h3>
                <p className="text-gray-600 mb-4">
                  A printable template for tracking food intake and symptoms to help identify potential trigger foods.
                </p>
                <a 
                  href="https://docs.google.com/document/d/16taR9IlYlrtGA4k6AhG0OeaOQMXAxU6lNE0SO-zSRgA/edit?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn bg-health-blue hover:bg-blue-sky w-full text-center"
                >
                  Open Template
                </a>
              </div>
            </div>

            {/* Monthly Webinars Section */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6 text-health-blue">Monthly Webinars</h2>
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                  Participate in live Q&A sessions with health experts and coaches.
                </p>
                <a 
                  href="https://calendar.dailywithdoc.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-glorious-sunset hover:bg-orange-500 transition-colors duration-200"
                >
                  <span>View Schedule</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Connect with Health Coaches */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6 text-health-blue">Connect with Health Coaches</h2>
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                  Get personalized guidance from our team of Certified Wholistic Health Coaches.
                </p>
                <a 
                  href="/health-coaches" 
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-health-blue hover:bg-blue-sky transition-colors duration-200"
                >
                  <span>Find a Certified Wholistic Health Coach</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-health-blue to-blue-sky text-white p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Need Personalized Support?</h3>
              <p className="text-lg mb-6">
                Get personalized guidance on addressing your Triangle of Disease with our health coaching services.
              </p>
              <a 
                href="https://102742703.youngevity.com/" 
                className="btn bg-white text-health-blue hover:bg-gray-100"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More
              </a>
            </div>

            {/* Schema.org structured data for SEO */}
            <script type="application/ld+json">
              {`
                {
                  "@context": "https://schema.org",
                  "@type": "WebPage",
                  "name": "Resources - Triangle of Disease",
                  "description": "Articles, videos, and educational resources about the Triangle of Disease concept and holistic health strategies.",
                  "url": "https://triangleofdisease.netlify.app/resources",
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

export default ResourcesPage
