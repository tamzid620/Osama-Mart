import React from 'react';
import AdminUpdateToysForm from './AdminUpdateToysForm';
import { Kanit } from "next/font/google";

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
      <hr className='w-60'/>
      </div>
      <AdminUpdateToysForm />
  </div>

    );
};

export default AdminUpdateToys;