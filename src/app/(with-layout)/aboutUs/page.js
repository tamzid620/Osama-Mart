import React from 'react';
import Image from "next/image";
import childPageBanner from "../../../assests/images/child-page-banner-1.jpeg";
import HomeDetails from '../../../components/shared/UserShared/HomeDetails/HomeDetails';
import FrequentlyAskedQuestions from '../../../components/shared/UserShared/FrequentlyAskedQuestions/FrequentlyAskedQuestions';
import user1 from '../../../assests/images/u1.jpg';
import user2 from '../../../assests/images/user2.jpeg';
import user3 from '../../../assests/images/user3.jpg';
import { Kanit } from "next/font/google";
import { Mulish } from "next/font/google";

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

export const metadata = {
  title: "OsamaMart -About Us",
  description: "Generated by Tamzid",
};

const userData =[
  {
    img: user1 ,
    userName: "Osama",
    position: "Founder"
  },
  {
    img: user2 ,
    userName: "Zongjian He",
    position: "Lord of Sales"
  },
  {
    img: user3 ,
    userName: "Erdene",
    position: "Customer Support"
  },
]

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
      <div className="my-10 mx-4">
        <div>
          <>
            <h1 className={` ${kanit.className} text-[#F26626] text-2xl mb-4 text-center`}>Our Mission in the Galaxy</h1>
            <p className={` ${mulish.className} text-center mb-10`}>At OsamaMart, we believe that every Star Wars fan deserves a piece of the galaxy to call their own. Our mission is simple: to bring the magic, adventure, and nostalgia of Star Wars into your hands. Whether you’re a seasoned collector or a young Padawan starting your journey, we are here to make your Star Wars dreams come true</p>
          </>
          <>
            <h1 className={` ${kanit.className} text-[#F26626] text-2xl mb-4 text-center`}>Our Journey Through the Stars</h1>
            <p className={` ${mulish.className} text-center mb-2`}>It all started with a dream and a love for Star Wars. [Your Store Name] was founded by fans, for fans. From hunting down rare collectibles to curating the latest toys, our journey has always been fueled by the same excitement we felt when watching Star Wars for the first time. Today, we’re proud to serve a community of fans who share our passion for a galaxy far, far away.</p>
            <p className={` ${mulish.className} mb-10`}>
              <span className='font-semibold'>Milestones:</span> <br />
              <span className='leading-8'>
                • 2018: OsamaMart was born our first online sale! <br />
                • 2020: Expanded our collection to include exclusive vintage toys. <br />
                • 2022: Became a trusted source for Star Wars fans around the world.
              </span>
            </p>
          </>
          <>
            <h1 className={` ${kanit.className} text-[#F26626] text-2xl mb-4 text-center`}>Meet Our Crew</h1>
            <p className={` ${mulish.className} text-center mb-2`}>Behind every lightsaber and action figure is a team of dedicated fans who live and breathe Star Wars. From our Jedi Master (Founder) to the Sith Lord of Sales, we’re united by our love for the franchise and our commitment to delivering exceptional service to fans like you.</p>
              <div className='grid md:grid-cols-3 sm: grid-cols-1 lg:max-w-4xl md:max-w-3xl sm: max-w-sm mx-auto mt-10 mb-5'>
                {userData.map(({img, userName, position }, index) => 
                <p key={index} className='text-center '>
                  <span className='flex justify-center mb-2'>
                    <Image className='w-[200px] rounded-full' src={img} alt='' />
                  </span>
                  <span className='text-[#F26626] text-xl font-semibold'>{userName}</span> <br />
                  <span>{position}</span>
                </p>
                  )}
              </div>
          </>
          <>
            <h1 className={` ${kanit.className} text-[#F26626] text-2xl mt-10 mb-4 text-center`}>What Sets Us Apart</h1>
            <p className={` ${mulish.className} text-center mb-2`}>At [Your Store Name], we know that Star Wars is more than just a series of movies—it’s a legacy. That’s why we go above and beyond to ensure every product we offer meets the highest standards of quality, authenticity, and value. From rare collectibles to the latest action figures, our store is a treasure trove for fans and collectors alike</p>
            <p className={` ${mulish.className} my-8`}>
              <span className='font-semibold'>Key Features:</span> <br />
              <span className='leading-8'>
                • Collector-Grade Quality <br />
                • Rare and Exclusive Items <br />
                • Fast Galactic Shipping <br />
                • Dedicated Customer Support
              </span>
            </p>
          </>
        </div>
        <HomeDetails />
        <FrequentlyAskedQuestions />
      </div>
    </div>
  );
};

export default AboutUs;