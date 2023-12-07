import React from 'react'
import Footer from './Footer'
import Header from './Header'
 import localFont from "next/font/local";

const myFont = localFont({
  src: "../public/assets/fonts/SiriRegular.ttf",
  display: "swap",
});



function Applayout({children}) { 
  return (
    <div className={myFont.className}>
        <Header />
        {children}
        <Footer />
      
    </div>
  )
}

export default Applayout



