import React, { Children, ReactNode } from 'react'
import '@/assets/globals.css'
import Navbar from './components/Navbar'

interface Props {
  children : string
}

const MainLayout = ({children} : Props) => {
  return (
    <html>
      <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"></link>
      </head>
      <body>
        <main>
         {children}
        </main>
      </body>
    </html>
  )
}

export default MainLayout