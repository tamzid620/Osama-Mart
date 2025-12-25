import React from 'react';
import AdminUpdateToysForm from './AdminUpdateToysForm';
import { Kanit } from "next/font/google";
import { IoIosArrowForward } from 'react-icons/io';

const kanit = Kanit({
  subsets: ['latin'],
  weight: ["400", "700"],
  style: ["normal"],
  preload: true,
});


const AdminUpdateToys = () => {


  return (
    <div>
      <h1 className={` ${kanit.className} text-3xl text-center`}>Update Toys</h1>
      <div className='flex justify-center mt-3'>
        <hr className='w-60' />
      </div>
      <div className={` ${kanit.className} w-full `}>
        <h1 className='text-[20px] font-[700] mb-2'>Update Toy</h1>
        <ul className='w-full flex items-center gap-[10px] text-neutral-400 text-[14px] font-[500]'>
          <li>Dashboard</li>
          <li><IoIosArrowForward /></li>
          <li>Toys List</li>
          <li><IoIosArrowForward /></li>
          <li>Update Toy</li>
        </ul>
      </div>
      <AdminUpdateToysForm />
    </div>

  );
};

export default AdminUpdateToys;