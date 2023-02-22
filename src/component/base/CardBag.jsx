import React from 'react'
import min from '../../assets/min.png'
import plus from '../../assets/plus.png'

const CardBag = ({ className, onClick1, onClick2, name, brand, img, qty, price, onClickCheckout }) => {

  return (
    <div className={className}>
        <div className="container mx-auto px-4">
            <div className="flex relative px-[44px] md:px-3 hover:text-red-600">
                <p className='text-lg md:text-2xl'>{name}</p>
                <button className='absolute ml-auto top-1 right-6 md:right-2 '>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 md:w-6 md:h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                </button>
            </div>
            <div className="card w-full flex border-2 p-2 md:mt-5">
                <div className="w-1/2 border-r-2 flex">
                    {/* <input type="checkbox" onChange={onChange} /> */}
                    <img src={img} alt="img" className='w-[7rem] h-[7rem] md:w-[17rem] md:h-[17rem] mx-auto my-auto' />
                </div>
                <div className="w-1/2 px-2 md:py-2">
                    <p className='text-sm md:text-xl md:text-left'>{brand}</p>
                    <div className="hidden md:grid my-5">
                        <p className='text-xl md:text-left'>Description</p>
                        <p className='text-left text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab perspiciatis exercitationem modi odio illo dolores, nihil consequatur accusamus dicta magnam.</p>
                    </div>
                    <div className="flex h-max w-max mx-auto my-2 md:my-0">
                        <button onClick={onClick1} className='w-max h-max hover:opacity-60'><img src={min} alt="min" className='h-4 w-4 md:w-6 md:h-6 border border-gray-400 rounded-full' /></button>
                        <p className='text-xs md:text-[19px] my-auto mx-6'>{qty}</p>
                        <button onClick={onClick2} className='w-max h-max hover:opacity-60'><img src={plus} alt="plus" className='h-4 w-4 md:w-6 md:h-6 border border-gray-400 rounded-full' /></button>
                        <div className="hidden wrapperPrice text-xs md:text-lg ml-20 md:flex">
                            <p className='mx-auto md:mx-0 md:ml-auto'>Total</p>
                            <p className='ml-3 text-red-600 mx-auto md:mx-0 md:ml-5 md:mr-auto'>Rp. {price}</p>
                        </div>
                    </div>
                    <div className="wrapperPrice text-xs md:text-lg md:hidden flex">
                        <p className='mx-auto md:mx-0 md:ml-auto'>Total</p>
                        <p className='ml-3 text-red-600 mx-auto md:mx-0 md:ml-5 md:mr-auto'>Rp. {price}</p>
                    </div>
                    <button onClick={onClickCheckout} className='flex mt-3 md:mt-10 hover:opacity-70 text-white bg-blue-600 md:py-1 py-0 w-full rounded-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 md:w-[2rem] h-[2rem] ml-auto">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                        <p className='text-xs my-auto md:text-lg mr-auto ml-2'>Buy now</p>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardBag