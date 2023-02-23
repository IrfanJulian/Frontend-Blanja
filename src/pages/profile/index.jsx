import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ModalAddress from '../../component/module/ModalAddress'
import ModalNewAddress from '../../component/module/ModalNewAddress'
import MyAccount from '../../component/module/MyAccount'
import MyOrder from '../../component/module/MyOrder'
import MyProduct from '../../component/module/MyProduct'
import MyStore from '../../component/module/MyStore'
import Navbar from '../../component/module/Navbar'
import ProductSelling from '../../component/module/ProductSelling'
import Sidebar from '../../component/module/Sidebar'
import { getDataUser } from '../../redux/action/userAction'

const Profile = () => {

  const id = localStorage.getItem('id')
  const { user } = useSelector((state)=>state.user)
  const dispatch = useDispatch()
  const [show, setShow] = useState('my-account')
  const [menu, setMenu] = useState(false)
  const [menu2, setMenu2] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [addAddress, setAddAddress] = useState(false)
  const [edit, setEdit] = useState(false)

  useEffect(()=>{
    dispatch(getDataUser(id))
  }, [dispatch, id])

  const open = () => {
    setMenu(true)
  }

  const close = () => {
    setMenu(false)
  }

  const handleOpenModal = () => {
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
    setAddAddress(false)
  }

  return (
    <>
      <div className='pt-36'>
        { user && show === 'my-account' ? 
          <>
          { user.role === 'seller' ?
          <MyStore />
          :
          <MyAccount className='md:mt-10' />
          }
          </>
          : show === 'my-product' ?
          <MyProduct className='md:mt-20' />
          : show === 'product-selling' ?
          <ProductSelling />
          : show === 'my-order' ?
          <MyOrder /> 
          : show === 'my-account-customer' ?
          <MyAccount disabledEdit={edit} className='mt-10' />
          :
          <MyOrder />
        }
        { openModal ?
          <ModalAddress clickClose={()=>setOpenModal(false)} openAddAddress={()=>setAddAddress(true)} />
          :
          null
        }
        { addAddress ?
          <ModalNewAddress clickClose={()=>setAddAddress(false)} cancel={()=>{setAddAddress(false); setOpenModal(true)}} />
          :
          null
        }
          <Sidebar className={`wrap fixed shadow-xl top-0 left-0 bg-white h-full w-3/4 md:w-2/12 duration-500 transition-all ${menu ? 'ml-0' : '-ml-[500px]'}`} onShippingAddress={()=>{handleOpenModal(); close()}} onAccount={()=>{setShow('my-account'); close()}} onProduct={()=>{setShow('my-product'); close()}} onSelling={()=>{setShow('product-selling'); close()}} onOrder={()=>{setShow('my-order'); close(); handleCloseModal()}} onAccountCustomer={()=>{setShow('my-account-customer'); close(); handleCloseModal()}} clickEdit={()=>{setEdit(true); close()}} background={menu} />
          <button onClick={()=>menu ? close() : open()} className={`absolute hover:text-red-600 top-28 md:top-40 md:left-7 duration-500 ${menu === true ? 'left-[260px] rotate-180 md:left-[260px]' : 'left-5 rotate-0'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className='w-6 h-6'>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
            </svg>
          </button> 
        {/* <div className={menu === true ? 'block' : 'block'}> */}
          <div className={`background duration-500 fixed top-0 right-0 w-1/4 md:w-10/12 transition-all bg-black opacity-40 h-screen ${menu === true ? 'mr-0' : '-mr-[1600px]'}`}></div>
        {/* </div> */}
        <Navbar click={()=>menu2 === true ? setMenu2(false) : setMenu2(true)} close={close} />
      </div>
    </>
  )
}

export default Profile