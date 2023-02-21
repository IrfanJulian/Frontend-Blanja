import React from 'react'
import Navbar from '../../component/module/Navbar'
import CardTransaction from '../../component/base/CardTransaction'

const Transaction = () => {

  return (
    <div>
        <div className="container mx-auto py-28">
            <p className='text-xl md:text-4xl my-5 md:mt-16 md:mb-7 font-medium'>Transactions</p>
            <div className="md:grid md:grid-cols-3 md:gap-5">
              <CardTransaction />
              <CardTransaction />
              <CardTransaction />
              <CardTransaction />
            </div>
        </div>
        <Navbar />
    </div>
  )
}

export default Transaction