import Image from 'next/image';
import React from 'react';
import closeIcon from '@/assests/icons/closeBlack.png'

const ViewCart = ({ toggleViewCart }) => {
    return (
        <div>
            <div className="flex justify-end">
            <Image
            onClick={toggleViewCart}
              className="w-[20px] my-2 mx-2 bg-gray-300 hover:bg-[#F26626] p-1"
              src={closeIcon}
              alt="navbar"
            />
            </div>
        </div>
    );
};

export default ViewCart;