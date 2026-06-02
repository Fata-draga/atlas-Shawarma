export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#070707",
        "dark-light": "#111111",
        "dark-lighter": "#1a1a1a",
        gold: "#D4A017",
        "gold-light": "#f5c542",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        cormorant: ["Cormorant Garamond", "serif"],
      },
      boxShadow: {
        "gold-glow-sm": "0 0 20px rgba(212,160,23,0.45)",
        "gold-glow": "0 0 40px rgba(212,160,23,0.55)",
      },
    },
  },
  plugins: [],
};
