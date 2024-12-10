import React from 'react'

const Button = ({styles}) => {
  return (
    <button type='button' className={`py-2 px-6 font-montserrat font-medium text-[18px] bg-blue-gradient rounded-[10px] outline-none ${styles}`} >Boshlash</button>
  )
}

export default Button