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

const UpdateToys = () => {
    return (
        <div className='h-screen text-white'>
            <h1 >Update Toys</h1>
        </div>
    );
};

export default UpdateToys;