/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#506c54",
        "dark-green": "#3B4C3E",
        pearl: "#F0E4CC",
        brown: "#251605",
        orange: "#F2542D",
      },
    },
  },

  plugins: [],
};
