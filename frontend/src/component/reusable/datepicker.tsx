import React, { useState, useEffect } from 'react';
interface CustomDatePickerProps {
  selectedDate: string;
  setSelectedDate: React.Dispatch<React.SetStateAction<string>>;
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({ selectedDate, setSelectedDate }) => {

  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  

  const formatDate = (date: Date): string => {
    return new Intl.DateTimeFormat('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }).format(date);
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = event.target.value;

    // Parse the selected date value
    const parsedDate = new Date(selectedValue);

    // Format the date to "Mon, Aug 28, 2023" format
    const formattedDate = formatDate(parsedDate);

    setSelectedDate(formattedDate);
    setIsDatePickerVisible(false);
  };
  
  

  const handleTextClick = () => {
    setIsDatePickerVisible(true);
  };

  return (
    <div className='flex flex-col'>
      <label className='font-primary md:mr-4 text-left w-full font-bold'>Check In</label>
      {isDatePickerVisible ? (
        <input 
          type='date'
          value={selectedDate}
          onChange={handleDateChange}
          className='border w-full md:w-auto p-1 border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200'
          autoFocus
        />
      ) : (
        <input 
          type='text'
          value={selectedDate}
          onClick={handleTextClick}
          readOnly
          className='border w-full md:w-auto p-1 border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200'
        />
      )}
    </div>
  );
};


export default CustomDatePicker;
