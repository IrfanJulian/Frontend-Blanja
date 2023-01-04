import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Carousel from '../../components/base/carousel'
import CategorySlider from '../../components/base/category-slider'
import Navbar from '../../components/base/navbar'
import ProductList from '../../components/base/product-list'

const Home = () => {

    const [data, setData] = useState()
    // const navigate = useNavigate()

    useEffect(()=> {
        const getData = async() => {
            try {
                const res = await axios({
                    method: 'GET',
                    url: 'http://localhost:4500/products'
                })
                setData(res.data.data)
            } catch (error) {
                console.log(error);
            }
        }
        getData()
    }, [])
    // console.log(data);

  return (
    <div>
        <div className="shadow-xl shadow-gray-200">
            <Navbar />     
        </div>
        <div className="container mx-auto my-20 rounded-3xl w-1/2">
            <Carousel />
        </div>
        <div className="container mx-auto">
            <p className='text-4xl font-bold text-start'>Category</p>
            <p className='text-lg text-start my-5 text-gray-400'>What are you looking for</p>
            <CategorySlider />
        </div>
        { data ? data.map((product)=>
        <Link to={`/product-detail/${product.id}`}>
            <div className="container mx-auto mb-[5rem]">
                <p className='text-4xl font-bold text-black text-start'>Products</p>
                <p className='text-lg text-start my-5 text-gray-400'>You've never seen it before</p>
                <ProductList name={product.name} price={product.price} brand={product.brand} photo={product.photo} />
            </div>
        </Link>
        ) : null }
    </div>
  )
}

export default Home