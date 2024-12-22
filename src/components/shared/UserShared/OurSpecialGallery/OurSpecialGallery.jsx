"use client";
import './OurSpecialGallery.css'
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { Kanit } from "next/font/google";
import { Mulish } from "next/font/google";
import axios from "axios";
import { baseUrl } from "../../../../utilies/config";

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

const OurSpecialGallery = () => {
  const sliderRef = useRef(null);
  const [specialGallery, setSpecialGallery] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      sliderRef.current.slickNext();
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    axios
      .get(baseUrl("special-gallery"))
      .then((res) => setSpecialGallery(res.data))
      .catch((error) => (error));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="my-20 lg:px-0 md:px-5 sm: px-3 mx-auto">
      <h1
        className={`${kanit.className} text-4xl text-center mb-10 text-[#F26626]`}
      >
        Our Special Gallery
      </h1>
      {/* ---------------------------- Information section ----------------------------  */}
      <div className="">
        <Slider ref={sliderRef} {...settings}>
          {specialGallery.map(({ id , img }) => (
            <div key={id} className="">
                <Image
                  className="w-full h-[350px] border-black border-l-4 border-r-4 "
                  width={500}
                  height={500}
                  src={img}
                  alt="special gallery images"
                />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default OurSpecialGallery;
