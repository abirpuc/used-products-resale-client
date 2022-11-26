/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui:{
    themes:[
      {
        my_theme: {
          primary: "#2563eb",
          secondary: "#d1d5db",
          accent: "#f3f4f6",
          neutral: "#1c1917",
          base: "#fffff",
          info: "#2563eb",
          success: "#047857",
          warning: "#FBBD23",
          error: "#dc2626",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
