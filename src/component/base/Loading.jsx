import React from 'react'
import icon from '../../assets/loading.png'

const Loading = () => {

  return (
    <div className="wrap">
        <div className="fixed bg-black opacity-40 h-full w-full"></div>
        <div aria-label="Loading..." role="status" className="fixed top-1/2 wrap w-full">
          <div className="py-8 w-3/4 md:w-1/4 bg-white px-4 rounded-xl border-4 m-auto flex">
          <img src={icon} alt="loading" className='w-[3rem] animate-spin ml-auto' />
          <p className="text-xl font-medium text-black mr-auto my-auto ml-4">Loading...</p>
        </div>
      </div>
    </div>
  )
}

export default Loading