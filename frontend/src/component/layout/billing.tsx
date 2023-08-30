import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Billing = () => {

    const [couponCode, setCouponCode] = useState('');
    const [discountValue, setDiscountValue] = useState(0);
    const [paymentValue, setPaymentValue] = useState(0);

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
    // const priceHour = location.state?.priceHour;    
    const extraTotal = location.state?.extraTotal;
    const subtotal = totalPrice;
    
    
    

    const extras = location.state?.extras;

    const calculateTotal = () : number => {
        let total = 0;
        
        total = subtotal - (subtotal * (discountValue / 100));

        return total;
    };

    const calculateChange = () : number => {
        let change = 0;

        change = paymentValue - calculateTotal();

        return change;
    }
    const checkCoupon = (code: string)  => {

        if (code === "golucky10") {
            setDiscountValue(10);
        } else setDiscountValue(0);
        

        calculateTotal();
        calculateChange();
    };
    
    
    return (
        <div className='w-full md:flex md:justify-center md:items-center bg-blue-300 md:p-16 inset-0 z-4 p-6 md:h-full'>
            <div className='w-full md:w-auto p-8 shadow-xl bg-white rounded-xl'>
                <div className='grid grid-cols-1 lg:grid-cols-2 h-full'>
                    <div className='flex flex-col p-3 h-full '>
                        <div className='flex items-start flex-col md:flex-row md:items-centerp-4 space-x-8  w-full'>
                            <div className='flex flex-col items-center border-4 w-full '>
                                <div className='w-40 h-40 bg-red-200'>
                                    {/* img container */}                                    
                                </div>
                                <button className='px-4 py-2 bg-blue-500 text-white rounded-md w-full'>See Room Details</button>
                            </div>
                            <div className='flex flex-col space-y-4 '>                               
                                <h3 className='text-xl font-semibold'>Sample Name</h3>
                                <h3 className='text-lg'>000001 ID</h3>
                                <div className='grid grid-cols-1 md:grid-cols-2   w-max'>
                                    <div className='col-span-1 space-y-2  w-max'>
                                        <div className='flex flex-col justify-center w-max'>
                                            <h3 className='text-lg font-semibold w-max'>Check In</h3>
                                            <h3 className='ml-2 whitespace-nowrap w-max '>{inDate}</h3>
                                        </div>
                                        <div className='flex flex-col justify-center w-max'>
                                            <h3 className='text-lg font-semibold whitespace-nowrap w-max'>Guest(s)</h3>
                                            <h3 className='ml-2 whitespace-nowrap w-max'>{numGuest}</h3>
                                        </div>
                                        <div className='flex flex-col justify-center w-max'>
                                            <h3 className='text-lg font-semibold whitespace-nowrap w-max'>Room Capacity</h3>
                                            <h3 className='ml-2 whitespace-nowrap w-max'>{roomCap}</h3>
                                        </div>
                                    </div>
                                
                                    <div className='col-span-1 space-y-2 w-max'>
                                        <div className='flex flex-col justify-center w-max'>
                                            <h3 className='text-lg font-semibold whitespace-nowrap w-max'>Check Out</h3>
                                            <h3 className='ml-2 whitespace-nowrap w-max'>{outDate}</h3>
                                        </div>
                                        <div className='flex flex-col justify-center w-max'>
                                            <h3 className='text-lg font-semibold w-max'>Room Type</h3>
                                            <h3 className='ml-2 whitespace-nowrap w-max'>{roomType}</h3>
                                        </div>
                                        <div className='flex flex-col justify-center w-max'>
                                            <h3 className='text-lg font-semibold whitespace-nowrap w-max'>Room Number</h3>
                                            <h3 className='ml-2 whitespace-nowrap w-max'>{roomNo}</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col space-y-2'>
                                    <h3 className='text-lg font-semibold'>Guest Request</h3>
                                    <h3>{request}</h3>
                                </div>
                                <div className='flex flex-col space-y-2'>    
                                    <h3 className='text-lg font-semibold'>Extras</h3>                                                              
                                {extras.map(item  => (
                                    <div className='flex items-center' key={item.name}>
                                        <span className='w-4 h-4 bg-green-500 rounded-full mr-2'></span>
                                        <p className='text-sm'>{item.name}</p>
                                    </div>
                                ))}                                
                                </div>
                            </div>
                        </div>                        
                    </div>
                    <div className='flex flex-col 2xl:items-center p-3 bg-gray-100 h-full'>            
                        <div className='p-5 flex flex-col gap-4 md:gap-4 w-full '>
                            <h2 className='lg:text-2xl font-bold text-lg w-full'>Booking Summary</h2>
                            <div className='px-2 mb-4'>
                                <div className='flex justify-between'>
                                    <p className='text-gray-700'> Rate/Day </p>
                                    <p>₱ {priceDay}</p>
                                </div>
                                {/* <div className='flex justify-between'>
                                    <p className='text-gray-700'> Rate/Hour </p>
                                    <p>₱ {priceHour}</p>
                                </div> */}
                                {/* <div className='flex justify-between'>
                                    <p className='text-gray-700'> Rate/Total </p>
                                    <p>₱ {totalPrice}</p>
                                </div> */}

                                <div className='flex justify-between'>
                                    <p className='text-gray-700'> Extras </p>
                                    <p>₱ {extraTotal}</p>                            
                                </div>

                            </div>
                            <div className='flex flex-col'>
                                <div className='flex flex-col gap-2 px-2 '>
                                    <div className='flex justify-between'>
                                        <h4 className='font-bold text-gray-600 text-md'>Sub Total</h4>
                                        <p>₱ {subtotal}</p>
                                    </div>
                                    <div className='flex justify-between'>
                                        <h4 className='font-bold text-gray-600 text-md'>Discount</h4>
                                        <p>{discountValue} %</p>
                                    </div>
                                    <div className='flex justify-between mb-4'>
                                        <h4 className='font-bold text-gray-600 text-md text-green-800'>Total </h4>
                                        <p className='text-green-800'>₱ {calculateTotal()}</p>
                                    </div>
                                     
                                    <div className='flex justify-between'>
                                        <h4 className='font-bold text-gray-600 text-md mt-1'> Payment</h4>
                                        <input type="number" placeholder='Enter payment here...' className='w-1/2'                                        
                                        onBlur={(e) => setPaymentValue(parseFloat(e.target.value) | 0)}
                                        />
                                    </div>
                                    <div className='flex justify-between'>
                                        <h4 className='font-bold text-gray-600 text-md mt-1'>Balance</h4>
                                        <p>₱ {calculateChange()}</p>
                                    </div>
                                                              
                                </div>
                                <div className='flex flex-col lg:flex-row gap-4  mt-5'>
                                    <input

                                        type='text'
                                        placeholder='Coupon Code'
                                        className='border p-2 rounded-md focus:outline-none focus:border-blue-300'
                                        onBlur={(e) => setCouponCode(e.target.value)}
                                    />
                                    <button 
                                        className='bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700'
                                        onClick={() => checkCoupon(couponCode)} >
                                        Apply
                                    </button>
                                </div>
                            </div>
                        </div>                        
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between border-t-4 mt-4 p-4">
                    <Link
                        to={'/check-in'}
                        className='bg-white border-2 border-gray-500 text-black font-bold rounded-xl px-6 md:px-12 py-2 md:py-4 mb-4 md:mb-0 hover:bg-red-400'
                    >
                        Cancel
                    </Link>
                    <div className='flex gap-4 md:gap-8'>
                        <button
                            className='bg-red-100 text-red-600 font-bold rounded-xl text-white px-6 md:px-12 py-2 md:py-4 hover:bg-red-500 hover:text-black'
                        >
                            Cancel Booking
                        </button>
                        <button
                            // onClick={handleConfirm}
                            className='bg-green-500 rounded-xl font-bold text-white px-6 md:px-12 py-2 md:py-4 hover:bg-green-600'
                        >
                            Confirm Booking
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Billing;
