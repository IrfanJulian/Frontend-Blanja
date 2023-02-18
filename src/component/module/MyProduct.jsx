import React from 'react'
import Card from '../base/Card'

const MyProduct = ({ className }) => {
  return (
    <div className={className}>
        <div className="container mx-auto px-5">
            <p className='text-2xl md:text-4xl font-semibold'>My List Product</p>
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

export default MyProduct