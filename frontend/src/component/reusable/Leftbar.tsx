import React, { useState } from 'react'
import {AiFillDashboard} from 'react-icons/ai'
import { RiReservedFill } from 'react-icons/ri'
import { FaHouseUser } from 'react-icons/fa'
import { BsFillHouseCheckFill } from 'react-icons/bs'
import { MdOutlinePayment } from 'react-icons/md'
import { BiSolidReport, BiSolidUserCircle } from 'react-icons/bi'
import { IoMdSettings,IoMdNotifications } from 'react-icons/io'
import { NavLink } from 'react-router-dom'
export const Leftbar:React.FC = () => {
    const [active, setActive] = useState<boolean>(false);
    // const [viewAccount, setViewAccount] = useState<boolean>(true);

    const toggleMenu = () =>{
      setActive(!active);
    }

    // const toggleAccount = () => {
    //     setViewAccount(!viewAccount);
    // }

  return (
    <div className="z-[50]">
 


    <div className='h-14 max-w-auto flex justify-end px-5 shadow shadow-gray-300 gap-3 backdrop-blur-sm'>
    <button>
        <IoMdNotifications 
            className="text-3xl text-primary hover:text-secondary transition-all delay-50 ease-in-out"
        />
    </button>
    <button>
        <BiSolidUserCircle 
            className="text-3xl text-primary hover:text-secondary transition-all delay-50 ease-in-out"
            // onClick={toggleAccount}
        />
    </button>
    <button className='text-black'>
        <svg xmlns="http://www.w3.org/2000/svg"
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth="1.5" 
            stroke="currentColor"
            onClick={toggleMenu} 
            className={`w-[2rem] h-[2rem] hover:text-primary transition-all delay-50 ease-in-out ${active ? 'text-primary':'text-secondary'}`}>
          <path strokeLinejoin="round" 
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
        </svg>
    </button>
    
</div>
    <div className={`fixed top-0 left-0 overflow-hidden h-screen ${active ? 'w-[20rem]': 'w-0'} bg-primary transition-all duration-300 z-50`}>
      <div className='flex items-center gap-5 justify-center h-[10rem] m-5 overflow-hidden'>
      </div>
        <div className='flex flex-col m-5 gap-3'>

        <NavLink to={'/dashboard'} 
                className={({isPending, isActive})=> isPending ? 'pl-3 flex items-center gap-3 border border-secondary rounded-md text-white py-3 font-primary transition font-bold delay-100 shadow shadow-blue-900 hover:bg-secondary hover:text-textHover': 
                isActive ? 'pl-3 flex items-center gap-3 border border-secondary rounded-md text-white py-3 font-primary transition font-bold delay-100 shadow shadow-blue-900 bg-secondary text-textHover' : 'pl-3 flex items-center gap-3 border border-secondary rounded-md text-white py-3 font-primary transition font-bold delay-100 shadow shadow-blue-900 hover:bg-secondary hover:text-textHover'}>
                    <AiFillDashboard className="text-2xl"/>
                    Dashboard
            </NavLink>

        <NavLink to={''} className='pl-3 flex items-center gap-3 border border-secondary rounded-md text-white py-3 font-primary transition font-bold delay-100 shadow shadow-blue-900 hover:bg-secondary hover:text-textHover'>
            <RiReservedFill className="text-2xl"/>
            Reservation
            </NavLink>

        <NavLink to={''} className='pl-3 flex items-center gap-3 border border-secondary rounded-md text-white py-3 font-primary transition font-bold delay-100 shadow shadow-blue-900 hover:bg-secondary hover:text-textHover'>
            <FaHouseUser className="text-2xl"/>
            Guest Profiles
            </NavLink>

        <NavLink 
            to={'/check-in'} 
            className={({isPending, isActive})=> isPending ? 'pl-3 flex items-center gap-3 border border-secondary rounded-md text-white py-3 font-primary transition font-bold delay-100 shadow shadow-blue-900 hover:bg-secondary hover:text-textHover': 
            isActive ? 'pl-3 flex items-center gap-3 border border-secondary rounded-md text-white py-3 font-primary transition font-bold delay-100 shadow shadow-blue-900 bg-secondary text-textHover' : 'pl-3 flex items-center gap-3 border border-secondary rounded-md text-white py-3 font-primary transition font-bold delay-100 shadow shadow-blue-900 hover:bg-secondary hover:text-textHover'}>
                <BsFillHouseCheckFill className="text-2xl"/>
                Check-in
        </NavLink>

          <NavLink to={''} className='pl-3 flex items-center gap-3 border border-secondary rounded-md text-white py-3 font-primary transition font-bold delay-100 shadow shadow-blue-900 hover:bg-secondary hover:text-textHover'>
            <MdOutlinePayment className="text-2xl" />
            Billing and Payment
            </NavLink>
          <NavLink to={''} className='pl-3 flex items-center gap-3 border border-secondary rounded-md text-white py-3 font-primary transition font-bold delay-100 shadow shadow-blue-900 hover:bg-secondary hover:text-textHover'>
            <BiSolidReport className="text-2xl"/>
            Reports
            </NavLink>
          <NavLink to={''} className='pl-3 flex items-center gap-3 border border-secondary rounded-md text-white py-3 font-primary font-bold transition delay-100 shadow shadow-blue-900 hover:bg-secondary hover:text-textHover'>
            <IoMdSettings className="text-2xl"/>
            Configurations
            </NavLink>
        </div>
    </div>
    
{/* Toggle Account */}
{/* Toggle Account */}
{/* <div className={`${viewAccount ? 'border border-gray-300 p-3 shadow-lg shadow-spread w-[10rem] ml-auto h-auto ' : 'hidden'}`}>
    <div className='flex flex-col gap-5 mt-3'>
        <h1>Mark Louis A.</h1>
        <h1>Sign Out</h1>
    </div>
</div> */}


    </div>
  )
}
