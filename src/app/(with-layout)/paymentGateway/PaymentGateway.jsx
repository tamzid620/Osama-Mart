'use client' ;
import React from 'react';
import { kanit } from '../../../utilies/FontsProvider/fontProvider';
import paypal from '../../../assests/icons/paypal.png';
import gpay from '../../../assests/icons/google-pay.png';
import applepay from '../../../assests/icons/apple-pay.png';
import Image from 'next/image';
import Swal from 'sweetalert2';


const PaymentGateway = () => {

    const handlePay = () => {
        Swal.fire({
            icon: "success",
            title: "Payment successful !",
            position: "center" ,
            timer: 3000, 
        });
    }

    return (
        <div className='xl:max-w-7xl lg:max-w-6xl md:max-w-3xl sm: max-w-sm mx-auto mt-[65px]'>
            <div className={`${kanit.className} min-h-screen flex items-center justify-center `}>
                <div className="bg-white text-black shadow-lg rounded-lg p-6 max-w-2xl w-full">
                    <h1 className="text-2xl font-bold mb-4 text-gray-800">Payment Gateway</h1>

                    {/* Order Summary */}
                    <div className="mb-6">
                        <h2 className="text-lg font-semibold text-gray-700 mb-2">Order Summary</h2>
                        <div className="flex justify-between items-center text-sm text-gray-600">
                            <span>Shipping</span>
                            <span>$5.00</span>
                        </div>
                        <div className="flex justify-between items-center text-sm font-bold text-gray-800 mt-2">
                            <span>Total</span>
                            <span>$---</span>
                        </div>
                    </div>

                    {/* Payment Form */}
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="cardName">
                                Name on Card
                            </label>
                            <input
                                required
                                id="cardName"
                                type="text"
                                placeholder="Your Name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="cardNumber">
                                Card Number
                            </label>
                            <input
                                required
                                id="cardNumber"
                                type="number"
                                placeholder="1234 5678 9012 3456"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        <div className="flex space-x-4">
                            <div className="flex-1">
                                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="expiryDate">
                                    Expiry Date
                                </label>
                                <input
                                    required
                                    id="expiryDate"
                                    type="date"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            <div className="flex-1">
                                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="cvc">
                                    CVC
                                </label>
                                <input
                                    required
                                    id="cvc"
                                    type="text"
                                    placeholder="123"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                        </div>

                        <button
                            onClick={handlePay}
                            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Pay Now
                        </button>
                    </form>

                    {/* Alternative Payment Methods */}
                    <div className="mt-6">
                        <h2 className="text-sm font-semibold text-gray-700 mb-2">Or pay with:</h2>
                        <div className="flex space-x-4">
                            <button onClick={handlePay} className="flex-1 bg-gray-100 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-200 hover:shadow-md">
                                <div className='flex justify-center'>
                                    <Image className='w-[50px] ' src={paypal} alt='paypal image' />
                                </div>
                            </button>
                            <button onClick={handlePay} className="flex-1 bg-gray-100 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-200 hover:shadow-md">
                                <div className='flex justify-center'>
                                    <Image className='w-[50px] ' src={gpay} alt='paypal image' />
                                </div>
                            </button>
                            <button onClick={handlePay} className="flex-1 bg-gray-100 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-200 hover:shadow-md">
                                <div className='flex justify-center'>
                                    <Image className='w-[50px] ' src={applepay} alt='paypal image' />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PaymentGateway;