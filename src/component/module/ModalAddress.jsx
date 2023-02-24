import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDataUser } from '../../redux/action/userAction'

const ModalAddress = ({ clickClose, openAddAddress }) => {
  
  const id = localStorage.getItem('id')
  const dispatch = useDispatch()
  const { user } = useSelector((state)=>state.user)

  useEffect(()=>{
    dispatch(getDataUser(id))
  }, [dispatch, id])

  return (
    <div className=''>
        <div onClick={clickClose} className="fixed top-0 left-0 w-screen h-screen bg-black opacity-40"></div> 
        <div className='fixed top-1/4 wrapper w-screen h-max'>
        { user ? 
          <div className="w-10/12 m-auto md:w-5/12 border-2 mx-auto h-max border-black rounded-xl bg-white md:p-8 p-3">
            <p className='text-2xl md:text-4xl font-semibold'>Your Address</p>
            <hr className='my-5 border-t border-black' />
            <div className="wrapperInfo border my-10 rounded-xl md:p-5 p-2 border-black">
              <p className='text-left md:text-2xl font-semibold'>{user.recipient_name}</p>
              <p className='text-left md:text-xl my-3'>{user.address}</p>
              <p className='text-left md:text-2xl font-medium'>{user.recipient_phone}</p>
              <button onClick={openAddAddress} className='text-red-600 md:text-2xl font-semibold mt-5'>Change Address</button>
            </div>
          </div>
        :
          <p className='text-xl'>No address to review</p>
        }
        </div>
    </div>
  )
}

export default ModalAddress