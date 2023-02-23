import axios from 'axios'
import React, { useState } from 'react'
import Swal from 'sweetalert2'
import Loading from '../base/Loading'

const ProductSelling = () => {

  const idUser = localStorage.getItem('id')
  const token = localStorage.getItem('token')
  const [form, setForm] = useState({
    name: '',
    price: '',
    stock: '',
    category: '',
    description: '' ,
    brand: '',
    condition: ''
  })
  console.log(form);

  const [loading, setLoading] = useState(false)
  const [photo, setPhoto] = useState([])

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('name', form.name)
    formData.append('price', form.price)
    formData.append('stock', form.stock)
    formData.append('category', form.category)
    formData.append('description', form.description)
    formData.append('brand', form.brand)
    formData.append('condition', form.condition)
    formData.append('id_seller', idUser)
    formData.append('photo', photo, photo.name)
    try {
      setLoading(true)
      await axios({
        method: 'POST',
        url: `${process.env.REACT_APP_API}products`,
        data: formData,
        headers: {
          authorization: `Bearer ${token}`
        }
      })
      setLoading(false)
      Swal.fire({
        icon: 'success',
        title: 'Success...',
        text: 'Add product success'
      })
      window.location.reload()
    } catch (error) {
      setLoading(false)
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!'
      })
    }
  } 

  return (
    <div>
        { loading === true ? 
          <div className="wrapper grid">
              <div className='wrapper fixed top-0 left-0 h-screen justify-center w-screen bg-black opacity-40 overflow-auto'></div>
              <Loading className='my-auto mx-auto' />
          </div>
        : null }
        <p className='text-2xl md:text-4xl md:mt-10 font-semibold'>Selling Product</p>
        {/* <hr className='my-5 border-t border-black'/> */}
        <div className="wrapperForm w-3/4 md:w-5/12 mx-auto">
          <div className="name mt-10">
            <p className='text-left md:text-xl md:font-medium md:mb-1'>Product Name</p>
            <input name='name' value={form.name} onChange={handleChange} type="text" className='py-2 px-5 border-2 rounded-md w-full' />
          </div>
          <div className="name mt-5">
            <p className='text-left md:text-xl md:font-medium md:mb-1'>Product Brand</p>
            <input name='brand' value={form.brand} onChange={handleChange} type="text" className='py-2 px-5 border-2 rounded-md w-full' />
          </div>
          <div className="name mt-5">
            <p className='text-left md:text-xl md:font-medium md:mb-1'>Price</p>
            <input name='price' value={form.price} onChange={handleChange} type="text" className='py-2 px-5 border-2 rounded-md w-full' />
          </div>
          <div className="name mt-5">
            <p className='text-left md:text-xl md:font-medium md:mb-1'>Stock</p>
            <input name='stock' value={form.stock} onChange={handleChange} type="text" className='py-2 px-5 border-2 rounded-md w-full' />
          </div>
          <div className="category mt-5">
            <p className='text-left md:text-xl md:font-medium md:mb-1'>Category</p>
            <select name='category' value={form.category} onChange={handleChange} className="name py-2 px-5 border-2 rounded-md w-full">
              <option value="" disabled>Select Category</option>
              <option value="1">Shirt</option>
              <option value="2">Jacket</option>
              <option value="3">Hoodie</option>
              <option value="4">Pants</option>
              <option value="5">Short</option>
              <option value="6">Dress</option>
              <option value="7">Suit</option>
              <option value="8">Watch</option>
              <option value="9">Shoes</option>
              <option value="10">Underwear</option>
              <option value="11">Underwear</option>
            </select>
          </div>
          <div className="category mt-5">
            <p className='text-left md:text-xl md:font-medium md:mb-1'>Condition</p>
            <select name='condition' value={form.condition} onChange={handleChange} className="name py-2 px-5 border-2 rounded-md w-full">
              <option value="" disabled>Select Condition</option>
              <option value="new">New</option>
              <option value="second">Second</option>
            </select>
          </div>
          <div className="name mt-5">
            <p className='text-left md:text-xl md:font-medium md:mb-1'>Description</p>
            <textarea name='descroption' value={form.descroption} onChange={handleChange} type="text" className='py-2 px-5 border-2 rounded-md w-full h-20' />
          </div>
          <div className="name my-5">
            <p className='text-left md:text-xl md:font-medium md:mb-1'>Photo</p>
            <label htmlFor="img" className='cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-40 h-32 opacity-30 mx-auto">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
                <p className='font-semibold text-lg opacity-50'>Just allow JPG or PNG File!</p>
            </label>
            <input name='photo' onChange={(e)=>setPhoto(e.target.files[0])} type="file" id='img' className='hidden' />
          </div>
          <button onClick={handleSubmit} className='bg-red-600 py-2 px-7 md:px-16 md:text-xl md:font-semibold rounded-full my-10 text-white'>Post Product</button>
        </div>
    </div>
  )
}

export default ProductSelling