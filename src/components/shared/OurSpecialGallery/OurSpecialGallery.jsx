import React from 'react';
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

const OurSpecialGallery = () => {
    return (
        <div className="my-20 lg:px-0 md:px-5 sm: px-3 mx-auto">
        <h1
          className={`${kanit.className} text-4xl text-center mb-10 text-[#F26626]`}
        >
          Our Special Gallery
        </h1>
        {/* ---------------------------- Information section ----------------------------  */}
        <div className="">
            
        </div>
        </div>
    );
};

export default OurSpecialGallery;