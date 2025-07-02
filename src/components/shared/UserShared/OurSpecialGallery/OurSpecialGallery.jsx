"use client";
import './OurSpecialGallery.css' ;
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import brand1 from "../../../../assests/images/brand1.jpg";
import brand2 from "../../../../assests/images/brand2.jpg";
import brand3 from "../../../../assests/images/brand2.jpg";
import brand4 from "../../../../assests/images/brand3.jpg";
import brand5 from "../../../../assests/images/brand5.jpg";
import brand6 from "../../../../assests/images/brand6.png";
import axios from "axios";
import { baseUrl } from "../../../../utilies/config";
import { kanit } from '../../../../utilies/FontsProvider/fontProvider';

const specialGallery =[
{
  id: 1,
  img: brand1 ,
},
{
  id: 2,
  img: brand5 ,
},
{
  id: 3,
  img: brand3 ,
},
{
  id: 4,
  img: brand4 ,
},
{
  id: 5,
  img: brand2 ,
},

]

const OurSpecialGallery = () => {
  const sliderRef = useRef(null);
  // const [specialGallery, setSpecialGallery] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      sliderRef.current.slickNext();
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  // useEffect(() => {
  //   axios
  //     .get(baseUrl("special-gallery"))
  //     .then((res) => setSpecialGallery(res.data))
  //     .catch((error) => (error));
  // }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
    <div className="my-40 lg:px-0 md:px-5 sm: px-3 mx-auto">
      <h1
        className={`${kanit.className} text-4xl text-center mb-10 text-[#F26626]`}
      >
        
      </h1>
      {/* ---------------------------- Information section ----------------------------  */}
      <div className="">
        <Slider ref={sliderRef} {...settings}>
          {specialGallery.map(({ id , img }) => (
            <div key={id} className="">
                <Image
                  className=" object-cover border-black border-l-4 border-r-4"
                  width={500}
                  height={500}
                  src={img}
                  alt="brand images"
                />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default OurSpecialGallery;
