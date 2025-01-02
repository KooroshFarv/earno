"use client";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

const ProductPage = ({ params: paramsPromise }: { params: { id: string } }) => {
  const [params, setParams] = useState<{ id: string } | null>(null);
  const [product, setProduct] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  const addToCart = async () => {
    try {
      const response = await fetch("/api/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: 1,
          productId: product.id,
          quantity: quantity,
        }),
      });
      if (!response.ok) throw new Error("Failed to add to cart");

      toast.success("محصول به سبد خرید اضافه شد", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } catch (error) {
      toast.error("دوباره تلاش کنید");
      console.error(error);
    }
  };

  useEffect(() => {
    const resolveParams = async () => {
      const resolvedParams = await paramsPromise;
      setParams(resolvedParams);
    };
    resolveParams();
  }, [paramsPromise]);

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

  const smallImages = product.smallImages?.map((img: any) => img.imageUrl);

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
    <motion.div
      className="bg-gray-100 text-black min-h-screen flex flex-row-reverse p-10"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* right side */}
      <motion.div
        className="w-1/2 flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="relative w-[600px] rounded-3xl h-[71vh] mt-20 overflow-hidden mb-4">
          <img
            src={smallImages[currentImageIndex]}
            alt={product.name}
            className="w-full h-full object-cover rounded-lg  shadow-lg"
          />
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

        <div className="flex space-x-4 ">
          {smallImages.map((img: string, index: number) => (
            <motion.img
              key={index}
              src={img}
              alt={`Small Image ${index + 1}`}
              className={`w-24 h-20 object-cover  rounded-lg shadow cursor-pointer hover:scale-110 transition ${
                index === currentImageIndex ? "ring-2 ring-blue-800" : ""
              }`}
              onClick={() => setCurrentImageIndex(index)}
              whileHover={{ scale: 1.1 }}
            />
          ))}
        </div>
      </motion.div>

      {/* left side*/}
      <motion.div
        className="max-w-2xl  flex flex-col justify-center text-right"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-14 mt-24">{product.name}</h1>
        <p className="text-lg leading-relaxed text-gray-600 mb-10 mt-16">{product.description}</p>
        <span className="text-2xl text-left font-semibold text-gray-500">
          {product.price} تومان
        </span>
        <motion.button
          onClick={addToCart}
          className="bg-gray-700 text-white mb-24 mt-4 py-3 px-6 rounded-lg shadow hover:bg-black transition"
          whileHover={{ scale: 1.05 }}
        >
          اضافه به سبد خرید
        </motion.button>
        <div className="bg-black w-full h-40  rounded-lg flex items-center justify-center">
      <p className="text-white text-lg">ویدیو به زودی اضافه می‌شود</p>
    </div>
      </motion.div>

      <ToastContainer position="top-right" autoClose={3000} />
    </motion.div>
  );
};

export default ProductPage;
