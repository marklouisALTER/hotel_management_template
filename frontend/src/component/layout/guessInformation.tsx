import { FaHotel } from 'react-icons/fa'
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import fakeData from '../FakeData';
import GuestCountSelect from '../reusable/guestdropdown';
import PaymentMethod from '../reusable/payment';
import CustomDatePicker from '../reusable/datepicker';
import CheckboxWithPrice from '../reusable/checkboxes';
import '../input.css'

interface RoomInfo {
  id: number;
  room: number;
  status: string;
  type: string;
  capacity: number;
  price: number; //1000, 3000, 5000
}

interface FakeData {
  [floor: string]: {
    [room: string]: RoomInfo;
  };
}


export const GuessInformation: React.FC = () => {
    // temporary extra cont snce theres no db fetching yet
    const checkboxData = [
        { label: 'Breakfast', price: 200 },
        { label: 'Lunch', price: 250 },
        { label: 'Snack', price: 200 },
        { label: 'Dinner', price: 300 },
        { label: 'Gym', price: 500 },
        { label: 'Laundry', price: 500 },
        { label: 'Spa', price: 500 },
        { label: 'Local Guide', price: 1500 },
        { label: 'Swimming Pool', price: 2000 },
        { label: 'Gaming Lounge', price: 1000 },
        { label: 'Car Rent', price: 10000 },
        { label: 'Bike Rent', price: 2000 },
    ];
    
    const navigate = useNavigate();
    const { roomId } = useParams<{ roomId: string }>(); 

    const [roomInfo, setRoomInfo] = useState<RoomInfo | null>(null);
    // Room details
    const [durationValue, setDurationValue] = useState('0'); // Initialize as a string
    const [checkedCheckboxes, setCheckedCheckboxes] = useState<boolean[]>(Array(checkboxData.length).fill(false));
    const [selectedDate, setSelectedDate] = useState(''); // State to store selected date
    useEffect(() => {
        let room: RoomInfo | undefined = undefined;
        for (const floorKey in fakeData) {
        const data = fakeData[floorKey as keyof typeof fakeData]; // Type assertion
            room = Object.values(data).find((room) => room.id === Number(roomId));
            if (room) {
                break;
            }
        }
        if (room) {
            setRoomInfo(room);
        } else {
            navigate('/check-in');
    }
    }, [roomId, navigate]);

    if (!roomInfo) {
        return <div>Loading...</div>;
    }
    
    
    
    const calculateTotalPrice = (): number => {
        const roomPrice = roomInfo.price; 
        const duration = parseInt(durationValue); // Parse the duration value
        const extraServicesTotal = calculateTotalCheckedPrice();
        const totalPrice = (roomPrice + extraServicesTotal) * duration;

        return totalPrice;
    };
    
    const calculateTotalCheckedPrice = (): number => {
        let total = 0;
        for (let i = 0; i < checkedCheckboxes.length; i++) {
            if (checkedCheckboxes[i]) {
                total += checkboxData[i].price;
            }
        }
        return total;
    };
    

    const handleCheckboxChange = (index: number) => {
        const updatedCheckedCheckboxes = [...checkedCheckboxes];
        updatedCheckedCheckboxes[index] = !updatedCheckedCheckboxes[index];
        setCheckedCheckboxes(updatedCheckedCheckboxes);
    };

    const handleConfirm = () => {
        navigate('/billing', { state: { 
            total: calculateTotalPrice(), 
            numGuest: 2,
            roomCap: roomInfo.capacity,
            roomType: roomInfo.type,
            roomNo: roomInfo.room,
            inDate: selectedDate,
            outDate: calculateCheckoutDate(),
            priceDay: roomInfo.price,            
            extraTotal: calculateTotalCheckedPrice(),



        } });

    };

    // Calculate the checkout date based on selected duration and starting date
    const calculateCheckoutDate = () => {
        if (!selectedDate) {
            return '';
        }
    
        const duration = parseInt(durationValue, 10); // Parse duration to integer
    
        // Convert selectedDate string to a Date object
        const parsedDate = new Date(selectedDate);
    
        // Calculate checkout date
        const checkoutDate = new Date(parsedDate.getTime() + duration * 24 * 60 * 60 * 1000);
    
        // Format the checkout date as "Mon, Aug 21, 2023"
        const formattedCheckoutDate = checkoutDate.toLocaleDateString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    
        return formattedCheckoutDate;
    };

    
    return (

        <div className='w-full md:flex md:justify-center md:items-center bg-blue-300 md:p-16 inset-0 z-4 p-6 md:h-full'>
            <div className='w-full md:w-auto p-8 shadow-xl bg-white rounded-xl'>
                <div className='flex justify-center md:justify-between mb-4 md:mb-6'>
                    <h1 className='mr-auto font-primary flex items-center gap-2 text-2xl md:text-4xl font-extrabold'>
                        <div className='w-12 h-12 md:w-16 md:h-16 bg-primary flex items-center justify-center rounded-full'>
                            <FaHotel className="text-3xl md:text-4xl text-white" />
                        </div>
                        HOTEL MANAGEMENT
                    </h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 h-full'>
                    <div className='col-span-1'>
                        <div className='flex flex-col 2xl:items-center p-3'>
                            <div className='p-5 flex flex-col 2xl:flex-row gap-8 md:gap-4 w-full'>
                                <CustomDatePicker selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
                                <div className='flex flex-col'>
                                    <label className='font-primary text-left w-full font-bold'>Duration </label>
                                    <select
                                        className='border w-full md:w-auto p-1 border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200'
                                        onChange={(event) => setDurationValue(event.target.value)}
                                    >
                                        <option value='1'>1 day</option>
                                        <option value='2'>2 days</option>
                                        <option value='3'>3 days</option>
                                        {/* Add more options as needed */}
                                    </select>
                                </div>
                                <div className='flex flex-col'>
                                    <label className='font-primary text-left w-full font-bold'>Check Out</label>        
                                    <input
                                        type='text'
                                        className='border w-full md:w-auto p-1 border-gray-300 rounded-md placeholder-gray-400 outline-none'
                                        value={calculateCheckoutDate()} // Display formatted checkout date
                                        readOnly
                                    />
                                        
                                </div>                                
                            </div>
                            <div className='gap-4 w-full'>                    
                                <h1 className='font-primary font-extrabold text-lg '>Room Details</h1>
                                <div className='px-5 flex flex-col 2xl:flex-row justify-between gap-4 w-full'>
                                    <div className='flex flex-col'>
                                        <label className='font-primary w-[100%]'>Room Type</label>
                                            <input
                                                type='text'
                                                className='border w-full md:w-auto p-1 border-gray-300 rounded-md placeholder-gray-400 outline-none'
                                                value={roomInfo.type}
                                                readOnly
                                            />     
                                    </div>                                                    
                                    <div className='flex flex-col'>
                                        <label className='font-primary w-[100%]'>Room #</label>
                                            <input 
                                                type='text'
                                                className='border w-full md-w-auto p-1 border-gray-300 rounded-md placeholder-gray-400 outline-none'
                                                value={roomInfo.room}
                                                readOnly
                                            />     
                                    </div>                                                                                    
                                    <div className='flex flex-col'>
                                        <label className='font-primary w-[100%]'>Room Capacity</label>
                                                <input 
                                                    type='number'
                                                    className='border w-full md-w-auto p-1 border-gray-300 rounded-md placeholder-gray-400 outline-none'
                                                    value={roomInfo.capacity}
                                                    readOnly
                                                />
                                    </div>
                                
                                    <div className='flex flex-col'>
                                        <label className='font-primary w-[100%]'>Status</label>
                                                <input 
                                                    type='text'
                                                    className='border w-full md-w-auto p-1 border-gray-300 rounded-md placeholder-gray-400 outline-none' 
                                                    value={roomInfo.status}
                                                    readOnly
                                                    />
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col sm:flex-row gap-4 w-full p-5'>                   
                                <GuestCountSelect/>                    
                            </div>                     
                        </div>                
                        <div className='flex flex-col 2xl:items-center'>
                            <div className='gap-4 w-full p-3'>
                                <h1 className='font-primary font-extrabold text-lg w-full'>Guest  Information</h1>
                                <div className='px-5 flex flex-col 2xl:flex-row gap-4 w-full'>             
                                    <div>
                                        <label className='font-primary text-left w-full'>First Name</label>
                                        <input 
                                                type='text'
                                                className='border w-full md-w-auto  p-1 border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200'/>
                                    </div>                                            
                                    <div>
                                        <label className='font-primary text-left w-full'>Last Name</label>
                                        <input 
                                                type='text'
                                                className='border w-full md-w-auto p-1 border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200'/>
                                    </div>
                                    <div>                        
                                        <label className='font-primary text-left w-full'>Gender </label>
                                        <select className='border w-full md-w-auto p-1 border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200'>
                                            <option value="Male">Male</option> 
                                            <option value="Female">Female</option> 
                                        </select>                                 
                                    </div>
                                </div>
                                
                                <div className='p-5 flex flex-col 2xl:flex-row  gap-2 w-full'>                        
                                    <div className='flex flex-col'>
                                        <label className='font-primary text-left w-full'>Phone No.</label>
                                        <input 
                                                type='number'
                                                className='border w-full md-w-auto p-1 border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200'/>
                                    </div>                        
                                    <div className='flex flex-col'>
                                        <label className='font-primary text-left w-full'>Birth Date&nbsp;</label>
                                        <input 
                                                type='date'
                                                className='border w-full md-w-auto p-1 border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200'/>
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='font-primary text-left w-full'>Email</label>
                                        <input 
                                                type='email'
                                                className='border w-full md-w-auto sm:ml-0 p-1 border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200'/>
                                    </div>                        
                                </div>                                                                    
                            </div>
                            <div className='gap-4 w-full p-3'>
                                <h1 className='font-primary font-extrabold text-md w-full'>Address</h1>
                                <div className='px-5 flex flex-col xl:flex-row gap-4'>                    
                                    <div className='flex flex-col'>
                                        <label className='font-primary text-left w-full'>Country</label>
                                        <input 
                                                type='text'
                                                className='border w-full md-w-auto p-1 border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200'/>
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='font-primary text-left w-full'>State</label>
                                        <input 
                                                type='text'
                                                className='border w-full md-w-auto p-1 border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200'/>
                                    </div>                    
                                
                                    <div className='flex flex-col'>
                                        <label className='font-primary text-left w-full'>City </label>
                                        <input 
                                                type='text'
                                                className='border w-full md-w-auto p-1 border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200'/>
                                    </div>
                                
                                    <div className='flex flex-col'>
                                        <label className='font-primary text-left w-full'>Zip Code</label>
                                        <input 
                                                type='number'
                                                className='border w-full md-w-auto p-1 border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200'/>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full p-3'>
                                <h1 className='font-primary font-extrabold text-md'>Guest Request</h1>
                                <div className='w-full h-auto p-2'>
                                    <textarea className='border border-primary w-[100%] h-[9rem] p-2 rounded-md' placeholder='Type your request here...'></textarea>
                                </div>
                            </div>                    
                        </div>                                                    
                        
                    </div>
                    <div className='col-span-1 bg-gray-100'>
                        <div className='flex flex-col 2xl:items-center p-3'>                    
                            <PaymentMethod/>                    
                        </div>                                   
                        <div className='flex flex-col 2xl:items-center p-3'>                                                        
                            <div className='gap-4 w-full p-3'>
                                <h1 className='font-primary font-extrabold mt-2 text-lg'>Extras</h1>
                                
                                <div className='grid grid-cols-1 md:grid-cols-2 px-5 mt-4 gap-4 border-4'>
                                    {checkboxData.map((item, index) => (
                                        <CheckboxWithPrice
                                            key={item.label}
                                            label={item.label}
                                            price={item.price}
                                            isChecked={checkedCheckboxes[index]}
                                            onCheckboxChange={() => handleCheckboxChange(index)}
                                        />
                                    ))}
                                </div>
                            </div>
                            
                        </div>
                        <div className='px-4 md:px-6 py-2 md:py-4'>
                            <div className='flex flex-col justify-center items-center bg-primary w-full h-full rounded-xl p-4'>
                                <h1 className='text-white text-lg md:text-2xl font-bold'>Check In Process</h1>
                                <div className='flex gap-4 md:gap-5 mt-2'>
                                    <Link to={'/check-in'} 
                                            className='bg-red-500 rounded-xl text-white p-2 md:px-5 hover:bg-red-700'>Cancel</Link>
                                    <button
                                        onClick={handleConfirm}
                                        className='bg-green-500 rounded-xl text-white p-2 md:px-5 hover:bg-green-700'
                                    >
                                        Confirm
                                    </button>
                                </div>   
                            </div>
                        </div>                         
                    </div>
                </div>
            </div>
        </div>
    );
};
