/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
      },
      
      container: {
        center: true,
      },
      maxWidth: {
        'custom': 'calc(100% - 10%)', // Set your custom max-width value here
      },
      colors: {
        custom: 'linear-gradient(259deg, #ED1556 13.1%, #5F1963 100%);', // Set your custom color code here
        customGray: '#A1A1A1',
      },
      screens: {
        // 'sm-max': {'max': '576px'},
        // 'md-max': {'max': '768px'},
        // 'lg-max': {'max': '1024px'},
        // 'xl-max': {'max': '1280px'},
        // '2xl-max': {'max': '1536px'},
        '3xl': {'min': '1700px'},
      },
      fontSize: {
        'custom-94': '94px', 
        'custom-32-3xl':'32px',
        'custom-32-2xl':'25px',
        'custom-32-sm':'20px',
        'custom-32':'18px',
        'custom-64':'25px',
        'custom-64-3xl':'64px', 
        'custom-64-2xl':'54px', 
        'custom-22':'22px',
      },
      lineHeight: {
        '104': '104px',        
        '74':'35px',
        '74-3xl':'74px',
        '74-2xl':'64px',
        '32':"32px",
        '42-3xl': '42px',
        '42-2xl': '35px',
        '42-sm': '30px',
        '42': '28px',
      },
      borderRadius: {
        '55': '55px',
        '10':'10px',  
      },
      fontFamily: {
        S300: ['SiriLight', 'sans-serif'],
        S400: ['SiriRegular', 'sans-serif'],
        S500: ['SiriMedium', 'sans-serif'],
        S600: ['SiriSemiBold', 'sans-serif'],
        S700: ['SiriBold', 'sans-serif'],
      },
      
      
    },
  },
  plugins: [],
}
