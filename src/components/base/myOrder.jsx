import axios from 'axios'
import React, {useState, useEffect} from 'react'

const MyOrder = () => {

    const id = localStorage.getItem('id')
    const token = localStorage.getItem('token')
    const [data, setData] = useState()

    useEffect(()=>{
        const getData= async() => {
            const res = await axios({
                method: 'GET',
                url: `${process.env.REACT_APP_API}/checkout/${id}`,
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
            setData(res.data.data)
        }
        getData()
    }, [id, token])

  return (
    <div>
        <div>
            <div className="px-10 pt-10 pb-20 mb-10 border-2 border-gray-300 rounded-lg">
                <p className='text-4xl font-semibold text-start'>My history order</p>
                <div className="flex mt-10 mr-10">
                    <button className='text-gray-400 mx-auto text-xl py-4 px-10 rounded-t-xl font-semibold hover:bg-gray-100 active:border-b-2 border-red-600'>All items</button>
                </div>
                <hr className='mb-10 border border-gray-300' />
                <div className="grid grid-cols-3 gap-7">
                    { data ? data.map(item=>
                    <div className="card border-2 shadow-xl shadow-gray-400 border-gray-400 rounded-xl p-5 flex">
                        <div className="wrapperimg w-[10rem] h-[12rem] border-2 mr-5 rounded-xl overflow-hidden">
                            <img src={item.photo} alt="" className='w-[10rem] h-[12rem]' />
                        </div>
                        <div className="core">
                            <div className="wrapper mb-2">
                                <p className='text-lg font-semibold text-start'>Order name :</p>
                                <p className='text-md text-gray-400 text-start'>{item.name}</p>
                            </div>
                            <div className="wrapper mb-2">
                                <p className='text-lg font-semibold text-start'>Total price :</p>
                                <p className='text-md text-gray-400 text-start'>$ {item.price}</p>
                            </div>
                            <div className="wrapper mb-2">
                                <p className='text-lg font-semibold text-start'>Status :</p>
                                <p className='text-md text-red-600 font-bold text-start'>{item.status}</p>
                            </div>
                        </div>
                    </div>
                    ): 
                    <p className='text-2xl font-semibold'>No order history</p>
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default MyOrder