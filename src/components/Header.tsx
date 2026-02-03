import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Handle header visibility based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px - hide header
        setIsHidden(true);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show header
        setIsHidden(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setTimeout(() => document.getElementById('search-input')?.focus(), 100);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    setSearchQuery('');
    setIsSearchOpen(false);
  };

  return (
    <>
      <header
        className={`fixed w-full z-50 transition-all duration-300 bg-dark-navy/95 backdrop-blur-md border-b border-cyber-cyan/20 ${
          isHidden ? '-translate-y-full' : 'shadow-lg shadow-cyber-cyan/10'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            {/* Logo and Branding */}
            <Link to="/" className="flex items-center group">
              <div className="flex items-center">
                <img 
                  src="/pharmacist-ben-bytes-logo.jpg" 
                  alt="Pharmacist Ben's Bytes" 
                  className="w-10 h-10 rounded-full shadow-neon object-cover"
                />
                <div className="ml-2">
                  <div className="font-proxima text-white font-extrabold text-sm leading-tight">
                    Triangle of Disease
                  </div>
                  <div className="text-[10px] text-cyber-cyan -mt-0.5">
                    by Pharmacist Ben Fuchs
                  </div>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {[
                { to: "/", label: "Home" },
                { to: "/digestive-system", label: "Digestive" },
                { to: "/blood-sugar", label: "Blood Sugar" },
                { to: "/adrenal-thyroid", label: "Adrenal" },
                { to: "/health-strategies", label: "Health" },
                { to: "/resources", label: "Resources" },
                { to: "/health-coaches", label: "Coaches" },
                { to: "/assessment-tools", label: "Tools" },
                { to: "/food-diary", label: "Food Diary" },
              ].map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `px-2.5 py-1.5 text-xs font-medium rounded-md transition-all duration-200 ${
                      isActive
                        ? "bg-cyber-cyan/20 text-cyber-cyan border border-cyber-cyan/30"
                        : "text-gray-300 hover:text-cyber-cyan hover:bg-white/5"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <button
                onClick={toggleSearch}
                className="ml-1 p-1.5 text-gray-400 hover:text-cyber-cyan transition-colors rounded-full hover:bg-white/10"
                aria-label="Search"
              >
                <FaSearch className="w-3.5 h-3.5" />
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={toggleSearch}
                className="p-2 text-gray-400 hover:text-cyber-cyan transition-colors"
                aria-label="Search"
              >
                <FaSearch className="w-4 h-4" />
              </button>
              <button
                onClick={toggleMenu}
                className="p-2 text-gray-400 hover:text-cyber-cyan transition-colors"
                aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
              >
                {isMenuOpen ? (
                  <FaTimes className="w-5 h-5" />
                ) : (
                  <FaBars className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>
      {/* Add spacing to account for fixed header */}
      <div className="h-14"></div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-dark-navy mt-14 lg:hidden overflow-y-auto">
          <div className="container mx-auto px-4 py-2">
            <nav className="flex flex-col space-y-1 py-2">
              {[
                { to: "/", label: "Home" },
                { to: "/digestive-system", label: "Digestive System" },
                { to: "/blood-sugar", label: "Blood Sugar" },
                { to: "/adrenal-thyroid", label: "Adrenal-Thyroid" },
                { to: "/health-strategies", label: "Health Strategies" },
                { to: "/resources", label: "Resources" },
                { to: "/health-coaches", label: "Health Coaches" },
                { to: "/assessment-tools", label: "Assessment Tools" },
                { to: "/food-diary", label: "Food Diary" },
              ].map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `px-4 py-3 text-sm font-medium rounded-md border border-transparent ${
                      isActive
                        ? "bg-cyber-cyan/20 text-cyber-cyan border-cyber-cyan/30"
                        : "text-gray-300 hover:bg-white/5 hover:text-cyber-cyan"
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 bg-dark-navy/98 backdrop-blur-md pt-20">
          <div className="container mx-auto px-4">
            <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  id="search-input"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search the site..."
                  className="w-full px-5 py-4 text-lg text-white border-0 border-b-2 border-cyber-cyan/30 focus:ring-0 focus:border-cyber-cyan outline-none bg-transparent placeholder-gray-500"
                  autoComplete="off"
                />
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(false)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-cyber-cyan"
                  aria-label="Close search"
                >
                  <FaTimes className="w-5 h-5" />
                </button>
              </div>
              <div className="mt-4 text-sm text-gray-500 text-center">
                Press Enter to search or ESC to close
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
