"use client" ;
import "@/components/shared/OurCategories/OurCategories.css";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Kanit } from "next/font/google";
import { Mulish } from "next/font/google";
import { baseUrl } from "@/utilies/config";
import { FaCartArrowDown } from "react-icons/fa";
import suffleIcon from "@/assests/icons/white-suffle.png";
import searchIcon from "@/assests/icons/white-search.png";
import heartIcon from "@/assests/icons/white-heart.png";
import ReactStars from "react-stars";
import axios from "axios";
import Loader from "@/utilies/Loader/Loader";

const kanit = Kanit({
    weight: ["400", "700"],
    style: ["normal"],
  });
  const mulish = Mulish({
    weight: ["300", "700"],
    style: ["normal"],
  });
  
  const AllProductsCards = () => {
    
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [allToys, setAllToys] = useState([]);

    useEffect(() => {
      axios
        .get(baseUrl("all-toys"))
        .then((res) => setAllToys(res.data))
        .catch((error) => {
          setAllToys(error);
        });
    }, []);

    return (
<div className="my-10 flex justify-center">
{allToys.length === 0 ? (
    // Show the Loader when there is no data
    <Loader />
  ) : (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm: grid-cols-1 gap-5 ">
          {allToys.map(
            ({ id, image, hoverImage, name, quantity, rating, price }) => (
              <div
                key={id}
                className=" card-zoom bg-white text-[#000040] text-center w-[280px] rounded-lg shadow-md shadow-[#F26626]"
              >
                <span className=" zoom-effect block overflow-hidden">
                  <Image
                    className="rounded-t-lg transition-opacity duration-300 ease-in-out hover:opacity-0"
                    src={image.trimEnd()}
                    width={250} // Add width
                    height={220} // Add height
                    alt=""
                  />
                  <Image
                    className="rounded-t-lg absolute top-0 left-0 transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100"
                    src={hoverImage.trimEnd()}
                    width={250}
                    height={220}
                    alt=""
                  />
                </span>
                <p
                  className={`${kanit.className} mx-2 my-2 font-semibold mt-3`}
                >
                  {name}
                </p>
                <span className="flex justify-center mb-2">
                  {/* rating appers here -------------------------------------------------------------------------- */}
                  <ReactStars
                    count={5}
                    size={24}
                    value={rating}
                    color2={"#F26626"}
                  />
                  {/* rating appers here -------------------------------------------------------------------------- */}
                </span>
                <p className={`${mulish.className} px-2 pb-5 font-semibold `}>
                  $ {price}
                </p>
                {/* CART SELECT OPTIONS BUTTON  */}
                <div
                  className="flex justify-center pb-5"
                  onMouseEnter={() => setHoveredIndex(id)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <button className="w-full mx-4 bg-gray-100 hover:bg-[#F26626] border-2 border-[#F26626] text-[#F26626] hover:text-white py-2 px-4 font-semibold uppercase rounded-lg text-sm shadow-md flex justify-center items-center">
                    {hoveredIndex === id ? (
                      <span className=" flex justify-center items-center">
                        Add to Cart
                        <FaCartArrowDown
                          size={18}
                          className="ms-2 transition-opacity duration-500"
                        />
                      </span>
                    ) : (
                      <span className="transition-opacity duration-500">
                        Select Options
                      </span>
                    )}
                  </button>
                </div>
                {/* MENU BUTTONS */}
                <div className="absolute menu top-3 right-3 bg-[#F26626] w-[40px] py-2 inline-block justify-center items-center rounded-lg">
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
                <div className="absolute -top-[10px] left-0 discount-div bg-[#F26626]">
                  <span className="text-xs font-semibold -mt-[10px] ms-[6px]">
                    {quantity}
                  </span>
                </div>
              </div>
            )
          )}
        </div>
           )}
      </div>
    );
};

export default AllProductsCards;