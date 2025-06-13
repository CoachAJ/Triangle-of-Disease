import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found - Triangle of Disease | Daily with Doc & Becca</title>
        <meta name="description" content="The page you're looking for could not be found." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <div className="min-h-[60vh] flex flex-col items-center justify-center py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-health-blue">404</h1>
        <h2 className="text-2xl md:text-3xl font-medium mb-6 text-gray-700">Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-8 text-center max-w-md">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn bg-glorious-sunset hover:bg-tangy-yellow">
          Return to Homepage
        </Link>
      </div>
    </>
  )
}

export default NotFoundPage
