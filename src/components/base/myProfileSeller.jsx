import React from 'react'
import line from '../../assets/Line.png'
import madara from '../../assets/glow deo green.png'

const MyProfile = () => {
  return (
    <div className='w-full mb-10'>
        <div className="p-10 border-2 border-gray-300 rounded-lg">
            <p className='text-4xl font-semibold text-start'>My Profile Store</p>
            <p className='text-xl text-gray-400 text-start mt-5'>Manage your profile information</p>
            <hr className='my-10 border border-gray-300' />
            <div className="wrapper flex">
                <div className="w-8/12">
                    <div className="flex mb-5 w-full">
                        <p className='text-xl text-gray-400 w-1/4 my-auto text-end'>Store Name</p>
                        <input type="text" className='ml-10 border-2 w-full border-gray-300 py-4 px-3 outline-none font-semibold rounded-lg text-xl' placeholder='Insert your name . . .' />
                    </div>
                    <div className="flex mb-5 w-full">
                        <p className='text-xl text-gray-400 w-1/4 my-auto text-end'>Email</p>
                        <input type="text" className='ml-10 border-2 w-full border-gray-300 py-4 px-3 outline-none font-semibold rounded-lg text-xl' placeholder='Insert your email . . .' />
                    </div>
                    <div className="flex mb-5 w-full">
                        <p className='text-xl text-gray-400 w-1/4 my-auto text-end'>Phone number</p>
                        <input type="text" className='ml-10 border-2 w-full border-gray-300 py-4 px-3 outline-none font-semibold rounded-lg text-xl' placeholder='Insert your phone number . . .' />
                    </div>
                    <div className="flex mb-5 w-full">
                        <p className='text-xl text-gray-400 w-1/4 my-auto text-end'>Store description</p>
                        <input type="text" className='ml-10 border-2 w-full border-gray-300 py-16 px-3 outline-none font-semibold rounded-lg text-xl' placeholder='Insert your store description . . .' />
                    </div>
                    <button className='py-4 px-16 bg-red-500 rounded-full text-white text-xl font-semibold mt-5'>Save</button>
                </div>
                <div className="w-1/12"><img src={line} alt="" className='mx-auto h-3/4' /></div>
                <div className="w-3/12">
                    <div className="wrapperimg w-[10rem] h-[10rem] overflow-hidden rounded-full mx-auto">
                        <img src={madara} alt="" className='w-[10rem] h-[10rem]' />
                    </div>
                    <div className="file pt-10">
                        <input type="file" id='file' hidden />
                        <label htmlFor="file" className='px-10 py-2 border text-xl font-semibold border-gray-400 text-gray-400 rounded-full'>Select image</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MyProfile