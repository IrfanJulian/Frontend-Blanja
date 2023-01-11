import axios from 'axios'
import React, {useState,useEffect} from 'react'
import Swal from 'sweetalert2'
import trash from '../../assets/trsh white.png'

const MyProductSeller = () => {

    const id = localStorage.getItem('id')
    const [idProduct, setIdProduct] = useState()
    const token = localStorage.getItem('token')
    const [data, setData] = useState()

    console.log(idProduct);

    useEffect(()=>{
        const getData = async() => {
            const res = await axios({
                method: 'GET',
                url: `http://localhost:4500/products/myProduct/${id}`,
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
            setData(res.data.data)
        }
        getData()
    }, [id, token])

    const deleteData = async () => {
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
                    url: `http://localhost:4500/products/${idProduct}`,
                    headers: {
                        authorization: `Bearer ${token}`
                    }
                })
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
          window.location.reload()
    }

  return (
    <div>
        <div>
            <div className="px-10 pt-10 pb-20 mb-10 border-2 border-gray-300 rounded-lg">
                <p className='text-4xl font-semibold text-start'>My products</p>
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
                        <div className="core w-3/4">
                            <div className="wrapper mb-2">
                                <p className='text-lg font-semibold text-start'>Product name :</p>
                                <p className='text-md text-gray-400 text-start'>{item.name}</p>
                            </div>
                            <div className="wrapper mb-2">
                                <p className='text-lg font-semibold text-start'>Product brand :</p>
                                <p className='text-md text-gray-400 text-start'>{item.brand}</p>
                            </div>
                            <div className="wrapper mb-2">
                                <p className='text-lg font-semibold text-start'>Product price :</p>
                                <p className='text-md text-gray-400 text-start'>$ {item.price}</p>
                            </div>
                            <div className="wrapper grid">
                                <button onClick={()=>{setIdProduct(item.id); deleteData()}} className='p-2 rounded-md bg-red-600 ml-auto'><img src={trash} alt="trash" className='w-[1rem] h-[1rem]' /></button>
                            </div>
                        </div>
                    </div>
                    ): null }
                </div>
            </div>
        </div>
    </div>
  )
}

export default MyProductSeller