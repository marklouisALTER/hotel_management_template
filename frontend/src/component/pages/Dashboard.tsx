import React from 'react'
import { FaBed } from 'react-icons/fa'
import { BsViewList } from 'react-icons/bs'
import { Chart as ChartJS, ArcElement, Legend } from 'chart.js'
ChartJS.register(
  ArcElement,
  Legend
)
import { Doughnut } from 'react-chartjs-2'

export const Dashboard:React.FC = () => {
  const data = {
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
    <div className="w-screen h-screen absolute inset-0 z-[-3] bg-gray-200 px-[3rem] overflow-x-hidden py-[5rem] scroll-smooth">
      <div className='w-full h-screen grid grid-cols-3 gap-5'>
          <div className='col-span-2 grid grid-rows-3 gap-5'>
            <div className='grid grid-row-4'>
            <div className='bg-blue-900 text-white flex items-center font-primary px-2 text-3xl font-bold'>Overview</div>
              <div className='row-span-4 grid grid-cols-3 gap-5'>
                  <div className="bg-white rounded-b-xl shadow hover:shadow-lg spread-xl p-3">
                      <h1 className='font-primary text-xl'>Available Rooms</h1>
                      <div className='flex gap-5 items-center p-1'>
                        <div className='w-[8rem] h-auto'>
                          <Doughnut
                              data ={data}
                              options = {option}></Doughnut>
                      </div>
                      <div className='flex flex-col gap-2 w-full'>
                      <div className='flex items-center gap-3'><FaBed className="text-green-900"/>
                            <h1 className='text-green-900 font-bold font-primary'>Occupied</h1>
                            </div>
                      <div className='flex items-center gap-3'><FaBed className="text-primary"/>
                      <h1 className='text-primary font-bold font-primary'>Unoccupied</h1>
                          </div>
                           <button className='bg-primary px-5 py-2 text-white rounded-md font-primary flex items-center gap-2'><BsViewList/>View All</button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-b-xl shadow hover:shadow-lg spread-xl"></div>
                  <div className="bg-white rounded-b-xl shadow hover:shadow-lg spread-xl"></div>
              </div>
              </div>
              <div className='bg-white row-span-2 rounded-xl shadow hover:shadow-lg spread-xl'>
              </div>
          </div>
          <div className='bg-white col-span-1 rounded-xl shadow hover:shadow-lg spread-xl'>

          </div>
      </div>
    </div>

  )
}
