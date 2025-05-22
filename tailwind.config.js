/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Daily with Doc & Becca brand colors
        'blue-sky': '#3CAADF',
        'health-blue': '#0068B3',
        'tangy-yellow': '#FFB81C',
        'glorious-sunset': '#F58A34',
        'hot-chocolate': '#784434',
        'shade-grey': '#58595B',
      },
      fontFamily: {
        'proxima': ['Proxima Nova', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
