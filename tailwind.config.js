/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin")

export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
      fontFamily: {
            'montserrat' : ['Montserrat', 'sans-serif']
          },
      extend: {
        animation: {
          wiggle: 'wiggle 1s ease-in-out infinite',
        },
        
        colors : {
          "dark-blue": "hsl(209, 23%, 22%)",
    
          "very-dark-blue-bg": "hsl(207, 26%, 17%)",
    
          "very-dark-blue-text": "hsl(200, 15%, 8%)",
    
          "dark-gray": "hsl(0, 0%, 52%)",
    
          "very-light-gray": "hsl(0, 0%, 98%)",
    
          white: "hsl(0, 0%, 100%)",
        },
        
        boxShadow : {
          elements :"1px 5px 15px"
        }
      },
    },
  
    plugins: [
      plugin(function ({ addUtilities }) {
        addUtilities({
          ".my-rotate-y-180": {
            transform: "rotateY(180deg)",
          },
          ".preserve-3d": {
            transformStyle: "preserve-3d",
          },
          ".perspective": {
            perspective: "1000px",
          },
          ".backface-hidden": {
            backfaceVisibility: "hidden"
          },
        })
      })
    ],
  }

