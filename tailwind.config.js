/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Ensure this points to your source code

    "./src/**/*.{js,tsx,ts,jsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        "brand-purple": "#340C4C",
        "brand-orange": "#EB7363",
        "brand-port": "#5C244C",
        "brand-rouge": "#9C4454",
      },
    },
  },
  plugins: [],
};
