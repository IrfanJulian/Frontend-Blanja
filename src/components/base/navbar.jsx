import React from 'react'
import logo from '../../assets/logo-blanja.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faFilter, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate()

  return (
    <div className='container mx-auto flex py-7'>
        <div className="wrapper w-2/12">
            <img src={logo} alt="logo" />
        </div>
        <div className="wrapper w-5/12">
            <form onSubmit={''}>
                <input type="text" placeholder='Search . . .' className='text-lg border-l border-t border-b border-gray-400 rounded-l-full py-3 px-5 outline-none font-semibold w-9/12' />
                <button className='text-gray-400 border-t border-b border-r border-gray-400 rounded-r-full py-3 px-5 text-lg'><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
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
  )
}

export default Navbar