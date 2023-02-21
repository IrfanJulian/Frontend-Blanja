import React from 'react'
import shirt from '../../assets/tshirt polo eastern wolves.jfif'

const CardTransaction = () => {

    const success = true

  return (
    <div className="card w-3/4 md:w-11/12 border-2 md:border-4 rounded-xl mt-7 mx-auto p-2 md:p-6">
        <img src={shirt} alt="" className='h-[10rem] md:h-[20rem] mx-auto' />
        <p className='font-medium md:text-2xl my-3 md:my-5'>Polo T-shirt Eastern Wolves</p>
        <div className="flex px-2">
            <div className="w-5/12">
                <p className='md:text-xl md:font-semibold text-left'>Id Transaction</p>
            </div>
            <div className="w-1/12">:</div>
            <div className="w-6/12">
                <p className='md:text-xl md:font-semibold text-right'> 1023981</p>
            </div>
        </div>
        <div className="flex px-2 mt-2">
            <div className="w-5/12">
                <p className='md:text-xl md:font-semibold text-left'>Price</p>
            </div>
            <div className="w-1/12">:</div>
            <div className="w-6/12">
                <p className='md:text-xl md:font-semibold text-right'> Rp.850000</p>
            </div>
        </div>
        <div className="flex px-2 mt-2">
            <div className="w-5/12">
                <p className='md:text-xl md:font-semibold text-left'>Status</p>
            </div>
            <div className="w-1/12">:</div>
            <div className="w-6/12">
                <p className={success ? 'md:text-xl md:font-semibold text-right text-green-600 font-semibold' : 'md:text-xl md:font-semibold text-right text-red-600 font-semibold'}>Success</p>
            </div>
        </div>
    </div>
  )
}

export default CardTransaction