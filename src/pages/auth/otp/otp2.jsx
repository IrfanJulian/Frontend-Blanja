import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import logo from '../../../assets/logo-blanja.png'
import Button from '../../../component/base/Button'
import Input from '../../../component/base/Input'
import Loading from '../../../component/base/Loading'

const OTP = () => {

    const navigate = useNavigate()
    const {email} = useParams()
    const [otp, setOtp] = useState('')
    const [loading, setLoading] = useState(false)
    console.log(otp);

    const handleVerification = async(e) => {
        e.preventDefault()
        setLoading(true)
        try {
            await axios({
                method: 'PUT',
                url: `${process.env.REACT_APP_API}user/verify/${email}`,
                data: {otp}
            })
            setLoading(false)
            Swal.fire({
                icon: 'success',
                title: 'Success'
              })
            navigate('/login')
            } catch (error) {
            Swal.fire({
              icon: 'error',
              title: 'Verification failed',
              text: error
            })
            setLoading(false)
        }
    }

  return (
    <div className='py-10 grid h-screen' id='font-custom'>
        { loading === true ? 
        <div className="wrapper w-screen">
            <div className='wrapper absolute top-0 left-0 bg-black opacity-40 h-screen w-full'></div>
            <Loading className='my-auto mx-auto' />
        </div>
      : null }
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