import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { getMyProduct } from '../../redux/action/productAction'
import Card from '../base/Card'

const MyProduct = ({ className }) => {

  const id = localStorage.getItem('id')
  const token = localStorage.getItem('token')
  const dispatch = useDispatch()
  const { myProduct } = useSelector((state)=>state.product)

  useEffect(()=>{
    dispatch(getMyProduct(id))
  }, [dispatch, id])

  const deleteProduct = (e, id) => {
    e.preventDefault()
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this action!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then(async(result) => {
      if (result.isConfirmed) {
        try {
          await axios({
            method: 'DELETE',
            url: `${process.env.REACT_APP_API}product/${id}`,
            headers: {
              authorization: `Barer ${token}`
            }
          })
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        } catch (error) {
         console.log(error); 
        }
      }
    })
  }

  return (
    <div className={className}>
        <div className="container mx-auto px-5">
            <p className='text-2xl md:text-4xl font-semibold'>My List Product</p>
            <div className="wrapper my-10 md:my-20 grid grid-cols-2 gap-3 md:grid-cols-5 md:gap-10">
              { myProduct ? myProduct.map((item)=>
                <Card onDelete={deleteProduct} key={item.id} name={item.name} photo={item.photo} stock={item.stock} price={item.price} />
              )
              : null }
            </div>
        </div>
    </div>
  )
}

export default MyProduct