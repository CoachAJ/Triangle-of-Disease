import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const distributorId = '102742703' // Daily with Doc & Becca distributor ID

  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-tangy-yellow">About</h3>
            <p className="text-gray-300 mb-4">
              The Triangle of Disease concept identifies three key physiological systems that form the foundation of your health.
            </p>
            <Link to="/" className="text-blue-sky hover:text-glorious-sunset transition duration-300">
              Learn More
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-tangy-yellow">Triangle Points</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/digestive-system" className="text-gray-300 hover:text-blue-sky transition duration-300">
                  Digestive System
                </Link>
              </li>
              <li>
                <Link to="/blood-sugar" className="text-gray-300 hover:text-blue-sky transition duration-300">
                  Blood Sugar
                </Link>
              </li>
              <li>
                <Link to="/adrenal-thyroid" className="text-gray-300 hover:text-blue-sky transition duration-300">
                  Adrenal-Thyroid
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-tangy-yellow">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/health-strategies" className="text-gray-300 hover:text-blue-sky transition duration-300">
                  Health Strategies
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-300 hover:text-blue-sky transition duration-300">
                  Articles & Videos
                </Link>
              </li>
              <li>
                <Link to="/assessment-tools" className="text-gray-300 hover:text-blue-sky transition duration-300">
                  Assessment Tools
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-tangy-yellow">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href={`https://${distributorId}.youngevity.com/us_en/privacy-policy`}
                  className="text-gray-300 hover:text-blue-sky transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href={`https://${distributorId}.youngevity.com/us_en/terms-of-use`}
                  className="text-gray-300 hover:text-blue-sky transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms of Use
                </a>
              </li>
              <li>
                <a 
                  href={`https://${distributorId}.youngevity.com/us_en/youngevity-data-protection-policy`}
                  className="text-gray-300 hover:text-blue-sky transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Data Protection Policy
                </a>
              </li>
              <li>
                <a 
                  href={`https://${distributorId}.youngevity.com/us_en/customer-care#returns`}
                  className="text-gray-300 hover:text-blue-sky transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Shipping & Returns
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-tangy-yellow">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/DailyWithDocAndBecca" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-500 transition duration-300"
                aria-label="Facebook"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.772-1.63 1.563V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/company/dailywithdoc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition duration-300"
                aria-label="LinkedIn"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.026-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a 
                href="https://www.youtube.com/@CriticalHealthNews/streams" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-red-500 transition duration-300"
                aria-label="YouTube"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
            <div className="mt-4">
              <p className="text-gray-400 text-sm">Follow us for the latest updates</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Daily with Doc & Becca. All rights reserved.
          </p>
          
          <div className="flex items-center">
            <p className="text-gray-400 text-sm">
              Independent Distributor ID: {distributorId}
            </p>
            <a 
              href={`https://${distributorId}.youngevity.com`}
              className="ml-4 text-blue-sky hover:text-glorious-sunset transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img 
                src="/assets/ygy-logo.png" 
                alt="Youngevity Logo" 
                className="h-8"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  // Add null check and proper type casting
                  if (e.currentTarget.nextSibling) {
                    (e.currentTarget.nextSibling as HTMLElement).style.display = 'inline'
                  }
                }}
              />
              <span className="hidden">Youngevity Independent Distributor</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
