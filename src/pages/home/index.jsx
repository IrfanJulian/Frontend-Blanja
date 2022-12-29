import React from 'react'
import Carousel from '../../components/base/carousel'
import CategorySlider from '../../components/base/category-slider'
import Navbar from '../../components/base/navbar'
import ProductList from '../../components/base/product-list'

const Home = () => {
  return (
    <div>
        <div className="shadow-xl shadow-gray-200">
            <Navbar />     
        </div>
        <div className="container mx-auto my-20 overflow-hidden rounded-3xl w-1/2">
            <Carousel />
        </div>
        <div className="container mx-auto">
            <p className='text-4xl font-bold text-start'>Category</p>
            <p className='text-lg text-start my-5 text-gray-400'>What are you looking for</p>
            <CategorySlider />
        </div>
        <div className="container mx-auto mb-[5rem]">
            <p className='text-4xl font-bold text-black text-start'>Products</p>
            <p className='text-lg text-start my-5 text-gray-400'>You've never seen it before</p>
            <ProductList />
        </div>
    </div>
  )
}

export default Home