"use client";
import { useCart } from "./CartContext";

const CartPopup = () => {
  const { cart, isOpen, toggleCart, totalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed top-20 right-5 w-80 bg-white shadow-2xl rounded-2xl p-5 z-50">
      <h2 className="text-xl font-bold mb-3">🛒 Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500">Cart is empty</p>
      ) : (
        <ul className="space-y-3">
          {cart.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center border-b pb-2"
            >
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-500">
                  {item.qty} × ${item.price.toFixed(2)}
                </p>
              </div>
              <span className="font-semibold">
                ${(item.qty * item.price).toFixed(2)}
              </span>
            </li>
          ))}
        </ul>
      )}
      <div className="flex justify-between mt-4 font-bold text-lg">
        <span>Total:</span>
        <span>${totalPrice.toFixed(2)}</span>
      </div>
      <button
        onClick={toggleCart}
        className="w-full mt-4 bg-[#25614d] text-white py-2 rounded-lg hover:bg-[#1d4d3b]"
      >
        Close
      </button>
    </div>
  );
};

export default CartPopup;
