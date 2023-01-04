import React, {useState,useEffect} from 'react'
import Breadcrumb from '../../components/base/breadcrumb'
import Navbar from '../../components/base/navbar'
import star from '../../assets/Star.png'
import { Link, useParams } from 'react-router-dom'
import min from '../../assets/min.png'
import plus from '../../assets/plus.png'
import ProductList from '../../components/base/product-list'
import axios from 'axios'

const ProductDetail = () => {

    const [data, setData] = useState()
    const {id} = useParams()
    
    useEffect(()=> {
        const getData = async() => {
            const res = await axios({
                method: 'GET',
                url:`http://localhost:4500/products/${id}`
            })
            setData(res.data.data[0])
        }
        getData()
    }, [id])

    console.log(data);

  return (
    <div>
        <div className="nav shadow-xl shadow-gray-200">
            <Navbar />
        </div>
        <div className="bc my-10">
            <Breadcrumb />
        </div>
        <div className="container mx-auto py-10">
            { data ? 
            <div>
                <div className="flex">         
                    <div className="wrapper w-1/2 rounded-xl">
                        <img src={data.photo} alt="" className='w-max h-max' />
                    </div>
                    <div className="wrapper w-1/2 px-20">
                        <p className='text-3xl font-semibold text-black text-start'>{data.name}</p>
                        <p className='text-xl text-gray-400 text-start my-5'>{data.brand}</p>
                        <div className="flex mb-10">
                            <img src={star} alt="rate" className='mr-1 w-[1rem] h-[1rem]' />
                            <img src={star} alt="rate" className='mr-1 w-[1rem] h-[1rem]' />
                            <img src={star} alt="rate" className='mr-1 w-[1rem] h-[1rem]' />
                            <img src={star} alt="rate" className='mr-1 w-[1rem] h-[1rem]' />
                            <img src={star} alt="rate" className='mr-1 w-[1rem] h-[1rem]' />
                            <p className='text-sm text-gray-400'>( 10 )</p>
                        </div>
                        <p className='text-xl text-gray-400 text-start my-5'>Price</p>
                        <p className='text-2xl font-bold text-black text-start mb-10'>${data.price}</p>
                        <p className='text-xl text-gray-400 text-start my-5'>Color</p>
                        <div className="flex mb-10">
                            <Link><div className="color w-[2.5rem] h-[2.5rem] rounded-full mr-3 bg-black"></div></Link>
                            <Link><div className="color w-[2.5rem] h-[2.5rem] rounded-full mr-3 bg-red-500"></div></Link>
                            <Link><div className="color w-[2.5rem] h-[2.5rem] rounded-full mr-3 bg-blue-500"></div></Link>
                            <Link><div className="color w-[2.5rem] h-[2.5rem] rounded-full mr-3 bg-green-500"></div></Link>
                        </div>
                        <div className="flex my-5">
                            <div className="size">
                                <p className='text-xl text-black font-semibold text-start my-5'>Size</p>
                                <div className="qty my-auto ml-auto mr-20 flex">
                                    <Link><img src={min} alt="btn" className='w-[3rem] h-[3rem]' /></Link>
                                    <p className='text-xl font-semibold text-black my-auto mx-5'>2</p>
                                    <Link><img src={plus} alt="btn" className='w-[3rem] h-[3rem]' /></Link>
                                </div>
                            </div>
                            <div className="qty">
                                <p className='text-xl text-black font-semibold text-start my-5'>Jumlah</p>
                                <div className="qty my-auto ml-auto mr-20 flex">
                                    <Link><img src={min} alt="btn" className='w-[3rem] h-[3rem]' /></Link>
                                    <p className='text-xl font-semibold text-black my-auto mx-5'>2</p>
                                    <Link><img src={plus} alt="btn" className='w-[3rem] h-[3rem]' /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex mt-14">
                            <button className='w-1/2 border border-black rounded-full py-4 mr-3'>Chat</button>
                            <button className='w-1/2 border border-black rounded-full py-4 ml-3'>Add Bag</button>
                        </div>
                        <button className='w-full border bg-[#DB3022] rounded-full py-4 mt-8 text-white font-semibold text-xl'>Buy Now</button>
                    </div> 
                </div>           
                <div className="wrapper my-10">
                    <p className='text-3xl font-semibold text-black text-start'>Informasi Produk</p>
                    <p className='text-xl font-semibold text-black text-start mt-10'>Condition</p>
                    <p className='text-xl font-semibold text-[#DB3022] text-start mt-2'>{data.condition}</p>
                    <p className='text-xl font-semibold text-black text-start mt-10'>Description</p>
                    <p className='text-lg text-gray-400 text-start mt-2'>{data.description}</p>
                    <div className="rate my-10">
                        <p className='text-3xl font-semibold text-black text-start'>Product Review</p>
                        <div className="value my-10">
                            <div className="flex">
                                <p className='text-8xl text-start'>5.0</p>
                                <p className='text-2xl text-gray-400 mt-auto text-start'>/10</p>
                            </div>
                            <div className="flex my-5">
                                <img src={star} alt="rate" className='mr-1 w-[1rem] h-[1rem]' />
                                <img src={star} alt="rate" className='mr-1 w-[1rem] h-[1rem]' />
                                <img src={star} alt="rate" className='mr-1 w-[1rem] h-[1rem]' />
                                <img src={star} alt="rate" className='mr-1 w-[1rem] h-[1rem]' />
                                <img src={star} alt="rate" className='mr-1 w-[1rem] h-[1rem]' />
                                <p className='text-sm text-gray-400'>( 10 )</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            : null }
            <hr className='my-10' />
            <div className="wrapper">
                <div className="tittle">
                    <p className='text-4xl font-bold text-start'>You can also like this</p>
                    <p className='text-xl text-gray-400 text-start'>You've never seen it before</p>
                </div>
                <ProductList />
            </div>
        </div>
    </div>
  )
}

export default ProductDetail