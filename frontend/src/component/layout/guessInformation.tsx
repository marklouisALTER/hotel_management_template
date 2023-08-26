import { FaHotel } from 'react-icons/fa'
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import fakeData from '../FakeData';
import GuestCountSelect from '../reusable/guestdropdown';
import '../input.css'

interface RoomInfo {
  id: number;
  room: number;
  status: string;
  type: string;
}

interface FakeData {
  [floor: string]: {
    [room: string]: RoomInfo;
  };
}

export const GuessInformation: React.FC = () => {
  const navigate = useNavigate();
  const { roomId } = useParams<{ roomId: string }>(); 

  const [roomInfo, setRoomInfo] = useState<RoomInfo | null>(null);

  useEffect(() => {

        let room: RoomInfo | undefined = undefined;
        for (const floorKey in fakeData) {
        const data = fakeData[floorKey] as FakeData[string];
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

  return (

<div className='w-full 2xl:h-screen md:flex md:justify-center md:items-center bg-blue-300 md:p-16 inset-0 z-4 p-6 md:h-full'>
    <div className='w-full md:w-auto p-8 shadow-xl bg-white rounded-xl'>
        <div className='flex justify-center md:justify-between mb-4 md:mb-6'>
            <h1 className='mr-auto font-primary flex items-center gap-2 text-2xl md:text-4xl font-extrabold'>
                <div className='w-12 h-12 md:w-16 md:h-16 bg-primary flex items-center justify-center rounded-full'>
                    <FaHotel className="text-3xl md:text-4xl text-white" />
                </div>
                HOTEL MANAGEMENT
            </h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-full'>
            <div className='flex flex-col 2xl:items-center p-5 border'>
                <div className='px-5 flex flex-col 2xl:flex-row gap-4'>
                    <div className='mt-2 flex flex-col'>
                        <label className='font-primary md:mr-4 text-left w-full font-bold'>Check In</label>        
                        <input 
                            type='date'
                            className='border w-11/12 p-1 border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200'
                        />                          
                    </div>
                    <div className='mt-2 flex flex-col'>
                        <label className='font-primary text-left w-full font-bold'>Duration </label>
                        <input 
                            type='number'
                            className='border w-11/12 p-1 border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200'
                        />
                    </div>
                    <div className='mt-2 flex flex-col'>
                        <label className='font-primary text-left w-full font-bold'>Check Out</label>        
                        <input 
                            type='date'
                            className='border w-11/12 p-1 border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200'
                        />
                            
                    </div>
                    
                </div>
                <div className='gap-4 w-full'>
                   
                    <h1 className='font-primary font-extrabold mt-2 text-lg '>Room Details</h1>
                    
                    
                    <div className='px-5 flex flex-col 2xl:flex-row justify-between gap-4 w-full'>
                        <div className='flex flex-col'>
                            <label className='font-primary w-[100%]'>Room Type</label>
                                <input
                                    type='text'
                                    className='border w-11/12 p-1 border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200'
                                    value={roomInfo.type}
                                />     
                        </div>
                        
                        
                        <div className='flex flex-col'>
                            <label className='font-primary w-[100%]'>Room #</label>
                                <input 
                                    type='text'
                                    className='border w-11/12 p-1 border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200'
                                    value={roomInfo.room}
                                />     
                        </div>                                    
                    </div>
                    <div className='px-5 flex flex-col 2xl:flex-row justify-between gap-4 w-full'>
                        <div className='flex flex-col'>
                            <label className='font-primary w-[100%]'>Room Capacity</label>
                                    <input 
                                        type='number'
                                        className='border w-11/12 p-1 border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200'
                                        //value={roomInfo.capacity}
                                    />
                        </div>
                    
                        <div className='flex flex-col'>
                            <label className='font-primary w-[100%]'>Status</label>
                                    <input 
                                        type='text'
                                        className='border w-11/12 p-1 border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200' 
                                        value={roomInfo.status}/>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col sm:flex-row gap-4 w-full mt-5'>                   
                    <GuestCountSelect/>                    
                </div>
                <div className='w-full mt-4'>
                    <h1 className='font-primary font-extrabold mt-2 text-lg'>Guest Request</h1>
                    <div className='w-full h-auto px-2'>
                        <textarea className='border border-primary w-[100%] h-[9rem] p-2' placeholder='Type your request here...'></textarea>
                    </div>
                </div> 

            </div>
            
            <div className='flex flex-col 2xl:items-center p-5 border'>
                <div className='gap-4 w-full'>
                    <h1 className='font-primary font-extrabold mt-2 text-lg w-full'>Guest  Information</h1>
                    <div className='px-5 flex flex-col 2xl:flex-row justify-between gap-4 w-full'>             
                        <div>
                            <label className='font-primary text-left w-full'>First Name</label>
                            <input 
                                    type='text'
                                    className='border w-11/12  p-1 border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200'/>
                        </div>                                            
                        <div>
                            <label className='font-primary text-left w-full'>Last Name</label>
                            <input 
                                    type='text'
                                    className='border w-11/12 p-1 border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200'/>
                        </div>
                        <div>                        
                            <label className='font-primary text-left w-full'>Gender </label>
                            <select className='border w-11/12 p-1 border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200'>
                                <option value="Male">Male</option> 
                                <option value="Female">Female</option> 
                            </select>                                 
                        </div>
                    </div>
                    
                    <div className='mt-5 px-5 flex flex-col 2xl:flex-row justify-between gap-2 w-full'>                        
                        <div className='flex flex-col'>
                            <label className='font-primary text-left w-full'>Phone No.</label>
                            <input 
                                    type='number'
                                    className='border w-11/12 p-1 border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200'/>
                        </div>                        
                        <div className='flex flex-col'>
                            <label className='font-primary text-left w-full'>Birth Date&nbsp;</label>
                            <input 
                                    type='date'
                                    className='border w-11/12 p-1 border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200'/>
                        </div>
                        <div className='flex flex-col'>
                        <label className='font-primary text-left w-full'>Email</label>
                        <input 
                                type='email'
                                className='border w-11/12 sm:ml-0 p-1 border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200'/>
                    </div>                        
                    </div>
                                        
                </div>
                <div className='gap-4 w-full'>
                    <h1 className='font-primary font-extrabold mt-4 text-lg w-full'>Address</h1>
                    <div className='px-5 flex flex-col xl:flex-row justify-between gap-4'>                    
                        <div className='flex flex-col'>
                            <label className='font-primary text-left w-full'>Country</label>
                            <input 
                                    type='text'
                                    className='border w-11/12 p-1 border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200'/>
                        </div>
                        <div className='flex flex-col'>
                            <label className='font-primary text-left w-full'>State</label>
                            <input 
                                    type='text'
                                    className='border w-11/12 p-1 border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200'/>
                        </div>                    
                    </div>
                    <div className='px-5 flex flex-col xl:flex-row justify-between gap-4'>           
                        <div className='flex flex-col'>
                            <label className='font-primary text-left w-full'>City </label>
                            <input 
                                    type='text'
                                    className='border w-11/12 p-1 border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200'/>
                        </div>
                    
                        <div className='flex flex-col'>
                            <label className='font-primary text-left w-full'>Zip Code</label>
                            <input 
                                    type='number'
                                    className='border w-11/12 p-1 border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200'/>
                        </div>
                    </div>
                </div>

                <div className='mt-5 flex flex-col items-center w-full'>
                    <div className='gap-4 w-full'>                        
                        <div className='flex flex-col sm:flex-row justify-between gap-4 w-full'>
                            <div className='flex flex-col'>                            
                                <h1 className='font-primary font-extrabold text-lg w-full'>ID Info</h1>
                                <div className='px-5 flex flex-col gap-4'>
                                    <div>
                                        <label className='font-primary text-left w-full mr-4'>ID Type</label>
                                        <select className='border w-11/12 p-1 border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200'>
                                            <option value="UMID">UMID</option> 
                                            <option value="PhilHealth">Phil Health</option> 
                                            <option value="SSS">SSS</option> 
                                            <option value="NationalID">National ID</option> 
                                        </select> 
                                    </div>
                                    
                                    <div>
                                    <label className='font-primary text-left w-full mr-4'>ID No.</label>
                                    <input 
                                            type='number'
                                            className='border w-11/12 p-1 border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200'/>
                                    </div>                           
                                </div>
                            </div>
                        </div>   
                    </div>
                </div>

            </div>
            
            <div className='grid grid-rows-4 border col-span-1 grid-cols-1'>
                
                
            
                <div className='row-span-3 md:col-span-1 px-5'>
                    <h1 className='font-primary font-extrabold mt-2 text-lg'>Extras</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 px-5 mt-4'>
                        <div className='flex flex-col gap-3'>
                            <div className='flex gap-2'>
                                <input type="radio" />
                                <label>Breakfast</label>
                            </div>
                            <div className='flex gap-2'>
                                <input type="radio" />
                                <label>Lunch</label>
                            </div>
                            <div className='flex gap-2'>
                                <input type="radio" />
                                <label>Snack</label>
                            </div>
                            <div className='flex gap-2'>
                                <input type="radio" />
                                <label>Dinner</label>
                            </div>
                            <div className='flex gap-2'>
                                <input type="radio" />
                                <label>WIFI Access</label>
                            </div>
                            <div className='flex gap-2'>
                                <input type="radio" />
                                <label>Laundry</label>
                            </div>
                        </div>
                        <div className='flex  flex-col gap-3'>
                            <div className='flex gap-2'>
                                <input type="radio" />
                                <label>Spa</label>
                            </div>
                            <div className='flex gap-2'>
                                <input type="radio" />
                                <label>Local Guide</label>
                            </div>
                            <div className='flex gap-2'>
                                <input type="radio" />
                                <label>Swimming Pool</label>
                            </div>
                            <div className='flex gap-2'>
                                <input type="radio" />
                                <label>Gaming Louge</label>
                            </div>
                            <div className='flex gap-2'>
                                <input type="radio" />
                                <label>Car Rent</label>
                            </div>
                            <div className='flex gap-2'>
                                <input type="radio" />
                                <label>Bike Rent</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row-span-1 md:col-span-1 px-4 md:px-6 py-2 md:py-4'>
                    <div className='flex flex-col justify-center items-center bg-primary w-full h-full rounded-xl p-4'>
                        <h1 className='text-white text-lg md:text-2xl font-bold'>Check In Process</h1>
                        <div className='flex gap-4 md:gap-5 mt-2'>
                            <Link to={'/check-in'} 
                                    className='bg-red-500 rounded-xl text-white p-2 md:px-5 hover:bg-red-700'>Cancel</Link>
                            <button className='bg-green-500 rounded-xl text-white p-2 md:px-5 hover:bg-green-700'>Confirm</button>
                        </div>   
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
);
};
