import React, { useState } from 'react'
import icon from '../../assets/user (2).png'

const Sidebar = ({ onAccount, onProduct, onSelling, onOrder, className }) => {

    const [account, setAccount] = useState(false)
    const [Product, setProduct] = useState(false)
    const [order, setOrder] = useState(false)
    const [role, setRole] = useState('seller')

  return (
      <div className={className} id='font-custom' >
            <div className="wrapeperGlobal my-36 md:my-48 mx-10">
              {/* --------------------head--------------------  */}
                <div className="flex head">
                  <img src={icon} alt="pict" className='w-16 h-16 rounded-full' />
                  <div className='mx-5 h-max my-auto'>
                    <p className='font-medium text-left'>Irfan Julian</p>
                    <div className='flex cursor-pointer'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                      </svg>
                      <p className='mt-1'>Edit profile</p>
                    </div>
                  </div>
                </div> 
                {/* --------------------head--------------------  

                --------------------body--------------------  */}
                <div className="body mt-10 ml-3">

                  <div onClick={()=>account ? setAccount(false) : setAccount(true)} className="account cursor-pointer relative bg-white flex">
                    <div className="icon p-2 rounded-full bg-[#456BF3] w-max h-max">
                      {role !== 'seller' ?
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
                    </svg>
                    }
                    </div>
                    <button className='ml-3 text-slate-600 my-auto'>{role === 'seller' ? 'My Store' : 'My Account'}</button>
                    {role === 'seller' ?
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-4 h-4 my-auto ml-auto duration-500 ${account ? 'rotate-180' : 'rotate-0'}`}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                    : null }
                  </div>
                  { role === 'seller' ?
                  <div onClick={()=>{onAccount();}} className={`wrappe cursor-pointer bg-white py-3 w-full duration-500 transition-all pl-16 ${account ? 'mt-0' :  '-mt-12'}`}>
                    <p className='text-left'>{role === 'seller' ? 'My Store' : 'My Account'}</p>
                  </div>
                  : null }
                  <div onClick={()=>Product ? setProduct(false) : setProduct(true)} className="address cursor-pointer relative bg-white flex mt-5">
                    <div className="icon p-2 rounded-full bg-[#F36F45] w-max h-max">
                      { role !== 'seller' ?
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                      :
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                      </svg>
                      }
                    </div>
                    <button className='ml-3 text-slate-600 my-auto'>{role === 'seller' ? 'My Product' : 'Product Address'}</button>
                    {role === 'seller' ?
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-4 h-4 my-auto ml-auto duration-500 ${Product ? 'rotate-180' : 'rotate-0'}`}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                    : null }
                  </div>
                  { role === 'seller' ?
                  <div className={`wrappe bg-white py-3 w-full duration-500 transition-all pl-16 ${Product ? 'mt-0' : '-mt-[80px] text-white'}`}>
                    <div className='cursor-pointer' onClick={()=>{onProduct();}}>
                      <p className='text-left'>My Product</p>
                    </div>
                    <div className='cursor-pointer' onClick={()=>{onSelling();}}>
                      <p className='mt-2 text-left'>Selling Product</p>
                    </div>
                  </div>
                  : null }
                  <div onClick={()=>order ? setOrder(false) : setOrder(true)} className="order mt-5 cursor-pointer relative bg-white flex">
                    <div className="icon p-2 rounded-full bg-[#F3456F] w-max h-max">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                    </div>
                    <button className='ml-3 text-slate-600 my-auto'>My Order</button>
                    {role === 'seller' ?
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-4 h-4 my-auto ml-auto duration-500 ${order ? 'rotate-180' : 'rotate-0'}`}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                    : null }
                  </div>
                  { role === 'seller' ?
                  <div onClick={()=>{onOrder();}} className={`wrappe cursor-pointer bg-white py-3 w-full duration-500 transition-all pl-16 ${order ? 'mt-0' :  '-mt-12'}`}>
                    <p className='text-left'>My Order</p>
                  </div>
                  : null }
                </div>
                {/* --------------------body--------------------  */}
            </div>
          </div>
  )
}

export default Sidebar