import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import logo from '../../../assets/logo-blanja.png'
import Button from '../../../component/base/Button'
import Input from '../../../component/base/Input'

const OTP = () => {

    const navigate = useNavigate()
    const {email} = useParams()
    const [otp, setOtp] = useState('')
    console.log(otp);

    const handleVerification = async(e) => {
        e.preventDefault()
        try {
            await axios({
                method: 'PUT',
                url: `${process.env.REACT_APP_API}user/verify/${email}`,
                data: {otp}
            })
            Swal.fire({
                icon: 'success',
                title: 'Register success',
                text: 'Check your email to get OTP'
              })
            navigate('/login')
            } catch (error) {
            Swal.fire({
              icon: 'error',
              title: 'Verification failed',
              text: error
            })
            
        }
    }

  return (
    <div className='py-10 grid h-screen' id='font-custom'>
        <div className="wrapper w-3/4 h-max my-auto lg:w-1/2 mx-auto">
            <img src={logo} alt="logo" className='mx-auto' />
            <p className='text-md lg:text-xl font-bold my-10'>Insert OTP code.</p>
            <form onSubmit={handleVerification} className='w-full lg:w-1/2 mx-auto'>
                <Input name='OTP' type='text' value={otp} onChange={(e)=>setOtp(e.target.value)} maxlength={6} className='py-2 px-4 border-2 w-3/4 outline-none mb-4 text-center font-bold' placeholder='Insert your otp' />
                <Button type='submit' name='Verification' className='py-2 bg-red-600 rounded-xl text-md text-white w-1/2 font-semibold my-5' />
            </form>
        </div>
    </div>
  )
}

export default OTP