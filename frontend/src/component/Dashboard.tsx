import React, { useState } from 'react'

export const Dashboard:React.FC = () => {


  return (
    <div className="w-screen h-screen absolute inset-0 z-[-3] bg-gray-200 px-[3rem] overflow-x-hidden py-[5rem] scroll-smooth">
      <div className='w-full h-screen grid grid-cols-3 gap-5'>
          <div className='col-span-2 grid grid-rows-3 gap-5'>
              <div className='row-span-1 grid grid-cols-3 gap-5'>
                  <div className="bg-white rounded-xl shadow hover:shadow-lg spread-xl"></div>
                  <div className="bg-white rounded-xl shadow hover:shadow-lg spread-xl"></div>
                  <div className="bg-white rounded-xl shadow hover:shadow-lg spread-xl"></div>
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
