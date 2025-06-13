import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Triangle of Disease - Daily with Doc & Becca</title>
        <meta name="description" content="Discover the three foundational systems that, when compromised, create a perfect storm for chronic health issues." />
        <meta property="og:title" content="Triangle of Disease - Daily with Doc & Becca" />
        <meta property="og:description" content="Discover the three foundational systems that, when compromised, create a perfect storm for chronic health issues." />
        <meta property="og:image" content="/assets/preview.jpg" />
        <meta property="og:url" content="https://triangleofdisease.netlify.app/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Triangle of Disease - Daily with Doc & Becca" />
        <meta name="twitter:description" content="Discover the three foundational systems that, when compromised, create a perfect storm for chronic health issues." />
        <meta name="twitter:image" content="/assets/preview.jpg" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-health-blue to-blue-sky text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Understanding the Triangle of Disease</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Discover the three foundational systems that, when compromised, create a "perfect storm" for chronic health issues.
          </p>
          <Link to="#triangle-points" className="btn bg-glorious-sunset hover:bg-tangy-yellow">
            Learn More
          </Link>
        </div>
      </section>

      {/* Triangle Image Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <img 
              src="/assets/triangle-of-disease.png" 
              alt="Triangle of Disease" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Triangle Points Section */}
      <section id="triangle-points" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">The Three Points of the Triangle</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Each point represents a critical physiological system that forms the foundation of your health.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Point 1: Digestive System */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-health-blue text-white p-4 text-center">
                <h3 className="text-xl font-bold">Point 1</h3>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-health-blue">Digestive System</h3>
                <p className="text-gray-600 mb-4">
                  Your digestive system is the gateway to health. When compromised, it affects nutrient absorption and allows toxins to enter the bloodstream.
                </p>
                <ul className="list-disc pl-5 mb-6 text-gray-600">
                  <li>Gut microbiome imbalance</li>
                  <li>Intestinal permeability issues</li>
                  <li>Impaired nutrient absorption</li>
                  <li>Digestive enzyme deficiencies</li>
                </ul>
                <Link to="/digestive-system" className="btn w-full text-center">
                  Learn More
                </Link>
              </div>
            </div>

            {/* Point 2: Blood Sugar */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-blue-sky text-white p-4 text-center">
                <h3 className="text-xl font-bold">Point 2</h3>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-blue-sky">Blood Sugar Regulation</h3>
                <p className="text-gray-600 mb-4">
                  Unstable blood sugar creates a cascade of hormonal imbalances, energy fluctuations, and cellular stress throughout the body.
                </p>
                <ul className="list-disc pl-5 mb-6 text-gray-600">
                  <li>Insulin resistance</li>
                  <li>Glucose metabolism issues</li>
                  <li>Glycation damage to tissues</li>
                  <li>Energy production disruption</li>
                </ul>
                <Link to="/blood-sugar" className="btn w-full text-center">
                  Learn More
                </Link>
              </div>
            </div>

            {/* Point 3: Adrenal-Thyroid */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-glorious-sunset text-white p-4 text-center">
                <h3 className="text-xl font-bold">Point 3</h3>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-glorious-sunset">Adrenal-Thyroid Axis</h3>
                <p className="text-gray-600 mb-4">
                  These critical hormone-producing glands regulate metabolism, stress response, and energy production at the cellular level.
                </p>
                <ul className="list-disc pl-5 mb-6 text-gray-600">
                  <li>HPA axis dysfunction</li>
                  <li>Thyroid hormone conversion issues</li>
                  <li>Cellular energy production</li>
                  <li>Stress hormone imbalances</li>
                </ul>
                <Link to="/adrenal-thyroid" className="btn w-full text-center">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from people who have addressed their Triangle of Disease and transformed their health.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <p className="italic text-gray-600 mb-4">
                "After years of struggling with fatigue and digestive issues, addressing my Triangle of Disease was the breakthrough I needed. I finally feel like myself again!"
              </p>
              <p className="font-bold text-health-blue">- Sarah K.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <p className="italic text-gray-600 mb-4">
                "The Triangle of Disease concept helped me understand how my symptoms were all connected. Addressing all three points made all the difference."
              </p>
              <p className="font-bold text-health-blue">- Michael T.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <p className="italic text-gray-600 mb-4">
                "I was skeptical at first, but after following the Triangle of Disease protocol, my energy has improved and my chronic inflammation is finally under control."
              </p>
              <p className="font-bold text-health-blue">- Jennifer R.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-glorious-sunset to-tangy-yellow text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Take Control of Your Health Today</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Ready to address your Triangle of Disease? Get personalized support and resources to start your healing journey.
          </p>
          <a 
            href="https://102742703.youngevity.com/" 
            className="btn bg-white text-glorious-sunset hover:bg-gray-100"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* Schema.org structured data for SEO */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Triangle of Disease - Daily with Doc & Becca",
            "description": "Discover the three foundational systems that, when compromised, create a perfect storm for chronic health issues.",
            "url": "https://triangleofdisease.netlify.app/",
            "author": {
              "@type": "Organization",
              "name": "Daily with Doc & Becca"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Daily with Doc & Becca",
              "logo": {
                "@type": "ImageObject",
                "url": "https://triangleofdisease.netlify.app/assets/logo.png"
              }
            },
            "mainEntity": {
              "@type": "HealthTopic",
              "name": "Triangle of Disease",
              "description": "A concept that identifies three key physiological systems that form the foundation of your health: Digestive System, Blood Sugar Regulation, and Adrenal-Thyroid Axis."
            }
          }
        `}
      </script>
    </>
  )
}

export default HomePage
