'use client';
import React, { useState, useEffect } from 'react';

interface Product {
    id : number;
    name : string;
    price : number
}

interface CartItem {
    id : number
    quantity : number
    product : Product
}

const CartPage = () => {
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

  const incQuantity = async (cartItemId : number, currentQuantity : number) => {
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
          item.id === updatedItem.id ? updatedItem : item
        )
      );
    } catch (error) {
      console.error('Error updating quantity:', error);
    }
  };

  const decQuantity = async (cartItemI : number, currentQuantity : number) => {
    if (currentQuantity <= 1) return; // Prevent reducing below 1
    try {
      const response = await fetch(`/api/cart`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cartItemI , quantity: currentQuantity - 1 }),
      });
      if (!response.ok) throw new Error('Failed to update quantity');
      const updatedItem = await response.json();
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === updatedItem.id ? updatedItem : item
        )
      );
    } catch (error) {
      console.error('Error updating quantity:', error);
    }
  };

  const removeItem = async (cartItemId : number) => {
    try {
      const response = await fetch(`/api/cart`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cartItemId }),
      });
      if (!response.ok) throw new Error('Failed to remove item');
      setCartItems((prevItems) =>
        prevItems.filter((item) => item.id !== cartItemId)
      );
    } catch (error) {
      console.error('Error removing item:', error);
    }
  };

  if (loading) return <p>در حال بارگذاری...</p>;
  if (cartItems.length === 0) return <p>سبد خرید خالی است.</p>;

  return (
    <div>
      <h1 className="text-3xl mt-28 mx-36 text-right">سبد خرید</h1>
      <div className="h-[1px] bg-gradient-to-l from-black to-transparent mt-4 w-[50%] ml-auto mr-24"></div>
      {cartItems.map((item) => (
        <div key={item.id} className="flex justify-between items-center mt-4">
          <div>
            <h2>{item.product.name}</h2>
            <p>قیمت: {item.product.price}</p>
          </div>
          <div className="flex items-center">
            <button
              onClick={() => decQuantity(item.id, item.quantity)}
              className="px-4 py-2 text-black rounded shadow hover:scale-[1.2]"
            >
              -
            </button>
            <span className="mx-4">{item.quantity}</span>
            <button
              onClick={() => incQuantity(item.id, item.quantity)}
              className="px-4 py-2 text-black rounded shadow hover:scale-[1.2]"
            >
              +
            </button>
            <button
              onClick={() => removeItem(item.id)}
              className="ml-4 text-red-600"
            >
              حذف
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartPage;
