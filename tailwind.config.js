// tailwind.config.js

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // include the app folder for Tailwind
    './pages/**/*.{js,ts,jsx,tsx}', // (if you have pages as well)
    './components/**/*.{js,ts,jsx,tsx}' // Include components (optional)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

// tailwind.config.js
module.exports = {
  darkMode: 'class', // Enable dark mode via a class
  theme: {
    extend: {},
  },
  plugins: [],
};
