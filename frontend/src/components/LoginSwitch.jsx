import React from 'react'
import { Link } from 'react-router-dom'

const LoginSwitch = ({text,buttonText,path}) => {
  return (
    <div className='flex justify-center font-medium p-2 pb-4'>
        <p>{text}</p>
        <Link to={path} className='pl-1 underline cursor-pointer'>
        {buttonText}
        </Link>
    </div>
  )
}

export default LoginSwitch