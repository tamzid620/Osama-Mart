"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import axios from "axios";
import childPageBanner from "../../../../assests/images/child-page-banner-1.jpeg";
import { Kanit } from "next/font/google";
import { Mulish } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

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

const SingleProductDetails = () => {
  const { id } = useParams();
  const [toyDetails, setToyDetails] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:7000/all-toys/${id}`)
      .then((res) => setToyDetails(res.data))
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

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
              Product Details
            </h1>
          </div>
        </div>
      </div>
      {/* content section  */}
      <div className="my-10 mx-4">
        <div
          className={`${kanit.className} grid lg:grid-cols-2 md:grid-cols-1 sm: grid-cols-1 gap-5`}
        >
          <div className="grid lg:grid-cols-2 md:grid-cols-2 sm: grid-cols-1 gap-2">
            <Image
              className="w-[350px] mb-3 "
              width={300}
              height={200}
              src={toyDetails?.image}
              alt={toyDetails?.name}
            />
            <Image
              className="w-[350px] "
              width={300}
              height={200}
              src={toyDetails?.hoverImage}
              alt={toyDetails?.name}
            />
          </div>
          <div className="leading-10">
            <h1>
              <span className="uppercase text-lg">Name:</span>
              <span className={`${mulish.className} ms-2 text-lg`}>
                {toyDetails?.name}
              </span>
            </h1>
            <h1>
              <span className="uppercase text-lg">price:</span>
              <span className={`${mulish.className} ms-2 text-lg`}>
                {toyDetails?.price}
              </span>
            </h1>
            <h1>
              <span className="uppercase text-lg">category:</span>
              <span className={`${mulish.className} ms-2 text-lg`}>
                {toyDetails?.category}
              </span>
            </h1>
            <h1>
              <span className="uppercase text-lg">description:</span>
              <span className={`${mulish.className} ms-2 text-lg`}>
                {toyDetails?.description}
              </span>
            </h1>
            <Link href="/allProducts">
            <button className="w-[150px] mt-4 bg-gray-100 hover:bg-[#F26626] border-2 border-[#F26626] text-[#F26626] hover:text-white py-2 px-4 font-semibold uppercase rounded-lg text-sm shadow-md flex justify-center items-center">
               Go Back
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductDetails;
