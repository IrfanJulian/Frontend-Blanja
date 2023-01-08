import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CheckBox from '../../components/base/check-box'
import Navbar from '../../components/base/navbar'
import min from '../../assets/min.png'
import plus from '../../assets/plus.png'
import axios from 'axios'

const Mybag = () => {

    const token = localStorage.getItem('token')
    const idUser = localStorage.getItem('id')
    const navigate = useNavigate()
    const [data, setData] = useState()
    const [total, setTotal] = useState(0)

    useEffect(()=>{
        const getDataBag = async () => {
            const res = await axios({
                method: 'GET',
                url: `http://localhost:4500/transactions/myBag/${idUser}`,
                headers: {
                    authorization: `$Bearer ${token}`
                }
            })
            setData(res.data.data)
        }
        getDataBag()
    }, [idUser, token]);

    useEffect(()=>{
        let total = 0
        if(data){
            data.forEach((bag)=>{
                total += bag.total_price
            })
            setTotal(total)
        }
    }, [data])
    // console.log(data);

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
                        <CheckBox label='Select all item' />
                        <p className="ml-6 text-lg font-semibold text-gray-900 dark:text-gray-300">All items selected</p>
                        <p className='ml-3 text-lg text-gray-400'>( 3 Items Selected )</p>
                        <Link className='ml-auto'><p className='text-red-500 font-semibold text-lg'>Delete</p></Link>
                    </div>
                    {data ? data.map((bag)=>
                    <div key={bag.id} className="flex wrapper px-5 py-7 mb-5 border-4 rounded-xl shadow-lg shadow-gray-200">
                        <CheckBox className='mt-6 mr-5' />
                        <img src={bag.photo} alt='jkt' className='ml-2 text-lg text-gray-400 w-[4.5rem] h-[4.5rem] rounded-lg border-2' />
                        <div className="wrapper my-auto ml-7">
                            <p className='text-xl font-semibold text-start'>{bag.name}</p>
                            <p className='text-md text-gray-400 text-start'>{bag.brand}</p>
                        </div>
                        <div className="qty my-auto ml-auto mr-20 flex">
                            <Link><img src={min} alt="btn" className='w-[3rem] h-[3rem]' /></Link>
                            <p className='text-xl font-semibold text-black my-auto mx-5'>{bag.qty}</p>
                            <Link><img src={plus} alt="btn" className='w-[3rem] h-[3rem]' /></Link>
                        </div>
                        <div className="price grid">
                            <p className='text-xl font-semibold text-black my-auto mx-5'>$ {bag.total_price}</p>
                        </div>
                    </div> 
                    ) : null }
                </div>
                <div className="wrapper w-1/12"></div>
                <div className="wrapper w-4/12">
                    <div className="card border-4 rounded-xl shadow-xl shadow-gray-300 mt-10 py-10 px-10">
                        <p className='text-2xl font-semibold text-black text-start'>Shopping Summary</p>
                        <div className="flex mt-10">
                            <p className='text-2xl text-gray-400'>Total Price</p>
                            <p className='text-2xl font-semibold text-black ml-auto'>$ {total}</p>
                        </div>
                        <button onClick={()=>navigate(`/checkout/1`)} className='text-white bg-[#DB3022] rounded-full py-4 mt-10 text-xl w-full'>Buy</button>
                    </div>
                </div>
            </div>
            : null }
        </div>
    </div>
  )
}

export default Mybag