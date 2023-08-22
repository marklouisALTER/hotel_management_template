/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3852AB',
        secondary: '#89A2FF',
        textHover: '#191416'
      },
      fontFamily: {
          primary:  ['Lato', 'sans-serif'],
      },
      scrollBehavior: {
          smooth: 'smooth',
      } ,
    },
  },
  plugins: [],
}

