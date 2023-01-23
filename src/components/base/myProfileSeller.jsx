import React, {useState,useEffect} from 'react'
import line from '../../assets/Line.png'
import icon from '../../assets/user (1).png'
import axios from 'axios'
import Swal from 'sweetalert2'

const MyProfile = () => {

    const id = localStorage.getItem('id')
    const token = localStorage.getItem('token')
    const [update, setUpdate] = useState({
        name: '',
        email: '',
        phone_number: '',
        store_description: ''
    })

    const [data, setData] = useState()
    useEffect(()=>{
        const getData = async () => {
            const res = await axios({
                method: 'GET',
                url: `${process.env.REACT_APP_API}/user/${id}`,
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
            setData(res.data.data[0])
        }
        getData()
    }, [id, token])
    const [photo, setPhoto] = useState([])
    const handleChange = (e) => {
        setUpdate({
            ...update,
            [e.target.name]: e.target.value
        })
    }
    const handlePhoto = (e) => {
        setPhoto(e.target.files[0])
    }
    const handleUpdate = async(e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('name', update.name)
        formData.append('email', update.email)
        formData.append('phone_number', update.phone_number)
        formData.append('store_description', update.store_description)
        formData.append('photo', photo, photo.name)
        try {
            await axios({
                method: 'PUT',
                url: `${process.env.REACT_APP_API}/user/${id}`,
                data: formData,
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
            Swal.fire({
                icon: 'success',
                title: 'Success...',
                text: 'Update product Success'
              })
              window.location.reload()
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Failed...',
                text: error
              })
              console.log(error);
        }
    }


  return (
    <div className='w-full mb-10'>
        <div className="p-10 border-2 border-gray-300 rounded-lg">
            <p className='text-4xl font-semibold text-start'>My Profile Store</p>
            <p className='text-xl text-gray-400 text-start mt-5'>Manage your profile information</p>
            <hr className='my-10 border border-gray-300' />
            <div className="wrapper flex">
                <div className="w-8/12">
                    <div className="flex mb-5 w-full">
                        <p className='text-xl text-gray-400 w-1/4 my-auto text-end'>Store Name</p>
                        <input type="text" name='name' onChange={handleChange} value={update.name} className='ml-10 border-2 w-full border-gray-300 py-4 px-3 outline-none font-semibold rounded-lg text-xl' placeholder='Insert your name . . .' />
                    </div>
                    <div className="flex mb-5 w-full">
                        <p className='text-xl text-gray-400 w-1/4 my-auto text-end'>Email</p>
                        <input type="text" name='email' onChange={handleChange} value={update.email} className='ml-10 border-2 w-full border-gray-300 py-4 px-3 outline-none font-semibold rounded-lg text-xl' placeholder='Insert your email . . .' />
                    </div>
                    <div className="flex mb-5 w-full">
                        <p className='text-xl text-gray-400 w-1/4 my-auto text-end'>Phone number</p>
                        <input type="text" name='phone_number' onChange={handleChange} value={update.phone_number} className='ml-10 border-2 w-full border-gray-300 py-4 px-3 outline-none font-semibold rounded-lg text-xl' placeholder='Insert your phone number . . .' />
                    </div>
                    <div className="flex mb-5 w-full">
                        <p className='text-xl text-gray-400 w-1/4 my-auto text-end'>Store description</p>
                        <input type="text" name='store_description' onChange={handleChange} value={update.store_description} className='ml-10 border-2 w-full border-gray-300 py-16 px-3 outline-none font-semibold rounded-lg text-xl' placeholder='Insert your store description . . .' />
                    </div>
                    <button type='submit' onClick={handleUpdate} className='py-4 px-16 bg-red-500 rounded-full text-white text-xl font-semibold mt-5'>Save</button>
                </div>
                <div className="w-1/12"><img src={line} alt="" className='mx-auto h-3/4' /></div>
                <div className="w-3/12">
                    {data ?
                    <div className="wrapperimg w-[10rem] h-[10rem] overflow-hidden rounded-full mx-auto">
                        <img src={data.photo} alt="" className='w-[10rem] h-[10rem]' />
                    </div>
                    :
                    <div className="wrapperimg w-[10rem] h-[10rem] overflow-hidden rounded-full mx-auto">
                        <img src={icon} alt="" className='w-[10rem] h-[10rem]' />
                    </div>
                    }
                    <div className="file pt-10">
                        <input type="file" name='photo' onChange={handlePhoto} id='file' hidden />
                        <label htmlFor="file" className='px-10 py-2 border text-xl font-semibold border-gray-400 text-gray-400 rounded-full'>Select image</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MyProfile