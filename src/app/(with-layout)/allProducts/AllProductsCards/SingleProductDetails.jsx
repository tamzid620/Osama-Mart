'use client' ;
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import childPageBanner from "../../../../assests/images/child-page-banner-1.jpeg";
import { Kanit } from "next/font/google";
import { Mulish } from "next/font/google";
import Image from 'next/image';

const kanit = Kanit({
    weight: ["400", "700"],
    style: ["normal"],
  });
  const mulish = Mulish({
    weight: ["300", "700"],
    style: ["normal"],
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
             Product Details- {toyDetails.id}
            </h1>
          </div>
        </div>
      </div>
      {/* content section  */}
        {toyDetails ? (
          <>
            <p>{toyDetails?.id}</p>
            <p>{toyDetails?.name}</p>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
};

export default SingleProductDetails;