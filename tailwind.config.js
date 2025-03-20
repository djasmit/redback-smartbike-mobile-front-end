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
        "brand-navy": "#163E6A",
      },
    },
  },
  plugins: [],
};
