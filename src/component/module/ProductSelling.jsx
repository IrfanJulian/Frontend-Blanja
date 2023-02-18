import React from 'react'

const ProductSelling = () => {
  return (
    <div>
        <p className='text-2xl md:text-4xl md:mt-10 font-semibold'>Selling Product</p>
        {/* <hr className='my-5 border-t border-black'/> */}
        <div className="wrapperForm w-3/4 md:w-5/12 mx-auto">
          <div className="name mt-10">
            <p className='text-left md:text-xl md:font-medium md:mb-1'>Product Name</p>
            <input type="text" className='py-2 px-5 border-2 rounded-md w-full' />
          </div>
          <div className="name mt-5">
            <p className='text-left md:text-xl md:font-medium md:mb-1'>Price</p>
            <input type="text" className='py-2 px-5 border-2 rounded-md w-full' />
          </div>
          <div className="name mt-5">
            <p className='text-left md:text-xl md:font-medium md:mb-1'>Stock</p>
            <input type="text" className='py-2 px-5 border-2 rounded-md w-full' />
          </div>
          <div className="name mt-5">
            <p className='text-left md:text-xl md:font-medium md:mb-1'>Category</p>
            <input type="text" className='py-2 px-5 border-2 rounded-md w-full' />
          </div>
          <div className="name mt-5">
            <p className='text-left md:text-xl md:font-medium md:mb-1'>Description</p>
            <textarea type="text" className='py-2 px-5 border-2 rounded-md w-full h-20' />
          </div>
          <div className="name my-5">
            <p className='text-left md:text-xl md:font-medium md:mb-1'>Photo</p>
            <label htmlFor="img" className='cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-40 h-32 opacity-30 mx-auto">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
                <p className='font-semibold text-lg opacity-50'>Click Here to Add some Image</p>
            </label>
            <input type="file" id='img' className='hidden' />
          </div>
          <button className='bg-red-600 py-2 px-7 md:px-16 md:text-xl md:font-semibold rounded-full my-10 text-white'>Post Product</button>
        </div>
    </div>
  )
}

export default ProductSelling