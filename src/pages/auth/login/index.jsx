import axios from 'axios'
import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import logo from '../../../assets/logo-blanja.png'
import Button from '../../../component/base/Button'
import Input from '../../../component/base/Input'

const Login = () => {
    
    const navigate = useNavigate()
    const [show, setShow] = useState(false)
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleLogin = async(e) => {
        e.preventDefault()
        try {
            const res = await axios({
                method: 'POST',
                url: `${process.env.REACT_APP_API}user/login`,
                data: form
            })
            console.log(res);
            localStorage.setItem('token', res.data.data.token)
            localStorage.setItem('id', res.data.data.id)
            localStorage.setItem('name', res.data.data.name)
            localStorage.setItem('role', res.data.data.role)
            Swal.fire({
                icon: 'success',
                title: 'Register success',
                text: 'Check your email to get OTP'
              })
              navigate(`/`)
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Register failed',
                text: error
              })
        }
    }

  return (
    <div className='py-10 grid h-screen' id='font-custom'>
        <div className="wrapper w-3/4 h-max my-auto lg:w-1/2 mx-auto">
            <img src={logo} alt="logo" className='mx-auto' />
            <p className='text-md lg:text-xl font-bold my-10'>Login whit your account.</p>
            <form onSubmit={handleLogin} className='w-full lg:w-1/2 mx-auto'>
                <Input name='email' type='email' onChange={handleChange} value={form.email} placeholder='Insert your email' />
                <div className="flex">
                    <input type={show === false ? 'password' : 'text'} className='py-2 px-4 border-l-2 border-b-2 border-t-2 w-3/4 outline-none mb-4' name="password" value={form.password} onChange={handleChange} placeholder="Insert your pasword"/>
                    <button type="button" onClick={()=>show === false ? setShow(true) : setShow(false)} className='border-t-2 border-b-2 border-r-2 py-2 h-max w-1/4 font-bold' >{show === false ? 'Show' : 'Hide'}</button>
                </div>
                <Button type='submit' name='Login' className='py-2 bg-red-600 rounded-xl text-md text-white w-1/2 font-semibold my-5' />
            </form>
            <p>Do not have an account? <span className='font-semibold'><Link to={'/register'}>Register</Link></span></p>
        </div>
    </div>
  )
}

export default Login