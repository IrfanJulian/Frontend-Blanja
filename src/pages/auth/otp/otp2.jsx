import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import logo from '../../../assets/logo-blanja.png'
import Button from '../../../component/base/Button'
import Input from '../../../component/base/Input'
import Loading from '../../../component/base/Loading'

const OTPForgotPassword = () => {

    const navigate = useNavigate()
    const {email} = useParams()
    const [otp, setOtp] = useState('')
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState()

    useEffect(()=>{
      const getData = async() => {
        try {
          const res = await axios({
            method: 'GET',
            url: `${process.env.REACT_APP_API}user/findEmail/${email}`
          })
          setData(res.data.data[0].otp)
        } catch (error) {
          console.log(error);
        }
      }
      getData()
    }, [email])

    const handleVerification = async(e) => {
      e.preventDefault()
      setLoading(true)
        if(data === otp){
          setLoading(false)
          Swal.fire({
                icon: 'success',
                title: 'Success validation',
                text: 'Set your password now.'
              })
            navigate(`/change-password/${email}`)
          }else{
          Swal.fire({
            icon: 'error',
            title: 'Verification failed',
            text: 'Wrong OTP'
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
            <div className='w-full lg:w-1/2 mx-auto'>
                <Input name='OTP' type='text' value={otp} onChange={(e)=>setOtp(e.target.value)} maxlength={6} className='py-2 px-4 border-2 w-3/4 outline-none mb-4 text-center font-bold' placeholder='Insert your otp' />
                <Button onClick={handleVerification} type='submit' name='Verification' className='py-2 bg-red-600 rounded-xl text-md text-white w-1/2 font-semibold my-5' />
            </div>
        </div>
    </div>
  )
}

export default OTPForgotPassword