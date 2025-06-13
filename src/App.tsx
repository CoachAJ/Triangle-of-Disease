import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

// Extend Window interface for our custom properties
declare global {
  interface Window {
    markReactInitialized?: () => void;
    reactInitialized?: boolean;
  }
}
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import DigestiveSystemPage from './pages/DigestiveSystemPage'
import BloodSugarPage from './pages/BloodSugarPage'
import AdrenalThyroidPage from './pages/AdrenalThyroidPage'
import HealthStrategiesPage from './pages/HealthStrategiesPage'
import ResourcesPage from './pages/ResourcesPage'
import HealthCoachesPage from './pages/HealthCoachesPage'
import AssessmentToolsPage from './pages/AssessmentToolsPage'
import NotFoundPage from './pages/NotFoundPage'

const App: React.FC = () => {
  // Debug logs to help troubleshoot deployment issues
  useEffect(() => {
    console.log('App mounted')
    
    // Mark React as initialized for our debugging system
    if (window.markReactInitialized) {
      window.markReactInitialized();
    }
    
    // Remove loading indicator when app is ready
    const loadingElement = document.querySelector('.app-loading')
    if (loadingElement) {
      loadingElement.classList.add('loaded')
      setTimeout(() => {
        loadingElement.remove()
      }, 500)
    }
    
    // Log any potential errors
    window.addEventListener('error', (event) => {
      console.error('Global error caught:', event.error)
    })
    
    return () => {
      window.removeEventListener('error', (event) => {
        console.error('Global error caught:', event.error)
      })
    }
  }, [])
  
  return (
    <>
      <Helmet>
        <title>Triangle of Disease - Daily with Doc & Becca</title>
        <meta name="description" content="Understanding the Triangle of Disease: Uncovering the Root of Chronic Health Issues - Daily with Doc & Becca" />
        <meta name="keywords" content="Triangle of Disease, chronic disease, root cause, health issues, biochemical breakdown, systemic health, foundational health" />
        <link rel="canonical" href="https://triangleofdisease.netlify.app/" />
      </Helmet>
      
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="digestive-system" element={<DigestiveSystemPage />} />
          <Route path="blood-sugar" element={<BloodSugarPage />} />
          <Route path="adrenal-thyroid" element={<AdrenalThyroidPage />} />
          <Route path="health-strategies" element={<HealthStrategiesPage />} />
          <Route path="resources" element={<ResourcesPage />} />
          <Route path="health-coaches" element={<HealthCoachesPage />} />
          <Route path="assessment-tools" element={<AssessmentToolsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
