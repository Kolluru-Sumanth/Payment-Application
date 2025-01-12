import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Balance = () => {
    const [balance,setBalance]=useState(0);
    useEffect(()=>{
        axios.get("http://localhost:3000/api/v1/account/balance",{
          headers:{
            'Authorization':localStorage.getItem("token")
          }
        }).then((response)=>{
          setBalance(Math.trunc(response.data.balance));
        })}
        ,[]);
  return (
    <div className='p-6 flex'>
        <div className=' text-md font-bold'>Your Balance</div>
        <div className='ml-4 text-md font-semibold'>Rs {balance}</div>
    </div>
  )
}

export default Balance