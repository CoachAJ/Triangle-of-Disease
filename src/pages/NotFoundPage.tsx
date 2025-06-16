import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { FaHome, FaSearch } from 'react-icons/fa'

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found - Triangle of Disease</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to the Triangle of Disease homepage." />
      </Helmet>

      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 text-center">
          <div>
            <img
              className="mx-auto h-24 w-auto"
              src="/logo-header.png"
              alt="Daily with Doc & Becca"
            />
            <h1 className="mt-6 text-4xl font-proxima font-bold text-health-blue">
              404 - Page Not Found
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>
          <div className="mt-8 space-y-4">
            <Link
              to="/"
              className="w-full flex items-center justify-center px-4 py-3 bg-health-blue text-white rounded-md hover:bg-blue-sky transition-colors"
            >
              <FaHome className="mr-2" /> Return to Homepage
            </Link>
            <Link
              to="/resources"
              className="w-full flex items-center justify-center px-4 py-3 bg-white border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <FaSearch className="mr-2" /> Browse Resources
            </Link>
          </div>
          <div className="mt-8">
            <p className="text-sm text-gray-500">
              Can't find what you're looking for? 
              <a 
                href="mailto:questions@dailywithdoc.com?subject=Triangle%20of%20Disease%20Inquiry" 
                className="ml-1 text-health-blue hover:text-blue-sky"
              >
                Contact us for assistance
              </a>.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default NotFoundPage
