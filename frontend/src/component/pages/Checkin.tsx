import React, { useState } from 'react';
import Card from '../layout/Card';
import fakeData from '../FakeData';
import { FaBuilding } from 'react-icons/fa'
import { FaBed } from 'react-icons/fa'
import { VscPerson } from 'react-icons/vsc'
import { Chart as ChartJS, ArcElement, Legend } from 'chart.js'

ChartJS.register(
  ArcElement,
  Legend
)
import { Doughnut } from 'react-chartjs-2'


interface Room {
  id: number;
  room: number;
  status: string;
  type: string;
}

interface FakeData {
  [key: string]: {
    [key: string]: Room;
  };
}

export const Checkin: React.FC = () => {
  
  const floors = Object.keys(fakeData);
  const [selectedFloor, setSelectedFloor] = useState<string>(floors[0]);
  const data = fakeData[selectedFloor as keyof typeof fakeData];
  const rooms = Object.values(data) as Room[]; 

  const rows: JSX.Element[] = [];

  for (let i = 0; i < rooms.length; i += 5) {
    const rowRooms = rooms.slice(i, i + 5);
    const row = (
      <div key={`row-${i}`} className='grid grid-cols-5 gap-5 mt-2'>
        {rowRooms.map((room) => (
          <Card key={room.id} room={room} />
        ))}
      </div>
    );
    rows.push(row);
  }

  const dataDoughnut = {
    datasets: [{
      label: 'Poll',
      data: [1, 6],
      backgroundColor: ['green', '#3852ab'],
      borderColor: ['green', '#3852ab']
    }]
  }
  const option ={

  }

  return (
    <div className='w-screen grid grid-cols-4 gap-5 h-full inset-0 absolute px-[3rem] py-[4rem] z-[-3] overflow-hidden'>
      <div className='col-span-3 shadow-2xl shadow-spread'>
        <div className='grid h-full grid-row-2'>
          <div className='row-span-1 flex bg-blue-900'>
            {floors.map((floor) => (
              <button
                key={floor}
                onClick={() => setSelectedFloor(floor)}
                className={`bg-blue-900 text-white flex items-center justify-center px-[2rem] w-[11rem] h-full font-primary text-lg font-bold ${
                  selectedFloor === floor ? 'bg-primary' : ''
                }`}
              >
                <p className='flex items-center gap-2 p-2'><FaBuilding/>{floor}</p>
              </button>
            ))}
          </div>
          {/* Adjust the size of the grid rows into m */}
          <div className='row-span-2 m-5 border'>
            <div className='flex justify-end m-2'>
              <button className='bg-primary px-[2rem] py-2 text-lg text-white rounded-md'>Add Floor</button>
            </div>
            <div className='grid grid-rows-4 p-5 h-full'>{rows}</div>
          </div>
        </div>
      </div>
      <div className='col-span-1 grid grid-rows-3 shadow-2xl shadow-spread shadow-black-900 rounded-xl'>
            <div className='border-b-2 border-gray-300'>
            <h2 className='font-bold font-primary text-xl py-2 px-3 text-white w-full bg-primary'>Overview</h2>
              <div className='flex items-center gap-5 px-5'>
                    <div className='w-[8rem] h-auto'>
                            <Doughnut
                                data ={dataDoughnut}
                                options = {option}></Doughnut>
                    </div>
                    <div className='flex flex-col gap-2 w-full'>
                        <div className='flex items-center gap-3'><FaBed className="text-green-900"/>
                              <h1 className='text-green-900 font-bold font-primary'>Occupied</h1>
                        </div>
                        <div className='flex items-center gap-3'><FaBed className="text-primary"/>
                              <h1 className='text-primary font-bold font-primary'>Unoccupied</h1>
                        </div>
                    </div>
              </div>
              <div className='flex justify-end items-center gap-2 pr-4'>
                  <h1 className='font-bold text-primary'>Total Customer :</h1>
                  {/* Change this into jsx if you want to render this and use .map */}
                  <div className='text-md font-primary font-bold'>20</div>
                  <VscPerson className='text-xl bg-primary text-white rounded-md'/>
              </div>
            </div>
            <div className='row-span-2'>
                <h2 className='font-bold font-primary text-xl py-2 px-3 text-white w-full bg-primary'>Filter</h2>
                <div className='flex items-center px-5 pt-5 gap-2'>
                    <div className='flex gap-5 items-center pl-3 pt-2'>
                        <input type="checkbox" className="w-[1.5rem] border border-primary h-[1.5rem] "/>
                              <label className='text-primary text-xl'>Available</label>
                    </div>
                    <div className='flex gap-5 items-center pl-3 pt-2'>
                        <input type="checkbox" className="w-[1.5rem] border border-primary h-[1.5rem] "/>
                              <label className='text-primary text-xl'>Occupied</label>
                    </div>
                </div>
                <div className=' grid grid-cols-2 pt-5 px-5'>
                      <div className='flex flex-col pl-1'>
                  <div className='flex gap-2 items-center pt-5'>
                    <input type="checkbox" className="w-[1.2rem] border border-primary h-[1.2rem]"/>
                          <label className='text-primary text-md'>Standard Room</label>
                  </div>
                    <div className='pl-[1.4rem] text-xs'>
                        <ul>
                            <li className='list-disc'>Room size: 22 - 33 sq. m</li>
                            <li className='list-disc'>Occupancy: 1 - 2 Adults</li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-col pl-1'>
                  <div className='flex gap-2 items-center pt-5'>
                    <input type="checkbox" className="w-[1.2rem] border border-primary h-[1.2rem]"/>
                          <label className='text-primary text-md'>Superior Room</label>
                  </div>
                    <div className='pl-[1.4rem] text-xs'>
                        <ul>
                            <li className='list-disc'>Room size: 28 - 37 sq. m</li>
                            <li className='list-disc'>Occupancy: 1 - 2 Adults</li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-col pl-1'>
                  <div className='flex gap-2 items-center pt-5'>
                    <input type="checkbox" className="w-[1.2rem] border border-primary h-[1.2rem]"/>
                          <label className='text-primary text-md'>Deluxe Room</label>
                  </div>
                    <div className='pl-[1.4rem] text-xs'>
                        <ul>
                            <li className='list-disc'>Room size: 33 - 42 sq. m</li>
                            <li className='list-disc'>Occupancy: 1 - 3 Adults</li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-col pl-1'>
                  <div className='flex gap-2 items-center pt-5'>
                    <input type="checkbox" className="w-[1.2rem] border border-primary h-[1.2rem]"/>
                          <label className='text-primary text-md'>Family Suite</label>
                  </div>
                    <div className='pl-[1.4rem] text-xs'>
                        <ul>
                            <li className='list-disc'>Room size: 65 - 84 sq. m</li>
                            <li className='list-disc'>Occupancy: 2 - 4 Adults</li>
                        </ul>
                    </div>
                </div>
                </div>
            </div>
      </div>
    </div>
  );
};
