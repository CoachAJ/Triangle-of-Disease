import { Link } from 'react-router-dom'
import { FaStethoscope, FaBolt } from 'react-icons/fa'
import { FaTint } from 'react-icons/fa'
import { useState } from 'react'

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
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)
  return (
    <section className="relative pt-24 pb-20 md:pt-36 md:pb-32 overflow-hidden">
      {/* Dark Tech Background */}
      {backgroundImage ? (
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-dark-navy via-tech-blue to-deep-blue z-0">
          {/* Circuit board pattern overlay */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300D4FF' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
          {/* Animated glow orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyber-cyan opacity-10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-glow opacity-10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyber-cyan opacity-5 rounded-full blur-3xl"></div>
        </div>
      )}
      <div className="absolute inset-0 bg-dark-navy/40 z-10" />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Pharmacist Ben Fuchs Attribution */}
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-cyber-cyan/30">
            <span className="text-cyber-cyan text-sm font-semibold tracking-wider uppercase">A Concept by</span>
            <span className="text-white font-bold">Pharmacist Ben Fuchs, R.Ph.</span>
          </div>
          
          <p className="text-cyber-cyan font-proxima text-xl md:text-2xl mb-4 font-semibold tracking-wide">{subtitle}</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-proxima font-bold mb-8 leading-tight bg-gradient-to-r from-white via-cyber-cyan to-neon-glow bg-clip-text text-transparent">{title}</h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-300 leading-relaxed">{description}</p>
          
          {buttonText && buttonLink && (
            <Link 
              to={buttonLink} 
              className="btn bg-gradient-to-r from-cyber-cyan to-neon-glow text-dark-navy font-bold hover:shadow-neon-lg transform transition-all duration-300 hover:scale-105 shadow-neon text-lg md:text-xl px-12 py-4 rounded-xl"
            >
              {buttonText}
            </Link>
          )}
          
          {showTriangle && (
            <div className="mt-16 max-w-2xl mx-auto" style={{ maxWidth: '600px' }}>
  <div className="relative w-full bg-dark-navy/60 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-cyber-cyan/20" style={{ paddingBottom: '86.6%' }}> {/* Larger triangle aspect ratio */}
    <svg viewBox="0 0 100 86.6" className="absolute inset-0 w-full h-full" style={{ width: '100%', height: '100%', padding: '2rem' }}>
                  {/* Triangle outline with glow and glassmorphism filters */}
                  <defs>
                    <filter id="heroGlow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                    {/* Glassmorphism filter */}
                    <filter id="glass" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur in="SourceGraphic" stdDeviation="4"/>
                      <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/>
                      <feBlend mode="normal" in="SourceGraphic" result="glassEffect"/>
                      <feDropShadow dx="0" dy="4" stdDeviation="3" flood-opacity="0.25"/>
                    </filter>
                  </defs>
                  <path 
                    d="M50,0 L100,86.6 L0,86.6 Z" 
                    fill="none" 
                    stroke="url(#triangleGradient)" 
                    strokeWidth="2"
                    filter="url(#heroGlow)"
                  />
                  <defs>
                    <linearGradient id="triangleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00D4FF" />
                      <stop offset="50%" stopColor="#4AEAFF" />
                      <stop offset="100%" stopColor="#00D4FF" />
                    </linearGradient>
                  </defs>
                  
                  {/*
                    Clinical labeling order:
                    Point 1: Digestive System (bottom left)
                    Point 2: Blood Sugar System (bottom right)
                    Point 3: Adrenal-Thyroid (top)
                    Visual layout does not match point numbers for clinical logic reasons.
                  */}
                  {/* Digestive System (Bottom Left) */}
                  <Link to="/digestive-system">
                    <g 
                      className="cursor-pointer transition-all duration-300"
                      onMouseEnter={() => setHoveredNode('digestive')}
                      onMouseLeave={() => setHoveredNode(null)}
                      transform={hoveredNode === 'digestive' ? 'scale(1.1)' : 'scale(1)'}
                    >
                      <radialGradient id="digestiveGradient" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#FFD6B3" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#F58A34" stopOpacity="0.95" />
                      </radialGradient>
                      {/* Glassmorphism background */}
                      <circle cx="15" cy="76.6" r="16" fill="white" opacity="0.1" filter="url(#glass)" />
                      <circle cx="15" cy="76.6" r="15" fill="url(#digestiveGradient)" filter="url(#shadowSoft)" opacity="0.95" />
                      {/* Icon */}
                      <foreignObject x="9" y="71.6" width="12" height="10">
                        <div className="flex items-center justify-center h-full">
                          <FaTint className="text-white drop-shadow-lg" style={{ fontSize: '12px' }} />
                        </div>
                      </foreignObject>
                      {/* Text label */}
                      <text x="15" y="94" textAnchor="middle" fill="white" fontSize="3" fontWeight="600" className="tracking-wide">
                        DIGESTIVE
                      </text>
                    </g>
                  </Link>
                  {/* Blood Sugar System (Bottom Right) */}
                  <Link to="/blood-sugar">
                    <g 
                      className="cursor-pointer transition-all duration-300"
                      onMouseEnter={() => setHoveredNode('bloodSugar')}
                      onMouseLeave={() => setHoveredNode(null)}
                      transform={hoveredNode === 'bloodSugar' ? 'scale(1.1)' : 'scale(1)'}
                    >
                      <radialGradient id="bloodSugarGradient" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#D8F1FF" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#3CAADF" stopOpacity="0.95" />
                      </radialGradient>
                      {/* Glassmorphism background */}
                      <circle cx="85" cy="76.6" r="16" fill="white" opacity="0.1" filter="url(#glass)" />
                      <circle cx="85" cy="76.6" r="15" fill="url(#bloodSugarGradient)" filter="url(#shadowSoft)" opacity="0.95" />
                      {/* Icon */}
                      <foreignObject x="79" y="71.6" width="12" height="10">
                        <div className="flex items-center justify-center h-full">
                          <FaBolt className="text-white drop-shadow-lg" style={{ fontSize: '12px' }} />
                        </div>
                      </foreignObject>
                      {/* Text label */}
                      <text x="85" y="94" textAnchor="middle" fill="white" fontSize="3" fontWeight="600" className="tracking-wide">
                        BLOOD SUGAR
                      </text>
                    </g>
                  </Link>
                  {/* Adrenal Thyroid Complex (Top) */}
                  <Link to="/adrenal-thyroid">
                    <g 
                      className="cursor-pointer transition-all duration-300"
                      onMouseEnter={() => setHoveredNode('adrenal')}
                      onMouseLeave={() => setHoveredNode(null)}
                      transform={hoveredNode === 'adrenal' ? 'scale(1.1)' : 'scale(1)'}
                    >
                      <radialGradient id="adrenalGradient" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#FFEFAA" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#FFB81C" stopOpacity="0.95" />
                      </radialGradient>
                      {/* Glassmorphism background */}
                      <circle cx="50" cy="10" r="16" fill="white" opacity="0.1" filter="url(#glass)" />
                      <circle cx="50" cy="10" r="15" fill="url(#adrenalGradient)" filter="url(#shadowSoft)" opacity="0.95" />
                      {/* Icon */}
                      <foreignObject x="44" y="5" width="12" height="10">
                        <div className="flex items-center justify-center h-full">
                          <FaStethoscope className="text-white drop-shadow-lg" style={{ fontSize: '12px' }} />
                        </div>
                      </foreignObject>
                      {/* Text labels */}
                      <text x="50" y="-8" textAnchor="middle" fill="white" fontSize="3" fontWeight="600" className="tracking-wide">
                        ADRENAL
                      </text>
                      <text x="50" y="-4" textAnchor="middle" fill="white" fontSize="3" fontWeight="600" className="tracking-wide">
                        THYROID
                      </text>
                    </g>
                  </Link>
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
                  
                  {/* Animated connecting lines with pulse effect */}
                  <g className="animate-pulse" style={{ animationDuration: '3s' }}>
                    <line x1="50" y1="25" x2="15" y2="61.6" 
                      stroke="white" 
                      strokeWidth={hoveredNode === 'adrenal' || hoveredNode === 'digestive' ? "3" : "2.5"} 
                      strokeDasharray="4 2" 
                      filter="url(#glow)"
                      opacity={hoveredNode === 'adrenal' || hoveredNode === 'digestive' ? "1" : "0.8"}
                    >
                      <animate attributeName="stroke-dashoffset" values="0;12" dur="2s" repeatCount="indefinite" />
                    </line>
                    <line x1="50" y1="25" x2="85" y2="61.6" 
                      stroke="white" 
                      strokeWidth={hoveredNode === 'adrenal' || hoveredNode === 'bloodSugar' ? "3" : "2.5"} 
                      strokeDasharray="4 2" 
                      filter="url(#glow)"
                      opacity={hoveredNode === 'adrenal' || hoveredNode === 'bloodSugar' ? "1" : "0.8"}
                    >
                      <animate attributeName="stroke-dashoffset" values="0;12" dur="2s" repeatCount="indefinite" />
                    </line>
                    <line x1="15" y1="61.6" x2="85" y2="61.6" 
                      stroke="white" 
                      strokeWidth={hoveredNode === 'digestive' || hoveredNode === 'bloodSugar' ? "3" : "2.5"} 
                      strokeDasharray="4 2" 
                      filter="url(#glow)"
                      opacity={hoveredNode === 'digestive' || hoveredNode === 'bloodSugar' ? "1" : "0.8"}
                    >
                      <animate attributeName="stroke-dashoffset" values="0;12" dur="2s" repeatCount="indefinite" />
                    </line>
                  </g>
                </svg>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mt-8 text-center">
                <Link to="/digestive-system" className="group text-white hover:text-cyber-cyan transition-all duration-300 transform hover:scale-105 bg-dark-navy/60 backdrop-blur-sm rounded-xl p-4 border border-cyber-cyan/20 hover:border-cyber-cyan/60 hover:shadow-neon">
                  <span className="block font-bold text-lg md:text-xl mb-1 text-cyber-cyan">Point 1</span>
                  <span className="text-sm md:text-base text-gray-300 group-hover:text-white">Digestive System</span>
                </Link>
                <Link to="/blood-sugar" className="group text-white hover:text-cyber-cyan transition-all duration-300 transform hover:scale-105 bg-dark-navy/60 backdrop-blur-sm rounded-xl p-4 border border-cyber-cyan/20 hover:border-cyber-cyan/60 hover:shadow-neon">
                  <span className="block font-bold text-lg md:text-xl mb-1 text-cyber-cyan">Point 2</span>
                  <span className="text-sm md:text-base text-gray-300 group-hover:text-white">Blood Sugar</span>
                </Link>
                <Link to="/adrenal-thyroid" className="group text-white hover:text-cyber-cyan transition-all duration-300 transform hover:scale-105 bg-dark-navy/60 backdrop-blur-sm rounded-xl p-4 border border-cyber-cyan/20 hover:border-cyber-cyan/60 hover:shadow-neon">
                  <span className="block font-bold text-lg md:text-xl mb-1 text-cyber-cyan">Point 3</span>
                  <span className="text-sm md:text-base text-gray-300 group-hover:text-white">Adrenal-Thyroid</span>
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
