/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/**/**/*.{vue,js,ts,jsx,tsx}",
    "./src/**/**/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    },/*
    colors:{
      'creamy_white': 'rgba(255,255,255,0.75)'
    },*/
  },
  plugins: [],
}