import React, {useState,useEffect} from 'react'
import Navbar from '../../component/module/Navbar'
import pos from '../../assets/pos (2).png'
import gopay from '../../assets/gopay (2).png'
import mastercard from '../../assets/mastercard (2).png'
import { useDispatch, useSelector } from 'react-redux'
import { getDataUser } from '../../redux/action/userAction'
import ModalNewAddress from '../../component/module/ModalNewAddress'
import ModalAddress from '../../component/module/ModalAddress'
import Loading from '../../component/base/Loading'
import Swal from 'sweetalert2'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import PaymentConfirmation from '../../component/module/paymentConfirmation'

const Checkout = () => {

    const {id} = useParams()
    const navigate = useNavigate()
    const idUser = localStorage.getItem('id')
    const [payment, setPayment] = useState(false)
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const { user } = useSelector((state)=>state.user)
    const address = user.address
    const [show, setShow] = useState(false)
    const [addAddress, setAddAddress] = useState(false)
    const [data, setData] = useState()

    useEffect(()=>{
        dispatch(getDataUser(idUser))
    }, [dispatch, idUser])

    useEffect(()=>{
        const getBag = async() => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API}mybag/detail/${id}`)
                setData(res.data.data[0])
            } catch (error) {
                console.log(error);
            }
        }
        getBag()
    }, [id])
    console.log(data);

    const postCheckout = (e) => {
        e.preventDefault()
        Swal.fire({
            title: 'Are you sure data with this data?',
            text: "Payment will proccess",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#000000',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
          }).then(async(result) => {
            setLoading(true)
            if (result.isConfirmed) {
                await axios({
                    method: 'POST',
                    url: `${process.env.REACT_APP_API}checkout/postcheckout`,
                    data: {
                        user_id: idUser,
                        seller_id: data.seller_id,
                        username: data.user_name,
                        product_id: 5,
                        status: 'waiting payment confirmation',
                        subtotal: data.price
                    }
                })
                setTimeout(() => {
                    console.log('ini timeout 3');
                    setLoading(false)
                    setPayment(true)
                }, 10000);
            }
          })
        }

  return (
    <div id='font-custom'>
        { loading === true ? 
            <div className="wrapper grid">
                <div className='wrapper fixed top-0 left-0 h-screen justify-center w-screen bg-black opacity-40 overflow-auto'></div>
                <Loading />
            </div>
        :
            null
        }
        { payment ?
            <PaymentConfirmation onClick={()=>navigate('/home')} />
            :
            null
        }
        { show ?
            <ModalAddress clickClose={()=>setShow(false)} openAddAddress={()=>{setAddAddress(true); setShow(false)}} />
        :
            null
        }
        { addAddress ? 
            <ModalNewAddress clickClose={()=>setAddAddress(false)} cancel={()=>setAddAddress(false)} />
        :
            null
        }
        <div className='py-32 px-5'>
            <p className='text-xl md:text-4xl my-5 md:my-20 font-medium'>Checkout</p>
            { address && address.length !== 0 ? 
            <div className="wrapGlobal md:w-1/2 md:mx-auto">
                <p className='text-left md:text-xl'>Set address and recipient data</p>
                <div className="address md:p-5 p-2 border-2 my-3">
                    <p className='text-sm md:text-xl font-medium text-left'>{user ? user.recipient_name : null}</p>
                    <p className='text-sm md:text-lg text-left my-3'>{user ? user.address : null}.</p>
                    <p className='text-xs md:text-xl text-left'>{user ? user.recipient_phone : null}</p>
                    <button onClick={()=>setShow(true)} className='font-medium md:text-xl text-red-600 my-2'>Edit data</button>
                </div>
                <div className="payment mt-10">
                    <p className='text-left md:text-xl'>Payment</p>
                    <div className="address p-2 border-2 my-3">
                        <div className="flex">
                            <div className="w-5/12">
                                <img src={pos} alt="pos" />
                            </div>
                            <div className="w-5/12 h-max my-auto">
                                <p className='text-left md:text-lg'>Pos Indonesia</p>
                            </div>
                            <div className="w-2/12 h-max my-auto">
                                <input type="checkbox" />
                            </div>
                        </div>
                    </div>
                    <div className="address p-2 border-2 my-3">
                        <div className="flex">
                            <div className="w-5/12 py-4 md:py-8">
                                <img src={gopay} className='w-3/4 mx-auto' alt="pos" />
                            </div>
                            <div className="w-5/12 h-max my-auto">
                                <p className='text-left md:text-lg'>Gopay</p>
                            </div>
                            <div className="w-2/12 h-max my-auto">
                                <input type="checkbox" />
                            </div>
                        </div>
                    </div>
                    <div className="address p-2 border-2 my-3">
                        <div className="flex">
                            <div className="w-5/12 py-2 md:py-3">
                                <img src={mastercard} className='w-1/2 mx-auto' alt="pos" />
                            </div>
                            <div className="w-5/12 h-max my-auto">
                                <p className='text-left md:text-lg'>Master Card</p>
                            </div>
                            <div className="w-2/12 h-max my-auto">
                                <input type="checkbox" />
                            </div>
                        </div>
                    </div>
                </div>
                <button onClick={postCheckout} className='bg-red-600 text-white font-medium py-2 px-10 rounded-full my-10 md:text-xl md:px-20'>Process</button>
            </div>
            : 
            <div>
                <button onClick={()=>setAddAddress(true)} className='mt-10 font-medium md:text-xl text-red-600 my-2 hover:opacity-70'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-auto animate-bounce">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                    </svg>
                    <p className='my-3'>Click here to set new address</p>
                </button>
                { addAddress ? 
                    <ModalNewAddress clickClose={()=>setAddAddress(false)} cancel={()=>setAddAddress(false)} />
                    :
                    null
                }
            </div>
            }
        </div>
        <Navbar />
    </div>
  )
}

export default Checkout