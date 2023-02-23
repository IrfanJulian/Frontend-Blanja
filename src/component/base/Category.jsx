import React, { useEffect ,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Category = ({className}) => {

    const navigate = useNavigate()
    const [ category, setCategory ] = useState('')
    const [ categoryLimit, setCategoryLimit ] = useState('')
    const limit = 4
    console.log(category);
    console.log(categoryLimit);

    useEffect(()=>{
        const getCategory = async() => {
            try {
                const res = await axios({
                    method: 'GET',
                    url: `${process.env.REACT_APP_API}category/limit/${limit}`
                })
                setCategoryLimit(res.data.data)
            } catch (error) {
                console.log(error);
            }
        }
        getCategory()
    }, [])

  return (
    <div className={className} id='font-custom' >
        <div className="container mx-auto">
            <p className='font-semibold text-lg md:text-3xl md:text-start'>Category</p>
            <div className="wrapper md:mt-10 text-xs md:text-xl my-5 grid grid-cols-4 md:grid-cols-5 md:gap-5 gap-3 px-4">
                { categoryLimit ? categoryLimit.map((item)=>
                    <div key={item.id} onClick={()=>navigate(`/search-category/${item.id}`)} className="card h-full md:w-full cursor-pointer shadow-xl mx-auto hover:opacity-70 p-1 border-2 rounded-xl">
                            <img src={item.photo} className='h-3/4 mx-auto' alt="category1" />
                            <p className='font-semibold'>{item.name}</p>
                    </div>
                ): null }
                {/* <div onClick={()=>{setCategory(11);}} className="card shadow-xl hover:opacity-70 p-1 border-2 rounded-xl">
                        <img src={icon3} className='h-3/4 w-3/4 mx-auto' alt="category1" />
                        <p className='font-semibold'>accesories</p>
                </div>
                <div onClick={()=>{setCategory(4);}} className="card shadow-xl hover:opacity-70 p-1 border-2 rounded-xl">
                        <img src={icon4} className='h-3/4 w-3/4 mx-auto' alt="category1" />
                        <p className='font-semibold'>pants</p>
                </div>
                <div onClick={()=>{setCategory(1);}} className="card shadow-xl hover:opacity-70 p-1 border-2 rounded-xl">
                        <img src={icon6} className='h-3/4 w-3/4 mx-auto' alt="category1" />
                        <p className='font-semibold'>shirt</p>
                </div>
                <div onClick={()=>{setCategory(9);}} className="card shadow-xl hover:opacity-70 hidden md:block p-1 border-2 rounded-xl">
                        <img src={icon9} className='h-3/4 w-3/4 mx-auto' alt="category1" />
                        <p className='font-semibold'>shoes</p>
                </div> */}
            </div>
            <div className="wrapper w-full md:my-16 grid">
                <select value={category} onChange={(e)=>setCategory(e.target.value)} name="" id="" className='text-center cursor-pointer mx-auto outline-none w-max h-max text-sm my-6 font-medium md:text-xl md:mt-0'>
                    <option value="" disabled>Select Category</option>
                    <option value="1">Shirt</option>
                    <option value="2">Jacket</option>
                    <option value="3">hoodie</option>
                    <option value="4">pants</option>
                    <option value="5">short</option>
                    <option value="6">dress</option>
                    <option value="7">suit</option>
                    <option value="8">Watch</option>
                    <option value="9">Shoes</option>
                    <option value="10">Underwear</option>
                    <option value="11">Accesories</option>
                </select>
                <button onClick={()=>navigate(`/search-category/${category}`)} className='w-max h-max mx-auto flex py-1 md:py-2 bg-red-600 text-white px-3 md:text-lg rounded-md -mt-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 md:h-7 md:w-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                    <p className='ml-2'>Search Category...</p>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Category