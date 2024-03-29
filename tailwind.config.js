/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'VeryLightGrayishBlue': 'hsl(240, 78%, 98%)',
        'LightGrayishBlue': 'hsl(234, 14%, 74%)',
        'GrayishBlue': 'hsl(233, 13%, 49%)',
        'DarkGrayishBlue': 'hsl(232, 13%, 33%)',

        "linear1": "hsl(236, 72%, 79%)",
        "linear2": "hsl(237, 63%, 64%)"
      },
      backgroundImage:{
        "bg-top" :"url('/images/bg-top.svg')",
        "bg-bottom": "url('images/bg-bottom.svg')"
      }
    },
  },
  plugins: [],
}