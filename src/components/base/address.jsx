import React, {useEffect} from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import x from '../../assets/x.png'
import axios from 'axios'
import MyModalEditAddress from './modalAddress'
// import CheckBox from './check-box'

export default function MyModalAddress() {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const token = localStorage.getItem('token')
  const [data, setData] = useState()
  const id = localStorage.getItem('id')

  useEffect(()=>{
    const getAddress = async() => {
      const res = await axios({
        method:'GET',
        url:`${process.env.REACT_APP_API}/contact/${id}`,
        headers: {
          authorization: `Bearer ${token}`
        }
      })
      setData(res.data.data[0])
    }
    getAddress()
  }, [id, token])
  console.log(data);

  return (
    <>
      <div className="inset-0 flex items-center justify-center mt-10">
        <button
          type="button"
          onClick={openModal}
          className="rounded-xl py-16 w-3/4 border-4 border-dashed border-gray-300 text-3xl text-gray-300 font-semibold"
        >Add new address
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                {/* { data ?  */}
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white px-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title as="h3" className="text-xl font-medium leading-6 border-b-2 py-4 text-gray-900">
                    <div className="flex">
                        <p className='text-2xl'>Add new address</p>
                        <Link onClick={closeModal} className='ml-auto'><img src={x} alt="close" /></Link>
                    </div>
                  </Dialog.Title>
                  <div className="mt-4">
                      <p className="text-lg font-semibold text-black"></p>
                    <div className="grid my-5">
                    <div className="p-10 mb-10 border-2 border-gray-300 rounded-lg">
                      <p className='text-4xl font-semibold text-start'>Choose another address</p>
                      <p className='text-xl text-gray-400 text-start mt-5'>Manage your shipping address</p>
                    <hr className='my-10 border border-gray-300' />
                    <div className="w-3/4 grid mx-auto p-10 mt-20 border-2 border-red-600 rounded-xl">
                        <p className='text-xl font-semibold text-start'>Julls</p>
                        <p className='text-start my-8'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus eum officiis magni, tenetur odio rerum quae rem eius quaerat dolor.</p>
                        {/* {data.address} - {data.zip} - {data.city} */}
                        <MyModalEditAddress />
                    </div>
                </div>
                    </div>
                </div>

                  <div className="my-4 py-5">
                    <div className="wrpper ml-auto flex">
                        <button
                        type="button"
                        className="inline-flex mr-3 justify-center rounded-full py-3 w-full border border-gray-400 px-16 text-sm font-medium text-gray-400 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                        >Cancel
                        </button>
                        <button
                        type="button"
                        className="inline-flex ml-3 justify-center rounded-full bg-red-600 py-3 w-full border border-transparent px-16 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                        >Save
                        </button>
                    </div>
                  </div>
                </Dialog.Panel>
                {/* : null } */}
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}