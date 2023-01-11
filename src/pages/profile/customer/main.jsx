import React, {useState} from 'react'
import Address from '../../../components/base/addAddress'
import MyOrder from '../../../components/base/myOrder'
import MyProfile from '../../../components/base/myProfile'
import Navbar from '../../../components/base/navbar'
import Sidebar from '../../../components/base/sidebar'

const ProfileCustomer = () => {

  const [page, setPage] = useState(1)
  // const [role, setRole] = useState('seller')

  return (
    <div>
        <div className="bg-white shadow-xl shadow-gray-200">
            <Navbar />
        </div>
        <div className="wrapper">
            <Sidebar on1={()=>setPage(1)} on2={()=>setPage(2)} on3={()=>setPage(3)} className='absolute' />
        </div>
        { page === 1 ?
        <div className='container mx-auto'>
          <MyProfile />
        </div> : page === 2 ?
        <div className="container mx-auto">
          <Address />
        </div> :
        <div className="container mx-auto">
          <MyOrder />
        </div>
        }
    </div>
  )
}

export default ProfileCustomer