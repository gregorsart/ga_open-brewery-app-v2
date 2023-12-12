/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        100: "25rem",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        primaryColor: "#FF9D00",
        secondaryColor: "#6A4F45",
        almostBlackColor: "#242422",
        softBackgroundColor: "#F3F3F3",
        mediumGrayBackgroundColor: "#D5D5D5",
        mediumBrownBackgroundColor: "#7E6A62",
      },
      fontFamily: {
        serif: ["var(--font-bitter)"],
        sans: ["var(--font-work)"],
      },
    },
  },
  plugins: [],
};
