import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import Navbar from '../../component/module/Navbar'
import CardBag from '../../component/base/CardBag'
import { useDispatch, useSelector } from 'react-redux'
import { getMybag } from '../../redux/action/bagAction'

const Mybag = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { bag } = useSelector((state)=>state.bag)
    const [qty, setQty] = useState(1)
    const [price, setPrice] = useState(1)
    const [choose, setChoose] = useState(null)
    console.log(bag);

    useEffect(()=>{
        dispatch(getMybag())
        setQty(bag.qty)
        setPrice(bag.price)
    }, [dispatch, bag.qty, bag.price])

    const handleChoose = (item, e) => {
        if(e.target.checked === true){
            setChoose({
                ...choose,
                item
            })
        }else{
            return choose
        }
    }

  return (
    <div className='py-10' id='font-custom'>
        <Navbar />
        { bag ? 
        <div className="wrapper">
            <p className='text-xl my-5 font-semibold'>Cart Page</p>
            { bag.map((item)=>
                <CardBag key={item.id} className='mt-5' name={item.name} onClick1={()=>setQty((current)=>current-1)} onClick2={()=>setQty((current)=>current=1)} onChange={handleChoose(item.id)} qty={qty} price={price * qty} />
            )}
        </div>
        :
        <p className='text-lg font-semibold'>Choose some item and then add to your bag</p>
        }
    </div>
  )
}

export default Mybag