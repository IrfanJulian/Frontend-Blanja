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
    const data  = bag[0]

    useEffect(()=>{
        dispatch(getMybag())
    }, [dispatch])

    const handleCheckout = (e) => {
      Swal.fire({
          title: 'Checkout now?',
          text: "Checkout will proccess!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes'
        })
        .then((result) => {
          if (result.isConfirmed) {
            navigate(`/checkout/${data.product_id}`)
          }
        })
  }

  return (
    <div>
      <div className='container mx-auto py-28' id='font-custom'>
        { bag ?
          <div className="wrapper">
              <p className='text-xl md:text-4xl my-5 md:my-20 font-medium'>My Bag</p>
                <div className="block md:grid md:grid-cols-2 md:gap-5">
                    { bag.map((item)=>
                        <CardBag className='mt-5' key={item.id} onClickCheckout={handleCheckout} onClick1={()=>setQty((current)=>current-1)} onClick2={()=>setQty((current)=>current+1)} name={item.product_name} img={item.photo} brand={item.brand} qty={qty} price={item.price * qty} />
                    )}
                </div>
            </div>
            :
            <p className='text-lg font-semibold'>Choose some item and then add to your bag</p>
          }
        <Navbar />
      </div>
    </div>
  )
}

export default Mybag