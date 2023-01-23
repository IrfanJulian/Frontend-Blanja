import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import checklist from '../../assets/check red.png'


const MyOrder = () => {

    const id = localStorage.getItem('id')
    const {idCheckout} = useParams()
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const [data, setData] = useState()
    const [active, setActive] = useState(true)
    const [status] = useState({
        status: 'process'
    })

    useEffect(()=>{
        const getData= async() => {
            const res = await axios({
                method: 'GET',
                url: `${process.env.REACT_APP_API}/checkout/myorder/${id}`,
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
            setData(res.data.data)
        }
        getData()
    }, [id, token])

    const handleProcess = async () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Want to proccess?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, i`m sure'
          }).then(async(result) => {
            if (result.isConfirmed) {
                await axios({
                    method: 'PUT',
                    url: `${process.env.REACT_APP_API}/checkout/${idCheckout}`,
                    headers: {
                        authorization: `Bearer ${token}`
                    },
                    data: status
                })
              Swal.fire(
                'Process order!',
                'Process order success',
                'success'
              )
            }
            window.location.reload()
          }) 
    }

  return (
    <div>
        <div>
            <div className="px-10 pt-10 pb-20 mb-10 border-2 border-gray-300 rounded-lg">
                <p className='text-4xl font-semibold text-start'>My order</p>
                <div className="flex mt-10 mr-10">
                    <button className='text-gray-400 mx-auto text-xl py-4 px-10 rounded-t-xl font-semibold hover:bg-gray-100 active:border-b-2 border-red-600'>All items</button>
                </div>
                <hr className='mb-10 border border-gray-300' />
                <div className="grid grid-cols-2 gap-7">
                    { data ? data.map(item=>
                    <div key={item.id} className="card border-2 shadow-xl shadow-gray-400 border-gray-400 rounded-xl p-5 flex">
                        <div className="wrapperimg w-[14rem] h-[12rem] border-2 mr-5 rounded-xl overflow-hidden">
                            <img src={item.photo} alt="" className='w-[10rem] h-[12rem]' />
                        </div>
                        <div className="core w-full grid">
                            <div className="wrapper mb-2">
                                <p className='text-lg font-semibold text-start'>Product name :</p>
                                <p className='text-md text-gray-400 text-start'>{item.product_name}</p>
                            </div>
                            <div className="wrapper mb-2">
                                <p className='text-lg font-semibold text-start'>Price :</p>
                                <p className='text-md text-gray-400 text-start'>$ {item.total_price}</p>
                            </div>
                            <div className="wrapper mb-2">
                                <p className='text-lg font-semibold text-start'>Stock :</p>
                                <p className='text-md text-red-600 font-bold text-start'>{item.stock}</p>
                            </div>
                            <div className="wrapper mb-2">
                                <p className='text-lg font-semibold text-start'>Customer Name :</p>
                                <p className='text-md text-gray-400 text-start'>{item.name}</p>
                            </div>
                            <div className="wrapper mb-2">
                                <p className='text-lg font-semibold text-start'>Customer address :</p>
                                <p className='text-md text-gray-400 text-start'>{item.address} - {item.city} - {item.zip}</p>
                            </div>
                            <div className="wrapper mb-2">
                                <p className='text-lg font-semibold text-start'>Customer Phone Number :</p>
                                <p className='text-md text-gray-400 text-start'>{item.phone_number}</p>
                            </div>
                            <div className="wrapper mb-2">
                                <p className='text-lg font-semibold text-start'>Status:</p>
                                { item.status === 'waiting' ?
                                <p className='text-md text-red-600 text-start'>{item.status}</p>
                                : 
                                <p className='text-md text-blue-400 text-start'>{item.status}</p>
                                }
                            </div>
                            <div className="grid">
                                {active === false ?
                                    <div className="flex ml-auto mb-5">
                                        <button onClick={()=>setActive(true, navigate(`/profile-seller`))} className='w-5 h-5 p-1 border-2 border-red-500 rounded-sm my-auto mr-5'><img src={checklist} alt="check" /></button>
                                        <p className='my-auto'>I want to proccess</p>
                                    </div>
                                    :
                                    <div className="flex ml-auto mb-5">
                                        <button onClick={()=>setActive(false, navigate(`/profile-seller/${item.id}`))} className='w-5 h-5 p-1 border-2 border-red-500 rounded-sm my-auto mr-5'></button>
                                        <p className='my-auto'>I want to proccess</p>
                                    </div>
                                }
                                <button onClick={handleProcess} className='py-2 px-7 rounded-xl bg-red-600 text-white ml-auto'>Proccess</button>
                            </div>
                        </div>
                    </div>
                    ): 
                    <div className="wrapper w-full">
                        <p className='text-3xl font-semibold mx-auto'>No order Yet</p>
                    </div>
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default MyOrder