import React from "react";
import Image from "next/image";
import cardImage1 from "@/assests/images/store2.jpg";
import cardImage2 from "@/assests/images/store1.jpg";
import cardImage3 from "@/assests/images/store3.jpg";
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
const newsData = [
  {
    id: 1,
    cardImage: cardImage1,
    title: "New in the Galaxy!",
    disc: "Explore the latest additions to our Star Wars collection! From rare action figures to exclusive memorabilia, these new arrivals are perfect for collectors and fans alike. Don’t miss out on these galactic treasures!",
  },
  {
    id: 2,
    cardImage: cardImage2,
    title: "Limited Editions Alert!",
    disc: "Discover the most sought-after limited-edition Star Wars toys now available in our store. These exclusive items are a must-have for true fans of the galaxy far, far away. Grab yours before they vanish into hyperspace!",
  },
  {
    id: 3,
    cardImage: cardImage3,
    title: "Galactic Deals!",
    disc: "Great news for Star Wars fans! Check out our latest offers and discounts on your favorite toys and collectibles. Embrace the Force and shop now to enjoy unbeatable prices on iconic merchandise.",
  },
];

const OurLatestNews = () => {
  return (
    <div className="my-20 lg:px-0 md:px-5 sm: px-3 mx-auto">
        <h1
        className={`${kanit.className} text-4xl text-center mb-10 text-[#F26626]`}
      >
        Our Latest News
      </h1>
          {/* ---------------------------- Information section ----------------------------  */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm: grid-cols-1 gap-8">
      {newsData.map(({ id, cardImage, title, disc }) => (
        <div key={id} className={`${mulish.className} card bg-white text-black w-full shadow-md shadow-[#F26626]`}>
          <figure>
            <Image className="w-full h-[250px]" src={cardImage} alt="toy image" />
          </figure>
          <div className="card-body">
            <h2 className={`${kanit.className} card-title`}>
              Good News!
              <div className="badge bg-orange-500 border-black text-white">NEW</div>
            </h2>
            <p className={`${kanit.className} text-lg text-gray-500`}>{title}</p>
            <p className="font-semibold text-gray-600">{disc}</p>
            <div className={`${kanit.className} font-semibold card-actions justify-end `}>
              <div className="badge bg-orange-500 border-black text-white">Toys</div>
              <div className="badge bg-black border-black text-white">Products</div>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default OurLatestNews;
