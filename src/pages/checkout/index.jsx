import React, {useState,useEffect} from 'react'
// import { Link } from 'react-router-dom'
import Navbar from '../../components/base/navbar'
import MyModal from '../../components/base/modal-payment'
import axios from 'axios'
// import Address from '../../components/base/address'
import Swal from 'sweetalert2'

const Checkout = () => {

    const token = localStorage.getItem('token')
    const idUser = localStorage.getItem('id')
    const [data, setData] = useState()
    const [allData, setAllData] = useState()
    const [total, setTotal] = useState(0)

    useEffect(()=>{
        const getDataBag = async () => {
            const res = await axios({
                method: 'GET',
                url: `http://localhost:4500/transactions/checkout/${idUser}`,
                headers: {
                    authorization: `$Bearer ${token}`
                }
            })
            setData(res.data.data[0])
            setAllData(res.data.data)
        }
        getDataBag()
    }, [idUser, token]);
    console.log(data);
    
    useEffect(() => {
        if (allData) {
            let total = 0
            allData.forEach(item => {
                total = total + item.price
            })
            setTotal(total)
        }
    }, [allData])

    const postCheckout = async() => {
        try {
            await axios({
                method: 'POST',
                url: `http://localhost:4500/checkout`,
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
            Swal.fire({
                icon: 'success',
                title: 'Checkout success waiting for process',
                text: 'We need to check your payment'
              })
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something wrong!'
              })
        }
    }

  return (
    <div>
        <div className="shadow-xl shadow-gray-200">
            <Navbar />     
        </div>
        { data ?
        <div className="container mx-auto my-10">
            <p className='text-4xl font-bold text-start'>Checkout</p>
            <p className='text-xl font-semibold text-start my-10'>Shipping address</p>
            <div className="flex">
                <div className="wrapper w-7/12">
                    <div className="grid wrapper px-10 py-10 border-4 rounded-xl shadow-lg shadow-gray-200 mb-5">
                        <p className='text-xl font-semibold text-start mb-5'>{data.name}</p>
                        <p className='text-md text-gray-400 text-start'>{data.address} - {data.zip} - {data.city}</p>
                        {/* <Address /> */}
                    </div>
                    {allData.map((item)=>
                    <div key={item.id} className="flex wrapper px-5 py-10 mb-5 border-4 rounded-xl shadow-lg shadow-gray-200">
                        <img src={item.product_photo} alt='jkt' className='ml-2 text-lg text-gray-400 w-[4.5rem] h-[4.5rem] rounded-lg border-2' />
                        <div className="wrapper my-auto ml-7">
                            <p className='text-xl font-semibold text-start'>{item.product_name}</p>
                            <p className='text-md text-gray-400 text-start'>{item.brand}</p>
                        </div>
                        <div className="price grid ml-auto">
                            <p className='text-xl font-semibold text-black my-auto mr-10'>$ {item.price}</p>
                        </div>
                    </div>
                    )}
                </div>
                <div className="wrapper w-1/12"></div>
                <div className="wrapper w-4/12">
                    <div className="card border-4 rounded-xl shadow-xl shadow-gray-300 py-10 px-10">
                        <p className='text-2xl font-semibold text-black text-start'>Shopping Summary</p>
                        <div className="flex mt-10">
                            <p className='text-2xl text-gray-400'>Order</p>
                            <p className='text-2xl font-semibold text-black ml-auto'>$ {total}</p>
                        </div>
                        <div className="flex mt-5 mb-10">
                            <p className='text-2xl text-gray-400'>Delivery</p>
                            <p className='text-2xl font-semibold text-black ml-auto'>$ 3</p>
                        </div>
                        <hr className='my-10' />
                        <div className="flex mt-10">
                            <p className='text-2xl font-semibold text-black'>Shopping Summary</p>
                            <p className='text-2xl font-semibold text-[#DB3022] ml-auto'>$ {total + 3}</p>
                        </div>
                        {/* <button className='text-white bg-[#DB3022] rounded-full py-4 mt-10 text-xl w-full' type="button" data-modal-toggle="defaultModal">Buy</button> */}
                        <MyModal onclick={postCheckout} />
                    </div>
                </div>
            </div>
        </div>
        : null }
    </div>
  )
}

export default Checkout