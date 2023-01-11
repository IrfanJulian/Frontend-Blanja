import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Carousel from '../../components/base/carousel'
import CategorySlider from '../../components/base/category-slider'
import Navbar from '../../components/base/navbar'
import ProductList from '../../components/base/product-list'
import left from '../../assets/left.png'
import right from '../../assets/right.png'

const Home = () => {

    // const id = localStorage.getItem('id')
    const navigate = useNavigate()
    const [data, setData] = useState()
    // const navigate = useNavigate()
    const [page, setPage] = useState(1)
    const [current, setCurrent] = useState()
    const [total, setTotal] = useState()
    // const [photo, setPhoto] = useState()

    useEffect(()=> {
        const getData = async() => {
            try {
                const res = await axios({
                    method: 'GET',
                    url: `http://localhost:4500/products?page=${page}`
                })
                setData(res.data.data);
                setCurrent(res.data.pagination.currentPage);
                setTotal(res.data.pagination.totalPage);
            } catch (error) {
                console.log(error);
            }
        }
        getData()
    }, [page])

    // useEffect(()=>{
    //     const getUserPhoto = async() => {
    //         try {
    //             const res = await axios({
    //             method: 'GET',
    //             url: `http://localhost:4500/user/${id}`
    //             })
    //         setPhoto(res)
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }
    //     getUserPhoto()
    // }, [id])
    // console.log(photo);

    // console.log(page);
    // console.log(current);
    // console.log(total);
    // const [search, setSearch] = useState()
    const [keyword, setKeyword] = useState('')
    const handleChange = (e) => {
        setKeyword(e.target.value)
    }

    const clickSearch = async(e) => {
        e.preventDefault()
        navigate(`/search/${keyword}`)
    }
    // const res = await axios({
    //     method: 'GET',
    //     url: `http://localhost:4500/products?search=${keyword}`
    // })
    // setSearch(res.data.data)

  return (
    <div>
        <div className="shadow-xl shadow-gray-200">
            <Navbar onSubmit={clickSearch} value={keyword} onChange={handleChange} name='keywood' type='submit' />     
        </div>
        <div className="container mx-auto my-20 rounded-3xl w-1/2">
            <Carousel />
        </div>
        <div className="container mx-auto">
            <p className='text-4xl font-bold text-start'>Category</p>
            <p className='text-lg text-start my-5 text-gray-400'>What are you looking for</p>
            <CategorySlider />
        </div>
        { data ? 
            <div className="container mx-auto mb-[5rem]">
                <p className='text-4xl font-bold text-black text-start'>Products</p>
                <p className='text-lg text-start my-5 text-gray-400'>You've never seen it before</p>
                <div className='grid grid-cols-5 gap-12'>
                { data ? data.map((product)=>
                    <Link to={`/product-detail/${product.id}`} key={product.id}>
                        <ProductList key={product.id} name={product.name} price={product.price} brand={product.brand} photo={product.photo} />
                    </Link>
                ) : null }
                </div>
            </div>
        : null }
        
        <div className="container pagin mx-auto">
            <div className="wrapper flex w-max h-max mx-auto mb-10 p-10">
                <button className='mx-5' onClick={()=>setPage(page- 1)}>
                    <img src={left} alt="arrow" className='w-8 h-8' />
                </button>
                { current && total ?
                    <p className='text-xl font-semibold'>{current} / {total}</p>
                : null }
                <button className='mx-5' onClick={()=>setPage(page + 1)}>
                    <img src={right} alt="arrow" className='w-8 h-8' />
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home