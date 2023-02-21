import React from 'react'
import icon from '../../assets/loading.png'

const Loading = () => {

  return (
      <div className="h-screen absolute top-0 left-0 grid w-full">
          <div aria-label="Loading..." role="status" className="w-3/4 md:w-1/4 py-8 bg-white px-4 rounded-xl border-4 m-auto flex">
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