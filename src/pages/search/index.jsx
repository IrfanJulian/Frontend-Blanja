import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import CardProducts from '../../component/base/CardProducts'
import Navbar from '../../component/module/Navbar'
import notfound from '../../assets/404.png'

const Search = () => {

  const {key} = useParams()
  const [data, setData] = useState(null)
  // const [length, setLength] = useState()
  console.log(data);
  
  useEffect(()=>{
    const getSearch = async() => {
      try {
        const res = await axios({
          method: 'GET',
          url: `${process.env.REACT_APP_API}products?search=${key}`
        })
        setData(res.data.data)
      } catch (error) {
        console.log(error);
      }
    }
    getSearch()
  }, [key])

  return (
    <div className='container mx-auto px-4' id='font-custom'>
      <div className="wrapper mt-28 md:mt-44">
        <p className='text-xl md:text-4xl my-5 md:my-20 font-medium text-left'>Result For {key} ...</p>
        {/* <div className=''> */}
        { data !== null && data.length >= 1 ?
          <div className="grid md:grid-cols-5 md:gap-12 md:px-8 h-screen">
            { data.map((item)=>
            <Link to={`/detail-product/${item.id}`} key={item.id}>
              <CardProducts photo={item.photo} tittle={item.tittle} price={item.price} brand={item.brand} />
            </Link>
            )}
          </div>
          :
          <div className="grid -mt-40 h-screen">
            <div className="wrap h-max my-auto">
              <p className='text-xl md:text-2xl'>Product Not Found</p>
              <img src={notfound} alt="notfound" className='md:w-1/4 md:mx-auto' />
            </div>
          </div>
        }
        {/* </div> */}
      </div>
      <Navbar />
    </div>
  )
}

export default Search