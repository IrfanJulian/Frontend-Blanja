import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardProducts from '../../component/base/CardProducts'
import Carousel from '../../component/base/Carousel'
import Category from '../../component/base/Category'
import Navbar from '../../component/module/Navbar'
import { getProduct } from '../../redux/action/productAction'
import { Link } from 'react-router-dom'
import Pagination from '../../component/base/Pagination'

const Home = () => {

  const [setPage] = useState(0)
  const { product } = useSelector((state)=>state.product)
  const dispatch = useDispatch()

  useEffect(()=>{
      dispatch(getProduct())
  }, [dispatch])

  return (
    <div className='py-10 md:pt-28' id='font-custom'>
        <Navbar />
        <Carousel className='mt-20 mb-10' />
        <Category className='md:my-20' />
        <div className="products container mx-auto">
          <p className='text-xl md:text-3xl font-semibold md:text-left my-10 md:mb-10'>New Products</p>
          <div>
            { product ?
              <div className="grid md:grid-cols-5 md:gap-12 px-20 md:px-8">
            { product.length !== 0 ? product.map((item)=>
            <Link key={item.id} to={`/product-detail/${item.id}`}>
              <CardProducts photo={item.photo} tittle={item.name} price={item.price} brand={item.brand} />
            </Link>
            ):
              <p className='text-md lg:text-xl font-bold'>Nothing Products to Show</p>
            }
            </div>
            : <p className='text-md lg:text-xl font-bold'>Nothing Products to Show</p> }
          </div>
        </div>
        <Pagination className='md: my-10' onClick1={()=>setPage((current)=>current+1)} onClick2={()=>setPage((current)=>current-1)} />
    </div>
  )
}

export default Home