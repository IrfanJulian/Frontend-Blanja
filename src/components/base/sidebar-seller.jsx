import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import icon from '../../assets/c230c71abf535e523ea4f28a4b0aa060.jpg'
import store from '../../assets/store.png'
import product from '../../assets/product.png'
import selling from '../../assets/sell.png'
import order from '../../assets/order.png'
import hamIcon from '../../assets/menu icon red1.png'
import iconclose from '../../assets/close icon red.png'
import axios from 'axios'

const SidebarSeller = ({ on1, on2, on3, on4 }) => {

    const [showSide, setShowSide] = useState(false)
    const [data, setData] = useState()
    const id = localStorage.getItem('id')

    useEffect(()=>{
        const getData = async() => {
            const res = await axios({
                method: 'GET',
                url: `http://localhost:4500/user/${id}`
            })
            setData(res.data.data[0])
        }
        getData()
    }, [id])
    console.log(data);
    const show = () => {
        setShowSide(true)
    }

    const close = () => {
        setShowSide(false)
    }

  return (
    <div className='w-1/4 pt-5'>
        { showSide === false ?
        <div className="wrapper ml-10">
            <Link onClick={show}><img src={hamIcon} className='w-[2rem] h-[2rem] rounded-xl my-4' alt="" /></Link>
        </div>
        :
        <div className="wrapper ml-10">
            <Link onClick={close}><img src={iconclose} className='w-[2rem] h-[2rem] rounded-xl my-4' alt="" /></Link>
        </div>
        }
        { showSide === true ?
        <div className="absolute grid bg-white h-screen ml-16 px-9 py-10 border-2 rounded-xl">
            <div >
                <div className="flex ml-auto">
                    <div className="wrapperimg w-[6rem] h-[6rem] rounded-full overflow-hidden">
                    {data ?
                        <img src={data.photo} alt="" className='w-[6rem] h-[6rem]' />
                    : 
                        <img src={icon} alt="" className='w-[6rem] h-[6rem]' />
                    }
                    </div>
                    <div className="wrapper py-5 mx-10">
                        <p className='text-2xl font-semibold'>{data.name}</p>
                    </div>
                </div>
            </div>
            <div className="wrapper -mt-80 mr-16">
                <Link onClick={on1} className="flex ml-32">
                    <div className="wrapper grid w-[3rem] h-[3rem] bg-[#456BF3] top-25 rounded-full mr-5">
                    <img src={store} alt="" className='my-auto mx-auto' />
                    </div>
                    <p className='text-xl font-semibold my-auto'>Store</p>
                </Link>
                <Link onClick={on2} className="flex mt-5 ml-32">
                    <div className="wrapper grid w-[3rem] h-[3rem] bg-[#F36F45] top-25 rounded-full mr-5">
                    <img src={product} alt="" className='my-auto mx-auto' />
                    </div>
                    <p className='text-xl font-semibold my-auto'>Product</p>
                </Link>
                <Link onClick={on3} className="flex mt-5 ml-32">
                    <div className="wrapper grid w-[3rem] h-[3rem] bg-[#B5D850] top-25 rounded-full mr-5">
                    <img src={selling} alt="" className='my-auto mx-auto' />
                    </div>
                    <p className='text-xl font-semibold my-auto'>Selling product</p>
                </Link>
                <Link onClick={on4} className="flex mt-5 ml-32">
                    <div className="wrapper grid w-[3rem] h-[3rem] bg-[#F3456F] top-25 rounded-full mr-5">
                    <img src={order} alt="" className='my-auto mx-auto' />
                    </div>
                    <p className='text-xl font-semibold my-auto'>Order</p>
                </Link>
            </div>
        </div>
        : null }
    </div>
  )
}

export default SidebarSeller