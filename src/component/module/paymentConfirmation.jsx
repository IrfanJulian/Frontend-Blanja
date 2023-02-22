import React from 'react'

const PaymentConfirmation = ({ onClick }) => {

  return (
    <div className='absolute top-0 left-0'>
        <div className="fixed bg-black opacity-40 h-screen w-screen"></div>
        <div className="wrapper fixed h-max w-screen top-1/3">
            <div className="card px-3 py-9 bg-white rounded-lg w-3/4 md:w-1/4 mx-auto">
                <div className="wrappericon border-8 border-green-500 p-2 w-max h-max rounded-full mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-green-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                </div>
                <p className='texl-xl md:text-3xl mt-3 mb-1 font-medium'>Payment Success</p>
                <p>Waiting from Seller confirmation</p>
                <button onClick={onClick} className='mt-7 bg-green-500 rounded-lg py-2 px-10 text-white font-medium hover:opacity-50'>Back to Home Page</button>
            </div>
        </div>
    </div>
  )
}

export default PaymentConfirmation