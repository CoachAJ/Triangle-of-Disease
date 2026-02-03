/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Pharmacist Ben's Bytes - Dark Tech Theme
        'dark-navy': '#0A1628',
        'tech-blue': '#1A2744',
        'deep-blue': '#0D2847',
        'cyber-cyan': '#00D4FF',
        'neon-glow': '#4AEAFF',
        
        // Accent colors from branding
        'berry-red': '#E63946',
        'leaf-green': '#2D9B4E',
        'avocado': '#7CB342',
        'warm-orange': '#F58A34',
        
        // Legacy colors (kept for compatibility)
        'blue-sky': '#3CAADF',
        'health-blue': '#0068B3',
        'tangy-yellow': '#FFB81C',
        'glorious-sunset': '#F58A34',
        'hot-chocolate': '#784434',
        'shade-grey': '#58595B',
      },
      fontFamily: {
        'proxima': ['system-ui', 'sans-serif'],
        'montserrat': ['system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'circuit-pattern': "url('/circuit-bg.svg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-dark': 'linear-gradient(135deg, #0A1628 0%, #1A2744 50%, #0D2847 100%)',
      },
      boxShadow: {
        'neon': '0 0 20px rgba(0, 212, 255, 0.5)',
        'neon-lg': '0 0 40px rgba(0, 212, 255, 0.6)',
        'glow': '0 0 30px rgba(74, 234, 255, 0.4)',
      },
    },
  },
  plugins: [],
}
