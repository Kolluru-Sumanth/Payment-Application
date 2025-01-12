import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useSearchParams } from 'react-router-dom';
const Send = () => {
  const [reciversName, setReciverName] = useState({
    firstname: 'test',
    lastname: 'user'
  })
  const [searchParams,setSearchParams]=useSearchParams();
  const [amount,setAmount]=useState(0);
  const to=searchParams.get('to');
  const navigate= useNavigate();
  useEffect(()=>{
    
    axios.get('http://localhost:3000/api/v1/user/touser?to='+to).then((response)=>{
      setReciverName(response.data);
    });
  },[]);
  return (
    <div className='fixed inset-0 bg-black bg-opacity-10 flex items-center flex-col pt-36'>
      <div className='bg-white p-6  shadow-md w-96 place-content-center rounded-lg'>
        <div className='font-bold m-4 text-center text-3xl '>
          Send Money
        </div>
        <div className='flex pt-2 items-center'>
          <div className='bg-green-500 text-white w-11 h-11 rounded-full flex items-center justify-center' >
            <div>
              {reciversName.firstname[0].toUpperCase()}{reciversName.lastname[0].toUpperCase()}
            </div>
          </div>
          <div className='pl-3 text-2xl font-bold'>
            {reciversName.firstname} {reciversName.lastname}
          </div>
        </div>
        <div className='w-80' >
          <div className='font-semibold text-sm'>
          Amount (in Rs)
          </div>
          <input onChange={(e)=>{
            setAmount(e.target.value);
          }} className='p-2 my-2 w-full border-2 box-border border-slate-200 rounded-md' type="number" placeholder='Enter Amount' />
          <button onClick={()=>{
            axios.post("http://localhost:3000/api/v1/account/transfer",{
              to:to,
              amount:amount
            },{
              headers:{
                'Authorization':localStorage.getItem('token')
              }
            }).then((response)=>{
              alert(response.data.msg);
              navigate('/dashboard');
            })
          }} className='w-full rounded-md p-2 my-2 bg-green-500 text-white'>Initiate Transfer</button>
        </div>

      </div>

    </div>
  )
}

export default Send