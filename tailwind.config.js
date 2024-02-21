/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
      widest: '.25em',
      long:'0.65em',
    },
    fontFamily:{
      'pop':['poppins'],
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

          "base-100": "#fffcea",

          info: "#00d6ff",

          success: "#69db00",

          warning: "#ffaf00",

          error: "#ff5255",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
