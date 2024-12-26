'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/images/mainLogo.png';
import { usePathname } from 'next/navigation';
import { HiOutlineShoppingCart } from "react-icons/hi";


const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();
  const isHomepage = pathname === '/';

  // Determine link color based on the current page
  const linkColor = isHomepage ? 'text-white' : 'text-black';

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show/hide navbar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false); // Hide navbar when scrolling down
      } else {
        setIsVisible(true); // Show navbar when scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-transform duration-500 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } bg-transparent`}
    >
      <div className="container mx-auto flex justify-between items-center h-20">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image src={logo} alt="Logo" width={50} height={50} />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className={`${linkColor} hover:underline`}>
            صفحه اصلی
          </Link>
          <Link href="/showcase" className={`${linkColor} hover:underline`}>
            محصولات
          </Link>
          <Link href="/components/contact" className={`${linkColor} hover:underline`}>
            تماس با ما
          </Link>
        </div>

        {/* Login/Register */}
        <div className="hidden md:flex items-center">
          <button
            className={`flex items-center rounded-md px-3 py-2 transition ${
              linkColor === 'text-white' ? 'hover:bg-gray-700 hover:text-white' : 'hover:bg-gray-300 hover:text-black'
            } ${linkColor}`}
          >
            <i className="fa-brands fa-google mr-2"></i>
            <span>ورود | ثبت‌نام</span>
          </button>
          <Link href={'/components/Cart'}>
          <button>
          <HiOutlineShoppingCart className='text-2xl text-white' />
          </button>

          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
