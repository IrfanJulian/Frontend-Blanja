import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../../assets/logo-blanja.png'
import ButtonAuth from '../../../components/base/button-auth'
import Swal from 'sweetalert2'

const Login = () => {

    const navigate = useNavigate()

    const [login, setLogin] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
    }

    const handleLogin = async(e) => {
        e.preventDefault() 
            const res = await axios({
                method: 'POST',
                url:`${process.env.REACT_APP_API}/user/login`,
                data: login
            })
            const dataUser = res.data.data
            localStorage.setItem('id', dataUser.id)
            localStorage.setItem('token', dataUser.token)
            localStorage.setItem('role', dataUser.role)
            localStorage.setItem('photo', dataUser.photo)
            Swal.fire({
                icon: 'success',
                title: 'Success...',
                text: 'Login Success'
              })
            navigate('/home')
    }

    
  return (
    <div>
        <div className="container mx-auto mt-[5rem]">
            <img src={logo} className='mx-auto' alt="logo" />
            <h2 className='font-bold my-[2rem] text-lg'>Please Login with your account.</h2>
            <ButtonAuth/>
            <form onSubmit={handleLogin} className='mt-[3rem] grid'>
                <div className='w-1/4 mx-auto'>
                    <input type="email" name='email' onChange={handleChange} value={login.email} placeholder='Email . . .' className='border border-gray-400 text-gray-500 mx-auto outline-none w-full rounded-md py-3 px-5 font-semibold'  />
                    <input type="password" name='password' onChange={handleChange} value={login.password} placeholder='Password . . .' className='border border-gray-400 text-gray-500 mx-auto outline-none w-full rounded-md my-3 py-3 px-5 mb-7 font-semibold'  />
                    <Link to={'/'}>
                        <p className='text-[#DB3022] font-semibold text-end'>Forgot Password</p>
                    </Link>
                    <button type='submit' className='w-full py-3 bg-[#DB3022] rounded-full mt-7 text-white font-semibold'>Login</button>
                </div>
            </form>
            <p className='text-md mt-7'>Don't have Blanja account?<Link to={'/register'}><span className='text-[#DB3022] ml-2 font-semibold'>Register</span></Link></p>
        </div>
    </div>
  )
}

export default Login