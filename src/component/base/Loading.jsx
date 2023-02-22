import React from 'react'
import icon from '../../assets/loading.png'

const Loading = () => {

  return (
          <div aria-label="Loading..." role="status" className="fixed top-1/2 wrap w-full">
            <div className="py-8 w-3/4 md:w-1/4 bg-white px-4 rounded-xl border-4 m-auto flex">
              <img src={icon} alt="loading" className='w-[3rem] animate-spin ml-auto' />
              <p className="text-xl font-medium text-black mr-auto my-auto ml-4">Loading...</p>
            </div>
          </div>
  )
}

export default Loading

// { loading === true ? 
//   <div className="wrapper w-screen">
//       <div className='wrapper absolute top-0 left-0 bg-black opacity-40 h-[80rem] w-full'></div>
//       <Loading className='my-auto mx-auto' />
//   </div>
//   : null }