import React, {useState,useEffect} from 'react'
import Navbar from '../../components/base/navbar'
import axios from 'axios'
import Swal from 'sweetalert2'

const Checkout = () => {

    const token = localStorage.getItem('token')
    const idUser = localStorage.getItem('id')
    const id_seller = localStorage.getItem('id_seller')
    const id_product = localStorage.getItem('id_product')
    const id_transaction = localStorage.getItem('id_transaction')
    const [data, setData] = useState()

    useEffect(()=>{
        const getDataBag = async () => {
            const res = await axios({
                method: 'GET',
                url: `${process.env.REACT_APP_API}/checkout/${idUser}`,
                headers: {
                    authorization: `$Bearer ${token}`
                }
            })
            setData(res.data.data[0])
            
        }
        getDataBag()
    }, [idUser, token]);

    const [checkout] = useState({
        id_seller: id_seller,
        id_user: idUser,
        id_transaction: id_transaction,
        id_product: id_product,
        status: 'Waiting'
    })

    const postCheckout = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Checkout now",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
          }).then(async(result) => {
                if (result.isConfirmed) {
                await axios({
                method: 'POST',
                url: `${process.env.REACT_APP_API}/checkout`,
                data: checkout,
                headers: {
                    authorization: `Bearer ${token}`
                },
            })
            localStorage.removeItem('id_product')
            localStorage.removeItem('id_transaction')
            localStorage.removeItem('id_seller')
            localStorage.removeItem('id_product')
              Swal.fire(
                'Checkout Sucess',
                'Check your bag',
                'success'
              )
            }
          })
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
                    <div className="grid wrapper px-10 py-10 border-4 rounded-xl shadow-lg s-namehadow-gray-200 mb-5">
                        <p className='text-xl font-semibold text-start mb-5'>{data.recipient_name}</p>
                        <p className='text-md text-gray-400 text-start'>{data.address} - {data.zip} - {data.city}</p>
                        {/* <Address /> */}
                    </div>
                    {/* {data.map((item)=> */}
                    <div key={data.id} className="flex wrapper px-5 py-10 mb-5 border-4 rounded-xl shadow-lg shadow-gray-200">
                        <img src={data.photo} alt='jkt' className='ml-2 text-lg text-gray-400 w-[4.5rem] h-[4.5rem] rounded-lg border-2' />
                        <div className="wrapper my-auto ml-7">
                            <p className='text-xl font-semibold text-start'>{data.name}</p>
                            <p className='text-md text-gray-400 text-start'>{data.brand}</p>
                        </div>
                        <div className="price grid ml-auto">
                            <p className='text-xl font-semibold text-black my-auto mr-10'>$ {data.price}</p>
                        </div>
                    </div>
                    {/* )} */}
                </div>
                <div className="wrapper w-1/12"></div>
                <div className="wrapper w-4/12">
                    <div className="card border-4 rounded-xl shadow-xl shadow-gray-300 py-10 px-10">
                        <p className='text-2xl font-semibold text-black text-start'>Shopping Summary</p>
                        <div className="flex mt-10">
                            <p className='text-2xl text-gray-400'>Order</p>
                            <p className='text-2xl font-semibold text-black ml-auto'>$ {data.price}</p>
                        </div>
                        <div className="flex mt-5 mb-10">
                            <p className='text-2xl text-gray-400'>Delivery</p>
                            <p className='text-2xl font-semibold text-black ml-auto'>$ 3</p>
                        </div>
                        <hr className='my-10' />
                        <div className="flex mt-10">
                            <p className='text-2xl font-semibold text-black'>Shopping Summary</p>
                            <p className='text-2xl font-semibold text-[#DB3022] ml-auto'>$ {data.price + 3}</p>
                        </div>
                        <button
                            type="button"
                            onClick={postCheckout}
                            className="rounded-full mt-10 bg-red-600 py-3 w-full px-4 text-xl font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                            >
                            Buy Now
                        </button>
                        {/* <MyModal onclick={postCheckout} /> */}
                    </div>
                </div>
            </div>
        </div>
        : null }
    </div>
  )
}

export default Checkout