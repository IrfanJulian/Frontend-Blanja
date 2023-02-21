import React from 'react'

const ModalAddress = ({ clickClose, openAddAddress }) => {
  return (
    <div className='absolute md:-left-[17px] top-20 w-screen left-0'>
        <div onClick={clickClose} className="md:-left-[17px] w-screen h-[70rem] md:h-screen bg-black opacity-40"></div> 
        <div className="absolute top-32 left-6 md:top-[8rem] w-10/12 md:left-[35rem] md:w-5/12 border-2 border-black rounded-xl bg-white my-20 md:p-8 p-3">
          <p className='text-2xl md:text-4xl font-semibold'>Your Address</p>
          <hr className='my-5 border-t border-black' />
          <div className="wrapperInfo border my-10 rounded-xl md:p-5 p-2 border-black">
            <p className='text-left md:text-2xl font-semibold'>Irfan Julian</p>
            <p className='text-left md:text-xl my-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint tenetur non ducimus quidem at autem.</p>
            <button onClick={openAddAddress} className='text-red-600 md:text-2xl font-semibold mt-5'>Change Address</button>
          </div>
        </div>
    </div>
  )
}

export default ModalAddress