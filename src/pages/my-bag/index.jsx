import React, {useState, useEffect} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Navbar from '../../components/base/navbar'
import min from '../../assets/min.png'
import plus from '../../assets/plus.png'
import axios from 'axios'
import Swal from 'sweetalert2'
import trash from '../../assets/trshh.png'
import order from '../../assets/order.png'
import checklist from '../../assets/check red.png'

const Mybag = () => {

    const {id} = useParams()
    const navigate = useNavigate()
    const idUser = localStorage.getItem('id')
    const idTransaction = localStorage.getItem('id_transaction')
    const idSeller = localStorage.getItem('id_seller')
    const idProduct = localStorage.getItem('id_product')
    const token = localStorage.getItem('token')

    useEffect(()=>{
        const getDataBag = async () => {
            const res = await axios({
                method: 'GET',
                url: `${process.env.REACT_APP_API}/transactions/myBag/${idUser}`,
                headers: {
                    authorization: `$Bearer ${token}`
                }
            })
            localStorage.setItem('id_transaction', res.data.data[0].id)
            localStorage.setItem('id_seller', res.data.data[0].id_seller)
            localStorage.setItem('id_product', res.data.data[0].id_product)
            setData(res.data.data[0])
        }
        getDataBag()
    }, [idUser, token]);

    const [data, setData] = useState()
    const [active, setActive] = useState(true)
    const [input] = useState({
        id_transaction: idTransaction,
        id_user: idUser,
        id_seller: idSeller,
        status: 'waiting',
        id_product: idProduct
    })

    console.log(idTransaction);
    console.log(idSeller);

    const postCheckout = async (e) => {
        e.preventDefault()
        Swal.fire({
            title: 'Are you sure?',
            text: "Want to checkout?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, i`m sure'
          }).then(async(result) => {
            if (result.isConfirmed) {
                await axios({
                    method: 'POST',
                    url: `${process.env.REACT_APP_API}/checkout`,
                    data: input,
                    headers: {
                        authorization: `Bearer ${token}`
                    }
                })
              Swal.fire(
                'Checkout!',
                'Insert product to checkout',
                'success'
              )
            }
          })  
    }

    const deleteBag = () => {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then(async(result) => {
            if (result.isConfirmed) {
              await axios({
                    method: 'DELETE',
                    url: `${process.env.REACT_APP_API}/transactions/${id}`,
                    headers: {
                        authorization: `Bearer ${token}`
                    }
                })
                localStorage.removeItem('id_product')
                localStorage.removeItem('id_transaction')
                localStorage.removeItem('id_seller')
                localStorage.removeItem('id_product')
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
            window.location.reload()
          })
    }

  return (
    <div>
        <div className="shadow-xl shadow-gray-200">
            <Navbar />     
        </div>
        <div className="container mx-auto my-10">
            <p className='text-4xl font-bold text-start'>My bag</p>
            { data ? 
            <div className="flex">
                <div className="wrapper w-7/12">
                    <div className="flex wrapper px-5 py-5 my-10 border-4 rounded-xl shadow-lg shadow-gray-200">
                        <p className="ml-6 text-lg font-semibold text-gray-900 dark:text-gray-300">Your Item</p>
                        <Link className='ml-auto'><p className='text-red-500 font-semibold text-lg'>Delete</p></Link>
                    </div>
                    {/* {data ? data.map((bag)=> */}
                    <div className="flex wrapper px-5 py-7 mb-5 border-4 rounded-xl shadow-lg shadow-gray-200">
                        
                        {active === false ?
                            <button onClick={()=>setActive(true, navigate(`/my-bag`))} className='w-6 h-6 p-1 border-2 border-red-500 rounded-md my-auto mr-5'><img src={checklist} alt="check" /></button> 
                            :
                            <button onClick={()=>setActive(false, navigate(`/my-bag/${data.id}`))} className='w-6 h-6 p-1 border-2 border-red-500 rounded-md my-auto mr-5'></button> 
                        }
                        <img src={data.photo} alt='jkt' className='ml-2 text-lg text-gray-400 w-[4.5rem] h-[4.5rem] rounded-lg border-2' />
                        <div className="wrapper my-auto ml-7">
                            <p className='text-xl font-semibold text-start'>{data.name}</p>
                            <p className='text-md text-gray-400 text-start'>{data.brand}</p>
                        </div>
                        <div className="qty my-auto ml-auto mr-10 flex">
                            <Link><img src={min} alt="btn" className='w-[3rem] h-[3rem]' /></Link>
                            <p className='text-xl font-semibold text-black my-auto mx-5'>{data.qty}</p>
                            <Link><img src={plus} alt="btn" className='w-[3rem] h-[3rem]' /></Link>
                        </div>
                        <div className="price grid mr-6">
                            <p className='text-xl font-semibold text-black my-auto mx-5'>$ {data.total_price}</p>
                        </div>
                        <Link onClick={deleteBag} className='grid'>
                            <img src={trash} alt="trash" className='w-9 h-9 my-auto mr-6' />
                        </Link>
                        <Link onClick={postCheckout} className='grid'>
                            <img src={order} alt="post" className='w-9 h-9 my-auto' />
                        </Link>
                    </div> 
                    {/* ) : null } */}
                </div>
                <div className="wrapper w-1/12"></div>
                <div className="wrapper w-4/12">
                    <div className="card border-4 rounded-xl shadow-xl shadow-gray-300 mt-10 py-10 px-10">
                        <p className='text-2xl font-semibold text-black text-start'>Shopping Summary</p>
                        <div className="flex mt-10">
                            <p className='text-2xl text-gray-400'>Total All Products Price</p>
                            <p className='text-2xl font-semibold text-red-500 ml-auto'>$ {data.total_price}</p>
                        </div>
                        {/* <button onClick={postBag} className='text-white bg-[#DB3022] rounded-full py-4 mt-10 text-xl w-full'>Buy</button> */}
                    </div>
                    <button onClick={()=>navigate('/checkout')} className='py-5 text-xl font-semibold text-white bg-red-600 w-full rounded-xl mt-10'>Pay now?</button>
                </div>
            </div>
            : 
            <div className='grid h-[40rem]'>
                <p className='my-auto text-xl'>No items to show, you can choose the product to start shopping . . .</p>
            </div>
            }
        </div>
    </div>
  )
}

export default Mybag