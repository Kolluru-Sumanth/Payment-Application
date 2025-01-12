import React, { useEffect, useState } from 'react'
import Button from './Button'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
const Users = () => {
    const navigate=useNavigate();
    const [users,setUsers]=useState([])
    const [filter,setFilter]=useState('');
    useEffect(()=>{
        axios.get("http://localhost:3000/api/v1/user/bulk?filter="+filter,{
            headers
            :{
                'Authorization':localStorage.getItem("token")
            }
        }).then((response)=>{
            console.log(response.data)
            setUsers(response.data)
        })
    }
    ,[filter]);

    return (
    <div className='w-full px-6'>
        <div className='font-bold text-2xl'>Users</div>
        <input onChange={(e)=>{
            setFilter(e.target.value);
        }} className='w-full p-2 my-3 rounded-sm border' type="text" placeholder='search users...' />
        {users.map((user)=>(
            <div key={user._id} className='flex justify-between hover:border-2 border-slate-400'>
                <div className='flex items-center'>
                    <div className='bg-slate-200 h-9 w-9 rounded-full flex flex-col justify-center items-center'>
                    <div>{user.firstname[0]}{user.lastname[0]}</div>
                    </div>
                    <div className='p-1.5 font-bold'>
                        {user.firstname} {user.lastname}
                    </div>
                </div>
                <div className='pr-3'>
                <Button onClick={()=>{
                    console.log(user);
                    navigate('/send?to='+user.userId);                    
                }} title={'Send Money'}></Button>
                </div>
                

            </div>
        ))}
    </div>
  )

  
}

export default Users