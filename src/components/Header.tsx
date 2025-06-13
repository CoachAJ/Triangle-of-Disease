import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-health-blue">
            Triangle of Disease
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink to="/" 
              className={({isActive}) => 
                isActive ? "text-glorious-sunset font-medium" : "text-gray-700 hover:text-health-blue transition-colors"
              }
            >
              Home
            </NavLink>
            <NavLink to="/digestive-system" 
              className={({isActive}) => 
                isActive ? "text-glorious-sunset font-medium" : "text-gray-700 hover:text-health-blue transition-colors"
              }
            >
              Digestive System
            </NavLink>
            <NavLink to="/blood-sugar" 
              className={({isActive}) => 
                isActive ? "text-glorious-sunset font-medium" : "text-gray-700 hover:text-health-blue transition-colors"
              }
            >
              Blood Sugar
            </NavLink>
            <NavLink to="/adrenal-thyroid" 
              className={({isActive}) => 
                isActive ? "text-glorious-sunset font-medium" : "text-gray-700 hover:text-health-blue transition-colors"
              }
            >
              Adrenal-Thyroid
            </NavLink>
            <NavLink to="/health-strategies" 
              className={({isActive}) => 
                isActive ? "text-glorious-sunset font-medium" : "text-gray-700 hover:text-health-blue transition-colors"
              }
            >
              Health Strategies
            </NavLink>
            <NavLink to="/resources" 
              className={({isActive}) => 
                isActive ? "text-glorious-sunset font-medium" : "text-gray-700 hover:text-health-blue transition-colors"
              }
            >
              Resources
            </NavLink>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 space-y-3 pb-3">
            <NavLink to="/" 
              className={({isActive}) => 
                isActive ? "block text-glorious-sunset font-medium" : "block text-gray-700 hover:text-health-blue transition-colors"
              }
              onClick={closeMenu}
            >
              Home
            </NavLink>
            <NavLink to="/digestive-system" 
              className={({isActive}) => 
                isActive ? "block text-glorious-sunset font-medium" : "block text-gray-700 hover:text-health-blue transition-colors"
              }
              onClick={closeMenu}
            >
              Digestive System
            </NavLink>
            <NavLink to="/blood-sugar" 
              className={({isActive}) => 
                isActive ? "block text-glorious-sunset font-medium" : "block text-gray-700 hover:text-health-blue transition-colors"
              }
              onClick={closeMenu}
            >
              Blood Sugar
            </NavLink>
            <NavLink to="/adrenal-thyroid" 
              className={({isActive}) => 
                isActive ? "block text-glorious-sunset font-medium" : "block text-gray-700 hover:text-health-blue transition-colors"
              }
              onClick={closeMenu}
            >
              Adrenal-Thyroid
            </NavLink>
            <NavLink to="/health-strategies" 
              className={({isActive}) => 
                isActive ? "block text-glorious-sunset font-medium" : "block text-gray-700 hover:text-health-blue transition-colors"
              }
              onClick={closeMenu}
            >
              Health Strategies
            </NavLink>
            <NavLink to="/resources" 
              className={({isActive}) => 
                isActive ? "block text-glorious-sunset font-medium" : "block text-gray-700 hover:text-health-blue transition-colors"
              }
              onClick={closeMenu}
            >
              Resources
            </NavLink>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
