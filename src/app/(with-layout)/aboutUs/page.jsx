import React from 'react';
import Image from "next/image";
import childPageBanner from "@/assests/images/child-page-banner-1.jpeg";
import { Kanit } from "next/font/google";

const kanit = Kanit({
  weight: ["400", "700"],
  style: ["normal"],
});

export const metadata = {
  title: "OsamaMart -About Us",
  description: "Generated by Tamzid",
};

const AboutUs = () => {
    return (
        <div className="xl:max-w-7xl lg:max-w-6xl md:max-w-3xl sm: max-w-sm mx-auto mt-[65px]">
        {/* banner section  */}
      <div className="relative">
        <Image
          className="relative w-full h-[200px]"
          src={childPageBanner}
          alt="banner Image"
        ></Image>
        <div className="absolute top-0 w-full bg-black opacity-70 inset-0" />
        <div className="absolute inset-0 w-full flex justify-center items-center text-center">
          <div>
            <h1 className={`${kanit.className} uppercase text-3xl`}>
              About Us
            </h1>
          </div>
        </div>
      </div>
{/* content section  */}
<div className="my-10">
    <h1> All Products</h1>
</div>
    </div>
    );
};

export default AboutUs;