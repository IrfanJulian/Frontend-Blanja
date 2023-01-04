import React from 'react'
import jacket from '../../assets/jaket coach maternal.jfif'

const MyOrder = () => {
  return (
    <div>
        <div>
            <div className="px-10 pt-10 pb-20 mb-10 border-2 border-gray-300 rounded-lg">
                <p className='text-4xl font-semibold text-start'>My products</p>
                <div className="flex mt-10 mr-10">
                    <button className='text-gray-400 mx-auto text-xl py-4 px-10 rounded-t-xl font-semibold hover:bg-gray-100 active:border-b-2 border-red-600'>All items</button>
                    <button className='text-gray-400 mx-auto text-xl py-4 px-10 rounded-t-xl font-semibold hover:bg-gray-100 active:border-b-2 border-red-600'>Not yet paid</button>
                    <button className='text-gray-400 mx-auto text-xl py-4 px-10 rounded-t-xl font-semibold hover:bg-gray-100 active:border-b-2 border-red-600'>Packed</button>
                    <button className='text-gray-400 mx-auto text-xl py-4 px-10 rounded-t-xl font-semibold hover:bg-gray-100 active:border-b-2 border-red-600'>Sent</button>
                    <button className='text-gray-400 mx-auto text-xl py-4 px-10 rounded-t-xl font-semibold hover:bg-gray-100 active:border-b-2 border-red-600'>Complete</button>
                    <button className='text-gray-400 mx-auto text-xl py-4 px-10 rounded-t-xl font-semibold hover:bg-gray-100 active:border-b-2 border-red-600'>Order cancel</button>
                </div>
                <hr className='mb-10 border border-gray-300' />
                <div className="grid grid-cols-3 gap-7">
                    <div className="card border-2 shadow-xl shadow-gray-400 border-gray-400 rounded-xl p-5 flex">
                        <div className="wrapperimg w-[10rem] h-[12rem] border-2 mr-5 rounded-xl overflow-hidden">
                            <img src={jacket} alt="" className='w-[10rem] h-[12rem]' />
                        </div>
                        <div className="core">
                            <div className="wrapper mb-2">
                                <p className='text-lg font-semibold text-start'>Order name :</p>
                                <p className='text-md text-gray-400 text-start'>Jacket Couch Maternal</p>
                            </div>
                            <div className="wrapper mb-2">
                                <p className='text-lg font-semibold text-start'>Total price :</p>
                                <p className='text-md text-gray-400 text-start'>$ 18.33</p>
                            </div>
                            <div className="wrapper mb-2">
                                <p className='text-lg font-semibold text-start'>Status :</p>
                                <p className='text-md text-red-600 font-bold text-start'>Packed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MyOrder