import React from 'react'

const ModalNewAddress = ({ clickClose, cancel }) => {
  return (
    <div className='absolute top-20 md:-left-[17px] w-screen left-0'>
        <div onClick={clickClose} className="absolute top-0 h- md:h-screen w-screen bg-black opacity-40"></div> 
        <div className="absolute top-14 left-6 w-10/12 md:left-[35rem] border-2 border-black md:w-5/12 rounded-xl bg-white my-20 p-3 md:p-8">
            <p className='text-2xl md:text-4xl font-semibold'>Add New Address</p>
            <hr className='my-5 border-t border-black' />
            <div className="wrapperform">
                <input type="text" className='border-2 outline-none rounded-xl w-full text-lg md:text-xl md:py-3 my-4 py-1 px-3' placeholder='Add recipients name' />
                <input type="text" className='border-2 outline-none rounded-xl w-full text-lg md:text-xl md:py-3 my-4 py-1 px-3' placeholder='Add recipients phone number' />
                <textarea type="text" className='border-2 outline-none h-36 md:h-52 rounded-xl w-full text-lg md:text-xl md:py-3 my-4 py-1 px-3' placeholder='Add address' />
                <div className="flex w-max ml-auto">
                    <button className='py-2 w-28 md:py-3 md:w-[10rem] md:text-xl md:font-semibold rounded-full mt-5 bg-red-600 mr- text-white'>Save</button>
                    <button onClick={cancel} className='py-2 w-28 md:py-3 md:w-[10rem] md:text-xl md:font-semibold rounded-full mt-5 border-2 border-red-600 text-red-600 ml-2'>Cancel</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ModalNewAddress