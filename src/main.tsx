// Add debugging to identify initialization issues
console.log('Starting initialization of Triangle of Disease app');

import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'
import './index.css'

// Log imports completed successfully
console.log('Imports completed successfully');

// Error handling for development and debugging
const handleError = (error: Error) => {
  console.error('Application Error:', error)
  // Display fallback UI for critical errors
  const rootElement = document.getElementById('root')
  if (rootElement) {
    rootElement.innerHTML = `
      <div style="padding: 20px; font-family: sans-serif;">
        <h1 style="color: #0068B3;">Triangle of Disease</h1>
        <p>We're experiencing technical difficulties. Please try again later.</p>
        <p>Error: ${error.message}</p>
        <a href="/" style="color: #F58A34; text-decoration: underline;">Refresh the page</a>
      </div>
    `
  }
}

// Get root element with error handling
const rootElement = document.getElementById('root')

if (!rootElement) {
  console.error('Root element not found')
} else {
  try {
    // Initialize React application
    console.log('Creating root element...');
    const root = ReactDOM.createRoot(rootElement)
    
    console.log('About to render React app...');
    try {
      root.render(
        <React.StrictMode>
          <HashRouter>
            <HelmetProvider>
              <App />
            </HelmetProvider>
          </HashRouter>
        </React.StrictMode>
      )
      
      console.log('React application successfully mounted');

      // Force remove loading screen after successful render
      setTimeout(() => {
        const loadingElement = document.querySelector('.app-loading') as HTMLElement;
        if (loadingElement) {
          loadingElement.style.display = 'none';
          console.log('Loading screen removed after successful mount');
        }
      }, 1000);
    } catch (err) {
      console.error('Error during render:', err);
      // Display error info on page
      rootElement.innerHTML = `
        <div style="padding: 20px; font-family: sans-serif;">
          <h1 style="color: #0068B3;">Triangle of Disease</h1>
          <p>We encountered an error while loading the application.</p>
          <p>Error details: ${err instanceof Error ? err.message : 'Unknown error'}</p>
          <p>Please try refreshing the page.</p>
        </div>
      `;
    }
  } catch (error) {
    handleError(error instanceof Error ? error : new Error('Unknown error occurred'))
  }
}
