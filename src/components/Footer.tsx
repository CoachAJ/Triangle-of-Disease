import { Link } from 'react-router-dom'
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const distributorId = '102742703' // Updated distributor ID

  return (
    <footer className="bg-health-blue text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <img 
                src="/logo-footer.png" 
                alt="Daily with Doc & Becca"
                className="h-10" 
              />
            </Link>
            <p className="text-blue-100 mb-4">
              Understanding the Triangle of Disease concept by Pharmacist Ben Fuchs, R.Ph. to address the root causes of chronic health issues.
            </p>
            <div className="flex space-x-4 mt-4">
              <a 
                href="https://www.facebook.com/Healthwith90forlife" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-tangy-yellow transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </a>
              <a 
                href="https://www.youtube.com/c/CriticalHealthNews" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-tangy-yellow transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube size={20} />
              </a>
              <a 
                href="https://twitter.com/DailywithDoc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-tangy-yellow transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
              <a 
                href="https://www.instagram.com/dailywithdoc/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-tangy-yellow transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-proxima font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-blue-100 hover:text-tangy-yellow transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/digestive-system" className="text-blue-100 hover:text-tangy-yellow transition-colors">
                  Digestive System
                </Link>
              </li>
              <li>
                <Link to="/blood-sugar" className="text-blue-100 hover:text-tangy-yellow transition-colors">
                  Blood Sugar
                </Link>
              </li>
              <li>
                <Link to="/adrenal-thyroid" className="text-blue-100 hover:text-tangy-yellow transition-colors">
                  Adrenal-Thyroid
                </Link>
              </li>
              <li>
                <Link to="/health-strategies" className="text-blue-100 hover:text-tangy-yellow transition-colors">
                  Health Strategies
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-proxima font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/assessment-tools" className="text-blue-100 hover:text-tangy-yellow transition-colors">
                  Assessment Tools
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-blue-100 hover:text-tangy-yellow transition-colors">
                  Books & Publications
                </Link>
              </li>
              <li>
                <a 
                  href={`https://${distributorId}.youngevity.com`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-100 hover:text-tangy-yellow transition-colors"
                >
                  Youngevity Store
                </a>
              </li>
              <li>
                <a 
                  href="https://dailywithdoc.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-100 hover:text-tangy-yellow transition-colors"
                >
                  Daily with Doc & Becca
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-proxima font-bold mb-4">Contact Us</h3>
            <p className="text-blue-100 mb-2">
              Email: <a href="mailto:questions@dailywithdoc.com?subject=Triangle%20of%20Disease%20Inquiry" className="hover:text-tangy-yellow transition-colors">questions@dailywithdoc.com</a>
            </p>
            <p className="text-blue-100 mb-2">
              Phone: <a href="tel:8559493377" className="hover:text-tangy-yellow transition-colors">855.949.3377 ext 800</a>
            </p>
            <div className="mt-4">
              <a 
                href="/newsletter" 
                className="inline-block bg-glorious-sunset text-white px-4 py-2 rounded-md hover:bg-tangy-yellow transition-colors"
              >
                Subscribe to Newsletter
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-blue-400 text-sm text-blue-200">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-auto mb-4 md:mb-0">
              <p>&copy; {currentYear} Daily with Doc & Becca. All rights reserved.</p>
            </div>
            <div className="flex flex-wrap space-x-4">
              <a 
                href={`https://${distributorId}.youngevity.com/us_en/privacy-policy`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-200 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a 
                href={`https://${distributorId}.youngevity.com/us_en/terms-of-use`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-200 hover:text-white transition-colors"
              >
                Terms of Use
              </a>
              <a 
                href={`https://${distributorId}.youngevity.com/us_en/youngevity-data-protection-policy`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-200 hover:text-white transition-colors"
              >
                Data Protection
              </a>
            </div>
          </div>
          <div className="mt-2 flex items-center">
            <p className="text-blue-200">Independent YGY Distributor ID: {distributorId}</p>
            <img 
              src="/assets/ygy-logo.png" 
              alt="Independent YGY Distributor" 
              className="h-8 ml-2" 
            />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
