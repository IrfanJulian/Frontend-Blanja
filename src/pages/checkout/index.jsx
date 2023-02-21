import React, {useState,useEffect} from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import Navbar from '../../component/module/Navbar'
import pos from '../../assets/pos (2).png'
import gopay from '../../assets/gopay (2).png'
import mastercard from '../../assets/mastercard (2).png'

const Checkout = () => {

  return (
    <div className='container mx-auto pt-28' id='font-custom'>
        <div className='px-5'>
            <p className='text-xl md:text-4xl my-5 md:my-20 font-medium'>Checkout</p>
            <div className="wrapGlobal md:w-1/2 md:mx-auto">
                <p className='text-left md:text-xl'>Set address and recipient data</p>
                <div className="address md:p-5 p-2 border-2 my-3">
                    <p className='text-sm md:text-lg font-medium text-left'>Irfan Julian Ibrahim</p>
                    <p className='text-xs md:text-sm text-left my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque repellat esse vitae ipsum minima.</p>
                    <p className='text-xs md:text-lg text-left'>+62874726232</p>
                    <button className='font-medium md:text-xl text-red-600 my-2'>Edit data</button>
                </div>
                <div className="payment mt-10">
                    <p className='text-left md:text-xl'>Payment</p>
                    <div className="address p-2 border-2 my-3">
                        <div className="flex">
                            <div className="w-5/12">
                                <img src={pos} alt="pos" />
                            </div>
                            <div className="w-5/12 h-max my-auto">
                                <p className='text-left md:text-lg'>Pos Indonesia</p>
                            </div>
                            <div className="w-2/12 h-max my-auto">
                                <input type="checkbox" />
                            </div>
                        </div>
                    </div>
                    <div className="address p-2 border-2 my-3">
                        <div className="flex">
                            <div className="w-5/12 py-4 md:py-8">
                                <img src={gopay} className='w-3/4 mx-auto' alt="pos" />
                            </div>
                            <div className="w-5/12 h-max my-auto">
                                <p className='text-left md:text-lg'>Gopay</p>
                            </div>
                            <div className="w-2/12 h-max my-auto">
                                <input type="checkbox" />
                            </div>
                        </div>
                    </div>
                    <div className="address p-2 border-2 my-3">
                        <div className="flex">
                            <div className="w-5/12 py-2 md:py-3">
                                <img src={mastercard} className='w-1/2 mx-auto' alt="pos" />
                            </div>
                            <div className="w-5/12 h-max my-auto">
                                <p className='text-left md:text-lg'>Master Card</p>
                            </div>
                            <div className="w-2/12 h-max my-auto">
                                <input type="checkbox" />
                            </div>
                        </div>
                    </div>
                </div>
                <button className='bg-red-600 text-white font-medium py-2 px-10 rounded-full my-10 md:text-xl md:px-20'>Process</button>
            </div>
        </div>
        <Navbar />
    </div>
  )
}

export default Checkout