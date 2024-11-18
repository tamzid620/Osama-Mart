"use client";
import { Kanit } from "next/font/google";
import "@/components/shared/Navbar/Navbar.css";
import React, { useState } from "react";
import Image from "next/image";
import navbarImage from "@/assests/icons/OsamaMart -Logo.png";
import menuBar from "@/assests/icons/menu-bar.png";

const kanit = Kanit({
  weight: ["400", "700"],
  style: ["normal"],
});

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
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
          <li>Home</li>
          <li>All Products</li>
          <li>About Us</li>
        </ul>
      </div>
       {/* nav ul section for medium & small  device  */}
      <div className="relative md:hidden sm: flex">
        <Image
          onClick={handleMenuBar}
          className="w-[30px] dropShadow "
          src={menuBar}
          alt="navbar"
        />
      </div>
      {isOpen && (
        <ul className="absolute top-16 uppercase block gap-10
         bg-[#F26626] dropShadow w-full -mx-4 
         text-center leading-[50px] py-4">
          <li>Home</li>
          <li>All Products</li>
          <li>About Us</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
