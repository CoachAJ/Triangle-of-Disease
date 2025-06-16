import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaBars, FaSearch, FaTimes } from 'react-icons/fa'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleSearch = () => {
    setSearchOpen(!searchOpen)
    if (!searchOpen) {
      setTimeout(() => document.getElementById('search-input')?.focus(), 100)
    }
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Searching for:', searchQuery)
    // Future implementation: search functionality
    setSearchQuery('')
    setSearchOpen(false)
  }

  const navLinkClasses = ({ isActive }: { isActive: boolean }) => {
    return `block py-2 px-5 rounded font-montserrat transition-all duration-300 text-base md:text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-glorious-sunset/60 focus:ring-offset-2 focus:ring-offset-white/80
      ${
        isActive
          ? 'text-glorious-sunset font-bold underline underline-offset-8'
          : 'text-gray-700 hover:text-health-blue'
      }`
    
  }

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-1' : 'bg-white/90 py-3'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center group">
          <img
            src="/logo-header.png"
            alt="Daily with Doc & Becca"
            className="h-10 md:h-11 drop-shadow-lg transition-transform group-hover:scale-105"
          />
          <svg
            className="ml-2 w-6 h-6 md:w-7 md:h-7 flex-shrink-0"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Sunflower icon"
          >
            <circle cx="20" cy="20" r="8" fill="#784434" />
            <g>
              <ellipse cx="20" cy="5" rx="3" ry="7" fill="#FFB81C" />
              <ellipse cx="20" cy="35" rx="3" ry="7" fill="#FFB81C" />
              <ellipse cx="5" cy="20" rx="7" ry="3" fill="#FFB81C" />
              <ellipse cx="35" cy="20" rx="7" ry="3" fill="#FFB81C" />
              <ellipse cx="10" cy="10" rx="3" ry="7" transform="rotate(-45 10 10)" fill="#FFB81C" />
              <ellipse cx="30" cy="10" rx="3" ry="7" transform="rotate(45 30 10)" fill="#FFB81C" />
              <ellipse cx="10" cy="30" rx="3" ry="7" transform="rotate(45 10 30)" fill="#FFB81C" />
              <ellipse cx="30" cy="30" rx="3" ry="7" transform="rotate(-45 30 30)" fill="#FFB81C" />
            </g>
          </svg>
          <div className="ml-3 hidden md:block">
            <span className="block font-proxima text-health-blue text-xl md:text-2xl font-extrabold tracking-tight">
              Triangle of Disease
            </span>
            <span className="text-sm md:text-base font-montserrat text-glorious-sunset font-semibold">
              by Daily with Doc & Becca
            </span>
            <span className="text-xs text-hot-chocolate block">
              A concept by Pharmacist Ben Fuchs, R.Ph.
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
          <NavLink to="/" end className={navLinkClasses}>
            Home
          </NavLink>
          <NavLink to="/digestive-system" className={navLinkClasses}>
            Digestive System
          </NavLink>
          <NavLink to="/blood-sugar" className={navLinkClasses}>
            Blood Sugar
          </NavLink>
          <NavLink to="/adrenal-thyroid" className={navLinkClasses}>
            Adrenal-Thyroid
          </NavLink>
          <NavLink to="/health-strategies" className={navLinkClasses}>
            Health Strategies
          </NavLink>
          <NavLink to="/resources" className={navLinkClasses}>
            Resources
          </NavLink>
          <NavLink to="/health-coaches" className={navLinkClasses}>
            Health Coaches
          </NavLink>
          <NavLink to="/assessment-tools" className={navLinkClasses}>
            Assessment Tools
          </NavLink>
          <NavLink to="/food-diary" className={navLinkClasses}>
            Food Diary
          </NavLink>
          <button
            onClick={toggleSearch}
            className="ml-4 p-2 text-gray-600 hover:text-health-blue transition-colors"
            aria-label="Search"
          >
            <FaSearch />
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center lg:hidden">
          <button
            onClick={toggleSearch}
            className="p-2 mr-2 text-gray-600 hover:text-health-blue transition-colors"
            aria-label="Search"
          >
            <FaSearch />
          </button>
          <button
            onClick={toggleMenu}
            className="p-2 text-gray-600 hover:text-health-blue transition-colors"
            aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-md">
          <nav className="container mx-auto px-4 py-3">
            <NavLink
              to="/"
              end
              className={navLinkClasses}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/digestive-system"
              className={navLinkClasses}
              onClick={() => setIsMenuOpen(false)}
            >
              Digestive System
            </NavLink>
            <NavLink
              to="/blood-sugar"
              className={navLinkClasses}
              onClick={() => setIsMenuOpen(false)}
            >
              Blood Sugar
            </NavLink>
            <NavLink
              to="/adrenal-thyroid"
              className={navLinkClasses}
              onClick={() => setIsMenuOpen(false)}
            >
              Adrenal-Thyroid
            </NavLink>
            <NavLink
              to="/health-strategies"
              className={navLinkClasses}
              onClick={() => setIsMenuOpen(false)}
            >
              Health Strategies
            </NavLink>
            <NavLink
              to="/resources"
              className={navLinkClasses}
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </NavLink>
            <NavLink
              to="/health-coaches"
              className={navLinkClasses}
              onClick={() => setIsMenuOpen(false)}
            >
              Health Coaches
            </NavLink>
            <NavLink
              to="/assessment-tools"
              className={navLinkClasses}
              onClick={() => setIsMenuOpen(false)}
            >
              Assessment Tools
            </NavLink>
            <NavLink
              to="/food-diary"
              className={navLinkClasses}
              onClick={() => setIsMenuOpen(false)}
            >
              Food Diary
            </NavLink>
          </nav>
        </div>
      )}

      {/* Search Overlay */}
      {searchOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md p-4 border-t border-gray-200">
          <form onSubmit={handleSearch} className="flex">
            <input
              id="search-input"
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-health-blue"
            />
            <button
              type="submit"
              className="bg-health-blue text-white px-4 py-2 rounded-r-md hover:bg-blue-sky transition-colors"
            >
              Search
            </button>
          </form>
        </div>
      )}
    </header>
  )
}

export default Header
