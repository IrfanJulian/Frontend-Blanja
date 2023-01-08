import React, { useState, useEffect } from 'react'
import logo from '../../assets/logo-blanja.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faCartShopping, faEnvelope, faFilter, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import user from '../../assets/user (1).png'
import Swal from 'sweetalert2'
import axios from 'axios'

const Navbar = ({ onSubmit, value, onChange, name, type }) => {
    
    const token = localStorage.getItem('token')
    const id = localStorage.getItem('id')
    const photo = localStorage.getItem('photo')
    const role = localStorage.getItem('role')
    const navigate = useNavigate()
    // const [data, setData] = useState(true)
    const [active, setActive] = useState(false)
    // const [search, setSearch] = useState('')
// 
    // const handleChange = (e) => {
    //     setSearch(e.target.value)
    //     console.log(setSearch);
    // }

    // const handleSearch = (e) => {
    //     e.preventDefault()
    // }

    const handleLogout = () => {
        localStorage.clear()
        Swal.fire({
            icon: 'success',
            title: 'Success...',
            text: 'Logout Success'
          })
        navigate('/login')
    }

    const [userData, setUserData] = useState()

    useEffect(()=>{
        const getUser = async() => {
            const res = await axios({
                method: 'GET',
                url: `http://localhost:4500/user/:${id}`,
                headers: {authorization: `Bearer ${token}`}
            })
            setUserData(res.data.data[0])
        }
        getUser()
    })

  return (
    <div>
        { !token ?
        <div className='container bg-white mx-auto flex py-7'>
            <div className="wrapper w-2/12">
                <Link to={'/home'}>
                    <img src={logo} alt="logo" />
                </Link>
            </div>
            <div className="wrapper w-5/12">
                <form onSubmit={onSubmit}>
                    <input type="text" name={name} onChange={onchange} value={value} placeholder='Search . . .' className='text-lg border-l border-t border-b border-gray-400 rounded-l-full py-3 px-5 outline-none font-semibold w-9/12' />
                    <button type={type} className='text-gray-400 border-t border-b border-r border-gray-400 rounded-r-full py-3 px-5 text-lg'><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                    <button className='text-gray-400 px-4 py-3 border border-gray-400 rounded-xl ml-5 text-lg'><FontAwesomeIcon icon={faFilter} /></button>
                </form>
            </div>
            <div className="wrapper flex w-5/12">
                <div className="wrapper py-3 ml-auto">
                    <Link to={'/'} className='text-xl text-gray-400'><FontAwesomeIcon icon={faCartShopping} /></Link>
                    <button onClick={()=>navigate('/login')} className='w-[10rem] font-semibold ml-20 py-2 bg-[#DB3022] text-white rounded-full'>Login</button>
                    <button onClick={()=>navigate('/register')}  className='w-[10rem] font-semibold ml-8 py-2 border border-gray-400 text-gray-400 rounded-full'>Sign up</button>
                </div>
            </div>
        </div>
            :
        <div className='container bg-white mx-auto flex py-7'>
            <div className="wrapper w-2/12">
                <Link to={'/home'}>
                    <img src={logo} alt="logo" />
                </Link>
            </div>
            <div className="wrapper w-6/12">
                <form onSubmit={onSubmit}>
                    <input type="text" name={name} onChange={onchange} value={value} placeholder='Search . . .' className='text-lg border-l border-t border-b border-gray-400 rounded-l-full py-3 px-5 outline-none font-semibold w-9/12' />
                    <button type={type} className='text-gray-400 border-t border-b border-r border-gray-400 rounded-r-full py-3 px-5 text-lg'><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                    <button className='text-gray-400 px-4 py-3 border border-gray-400 rounded-xl ml-5 text-lg'><FontAwesomeIcon icon={faFilter} /></button>
                </form>
            </div>
            <div className="wrapper grid py-3 w-4/12">
                <div className="wrapper flex relative ml-auto">
                    <Link to={'/my-bag'} className='text-xl ml-20 text-gray-400'><FontAwesomeIcon icon={faCartShopping} /></Link>
                    <Link to={'/'} className='text-xl ml-20 text-gray-400'><FontAwesomeIcon icon={faBell} /></Link>
                    <Link to={'/'} className='text-xl ml-20 text-gray-400'><FontAwesomeIcon icon={faEnvelope} /></Link>
                    <div>
                    {!userData ?
                    <div>
                        <Link onClick={()=>setActive(true)}>
                            <div className='ml-20 overflow-hidden w-[2rem] h-[2rem] rounded-full border'>
                                <img src={photo} alt="icon" className='h-[2rem] w-[2rem]' />
                            </div>
                        </Link>
                    </div> :
                    <div>
                        <Link onClick={()=>setActive(true)}>
                            <div className='ml-20 overflow-hidden w-[2.5rem] h-[2.5rem] rounded-full border'>
                                <img src={user} alt="icon" className='h-[2.5rem] w-[2.5rem]' />
                            </div>
                        </Link>
                    </div>
                    }
                        { active === true ?
                        <div className="absolute left-72 border-2 border-gray-300 rounded-xl mt-3 wrapper bg-white pb-7">
                            <Link onClick={()=>setActive(false)}><p className='mt-1 mb-3 -mr-20 text-lg ml-auto text-gray-400 font-bold'>x</p></Link>
                            {role === 'customer' ?
                            <button className='border-b-2 w-full pb-3' onClick={()=>navigate('/profile-customer')}><p className='text-xl text-gray-400 font-semibold'>Profile</p></button>
                            :
                            <button className='border-b-2 w-full pb-3' onClick={()=>navigate('/profile-seller')}><p className='text-xl text-gray-400 font-semibold'>Profile</p></button>
                            }
                            <button className='pt-3' onClick={handleLogout}><p className='text-xl text-gray-400 font-semibold'>Logout</p></button>
                        </div>
                        : null }
                    </div>
                </div>
            </div>
        </div>
        }
    </div>
  )
}

export default Navbar