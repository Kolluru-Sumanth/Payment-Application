import React from 'react'

const Input = ({title,inputPlaceHolder}) => {
  return (
    <div>
    <div className='font-bold pl-2'>{title}</div>
    <input className='rounded-md w-80 m-2 box-border px-2 py-1 border-2' type="text" placeholder={inputPlaceHolder} />
    </div>
  )
}

export default Input