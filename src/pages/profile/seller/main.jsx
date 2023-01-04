import React, {useState} from 'react'
import AddProduct from '../../../components/base/addProduct'
import MyProductSeller from '../../../components/base/myProductSeller'
import MyProduct from '../../../components/base/myProductSeller'
import MyProfile from '../../../components/base/myProfileSeller'
import Navbar from '../../../components/base/navbar'
import SidebarSeller from '../../../components/base/sidebar-seller'

const ProfileSeller = () => {

    const [page, setPage] = useState(1)

  return (
    <div>
        <div className="bg-white shadow-xl shadow-gray-200">
            <Navbar />
        </div>
        <div className="wrappe">
            <SidebarSeller on1={()=>setPage(1)} on2={()=>setPage(2)} on3={()=>setPage(3)} on4={()=>setPage(4)} />
        </div>
        { page === 1 ?
        <div className="wrapper container mx-auto">
            <MyProfile />
        </div> : page === 2 ?
        <div className="wrapper container mx-auto">
            <MyProduct />
        </div> : page === 3 ?
        <div className="wrapper container mx-auto">
            <AddProduct />
        </div> :
        <div className="wrapper container mx-auto">
            <MyProductSeller />
        </div>
        }
    </div>
  )
}

export default ProfileSeller