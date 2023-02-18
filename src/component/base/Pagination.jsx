import React from 'react'

const Pagination = ({ className, onClick1, onClick2 }) => {
  return (
    <div className={className}>
        <div className="container mx-auto">
            <div className="flex w-max mx-auto">
                <button onClick={onClick1} className='text-lg font-semibold text-white bg-red-600 py-1 px-5 rounded-md'>Prev</button>
                <div className="text flex">
                    <p className='ml-4 font-bold my-auto'>1</p>
                    <p className='mx-2 font-bold my-auto'>/</p>
                    <p className='mr-4 font-bold my-auto'>5</p>
                </div>
                <button onClick={onClick2} className='text-lg font-semibold text-white bg-red-600 py-1 px-5 rounded-md'>Next</button>
            </div>
        </div>
    </div>
  )
}

export default Pagination