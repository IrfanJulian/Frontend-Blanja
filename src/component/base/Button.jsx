import React from 'react'

const Button = ({ type, className, onClick, name }) => {
  return (
    <>
        <button className={className} type={type} onClick={onClick} >{name}</button>
    </>
  )
}

export default Button