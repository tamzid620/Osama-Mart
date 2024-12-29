import React from 'react';
import AdminAddToys from './AdminAddToys/AdminAddToys';
import { kanit } from '../../../utilies/FontsProvider/fontProvider';


export const metadata = {
  title: "OsamaMart -Add Toys",
  description: "Generated by Tamzid",
};


const AddToys = () => {
    return (
        <div>
            <h1 className={` ${kanit.className} text-3xl text-center`}>Add Toys</h1>
            <div className='flex justify-center mt-3'>
            <hr className='w-60'/>
            </div>
            <AdminAddToys/>
        </div>
    );
};

export default AddToys;