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
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background with overlay */}
      {backgroundImage ? (
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-health-blue via-blue-sky to-glorious-sunset z-0" />
      )}
      <div className="absolute inset-0 bg-health-blue/80 z-10" />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          <p className="text-tangy-yellow font-proxima text-lg md:text-xl mb-3">{subtitle}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-proxima font-bold mb-6">{title}</h1>
          <p className="text-lg md:text-xl mb-8 text-blue-100">{description}</p>
          
          {buttonText && buttonLink && (
            <Link 
              to={buttonLink} 
              className="btn bg-glorious-sunset text-white hover:bg-tangy-yellow hover:text-gray-800 transform transition hover:scale-105"
            >
              {buttonText}
            </Link>
          )}
          
          {showTriangle && (
            <div className="mt-10 max-w-2xl mx-auto" style={{ maxWidth: '500px' }}>
  <div className="relative w-full" style={{ paddingBottom: '86.6%' }}> {/* Larger triangle aspect ratio */}
    <svg viewBox="0 0 100 86.6" className="absolute inset-0 w-full h-full" style={{ width: '100%', height: '100%' }}>
                  {/* Triangle outline */}
                  <path 
                    d="M50,0 L100,86.6 L0,86.6 Z" 
                    fill="none" 
                    stroke="white" 
                    strokeWidth="1"
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
              
              <div className="grid grid-cols-3 gap-4 mt-6 text-center">
                <Link to="/digestive-system" className="text-white hover:text-tangy-yellow transition-colors">
                  <span className="block font-bold">Point 1</span>
                  <span className="text-sm">Digestive System</span>
                </Link>
                <Link to="/blood-sugar" className="text-white hover:text-tangy-yellow transition-colors">
                  <span className="block font-bold">Point 2</span>
                  <span className="text-sm">Blood Sugar</span>
                </Link>
                <Link to="/adrenal-thyroid" className="text-white hover:text-tangy-yellow transition-colors">
                  <span className="block font-bold">Point 3</span>
                  <span className="text-sm">Adrenal-Thyroid</span>
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
