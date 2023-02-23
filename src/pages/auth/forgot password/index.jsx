import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import logo from '../../../assets/logo-blanja.png'
import Button from '../../../component/base/Button'
import Input from '../../../component/base/Input'

const ForgotPassword = () => {

    const navigate = useNavigate()
    const [email, setEmail] = useState('')

    const handleVerification = async(e) => {
        e.preventDefault()
        try {
            await axios({
                method: 'PUT',
                url: `${process.env.REACT_APP_API}user/forgotpassword`,
                data: {
                    email,
                }
            })
            Swal.fire({
                icon: 'warning',
                title: 'Send verication success',
                text: 'Check your email to get OTP'
              })
              navigate(`/otp/${email}`)
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!'
              })
        }
    }

  return (
    <div className='py-10 grid h-screen' id='font-custom'>
        <div className="wrapper w-3/4 h-max my-auto lg:w-1/2 mx-auto">
            <img src={logo} alt="logo" className='mx-auto' />
            <p className='text-md lg:text-xl font-bold my-10'>Insert Your Email.</p>
            <form onSubmit={handleVerification} className='w-full lg:w-1/2 mx-auto'>
                <Input name='email' type='text' value={email} onChange={(e)=>setEmail(e.target.value)} className='py-2 px-4 border-2 w-3/4 outline-none mb-4 font-medium' placeholder='Insert email' />
                <Button type='submit' name='Verification' className='py-2 bg-red-600 rounded-xl text-md text-white w-1/2 font-semibold my-5' />
            </form>
        </div>
    </div>
  )
}

export default ForgotPassword