# Triangle of Disease - Master Deployment Plan

## Overview

This guide outlines our comprehensive approach to deploying the Triangle of Disease React application to Netlify. Our strategy uses multiple layers of optimization and fallbacks to ensure reliability.

## Brand Standards (Daily with Doc & Becca)

- **Primary Colors**:
  - Health Blue: #0068B3
  - Blue Sky: #3CAADF
  - Glorious Sunset: #F58A34
  - Tangy Yellow: #FFB81C
  
- **Typography**:
  - Headers: Proxima Nova
  - Body Text: Montserrat
  
- **Distributor Information**:
  - ID: 102742703
  - All Youngevity links use this ID format: `https://102742703.youngevity.com/...`

## 🔍 Key Configuration Files

1. **Netlify Configuration** (`netlify.toml`):
   - Proper build settings
   - SPA routing redirects
   - Performance optimizations
   - Cache control headers

2. **Vite Configuration** (`vite.config.ts`):
   - Root-relative paths
   - Optimized bundle splitting
   - Terser minification

3. **React Router Setup** (`main.tsx`):
   - BrowserRouter with diagnostic logging
   - Error boundary handling

4. **Redirects and Routing** (`public/_redirects`):
   - SPA fallback routes
   - Domain alias configurations

5. **Fallback Strategy** (`public/index.html` & `standalone.html`):
   - Progressive enhancement
   - Loading diagnostics
   - Alternative content delivery

## 💻 Deployment Instructions

### Method 1: Manual ZIP Upload (Recommended for First Deploy)

1. **Prepare Your Files**:
   ```
   # Create a fresh zip file with all project files
   - Select all files in the Triangle of Disease folder
   - Right-click and choose "Send to" → "Compressed (zipped) folder"
   - Name it "triangle-of-disease-master.zip"
   ```

2. **Deploy to Netlify**:
   - Log in to [Netlify](https://app.netlify.com/)
   - Go to "Sites" tab
   - Drag and drop your ZIP file to the upload area
   - Wait for deployment to complete (usually 1-2 minutes)

3. **Check Deployment**:
   - Once deployment finishes, click "Preview" to view your site
   - Also check the "Deploys" tab for any build warnings or errors

### Method 2: Connect to Git Repository (For Ongoing Updates)

1. **Set Up Git Repository**:
   ```bash
   git init
   git add .
   git commit -m "Initial Triangle of Disease deployment"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Connect to Netlify**:
   - In Netlify dashboard, click "New site from Git"
   - Choose your Git provider (GitHub, GitLab, etc.)
   - Select your repository
   - Configure build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

## 🔧 Troubleshooting Guide

### If React App Shows Blank Screen:

1. **Check Browser Console** (F12 → Console tab)
   - Look for JavaScript errors
   - Note any 404 errors for assets

2. **Examine Network Tab**:
   - Are JavaScript files loading?
   - Check for CORS or CSP issues

3. **Clear Browser Cache**:
   - Use hard refresh (Ctrl+F5 or Cmd+Shift+R)
   - Or clear site data completely

4. **Try Alternate Version**:
   - Access `/standalone.html` for the fallback version

5. **Check Netlify Logs**:
   - Look at the "Functions" tab in Netlify dashboard
   - Review build logs for warnings or errors

### Common Issues and Solutions:

1. **Asset Path Problems**:
   - Solution: Ensure all asset paths are absolute (`/assets/...`)

2. **Build Failures**:
   - Solution: Check for syntax errors or missing dependencies

3. **Routing Issues**:
   - Solution: Verify `_redirects` file is properly formatted

4. **JavaScript Not Loading**:
   - Solution: Check browser compatibility; try a different browser

## 🚀 Post-Deployment Optimization

1. **Set Up Custom Domain**:
   - Go to "Domain Management" in Netlify
   - Click "Add custom domain"
   - Follow instructions to configure DNS

2. **Enable Performance Features**:
   - Turn on Netlify's asset optimization
   - Enable HTTP/2 and HTTP/3

3. **Configure Analytics**:
   - Add Google Analytics or Netlify Analytics

4. **Set Up Forms** (if needed):
   - Add `data-netlify="true"` to any forms

## 📈 SEO Verification

Confirm these SEO elements are present and working:

- ✓ `sitemap.xml` accessible at `/sitemap.xml`
- ✓ `robots.txt` accessible at `/robots.txt`
- ✓ Meta descriptions on all pages
- ✓ Proper heading structure (H1 → H2 → H3)
- ✓ Open Graph tags for social sharing
- ✓ Canonical URLs to prevent duplicate content

## 🌟 Support Resources

- [Netlify Docs](https://docs.netlify.com/)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [React Router Documentation](https://reactrouter.com/en/main)

---

**This deployment plan was created specifically for the Triangle of Disease project and Daily with Doc & Becca brand guidelines.**
