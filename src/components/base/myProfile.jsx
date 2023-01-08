import React, {useState,useEffect} from 'react'
// import CheckBox from './check-box'
import line from '../../assets/Line.png'
import icon from '../../assets/user (1).png'
import axios from 'axios'
import Swal from 'sweetalert2'

const MyProfile = () => {

    const id = localStorage.getItem('id')
    const token = localStorage.getItem('token')
    const [data, setData] = useState()
    useEffect(()=>{
        const getData = async () => {
            const res = await axios({
                method: 'GET',
                url: `http://localhost:4500/user/${id}`,
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
            setData(res.data.data[0])
        }
        getData()
    }, [id, token])

    const [dataCustomer, setDataCustomer] = useState({
        name: '',
        email: '',
        phone_number: '',
        birth: '',
    })

    const [photo, setPhoto] = useState([])

    const handleUpdate = async() => {
        const formData = new FormData()
        formData.append('name', dataCustomer.name)
        formData.append('email', dataCustomer.email)
        formData.append('phone_number', dataCustomer.phone_number)
        formData.append('birth', dataCustomer.birth)
        formData.append('photo', photo, photo.name)
        try {
            await axios({
                method: 'PUT',
                url: `http://localhost:4500/user/${id}`,
                data: formData
            })
            Swal.fire({
                icon: 'success',
                title: 'Success...',
                text: 'Update data Success'
              })
            window.location.reload()
        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = (e) => {
        setDataCustomer({
            ...dataCustomer,
            [e.target.name]: e.target.value
        })
    }

  return (
    <div className='w-full'>
        <div className="p-10 border-2 border-gray-300 rounded-lg">
            <p className='text-4xl font-semibold text-start'>My Profile</p>
            <p className='text-xl text-gray-400 text-start mt-5'>Manage your profile information</p>
            <hr className='my-10 border border-gray-300' />
            <div className="wrapper flex">
                <div className="w-8/12">
                    <div className="flex mb-5 w-full">
                        <p className='text-xl text-gray-400 w-1/4 my-auto text-end'>Name</p>
                        <input type="text" name='name' value={dataCustomer.name} onChange={handleChange} className='ml-10 border-2 w-full border-gray-300 py-4 px-3 outline-none font-semibold rounded-lg text-xl' placeholder='Insert your name . . .' />
                    </div>
                    <div className="flex mb-5 w-full">
                        <p className='text-xl text-gray-400 w-1/4 my-auto text-end'>Email</p>
                        <input type="text" name='email' value={dataCustomer.email} onChange={handleChange} className='ml-10 border-2 w-full border-gray-300 py-4 px-3 outline-none font-semibold rounded-lg text-xl' placeholder='Insert your email . . .' />
                    </div>
                    <div className="flex mb-5 w-full">
                        <p className='text-xl text-gray-400 w-1/4 my-auto text-end'>Phone number</p>
                        <input type="text" name='phone_number' value={dataCustomer.phone_number} onChange={handleChange} className='ml-10 border-2 w-full border-gray-300 py-4 px-3 outline-none font-semibold rounded-lg text-xl' placeholder='Insert your phone number . . .' />
                    </div>
                    {/* <div className="flex mb-5 w-full">
                        <p className='text-xl text-gray-400 w-1/4 my-auto mr-9 text-end'>Gender</p>
                        <div className="flex w-1/4 px-3">
                            <CheckBox onchange={handleGender} name='gender' value={gender} className='mr-5 my-auto' />
                            <p className='text-xl font-semibold text-gray-400'>Male</p>
                        </div>
                        <div className="flex w-3/4 px-3">
                            <CheckBox className='mr-5 my-auto' />
                            <p className='text-xl font-semibold text-gray-400'>Female</p>
                        </div>
                    </div> */}
                    <div className="flex mb-5 w-full">
                        <p className='text-xl text-gray-400 w-1/4 my-auto text-end'>Date of birth</p>
                        <div className='w-full ml-10 flex'>
                            <input type="date" className='border-2 w-1/2 text-gray-400 mr-auto border-gray-300 py-4 px-3 outline-none font-semibold rounded-lg text-xl' placeholder='Insert your name . . .' />
                        </div>
                    </div>
                    <button type='submit' onClick={handleUpdate} className='py-4 px-16 bg-red-600 rounded-full text-white text-xl font-semibold mt-5'>Save</button>
                </div>
                <div className="w-1/12"><img src={line} alt="" className='mx-auto h-3/4' /></div>
                <div className="w-3/12">
                    { data ?
                    <div className="wrapperimg w-[10rem] h-[10rem] overflow-hidden rounded-full mx-auto">
                        <img src={data.photo} alt="" className='w-[10rem] h-[10rem]' />
                    </div>
                    : 
                    <div className="wrapperimg w-[10rem] h-[10rem] overflow-hidden rounded-full mx-auto">
                        <img src={icon} alt="" className='w-[10rem] h-[10rem]' />
                    </div>
                    }
                    <div className="file pt-10">
                        <input type="file" id='file' name='photo' onChange={(e)=>setPhoto(e.target.files[0])} hidden />
                        <label htmlFor="file" className='px-10 py-2 border text-xl font-semibold border-gray-400 text-gray-400 rounded-full'>Select image</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MyProfile