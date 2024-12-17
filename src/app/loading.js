import Loader from '../utilies/Loader/Loader';
import React from 'react';

const loading = () => {
    return (
        <div className='flex justify-center items-center text-center text-white w-full h-screen'>
            <div>
            <Loader/>
            <h1>Loading...</h1>
            </div>
        </div>
    );
};

export default loading;