import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMyProduct } from '../../redux/action/productAction'
import Card from '../base/Card'

const MyProduct = ({ className }) => {

  const id = localStorage.getItem('id')
  const dispatch = useDispatch()
  const { myProduct } = useSelector((state)=>state.product)

  useEffect(()=>{
    dispatch(getMyProduct(id))
  }, [dispatch, id])

  return (
    <div className={className}>
        <div className="container mx-auto px-5">
            <p className='text-2xl md:text-4xl font-semibold'>My List Product</p>
            <div className="wrapper my-10 md:my-20 grid grid-cols-2 gap-5 md:grid-cols-5 md:gap-10">
              { myProduct ? myProduct.map((item)=>
                <Card key={item.id} name={item.name} photo={item.photo} stock={item.stock} price={item.price} />
              )
              : null }
            </div>
        </div>
    </div>
  )
}

export default MyProduct