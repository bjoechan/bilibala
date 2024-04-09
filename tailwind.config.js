/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx,json}`,
    `./src/components/**/*.{js,jsx,ts,tsx,json}`,
  ],
  theme: {
    extend: {
      colors: {
        green: "#0D9693",
        slate: "#475569",
      },
      width: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        sans: ["Barlow", "sans-serif"],
      },
      animation: {
        slideIn: "slideIn 0.5s forwards",
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideOut: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
