import React from 'react'
import icon1 from '../../assets/cat1.jpg'
import icon2 from '../../assets/cat2.jpg'
import icon3 from '../../assets/cat3.jpg'
import icon4 from '../../assets/cat4.jpg'
import icon5 from '../../assets/cat5.jpg'
import icon6 from '../../assets/cat6.jpg'
import icon7 from '../../assets/cat7.jpg'
import icon8 from '../../assets/cat8.jpg'
import icon9 from '../../assets/cat9.jpg'
import { Link } from 'react-router-dom'

const Category = ({className}) => {
  return (
    <div className={className} id='font-custom' >
        <div className="container mx-auto">
            <p className='font-semibold text-lg md:text-3xl md:text-start'>Category</p>
            <div className="wrapper md:mt-10 text-xs md:text-xl my-5 grid grid-cols-4 md:gap-28 gap-3 px-4">
                <div className="card shadow-xl p-1 border-2 rounded-xl">
                    <Link to={''}>
                        <img src={icon1} className='h-3/4 w-3/4 mx-auto' alt="category1" />
                        <p className='font-semibold'>dress</p>
                    </Link>
                </div>
                <div className="card shadow-xl p-1 border-2 rounded-xl">
                    <Link to={''}>
                        <img src={icon2} className='h-3/4 w-3/4 mx-auto' alt="category1" />
                        <p className='font-semibold'>jacket</p>
                    </Link>
                </div>
                <div className="card shadow-xl p-1 border-2 rounded-xl">
                    <Link to={''}>
                        <img src={icon3} className='h-3/4 w-3/4 mx-auto' alt="category1" />
                        <p className='font-semibold'>glasses</p>
                    </Link>
                </div>
                <div className="card shadow-xl p-1 border-2 rounded-xl">
                    <Link to={''}>
                        <img src={icon4} className='h-3/4 w-3/4 mx-auto' alt="category1" />
                        <p className='font-semibold'>pants</p>
                    </Link>
                </div>
                <button className='hidden md:block w-max h-max text-xl font-bold -mt-10'>Show More Categories...</button>
                <div className="card shadow-xl md:hidden p-1 border-2 rounded-xl">
                    <Link to={''}>
                        <img src={icon5} className='h-3/4 w-3/4 mx-auto' alt="category1" />
                        <p className='font-semibold'>watch</p>
                    </Link>
                </div>
                <div className="card shadow-xl md:hidden p-1 border-2 rounded-xl">
                    <Link to={''}>
                        <img src={icon6} className='h-3/4 w-3/4 mx-auto' alt="category1" />
                        <p className='font-semibold'>shirt</p>
                    </Link>
                </div>
                <div className="card shadow-xl md:hidden p-1 border-2 rounded-xl">
                    <Link to={''}>
                        <img src={icon7} className='h-3/4 w-3/4 mx-auto' alt="category1" />
                        <p className='font-semibold'>suit</p>
                    </Link>
                </div>
                <div className="card shadow-xl md:hidden p-1 border-2 rounded-xl">
                    <Link to={''}>
                        <img src={icon8} className='h-3/4 w-3/4 mx-auto' alt="category1" />
                        <p className='font-semibold'>pants</p>
                    </Link>
                </div>
                <div className="card shadow-xl md:hidden p-1 border-2 rounded-xl">
                    <Link to={''}>
                        <img src={icon9} className='h-3/4 w-3/4 mx-auto' alt="category1" />
                        <p className='font-semibold'>shoes</p>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Category