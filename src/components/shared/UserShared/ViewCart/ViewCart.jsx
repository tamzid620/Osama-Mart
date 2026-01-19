"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Kanit } from "next/font/google";

import closeIcon from "../../../../assests/icons/closeBlack.png";
import deleteIcon from "../../../../assests/icons/delete.png";

import { useCart } from "../../../../app/context/CartContext";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["400", "700"],
  preload: true,
});

const ViewCart = ({ toggleViewCart }) => {
  const {
    cartItems,
    removeFromCart,
    // decreaseQuantity,
    // addToCart,
  } = useCart();

  // ✅ Calculate total price with quantity
  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="relative h-screen flex flex-col justify-between bg-black">

      {/* Close Button */}
      <div className="flex justify-end">
        <Image
          onClick={toggleViewCart}
          className="w-[20px] my-2 mx-2 bg-gray-300 hover:bg-[#F26626] p-1 cursor-pointer"
          src={closeIcon}
          alt="Close Cart"
        />
      </div>

      {/* Cart Items */}
      <div className={`${kanit.className} flex-grow overflow-y-auto`}>
        {cartItems.length === 0 ? (
          <p className="text-center text-white mt-10">
            Your cart is empty!
          </p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between mx-3 my-3 bg-gray-200 shadow-md rounded-md text-black"
            >
              {/* Item Image */}
              <div className="flex items-center px-2">
                <Image
                  src={item.image}
                  width={80}
                  height={60}
                  alt={item.name}
                />
              </div>

              {/* Item Details */}
              <div className="flex justify-between items-center w-full px-3">
                <div>
                  <h1 className="font-semibold">{item.name}</h1>
                  <p className="text-sm">
                    ${item.price.toFixed(2)}
                  </p>

                  {/* Quantity Controls */}
                  {/* <div className="flex items-center gap-2 mt-1">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="px-2 bg-gray-300 hover:bg-gray-400 rounded"
                    >
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => addToCart(item)}
                      className="px-2 bg-gray-300 hover:bg-gray-400 rounded"
                    >
                      +
                    </button>
                  </div> */}
                </div>

                {/* Delete Button */}
                <Image
                  onClick={() => removeFromCart(item.id)}
                  className="w-[25px] hover:drop-shadow-lg cursor-pointer"
                  src={deleteIcon}
                  alt="Delete"
                />
              </div>
            </div>
          ))
        )}
      </div>

      <hr />

      {/* Footer */}
      <div className="p-3">
        <p className={`${kanit.className} mb-2 text-white`}>
          Total: ${calculateTotal().toFixed(2)}
        </p>

        <Link href="/paymentGateway">
          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 shadow-lg">
            Buy Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ViewCart;
