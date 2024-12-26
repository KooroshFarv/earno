import React from 'react'
import HeroSection from './components/Herosection.tsx/page'
import Faq from './components/Faq/Faq'
import Footer from './components/Footer/page'
import WhyUs from './components/us/page'
import Showcase from './components/showcase/page'
import Cart from './components/Cart/page'



const page = () => {
  return (
    <>
    <HeroSection />
    <Showcase />
    <Faq />
    <WhyUs />
    < Footer />
    </>
  )
}

export default page
