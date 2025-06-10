
// frontend/tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // This is the CRITICAL line: it tells Tailwind to scan all JS, JSX, TS, TSX files in your src/ directory
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
