"use client";
import React, { useEffect, useState } from "react";
import BannerImage from "../../../../assests/images/banner-1.jpeg";
import Image from "next/image";
import { kanit, mulish } from "../../../../app/dp/allToys/AdminUpdateToys/AdminUpdateToysForm";


const bannerInfo = [
  {
    title: "Discover the Joy  of ",
    title1: "Playtime !", 
    disc: "Find toys that spark fun, learning, and creativity for ",
    disc1: "all ages at Osama Mart."
  },
  {
    title: "Where Smiles",
    title1 : "Begin !" ,
    disc: "Bring joy to your little ones with our handpicked ",
      disc1: "collection of amazing toys."
  },
  {
    title: "Your One-Stop Toy ",
    title1 : " Shop !" ,
    disc: "Explore trendy and classic toys that inspire ",
      disc1: "endless fun and imagination."
  },
];

const Banner = () => {
  const [slideInfo, setSlideInfo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideInfo((index) => (index + 1) % bannerInfo.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <Image className="relative w-full md:h-[750px] object-cover h-full" src={BannerImage} alt="banner Image"></Image>
      <div className="absolute top-0 w-full bg-black opacity-50 inset-0" />
      <div className="absolute inset-0 w-full flex justify-center items-center text-center">
        <div>
          <h1 className={`${kanit.className} uppercase lg:text-2xl md:text-2xl sm: text-sm  `}>
            {bannerInfo[slideInfo].title}
          </h1>
          <h1 className={`${kanit.className} uppercase lg:text-9xl md:text-8xl sm: text-4xl font-bold `}>
            {bannerInfo[slideInfo].title1}
          </h1>
          <p className={`${mulish.className} mt-3 font-semibold lg:text-xl md:text-lg sm: text-sm mb-2`}>
            {bannerInfo[slideInfo].disc}
          </p>
          <p className={`${mulish.className} mt-3 font-semibold lg:text-xl md:text-lg sm: text-sm `}>
            {bannerInfo[slideInfo].disc1}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
