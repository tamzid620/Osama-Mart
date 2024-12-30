import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Kanit } from "next/font/google";
import closeIcon from "../../../../assests/icons/closeBlack.png";
import deleteIcon from "../../../../assests/icons/delete.png";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal"],
  preload: true,
});

const ViewCart = ({ toggleViewCart }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cartData);
  }, []);

  // handleDelete button  -----------------------
  const handleDelete = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="relative">
      <div className="flex justify-end ">
        <Image
          onClick={toggleViewCart}
          className="w-[20px] my-2 mx-2 bg-gray-300 hover:bg-[#F26626] p-1"
          src={closeIcon}
          alt="navbar"
        />
      </div>
      {/* information section  */}
      <div className={`${kanit.className}`}>
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty!</p>
        ) : (
          cartItems.map(({ id, name, price, image }) => (
            <div
              key={id}
              className=" flex justify-between mx-3 my-3 bg-gray-200 shadow-md hover:shadow-lg rounded-md text-black"
            >
              {/* Item Image */}
              <div>
                <Image
                  src={image}
                  width={80}
                  height={50}
                  alt={`${name} Image`}
                />
              </div>
              {/* Item Details */}
              <div className="flex justify-between items-center w-full px-3">
                <div>
                  <h1 className="flex items-center gap-1">
                    <p>Name: </p> <span>{name}</span>
                  </h1>
                  <h2 className="flex items-center gap-1">
                    <p>Price: </p> <span>${price.toFixed(2)}</span>
                  </h2>
                </div>
                {/* Delete Button */}
                <div>
                  <Image
                    onClick={() => handleDelete(id)}
                    className="w-[25px] mx-2 hover:drop-shadow-lg cursor-pointer"
                    src={deleteIcon}
                    alt="Delete Icon"
                  />
                </div>
              </div>
              {/* Buy Now Button */}
              <div className="absolute top-28 left-0 w-full p-4">
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md shadow-lg">
                  Buy Now
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ViewCart;
