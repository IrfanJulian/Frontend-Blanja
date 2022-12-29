import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/logo-blanja.png'
import ButtonAuth from '../../../components/base/button-auth'

const Register = () => {
  return (
    <div>
        <div>
            <div className="container mx-auto mt-[5rem]">
                <img src={logo} className='mx-auto' alt="logo" />
                <h2 className='font-bold my-[2rem] text-lg'>Please Sign up here.</h2>
                <ButtonAuth />
                <form onSubmit={''} className='mt-[3rem] grid'>
                    <div className='w-1/4 mx-auto'>
                        <input type="text" placeholder='name . . .' className='border border-gray-400 text-gray-500 mx-auto outline-none w-full rounded-md py-3 px-5 mb-5 font-semibold'  />
                        <input type="email" placeholder='Email . . .' className='border border-gray-400 text-gray-500 mx-auto outline-none w-full rounded-md py-3 px-5 mb-5 font-semibold'  />
                        <input type="text" placeholder='Phone number . . .' className='border border-gray-400 text-gray-500 mx-auto outline-none w-full rounded-md py-3 px-5 mb-5 font-semibold'  />
                        <input type="text" placeholder='Store name . . .' className='border border-gray-400 text-gray-500 mx-auto outline-none w-full rounded-md py-3 px-5 mb-2 font-semibold'  />
                        <input type="password" placeholder='Password . . .' className='border border-gray-400 text-gray-500 mx-auto outline-none w-full rounded-md my-3 py-3 px-5 mb-5 font-semibold'  />
                        <Link to={'/'}>
                            <p className='text-[#DB3022] font-semibold text-end'>Forgot Password</p>
                        </Link>
                        <button className='w-full py-3 bg-[#DB3022] rounded-full mt-7 text-white font-semibold'>Login</button>
                    </div>
                </form>
                <p className='text-md mt-7'>Don't have Blanja account?<Link to={'/login'}><span className='text-[#DB3022] ml-2 font-semibold'>Login</span></Link></p>
            </div>
        </div>
    </div>
  )
}

export default Register