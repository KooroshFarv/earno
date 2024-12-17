'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/images/mainLogo.png';




const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
   const [lastScrollY, setLastScrollY] = useState(0);



   useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if(scrollY === 0){
        setIsVisible(true)
      }else {
        setIsVisible(false);
      }
      setLastScrollY(currentScrollY);

    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
   },[lastScrollY])





  return (
    <nav>
       <div className={`container mx-auto fixed transition-transform duration-700  flex justify-between items-center h-20 ${isVisible ? 'translate-y-0 ' : '-translate-y-full '} `}>
        {/* Logo on the Left */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image src={logo} alt="Logo" width={50} height={50} />
          </Link>
        </div>

        {/* Center Links */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-white hover:text-black rounded-md px-3 py-2">
            صفحه اصلی
          </Link>
          <Link href="/showcase" className="text-white  hover:text-black rounded-md px-3 py-2 hover:scale-200 transform transition-transform duration-200">
            محصولات
          </Link>
          <Link href="/components/contact" className="text-white hover:text-black rounded-md px-3 py-2">
            تماس با ما
          </Link>
        </div>

        {/* Login/Register on the Right */}
        <div className="hidden md:flex items-center">
          <button className="flex items-center text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">
            <i className="fa-brands fa-google text-white mr-2"> </i>
            <span>ورود | ثبت‌نام  </span>
          </button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            type="button"
            className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {/* Icon for mobile menu (e.g., hamburger icon) */}
          </button>
        </div>
      </div>
      
      {/* Mobile menu (shown on smaller screens) */}
      <div className="md:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <Link href="/" className="text-white block rounded-md px-3 py-2">
            صفحه اصلی
          </Link>
          <Link href="/products" className="text-white block rounded-md px-3 py-2">
            محصولات
          </Link>
          <Link href="/contact" className="text-white block rounded-md px-3 py-2">
            تماس با ما
          </Link>
          <button className="flex items-center text-white bg-gray-700 hover:bg-gray-900 rounded-md px-3 py-2 mt-4">
            <i className="fa-brands fa-google mr-2"></i>
            <span>Login or Register</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
