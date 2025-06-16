import { Link } from 'react-router-dom'
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa'
import { useAffiliate } from '../contexts/AffiliateContext'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const { affiliateId, addAffiliateToLink } = useAffiliate()
  const defaultDistributorId = '102742703' // Default distributor ID
  const displayId = affiliateId || defaultDistributorId

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
                href="https://www.facebook.com/DailyWithDocAndBecca" 
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
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/digestive-system" className="text-blue-100 hover:text-white transition-colors">
                  Digestive System
                </Link>
              </li>
              <li>
                <Link to="/blood-sugar" className="text-blue-100 hover:text-white transition-colors">
                  Blood Sugar
                </Link>
              </li>
              <li>
                <Link to="/adrenal-thyroid" className="text-blue-100 hover:text-white transition-colors">
                  Adrenal/Thyroid
                </Link>
              </li>
              <li>
                <Link to="/health-strategies" className="text-blue-100 hover:text-white transition-colors">
                  Health Strategies
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-blue-100 hover:text-white transition-colors">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-lg font-bold mb-4">Tools</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/assessment-tools" className="text-blue-100 hover:text-white transition-colors">
                  Assessment Tools
                </Link>
              </li>
              <li>
                <Link to="/food-diary" className="text-blue-100 hover:text-white transition-colors">
                  Food Diary
                </Link>
              </li>
              <li>
                <Link to="/health-coaches" className="text-blue-100 hover:text-white transition-colors">
                  Health Coaches
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Stay Connected</h3>
            <p className="text-blue-100 mb-4">
              Get the latest health insights and Triangle of Disease updates.
            </p>
            <div className="space-y-3">
              <a 
                href={addAffiliateToLink("https://dailywithdoc.com/newsletter")}
                target="_blank" 
                rel="noopener noreferrer"
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
                href={`https://${displayId}.youngevity.com/us_en/privacy-policy`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-200 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a 
                href={`https://${displayId}.youngevity.com/us_en/terms-of-use`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-200 hover:text-white transition-colors"
              >
                Terms of Use
              </a>
              <a 
                href={`https://${displayId}.youngevity.com/us_en/youngevity-data-protection-policy`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-200 hover:text-white transition-colors"
              >
                Data Protection
              </a>
            </div>
          </div>
          <div className="mt-2 flex flex-wrap justify-between items-center">
            <p className="text-blue-200">Independent YGY Distributor ID: {displayId}</p>
            {affiliateId && (
              <p className="text-tangy-yellow text-xs">
                🎯 Referred by Affiliate: {affiliateId}
              </p>
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
