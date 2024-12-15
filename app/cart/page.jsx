"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../_redux/store/productSlice";
import { useRouter } from "next/navigation";

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const router = useRouter();

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="pt-[200px]">
        <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
        <p>Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="pt-[200px] container">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>

      {cart.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between border p-4 mb-4 rounded shadow"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-16 h-16 object-contain"
          />
          <div className="flex-1 ml-4">
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="text-gray-700">${item.price}</p>
            <div className="flex items-center mt-2">
              <button
                onClick={() => dispatch(decrementQuantity(item.id))}
                className="bg-gray-300 px-2 rounded"
              >
                -
              </button>
              <span className="mx-2">{item.quantity}</span>
              <button
                onClick={() => dispatch(incrementQuantity(item.id))}
                className="bg-gray-300 px-2 rounded"
              >
                +
              </button>
            </div>
          </div>
          <button
            onClick={() => dispatch(removeFromCart(item.id))}
            className="bg-red-500 text-white py-1 px-2 rounded"
          >
            Remove
          </button>
        </div>
      ))}

      <div className="flex justify-between items-center mt-6">
        <h2 className="text-xl font-semibold">Total Price:</h2>
        <p className="text-lg font-bold">${totalPrice.toFixed(2)}</p>
      </div>
    </div>
  );
}
