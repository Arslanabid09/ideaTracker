import React, { useState } from 'react'
import {useUser} from './context/context'
import { Link } from 'react-router-dom';
const Login = () => {
    const user = useUser();
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
  return (
    <section className='flex flex-col w-96 ml-[40rem] 
    mt-32 items-center bg-gray-100 p-8 rounded-lg shadow-md'>
    <h1 className='font-bold text-3xl mb-6 text-gray-800'>Login</h1>
    <form className='flex flex-col  w-full max-w-md' 
        onSubmit={async(e)=>{
            e.preventDefault();
        }}
    >
        <label htmlFor="userEmail" className='text-lg font-medium text-gray-700 mb-2'>Enter Your Email</label>
        <input 
            type="email" 
            placeholder='example@example.com'
            value={email} 
            onChange={(e)=>setEmail(e.target.value)}
            className='w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500'
        />
        <label htmlFor="userPassword" className='text-lg font-medium text-gray-700 mb-2'>Enter Your Password</label>
        <input 
            type="password" 
            id="userPassword" 
            placeholder='••••••••'
            value={password} 
            onChange={(e)=>setPassword(e.target.value)}
            className='w-full p-2 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500'
        />
        <button 
            type='submit'
            onClick={()=>user.Login(email,password)
                
            }
            className='w-full py-3 bg-yellow-500 text-white font-bold rounded-lg shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500'
        >
            Login
        </button>
        <p>No Account? <Link to="/register" className='text-yellow-500'>Register</Link></p>
    </form>
</section>

  )
}

export default Login