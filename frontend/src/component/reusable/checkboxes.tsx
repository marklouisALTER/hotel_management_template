import React from 'react';

interface CheckboxWithPriceProps {
    label: string;
    price: number;
    isChecked: boolean;
    onCheckboxChange: () => void;
}

const CheckboxWithPrice: React.FC<CheckboxWithPriceProps> = ({ label, price, isChecked, onCheckboxChange }) => {
    return (
        <div className='flex items-center gap-4 w-full md:w-96'>
            <input
                type="checkbox"
                className='w-4 h-4 text-green-600 rounded focus:ring-2 focus:ring-green-300'
                checked={isChecked}
                onChange={onCheckboxChange}
            />
            <label className='flex-grow text-gray-800'>{label}</label>
            <p className='text-green-800 font-bold'>₱ {price.toFixed(2)}</p>
        </div>
    );
};

export default CheckboxWithPrice;
