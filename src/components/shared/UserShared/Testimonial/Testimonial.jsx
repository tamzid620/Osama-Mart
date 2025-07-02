'use client' ;
import React, { useEffect, useState } from "react";
import { kanit, mulish } from "../../../../utilies/FontsProvider/fontProvider";
import Image from "next/image";
import reviewerPhoto1 from "../../../../assests/images/reviewer-1.jpg";
import reviewerPhoto2 from "../../../../assests/images/reviewer-2.jpg";
import reviewerPhoto3 from "../../../../assests/images/reviewer-3.jpg";
import apostrophe1 from "../../../../assests/images/double-quotes.png";
import apostrophe2 from "../../../../assests/images/double-quotes (1).png";
import { motion, AnimatePresence } from "framer-motion";

const reviewData = [
  {
    reviewImage: reviewerPhoto1,
    reviewerName: "Hannah Nelson",
    reviewText:
      "Osamart brought the galaxy to my doorstep! The Star Wars figure quality is unreal!",
  },
  {
    reviewImage: reviewerPhoto2,
    reviewerName: "Stephen Martinez",
    reviewText:
      "As a lifelong Star Wars fan, Osamart is a dream come true. Fast shipping and authentic toys!",
  },
  {
    reviewImage: reviewerPhoto3,
    reviewerName: "Jake Thompson",
    reviewText:
      "Amazing collection! I got my hands on rare Star Wars figures I couldn't find anywhere else.",
  },
];


const Testimonial = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviewData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="my-40">
      <h1
        className={`${kanit.className} text-4xl text-center mb-10 text-[#F26626] `}
      >
        Testimonial
      </h1>
      {/* ---------------------------- Tab title section ----------------------------  */}
      <div className="">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 items-center lg:mx-32"
          >
            <div>
              <Image
                src={reviewData[currentIndex].reviewImage}
                alt="Trainer photo"
                className="w-[400px] h-[600px]"
              />
            </div>

            {/* Review Content */}
            <div className="relative">
              <div className="relative lg:mx-6">
                <p className={` ${mulish.className} text-[22px] mb-3 `}>
                  {reviewData[currentIndex].reviewText}
                </p>
                <h1 className={` ${mulish.className} font-bold text-xl `}>
                  {reviewData[currentIndex].reviewerName}
                </h1>
              </div>

              {/* Apostrophe Icons */}
              <div>
                <Image
                  src={apostrophe2}
                  alt="apostrophe icon"
                  className="w-36 absolute -top-28 -left-24"
                />
                <Image
                  src={apostrophe1}
                  alt="apostrophe icon"
                  className="w-36 absolute -bottom-20 right-2"
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Testimonial;
