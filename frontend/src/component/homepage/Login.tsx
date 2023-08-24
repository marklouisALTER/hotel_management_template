import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useAuth } from '../Auth/Auth'
import { useNavigate } from 'react-router-dom'

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
    <div className='w-screen h-screen flex items-center justify-center inset-0 absolute border border-red-500'>
        <div className='h-[40rem] w-[80rem] border border-blue-500 grid'>
        <form onSubmit={loginHandler}>
        <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
         <button type="submit">Submit</button>
        </form>

        </div>
    </div>
  )
}
