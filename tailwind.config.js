/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        Blue: 'hsl(246, 80%, 60%)',
        LightRedWork: 'hsl(15, 100%, 70%)',
        SoftBlue: 'hsl(195, 74%, 62%)',
        LightRedStudy: 'hsl(348, 100%, 68%)',
        LimeGreen: 'hsl(145, 58%, 55%)',
        VioletSocial: 'hsl(264, 64%, 52%)',
        SoftOrange: 'hsl(43, 84%, 65%)',
        VeryDarkBlue: 'hsl(226, 43%, 10%)',
        DarkBlue: 'hsl(235, 46%, 20%)',
        DesaturatedBlue: 'hsl(235, 45%, 61%)',
        PaleBlue: 'hsl(236, 100%, 87%)'
      },
      fontFamily:{
        rubik:["Rubik", "sans-serif"]
      }
    },
  },
  plugins: [],
}

