import React, { useState } from 'react'
import icons from '../../assets/user (2).png'

const MyStore = ({ className }) => {

    const [edit, setEdit] = useState(true)

  return (
    <div className={className}>
        <div className="container mx-auto">
            <p className='text-2xl md:text-4xl font-semibold'>Store Setting</p>
            <div className="wrapperImage md:hidden">
                <img src={icons} alt="pict" className='w-[10rem] h-[10rem] mx-auto mt-10 mb-8' />
                { edit ?
                <div>
                    <label htmlFor='img' className='py-2 px-5 rounded-full border-2 border-red-600 text-red-600 font-semibold cursor-pointer text-lg'>Change Store Picture</label>
                    <input type="file" id='img' className='hidden' />
                </div>
                    :
                    null
                }
            </div>
            <div className="md:flex">
                <div className="wrapperForm my-10 md:w-3/4">
                    <div className="w-3/4 mx-auto">
                        <p className='text-lg md:text-xl text-left mb-2'>Store Name</p>
                        <input type="text" className='border-4 outline-none rounded-md py-2 px-4 w-full text-lg md:text-xl' placeholder='Irfan Julian Store' />
                    </div>
                    <div className="w-3/4 mx-auto mt-5">
                        <p className='text-lg md:text-xl text-left mb-2'>Email</p>
                        <input type="text" className='border-4 outline-none rounded-md py-2 px-4 w-full text-lg md:text-xl' placeholder='Irfan@gmail.com' />
                    </div>
                    <div className="w-3/4 mx-auto mt-5">
                        <p className='text-lg md:text-xl text-left mb-2'>Phone Number</p>
                        <input type="text" className='border-4 outline-none rounded-md py-2 px-4 w-full text-lg md:text-xl' placeholder='+62082398238' />
                    </div>
                    <div className="w-3/4 mx-auto mt-5">
                        <p className='text-lg md:text-xl text-left mb-2'>Store Description</p>
                        <textarea type="text" className='border-4 outline-none rounded-md py-2 px-4 w-full text-lg md:text-xl h-36' placeholder='Irfan Julian Store' />
                    </div>
                </div>
                <div className="hidden md:block wrapper h-max my-auto">
                    <img src={icons} alt="pict" className='w-[10rem] h-[10rem] mx-auto mt-10 md:mt-0 mb-8' />
                        { edit ?
                        <div>
                            <label htmlFor='img' className='py-2 px-5 rounded-full border-2 border-red-600 text-red-600 font-semibold cursor-pointer text-lg md:text-xl'>Change Store Picture</label>
                            <input type="file" id='img' className='hidden' />
                        </div>
                            :
                            null
                        }
                    </div>
                </div>
            <button className='bg-red-600 text-white py-2 px-20 rounded-full text-xl mb-10 font-semibold'>Save</button>
        </div>
    </div>
  )
}

export default MyStore