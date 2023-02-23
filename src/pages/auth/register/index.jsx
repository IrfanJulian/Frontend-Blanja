import axios from "axios";
import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import logo from "../../../assets/logo-blanja.png";
import Button from "../../../component/base/Button";
import Input from "../../../component/base/Input";
import Loading from "../../../component/base/Loading";

const Register = () => {

    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [show, setShow] = useState(false)
    const [roles, setRoles] = useState("customer");
    const [formRegister, setFormRegister] = useState({
        name: '',
        email: '',
        password: '',
        store_name: '',
        store_description: '',
        role: roles
    })

    const handleRole = (e) => {
        setRoles(e.target.value)
    }
    
    const handleChange = (e) => {
        setFormRegister({
            ...formRegister,
            [e.target.name]: e.target.value
        })
    }

    const handleRegister = async(e) => {
        e.preventDefault()
        if(formRegister.password.length >= 8){
          setLoading(true)
          try {
            await axios({
              method: 'POST',
              url: `${process.env.REACT_APP_API}user/register`,
              data: formRegister
            })
            Swal.fire({
              icon: 'warning',
              title: 'Check email',
              text: 'Check your email to get OTP'
            })
            setLoading(true)
            navigate(`/otp/${formRegister.email}`)
          } catch (error) {
            Swal.fire({
              icon: 'error',
              title: 'Register failed',
              text: error
            })
          }
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Register failed',
                text: 'Password min. 8 character!'
              })
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
        <img src={logo} alt="logo" className="mx-auto" />
        <div className="flex mt-10 w-max mx-auto">
          {roles === "customer" ? (
            <button className="py-2 w-[5.5rem] lg:w-[8rem] text-sm lg:text-md rounded-tl-xl rounded-bl-xl bg-red-600 text-white font-medium">Customer</button>
          ) : (
            <button onClick={() => setRoles("customer")} className="py-2 w-[5.5rem] lg:w-[8rem] text-sm lg:text-md border-t-2 border-l-2 border-b-2 border-red-600 text-red-600 font-medium rounded-tl-xl rounded-bl-xl">Customer</button>
          )}
          {roles === "seller" ? (
            <button className="py-2 w-[5.5rem] lg:w-[8rem] text-sm lg:text-md rounded-rt-xl rounded-br-xl rounded-tr-xl bg-red-600 text-white font-medium">Seller</button>
          ) : (
            <button onClick={() => setRoles("seller")} className="py-2 w-[5.5rem] lg:w-[8rem] text-sm lg:text-md border-t-2 border-r-2 border-b-2 border-red-600 text-red-600 font-medium rounded-tr-xl rounded-br-xl">Seller</button>
          )}
        </div>
        <p className='text-md lg:text-xl font-bold my-10'>Sign up here to create account.</p>
        <form onSubmit={handleRegister} className="w-full lg:w-1/2 mx-auto">
            <Input name='name' type='text' value={formRegister.name} onChange={handleChange} placeholder='Insert your name' />
            <Input name="email" type="email" value={formRegister.email} onChange={handleChange} placeholder="Insert your email"/>
            <div className="flex">
                <input type={show === false ? 'password' : 'text'} className='py-2 px-4 border-l-2 border-b-2 border-t-2 w-3/4 outline-none mb-4' name="password" value={formRegister.password} onChange={handleChange} placeholder="Insert your pasword"/>
                <button type="button" onClick={()=>show === false ? setShow(true) : setShow(false)} className='border-t-2 border-b-2 border-r-2 py-2 h-max w-1/4 font-bold' >{show === false ? 'Show' : 'Hide'}</button>
            </div>
            { roles === 'seller' ?
            <div>
                <Input name='store_name' type='text' value={formRegister.store_name} onChange={handleChange} placeholder='Insert your store name' />
                <Input name='store_description' type='text' value={formRegister.store_description} onChange={handleChange} placeholder='Insert your store description' />
            </div>
            : null }
            <div className="grid">
                <select name="role" onChange={handleRole} className="bg-red-600 text-white font-medium w-max mx-auto py-1 px-3 text-sm text-center rounded" id="">
                    <option value="">Confirmation your role</option>
                    <option value="customer">Customer</option>
                    <option value="seller">Seller</option>
                </select>
                <Button name="Register" className="py-2 mx-auto bg-red-600 rounded-xl text-md text-white w-1/2 font-medium my-5"/>
            </div>
        </form>
        <p>Already have an account?{" "}<span className="font-semibold"><Link to={"/login"}>Login</Link></span></p>
      </div>
    </div>
  );
};

export default Register;