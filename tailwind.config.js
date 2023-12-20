/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "primary-text": "var(--primary-text)",
        "secondary-text": "var(--secondary-text)",
        "secondary-bg": "var(--secondary-bg)",
        "primary-bg": "var(--primary-bg)",
        "others-bg": "var(--others-bg)",
        "sidebar_color": 'var(--sidebar_color)',
      }
    },
    screens: {
      'sm': '390px',
      'md': '834px',
      'lg': '1512px',
    },
  },
  plugins: [],
  
}

