import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Billing = () => {
    const location = useLocation();
    const totalPrice = location.state?.total;

    return (

        <div className='flex flex-col 2xl:items-center p-3 bg-gray-100 h-full'>            
            <div className='p-5 flex flex-col gap-8 md:gap-4 w-full border-4'>
                <h2 className='text-2xl font-bold mb-4'>Booking Summary</h2>
                <div className='border-4 border-red-900 p-4 rounded-lg mb-4'>
                    <p className='text-gray-700'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem fuga mollitia saepe atque,
                    non quae quam ab ipsam quod, incidunt ea assumenda repellat eos magni quis dolorum.
                    Reiciendis, quis quaerat!
                    </p>
                </div>
                <div className='flex flex-col'>
                    <div className='flex flex-col px-8 gap-2'>
                    <h4 className='font-bold text-gray-600 text-md'>Sub Total</h4>
                    <h4 className='font-bold text-gray-600 text-md'>Discount</h4>
                    <h4 className='font-bold text-green-600 text-2xl mt-1'>Total ₱{totalPrice}</h4>
                    </div>
                    <div className='flex gap-4 mt-5'>
                        <input
                            type='text'
                            placeholder='Coupon Code'
                            className='border p-2 rounded-md focus:outline-none focus:border-blue-300'
                        />
                        <button className='bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700'>
                            Apply
                        </button>
                    </div>
                </div>
            </div>                        
        </div>
    );
}

export default Billing;
