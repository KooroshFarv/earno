import React, { ReactNode } from 'react';
import '@/assets/globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer/page';
import {ClerkProvider} from '@clerk/nextjs';



interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <ClerkProvider >
      <html lang="fa">
        <body className='bg-gray-100'>
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
        </body>
      </html>

    </ClerkProvider>

  );
};

export default MainLayout;