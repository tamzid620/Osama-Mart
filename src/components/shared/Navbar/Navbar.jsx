import React from "react";
import Image from "next/image";
import navbarImage from "@/assests/icons/OsamaMart -Logo.png";

const Navbar = () => {
  return (
    <nav
      className="xl:max-w-7xl lg:max-w-6xl md:max-w-3xl sm: max-w-sm mx-auto 
      flex justify-between items-center"
    >
      {/* Image section  */}
      <div>
        <Image
          src={navbarImage}
          alt="navbar-image"
          className="w-[120px] py-3"
        />
      </div>
      {/* nav ul section  */}
      <div>
        <ul className="uppercase flex gap-10">
          <li>Home</li>
          <li>All Products</li>
          <li>About Us</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
