/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#ffd000",

          "secondary": "#0020ad",

          "accent": "#ffe3b3",

          "neutral": "#1C202B",

          "base-100": "#010722",

          "info": "#7EC3DD",

          "success": "#79E6B4",

          "warning": "#C49812",

          "error": "#FA5788",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

