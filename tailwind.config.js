/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#B4754C",
        "primary-300": "#884E40",
        secondary: "#AB9A48",
        "secondary-300": "#899B61",
        "secondary-600": "#404436",
        tertiary: "rgb(31 41 55)",
        quaternary: "rgb(239 68 68)",
      },
      content: {
        bannerImg: "url('./assets/bannerImg.png')",
      },
    },
  },
  plugins: [],
};
