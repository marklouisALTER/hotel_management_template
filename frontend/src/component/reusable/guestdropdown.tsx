import React, { useState } from 'react';

const GuestCountSelect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const updateGuestCount = () => {
    const adultText = adults === 1 ? '1 Adult' : `${adults} Adults`;
    const childText = children === 1 ? '1 Child' : `${children} Children`;
    return `${adultText}, ${childText}`;
  };

  return (
    <div className='flex flex-col gap-4 w-full md:w-auto'>
      <h1 className='font-primary font-extrabold text-md'>Guest Count</h1>
      <div className='relative'>
        <div
          className='border border-gray-300 rounded-md px-3 py-2 cursor-pointer focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200'
          onClick={togglePopup}
        >
          {updateGuestCount()}
        </div>
        {isOpen && (
          <div className='absolute bg-white shadow-md rounded-md mt-2 p-2'>
            <div className='flex justify-between items-center gap-4'>
              <span>Adult(s)</span>
              <div className='flex gap-4'>
                <button onClick={() => setAdults(adults - 1)} disabled={adults <= 1}
                >
                  -
                </button>
                <input
                  type='number'
                  value={adults}
                  onChange={(e) => setAdults(parseInt(e.target.value))}
                  className='border border-gray-300 rounded-md text-center w-full focus:outline-none'
                />
                <button onClick={() => setAdults(adults + 1)} >+</button>
              </div>
            </div>
            <div className='flex justify-between items-center mt-2 gap-4'>
              <span>Children</span>
              <div className='flex gap-4'>
                <button onClick={() => setChildren(children - 1)} disabled={children <= 0}
                className=''>
                  -
                </button>
                <input
                  type='number'
                  value={children}
                  onChange={(e) => setChildren(parseInt(e.target.value))}
                  className='border border-gray-300 rounded-md text-center w-full focus:outline-none'
                />
                <button onClick={() => setChildren(children + 1)} className=''>+</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GuestCountSelect;
