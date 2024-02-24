/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],
  theme: {
    letterSpacing: {
      high: "0.7rem",
      mid: "0.2rem",
      low: "0.1rem",
    },
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#c800ff",
          secondary: "#0034ff",
          accent: "#ff4e00",
          neutral: "#392527",
          "base-100": "#ffffff",
          // "base-100": "#fffcea",
          info: "#00d6ff",
          success: "#69db00",
          warning: "#ffaf00",
          error: "#ff5255",
        },
      },
    ],
  },
  plugins: [require("daisyui"), require("flowbite/plugin")],
};
