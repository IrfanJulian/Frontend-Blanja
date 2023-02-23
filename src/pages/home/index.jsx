import React, { useState, useEffect } from 'react'
import CardProducts from '../../component/base/CardProducts'
import Carousel from '../../component/base/Carousel'
import Category from '../../component/base/Category'
import Navbar from '../../component/module/Navbar'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Loading from '../../component/base/Loading'

const Home = () => {

  const [page, setPage] = useState(1)
  const [product, setProduct] = useState()
  const [pagination, setPagination] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    const getData = async() => {
      setLoading(true)
      try {
        const res = await axios({
          method: 'GET',
          url: `${process.env.REACT_APP_API}products?page=${page}`
        })
        setProduct(res.data.data)
        setPagination(res.data.pagination)
        setLoading(false)
      } catch (error) {
        setLoading(false)
        console.log(error);
      }
    }
    getData()
  }, [page])

  const next = async() => {
    setPage((current)=>current + 1)
  }
  const prev = () => {
    setPage((current)=>current - 1)
  }

  return (
    <div className='py-10 md:pt-28' id='font-custom'>
      { loading === true ?
        <Loading />
      :
        null
      }
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
        { pagination ?
        <div className="flex w-max mx-auto mt-20">
          { pagination.currentPage <= 1 ?
          <button className='p-2 rounded-md bg-red-600 opacity-50'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          :
          <button onClick={prev} className='p-2 rounded-md bg-red-600 hover:opacity-90'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          }
          <div className="wrapper mx-5 flex my-auto">
            <p>{pagination.currentPage}</p>
            <p className='mx-2'>/</p>
            <p className='font-medium'>{pagination.totalPage}</p>
          </div>
          { pagination.currentPage >= pagination.totalPage ?
            <button className='p-2 rounded-md bg-red-600 opacity-50' disabled>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          :
            <button onClick={next} className='p-2 rounded-md bg-red-600 hover:opacity-90'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          }
        </div>
        : null }
    </div>
  )
}

export default Home