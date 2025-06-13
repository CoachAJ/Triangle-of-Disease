# Triangle of Disease Website

A React-based educational website about the Triangle of Disease concept, highlighting the three foundational systems that form the basis of chronic health issues.

## Features

- Responsive design using Tailwind CSS
- Interactive assessment tools for self-evaluation
- Educational resources about the three points of the Triangle of Disease
- SEO optimized with meta tags and structured data
- Mobile-friendly navigation
- Comprehensive health strategies

## Project Structure

```
triangle-of-disease/
├── public/                  # Static files
│   ├── _redirects           # Netlify redirect rules for SPA
│   ├── robots.txt           # Search engine instructions
│   ├── sitemap.xml          # Site structure for search engines
│   └── assets/              # Images and other static resources
├── src/                     # Source code
│   ├── components/          # Reusable React components
│   │   ├── Header.tsx       # Site navigation
│   │   ├── Footer.tsx       # Site footer with legal links
│   │   └── Layout.tsx       # Page layout wrapper
│   ├── pages/               # Page components
│   │   ├── HomePage.tsx              # Landing page
│   │   ├── DigestiveSystemPage.tsx   # Digestive system information
│   │   ├── BloodSugarPage.tsx        # Blood sugar information
│   │   ├── AdrenalThyroidPage.tsx    # Adrenal-thyroid information
│   │   ├── HealthStrategiesPage.tsx  # Health strategies
│   │   ├── ResourcesPage.tsx         # Articles and videos
│   │   ├── AssessmentToolsPage.tsx   # Self-assessment tools
│   │   └── NotFoundPage.tsx          # 404 page
│   ├── App.tsx              # Main application component with routing
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global styles and Tailwind directives
├── package.json             # Project dependencies and scripts
├── tailwind.config.js       # Tailwind CSS configuration
├── vite.config.ts           # Vite bundler configuration
├── netlify.toml             # Netlify deployment configuration
└── README.md                # Project documentation
```

## Brand Colors

- Health Blue: #0068B3
- Blue Sky: #3CAADF
- Glorious Sunset: #F58A34
- Tangy Yellow: #FFB81C

## Fonts

- Headings: Proxima Nova
- Body Text: Montserrat

## Deployment Instructions

This project is configured for deployment on Netlify:

1. Make sure you have the Netlify CLI installed:
   ```
   npm install -g netlify-cli
   ```

2. Install project dependencies:
   ```
   npm install
   ```

3. Build the project:
   ```
   npm run build
   ```

4. For local testing:
   ```
   npm run preview
   ```

5. To deploy to Netlify:
   ```
   netlify deploy
   ```

   For production deployment:
   ```
   netlify deploy --prod
   ```

## Development

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Visit `http://localhost:5173` in your browser

## Distributor Information

- Independent YGY Distributor ID: 102742703
- Official Website: https://102742703.youngevity.com/

## SEO Optimization

This site follows best practices for SEO:
- Proper meta tags for all pages
- Structured data using JSON-LD
- Semantic HTML elements
- Optimized images with descriptive alt text
- Proper heading hierarchy
- Mobile responsiveness
- Sitemap and robots.txt
