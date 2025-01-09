import React, { useState } from 'react'
import Button from './Button'
const Users = () => {
    const [users,setUsers]=useState([{
        firstname:"Kolluru",
        lastname:"Sumanth",
        _id:1
    },{
        firstname:"Farman",
        lastname:"Ali",
        _id:1
    }])

    const SingleUser=({user})=>{
        return(
            <div key={user._id}>
                {user._id}
            </div>
        )
      }

    return (
    <div className='w-full px-6'>
        <div className='font-bold text-2xl'>Users</div>
        <input className='w-full p-2 my-3 rounded-sm border' type="text" placeholder='search users...' />
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
                <Button title={'Send Money'}></Button>
                </div>
                

            </div>
        ))}
    </div>
  )

  
}

export default Users