/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'health-blue': '#0068B3',
        'blue-sky': '#3CAADF',
        'glorious-sunset': '#F58A34',
        'tangy-yellow': '#FFB81C',
      },
      fontFamily: {
        'proxima-nova': ['"Proxima Nova"', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
