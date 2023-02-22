import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import icons from '../../assets/user (1).png'
import { getDataUser } from '../../redux/action/userAction'
import Loading from '../base/Loading'

const MyAccount = ({ className }) => {

    const token = localStorage.getItem('token')
    const id = localStorage.getItem('id')
    const dispatch = useDispatch()
    const [disabledEdit, setDisabledEdit] = useState(false)
    const {user} = useSelector((state)=>state.user)
    const [loading, setLoading] = useState(false)
    const [image, setImage] = useState('')
    const [photo, setPhoto] = useState([])
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone_number: '',
        gender: '',
        birth: ''
    })

    useEffect(()=>{
        dispatch(getDataUser(id))
    }, [dispatch, id])

    useEffect(()=>{
        const getPhoto = async() => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API}user/${id}`)
                setImage(res.data.data[0].photo)
            } catch (error) {
                console.log(error);
            }
        }
        getPhoto()
    }, [id])

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }

    const handleEdit = () => {
        !disabledEdit ? setDisabledEdit(true) : setDisabledEdit(false)
    }
    
    const updatePhoto = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('photo', photo, photo.name)
        Swal.fire({
            title: 'Are you sure want to change photo?',
            text: "Your photo will change",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#000000',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
          }).then(async(result) => {
            setLoading(true)
            if (result.isConfirmed) {
                await axios({
                    method: 'PUT',
                    url: `${process.env.REACT_APP_API}user/photo/${id}`,
                    data: formData
                })
            setLoading(false)
            window.location.reload()
              Swal.fire(
                'Success!',
                'Photo has been change.',
                'success'
              )
            }
          })
    }
 
    const handleSubmit = (e) => {
        e.preventDefault()
        Swal.fire({
            title: 'Are you sure want to change data?',
            text: "Your data will change",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#000000',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
          }).then(async(result) => {
            setLoading(true)
            if (result.isConfirmed) {
                await axios({
                    method: 'PUT',
                    url: `${process.env.REACT_APP_API}user/${id}`,
                    data: form,
                    headers: {
                        authorization: `Bearer ${token}`
                    }
                })
                setLoading(false)
              Swal.fire(
                'Success!',
                'Data has been change.',
                'success'
              )
            }
          })
    }

  return (
    <div className={className}>
        { loading === true ? 
        <div className="wrapper grid">
            <div className='wrapper fixed top-0 left-0 h-screen justify-center w-screen bg-black opacity-40 overflow-auto'></div>
            <Loading />
        </div>
        : null }
        { user ?
        <div className="container mx-auto">
        <p className='text-2xl md:text-4xl font-semibold'>Account Setting</p>
            <div className="wrapperImage md:hidden">
                { image && image.length !== 0 ?
                <img src={user.photo} alt="pict" className='w-[10rem] h-[10rem] mx-auto mt-10 mb-8 rounded-full' />
                :
                <img src={icons} alt="pict" className='w-[10rem] h-[10rem] mx-auto mt-10 mb-8' />
                }
                { disabledEdit === true ?
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
                        <button onClick={updatePhoto} className='py-2 px-3 w-4/12 mx-auto rounded-full border-2 bg-red-600 text-white font-semibold text-lg md:text-lg mt-5 mb-10'>Save Image</button>
                    </div>
                    :
                    null
                }
                <button onClick={handleEdit} className={!disabledEdit ? 'flex mx-auto text-lg font-semibold mt-10' : 'flex mx-auto text-lg font-semibold mt-5 text-red-600'}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={disabledEdit ? "w-6 h-6 text-red-600 mr-1" : "w-6 h-6 mr-1"}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>
                    <p>{!disabledEdit ? 'Edit profile' : 'Cancel'}</p>
                </button>
            </div>
            <div className="md:flex">
                <div className="wrapperForm my-5 md:w-3/4">
                    <div className="w-3/4 mx-auto">
                        <button onClick={handleEdit} className={!disabledEdit ? 'hover:opacity-70 hidden md:flex text-xl ml-auto font-semibold mt-10' : 'hover:opacity-70 hidden md:flex text-xl ml-auto font-semibold mt-10 text-red-600'}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={disabledEdit ? "w-6 h-6 text-red-600 mr-1" : "w-6 h-6 mr-1"}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                            </svg>
                            <p>{!disabledEdit ? 'Edit profile' : 'Cancel'}</p>
                        </button>
                        <p className='text-lg md:text-xl text-left mb-2'>Name</p>
                        { disabledEdit === true ?
                        <input name='name' value={form.name} onChange={handleChange} type="text" className='border-4 outline-none rounded-md py-2 px-4 w-full text-lg md:text-xl' placeholder='Insert name' />
                        :
                        <div className="wrapper border-4 outline-none rounded-md py-2 px-4 w-full text-lg md:text-xl">
                            <p className='text-left'>{user.name}</p>
                        </div>
                        // <p type="text" className='border-4 outline-none rounded-md py-2 px-4 w-full text-lg md:text-xl' placeholder='Irfan Julian Store' disabled />
                        }
                    </div>
                    <div className="w-3/4 mx-auto mt-5">
                        <p className='text-lg md:text-xl text-left mb-2'>Email</p>
                        {disabledEdit === true ?
                        <input name='email' value={form.email} onChange={handleChange} type="text" className='border-4 outline-none rounded-md py-2 px-4 w-full text-lg md:text-xl' placeholder='Insert your email' />
                        :
                        <div className="wrapper border-4 outline-none rounded-md py-2 px-4 w-full text-lg md:text-xl">
                            <p className='text-left'>{user.email}</p>
                        </div>
                        }
                    </div>
                    <div className="w-3/4 mx-auto mt-5">
                        <p className='text-lg md:text-xl text-left mb-2'>Phone Number</p>
                        { disabledEdit === true ?
                        <input name='phone_number' value={form.phone_number} onChange={handleChange} type="text" className='border-4 outline-none rounded-md py-2 px-4 w-full text-lg md:text-xl' placeholder='Insert your phone number' />
                        :
                        <div className="wrapper border-4 outline-none rounded-md py-2 px-4 w-full text-lg md:text-xl">
                            <p className='text-left'>{user.phone_number}</p>
                        </div>
                        }
                    </div>
                    <div className="w-3/4 mx-auto mt-5">
                        <p className='text-lg md:text-left md:text-xl text-center mb-2'>Gender</p>
                        { disabledEdit === true ?
                        <select name='gender' value={form.gender} onChange={handleChange} className='text-lg md:w-1/2 md:text-xl text-left py-2 mb-2 border-4 pr-8 pl-2 rounded-md'>
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        :
                        <div className='text-lg px-3 mx-auto md:mx-0 font-semibold w-max md:w-1/2 md:text-xl text-left py-2 mb-2 border-4 rounded-md'>
                            <p>{user.gender}</p>
                        </div>
                        }
                    </div>
                    <div className="w-3/4 mx-auto mt-5">
                        <p className='text-lg md:text-left md:text-xl text-center mb-2'>Date of Birth</p>
                        { disabledEdit === true ?
                        <input name='birth' type="date" value={form.birth} onClick={handleChange} className='text-lg md:w-1/2 py-2 md:text-xl mb-2 border-4 px-2 outline-none rounded-md' />
                        :
                        <div className='text-lg mx-auto md:mx-0 w-max font-semibold md:w-1/2 py-2 md:text-xl mb-2 border-4 px-2 outline-none rounded-md md:text-left'>
                            <p>{user.birth}</p>
                        </div>
                        }
                    </div>
                </div>
                <div className="hidden md:block wrapper h-max mt-20">
                    { image && image.length !== 0 ?
                        <img src={user.photo} alt="pict" className='w-[10rem] h-[10rem] mx-auto mt-10 mb-8 rounded-full' />
                        :
                        <img src={icons} alt="pict" className='w-[10rem] h-[10rem] mx-auto mt-10 mb-8' />
                    }
                        { disabledEdit === true ?
                        <div className='grid'>
                            <label htmlFor='img' className='text-red-600 font-semibold hover:opacity-50 cursor-pointer -mt-14 ml-auto'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                </svg>
                            </label>
                            <input name='photo' type="file" id='img' onChange={(e)=>setPhoto(e.target.files[0])} className='hidden' />
                            <button onClick={updatePhoto} className='hover:opacity-80 py-2 px-3 rounded-full border-2 bg-red-600 text-white font-semibold text-lg md:text-lg'>Change Image</button>
                        </div>
                            :
                            null
                        }
                        <button onClick={handleEdit} className={!disabledEdit ? 'flex mx-auto hover:opacity-50 md:hidden text-lg font-semibold mt-10' : 'flex mx-auto hover:opacity-50 md:hidden text-lg font-semibold mt-10 text-red-600'}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={disabledEdit ? "w-6 h-6 text-red-600 mr-1" : "w-6 h-6 mr-1"}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                            </svg>
                            <p>{!disabledEdit ? 'Edit profile' : 'Cancel'}</p>
                        </button>
                    </div>
                </div>
            { disabledEdit ?
            <button onClick={handleSubmit} className='bg-red-600 my-5 hover:opacity-70 text-white py-2 px-20 rounded-full text-xl mb-10 font-semibold'>Save</button>
            :
            <button onClick={handleSubmit} className='bg-red-600 my-5 text-white py-2 px-20 rounded-full text-xl mb-10 font-semibold' disabled>Save</button>
            }
        </div>
        : null }
    </div>
  )
}

export default MyAccount