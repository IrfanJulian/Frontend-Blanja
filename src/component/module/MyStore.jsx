import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
// import icons from '../../assets/user (2).png'
import { getDataUser } from '../../redux/action/userAction'
import Loading from '../base/Loading'
import ProfilePict from '../base/ProfilePict'

const MyStore = ({ className }) => {

    const username = localStorage.getItem('name')
    const id = localStorage.getItem('id')
    const token = localStorage.getItem('token')
    const [edit, setEdit] = useState(false)
    const dispatch = useDispatch()
    const { user } = useSelector((state)=>state.user)
    const image = user.photo
    const [loading, setLoading] = useState(false)
    const [photo, setPhoto] = useState([])
    const [form, setForm] = useState({
        store_name: '',
        email: '',
        phone_number: '',
        store_description: ''
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const updatePhoto = async(e) => {
        e.preventDefault()
        setLoading(true)
        const formData = new FormData()
        formData.append('photo', photo, photo.name)
        try {
            await axios({
                method: 'PUT',
                url: `${process.env.REACT_APP_API}user/photo/${id}`,
                data: formData,

            })
            setLoading(false)
            Swal.fire(
                'Succeess!',
                'Your data has been updated.',
                'success'
              )
              window.location.reload()
        } catch (error) {
            setLoading(false)
            Swal.fire(
                'Failed!',
                'Your data has been updated.',
                'error'
                )
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        Swal.fire({
            title: 'Update Data',
            text: "Data will be update and change",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#000000',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
          }).then(async(result) => {
            if (result.isConfirmed) {
                setLoading(true)
                await axios({
                    method: 'PUT',
                    url: `${process.env.REACT_APP_API}user/${id}`,
                    data: {
                        name: username,
                        store_name: form.store_name,
                        email: form.email,
                        phone_number: form.phone_number,
                        store_description: form.store_description
                    },
                    headers: {
                        authorization: `Bearer ${token}`
                    }
                })
                setLoading(false)
                Swal.fire(
                    'Succeess!',
                    'Your data has been updated.',
                    'success'
                    )
            }else{
                setLoading(false)
                Swal.fire(
                    'failed!',
                    'Your data has been updated.',
                    'error'
                    )
                    }
                })
            }
            
    useEffect(()=>{
        dispatch(getDataUser(id))
    }, [dispatch, id])

  return (
    <div className={className}>
        { loading === true ? 
            <div className="wrapper w-screen">
                <div className='wrapper absolute top-0 left-0 bg-black opacity-40 h-screen w-full'></div>
                <Loading className='my-auto mx-auto' />
            </div>
        : null }
        <div className="container md:pt-20 mx-auto">
            <p className='text-2xl md:text-4xl font-semibold'>Store Setting</p>
            <button onClick={()=>edit === false ? setEdit(true) : setEdit(false)} className={`flex md:hover:opacity-50 w-max ml-auto mr-10 mt-14 cursor-pointer md:text-xl ${edit ? 'text-red-600' : 'text-black'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 md:w-8 md:h-8 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>
                <p className='ml-2 my-auto'>{edit ? 'Cancel' : 'Edit Profile'}</p>
            </button>
            <div className="wrapperImage md:hidden">
            { image && image.length !== 0 ?
                <img src={image} alt="pict" className='w-[10rem] h-[10rem] mx-auto mt-3 mb-8 rounded-full' />
                :
                <ProfilePict className='w-[10rem] h-[10rem] p-3 mb-12' icon='w-24 h-24 mt-3' />
            }

                <div className='grid -mt-5'>
                    <div className="flex text-red-600 w-max mx-auto">
                        <p className='ml-auto'>Select image</p>
                        <label htmlFor='img' className='ml-3 cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                            </svg>
                            <input name='photo' type="file" id='img' onChange={(e)=>setPhoto(e.target.files[0])} className='hidden' />
                        </label>
                    </div>
                    { !edit ?
                    <button onClick={updatePhoto} className='py-2 px-3 w-4/12 mx-auto rounded-full border-2 bg-red-600 text-white font-semibold text-lg md:text-lg mt-5 mb-10' disabled>Save Image</button>
                    :
                    <button onClick={updatePhoto} className='py-2 px-3 w-4/12 mx-auto rounded-full border-2 bg-red-600 opacity-50 text-white font-semibold text-lg md:text-lg mt-5 mb-10'>Save Image</button>
                    }
                </div>

            </div>
            <div className="md:flex">
                { user ?
                <div className="wrapperForm my-10 md:w-3/4">
                    <div className="w-3/4 mx-auto">
                        <p className='text-md font-medium md:text-xl text-left mb-2'>Store Name</p>
                        { edit ? 
                        <input name='store_name' value={form.store_name} onChange={handleChange} type="text" className='border-4 outline-none rounded-md py-2 px-4 w-full text-md md:text-xl' placeholder='Insert your store name' />
                        :
                        <div className="border-4 rounded-md py-2 px-4 w-full text-md md:text-xl text-left">
                            <p>{user.store_name}</p>
                        </div>
                        }
                    </div>
                    <div className="w-3/4 mx-auto mt-5">
                        <p className='text-md font-medium md:text-xl text-left mb-2'>Email</p>
                        { edit ?
                        <input name='email' value={form.email} onChange={handleChange} type="text" className='border-4 outline-none rounded-md py-2 px-4 w-full text-md md:text-xl' placeholder='Insert your store email' />
                        :
                        <div className="border-4 rounded-md py-2 px-2 w-full text-md md:text-xl text-left">
                            <p>{user.email}</p>
                        </div>
                        }
                    </div>
                    <div className="w-3/4 mx-auto mt-5">
                        <p className='text-md font-medium md:text-xl text-left mb-2'>Phone number</p>
                    { edit ?
                        <input name='phone_number' value={form.phone_number} onChange={handleChange} type="text" className='border-4 outline-none rounded-md py-2 px-4 w-full text-md md:text-xl' placeholder='Insert your store phone' />
                        :
                        <div className="border-4 rounded-md py-2 px-2 w-full text-md md:text-xl text-left">
                            <p>{user.phone_number}</p>
                        </div>
                    }
                    </div>
                    <div className="w-3/4 mx-auto mt-5">
                        <p className='text-md font-medium md:text-xl text-left mb-2'>Store Description</p>
                    { edit ?
                        <textarea name='store_description' value={form.store_description} onChange={handleChange} type="text" className='border-4 outline-none rounded-md py-2 px-4 w-full text-md md:text-xl h-36' placeholder='Insert your store description' />
                        :
                        <div className="border-4 rounded-md py-2 px-4 w-full text-md md:text-xl h-36 overflow-auto text-left">
                            <p>{user.store_description}</p>
                        </div>
                    }
                    </div>
                </div>
                : null }
                <div className="hidden md:block wrapper h-max mt-20">
                    { image && image.length !== 0 ?
                        <img src={image} alt="pict" className='w-[18rem] h-[18rem] mx-auto mb-8 rounded-full' />
                        :
                        <ProfilePict className='w-[10rem] h-[10rem] p-3 mb-12' icon='w-24 h-24' />
                    }

                        <div className='grid -mt-5'>
                            <div className="flex text-red-600 hover:opacity-50 w-max mx-auto">
                                <label htmlFor='img' className='ml-3 cursor-pointer flex space-x-2'>
                                    <p className='ml-auto text-xl my-auto'>Select image</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                    </svg>
                                    <input name='photo' type="file" id='img' onChange={(e)=>setPhoto(e.target.files[0])} className='hidden' />
                                </label>
                            </div>
                            { edit ?
                            <button onClick={updatePhoto} className='py-2 text-xl px-20 mx-auto rounded-full border-2 opacity-50 bg-red-600 text-white font-semibold mt-5 mb-10' disabled>Save Image</button>
                            :
                            <button onClick={updatePhoto} className='py-2 text-xl px-20 mx-auto rounded-full border-2 hover:opacity-80 bg-red-600 text-white font-semibold mt-5 mb-10'>Save Image</button>
                            }
                        </div>
                    </div>
                </div>
            <button onClick={handleSubmit} className={`${edit ? 'bg-red-600 hover:opacity-70' : 'bg-red-300'} text-white py-2 px-20 rounded-full text-xl mb-10 font-semibold`} disabled={edit ? false : true}>Save</button>
        </div>
    </div>
  )
}

export default MyStore