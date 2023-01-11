import axios from 'axios'
import React, {useState, useEffect} from 'react'
import Swal from 'sweetalert2'

const Address = () => {

    const id = localStorage.getItem('id')
    const token = localStorage.getItem('token')
    const [data, setData] = useState()
    const [edit, setEdit] = useState({
        address: '',
        zip: '',
        city: '',
        recipient_name: '',
        recipient_phone: ''
    })

    useEffect(()=>{
        const getData = async() => {
            const res = await axios({
                url: 'GET',
                method: `http://localhost:4500/user/${id}`,
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
            setData(res.data.data[0])
        }
        getData()
    }, [id, token])

    const handleChange = (e) => {
        setEdit({
            ...edit,
            [e.target.name]: e.target.value
        })
    }

    const updateAddress = async(e) => {
        e.preventDefault()
        try {
            await axios({
                method: 'PUT',
                url: `http://localhost:4500/user/contact/${id}`,
                headers: {
                    authorization: `Bearer ${token}`
                },
                data: edit
            })
            Swal.fire({
                icon: 'success',
                title: 'Success...',
                text: 'Add data Success'
              })
              window.location.reaload()
        } catch (error) {
            Swal.fire({
                icon: 'success',
                title: 'success...',
                text: 'Failed add data'
              })
        }
    }

    return (
    <div>
        { data ? 
            <div className="container ">
                <table className='border-4'>
                    <tr>
                        <th className='border-4 w-80 py-3 text-xl'>data</th>
                        <th className='border-4 w-80 py-3 text-xl'>zip</th>
                        <th className='border-4 w-80 py-3 text-xl'>city</th>
                        <th className='border-4 w-80 py-3 text-xl'>recipient name</th>
                        <th className='border-4 w-80 py-3 text-xl'>recipient phone</th>
                    </tr>
                    <tr>
                        <td className='border-4 w-80 py-3 text-xl'>{data.address}</td>
                        <td className='border-4 w-80 py-3 text-xl'>{data.zip}</td>
                        <td className='border-4 w-80 py-3 text-xl'>{data.city}</td>
                        <td className='border-4 w-80 py-3 text-xl'>{data.recipient_name}</td>
                        <td className='border-4 w-80 py-3 text-xl'>{data.recipient_phone}</td>
                    </tr>
                </table>
                <button className='py-3 px-20 bg-red-600 rounded-full text-xl font-semibold text-white my-20'>Change Address</button>
            </div>
        :
            <div className="container mx-auto h-full">
                <p className='text-3xl font-semibold'>No address!</p>
                <p className='text-xl'>Please set your address now.</p>
                <div className="flex mt-7">
                    <div className="wrapper w-2/12">
                        <p className='text-2xl text-start my-14 py-1 font-semibold'>Address :</p>
                        <p className='text-2xl text-start my-14 py-1 font-semibold'>ZIP Postal Code :</p>
                        <p className='text-2xl text-start my-14 py-1 font-semibold'>City :</p>
                        <p className='text-2xl text-start my-14 py-1 font-semibold'>Recipient Name :</p>
                        <p className='text-2xl text-start my-14 py-1 font-semibold'>Recipient Phone :</p>
                    </div>
                    <div className="wrapper w-10/12">
                        <input name='address' value={edit.address} onChange={handleChange} type="text" className='text-xl py-2 px-6 border-2 rounded-xl w-full mt-12 outline-none' placeholder='Address . . .' />
                        <input name='zip' value={edit.zip} onChange={handleChange} type="text" className='text-xl py-2 px-6 border-2 rounded-xl w-full mt-12 outline-none' placeholder='Zip . . .' />
                        <input name='city' value={edit.city} onChange={handleChange} type="text" className='text-xl py-2 px-6 border-2 rounded-xl w-full mt-12 outline-none' placeholder='City . . .' />
                        <input name='recipient_name' value={edit.recipient_name} onChange={handleChange} type="text" className='text-xl py-2 px-6 border-2 rounded-xl w-full mt-12 outline-none' placeholder='Recipient Name . . .' />
                        <input name='recipient_phone' value={edit.recipient_phone} onChange={handleChange} type="text" className='text-xl py-2 px-6 border-2 rounded-xl w-full mt-12 outline-none' placeholder='Recipient Phone . . .' />
                    </div>
                </div>
                <button onClick={updateAddress} className='px-36 py-4 rounded-full bg-red-600 text-xl font-semibold text-white'>Save</button>
            </div>
        }
    </div>
  )
}

export default Address