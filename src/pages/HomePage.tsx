import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import HeroSection from '../components/HeroSection'
import InfoCard from '../components/InfoCard'
import TestimonialCard from '../components/TestimonialCard'
import SymptomChecker from '../components/SymptomChecker'
import ParticleBackground from '../components/ParticleBackground'
import { useSlideUp, useSlideIn, useZoomIn } from '../hooks/useScrollAnimation'
import { FaStethoscope, FaHeartbeat, FaBrain, FaTint, FaBolt, FaArrowRight, FaStar, FaHeart, FaLightbulb } from 'react-icons/fa'
import { GiMedicines } from 'react-icons/gi'

const HomePage = () => {
  // Scroll animations for different sections
  const introSlide = useSlideUp(0)
  const card1Slide = useSlideIn('left', 100)
  const card2Slide = useSlideIn('right', 200)
  const card3Zoom = useZoomIn(300)
  const quoteZoom = useZoomIn(0)
  const ctaSlide = useSlideUp(100)
  
  return (
    <>
      <Helmet>
        <title>Triangle of Disease - Understanding the Root of Chronic Health Issues</title>
        <meta name="description" content="Explore the Triangle of Disease concept to understand and address the root causes of chronic health issues. Learn about the digestive system, blood sugar system, and adrenal-thyroid complex." />
      </Helmet>

      <ParticleBackground />

      <HeroSection
        title="The Triangle of Disease"
        subtitle="A Groundbreaking Approach to Health"
        description="Understand the fundamental biochemical breakdowns that contribute to chronic health challenges and discover the path to comprehensive healing."
        buttonText="Explore the Triangle"
        buttonLink="#triangle-explanation"
        showTriangle={true}
      />

      {/* Introduction Section with Glass Effect */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-white relative" id="triangle-explanation">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-sky/10 rounded-full blur-3xl animate-morph"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-tangy-yellow/10 rounded-full blur-3xl animate-morph" style={{ animationDelay: '4s' }}></div>
        
        <div className="container-custom relative z-10">
          <div ref={introSlide.ref as any} className={`max-w-3xl mx-auto text-center mb-12 ${introSlide.className}`} style={introSlide.style}>
            <h2 className="mb-8 text-5xl md:text-6xl font-bold text-gradient-animate">Understanding the Triangle of Disease</h2>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              The Triangle of Disease is a simplified model that explains the fundamental biochemical breakdowns in the body that lead to chronic health issues. By focusing on these three core systems, we can address the root causes rather than just treating symptoms.
            </p>
          </div>

          {/* Triangle of Disease Cards - Enhanced 3D Layout */}
          <div className="mb-12" style={{ perspective: '1000px' }}>
            {/* Triangle SVG for larger screens with 3D effect */}
            <div className="hidden md:flex justify-center items-center relative card-3d" style={{ height: '520px', marginTop: '40px', marginBottom: '40px' }}>
              {/* SVG Triangle Container with glow effect */}
              <svg className="absolute animate-glow-pulse" viewBox="0 0 500 480" style={{ width: '520px', height: '500px', filter: 'drop-shadow(0 0 30px rgba(60, 170, 223, 0.3))' }}>
                {/* Advanced Gradient Fill Triangle with Animation */}
                <defs>
                  <linearGradient id="triangleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3CAADF" stopOpacity="0.2">
                      <animate attributeName="stopOpacity" values="0.2;0.4;0.2" dur="3s" repeatCount="indefinite" />
                    </stop>
                    <stop offset="50%" stopColor="#FFB81C" stopOpacity="0.2">
                      <animate attributeName="stopOpacity" values="0.2;0.4;0.2" dur="3s" begin="1s" repeatCount="indefinite" />
                    </stop>
                    <stop offset="100%" stopColor="#F58A34" stopOpacity="0.2">
                      <animate attributeName="stopOpacity" values="0.2;0.4;0.2" dur="3s" begin="2s" repeatCount="indefinite" />
                    </stop>
                  </linearGradient>
                  <filter id="triangleGlow">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                <path 
                  d="M250,50 L450,400 L50,400 Z" 
                  fill="url(#triangleGradient)"
                  stroke="url(#triangleGradient)"
                  strokeWidth="3"
                  strokeOpacity="0.6"
                  filter="url(#triangleGlow)"
                />
              </svg>
              
              {/* Card 1 - Adrenal-Thyroid (Bottom Left) with Glass Effect */}
              <div ref={card1Slide.ref as any} className={`absolute transition-all duration-700 hover:scale-110 hover:-translate-y-3 hover:z-30 ${card1Slide.className}`} style={{ bottom: '20px', left: '-40px', width: '300px', ...card1Slide.style }}>
                <div className="glass card shadow-2xl border-2 border-tangy-yellow/50 hover:shadow-[0_20px_70px_-15px_rgba(245,138,52,0.5)] p-8 rounded-3xl hover:border-tangy-yellow animate-float" style={{ animationDelay: '0s' }}>
                  <div className="mx-auto w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-tangy-yellow to-yellow-500 flex items-center justify-center text-gray-800 mb-4 shadow-xl ring-4 ring-yellow-300/50 transition-transform duration-300 hover:rotate-12">
                    <FaStethoscope size={40} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gradient">Adrenal-Thyroid</h3>
                  <p className="text-base text-gray-700 mb-6 leading-relaxed font-medium">Managing stress response and hormone balance</p>
                  <Link 
                    to="/adrenal-thyroid" 
                    className="btn bg-gradient-to-r from-blue-sky to-health-blue text-white font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 py-3 px-8 flex items-center justify-center gap-2 group">
                    <span>Learn More</span>
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                  </Link>
                </div>
              </div>
              
              {/* Card 2 - Digestive System (Bottom Right) with Glass Effect */}
              <div ref={card2Slide.ref as any} className={`absolute transition-all duration-700 hover:scale-110 hover:-translate-y-3 hover:z-30 ${card2Slide.className}`} style={{ bottom: '20px', right: '-40px', width: '300px', ...card2Slide.style }}>
                <div className="glass card shadow-2xl border-2 border-glorious-sunset/50 hover:shadow-[0_20px_70px_-15px_rgba(245,138,52,0.5)] p-8 rounded-3xl hover:border-glorious-sunset animate-float" style={{ animationDelay: '2s' }}>
                  <div className="w-24 h-24 md:w-28 md:h-28 mx-auto mb-6 bg-gradient-to-br from-glorious-sunset to-red-500 rounded-full flex items-center justify-center shadow-2xl hover:rotate-12 transition-transform ring-4 ring-red-200/50 animate-morph">
                    <FaTint className="text-white drop-shadow-lg" size={48} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gradient">Digestive System</h3>
                  <p className="text-base text-gray-700 mb-6 leading-relaxed font-medium">The foundation of nutrient absorption and immune health</p>
                  <Link 
                    to="/digestive-system" 
                    className="btn bg-gradient-to-r from-glorious-sunset to-tangy-yellow text-white font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 py-3 px-8 flex items-center justify-center gap-2 group">
                    <span>Learn More</span>
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                  </Link>
                </div>
              </div>
              
              {/* Card 3 - Blood Sugar System (Top) with Glass Effect */}
              <div ref={card3Zoom.ref as any} className={`absolute transition-all duration-700 hover:scale-110 hover:-translate-y-3 hover:z-30 ${card3Zoom.className}`} style={{ top: '-20px', left: '50%', transform: 'translateX(-50%)', width: '300px', ...card3Zoom.style }}>
                <div className="glass card shadow-2xl border-2 border-blue-sky/50 hover:shadow-[0_20px_70px_-15px_rgba(60,170,223,0.5)] p-8 rounded-3xl hover:border-blue-sky animate-float" style={{ animationDelay: '4s' }}>
                  <div className="w-24 h-24 md:w-28 md:h-28 mx-auto mb-6 bg-gradient-to-br from-blue-sky to-health-blue rounded-full flex items-center justify-center shadow-2xl hover:rotate-12 transition-transform ring-4 ring-blue-200/50 animate-morph">
                    <FaBolt className="text-white drop-shadow-lg" size={48} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gradient">Blood Sugar System</h3>
                  <p className="text-base text-gray-700 mb-6 leading-relaxed font-medium">Regulating energy levels and metabolic function</p>
                  <Link 
                    to="/blood-sugar" 
                    className="btn bg-gradient-to-r from-glorious-sunset to-red-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 py-3 px-8 flex items-center justify-center gap-2 group">
                    <span>Learn More</span>
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Mobile-friendly stacked cards */}
            <div className="md:hidden grid grid-cols-1 gap-8">
              {/* Adrenal-Thyroid Card */}
              <div className="bg-white shadow-xl rounded-2xl p-6 border-2 border-tangy-yellow/20 hover:shadow-2xl transition-all duration-300">
                <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-tangy-yellow to-yellow-500 flex items-center justify-center text-gray-800 mb-4 shadow-xl ring-4 ring-yellow-300/50 transition-transform duration-300 hover:rotate-12">
                  <FaStethoscope size={36} />
                </div>
                <h3 className="text-2xl font-proxima font-bold mb-3 text-center text-health-blue">Adrenal-Thyroid</h3>
                <p className="text-center mb-4 text-base leading-relaxed text-gray-700">
                  Managing stress response and hormone balance
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
                <div className="w-24 h-24 md:w-28 md:h-28 mx-auto mb-6 bg-gradient-to-br from-glorious-sunset to-red-500 rounded-full flex items-center justify-center shadow-2xl hover:rotate-12 transition-transform ring-4 ring-red-200/50 animate-morph">
                  <FaTint className="text-white drop-shadow-lg" size={48} />
                </div>
                <h3 className="text-2xl font-proxima font-bold mb-3 text-center text-health-blue">Digestive System</h3>
                <p className="text-center mb-4 text-base leading-relaxed text-gray-700">
                  The foundation of nutrient absorption and immune health
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
                <div className="w-24 h-24 md:w-28 md:h-28 mx-auto mb-6 bg-gradient-to-br from-blue-sky to-health-blue rounded-full flex items-center justify-center shadow-2xl hover:rotate-12 transition-transform ring-4 ring-blue-200/50 animate-morph" style={{ animationDelay: '2s' }}>
                  <FaBolt className="text-white drop-shadow-lg" size={48} />
                </div>
                <h3 className="text-2xl font-proxima font-bold mb-3 text-center text-health-blue">Blood Sugar System</h3>
                <p className="text-center mb-4 text-base leading-relaxed text-gray-700">
                  Regulating energy levels and metabolic function
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

          <div ref={quoteZoom.ref as any} className={`text-center glass bg-gradient-to-r from-blue-50/50 via-orange-50/50 to-yellow-50/50 rounded-3xl p-8 md:p-12 shadow-2xl hover:shadow-[0_30px_80px_-15px_rgba(245,138,52,0.4)] transition-all duration-700 ${quoteZoom.className}`} style={{ ...quoteZoom.style, backdropFilter: 'blur(12px)' }}>
            <div className="max-w-3xl mx-auto relative">
              <div className="absolute -top-8 -left-8 text-8xl text-tangy-yellow/30 font-serif rotate-12 animate-pulse">"</div>
              <p className="text-2xl md:text-3xl italic mb-8 text-gray-900 leading-relaxed font-light relative z-10">
                All chronic and degenerative diseases can be backtracked to the Triangle of Disease. They are not primary conditions, but rather secondary conditions that arise when the fundamental systems break down.
              </p>
              <div className="h-2 w-32 bg-gradient-to-r from-health-blue via-tangy-yellow to-glorious-sunset mx-auto mb-10 rounded-full animate-shimmer"></div>
              <div className="absolute -bottom-8 -right-8 text-8xl text-glorious-sunset/30 font-serif rotate-12 animate-pulse">"</div>
            </div>
            <Link 
              to="/health-strategies" 
              className="btn bg-gradient-to-r from-glorious-sunset to-tangy-yellow text-white hover:from-tangy-yellow hover:to-glorious-sunset transform hover:scale-110 shadow-2xl text-xl px-12 py-5 inline-flex items-center gap-3 group animate-bounce-in">
              <span>View Health Strategies</span>
              <FaArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Decorative Divider */}
      <div className="relative h-12 md:h-16 bg-gradient-to-b from-white to-gray-50">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-health-blue animate-bounce" style={{ animationDelay: '0s' }}></div>
            <div className="w-3 h-3 rounded-full bg-tangy-yellow animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-3 h-3 rounded-full bg-glorious-sunset animate-bounce" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </div>

      {/* Key Health Challenges Section with Parallax */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/20 relative overflow-hidden">
        {/* Parallax background elements */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-health-blue/5 rounded-full blur-2xl animate-float" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-tangy-yellow/5 rounded-full blur-2xl animate-float" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
        
        <div className="container-custom relative z-10">
          <div ref={useSlideUp(200).ref as any} className={`section-title mb-10 ${useSlideUp(200).className}`} style={useSlideUp(200).style}>
            <h2 className="text-5xl md:text-6xl mb-6 text-gradient-animate font-bold">How the Triangle Explains Common Health Challenges</h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">Understanding the root causes behind chronic conditions</p>
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
              className="btn bg-gradient-to-r from-health-blue to-blue-sky text-white hover:from-blue-sky hover:to-health-blue transform hover:scale-110 shadow-2xl text-xl px-12 py-5 inline-flex items-center gap-3 group animate-bounce-in">
              <FaLightbulb className="group-hover:rotate-12 transition-transform" size={24} />
              <span>Try Our Assessment Tools</span>
              <FaArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Decorative Divider */}
      <div className="relative h-12 md:h-16 bg-gradient-to-b from-white to-orange-50">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-glorious-sunset to-transparent rounded-full"></div>
        </div>
      </div>

      {/* Testimonials Section with 3D Cards */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-orange-50/70 via-yellow-50/70 to-blue-50/70 relative overflow-hidden">
        {/* Animated background patterns */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-tangy-yellow/10 to-glorious-sunset/10 rounded-full blur-3xl animate-morph"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-sky/10 to-health-blue/10 rounded-full blur-3xl animate-morph" style={{ animationDelay: '3s' }}></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div ref={useSlideUp(100).ref as any} className={`section-title mb-10 ${useSlideUp(100).className}`} style={useSlideUp(100).style}>
            <h2 className="text-5xl md:text-6xl mb-6 font-bold">
              <span className="text-gradient-animate">Success Stories</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-light">Real people achieving real results with the Triangle of Disease approach</p>
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
      <div className="relative h-12 md:h-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-2 h-12 bg-gradient-to-b from-blue-sky to-health-blue rounded-full opacity-30" style={{ height: `${(i + 1) * 8}px` }}></div>
            ))}
          </div>
        </div>
      </div>

      {/* Symptom Checker with Glass Background */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-white to-gray-50 relative">
        <div className="container-custom">
          <div ref={useSlideUp(50).ref as any} className={`section-title mb-8 ${useSlideUp(50).className}`} style={useSlideUp(50).style}>
            <h2 className="text-5xl md:text-6xl mb-6 font-bold text-gradient-animate">Identify Your Health Patterns</h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">Discover which points of the Triangle may need your attention</p>
          </div>

          <div ref={useZoomIn(100).ref as any} className={`max-w-4xl mx-auto ${useZoomIn(100).className}`} style={useZoomIn(100).style}>
            <div className="glass-dark p-8 rounded-3xl shadow-2xl">
              <SymptomChecker />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action with Advanced Effects */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-health-blue via-blue-sky to-health-blue text-white relative overflow-hidden">
        {/* Animated decorative elements */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-tangy-yellow opacity-20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-float" style={{ animationDuration: '6s' }}></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-glorious-sunset opacity-20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-float" style={{ animationDuration: '8s', animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white opacity-5 rounded-full animate-morph"></div>
        
        <div className="container-custom relative z-10">
          <div ref={ctaSlide.ref as any} className={`max-w-3xl mx-auto text-center ${ctaSlide.className}`} style={ctaSlide.style}>
            <h2 className="text-white mb-8 text-5xl md:text-6xl lg:text-7xl font-bold animate-glow-pulse">Take Control of Your Health Today</h2>
            <p className="text-2xl md:text-3xl text-blue-100 mb-10 leading-relaxed font-light">
              By understanding the Triangle of Disease, you have more power over your body's biochemistry and health challenges than you might realize. Start your journey to comprehensive health by exploring our resources.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <Link 
                to="/resources" 
                className="btn bg-white/90 backdrop-blur-md text-health-blue hover:bg-tangy-yellow hover:text-gray-800 transform hover:scale-110 shadow-2xl text-xl px-12 py-5 inline-flex items-center gap-3 group hover:shadow-[0_20px_60px_-15px_rgba(255,255,255,0.4)] transition-all duration-500">
                <FaStar className="group-hover:rotate-180 transition-transform duration-500" size={24} />
                <span>Explore Resources</span>
                <FaArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
              </Link>
              <Link 
                to="/health-strategies" 
                className="btn bg-gradient-to-r from-glorious-sunset to-tangy-yellow text-white hover:from-tangy-yellow hover:to-glorious-sunset transform hover:scale-110 shadow-2xl text-xl px-12 py-5 inline-flex items-center gap-3 group hover:shadow-[0_20px_60px_-15px_rgba(245,138,52,0.6)] transition-all duration-500">
                <FaHeart className="group-hover:scale-125 transition-transform duration-300" size={24} />
                <span>View Health Strategies</span>
                <FaArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
