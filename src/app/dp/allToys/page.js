import React from 'react';
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

export const metadata = {
  title: "OsamaMart -About Us",
  description: "Generated by Tamzid",
};

{` ${kanit.className} `}
{` ${mulish.className} `}

const AllToys = () => {
    return (
        <div className='h-screen'>
            <h1 className={` ${kanit.className} text-3xl text-center`}>All Toys</h1>
            <div className='flex justify-center mt-3'>
            <hr className='w-60'/>
            </div>
        </div>
    );
};

export default AllToys;