import React, { useState, useEffect } from 'react'
import logo from '../../assets/logo-blanja.png'
import searchIcon from '../../assets/Search.png'
import filter from '../../assets/filter.png'
import cart from '../../assets/cart (2).png'
import notif from '../../assets/notif.png'
import message from '../../assets/message.png'
import userIcon from '../../assets/user (1).png'
import { useDispatch, useSelector } from 'react-redux'
import { getDataUser } from '../../redux/action/userAction'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {

    const id = localStorage.getItem('id')
    const dispatch = useDispatch()
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const { user } = useSelector((state)=>state.user)
    const [menu, setMenu] = useState(false)
    const [key, setKey] = useState('')
    const image = user.photo

    const [menuDekstop, setMenuDekstop] = useState(false)

    useEffect(()=>{
        dispatch(getDataUser(id))
    }, [dispatch, id])

  return (
    <div className='md:shadow-lg md:py-10 md:fixed-top md:bg-white' id='font-custom'>
        <div className='container mx-auto md:flex'>
            <div className="hidden logo md:w-2/12 md:relative md:flex">
                <Link to={'/'} className='mx-auto md:mx-0 hover:opacity-80'>
                    <img src={logo} alt="logo" className='' />
                </Link>
            </div>
            {/* dekstop  */}
            <form onSubmit={()=>navigate(`/search/${key}`)} className="searchWrapper hidden md:w-6/12 md:flex pr-3">
                <input onChange={(e)=>setKey(e.target.value)} name='key' value={key} type="text" className='py-2 outline-none w-11/12 px-4 rounded-bl-full rounded-tl-full border-l-2 border-b-2 border-t-2' placeholder='Search something.....' />
                <button type='sunmit' className='py-2 border-r-2 w-1/12 border-b-2 border-t-2 rounded-br-full rounded-tr-full pr-3 md:pr-0 md:pl-4'><img src={searchIcon} alt="search" /></button>
            </form>
            { user && token ?
            <div className="menuWrapper relative hidden md:flex md:w-4/12">
                <button className='hover:opacity-70 mr-auto'><img src={filter} alt="filter" className='ml-3' /></button>
                <button onClick={()=>navigate('/my-bag')} className='mr-14 hover:opacity-70'><img src={cart} alt="cart" /></button>
                <button className='hover:opacity-70 mr-14'><img src={notif} alt="notif" /></button>
                <button className='hover:opacity-70 mr-14'><img src={message} alt="message" /></button>
                <div className="grid">
                    <button className='hover:opacity-70' onClick={()=>menuDekstop === false ? setMenuDekstop(true) : setMenuDekstop(false)}>
                        <img src={image && image.length !== 0 ? user.photo : userIcon} alt="user" className='w-12 h-12 rounded-full' />
                    </button>
                    { menuDekstop === true ?
                    <div className="absolute top-14 left-72 border-2 bg-white w-[14rem] p-4 grid font-semibold rounded-lg">
                        <button className='hover:opacity-50 w-max ml-auto' onClick={()=>navigate('/profile')}>Profile</button>
                        <button className='hover:opacity-50 w-max mt-3 ml-auto' onClick={()=>{localStorage.clear(); navigate('/login')}}>Logout</button>
                    </div>
                    : null }
                </div>
            </div>
            :
            <div className="wrapper hidden md:flex md:w-4/12">
                <button onClick={()=>(navigate('/login'))} className='bg-red-600 text-white h-max my-auto py-2 px-16 rounded-full ml-auto mr-3'>Sign In</button>
                <button onClick={()=>(navigate('/register'))} className='bg-red-600 text-white h-max my-auto py-2 px-16 rounded-full ml-3'>Sign Up</button>
            </div>
            }
            {/* dekstop  */}
            {/* mobile */}
            <div className="listMenu md:hidden">
                {/* { menu === true ? */}
                    <div className='fixed-top py-5 bg-white shadow-lg md:hidden'>
                        <img onClick={()=>navigate('/')} src={logo} alt="logo" className='mx-auto cursor-pointer ' />
                        { !menu ? 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" onClick={()=>setMenu(true)} className="w-8 h-8 absolute right-5 top-7 text-red-600 cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" onClick={()=>setMenu(false)} className="w-8 h-8 absolute right-5 top-7 text-red-600 cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        }
                    </div>
                    <div className={`duration-500 absolute top-0 left-0 bg-white shadow-lg w-full transition-all ${menu === true ? 'mt-24' : '-mt-[500px]' }`}>
                        { token ?
                            <div className='grid '>
                                <form onSubmit={()=>navigate(`/search/${key}`)} className="flex mt-5 px-5">
                                    <input onChange={(e)=>setKey(e.target.value)} name='key' value={key} type="text" className='py-2 outline-none w-11/12 px-4 rounded-bl-full rounded-tl-full border-l-2 border-b-2 border-t-2' placeholder='Search something.....' />
                                    <button type='submit' className='py-2 border-r-2 w-1/12 border-b-2 border-t-2 rounded-br-full rounded-tr-full pr-3'><img src={searchIcon} alt="search" /></button>
                                </form>
                                <button onClick={()=>navigate('/profile')} className='text-md w-max ml-auto pr-8 font-semibold mt-5 opacity-70 hover:opacity-100 flex'>
                                    <p className='my-auto mr-9'>Profile</p>
                                    <div className="text-white p-2 bg-red-600 rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                        </svg>
                                    </div>
                                </button>
                                <button onClick={()=>navigate('/my-bag')} className='text-md w-max ml-auto pr-8 font-semibold mt-5 opacity-70 hover:opacity-100 flex'>
                                    <p className='my-auto mr-9'>Cart</p>
                                    <div className="text-white p-2 bg-red-600 rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                        </svg>
                                    </div>
                                </button>
                                <button className='text-md w-max ml-auto pr-8 font-semibold mt-5 opacity-70 hover:opacity-100 flex'>
                                    <p className='my-auto mr-9'>Message</p>
                                    <div className="text-white p-2 bg-red-600 rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                                        </svg>
                                    </div>
                                </button>
                                <button onClick={()=>{localStorage.clear(); navigate('/login')}} className='text-md w-max ml-auto pr-8 font-semibold mt-5 opacity-70 hover:opacity-100 mb-10 flex'>
                                    <p className='my-auto mr-9'>Logout</p>
                                    <div className="text-white p-2 bg-red-600 rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                                        </svg>
                                    </div>
                                </button>
                            </div>
                            :
                            <div className='grid mb-5'>
                                <button onClick={()=>navigate('/login')} className='text-md font-semibold mt-5 opacity-70 hover:opacity-100'>Sign In</button>
                                <button className='text-md font-semibold mt-5 opacity-70 hover:opacity-100'>Sign Up</button>
                            </div>
                        }
                    </div>

            </div>
            {/* mobile  */}
        </div>
    </div>
  )
}

export default Navbar