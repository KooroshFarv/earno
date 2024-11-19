import React from 'react'
import Link from 'next/link'
import Navbar from './components/Navbar'
import HeroSection from './components/Herosection.tsx/page'
import Products from './components/products/page'
import Faq from './components/Faq/Faq'
import Footer from './components/Footer/page'
import WhyUs from './components/us/page'



const page = () => {
  return (
    <>
    <HeroSection />
    <Products />
    <Faq />
    <WhyUs />
    < Footer />
    </>
  )
}

export default page
