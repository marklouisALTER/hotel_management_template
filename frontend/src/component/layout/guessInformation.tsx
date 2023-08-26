import { FaHotel } from 'react-icons/fa'
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import fakeData from '../FakeData';

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
<div className='w-screen h-screen inset-0 absolute z-[4] p-[3rem] bg-blue-300'>
<div className='p-[2rem] shadow-xl shadow-gray-700 rounded-xl bg-white'>
<div className='flex justify-between'>
    <h1 className='mr-auto font-primary flex items-center gap-2 text-4xl font-extrabold'>
        <div className='w-[4rem] h-[4rem] bg-primary flex items-center justify-center rounded-full '>
            <FaHotel  className="text-3xl text-white"/>
        </div>
        HOTEL MANAGEMENT
    </h1>
</div>
<div className='grid grid-cols-3 h-full'>

    <div className='grid grid-rows-3 col-span-1'>

        <div className='pl-5'>
            <h1 className='font-primary font-extrabold mt-2 text-lg'>Guess Information</h1>
            <div className='flex flex-row items-center mt-2 justify-between px-5'>
                <label className='font-primary'>First Name</label>
                <input 
                        type='text'
                        className='border w-[60%] border-primary rounded-sm'/>
            </div>
            <div className='flex flex-row items-center mt-2 justify-between px-5'>
                <label className='font-primary'>Last Name</label>
                <input 
                        type='text'
                        className='border w-[60%] border-primary rounded-sm'/>
            </div>
            <div className='flex flex-row items-center mt-2 justify-between px-5'>
                <label className='font-primary'>Gender </label>
                <select className='border w-[60%] border-primary rounded-sm'>
                    <option value="Male">Male</option> 
                    <option value="Female">Female</option> 
                </select>         
            </div>
            <div className='flex flex-row items-center mt-2 justify-between px-5'>
                <label className='font-primary'>Birth Date&nbsp;</label>
                <input 
                        type='date'
                        className='border w-[60%] border-primary rounded-sm'/>
            </div>
        </div>

        <div className='pl-5'>
            <h1 className='font-primary font-extrabold mt-2 text-lg'>Address</h1>
            <div className='flex flex-row items-center mt-2 justify-between px-5'>
                <label className='font-primary'>Country</label>
                <input 
                        type='text'
                        className='border w-[60%] border-primary rounded-sm'/>
            </div>
            <div className='flex flex-row items-center mt-2 justify-between px-5'>
                <label className='font-primary'>State</label>
                <input 
                        type='text'
                        className='border w-[60%] border-primary rounded-sm'/>
            </div>
            <div className='flex flex-row items-center mt-2 justify-between px-5'>
                <label className='font-primary'>City </label>
                <input 
                        type='text'
                        className='border w-[60%] border-primary rounded-sm'/>
            </div>
        
            <div className='flex flex-row items-center mt-2 justify-between px-5'>
                <label className='font-primary'>Zip Code</label>
                <input 
                        type='text'
                        className='border w-[60%] border-primary rounded-sm'/>
            </div>
        </div>

        <div className='pl-5'>
            <h1 className='font-primary font-extrabold mt-2 text-lg'>Contacts</h1>
            <div className='flex flex-row items-center justify-between px-5'>
                <label className='font-primary'>Phone No.</label>
                <input 
                        type='text'
                        className='border w-[60%] border-primary rounded-sm'/>
            </div>
            <div className='flex flex-row items-center mt-2 justify-between px-5'>
                <label className='font-primary'>Email</label>
                <input 
                        type='text'
                        className='border w-[60%] border-primary rounded-sm'/>
            </div>
            <div>
            <h1 className='font-primary font-extrabold text-md'>ID Info</h1>
            <div className='flex flex-row items-center justify-between px-5'>
                <label className='font-primary'>ID Type</label>
                <select className='border w-[60%] border-primary rounded-sm'>
                    <option value="UMID">UMID</option> 
                    <option value="PhilHealth">Phil Health</option> 
                    <option value="SSS">SSS</option> 
                    <option value="NationalID">National ID</option> 
                </select> 
            </div>
            <div className='flex flex-row items-center mt-2 justify-between px-5'>
                <label className='font-primary'>ID No.</label>
                <input 
                        type='text'
                        className='border w-[60%] border-primary rounded-sm'/>
            </div>
            </div>   
        </div>

    </div>

    <div className='grid grid-rows-3 border col-span-1'>

        <div className='px-5'>
        <h1 className='font-primary font-extrabold mt-2 text-lg'>Stay Information</h1>
            <div className='flex flex-row items-center mt-2 justify-between px-5'>
                <label className='font-primary'>Date In / Time</label>
                    <div className='flex gap-1 justify-center'>
                        <input 
                            type='date'
                            className='border w-[100%] border-primary rounded-sm'/>
                        <input 
                            type='time'
                            className='border border-primary rounded-sm'/>
                    </div>
            </div>
            <div className='flex flex-row items-center mt-2 justify-between px-5'>
                <label className='font-primary'>Date Out / Time</label>
                        <div className='flex gap-1 justify-center'>
                            <input 
                                type='date'
                                className='border w-[100%] border-primary rounded-sm'/>
                            <input 
                                type='time'
                                className='border border-primary rounded-sm'/>
                        </div>
            </div>
            <div className='flex flex-row items-center mt-2 justify-between px-5'>
                <label className='font-primary'>Total Days & Hrs </label>
                <div className='flex gap-1 justify-center'>
                    <label className='font-primary'>Day/s</label>
                            <input 
                                type='text'
                                className='border w-[2rem] border-primary rounded-sm'/>
                    <label>Hour/s</label>
                            <input 
                                type='text'
                                className='border w-[3rem] mr-auto border-primary rounded-sm'/>
                        </div>
            </div>
        </div>
        <div className='px-5'>
        <h1 className='font-primary font-extrabold mt-2 text-lg'>Room Information</h1>
            <div className='flex flex-row items-center mt-2 gap-5 justify-between px-5'>
                <label className='font-primary w-[50%]'>Room Type / No.</label>
                    <div className='flex gap-1 justify-end'>
                    <input
                            type='text'
                            className='border w-[60%] border-primary rounded-sm'
                            value={roomInfo.type}
                            />
                        <input 
                            type='text'
                            className='border w-[20%] border-primary rounded-sm' value={roomInfo.room}/>
                    </div>
            </div>
            <div className='flex flex-row items-center mt-2 justify-between px-5'>
                <label className='font-primary w-[100%]'>Room Capacity</label>
                        <input 
                            type='text'
                            className='border w-[100%] border-primary rounded-sm'/>
            </div>
            <div className='flex flex-row items-center mt-2 justify-between px-5'>
                <label className='font-primary w-[100%]'>Status</label>
                        <input 
                            type='text'
                            className='border w-[100%] border-primary rounded-sm' value={roomInfo.status}/>
            </div>
        </div>
        <div className='px-5'>
            <h1 className='font-primary font-extrabold mt-2 text-lg'>Guest Request</h1>
            <div className='w-full h-auto px-5'>
                <textarea className='border border-primary w-[100%] h-[9rem]'></textarea>
            </div>
        </div> 

    </div>

    <div className='grid grid-rows-4 border col-span-1'>
        
        <div className='row-span-1'>
            <h1 className='font-primary font-extrabold mt-2 text-lg'>Guest Count</h1>
            <div className='flex px-5'>
                <div className='flex flex-cols gap-5'>
                    <label>No. Adult</label>
                    <input 
                            type='text'
                            className='border w-[50%] border-primary rounded-sm'/>
                </div>
                <div className='flex flex-cols gap-5'>
                    <label>No. Children</label>
                    <input 
                            type='text'
                            className='border w-[50%] border-primary rounded-sm'/>
                </div>
            </div>
        </div>
        <div className='row-span-2 px-5'>
            <h1 className='font-primary font-extrabold mt-2 text-lg'>Extras</h1>
            <div className='grid grid-cols-2 px-5'>
                <div className='flex  flex-col gap-3 px-[2rem]'>
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
        <div className='row-span-1 px-[3rem] py-1'>
            <div className='flex flex-col justify-center items-center bg-primary w-full h-full rounded-xl'>
                <h1 className='text-white text-2xl font-bold'>Check In Process</h1>
                <div className='flex gap-5 mt-2'>
                    <Link to={'/check-in'} 
                            className='bg-red-500 rounded-xl text-white p-2 px-5 hover:bg-red-700'>Cancel</Link>
                    <button className='bg-green-500 rounded-xl text-white p-2 px-5 hover:bg-green-700'>Confirm</button>
                </div>   
            </div>
        </div>
    </div>
</div>
</div>
</div>
);
};
