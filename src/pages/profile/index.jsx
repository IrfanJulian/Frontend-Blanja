import React, { useState } from 'react'
import MyOrder from '../../component/module/MyOrder'
import MyProduct from '../../component/module/MyProduct'
import MyStore from '../../component/module/MyStore'
import Navbar from '../../component/module/Navbar'
import ProductSelling from '../../component/module/ProductSelling'
import Sidebar from '../../component/module/Sidebar'

const Profile = () => {

  const [show, setShow] = useState('my-account')
  const [menu, setMenu] = useState(false)
  const [menu2, setMenu2] = useState(false)
  

  const open = () => {
    setMenu(true)
  }

  const close = () => {
    setMenu(false)
  }

  return (
    <div className='pt-36'>
      { show === 'my-account' ? 
        <MyStore />
        : show === 'my-product' ?
        <MyProduct className='' />
        : show === 'product-selling' ?
        <ProductSelling />
        :
        <MyOrder />
      }
      <Sidebar className={`wrap absolute shadow-xl top-0 left-0 bg-white h-full w-3/4 md:w-1/4 duration-500 transition-all ${menu ? 'ml-0' : '-ml-[500px]'}`} onAccount={()=>{setShow('my-account'); close()}} onProduct={()=>{setShow('my-product'); close()}} onSelling={()=>{setShow('product-selling'); close()}} onOrder={()=>{setShow('my-order'); close()}}/>
      <button onClick={()=>menu ? close() : open()} className={`absolute top-28 md:top-40 md:left-7 duration-500 ${menu === true ? 'left-[310px] rotate-180 md:left-[420px]' : 'left-5 rotate-0'}`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className='w-6 h-6 text-red-600'>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
        </svg>
      </button> 
      <Navbar click={()=>menu2 === true ? setMenu2(false) : setMenu2(true)} close={close} />
    </div>
  )
}

export default Profile