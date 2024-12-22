import React from 'react';
import { Kanit } from "next/font/google";
import { Mulish } from "next/font/google";
import AdminUpdateToys from '../../../components/shared/AdminShared/AdminUpdateToys/AdminUpdateToys';

const kanit = Kanit({
  subsets: ['latin'], 
  weight: ["400", "700"],
  style: ["normal"],
});
const mulish = Mulish({
  weight: ["300", "700"],
  style: ["normal"],
});

export const metadata = {
  title: "OsamaMart -Update Toys",
  description: "Generated by Tamzid",
};

const UpdateToys = () => {
    return (
      <div>
      <h1 className={` ${kanit.className} text-3xl text-center`}>Update Toys</h1>
      <div className='flex justify-center mt-3'>
      <hr className='w-60'/>
      </div>
      <AdminUpdateToys/>
  </div>
    );
};

export default UpdateToys;