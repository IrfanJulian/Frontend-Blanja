import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCheckout } from '../../redux/action/checkoutAction'
import Card from '../base/Card'

const MyOrder = ({ className }) => {

  const id = localStorage.getItem('id')
  const dispatch = useDispatch()
  const { checkout } = useSelector((state)=>state.checkout)

  console.log(checkout);
  useEffect(()=>{
    dispatch(getCheckout(id))
  }, [dispatch, id])

  return (
    <div className={className}>
        <div className="container md:my-10 mx-auto px-5">
            <p className='text-2xl md:text-4xl font-semibold'>My Order Product</p>
            <div className="wrapper my-10 md:my-20 grid grid-cols-2 gap-6 md:grid-cols-5 md:gap-10">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    </div>
  )
}

export default MyOrder