import React, {useState,useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import Navbar from '../../component/module/Navbar'
import CardProducts from '../../component/base/CardProducts'
import min from '../../assets/min.png'
import plus from '../../assets/plus.png'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../../redux/action/productAction'
import axios from 'axios'
import Loading from '../../component/base/Loading'

const ProductDetail = () => {

    const {id} = useParams()
    const token = localStorage.getItem('token')
    const idUser = localStorage.getItem('id')
    const [total] = useState(0)
    const [search, setSearch] = useState('')
    const [qty, setQty] = useState(1)
    const [data, setData] = useState()
    const { product } = useSelector((state)=>state.product)
    const dispatch = useDispatch()

    const handleSearchProduct = (e) => {
      e.preventDefault()
      dispatch(getProduct(search))
    }
  
    useEffect(()=>{
        const getDetail = async() => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API}products/${id}`)
                setData(res.data.data[0])
            } catch (error) {
                console.log(error);
            }
        }
        getDetail()
    }, [id])

    useEffect(()=>{
        dispatch(getProduct())
    }, [dispatch])

    const addCart = (e) => {
        e.preventDefault()
        Swal.fire({
            title: 'Add to cart?',
            text: "This process will add item to your cart",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Add to cart'
          }).then(async(result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                try {
                    await axios({
                        method: 'POST',
                        url: `${process.env.REACT_APP_API}mybag`,
                        headers: {
                            authorization: `Bearer ${token}`
                        },
                        data: {
                            id_user: idUser,
                            id_product: id,
                            qty,
                            total
                        }
                    })
                    Swal.fire('Add to cart success!', '', 'success')
                } catch (error) {
                    Swal.fire('Add to cart failed!', '', 'error')
                    console.log(error);
                }
            } else if (result.isDenied) {
              Swal.fire('Changes are not saved', '', 'info')
            }
        })
    }

  return (
    <div className='py-10' id='font-custom'>
        <Navbar search={(e)=>{setSearch(e.target.value)}} name='search' value={search} handleSearch={handleSearchProduct} />
        { data ? 
        <div>
            <div className="container mx-auto md:flex py-10">
                <div className="md:w-max md:mr-16">
                    <CardProducts photo={data.photo} classNameImage='w-[15rem] h-[15rem] md:w-[35rem] md:h-[35rem] mx-auto' classNameCard='p4' classNameTittle='' />
                </div>
                <div className="md:w-1/2 px-7 md:px-0 md:h-max my-auto">
                    <div className="wrapper">
                        <div className="tittle mt-10 md:mt-0">
                            <p className='text-left font-bold text-xl md:text-4xl'>{data.name}</p>
                            <p className='text-left text-lg'>{data.brand}</p>
                        </div>
                        <div className="price mt-3 md:mt-10">
                            <p className='font-semibold text-lg md:text-2xl text-left'>Price</p>
                            <p className='text-md md:text-xl text-red-600 text-left'>Rp. {data.price}</p>
                        </div>
                        <div className="size mt-5">
                            <p className='font-semibold text-lg md:text-2xl text-left'>Size</p>
                            <div className="flex">
                                <Link className='w-max h-max'><img src={min} alt="size" className='w-7 h-7 md:w-10 md:h-10' /></Link>
                                <p className='text-md md:text-xl mx-4 my-auto'>L</p>
                                <Link className='w-max h-max'><img src={plus} alt="size" className='w-7 h-7 md:w-10 md:h-10' /></Link>
                            </div>
                        </div>
                        <div className="quantity mt-5">
                            <p className='font-semibold text-lg md:text-2xl text-left'>Quantity</p>
                            <div className="flex">
                                <Link onClick={()=>setQty((current)=>current-1)} className='w-max h-max'><img src={min} alt="size" className='w-7 h-7 md:w-10 md:h-10' /></Link>
                                <p className='text-md md:text-xl mx-4 my-auto'>{qty}</p>
                                <Link onClick={()=>setQty((current)=>current+1)} className='w-max h-max'><img src={plus} alt="size" className='w-7 h-7 md:w-10 md:h-10' /></Link>
                            </div>
                        </div>
                        <div className="button w-full md:w-3/4 mt-10">
                            <div className="flex mx-auto mb-3">
                                <button onClick={addCart} className='w-1/2 py-3 bg-red-600 rounded-full text-white text-md md:text-lg font-normal md:font-semibold mr-2'>Add to Cart</button>
                                <button className='w-1/2 py-3 bg-red-600 rounded-full text-white text-md md:text-lg font-normal md:font-semibold ml-2'>Chat</button>
                            </div>
                            <button className='w-full py-3 bg-red-600 rounded-full text-white text-md md:text-lg font-normal md:font-semibold'>Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-7 md:px-0">
                <div className="wrapper w-3/4">
                    <p className='font-bold text-2xl text-left'>Description</p>
                    <div className="desc my-4 md:my-10">
                        <p className='text-left'>{data.description}</p>
                    </div>
                </div>
            </div>
        </div>
        :
        <div className='w-full px-20 md:px-0'>
            <Loading className='mx-auto w-[20rem] h-20rem' />
        </div>
        }
        <div className="container mx-auto mt-8 md:mt-20 px-7 md:px-0 mb-10">
            <p className='font-bold text-2xl mb-10 text-left'>Product For You</p> 
            { product ?
            <div className="grid md:grid-cols-5 md:gap-12 md:px-8">
                { product.map((item)=>
                <CardProducts photo={item.photo} tittle={item.name} price={item.price} brand={item.brand} />
                )}
            </div>
            : 
            <p className='text-md md:text-xl font-bold'>Nothing Products to Show</p>
            }
        </div>
    </div>
  )
}

export default ProductDetail