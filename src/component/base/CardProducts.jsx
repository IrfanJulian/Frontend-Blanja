import React from 'react'
import { useNavigate } from 'react-router-dom'

const CardProducts = ({ photo, tittle, price, brand, classNameCard, classNameImage, classNameTittle, nav }) => {

  const navigate = useNavigate()

  return (
    <div onClick={()=>navigate(nav)} className={classNameCard ? classNameCard : 'card w-full md:h-full px-2 mx-auto md:mx-0 mb-10 md:mb-0 p-2 border-2 rounded-xl shadow-lg cursor-pointer hover:opacity-70'}>
        <img src={photo} alt="img" className={classNameImage ? classNameImage : 'h-36 md:h-48 mx-auto'} />
        <p className={classNameTittle ? classNameTittle : 'text-md mt-3 md:text-lg font-medium'}>{tittle}</p>
        <p className='text-sm md:text-md text-center md:px-4'>{brand}</p>
        <p className='text-md text-center md:text-lg font-semibold my-3'><span className='text-red-600 text-md'>{price}</span></p>
    </div>
  )
}

export default CardProducts