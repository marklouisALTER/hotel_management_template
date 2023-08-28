import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Billing = () => {
    const location = useLocation();
    const totalPrice = location.state?.total;
    const numGuest = location.state?.numGuest;
    const roomCap = location.state?.roomCap;
    const roomType = location.state?.roomType;
    const roomNo = location.state?.roomNo;
    const inDate = location.state?.inDate;
    const outDate = location.state?.outDate;

    const request = location.state?.request;
    const priceDay = location.state?.priceDay;
    const priceHour = location.state?.priceHour;    
    const extraTotal = location.state?.extraTotal;
    const subtotal = totalPrice;
    const discount = 0
    return (
        <div className='w-full md:flex md:justify-center md:items-center bg-blue-300 md:p-16 inset-0 z-4 p-6 md:h-full'>
            <div className='w-full md:w-auto p-8 shadow-xl bg-white rounded-xl'>
                <div className='grid grid-cols-1 md:grid-cols-2 h-full'>
                    <div className='flex flex-col p-3 h-full'>
                        <div className='flex items-start p-4 space-x-8'>
                            <div className='flex flex-col border-4 w-1/2'>
                                <div className='w-40 h-40 bg-red-200'>
                                    {/* img container */}                                    
                                </div>
                                <button className='px-4 py-2 bg-blue-500 text-white rounded-md'>See Room Details</button>
                            </div>
                            <div className='flex flex-col space-y-4'>
                               
                                <h3 className='text-xl font-semibold'>Sample Name</h3>
                                <h3 className='text-lg'>000001 ID</h3>
                                <div className='grid grid-cols-2 gap-4'>
                                    <div className='col-span-1 space-y-2'>
                                        <div className='flex flex-col justify-center'>
                                            <h3 className='text-lg font-semibold'>Check In</h3>
                                            <h3 className='ml-2'>{inDate}</h3>
                                        </div>
                                        <div className='flex flex-col justify-center'>
                                            <h3 className='text-lg font-semibold'>Guest(s)</h3>
                                            <h3 className='ml-2'>{numGuest}</h3>
                                        </div>
                                        <div className='flex flex-col justify-center'>
                                            <h3 className='text-lg font-semibold'>Room Capacity</h3>
                                            <h3 className='ml-2'>{roomCap}</h3>
                                        </div>
                                    </div>
                                
                                    <div className='col-span-1 space-y-2'>
                                        <div className='flex flex-col justify-center'>
                                            <h3 className='text-lg font-semibold'>Check Out</h3>
                                            <h3 className='ml-2'>{outDate}</h3>
                                        </div>
                                        <div className='flex flex-col justify-center'>
                                            <h3 className='text-lg font-semibold'>Room Type</h3>
                                            <h3 className='ml-2'>{roomType}</h3>
                                        </div>
                                        <div className='flex flex-col justify-center'>
                                            <h3 className='text-lg font-semibold'>Room Number</h3>
                                            <h3 className='ml-2'>{roomNo}</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col space-y-2'>
                                    <h3 className='text-lg font-semibold'>Guest Request</h3>
                                    <h3>{request}</h3>
                                </div>
                                <div className='flex flex-col space-y-2'>
                                    <div className='flex items-center'>
                                        <span className='w-4 h-4 bg-green-500 rounded-full mr-2'></span>
                                        <p className='text-sm'>extra</p>
                                    </div>
                                    <div className='flex items-center'>
                                        <span className='w-4 h-4 bg-green-500 rounded-full mr-2'></span>
                                        <p className='text-sm'>extra</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                    </div>
                    <div className='flex flex-col 2xl:items-center p-3 bg-gray-100 h-full'>            
                        <div className='p-5 flex flex-col gap-8 md:gap-4 w-full border-4'>
                            <h2 className='text-2xl font-bold mb-4'>Booking Summary</h2>
                            <div className='border-4 border-red-900 p-4 rounded-lg mb-4'>
                                <div className='flex gap-4'>
                                    <p className='text-gray-700'> Rate/Day </p>
                                    <p>₱ {priceDay}</p>
                                </div>
                                <div className='flex gap-4'>
                                    <p className='text-gray-700'> Rate/Hour </p>
                                    {/* <p>₱ {priceHour}</p> */}
                                </div>
                                <div className='flex gap-4'>
                                    <p className='text-gray-700'> Rate/Total </p>
                                    <p>₱ {totalPrice}</p>
                                </div>

                                <div className='flex gap-4'>
                                    <p className='text-gray-700'> Extras </p>
                                    <p>₱ {extraTotal}</p>                            
                                </div>

                            </div>
                            <div className='flex flex-col'>
                                <div className='flex flex-col px-8 gap-2'>
                                    <div className='flex gap-4'>
                                        <h4 className='font-bold text-gray-600 text-md'>Sub Total</h4>
                                        <p>₱ {subtotal}</p>
                                    </div>
                                    <div className='flex gap-4'>
                                        <h4 className='font-bold text-gray-600 text-md'>Discount</h4>
                                        <p>₱ {discount}</p>
                                    </div>
                                    <h4 className='font-bold text-green-600 text-2xl mt-1'>Total ₱ {totalPrice}</h4>
                                    <div className='flex flex-col gap-2'>
                                        <label htmlFor="">Payment</label>
                                        <input type="number" placeholder='Enter payment here...'/>
                                    </div>
                                    <h4 className='font-bold text-gray-600 text-md mt-1'>Balance  ₱ {totalPrice}</h4>                                
                                </div>
                                <div className='flex gap-4 px-8 mt-5'>
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
                </div>
            </div>
        </div>
    );
}

export default Billing;
