import axios from 'axios'
import React, { useState } from 'react'
import Swal from 'sweetalert2'

const ModalNewAddress = ({ clickClose, cancel }) => {

  const id = localStorage.getItem('id')
  const [form, setForm] = useState({
      recipient_name: '',
      recipient_phone: '', 
      address: ''
  })

  const handleChange = (e) => {
      setForm({
          ...form,
          [e.target.name]: e.target.value
      })
  }
  
  const updateAddress = async(e) => {
      e.preventDefault()
      try {
          await axios({
              method: 'PUT',
              url: `${process.env.REACT_APP_API}user/setaddress/${id}`,
              data: form
          })
          Swal.fire({
              icon: 'success',
              title: 'Success...',
              text: 'Address updated'
            })
            window.location.reload()
      } catch (error) {
          Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!'
            })
      }
  }

  return (
    <div className=''>
        <div onClick={cancel} className='fixed top-0 left-0 h-screen w-screen'></div>
        <div className="wrap fixed w-screen h-max top-1/4">
          <div className="w-10/12 mx-auto border-2 border-black md:w-5/12 rounded-xl bg-white p-3 md:p-8">
              <p className='text-2xl md:text-4xl font-semibold'>Add New Address</p>
              <hr className='my-5 border-t border-black' />
              <div className="wrapperform">
                  <input name='recipient_name' value={form.recipient_name} onChange={handleChange} type="text" className='border-2 outline-none rounded-xl w-full text-lg md:text-xl md:py-3 my-4 py-1 px-3' placeholder='Add recipients name' />
                  <input name='recipient_phone' value={form.recipient_phone} onChange={handleChange} type="text" className='border-2 outline-none rounded-xl w-full text-lg md:text-xl md:py-3 my-4 py-1 px-3' placeholder='Add recipients phone number' />
                  <textarea name='address' value={form.address} onChange={handleChange} type="text" className='border-2 outline-none h-36 md:h-52 rounded-xl w-full text-lg md:text-xl md:py-3 my-4 py-1 px-3' placeholder='Add address' />
                  <div className="flex w-max ml-auto">
                      <button onClick={updateAddress} className='py-2 w-28 md:py-3 md:w-[10rem] md:text-xl md:font-semibold rounded-full mt-5 bg-red-600 mr- text-white'>Save</button>
                      <button onClick={cancel} className='py-2 w-28 md:py-3 md:w-[10rem] md:text-xl md:font-semibold rounded-full mt-5 border-2 border-red-600 text-red-600 ml-2'>Cancel</button>
                  </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default ModalNewAddress