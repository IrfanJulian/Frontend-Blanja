import React from 'react'
import MyModalAddress from './modalAddress'

const Address = () => {
  return (
    <div>
        <div className="p-10 mb-10 border-2 border-gray-300 rounded-lg">
            <p className='text-4xl font-semibold text-start'>Choose another address</p>
            <p className='text-xl text-gray-400 text-start mt-5'>Manage your shipping address</p>
            <hr className='my-10 border border-gray-300' />
            <MyModalAddress />
            <div className="w-3/4 grid mx-auto p-10 mt-20 border-2 border-red-600 rounded-xl">
                <p className='text-xl font-semibold text-start'>Andreas Jane</p>
                <p className='text-start my-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates molestias eum suscipit 
                aspernatur quia eveniet quos quod doloremque omnis consectetur quisquam explicabo reiciendis harum rem vel, 
                nostrum provident nemo amet.
                </p>
                <button className='text-xl font-bold text-red-500 mr-auto'>Change address</button>
            </div>
        </div>
    </div>
  )
}

export default Address