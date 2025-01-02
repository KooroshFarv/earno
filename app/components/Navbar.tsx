'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/images/mainLogo.png';
import { usePathname } from 'next/navigation';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { SignedIn, SignedOut, UserButton, useClerk } from '@clerk/nextjs';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();
  const isHomepage = pathname === '/';
  const { openSignIn } = useClerk(); 

  const linkColor = isHomepage ? 'text-white' : 'text-black';

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
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

        {/* Authentication and Cart */}
        <div className="hidden md:flex items-center space-x-4">
    
     <SignedOut>
  <button
    onClick={() =>
      openSignIn({
        appearance: {
          elements: {
            // General card styling
            card: 'bg-black text-white rounded-lg shadow-lg p-8',
            // Input fields
            input: 'bg-gray-700 text-white border-none rounded-lg px-4 py-2 placeholder-gray-400',
            // Social button styling (Google button)
            socialButtonsBlockButton: 'bg-gray-700 text-white hover:bg-gray-600 flex items-center justify-center', // Force button and text styling
            socialButtonsBlockButtonText: 'text-white font-bold', // Ensure text is white
            // Footer
            footer: 'hidden', // Hide footer
            // Header
            headerTitle: 'text-xl font-bold text-white',
            headerSubtitle: 'text-white',
            // Close button
            closeButton: 'text-white hover:text-gray-300',
          },
        },
      })
    }
    className={`flex items-center rounded-md px-3 py-2 transition ${
      linkColor === 'text-white'
        ? 'hover:bg-gray-700 hover:text-white'
        : 'hover:bg-gray-300 hover:text-black'
    } ${linkColor}`}
  >
    <i className="fa-brands fa-google mr-2"></i>
    <p>ورود | ثبت‌نام</p>
  </button>
</SignedOut>

<SignedIn>
  <Link href="/dashboard">
    <button
      className={`flex items-center rounded-md px-3 py-2 transition ${
        linkColor === 'text-white'
          ? 'hover:bg-gray-700 hover:text-white'
          : 'hover:bg-gray-300 hover:text-black'
      } ${linkColor}`}
    >
      داشبورد
    </button>
  </Link>


  <UserButton />
</SignedIn>

<Link href="/components/Cart">
  <button>
    <AiOutlineShoppingCart 
      className={`text-2xl ${
        isHomepage ? 'text-white' : 'text-black'
      }`}
    />
  </button>
</Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
