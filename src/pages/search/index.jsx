import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Navbar from '../../components/base/navbar'
import ProductList from '../../components/base/product-list'

const Search = () => {

    const navigate = useNavigate()
    const {id} = useParams()
    const [data, setData] = useState()
    const [keyword, setKeyword] = useState('')
    const handleChange = (e) => {
        setKeyword(e.target.value)
    }

    const clickSearch = async(e) => {
        e.preventDefault()
        navigate(`/search/${keyword}`)
    }

    useEffect(()=>{
        const getSearch = async() => {
            try {
                const res = await axios({
                    method: 'GET',
                    url: `http://localhost:4500/products?search=${id}`
                })
                setData(res.data.data)
            } catch (error) {
                console.log(error);
            }
        }
        getSearch()
    }, [id])

  return (
    <div>
        <div className="shadow-xl shadow-gray-200">
            <Navbar onSubmit={clickSearch} value={keyword} onChange={handleChange} name='keywood' type='submit' />
        </div>
        <div className='container tittle mx-auto'>
            <p className='text-3xl text-start font-semibold my-10'>Result for {id}</p>
        </div>
        <div className="container mx-auto">
            <div className='grid grid-cols-5 gap-12'>
                { data ? data.map(item =>
                <Link to={`/product-detail/${item.id}`} key={item.id}>
                    <ProductList name={item.name} price={item.price} brand={item.brand} photo={item.photo} />
                </Link>
                ) : null }
            </div>
        </div>
    </div>
  )
}

export default Search