import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import user from '../../assets/user.png'
import map from '../../assets/map-pin.png'
import clipboard from '../../assets/clipboard.png'
import hamIcon from '../../assets/menu icon red1.png'
import iconclose from '../../assets/close icon red.png'
import axios from 'axios'

const Sidebar = ({ on1, on2, on3 }) => {

    const id = localStorage.getItem('id')
    const token = localStorage.getItem('token')
    const [showSide, setShowSide] = useState(false)
    const [data, setData] = useState()

    useEffect(()=>{
        const getData = async () => {
            const res = await axios({
                method: 'GET',
                url: `${process.env.REACT_APP_API}/user/${id}`,
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
            setData(res.data.data[0])
        }
        getData()
    }, [id, token])

    const show = () => {
        setShowSide(true)
    }

    const close = () => {
        setShowSide(false)
    }

  return (
    <div className='w-1/4'>
        { showSide === false ?
        <div className="wrapper mt-5 ml-10">
            <Link onClick={show}><img src={hamIcon} className='w-[2rem] h-[2rem] rounded-xl my-4' alt="" /></Link>
        </div>
        :
        <div className="wrapper mt-5 ml-10">
            <Link onClick={close}><img src={iconclose} className='w-[2rem] h-[2rem] rounded-xl my-4' alt="" /></Link>
        </div>
        }
        { showSide === true ?
        <div className="absolute grid bg-white h-screen ml-10 px-10 py-10 shadow-xl shadow-gray-200">
            {data ?
                <div className="flex ml-auto">
                    <div className="wrapperimg w-[6rem] h-[6rem] rounded-full overflow-hidden">
                        <img src={data.photo} alt="" className='w-[6rem] h-[6rem]' />
                    </div>
                    <div className="wrapper py-5 mx-10">
                        <p className='text-2xl font-semibold'>{data.name}</p>
                    </div>
                </div>
            : null}
            <div className="wrapper -mt-80 mr-16">
                <Link onClick={()=>{on1(); close()}} className="flex ml-32">
                    <div className="wrapper grid w-[3rem] h-[3rem] bg-[#456BF3] top-25 rounded-full mr-5">
                    <img src={user} alt="" className='my-auto mx-auto' />
                    </div>
                    <p className='text-xl font-semibold my-auto'>My account</p>
                </Link>
                <Link onClick={()=>{on2(); close()}} className="flex mt-5 ml-32">
                    <div className="wrapper grid w-[3rem] h-[3rem] bg-[#F36F45] top-25 rounded-full mr-5">
                    <img src={map} alt="" className='my-auto mx-auto' />
                    </div>
                    <p className='text-xl font-semibold my-auto'>Shipping address</p>
                </Link>
                <Link onClick={()=>{on3(); close()}} className="flex mt-5 ml-32">
                    <div className="wrapper grid w-[3rem] h-[3rem] bg-[#F3456F] top-25 rounded-full mr-5">
                    <img src={clipboard} alt="" className='my-auto mx-auto' />
                    </div>
                    <p className='text-xl font-semibold my-auto'>My order</p>
                </Link>
            </div>
        </div>
        : null }
    </div>
  )
}

export default Sidebar