/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0D0A07",
        primary: "#E8601C",
        accent: "#F5C842",
        surface: "#1A1410",
        "text-light": "#F5EFE6",
        "text-muted": "#9E8C78",
        border: "#2E2218",
      },
      fontFamily: {
        playfair: ["'Playfair Display'", "serif"],
        dm: ["'DM Sans'", "sans-serif"],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
