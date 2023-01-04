import React from 'react'

const ButtonAuth = ({ on1, on2 }) => {
  return (
    <div>
        <div className="flex items-center justify-center">
            <div className="inline-flex shadow-md hover:shadow-lg focus:shadow-lg" role="group">
                <button type="button" onClick={on1} className="rounded-l-md inline-block border text-semibold border-gray-400 w-[7.5rem] px-6 py-3 bg-white text-gray-400 font-medium text leading-tight hover:bg-[#DB3022] hover:focus:text-white focus:bg-[#DB3022] focus:outline-none focus:ring-0 focus:text-white active:bg-[#DB3022] active:text-white transition duration-150 ease-in-out">Customer</button>
                <button type="button" onClick={on2} className="rounded-r-md inline-block border text-semibold border-gray-400 w-[7.5rem] px-6 py-3 bg-white text-gray-400 font-medium text leading-tight hover:bg-[#DB3022] hover:focus:text-white focus:bg-[#DB3022] focus:outline-none focus:ring-0 focus:text-white active:bg-[#DB3022] active:text-white transition duration-150 ease-in-out">Seller</button>
            </div>
        </div>
    </div>
  )
}

export default ButtonAuth