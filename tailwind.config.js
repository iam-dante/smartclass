module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        
        cyanblue: {
          400:"#0F4B5F",
         300 : '#009DCF',
         200:"#D9F6FF",
         100:"#E8F5FA",
        },
        
      }
    },
    fontFamily:{
      sans :['"DM Sans"', 'sans-serif'],
      serif: ['"DM Serif Display"', 'serif']
    }
  },
  plugins: [],
}
