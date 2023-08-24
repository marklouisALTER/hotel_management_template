import React from 'react'
import Card from '../layout/Card'
import fakeData from '../FakeData'

export const Checkin:React.FC = () => {
    // console.log(fakeData)
    // const data = fakeData; 
    // const fakeDatas = data.map((items)=>{
    //   {...items}
    // })
    
    const data = fakeData['floor1'];
    const rooms = Object.values(data);
  
    const rows = [];
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
      // if (i + 5 < rooms.length) {
      //   rows.push(<div key={`divider-${i}`} className='row-span-1 border border-red-300'></div>);
      // }
    }
  return (
    <div className='w-screen border border-black grid grid-cols-4 gap-5 h-full inset-0 absolute px-[3rem] py-[4rem] z-[-3]'>
        <div className='col-span-3'>
            <div className='grid h-full grid-row-4'>
                <div className='row-span-1 bg-blue-400'>
                {/* <div className='bg-blue-900 py-2 text-white flex items-center font-primary px-2 text-3xl font-bold'>Overview</div> */}
                    <div className='grid grid-cols-3 h-full p-5 gap-5 border border-black'>
                        <div className='border border-blue-300'></div>
                        <div className='border border-blue-300'></div>
                        <div className='border border-blue-300'></div>
                    </div>
                </div>
                <div className='row-span-3'>
                    <div className='grid grid-rows-5 p-5 h-full'>
                        {rows}
                    </div>
                </div>
            </div>
        </div>
        <div className='col-span-1 shadow-2xl shadow-spread shadow-black-900 border rounded-xl border-gray-300'>

        </div>
    </div>
  )
}
