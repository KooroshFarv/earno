"use client";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const ProductPage = ({ params : paramsPromise }: { params: { id: string } }) => {
  const [params , setParams] = useState<{id : string} | null>(null)
  const [product, setProduct] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [ quantity ,setQuantity] = useState(1)

  
  const addToCart = async() => {

    try{
      console.log('sending to/api/cart',{
        userId:1,
        productId: product.id,
        quantity,
      })
      const response = await fetch('/api/cart',{
        method : 'POST',
      headers : {'Content-Type' : 'application/json'},
      body : JSON.stringify({
        userId : 1,
        productId : product.id,
        quantity: quantity,
      }),
      })
      if(!response.ok){
        throw new Error('Faild')
      }
    
    toast.success("محصول به سبد خرید اضافه شد", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  } catch (error) {
    toast.error('دوباره تلاش کنید');
    console.log(error)
  }
  }

  useEffect(() => {
    const resolveParams = async () => {
      const resolveParams = await paramsPromise
      setParams(resolveParams)
    }
    resolveParams()
  }, [paramsPromise])


  useEffect(() => {
    if (!params) return;

    const fetchProduct = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/products/${params.id}`);
        if (!res.ok) throw new Error("Failed to fetch product data");
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [params]);

  if (loading) return <p className="text-center mt-10">در حال بارگذاری...</p>;
  if (!product) return <p className="text-center mt-10">محصول یافت نشد.</p>;


  const smallImages = product.smallImages?.map((img: any) => img.imageUrl) ;


  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? smallImages.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === smallImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="bg-gray-100 text-black min-h-screen flex flex-row-reverse p-10">
      {/* Right Side - Images */}
      <div className="w-1/2 flex flex-col items-center">
        {/* Big Image */}
        <div className="relative w-[600px] rounded-3xl h-[80vh] overflow-hidden mb-4">
          <img
            src={smallImages[currentImageIndex]}
            alt={product.name}
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            className="absolute bottom-4 left-2 bg-white text-black p-2 rounded-full shadow-xl hover:bg-gray-700 hover:text-white transition"
          >
            ←
          </button>
          <button
            onClick={nextImage}
            className="absolute bottom-4 left-14 bg-white text-black p-2 rounded-full shadow-xl hover:bg-gray-700 hover:text-white transition"
          >
            →
          </button>
        </div>

        {/* Small Images */}
        <div className="flex space-x-4">
          {smallImages.map((img: string, index : number) => (
            <img
              key={index}
              src={img} 
              alt={`Small Image ${index + 1}`}
              className={`w-24 h-20 object-cover rounded-lg shadow cursor-pointer hover:scale-110 transition ${
                index === currentImageIndex ? "ring-2 ring-blue-800" : ""
              }`}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* {product.video && (
  <div className="video-section">
    <video controls className="w-full max-w-lg">
      <source src={product.video} type="video/mp4" />
      مرورگر شما از پخش ویدیو پشتیبانی نمی‌کند.
    </video>
  </div>
)} */}

      {/* Left Side - Product Info */}
      <div className="w-1/3 flex flex-col justify-center text-right space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
       
        <p className="text-lg leading-relaxed text-gray-600">
          {product.description}
        </p>

        <span className="text-2xl text-left font-semibold text-gray-500">
        {product.price} تومان </span>


          {/* add to carttttttt */}
     
        <button onClick={addToCart} className=" bg-gray-700 text-white py-3 px-6 rounded-lg shadow hover:bg-black transition">
          اضافه به سبد خرید
        </button>

        </div>
        <ToastContainer position="top-right" autoClose={3000} />

      </div>






      
  );
};

export default ProductPage;
