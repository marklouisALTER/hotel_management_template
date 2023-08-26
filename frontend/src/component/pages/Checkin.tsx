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
      <div className='col-span-1 grid grid-rows-3 shadow-2xl shadow-spread shadow-black-900 rounded-xl p-2'>
            <div className='px-5 border-b-2 border-gray-300'>
              <h2 className='font-bold font-primary text-xl py-2'>Overview</h2>
              <div className='flex items-center gap-5'>
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
              <div className='flex justify-end items-center gap-2'>
                  <h1 className='font-bold text-primary'>Total Customer :</h1>
                  {/* Change this into jsx if you want to render this and use .map */}
                  <div className='text-md font-primary font-bold'>20</div>
                  <VscPerson className='text-xl bg-primary text-white rounded-md'/>
              </div>
            </div>
            <div className=''>

            </div>
            <div className='border border-blue-300'>

            </div>
      </div>
    </div>
  );
};
