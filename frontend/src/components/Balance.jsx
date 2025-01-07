import React, { useState } from 'react'

const Balance = () => {
    const [balance,setBalance]=useState(10000);
  return (
    <div className='p-6 flex'>
        <div className=' text-md font-bold'>Your Balance</div>
        <div className='ml-4 text-md font-semibold'>Rs {balance}</div>
    </div>
  )
}

export default Balance