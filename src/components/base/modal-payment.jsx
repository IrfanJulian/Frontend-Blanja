import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import x from '../../assets/x.png'
import gopay from '../../assets/gopay.png'
import pos from '../../assets/pos.png'
import mastercard from '../../assets/mastercard.png'
import CheckBox from './check-box'

export default function MyModal({ onClick }) {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div className="inset-0 flex items-center justify-center mt-10">
        <button
          type="button"
          onClick={openModal}
          className="rounded-full bg-red-600 py-3 w-full px-4 text-xl font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Buy Now
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white px-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title as="h3" className="text-xl font-medium leading-6 border-b-2 py-4 text-gray-900">
                    <div className="flex">
                        <p>Payment</p>
                        <Link onClick={closeModal} className='ml-auto'><img src={x} alt="close" /></Link>
                    </div>
                  </Dialog.Title>
                  <div className="my-4">
                    <p className="text-lg font-semibold text-black">Payment Method</p>
                    <div className="grid my-5 border-b-2">
                        <div className="flex">
                            <div className="w-5/12">
                                <img src={gopay} alt="" className='mb-7' />
                                <img src={pos} alt="" className='mb-7' />
                                <img src={mastercard} alt="" className='mb-7' />
                            </div>
                            <div className="w-5/12">
                                <p className='text-sm font-semibold mb-10'>Gopay</p>
                                <p className='text-sm font-semibold mb-10'>Pos Indonesia</p>
                                <p className='text-sm font-semibold mb-10'>Mastercard</p>
                            </div>
                            <div className="grid w-2/12">
                                <CheckBox className='mb-11 mx-auto' />
                                <CheckBox className='mb-11 mx-auto' />
                                <CheckBox className='mb-11 mx-auto' />
                            </div>
                        </div>
                    </div>
                    <div className="grid my-5">
                        <p className='text-lg font-semibold'>Shopping Summary</p>
                        <div className="flex my-5">
                            <p className='text-lg text-gray-400'>Order</p>
                            <p className='text-lg font-semibold text-black ml-auto'>$ 45.0</p>
                        </div>
                        <div className="flex mb-10">
                            <p className='text-lg text-gray-400'>Delivery</p>
                            <p className='text-lg font-semibold text-black ml-auto'>$ 3.1</p>
                        </div>
                    </div>
                  </div>

                  <div className="my-4 border-t-2 py-5 flex">
                    <div className="grid">
                        <p className='text-lg font-semibold'>Shopping Summary</p>
                        <p className='text-lg font-semibold text-[#DB3022]'>$ 48.1</p>
                    </div>
                    <div className="wrpper ml-auto">
                        <button
                        type="button"
                        className="inline-flex justify-center rounded-full bg-red-600 py-3 w-full border border-transparent px-16 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={onClick}
                        >Buy
                        </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
  