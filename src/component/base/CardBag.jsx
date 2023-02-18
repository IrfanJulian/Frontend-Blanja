import React from 'react'
import img from '../../assets/bomber eastern wolves.jpg'
import min from '../../assets/min.png'
import plus from '../../assets/plus.png'

const CardBag = ({ className, onClick1, onClick2, onChange, qty, price, name }) => {

  return (
    <div className={className}>
        <div className="container md:flex mx-auto px-4">
            <div className="card md:w-1/2 md:mr-4 flex border-2 p-2">
                <div className="w-1/2 border-r-2 flex">
                    <input type="checkbox" onChange={onChange} />
                    <img src={img} alt="img" className='w-[7rem] h-[7rem] mx-auto' />
                </div>
                <div className="w-1/2 px-3">
                    <p className='text-xs font-semibold'>{name}</p>
                    <div className="flex h-max w-max mx-auto">
                        <button onClick={onClick1} className='w-max h-max'><img src={min} alt="min" className='h-4 m-4' /></button>
                        <p className='text-xs my-auto'>{qty}</p>
                        <button onClick={onClick2} className='w-max h-max'><img src={plus} alt="plus" className='h-4 m-4' /></button>
                    </div>
                    <div className="wrapperPrice text-xs flex">
                        <p className='mx-auto'>Total =</p>
                        <p className='ml-3 text-red-600 mx-auto'>Rp. {price}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardBag