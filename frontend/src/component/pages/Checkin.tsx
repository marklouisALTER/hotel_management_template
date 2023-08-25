import React, { useState } from 'react';
import Card from '../layout/Card';
import fakeData from '../FakeData';

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

  return (
    <div className='w-screen border border-black grid grid-cols-4 gap-5 h-full inset-0 absolute px-[3rem] py-[4rem] z-[-3]'>
      <div className='col-span-3 shadow-2xl shadow-spread'>
        <div className='grid h-full grid-row-2'>
          <div className='row-span-1 flex bg-blue-900'>
            {floors.map((floor) => (
              <button
                key={floor}
                onClick={() => setSelectedFloor(floor)}
                className={`bg-blue-900 text-white flex items-center justify-center px-[2rem] w-[10rem] h-full font-primary text-lg font-bold ${
                  selectedFloor === floor ? 'bg-primary' : ''
                }`}
              >
                <p className=''>{floor}</p>
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
      <div className='col-span-1 shadow-2xl shadow-spread shadow-black-900 border rounded-xl border-gray-300'></div>
    </div>
  );
};
