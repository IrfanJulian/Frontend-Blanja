import React from 'react'
import loading from '../../assets/loaing.png'

const Loading = ({ className }) => {
  return (
    <div>
        <img src={loading} alt="loading" className={className} />
    </div>
  )
}

export default Loading