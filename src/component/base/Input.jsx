import React from 'react'

const Input = ({ tittle, type, className, name, value, onChange, placeholder, maxlength }) => {
  return (
    <div>
        <p>{tittle}</p>
        <input type={type} className={className ? className : 'py-2 px-4 border-2 w-full outline-none mb-4'} maxLength={maxlength} name={name} value={value} onChange={onChange} placeholder={placeholder} />
    </div>
  )
}

export default Input