import React from 'react'
// import { Link } from 'react-router-dom'
import Navbar from '../../components/base/navbar'
import img from '../../assets/jacket.png'
import MyModal from '../../components/base/modal-payment'

const Checkout = () => {
  return (
    <div>
        <div className="shadow-xl shadow-gray-200">
            <Navbar />     
        </div>
        <div className="container mx-auto my-10">
            <p className='text-4xl font-bold text-start'>Checkout</p>
            <p className='text-xl font-semibold text-start my-10'>Shipping address</p>
            <div className="flex">
                <div className="wrapper w-7/12">
                    <div className="grid wrapper px-10 py-10 border-4 rounded-xl shadow-lg shadow-gray-200 mb-5">
                        <p className='text-xl font-semibold text-start mb-5'>Andreas Jane</p>
                        <p className='text-md text-gray-400 text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, totam. Tempore corporis laborum iste minus?</p>
                        <button className='w-1/2 border border-gray-400 text-gray-400 mt-10 py-3 px-6 rounded-full'>Choose Another Address</button>
                    </div>
                    <div className="flex wrapper px-5 py-10 mb-5 border-4 rounded-xl shadow-lg shadow-gray-200">
                        <img src={img} alt='jkt' className='ml-2 text-lg text-gray-400 w-[4.5rem] h-[4.5rem] rounded-lg border-2' />
                        <div className="wrapper my-auto ml-7">
                            <p className='text-xl font-semibold text-start'>Hoodie Eastern Wolves</p>
                            <p className='text-md text-gray-400 text-start'>Eastern Wolves</p>
                        </div>
                        <div className="price grid ml-auto">
                            <p className='text-xl font-semibold text-black my-auto mr-10'>$ 40.0</p>
                        </div>
                    </div>
                </div>
                <div className="wrapper w-1/12"></div>
                <div className="wrapper w-4/12">
                    <div className="card border-4 rounded-xl shadow-xl shadow-gray-300 py-10 px-10">
                        <p className='text-2xl font-semibold text-black text-start'>Shopping Summary</p>
                        <div className="flex mt-10">
                            <p className='text-2xl text-gray-400'>Order</p>
                            <p className='text-2xl font-semibold text-black ml-auto'>$ 45.0</p>
                        </div>
                        <div className="flex mt-5 mb-10">
                            <p className='text-2xl text-gray-400'>Delivery</p>
                            <p className='text-2xl font-semibold text-black ml-auto'>$ 3.1</p>
                        </div>
                        <hr my-10 />
                        <div className="flex mt-10">
                            <p className='text-2xl font-semibold text-black'>Shopping Summary</p>
                            <p className='text-2xl font-semibold text-[#DB3022] ml-auto'>$ 48.1</p>
                        </div>
                        {/* <button className='text-white bg-[#DB3022] rounded-full py-4 mt-10 text-xl w-full' type="button" data-modal-toggle="defaultModal">Buy</button> */}
                        <MyModal />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Checkout