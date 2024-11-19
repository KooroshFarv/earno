import Image from 'next/image';
import hero from '@/public/images/Hero Last.jpg'
import Navbar from '../Navbar';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className="relative flex h-screen w-screen m-0 p-0">  
    <div className="fixed top-0 left-24 z-50 w-full" >
        <Navbar />
    </div>
      {/* Background Image */}
      <Image
        src={hero}
        alt="Invisible Handsfrees"
        layout="fill"
        objectFit="cover"
        objectPosition="left"
        priority

      />

  

      {/* Overlay */}
      <div className='absolute inset-0 bg-black opacity-15'></div>

      {/* Content */}
      <div className=" flex flex-col items-end ml-auto justify-center px-16 z-10 w-1/2 text-right ">
        <h2 className="text-4xl font-bold mb-4 text-white">
        تنها وارد کننده ی گیگیلی در ایران
        </h2>
        <p className="text-lg mb-6 text-white">
        تجربه‌ای نو از آزادی کامل با کوچکترین هندزفری نامرئی دنیا! با طراحی ۲ میلی‌متری که به‌سادگی در گوش محو می‌شود و صدایی بی‌نقص ارائه می‌دهد
</p>
        <Link href={'/Products'} className="bg-white hover:bg-black hover:text-white text-black px-6 py-3 r transition rounded-2xl">
           محصولات
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
