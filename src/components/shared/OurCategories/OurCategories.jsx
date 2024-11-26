"use client";
import React  from "react";
import Image from "next/image";
import { Kanit } from "next/font/google";
import icon1 from "@/assests/icons/millennium-falcon.png";
import icon2 from "@/assests/icons/droid.png";
import icon3 from "@/assests/icons/light-saber.png";

const kanit = Kanit({
  weight: ["400", "700"],
  style: ["normal"],
});

const OurCategories = () => {

  return (
    <div className="my-20">
        <h1 className="">Our Category</h1>
        {/* ---------------------------- Tab title section ----------------------------  */}
    <div className="md:max-w-3xl sm: max-w-sm lg:px-0 md:px-5 sm: px-3 mx-auto">
      <div className="flex justify-between sm: gap-3 text-center">
        {/* Vehicles & Starships  */}
        <div className="md:flex gap-1 border-2 py-2 px-3 border-[#F26626] hover:border-white hover:bg-[#F26626]">
          <span className="flex justify-center">
            <Image
              className="w-[30px] "
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
        <div className="md:flex gap-1 border-2 py-2 px-3 border-[#F26626] hover:border-white hover:bg-[#F26626]">
          <span className="flex justify-center">
            <Image
              className="w-[30px] "
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
        <div className="md:flex gap-1 border-2 py-2 px-3 border-[#F26626] hover:border-white hover:bg-[#F26626]">
          <span className="flex justify-center">
            <Image
              className="w-[30px] "
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
      <div>

      </div>
    </div>
  );
};

export default OurCategories;
