import { Link } from 'react-router-dom'
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa'
import { useAffiliate } from '../contexts/AffiliateContext'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const { affiliateId, addAffiliateToLink } = useAffiliate()
  const defaultDistributorId = '102742703' // Default distributor ID
  const displayId = affiliateId || defaultDistributorId

  return (
    <footer className="bg-dark-navy text-white border-t border-cyber-cyan/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <img 
                src="/pharmacist-ben-bytes-logo.jpg" 
                alt="Pharmacist Ben's Bytes" 
                className="w-14 h-14 rounded-full shadow-neon object-cover"
              />
              <div className="ml-3">
                <div className="font-proxima text-white font-bold text-lg">Triangle of Disease</div>
                <div className="text-cyber-cyan text-sm">by Pharmacist Ben Fuchs</div>
              </div>
            </Link>
            <p className="text-gray-400 mb-4">
              The Triangle of Disease is a revolutionary health concept developed by <span className="text-cyber-cyan font-semibold">Pharmacist Ben Fuchs, R.Ph.</span> to address the root causes of chronic health issues through nutritional science.
            </p>
            <div className="flex space-x-4 mt-4">
              <a 
                href="https://www.facebook.com/DailyWithDocAndBecca" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyber-cyan transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </a>
              <a 
                href="https://www.youtube.com/c/CriticalHealthNews" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyber-cyan transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube size={20} />
              </a>
              <a 
                href="https://twitter.com/DailywithDoc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyber-cyan transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
              <a 
                href="https://www.instagram.com/dailywithdoc/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyber-cyan transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-cyber-cyan">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/digestive-system" className="text-gray-400 hover:text-cyber-cyan transition-colors">
                  Digestive System
                </Link>
              </li>
              <li>
                <Link to="/blood-sugar" className="text-gray-400 hover:text-cyber-cyan transition-colors">
                  Blood Sugar
                </Link>
              </li>
              <li>
                <Link to="/adrenal-thyroid" className="text-gray-400 hover:text-cyber-cyan transition-colors">
                  Adrenal/Thyroid
                </Link>
              </li>
              <li>
                <Link to="/health-strategies" className="text-gray-400 hover:text-cyber-cyan transition-colors">
                  Health Strategies
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-400 hover:text-cyber-cyan transition-colors">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-cyber-cyan">Tools</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/assessment-tools" className="text-gray-400 hover:text-cyber-cyan transition-colors">
                  Assessment Tools
                </Link>
              </li>
              <li>
                <Link to="/food-diary" className="text-gray-400 hover:text-cyber-cyan transition-colors">
                  Food Diary
                </Link>
              </li>
              <li>
                <Link to="/health-coaches" className="text-gray-400 hover:text-cyber-cyan transition-colors">
                  Health Coaches
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-cyber-cyan">Stay Connected</h3>
            <p className="text-gray-400 mb-4">
              Get the latest health insights and Triangle of Disease updates from Pharmacist Ben.
            </p>
            <div className="space-y-3">
              <a 
                href={addAffiliateToLink("https://dailywithdoc.com/newsletter")}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-cyber-cyan to-neon-glow text-dark-navy font-semibold px-4 py-2 rounded-md hover:shadow-neon transition-all duration-300"
              >
                Subscribe to Newsletter
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-cyber-cyan/20 text-sm text-gray-500">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-auto mb-4 md:mb-0">
              <p>&copy; {currentYear} Triangle of Disease by Pharmacist Ben Fuchs. All rights reserved.</p>
            </div>
            <div className="flex flex-wrap space-x-4">
              <a 
                href={`https://${displayId}.youngevity.com/us_en/privacy-policy`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-cyber-cyan transition-colors"
              >
                Privacy Policy
              </a>
              <a 
                href={`https://${displayId}.youngevity.com/us_en/terms-of-use`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-cyber-cyan transition-colors"
              >
                Terms of Use
              </a>
              <a 
                href={`https://${displayId}.youngevity.com/us_en/youngevity-data-protection-policy`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-cyber-cyan transition-colors"
              >
                Data Protection
              </a>
            </div>
          </div>
          <div className="mt-2 flex flex-wrap justify-between items-center">
            <p className="text-gray-600">Independent YGY Distributor ID: {displayId}</p>
            {affiliateId && (
              <p className="text-cyber-cyan text-xs">
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
