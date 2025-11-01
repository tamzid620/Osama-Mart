"use client";
import "./OurCategories.css";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Kanit } from "next/font/google";
import { Mulish } from "next/font/google";
import icon1 from "../../../../assests/icons/millennium-falcon.png";
import icon2 from "../../../../assests/icons/droid.png";
import icon3 from "../../../../assests/icons/light-saber.png";
import { FaCartArrowDown } from "react-icons/fa";
import suffleIcon from "../../../../assests/icons/white-suffle.png";
import searchIcon from "../../../../assests/icons/white-search.png";
import heartIcon from "../../../../assests/icons/white-heart.png";
import ReactStars from "react-stars";
import axios from "axios";
import { baseUrl } from "../../../../utilies/config";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const kanit = Kanit({
  subsets: ['latin'], 
  weight: ["400", "700"],
  style: ["normal"],
 preload: true,
});
const mulish = Mulish({
  subsets: ["latin"],
weight: ["300", "700"],
  style: ["normal"],
 preload: true,
});

const OurCategories = () => {

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [showAllToys, setShowAllToys] = useState(4);
  const [allToys, setAllToys] = useState([]);
  const [selectedTab, setSelectedTab] = useState("Vehicles & Starships");

  useEffect(() => {
    axios
      .get(baseUrl("all-toys"))
      .then((res) => setAllToys(res.data))
      .catch((error) => {
        setAllToys([]);
      });
  }, []);
  // Filter the toys by category
  const filteredToys = allToys.filter((toy) =>
    selectedTab === "All" ? allToys : toy.category === selectedTab
  );
  // defalut toys shows
  const defaultToys = filteredToys.slice(0, showAllToys);

  const handleNothing = () => {
    toast.info("Please Click Select Option Button!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  // handleAddToCart button ---------------------
  const handleAddToCart = (toy) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(toy);
    localStorage.setItem("cart", JSON.stringify(cart));
    //  Toast message -----------------------------
    toast.success("Item has been added to your cart!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    window.location.reload();
  };

  return (
    <div className="my-40 xl:max-w-7xl lg:max-w-6xl md:max-w-3xl sm: max-w-sm lg:px-0 md:px-5 sm: px-3 mx-auto">
      <h1
        className={`${kanit.className} text-4xl text-center mb-10 text-[#F26626] `}
      >
        Our Category 
      </h1>
      {/* ---------------------------- Tab title section ----------------------------  */}
      <div className="md:max-w-3xl sm: max-w-sm lg:px-0 md:px-5 sm: px-3 mx-auto">
        <div className="flex sm: gap-3 text-center">
          {/* Vehicles & Starships  */}
          <div
            onClick={() => setSelectedTab("Vehicles & Starships")}
            className={`md:flex w-full gap-1 border-2 py-2 px-3  ${
              selectedTab === "Vehicles & Starships"
                ? "bg-[#F26626]  border-white"
                : "border-[#F26626]"
            } text-white hover:border-white hover:bg-[#F26626]`}
          >
            <span className="flex justify-center md:ms-5">
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
          <div
            onClick={() => setSelectedTab("Action Figures")}
            className={`md:flex w-full gap-1 border-2 py-2 px-3  ${
              selectedTab === "Action Figures"
                ? "bg-[#F26626]  border-white"
                : "border-[#F26626]"
            } text-white hover:border-white hover:bg-[#F26626]`}
          >
            <span className="flex justify-center md:ms-0 sm: -ms-8">
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
          <div
            onClick={() => setSelectedTab("Lightsabers & Weapons")}
            className={`md:flex w-full gap-1 border-2 py-2 px-3  ${
              selectedTab === "Lightsabers & Weapons"
                ? "bg-[#F26626]  border-white"
                : "border-[#F26626]"
            } text-white hover:border-white hover:bg-[#F26626]`}
          >
            <span className="flex justify-center md:ms-0 sm: -ms-3">
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
      {/* information section  ------------------------------------------------------------------------------  */}
      <div className="mt-10 flex justify-center">
        {allToys.length === 0 ? (
          // Show skeleton placeholders ---------------------------
          <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5">
            {Array(4)
              .fill()
              .map((_, index) => (
                <div
                  key={index}
                  className="bg-white text-[#000040] text-center w-[280px] rounded-lg shadow-md shadow-[#F26626]"
                >
                  <Skeleton height={220} className="rounded-t-lg" />
                  <p className="mx-2 my-2 font-semibold mt-3">
                    <Skeleton width={`60%`} />
                  </p>
                  <span className="flex justify-center mb-2">
                    <Skeleton width={100} height={24} />
                  </span>
                  <p className="px-2 pb-5 font-semibold">
                    <Skeleton width={`40%`} />
                  </p>
                  <div className="flex justify-center pb-5">
                    <Skeleton
                      width={`80%`}
                      height={40}
                      className="rounded-lg"
                    />
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <div className="grid lg:grid-cols-4 md:grid-cols-2 sm: grid-cols-1 gap-5 ">
            {defaultToys.map(
              ({ id, image, hoverImage, name, quantity, rating, price }) => (
                <div
                  key={id}
                  className=" card-zoom bg-white text-[#000040] text-center w-[280px] rounded-lg shadow-md shadow-[#F26626]"
                >
                  <span className=" zoom-effect block overflow-hidden">
                    <Image
                      className="rounded-t-lg transition-opacity duration-300 ease-in-out hover:opacity-0 object-cover"
                      src={image.trimEnd()}
                      width={250}
                      height={220}
                      alt=""
                    />
                    <Image
                      className="rounded-t-lg absolute top-0 left-0 transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100 object-cover"
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
                  {/* ------------------------CART SELECT OPTIONS BUTTON -------------------------- */}
                  <div
                    className="flex justify-center pb-5"
                    onMouseEnter={() => setHoveredIndex(id)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <button
                      onClick={() =>
                        handleAddToCart({ id, image, name, price })
                      }
                      className="w-full mx-4 bg-gray-100 hover:bg-[#F26626] border-2 border-[#F26626] text-[#F26626] hover:text-white py-2 px-4 font-semibold uppercase rounded-lg text-sm shadow-md flex justify-center items-center"
                    >
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
                      onClick={handleNothing}
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
                      onClick={handleNothing}
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
                      onClick={handleNothing}
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
      {/* CLICK FOR MORE BUTTON  */}
      <div className="flex justify-center my-5">
        {filteredToys.length <= 4 ? (
          " "
        ) : (
          <div>
            {showAllToys < filteredToys.length && (
              <button
                onClick={() => setShowAllToys(filteredToys.length)}
                className="bg-[#F26626] hover:bg-white text-white hover:text-[#F26626] 
                py-2 px-4 font-semibold uppercase rounded-sm text-sm"
              >
                Click for More
              </button>
            )}
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default OurCategories;
