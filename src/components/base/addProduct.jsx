import React from 'react'
import add from '../../assets/add image.png'
// import Dropdowns from './dropdowns'

const AddProduct = () => {
  return (
    <div>
        <div className="p-10 mb-10 border-2 border-gray-300 rounded-lg grid">
            <p className='text-3xl font-semibold text-start'>Inventory</p>
            <hr className='my-10 border' />
            <p className='text-gray-400 mb-3 text-start'>Product name</p>
            <input type="text" className='py-3 px-5 border-2 outline-none rounded-xl font-semibold w-3/4 mr-auto' />
        </div>
        <div className="p-10 mb-10 border-2 border-gray-300 rounded-lg grid">
            <p className='text-3xl font-semibold text-start'>Item detail</p>
            <hr className='my-10 border' />
            <p className='text-gray-400 mb-3 text-start'>Unit price</p>
            <input type="text" className='py-3 px-5 border-2 mb-8 outline-none rounded-xl font-semibold w-3/4 mr-auto' />
            <p className='text-gray-400 mb-3 text-start'>Stock</p>
            <input type="text" className='py-3 px-5 border-2 mb-8 outline-none rounded-xl font-semibold w-3/4 mr-auto' />
            <p className='text-gray-400 mb-3 text-start'>Condition</p>
            <input type="text" className='py-3 px-5 border-2 outline-none rounded-xl font-semibold w-3/4 mr-auto' />
        </div>
        <div className="p-10 mb-10 border-2 border-gray-300 rounded-lg grid">
            <p className='text-3xl font-semibold text-start'>Photo of product</p>
            <hr className='my-10 border' />
            <input type="file" id='file' hidden />
            <label htmlFor="file">
                <div className="box rounded-xl py-16 w-3/4 border-4 border-dashed border-gray-300 text-3xl text-gray-300 font-semibold mx-auto">
                    <img src={add} className='w-1/4 h-1/4 mx-auto' alt="" />
                    <p className='text-xl text-black font-semibold mt-2'>Select your image product</p>
                </div>
            </label>
        </div>
        <div className="p-10 mb-10 border-2 border-gray-300 rounded-lg grid">
            <p className='text-3xl font-semibold text-start'>Description</p>
            <hr className='my-10 border' />
            <input type="text" placeholder='Insert your product description . . .' className='py-16 px-5 border-2 mb-8 outline-none rounded-xl font-semibold w-3/4 mr-auto' />
        </div>
        <div className="grid mb-10">
            <button className='bg-red-600 py-3 px-20 rounded-full text-white text-xl font-semibold ml-auto'>Sell</button>
        </div>
    </div>
  )
}

export default AddProduct