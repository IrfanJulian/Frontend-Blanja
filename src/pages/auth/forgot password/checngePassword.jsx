import React, { useState } from 'react'
import logo from '../../../assets/logo-blanja.png'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'

const ChangePassword = () => {

    const {email} = useParams()
    const navigate = useNavigate()
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [show, setShow] = useState(false)
    const [show2, setShow2] = useState(false)

    const handleVerification = async(e) => {
        e.preventDefault()
        if(password === password2){
            try {
                await axios({
                    method: 'PUT',
                    url: `${process.env.REACT_APP_API}user/changepassword/${email}`,
                    data: {
                        password,
                    }
                })
                Swal.fire({
                    icon: 'success',
                    title: 'Change Password Success'
                  })
                  navigate(`/login`)
            } catch (error) {
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!'
                  })
            }
        }else if(password.length < 8){
            Swal.fire({
                icon: 'error',
                title: 'Password min 8 character.'
              })
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Password does not match.'
            })
        }
    }

  return (
    <div className='py-10 grid h-screen' id='font-custom'>
        <div className="wrapper w-3/4 h-max my-auto lg:w-1/2 mx-auto">
            <img src={logo} alt="logo" className='mx-auto' />
            <p className='text-md lg:text-xl font-bold my-10'>Insert Password.</p>
            <div className='w-full lg:w-1/2 mx-auto'>
                <div className="flex h-max">
                    <input name='password' type={show === false ? `password` : 'text'} value={password} onChange={(e)=>setPassword(e.target.value)} className='py-2 px-4 border-t-2 border-b-2 border-l-2 w-full outline-none mb-4 font-medium' placeholder='Insert Password' />
                    <button onClick={()=> show ? setShow(false) : setShow(true)} className='h-max py-2 border-t-2 border-b-2 border-r-2 px-4 hover:opacity-70'>
                        {show === true ?
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                            </svg>
                        }
                    </button>
                </div>

                <div className="flex">
                    <input name='password2' type={show2 === false ? `password` : 'text'} value={password2} onChange={(e)=>setPassword2(e.target.value)} className='py-2 px-4 border-t-2 border-b-2 border-l-2 w-full outline-none mb-4 font-medium' placeholder='Insert Password' />
                    <button onClick={()=> show2 ? setShow2(false) : setShow2(true)} className='h-max py-2 border-t-2 border-b-2 border-r-2 px-4 hover:opacity-70'>
                        {show2 === true ?
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                            </svg>
                        }
                    </button>
                </div>
                <button onClick={handleVerification} className='font-medium text-white bg-red-600 rounded-md py-2 w-3/4 my-5 mx-auto'>Change Password</button>
            </div>
        </div>
    </div>
  )
}

export default ChangePassword