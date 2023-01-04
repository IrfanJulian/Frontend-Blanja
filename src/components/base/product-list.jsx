import React from 'react'
import star from '../../assets/Star.png'

const ProductList = ({ name, price, brand, photo }) => {
  return (
        <div>
            <div className="card rounded-xl border-2 h-[22rem] shadow-xl shadow-gray-200">
                <div className="img border-b h-[1/2]">
                    <img src={photo} alt="product" className='w-[10rem] h-[10rem] mx-auto' />
                </div>
                <div className="desc mt-3 px-4">
                    <p className='text-start text-xl font-bold'>{name}</p>
                    <p className='my-2 text-xl text-red-600 font-semibold text-start'>$ {price}</p>
                    <p className='text-md mb-2 text-gray-500 text-start'>{brand}</p>
                    <div className="rating flex">
                        <img src={star} alt="star" className='mr-1' />
                        <img src={star} alt="star" className='mr-1' />
                        <img src={star} alt="star" className='mr-1' />
                        <img src={star} alt="star" className='mr-1' />
                        <img src={star} alt="star" className='mr-1' />
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ProductList