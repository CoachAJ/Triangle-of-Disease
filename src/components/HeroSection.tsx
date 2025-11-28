import { Link } from 'react-router-dom'

interface HeroSectionProps {
  title: string
  subtitle: string
  description: string
  buttonText?: string
  buttonLink?: string
  backgroundImage?: string
  showTriangle?: boolean
}

const HeroSection = ({
  title,
  subtitle,
  description,
  buttonText,
  buttonLink,
  backgroundImage,
  showTriangle = false,
}: HeroSectionProps) => {
  return (
    <section className="relative pt-24 pb-20 md:pt-36 md:pb-32 overflow-hidden">
      {/* Background with overlay */}
      {backgroundImage ? (
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-health-blue via-blue-sky to-glorious-sunset z-0">
          {/* Animated background elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-tangy-yellow opacity-20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '3s' }}></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-glorious-sunset opacity-20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
        </div>
      )}
      <div className="absolute inset-0 bg-health-blue/75 z-10" />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          <p className="text-tangy-yellow font-proxima text-xl md:text-2xl mb-4 font-semibold tracking-wide">{subtitle}</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-proxima font-bold mb-8 leading-tight">{title}</h1>
          <p className="text-xl md:text-2xl mb-10 text-blue-100 leading-relaxed">{description}</p>
          
          {buttonText && buttonLink && (
            <Link 
              to={buttonLink} 
              className="btn bg-gradient-to-r from-glorious-sunset to-tangy-yellow text-white hover:from-tangy-yellow hover:to-glorious-sunset transform transition hover:scale-110 shadow-2xl text-lg md:text-xl px-12 py-4"
            >
              {buttonText}
            </Link>
          )}
          
          {showTriangle && (
            <div className="mt-16 max-w-2xl mx-auto" style={{ maxWidth: '600px' }}>
  <div className="relative w-full bg-white/5 backdrop-blur-sm rounded-3xl p-8 shadow-2xl" style={{ paddingBottom: '86.6%' }}> {/* Larger triangle aspect ratio */}
    <svg viewBox="0 0 100 86.6" className="absolute inset-0 w-full h-full" style={{ width: '100%', height: '100%', padding: '2rem' }}>
                  {/* Triangle outline with glow */}
                  <defs>
                    <filter id="heroGlow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  <path 
                    d="M50,0 L100,86.6 L0,86.6 Z" 
                    fill="none" 
                    stroke="white" 
                    strokeWidth="1.5"
                    filter="url(#heroGlow)"
                  />
                  
                  {/*
                    Clinical labeling order:
                    Point 1: Digestive System (bottom left)
                    Point 2: Blood Sugar System (bottom right)
                    Point 3: Adrenal-Thyroid (top)
                    Visual layout does not match point numbers for clinical logic reasons.
                  */}
                  {/* Digestive System (Bottom Left) */}
                  <g className="cursor-pointer hover:opacity-95 transition-opacity">
                    <radialGradient id="digestiveGradient" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#FFD6B3" />
                      <stop offset="100%" stopColor="#F58A34" />
                    </radialGradient>
                    <circle cx="15" cy="76.6" r="15" fill="url(#digestiveGradient)" filter="url(#shadowSoft)" />
                    <text x="15" y="80" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="2.8" fontWeight="bold" style={{ letterSpacing: 0.2 }}>
                      DIGESTIVE
                    </text>
                    <text x="15" y="84" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="2.8" fontWeight="bold" style={{ letterSpacing: 0.2 }}>
                      SYSTEM
                    </text>
                  </g>
                  {/* Blood Sugar System (Bottom Right) */}
                  <g className="cursor-pointer hover:opacity-95 transition-opacity">
                    <radialGradient id="bloodSugarGradient" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#D8F1FF" />
                      <stop offset="100%" stopColor="#3CAADF" />
                    </radialGradient>
                    <circle cx="85" cy="76.6" r="15" fill="url(#bloodSugarGradient)" filter="url(#shadowSoft)" />
                    <text x="85" y="80" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="2.8" fontWeight="bold" style={{ letterSpacing: 0.2 }}>
                      BLOOD SUGAR
                    </text>
                    <text x="85" y="84" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="2.8" fontWeight="bold" style={{ letterSpacing: 0.2 }}>
                      SYSTEM
                    </text>
                  </g>
                  {/* Adrenal Thyroid Complex (Top) */}
                  <g className="cursor-pointer hover:opacity-95 transition-opacity">
                    <radialGradient id="adrenalGradient" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#FFEFAA" />
                      <stop offset="100%" stopColor="#FFB81C" />
                    </radialGradient>
                    <circle cx="50" cy="10" r="15" fill="url(#adrenalGradient)" filter="url(#shadowSoft)" />
                    <text x="50" y="14" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="2.8" fontWeight="bold" style={{ letterSpacing: 0.2 }}>
                      ADRENAL
                    </text>
                    <text x="50" y="18" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="2.8" fontWeight="bold" style={{ letterSpacing: 0.2 }}>
                      THYROID
                    </text>
                  </g>
                  {/* SVG Drop Shadow & Glow Filters */}
                  <defs>
                    <filter id="shadowSoft" x="-30%" y="-30%" width="160%" height="160%">
                      <feDropShadow dx="0" dy="3" stdDeviation="4" flood-color="#000" flood-opacity="0.18" />
                    </filter>
                    <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
                      <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                  
                  {/* Connecting lines with glow */}
                  <line x1="50" y1="25" x2="15" y2="61.6" stroke="white" strokeWidth="2.5" strokeDasharray="6" filter="url(#glow)" />
                  <line x1="50" y1="25" x2="85" y2="61.6" stroke="white" strokeWidth="2.5" strokeDasharray="6" filter="url(#glow)" />
                  <line x1="15" y1="61.6" x2="85" y2="61.6" stroke="white" strokeWidth="2.5" strokeDasharray="6" filter="url(#glow)" />
                </svg>
              </div>
              
              <div className="grid grid-cols-3 gap-6 mt-8 text-center">
                <Link to="/digestive-system" className="text-white hover:text-tangy-yellow transition-all duration-300 transform hover:scale-110 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20">
                  <span className="block font-bold text-lg md:text-xl mb-1">Point 1</span>
                  <span className="text-sm md:text-base">Digestive System</span>
                </Link>
                <Link to="/blood-sugar" className="text-white hover:text-tangy-yellow transition-all duration-300 transform hover:scale-110 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20">
                  <span className="block font-bold text-lg md:text-xl mb-1">Point 2</span>
                  <span className="text-sm md:text-base">Blood Sugar</span>
                </Link>
                <Link to="/adrenal-thyroid" className="text-white hover:text-tangy-yellow transition-all duration-300 transform hover:scale-110 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20">
                  <span className="block font-bold text-lg md:text-xl mb-1">Point 3</span>
                  <span className="text-sm md:text-base">Adrenal-Thyroid</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default HeroSection
