'use client'
import React, { useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import product1 from '@/public/images/Product a.png'
import product2 from '@/public/images/Product b.png'
import product3 from '@/public/images/Product Image from iLoveIMG.png'
import product4 from '@/public/images/Hands Free.png'
import Link from 'next/link'



interface Products {
  id : number,
  title : string,
  image : StaticImageData,
  description : string,
  price : string
}

const Products = () => {

const [products, setProducts] = useState<Products[]>([
  {
    id: 1,
    image: product1,  
    title: "Premium",
    description: "هندزفری دو میلیمتری با طراحی نامرئی، سبک و راحت، مناسب برای استفاده طولانی مدت. با بازده 8 ساعت مداوم و کیفیت صدای فوق‌العاده، این هندزفری برای مکالمه، گوش دادن به موسیقی و جلسات آنلاین ایده‌آل است. دارای اتصال بلوتوث پایدار و فناوری کاهش نویز برای تجربه‌ای بهتر.",
    price: '۷٫۲۹۸٫۰۰۰',
  },
  {
    id: 2,
    image: product2,
    title: "Majic",
    description: "هندزفری دو میلیمتری (بازده 11 ساعت) دارای کیفیت <br /> صدای  کیفیت  صدای فوق‌العاده شفاف و فناوری کاهش نویز <br /> محیطی، به همراه  اتصال بلوتوث پایدار",
    price: '۱۰,۳۹۸,۰۰۰ '
  },
  {
    id: 3,
    image: product3,
    title: "Basic",
    description: "هندزفری دو میلیمتری با طراحی ساده و کاربردی، مناسب برای استفاده‌های روزمره. این مدل با بازده 3 ساعت پخش مداوم، انتخابی ایده‌آل برای مکالمه‌ها و گوش دادن به موسیقی در مسیرهای کوتاه است. کیفیت صدای واضح و وزن سبک آن، تجربه‌ای راحت و بدون خستگی را فراهم می‌کند. دارای اتصال بلوتوث پایدار برای جفت‌شدن سریع و آسان با دستگاه‌های مختلف",
    price: '۵,۳۹۸,۰۰۰'
  },
  {
    id: 4,
    image: product4,
    title: "Premium Plus",
    description: "هندزفری دو میلیمتری Premium Plus با طراحی پیشرفته و امکانات بی‌نظیر، انتخابی ایده‌آل برای حرفه‌ای‌ها و کاربرانی که به کیفیت اهمیت می‌دهند. این مدل با بازده 8 ساعت پخش مداوم و مجهز به میکروفون اکسترنال، تجربه‌ای بی‌نقص از مکالمه و گوش دادن به موسیقی ارائه می‌دهد. فناوری کاهش نویز محیطی و اتصال بلوتوث پایدار، صدایی شفاف و بدون وقفه را تضمین می‌کند. مناسب برای جلسات کاری، ورزش و استفاده روزمره",
    price: '۸٫۴۹۸٫۰۰۰'
  }
]);



return (
  <>
    <h2 className="px-4 flex justify-end mt-28 mr-40 text-2xl font-semibold text-gray-800">محصولات</h2>

    <div className=" space-y-10">
      {products.map((product) => (
        <div key={product.id} className="relative flex flex-col mr-64 items-end  mt-32">
       
            {/* bg har prodcut */}
             <div
            className={`${
              product.id === 1 ? 'rounded-full bg-[#e5e5e5] ' 
                : product.id === 2 ? 'rounded-xl w-[40%] h-60 bg-[#e5e5e5] mr-96 mt-28 ' 
                : product.id ===   3  ? 'w-[300px] h-[500px] relative mr-[300px] rounded-t-full bg-gradient-to-b from-[#e5e5e5] to-transparent mt-36 '
                : product.id === 4 ? 'w-[600px] h-[300px] relative mr-96 rounded-l-full bg-[#e5e5e5] mt-16 mb-52'
                 : 'bg-[#e5e5e5]' } w-80 h-80 relative`} >
        
              
            {/* Line e har shape */}

            <div className={`${
              product.id === 1 ? 'absolute top-[-50px] left-[80px] h-[400px] w-[4px] bg-black' 
              : product.id === 2 ? 'absolute top-[-100px] right-[76px] h-[600px] w-[4px] transform rotate-[40deg]  bg-black' 
              : ''
              }`}>

            </div>
         
     
              {/* Invisible kardan e rest of har prodcut */}
         
            <div className={`${
                product.id === 1 ? 'absolute top-0 left-0 w-[80px] h-full bg-white'
                : product.id === 2 ? 'absolute top-[19%] right-[-14%] w-[210px] h-[160%] transform rotate-[40deg] bg-white'
                : ''
              
              }`}>

            </div>

            <Image
              src={product.image}
              alt={product.title}
              width={300}
              height={300}
              className={`${
                product.id === 1
                  ? 'ml-16 p-3' 
                  : product.id === 2
                  ? 'ml-8' 
                  : product.id === 3
                  ? 'rotate-45 p-6' 
                  : product.id === 4
                  ? 'absolute right-80'
                  : 'scale-110 p-8' 
                                   
              }`}
  />
          </div>
         
          <div>

  {/* Product Title */}
  <h1
    className={`text-2xl font-bold absolute ${
      product.id === 1
        ? 'top-10 right-64 text-gray-800'
        : product.id === 2
        ? 'top-96 right-80 text-black'
        : product.id === 3
        ? 'top-1/2 right-1/2 text-black'
        : 'top-24 right-96 mr-10 text-black'

    }`}
  >
    {product.title}
  </h1>
  <p
  className={`${
    product.id === 1
      ? 'w-[50%] absolute top-32 right-64 text-right'
      : product.id === 2
      ? 'w-[45%] absolute bottom-10 right-24 text-right mt-14'
      : product.id === 3 ? 'absolute top-1/2  mt-20 left-1/2 transform -translate-x-1/2 text-right w-[50%] text-gray-800'
      :  'text-right absolute left-[70%] top-20 ' 
  }`}
  dangerouslySetInnerHTML={{ __html: product.description }}
></p>

{/* buttonssss */}
  </div>
          <Link href={`/product/${product.id}`} className='cursor-pointer'>
          <button className={
            `${
            product.id === 1 ? 'absolute top-72 left-64  py-4 px-16 bg-[#2A4F6C] text-white hover:bg-[#0b192cdb] rounded-3xl shadow-md'
            : product.id === 2 ? 'absolute mt-10 right-96 py-4 px-16 bg-[#2A4F6C] text-white hover:bg-[#0b192cdb] rounded-3xl shadow-md'
            : product.id === 3 ? 'absolute bottom-2 left-[45%] py-4 px-16 bg-[#2A4F6C] text-white hover:bg-[#0b192cdb] rounded-3xl shadow-md'
            : 'absolute top-72 right-72 py-4 px-16 bg-[#2A4F6C] text-white hover:bg-[#0b192cdb] rounded-3xl shadow-md'
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

export default Products

















// <h2 className="px-4 flex justify-end mt-10 mr-40 text-2xl font-semibold text-gray-700">محصولات</h2>

// <div className="flex justify-around py-10 mt-28">
//   <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-20">
//     {products.map((product) => (
//       <div key={product.id} className="relative rounded-3xl overflow-hidden transition-transform duration-300 w-[350px] h-[340px] flex flex-col group"> 
//         <div className="h-[90%] w-full relative overflow-hidden">
//           <Image 
//             src={product.image} 
//             alt="product picture"
//             layout="fill"       
//             objectFit="contain"   
//             className="transform transition-transform duration-300 group-hover:scale-110 "
//           />
//           <Link
//             href={'/products'}
//             className="absolute top-[-100%] left-0 w-full py-2 bg-[#2A4F6C] text-white text-center opacity-0 group-hover:top-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer"
//           >
//             خرید
//           </Link>
//         </div>
//         <div className="px-3 flex flex-col text-right rounded-lg" style={{ backgroundColor: '#0B192C' }}>
//           <h2 className="text-lg flex justify-end font-semibold text-white mt-4">{product.title}</h2>
//           <p className="text-white flex justify-end mb-4">{product.description}</p>
//           <div className="flex items-center justify-between">
//             <span className="text-sm mb-4 ml-auto font-bold text-white">تومان{product.price}</span>
//           </div>
//         </div>
//       </div>
//     ))}
//   </div>
// </div>
