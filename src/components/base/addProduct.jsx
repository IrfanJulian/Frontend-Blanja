import axios from 'axios'
import React, {useState} from 'react'
import Swal from 'sweetalert2'
import add from '../../assets/add image.png'

const AddProduct = () => {

    const id_seller = localStorage.getItem('id')
    const token = localStorage.getItem('token')
    const [post, setPost] = useState({
        name: '',
        price: '',
        brand: '',
        stock: '',
        condition: '',
        description: '',
        id_seller: id_seller,
        category: '',
        size: ''
    })
    const [photo, setPhoto] = useState([])
    const handleChange = (e) => {
        setPost({
            ...post,
            [e.target.name]: e.target.value
        })
    }
    const handlePhoto = (e) => {
        setPhoto(e.target.files[0])
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('name', post.name)
        formData.append('price', post.price)
        formData.append('brand', post.brand)
        formData.append('stock', post.stock)
        formData.append('condition', post.condition)
        formData.append('description', post.description)
        formData.append('id_seller', post.id_seller)
        formData.append('category', post.category)
        formData.append('size', post.size)
        formData.append('photo', photo, photo.name)
        try {
            await axios({
                method: 'POST',
                url: 'http://localhost:4500/products',
                data: formData,
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
            Swal.fire({
                icon: 'success',
                title: 'Success...',
                text: 'Add product Success'
              })
            //   window.location.reload()
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Failed...',
                text: 'Add product failed'
              })
            console.log(error);
        }
    }


  return (
    <div>
        <div className="p-10 mb-10 border-2 border-gray-300 rounded-lg grid">
            <p className='text-3xl font-semibold text-start'>Inventory</p>
            <hr className='my-10 border' />
            <p className='text-gray-400 mb-3 text-start'>Product name</p>
            <input type="text" name='name' onChange={handleChange} value={post.name} className='py-3 px-5 border-2 outline-none rounded-xl font-semibold w-3/4 mr-auto' />
        </div>
        <div className="p-10 mb-10 border-2 border-gray-300 rounded-lg grid">
            <p className='text-3xl font-semibold text-start'>Item detail</p>
            <hr className='my-10 border' />
            <p className='text-gray-400 mb-3 text-start'>Unit price</p>
            <input type="text" name='price' onChange={handleChange} value={post.price} className='py-3 px-5 border-2 mb-8 outline-none rounded-xl font-semibold w-3/4 mr-auto' />
            <p className='text-gray-400 mb-3 text-start'>Brand</p>
            <input type="text" name='brand' onChange={handleChange} value={post.brand} className='py-3 px-5 border-2 mb-8 outline-none rounded-xl font-semibold w-3/4 mr-auto' />
            <p className='text-gray-400 mb-3 text-start'>Stock</p>
            <input type="text" name='stock' onChange={handleChange} value={post.stock} className='py-3 px-5 border-2 mb-8 outline-none rounded-xl font-semibold w-3/4 mr-auto' />
            <p className='text-gray-400 mb-3 text-start'>Condition</p>
            <input type="text" name='condition' onChange={handleChange} value={post.condition} className='py-3 px-5 mb-8 border-2 outline-none rounded-xl font-semibold w-3/4 mr-auto' />
            <p className='text-gray-400 mb-3 text-start'>Category</p>
            <input type="text" name='category' onChange={handleChange} value={post.category} className='py-3 px-5 mb-8 border-2 outline-none rounded-xl font-semibold w-3/4 mr-auto' />
            <p className='text-gray-400 mb-3 text-start'>Size</p>
            <input type="text" name='size' onChange={handleChange} value={post.size} className='py-3 px-5 border-2 outline-none rounded-xl font-semibold w-3/4 mr-auto' />
        </div>
        <div className="p-10 mb-10 border-2 border-gray-300 rounded-lg grid">
            <p className='text-3xl font-semibold text-start'>Photo of product</p>
            <hr className='my-10 border' />
            <input type="file" id='file' name='photo' onChange={handlePhoto} hidden />
            <label htmlFor="file">
                <div className="box rounded-xl py-16 w-3/4 border-4 border-dashed border-gray-300 text-3xl text-gray-300 font-semibold mx-auto">
                    <img src={add} className='w-1/4 h-1/4 mx-auto' alt="" />
                    <p className='text-xl text-black font-semibold mt-2'>Select your image product</p>
                </div>
            </label>
        </div>
        <div className="p-10 mb-10 border-2 border-gray-300 rounded-lg grid">
            <p className='text-3xl font-semibold text-start'>Description</p>
            <hr className='my-10 border' />
            <input type="text" name='description' onChange={handleChange} value={post.description} placeholder='Insert your product description . . .' className='py-16 px-5 border-2 mb-8 outline-none rounded-xl font-semibold w-3/4 mr-auto' />
        </div>
        <div className="grid mb-10">
            <button type='submit' onClick={handleSubmit} className='bg-red-600 py-3 px-20 rounded-full text-white text-xl font-semibold ml-auto'>Sell</button>
        </div>
    </div>
  )
}

export default AddProduct