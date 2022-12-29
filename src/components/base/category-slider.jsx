import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import shirt from '../../assets/shirt.png'
import pants from '../../assets/pants.png'
import short from '../../assets/short.png'
import cap from '../../assets/cap.png'
import watch from '../../assets/watch.png'
import jacket from '../../assets/jacket.png'
import dress from '../../assets/dress.png'
import suit from '../../assets/suit.png'
import shoes from '../../assets/shoes.png'
import glasses from '../../assets/glasses.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons'

const CategorySlider = () => {

    const [active, setActive] = useState(true)

  return (
    <div >
        { active ? 
        <div className='flex gap-5 mb-20'>
            <div className="card bg-red-700 rounded-xl p-10">
                <Link to={''}>
                    <div className="wrapperimg w-[12rem] h-[10rem] mx-auto">
                        <img src={shirt} alt="alt" className='mx-auto' />
                    </div>
                    <p className='text-white font-semibold text-4xl'>Shirt</p>
                </Link>
            </div>
            <div className="card bg-[#1C3391] rounded-xl p-10">
                <Link to={''}>
                    <div className="wrapperimg w-[12rem] h-[10rem] mx-auto">
                        <img src={short} alt="alt" className='mx-auto' />
                    </div>
                    <p className='text-white font-semibold text-4xl'>Short</p>
                </Link>
            </div>
            <div className="card bg-[#F67B02] rounded-xl p-10">
                <Link to={''}>
                    <div className="wrapperimg w-[12rem] h-[10rem] mx-auto">
                        <img src={jacket} alt="alt" className='mx-auto' />
                    </div>
                    <p className='text-white font-semibold text-4xl'>Jacket</p>
                </Link>
            </div>
            <div className="card bg-[#E31F51] rounded-xl p-10">
                <Link to={''}>
                    <div className="wrapperimg w-[12rem] h-[10rem] mx-auto">
                        <img src={pants} alt="alt" className='mx-auto' />
                    </div>
                    <p className='text-white font-semibold text-4xl'>Pants</p>
                </Link>
            </div>
            <div className="card bg-[#57CD9E] rounded-xl p-10">
                <Link to={''}>
                    <div className="wrapperimg w-[12rem] h-[10rem] mx-auto pt-8">
                        <img src={glasses} alt="alt" className='mx-auto' />
                    </div>
                    <p className='text-white font-semibold text-4xl'>Glasses</p>
                </Link>
            </div>
            <button className='text-7xl text-gray-500' onClick={()=>setActive(false)}><FontAwesomeIcon icon={faCircleChevronRight} /></button>
            </div>
                : 
            <div className='flex gap-5 mb-20'>
            <button className='text-7xl text-gray-500' onClick={()=>setActive(true)}><FontAwesomeIcon icon={faCircleChevronLeft} /></button>
            <div className="card bg-[#50C8D8] rounded-xl p-10">
                <Link to={''}>
                    <div className="wrapperimg w-[12rem] h-[10rem] mx-auto">
                        <img src={cap} alt="alt" className='mx-auto' />
                    </div>
                    <p className='text-white font-semibold text-4xl'>Cap</p>
                </Link>
            </div>
            <div className="card bg-[#50D8AF] rounded-xl p-10">
                <Link to={''}>
                    <div className="wrapperimg w-[12rem] h-[10rem] mx-auto">
                        <img src={suit} alt="alt" className='mx-auto' />
                    </div>
                    <p className='text-white font-semibold text-4xl'>Suit</p>
                </Link>
            </div>
            <div className="card bg-[#D85091] rounded-xl p-10">
                <Link to={''}>
                    <div className="wrapperimg w-[12rem] h-[10rem] mx-auto">
                        <img src={dress} alt="alt" className='mx-auto' />
                    </div>
                    <p className='text-white font-semibold text-4xl'>Dress</p>
                </Link>
            </div>
            <div className="card bg-[#E31F51] rounded-xl p-10">
                <Link to={''}>
                    <div className="wrapperimg w-[12rem] h-[10rem] mx-auto">
                        <img src={watch} alt="alt" className='mx-auto' />
                    </div>
                    <p className='text-white font-semibold text-4xl'>Watch</p>
                </Link>
            </div>
            <div className="card bg-[#5086D8] rounded-xl p-10">
                <Link to={''}>
                    <div className="wrapperimg w-[12rem] h-[10rem] mx-auto pt-8">
                        <img src={shoes} alt="alt" className='mx-auto' />
                    </div>
                    <p className='text-white font-semibold text-4xl'>Shoes</p>
                </Link>
            </div>
        </div>
        }
    </div>
  )
}

export default CategorySlider