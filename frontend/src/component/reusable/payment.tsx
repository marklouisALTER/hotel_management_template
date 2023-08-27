import React, { useState } from 'react';

const PaymentMethod = () => {
  const [paymentType, setPaymentType] = useState('debit');

  const handlePaymentTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPaymentType(e.target.value);
  };

  return (
    <div className='w-full p-3'>
      <h1 className='font-primary font-extrabold text-lg w-full'>Payment Method</h1>
      <div className='px-5 flex-col sm:flex-row gap-4'>
        <div>
          <label className='font-primary text-left w-full mr-4'>Payment Type</label>
          <select
            className='border w-full md:w-auto p-1 border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200'
            value={paymentType}
            onChange={handlePaymentTypeChange}
          >
            <option value="debit">Debit Card</option>
            <option value="cash">Cash</option>
            <option value="e-wallet">E-Wallet</option>
          </select>
        </div>
        {paymentType === 'debit' && (
          <div className='flex flex-col 2xl:flex-row gap-4'>
            <div className='flex flex-col w-full'>
                <label className='font-primary text-left w-full mr-4'>Bank</label>
                <select
                  className='border w-full md:w-auto p-1 border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200'
                >
                {/* Add options for banks */}
                </select>
            </div>
            <div className='flex flex-col w-full'>
                <label className='font-primary text-left w-full mr-4'>Card Number</label>
                <input
                type='number'
                className='border w-full md:w-auto p-1 border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200'
                />
            </div>
          </div>
        )}
        {paymentType === 'e-wallet' && (
          <div className='flex flex-col 2xl:flex-row gap-4 mt-4 px-2'>
            <div className='flex flex-col w-full'>
                <label className='font-primary text-left w-full mr-4'>E-Wallet</label>
                <select
                className='border w-11/12 p-1 border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200'
                >
              {/* Add options for e-wallets */}
                </select>
            </div>
            <div className='flex flex-col w-full'>
                <label className='font-primary text-left w-full mr-4'>Wallet Number</label>
                <input
                type='number'
                className='border w-11/12 p-1 border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200'
                />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentMethod;
