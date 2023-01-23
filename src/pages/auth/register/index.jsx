import axios from 'axios'
import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import logo from '../../../assets/logo-blanja.png'
import ButtonAuth from '../../../components/base/button-auth'

const Register = () => {

    const navigate = useNavigate()
    const [roles, setRoles] = useState('')
    const [registerSeller, setRegisterSeller] = useState({
        name: '',
        email: '',
        phone_number: '',
        store_name: '',
        password: '',
        role: 'seller'
    })
    
    const handleChangeSeller = (e) => {
        setRegisterSeller({
            ...registerSeller,
            [e.target.name]:e.target.value
        })
    }

    const [register, setRegister] = useState({
        name: '',
        email: '',
        password: '',
        role: 'customer'
    })
     

    const handleChange = (e) => {
        setRegister({
            ...register,
            [e.target.name]:e.target.value
        })
    }

    const handleRegisterSeller = async(e) => {
        e.preventDefault()
        try {
            await axios({
                method: 'POST',
                url: `${process.env.REACT_APP_API}/user/register`,
                data: registerSeller
            })
            Swal.fire({
                icon: 'success',
                title: 'Success...',
                text: 'Register Success',
              })
            navigate('/login')
        } catch (error) {
            console.log(error);
        }
    }

    const handleRegister = async(e) => {
        e.preventDefault()
        try {
            await axios({
                method: 'POST',
                url: `${process.env.REACT_APP_API}/user/register`,
                data: register
            })
            Swal.fire({
                icon: 'success',
                title: 'Success...',
                text: 'Register Success',
              })
            navigate('/login')
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div>
        <div>
            <div className="container mx-auto mt-[5rem]">
                <img src={logo} className='mx-auto' alt="logo" />
                <h2 className='font-bold my-[2rem] text-lg'>Please Sign up here.</h2>
                <ButtonAuth on1={()=>setRoles('customer')} on2={()=>setRoles('seller')} />
                {roles === 'seller' ?
                <form onSubmit={handleRegisterSeller} className='mt-[3rem] grid'>
                    <div className='w-1/4 mx-auto'>
                        <input type="text" name='name' value={registerSeller.name} onChange={handleChangeSeller} placeholder='Name . . .' className='border border-gray-400 text-gray-500 mx-auto outline-none w-full rounded-md py-3 px-5 mb-5 font-semibold' />
                        <input type="email" name='email' value={registerSeller.email} onChange={handleChangeSeller} placeholder='Email . . .' className='border border-gray-400 text-gray-500 mx-auto outline-none w-full rounded-md py-3 px-5 mb-5 font-semibold' />
                        <input type="text" name='phone_number' value={registerSeller.phone_number} onChange={handleChangeSeller} placeholder='Phone number . . .' className='border border-gray-400 text-gray-500 mx-auto outline-none w-full rounded-md py-3 px-5 mb-5 font-semibold' />
                        <input type="text" name='store_name' value={registerSeller.store_name} onChange={handleChangeSeller} placeholder='Store name . . .' className='border border-gray-400 text-gray-500 mx-auto outline-none w-full rounded-md py-3 px-5 mb-2 font-semibold' />
                        <input type="password" name='password' value={registerSeller.password} onChange={handleChangeSeller} placeholder='Password . . .' className='border border-gray-400 text-gray-500 mx-auto outline-none w-full rounded-md my-3 py-3 px-5 mb-5 font-semibold' />
                        <Link to={'/'}>
                            <p className='text-[#DB3022] font-semibold text-end'>Forgot Password</p>
                        </Link>
                        <button type='submit' className='w-full py-3 bg-[#DB3022] rounded-full mt-7 text-white font-semibold'>Register</button>
                    </div>
                </form> :
                <form onSubmit={handleRegister} className='mt-[3rem] grid'>
                    <div className='w-1/4 mx-auto'>
                        <input type="text" name='name' value={register.name} onChange={handleChange} placeholder='Name . . .' className='border border-gray-400 text-gray-500 mx-auto outline-none w-full rounded-md py-3 px-5 mb-5 font-semibold' />
                        <input type="email" name='email' value={register.email} onChange={handleChange} placeholder='Email . . .' className='border border-gray-400 text-gray-500 mx-auto outline-none w-full rounded-md py-3 px-5 mb-5 font-semibold' />
                        <input type="password" name='password' value={register.password} onChange={handleChange} placeholder='Password . . .' className='border border-gray-400 text-gray-500 mx-auto outline-none w-full rounded-md py-3 px-5 mb-5 font-semibold' />
                        <Link to={'/'}>
                            <p className='text-[#DB3022] font-semibold text-end'>Forgot Password</p>
                        </Link>
                        <button type='submit' className='w-full py-3 bg-[#DB3022] rounded-full mt-7 text-white font-semibold'>Register</button>
                    </div>
                </form>
                }
                <p className='text-md mt-7'>Don't have Blanja account?<Link to={'/login'}><span className='text-[#DB3022] ml-2 font-semibold'>Login</span></Link></p>
            </div>
        </div>
    </div>
  )
}

export default Register