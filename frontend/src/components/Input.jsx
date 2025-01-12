import React from 'react'

const Input = ({title,inputPlaceHolder,onchange}) => {
  return (
    <div className='w-full pl-1'>
    <div className='font-bold'>{title}</div>
    <input onChange={onchange} className='w-full rounded-md my-2 box-border px-2 py-1 border-2' type="text" placeholder={inputPlaceHolder} />
    </div>
  )
}

export default Input