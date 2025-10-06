'use client';

import React from "react";
import Image from "next/image";
import { FaTrash } from "react-icons/fa6";

const Cart = ({ cart, setCart }) => {

  // Remove item from cart
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Cart totals
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart
    .reduce((sum, item) => sum + item.price * item.qty, 0)
    .toFixed(2);

  return (
    <div className="bg-white rounded-2xl w-full md:w-[400px] p-6 shadow-xl">
      <h2 className="text-2xl font-bold mb-4">Your Cart ({totalItems})</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <ul className="flex flex-col gap-4 mb-4 max-h-[250px] overflow-y-auto">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between gap-4 border-b pb-2"
              >
                {/* Product Info */}
                <div className="flex items-center gap-3">
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={40}
                    height={40}
                    className="rounded-lg"
                  />
                  <div>
                    <h4 className="font-semibold">{item.name}</h4>
                    <p className="text-sm text-gray-500">
                      ${item.price.toFixed(2)} x {item.qty}
                    </p>
                  </div>
                </div>

                {/* Price + Delete */}
                <div className="flex items-center gap-3">
                  <span className="font-bold">
                    ${(item.price * item.qty).toFixed(2)}
                  </span>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <FaTrash />
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {/* Total */}
          <div className="flex justify-between font-bold text-lg mb-4">
            <span>Total:</span>
            <span>${totalPrice}</span>
          </div>

          {/* Checkout */}
          <button
            onClick={() => {
              alert("Your order is successful!");
              setCart([]);
            }}
            className="w-full bg-[#25614d] text-white font-bold py-2 rounded-xl hover:bg-[#1e4e3d] transition"
          >
            Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
