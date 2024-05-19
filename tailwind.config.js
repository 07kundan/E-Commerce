/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lobster: ["Lobster", "sans-serif"],
        jersey: ["Jersey 25 Charted", "sans - serif"],
        rubik: ["Rubik Scribble", "system-ui"],
        poetsen: ["Poetsen One", "sans-serif"],
        ubuntu: ["Ubuntu Sans Mono", "monospace"],
        caveat: ["Caveat", "cursive"],
      }
    },
  },
  plugins: [],
}

