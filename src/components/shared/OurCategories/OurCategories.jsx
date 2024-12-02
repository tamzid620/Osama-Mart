"use client";
import './OurCategories.css'
import React, { useState } from "react";
import Image from "next/image";
import { Kanit } from "next/font/google";
import icon1 from "@/assests/icons/millennium-falcon.png";
import icon2 from "@/assests/icons/droid.png";
import icon3 from "@/assests/icons/light-saber.png";
import { IoIosCart } from "react-icons/io";
import img1 from "@/assests/images/Mango-Ice.jpg";
import img2 from "@/assests/images/GUM-MINT.jpg";
import img3 from "@/assests/images/elfbar-ep8000-Black-Razz-Ice.jpg";
import img4 from "@/assests/images/BLUE-RAZZ-LEMONADE.jpg";
import suffleIcon from "@/assests/icons/suffle.png";
import searchIcon from "@/assests/icons/search-interface-symbol.png";
import heartIcon from "@/assests/icons/heart.png";
import ReactStars from 'react-stars'


const kanit = Kanit({
  weight: ["400", "700"],
  style: ["normal"],
});

const products = [
  {
    image: img1,
    hoverImage: img2,
    title: "Nerd Alien 12000 puffs 20mg",
    price: "$40.00 - $390.00",
  },
  {
    image: img3,
    hoverImage: img4,
    title: "Nerd Alien 12000 puffs 20mg",
    price: "$40.00 - $390.00",
  },
  {
    image: img1,
    hoverImage: img2,
    title: "Nerd Alien 12000 puffs 20mg",
    price: "$40.00 - $390.00",
  },
  {
    image: img3,
    hoverImage: img4,
    title: "Nerd Alien 12000 puffs 20mg",
    price: "$40.00 - $390.00",
  },
  {
    image: img1,
    hoverImage: img2,
    title: "Nerd Alien 12000 puffs 20mg",
    price: "$40.00 - $390.00",
  },
  {
    image: img3,
    hoverImage: img4,
    title: "Nerd Alien 12000 puffs 20mg",
    price: "$40.00 - $390.00",
  },
  {
    image: img1,
    hoverImage: img2,
    title: "Nerd Alien 12000 puffs 20mg",
    price: "$40.00 - $390.00",
  },
  {
    image: img3,
    hoverImage: img4,
    title: "Nerd Alien 12000 puffs 20mg",
    price: "$40.00 - $390.00",
  },
];
const OurCategories = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="my-20">
      <h1 className={`${kanit.className} text-3xl text-center mb-5 `}>
        Our Category
      </h1>
      {/* ---------------------------- Tab title section ----------------------------  */}
      <div className="md:max-w-3xl sm: max-w-sm lg:px-0 md:px-5 sm: px-3 mx-auto">
        <div className="flex sm: gap-3 text-center">
          {/* Vehicles & Starships  */}
          <div className="md:flex w-full gap-1 border-2 py-2 px-3 border-[#F26626] hover:border-white hover:bg-[#F26626]">
            <span className="flex justify-center ms-5">
              <Image
                className="w-[30px]"
                src={icon1}
                alt="category Icons"
              ></Image>
            </span>
            <span
              className={`${kanit.className} uppercase mt-1 md:text-md sm: text-[14px]`}
            >
              Vehicles & Starships
            </span>
          </div>
          {/* Action Figures  */}
          <div className="md:flex w-full gap-1 border-2 py-2 px-3 border-[#F26626] hover:border-white hover:bg-[#F26626]">
            <span className="flex justify-center">
              <Image
                className="w-[30px] ms-8"
                src={icon2}
                alt="category Icons"
              ></Image>
            </span>
            <span
              className={`${kanit.className} uppercase mt-1 md:text-md sm: text-[14px]`}
            >
              Action Figures
            </span>
          </div>
          {/* Lightsabers & Weapons  */}
          <div className="md:flex w-full gap-1 border-2 py-2 px-3 border-[#F26626] hover:border-white hover:bg-[#F26626]">
            <span className="flex justify-center">
              <Image
                className="w-[30px] ms-3"
                src={icon3}
                alt="category Icons"
              ></Image>
            </span>
            <span
              className={`${kanit.className} uppercase mt-1 md:text-md sm: text-[14px]`}
            >
              Lightsabers & Weapons
            </span>
          </div>
        </div>
      </div>
      {/* ---------------------------- information section  ----------------------------  */}
      <div className="mt-20">
        {/* special Items Lists  */}
        <div
          className="lg:mx-0 md:mx-3 sm: mx-5
        grid lg:grid-cols-4 md:grid-cols-2 sm: grid-cols-1 gap-5"
        >
          {products.map(
            ({ image, hoverImage, title, price }, index) => (
              <div
                key={index}
                className="relative card-zoom bg-white text-[#000040] text-center w-[280px] rounded-lg shadow-md"
              >
                <span className="relative zoom-effect block overflow-hidden">
                  <Image
                    className="w-[250px] h-[220px] rounded-t-lg transition-opacity duration-300 ease-in-out hover:opacity-0"
                    src={image}
                    alt=""
                  />
                  <Image
                    className="w-[250px] rounded-t-lg absolute top-0 left-0 transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100"
                    src={hoverImage}
                    alt=""
                  />
                </span>
                <p
                  style={{ fontFamily: "Lato, sans-serif" }}
                  className="mx-2 my-2 font-semibold mt-3"
                >
                  {title}
                </p>
                <span className="flex justify-center mb-2">
                  {/* rating appers here -------------------------------------------------------------------------- */}
                  <ReactStars count={5} size={24} value={5} color2={'#ffd700'} />
                  {/* rating appers here -------------------------------------------------------------------------- */}
                </span>
                <p
                  style={{ fontFamily: "Lato, sans-serif" }}
                  className="px-2 pb-5 font-semibold "
                >
                  {price}
                </p>
                {/* CART SELECT OPTIONS BUTTON  */}
                <div
                  className="flex justify-center pb-5"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <button className="w-full mx-4 bg-[#000040] hover:bg-[#000040c8] text-white py-2 px-4 font-semibold uppercase rounded-lg text-sm shadow-md flex justify-center items-center">
                    {hoveredIndex === index ? (
                      <IoIosCart
                        size={20}
                        className="transition-opacity duration-500"
                      />
                    ) : (
                      <span className="transition-opacity duration-500">
                        Select Options
                      </span>
                    )}
                  </button>
                </div>
                {/* MENU BUTTONS */}
                <div className="absolute menu top-3 right-3 bg-white w-[40px] py-2 inline-block justify-center items-center rounded-lg">
                  <span
                    className="relative flex justify-center mb-2 tooltip tooltip-left"
                    data-tip="Shuffle"
                  >
                    <Image
                      className="w-[25px]"
                      src={suffleIcon}
                      alt="Shuffle Icon"
                    />
                  </span>
                  <span
                    className="relative flex justify-center mb-2 tooltip tooltip-left"
                    data-tip="Search"
                  >
                    <Image
                      className="w-[25px]"
                      src={searchIcon}
                      alt="Search Icon"
                    />
                  </span>
                  <span
                    className="relative flex justify-center tooltip tooltip-left"
                    data-tip="Favorites"
                  >
                    <Image
                      className="w-[25px]"
                      src={heartIcon}
                      alt="Favorites Icon"
                    />
                  </span>
                </div>
                {/* DISCOUNT NUMBER  */}
                <div className="absolute -top-[10px] left-0 discount-div bg-gray-200">
                  <span className="text-xs font-semibold -mt-[10px] ms-[6px]">
                    -20%
                  </span>
                </div>
              </div>
            )
          )}
        </div>
      </div>
      {/* CLICK FOR MORE BUTTON  */}
      <div className="flex justify-center my-5">
        <button className="bg-[#000040] hover:bg-[#000040c8] text-white py-2 px-4 font-semibold uppercase rounded-md text-sm">
          Click for More
        </button>
      </div>
    </div>
  );
};

export default OurCategories;
