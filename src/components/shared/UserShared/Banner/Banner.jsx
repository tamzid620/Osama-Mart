"use client";
import React, { useEffect, useState } from "react";
import BannerImage from "../../../../assests/images/banner.jpg";
import Image from "next/image";
import { Kanit } from "next/font/google";
import { Mulish } from "next/font/google";

const kanit = Kanit({
  weight: ["400", "700"],
  style: ["normal"],
});
const mulish = Mulish({
  weight: ["300", "700"],
  style: ["normal"],
});

const bannerInfo = [
  {
    title: "Discover the Joy of Playtime!",
    disc: "Find toys that spark fun, learning, and creativity for all ages at Osama Mart.",
  },
  {
    title: "Where Smiles Begin!",
    disc: "Bring joy to your little ones with our handpicked collection of amazing toys.",
  },
  {
    title: "Your One-Stop Toy Shop!",
    disc: "Explore trendy and classic toys that inspire endless fun and imagination.",
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
      <Image className="relative" src={BannerImage} alt="banner Image"></Image>
      <div className="absolute top-0 w-full bg-black opacity-50 inset-0" />
      <div className="absolute inset-0 w-full flex justify-center items-center text-center">
        <div>
          <h1 className={`${kanit.className} uppercase text-3xl`}>
            {bannerInfo[slideInfo].title}
          </h1>
          <p className={`${mulish.className} mt-3 font-semibold text-lg`}>
            {bannerInfo[slideInfo].disc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
