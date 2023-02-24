import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import logo from '../../../assets/logo-blanja.png'
import Button from '../../../component/base/Button'
import Input from '../../../component/base/Input'
import Loading from '../../../component/base/Loading'

const ForgotPassword = () => {

    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)

    const handleVerification = async(e) => {
        e.preventDefault()
        setLoading(true)
        try {
            await axios({
                method: 'PUT',
                url: `${process.env.REACT_APP_API}user/checkemail/${email}`
            })
            setLoading(false)
            Swal.fire({
                icon: 'warning',
                title: 'Check email to get OTP code.',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes'
            }).then((result) => {
                if (result.isConfirmed) {
                  navigate(`/otp-forgot-password/${email}`)
                }
              })
        } catch (error) {
            setLoading(false)
            Swal.fire({
                icon: 'error',
                title: 'Email does not exist!'
            })
            
        }
    }

  return (
    <div className='py-10 grid h-screen' id='font-custom'>
        { loading ?
            <div className="absolute top-0 left-0">
                <Loading />
            </div>
        :
            null
        }
        <div className="wrapper w-3/4 h-max my-auto lg:w-1/2 mx-auto">
            <img src={logo} alt="logo" className='mx-auto' />
            <p className='text-md lg:text-xl font-bold my-10'>Insert Your Email.</p>
            <form onSubmit={handleVerification} className='w-full lg:w-1/2 mx-auto'>
                <Input name='email' type='text' value={email} onChange={(e)=>setEmail(e.target.value)} className='py-2 px-4 border-2 w-3/4 outline-none mb-4 font-medium' placeholder='Insert email' />
                <Button type='submit' name='Send OTP' className='py-2 bg-red-600 rounded-xl text-md text-white w-1/2 font-semibold my-5' />
            </form>
        </div>
    </div>
  )
}

export default ForgotPassword