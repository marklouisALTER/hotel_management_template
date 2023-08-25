import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useAuth } from '../Auth/Auth'
import { useNavigate } from 'react-router-dom'
import { FaUserAlt } from 'react-icons/fa'
import { MdKey } from 'react-icons/md'
import { Link } from 'react-router-dom'
import logo  from '../../assets/logo.png'
import { FaHotel } from 'react-icons/fa'
interface LoginResponse {
  user:string,
  access_token: string,
}

export const Login:React.FC = () => {
  const {login} = useAuth();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const loginHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/login', {
        email,
        password,
      });
      if (response.status === 200) { 
        console.log('Login successful');
        const responseData = response.data as LoginResponse;
        login({
          user: responseData.user,
          token: responseData.access_token
        });
        navigate('/dashboard');	
      }
    } catch (error) {

      console.error('Login failed', error);
    }
  };
  return (
    <div className='w-screen h-screen flex items-center justify-center z-[-2] inset-0 absolute overflow-hidden'>
        <div className=' grid grid-cols-1 lg:grid-cols-2 relative w-[70rem] h-[40rem] mx-auto'
              style={{ maxWidth: '100%', maxHeight: '100%' }}>
            <div className='hidden border lg:block col-span-1'>
                <div className='flex flex-col items-start'>
                  <h1 className='mr-auto font-primary flex items-center gap-2 text-4xl font-extrabold'>
                        <div className='w-[4rem] h-[4rem] bg-primary flex items-center justify-center rounded-full '>
                            <FaHotel  className="text-3xl text-white"/>
                        </div>
                      HOTEL MANAGEMENT
                  </h1>
                        <img className='object-cover w-[80%] my-[2rem] relative' 
                            src={logo} />
                </div>
            </div>
            {/* you can also mx-auto for smooth transition */}
            <div className='mx-[4rem] z-[4] px-auto md:mx-[10rem] lg:mx-[3rem] bg-primary grid grid-rows-4 shadow-xl shadow-gray-400 rounded-md my-[5rem]'>
                <div className='row-span-1 flex items-center justify-center'>
                <h1 className='font-primary text-white text-4xl font-bold'>LOGIN</h1>
                </div>
                <div className='px-[4rem] lg:px-[2rem] xl:px-[3rem] row-span-3'>

                  <form className='flex flex-col gap-5'
                        onSubmit={loginHandler}>

                      <div className='flex flex-col'>
                          <label className='font-primary mb-1 text-white flex items-center gap-2'>
                                <FaUserAlt/>
                                  Username
                          </label>
                          <input 
                                  className='p-3 rounded-md shadow-md shadow-gray-700 placeholder-slate-400
                                  focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-sky-500'
                                  type="email" 
                                  placeholder='Email' 
                                  value={email} 
                                  onChange={(e) => setEmail(e.target.value)}
                          />
                      </div>

                      <div className='flex flex-col'>
                          <label className='font-primary mb-1 text-white flex items-center gap-2'>
                                <MdKey className='text-xl'/>
                                  Password
                          </label>
                          <input  
                                  className='p-3 rounded-md shadow-md shadow-gray-700 placeholder-slate-400
                                  focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-sky-500'
                                  type="password" 
                                  placeholder='Password' 
                                  value={password} 
                                  onChange={(e) => setPassword(e.target.value)}
                          />
                      </div>

                      <div className='flex flex-col gap-2 md:flex-row justify-between'>
                          <div>
                              <input className='rounded-full'  
                                    type='checkbox' />
                              <label className='font-primary text-white ml-1'>Remember Me</label>
                          </div>
                          <div>
                              <Link to={'/forget-password'}
                                    className='text-black hover:text-white'>
                                    Forget Password?
                              </Link>
                          </div>
                      </div>
                      <button className='bg-white border border-primary mx-auto px-[2rem] transitiona-all delay-100 ease-in-out 
                              py-2 rounded-md font-primary shadow-md shadow-gray-700
                              hover:bg-primary hover:border-white hover:text-white'
                              type="submit">Submit</button>
                  </form>
                </div>
            </div>
        </div>
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1440 320"
            className='absolute z-[2] w-full h-full bottom-0 top-[43%] inset-0'
            >

                <path 
                      fill="#3852AB" 
                      fill-opacity="1" 
                      d="M0,224L40,213.3C80,203,160,181,240,192C320,203,400,245,
                      480,250.7C560,256,640,224,720,218.7C800,213,880,235,960,229.3C1040,
                      224,1120,192,1200,154.7C1280,117,1360,75,1400,53.3L1440,32L1440,320L1400,
                      320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,
                      720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z">
                </path>
        </svg>
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1440 320"
            className='absolute z-[1] w-full h-full bottom-0 top-[40%] inset-0'
            >

                <path 
                      fill="#89a2fe" 
                      fill-opacity="1" 
                      d="M0,224L40,213.3C80,203,160,181,240,192C320,203,400,245,
                      480,250.7C560,256,640,224,720,218.7C800,213,880,235,960,229.3C1040,
                      224,1120,192,1200,154.7C1280,117,1360,75,1400,53.3L1440,32L1440,320L1400,
                      320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,
                      720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z">
                </path>
        </svg>

    </div>
  )
}
