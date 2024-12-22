import React from "react";
import Image from "next/image";
import storeImage1 from "../../../../assests/images/store-4.jpg";
import storeImage2 from "../../../../assests/images/store-5.png";
import { Kanit } from "next/font/google";
import { Mulish } from "next/font/google";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal"],
  preload: true,
});
const mulish = Mulish({
  subsets: ["latin"],
weight: ["300", "700"],
  style: ["normal"],
});

const HomeDetails = () => {
  return (
    <div className="mt-40 mb-20 lg:px-0 md:px-5 sm: px-3 mx-auto">
      <div className="grid md:grid-cols-2 sm: grid-cols-1 gap-5 items-center">
        {/* images section  */}
        <div className="relative">
          <div className="relative">
            <Image
              className="w-[600px] rounded-md shadow-md shadow-[#F26626]"
              src={storeImage2}
              alt="store image"
            />
          </div>
          <Image
            className="absolute top-[-40px] right-[300px] w-[350px] rounded-md shadow-md shadow-[#F26626] lg:block md:hidden sm: hidden"
            src={storeImage1}
            alt="store image"
          />
        </div>
        {/* content section  */}
        <div>
          <h1 className={`${kanit.className} text-4xl mb-5 text-[#F26626]`}>
            Handy Toy Store
          </h1>
          <p className={`${mulish.className} md:text-xl  `}>
            Welcome to our Toy Store! Step into a world of imagination and play
            where joy knows no bounds. Discover a treasure trove of toys that
            will ignite the imagination of children of all ages. From classic
            favorites to the latest trends, we offer a wide selection of toys
            that will bring smiles, laughter, and unforgettable memories.
            Whether youre searching for the perfect gift, planning a birthday
            party, or simply indulging in a playful adventure, our Toy Store is
            your ultimate destination. Come and explore a world of wonder, where
            dreams come true and imagination takes flight!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeDetails;
