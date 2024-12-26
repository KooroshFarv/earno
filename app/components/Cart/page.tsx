'use client'
import React from 'react'
import { useState } from 'react'




const Cart = () => {
    const [ quantity ,setQuantity] = useState(1)


  const incQuantity = () => {
    setQuantity((prev) => prev +1)
  };

  const decQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
  }


  return (
    <>
    <h1 className='text-3xl mt-28 mx-36 text-right'>سبد خرید</h1>
    <div className="h-[1px] bg-gradient-to-l from-black to-transparent mt-4 w-[50%] ml-auto mr-24"></div>



        {/* quantity */}
     <div className="flex justify-center mt-10 items-center space-x-4">
            <button onClick={decQuantity} className="px-4 py-2  text-black rounded shadow hover:scale-[1.2]">
            -
            </button>
         
            <span className="text-xl font-semibold">{quantity}</span>
            <button onClick={incQuantity} className="px-4 py-2 text-black  rounded shadow hover:scale-[1.2]">
              +
            </button>
    </div> 

    
    </>
  )
}

export default Cart