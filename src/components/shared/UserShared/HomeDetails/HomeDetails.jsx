import React from "react";
import Image from "next/image";
import BannerImage from "../../../../assests/images/banner.jpg";
import { kanit, mulish } from "../../../../utilies/FontsProvider/fontProvider";

const HomeDetails = () => {
  return (
    <div className="mt-40 mb-20 lg:px-0 md:px-5 sm: px-3 mx-auto">
      <div className={` ${kanit.className} relative `}>
        <Image
          className="relative w-full md:h-full h-[300px] object-cover"
          src={BannerImage}
          alt="banner Image"
        ></Image>
        <div className="absolute top-0 w-full bg-black opacity-50 inset-0" />
        <div className="absolute inset-0 w-full flex justify-center items-center text-center">
          <div>
            <h1 className="md:text-5xl text-2xl mb-5">
              We believe in nurturing imaginations <br /> and creating joy
            </h1>
            <button className={` ${mulish.className} font-bold uppercase border-4 border-white hover:bg-orange-500 px-5 py-2  rounded-sm`}>Shop Now</button>
          </div>
        </div> 
      </div>
    </div>
  );
};

export default HomeDetails;
