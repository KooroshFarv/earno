'use client'
import React, { useState, useEffect } from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'



export interface Products {
  name: string
  id : number,
  title : string,
  image: string,
  description : string,
  price : string,
  video?: string
}

const Showcase = () => {

 const [products, setProducts] = useState<Products[]>([]);
 const [ loading , setLoading] = useState(true);


 useEffect(() => {
  const fetchProducts = async () => {
    try {
      console.log('Fetching products...');
      const res = await fetch('/api/products'); 
      console.log('Response:', res);
      if (!res.ok) {
        console.error('Fetch failed:', res.status, res.statusText);
        throw new Error('Failed to fetch products');
      }
      const data = await res.json();
      console.log('Fetched products:', data);
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  fetchProducts();
}, []);



if (loading) return <p>Loading .. </p>


return (
  <>
    <h2 className="px-4 flex justify-end mt-28 mr-40 text-2xl font-semibold text-gray-800">محصولات</h2>

    <div className=" space-y-10">
      {products.map((product) => (
        <div key={product.id} className="relative flex flex-col mr-64 items-end  mt-32">
       
            {/* bg har prodcut */}
             <div
            className={`${
              product.id === 1 ? 'rounded-full bg-[#e5e5e5] mr-10 ' 
                : product.id === 2 ? 'rounded-xl w-[30%] h-60 bg-[#e5e5e5] mr-14 mt-28 ' 
                : product.id ===   3  ? 'w-[300px] h-[400px] relative mr-14 rounded-t-full bg-gradient-to-b from-[#e5e5e5] to-transparent mt-36 '
                : product.id === 4 ? 'w-[400px] h-[300px] relative rounded-r-full bg-gradient-to-l from-[#e0e0e0] to-transparent mt-36 mb-52'
                 : 'bg-[#e5e5e5]' } w-80 h-80 relative`} >
        
              
            {/* Line e har shape */}

            <div className={`${
              product.id === 1 ? 'absolute top-[-50px] left-[80px] h-[400px] w-[4px] bg-black' 
              : product.id === 2 ? 'absolute top-[-70px] left-[107px] h-[460px] w-[4px] transform rotate-[-30deg]  bg-black' 
              : product.id === 4 ? 'absolute top-0 right-96 mr-40 h-[300px] w-[4px] bg-black'
              : ''
              }`}>

            </div>
         
     
              {/* Invisible kardan e rest of har prodcut */}
         
            <div className={`${
                product.id === 1 ? 'absolute top-0 left-0 w-[80px] h-full bg-white'
                : product.id === 2 ? 'absolute top-[2%] left-[-5%] w-[210px] h-[200%] transform rotate-[-30deg] bg-white'
                : ''
              
              }`}>

            </div>

            <Image
                src={product.image.startsWith('/') ? product.image : `/images/${product.image}`}
              alt={product.name}
              width={300}
              height={300}
              className={`${
                product.id === 1
                  ? 'ml-16 p-3' 
                  : product.id === 2
                  ? 'ml-40' 
                  : product.id === 3
                  ? 'rotate-45 p-6' 
                  : product.id === 4
                  ? 'absolute right-10'
                  : 'scale-110 p-8' 
                                   
              }`}
  />
          </div>
         
          <div>

  {/* Product Titlessss */}
  <h1
    className={`text-2xl font-bold absolute ${
      product.id === 1
        ? 'top-10 right-72 text-gray-800'
        : product.id === 2
        ? 'bottom-60 right-96 mr-40 text-gray-800'
        : product.id === 3
        ? 'top-72 right-96 text-black'
        : 'top-44 right-96 mr-44 text-black'

    }`}
  >
    {product.name}
  </h1>
  <p
  className={`${
    product.id === 1
      ? 'w-[50%] absolute top-32 right-72 text-right'
      : product.id === 2
      ? 'w-[45%] absolute bottom-20 right-96 mr-16  text-right mt-14'
      : product.id === 3 ? 'absolute top-80 right-1 mt-20 transform -translate-x-1/2 text-right w-[50%] text-gray-800'
      :  'text-right w-1/2 absolute right-96 mr-52 top-72 ' 
  }`}
  dangerouslySetInnerHTML={{ __html: product.description }}
></p>

{/* buttonssss */}
  </div>
          <Link href={`/products/${product.id}`} className='cursor-pointer'>
          <button className={
            `${
            product.id === 1 ? 'absolute top-72 left-96 ml-40 py-4 px-16 bg-[#2A4F6C] text-white hover:bg-[#0b192cdb] rounded-3xl shadow-md'
            : product.id === 2 ? 'absolute top-96 left-96 ml-40 py-4 px-16 bg-[#2A4F6C] text-white hover:bg-[#0b192cdb] rounded-3xl shadow-md'
            : product.id === 3 ? 'absolute  left-96 ml-40 py-4 px-16 bg-[#2A4F6C] text-white hover:bg-[#0b192cdb] rounded-3xl shadow-md'
            : 'absolute left-96 bottom-32 ml-40 py-4 px-16 bg-[#2A4F6C] text-white hover:bg-[#0b192cdb] rounded-3xl shadow-md'
            }`}>
              خرید
            </button>
             </Link>
        </div>
      ))}
    </div>
  </>
)



}

export default Showcase

















