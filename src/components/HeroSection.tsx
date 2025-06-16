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
            <div className="mt-16 max-w-2xl mx-auto">
              <div className="relative w-full pb-[86.6%]"> {/* Triangle aspect ratio */}
                <svg viewBox="0 0 100 86.6" className="absolute inset-0 w-full h-full">
                  {/* Triangle outline */}
                  <path 
                    d="M50,0 L100,86.6 L0,86.6 Z" 
                    fill="none" 
                    stroke="white" 
                    strokeWidth="1"
                  />
                  
                  {/* Digestive System (Point 1) */}
                  <g className="cursor-pointer hover:opacity-90 transition-opacity">
                    <circle cx="50" cy="10" r="15" fill="#F58A34" />
                    <text x="50" y="10" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="5" fontWeight="bold">
                      DIGESTIVE
                    </text>
                    <text x="50" y="16" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="5" fontWeight="bold">
                      SYSTEM
                    </text>
                  </g>
                  
                  {/* Blood Sugar System (Point 2) */}
                  <g className="cursor-pointer hover:opacity-90 transition-opacity">
                    <circle cx="15" cy="76.6" r="15" fill="#3CAADF" />
                    <text x="15" y="76.6" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="5" fontWeight="bold">
                      BLOOD SUGAR
                    </text>
                    <text x="15" y="82.6" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="5" fontWeight="bold">
                      SYSTEM
                    </text>
                  </g>
                  
                  {/* Adrenal Thyroid Complex (Point 3) */}
                  <g className="cursor-pointer hover:opacity-90 transition-opacity">
                    <circle cx="85" cy="76.6" r="15" fill="#FFB81C" />
                    <text x="85" y="76.6" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="5" fontWeight="bold">
                      ADRENAL
                    </text>
                    <text x="85" y="82.6" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="5" fontWeight="bold">
                      THYROID
                    </text>
                  </g>
                  
                  {/* Connecting lines */}
                  <line x1="50" y1="25" x2="15" y2="61.6" stroke="white" strokeWidth="1" strokeDasharray="4" />
                  <line x1="50" y1="25" x2="85" y2="61.6" stroke="white" strokeWidth="1" strokeDasharray="4" />
                  <line x1="15" y1="61.6" x2="85" y2="61.6" stroke="white" strokeWidth="1" strokeDasharray="4" />
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
