import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { AffiliateProvider } from './contexts/AffiliateContext'
import App from './App.tsx'
import './index.css'

// Check if the application is loaded correctly
console.log('React application initializing...');

// Create the root and render the app
const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <HelmetProvider>
          <AffiliateProvider>
            <App />
          </AffiliateProvider>
        </HelmetProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
  
  console.log('React application mounted successfully');
} else {
  console.error('Root element not found - unable to mount React application');
}
