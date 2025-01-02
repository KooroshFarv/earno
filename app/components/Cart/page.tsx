'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProgressIndicator from '../ProgressIndicator/page';
import { useRouter } from 'next/navigation';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface CartItem {
  id: number;
  quantity: number;
  product: Product;
}

const CartPage = () => {
  const router = useRouter();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch(`/api/cart?userId=1`);
        if (!response.ok) throw new Error('Failed to fetch cart items');
        const data = await response.json();
        setCartItems(data);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  const incQuantity = async (cartItemId: number, currentQuantity: number) => {
    if (currentQuantity >= 10) return;
    try {
      const response = await fetch(`/api/cart`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cartItemId, quantity: currentQuantity + 1 }),
      });
      if (!response.ok) throw new Error('Failed to update quantity');
      const updatedItem = await response.json();
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === updatedItem.id
            ? { ...item, ...updatedItem, product: updatedItem.product || item.product }
            : item
        )
      );
    } catch (error) {
      console.error('Error updating quantity:', error);
    }
  };

  const decQuantity = async (cartItemId: number, currentQuantity: number) => {
    if (currentQuantity <= 1) return;
    try {
      const response = await fetch(`/api/cart`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cartItemId, quantity: currentQuantity - 1 }),
      });
      if (!response.ok) throw new Error('Failed to update quantity');
      const updatedItem = await response.json();
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === updatedItem.id
            ? { ...item, ...updatedItem, product: updatedItem.product || item.product }
            : item
        )
      );
    } catch (error) {
      console.error('Error updating quantity:', error);
    }
  };

  const removeItem = async (cartItemId: number) => {
    try {
      const response = await fetch(`/api/cart`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cartItemId }),
      });
      if (!response.ok) throw new Error('Failed to remove item');
      setCartItems((prevItems) => prevItems.filter((item) => item.id !== cartItemId));
    } catch (error) {
      console.error('Error removing item:', error);
    }
  };

  if (loading) return <p>در حال بارگذاری...</p>;
  if (cartItems.length === 0) return <p>سبد خرید خالی است.</p>;

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );
  const tax = parseFloat((subtotal * 0.13).toFixed(2));
  const total = subtotal + tax;

  return (
    <>
      <ProgressIndicator currentStep={1} />
      <motion.div
        className="flex flex-col bg-gray-100 p-8 rounded-lg"
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, ease: 'easeOut' }} 
      >
        <div className="flex flex-row justify-between items-start space-x-8">
          {/* Order Summary */}
          <div className="w-1/4 p-6 rounded-lg order-1">
            <h2 className="text-lg text-right font-semibold mb-10 mt-24">سفارش</h2>
            <div className="flex flex-row-reverse justify-between mb-6">
              <p>قیمت</p>
              <p>${subtotal.toFixed(2)}</p>
            </div>
            <div className="flex flex-row-reverse justify-between mb-6">
              <p>مالیات</p>
              <p>${tax}</p>
            </div>
            <div className="flex flex-row-reverse justify-between font-bold text-lg">
              <p>جمع سبد خرید</p>
              <p>${total.toFixed(2)}</p>
            </div>
            <button
              onClick={() => router.push('/components/Shipping')}
              className="w-full mt-10 px-4 py-2 bg-gray-700 text-white rounded-md hover:scale-105"
            >
              ادامه
            </button>
          </div>

          {/* Cart Items */}
          <div className="w-3/4 p-6 rounded-lg order-2 mt-24">
            <h1 className="text-2xl font-semibold mb-32 text-right">سبد خرید</h1>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-row-reverse justify-between mb-4 border-b pb-4"
              >
                <img
                  src={item.product.image || `/images/default.jpg`}
                  alt={item.product.name}
                  className="w-20 h-20 object-cover bg-white rounded-3xl shadow-lg hover:scale-110"
                />
                <h2 className="text-lg ml-[65%] mt-7 font-semibold">
                  {item.product.name}
                </h2>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => decQuantity(item.id, item.quantity)}
                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => incQuantity(item.id, item.quantity)}
                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    حذف
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default CartPage;
