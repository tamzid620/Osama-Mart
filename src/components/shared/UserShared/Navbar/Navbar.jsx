"use client";
import { Kanit } from "next/font/google";
import { Merriweather } from "next/font/google";
import "./Navbar.css";
import React, { useState } from "react";
import Image from "next/image";
import navbarImage from "../../../../assests/icons/OsamaMart -Logo.png";
import menuBar from "../../../../assests/icons/menu-bar.png";
import { BsFillCartCheckFill } from "react-icons/bs";
import Link from "next/link";
import ViewCart from "../ViewCart/ViewCart";

const kanit = Kanit({
  weight: ["400", "700"],
  style: ["normal"],
});
const merriweather = Merriweather({
  weight: ["400", "700"],
  style: ["normal"],
});

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [viewCart, setViewCart] = useState(false);

  const toggleViewCart = () => {
    setViewCart(!viewCart);
  };

  const handleMenuBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" bg-black fixed top-0 z-10 w-full shadow-sm shadow-gray-900">
      <div
        className={`${kanit.className} relative xl:max-w-7xl lg:max-w-6xl md:max-w-3xl sm: max-w-sm mx-auto 
      flex justify-between items-center lg:px-4 md:px-4 sm: px-4 `}
      >
        {/* Image section  */}
        <div>
          <Image
            src={navbarImage}
            alt="navbar-image"
            className="w-[120px] py-3"
          />
        </div>
        {/* nav ul section for large device  */}
        <div className="md:flex sm: hidden">
          <ul className="uppercase flex gap-10 ">
            <li title="Home"><Link href="/">Home</Link></li>
            <li title="All Products"><Link href="/allProducts">All Products</Link></li>
            <li title="About Us"><Link href="/aboutUs">About Us</Link></li>
            <li title="View Cart" onClick={toggleViewCart}>
              <BsFillCartCheckFill size={20} />
            </li>
          </ul>
        </div>
        {/* nav ul section for medium & small  device  */}
        <div className="relative md:hidden sm: flex">
          <BsFillCartCheckFill
            title="View Cart"
            size={30}
            onClick={toggleViewCart}
            className="me-5 text-[#F26626]"
          />
          <Image
            onClick={handleMenuBar}
            className="w-[30px] dropShadow "
            src={menuBar}
            alt="navbar"
          />
        </div>
        {isOpen && (
          <ul
            className="absolute top-16 uppercase block gap-10
         bg-[#F26626] dropShadow w-full -mx-4 
         text-center leading-[50px] py-4"
          >
            <li title="Home"><Link href="/">Home</Link></li>
            <li title="All Products"><Link href="/allProducts">All Products</Link></li>
            <li title="About Us"><Link href="/aboutUs">About Us</Link></li>
          </ul>
        )}
      </div>
      {/* ViewCart  SideBar */}
      <div className="relative">
        {viewCart ? (
          <div className="absolute bg-white w-[350px] shadow-md shadow-[#F26626] h-screen z-10 transition ease-in-out duration-500 ">
            <ViewCart toggleViewCart={toggleViewCart}/>
          </div>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
