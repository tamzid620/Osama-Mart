import Loader from '../utilies/Loader/Loader';
import React from 'react';

const loading = () => {
    return (
        <div className='text-center mt-20 text-white w-full h-screen'>
            <Loader/>
            <h1>Loading...</h1>
        </div>
    );
};

export default loading;