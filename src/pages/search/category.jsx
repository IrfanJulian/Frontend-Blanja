// import axios from 'axios'
import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../../component/module/Navbar'
import { getCategory } from '../../redux/action/categoryAction'

const SearchCategory = () => {

    const navigate = useNavigate()
    const {key} = useParams()
    const dispatch = useDispatch()
    const { category } = useSelector((state)=>state.category)

  
    useEffect(()=>{
        dispatch(getCategory(key))
    }, [dispatch, key])


  return (
    <div className='container mx-auto px-4' id='font-custom'>
      <div className="wrapper mt-28 md:mt-44">
        <p className='text-xl md:text-4xl my-5 md:my-20 font-medium text-left'>Result ...</p>

        { category !== null && category.length >= 1 ?
          <div className='md:grid md:grid-cols-5 md:gap-8'>
            { category.map((item)=>
            <div to={`/detail-product/${item.id}`} className='h-max mt-8 md:mt-0' key={item.id}>
              <div className="card border-2 shadow-lg rounded w-8/12 md:w-full mx-auto">
                <img src={item.photo} alt="item" className='h-[14rem] my-3 rounded mx-auto' />
                <p className='font-medium'>{item.name}</p>
                <p className='text-sm'>{item.brand}</p>
                <div className="flex px-4 space-x-3 my-3 w-max mx-auto">
                    <p className='text-left text-sm'>Price</p>
                    <p className='font-medium text-sm text-red-600'>{item.price}</p>
                </div>
                <button onClick={()=>navigate(`/product-detail/${item.id}`)} className='bg-red-600 text-sm rounded-md mb-3 px-5 py-1 text-white'>More detail</button>
              </div>
            </div>
            )}
          </div>
          :
          <div className="grid -mt-40 h-screen">
            <div className="wrap h-max my-auto">
              <p className='text-xl md:text-2xl'>Product Not Found</p>
            </div>
          </div>
        }

      </div>
      <Navbar />
    </div>
  )
}

export default SearchCategory