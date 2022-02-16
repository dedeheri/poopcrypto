module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: { roboto: ["Roboto", "sans-serif"] },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
