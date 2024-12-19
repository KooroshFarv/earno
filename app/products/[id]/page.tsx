"use client";
import { useState, useEffect } from "react";

const ProductPage = ({ params : paramsPromise }: { params: { id: string } }) => {
  const [params , setParams] = useState<{id : string} | null>(null)
  const [product, setProduct] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);

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

  const smallImages = [
    product.detailedImage || product.image,
    "/images/small1.jpg",
    "/images/small2.jpg",
  ];

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
          {smallImages.map((img, index) => (
            <img
              key={index}
              src={img} // Correct image source
              alt={`Small Image ${index + 1}`}
              className={`w-24 h-20 object-cover rounded-lg shadow cursor-pointer hover:scale-110 transition ${
                index === currentImageIndex ? "ring-2 ring-green-500" : ""
              }`}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* Left Side - Product Info */}
      <div className="w-1/3 flex flex-col justify-center text-right space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
        <span className="text-2xl font-semibold text-green-700">
          {product.price} تومان </span>
        <p className="text-lg leading-relaxed text-gray-600">
          {product.description}
        </p>
        <button className="bg-green-600 text-white py-3 px-6 rounded-lg shadow hover:bg-green-700 transition">
          اضافه به سبد خرید
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
