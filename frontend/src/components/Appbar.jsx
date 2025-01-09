import React, { useState } from 'react'

const Appbar = () => {
    const [user,setUser]=useState({
      firstname:"Kolluru",
      lastname:"Sumanth"
    })
  return (
    <div className='flex justify-between items-center p-2 shadow'>
        <div className='text-lime-500 hover:text-lg hover:font-semibold ml-2 pt-1'>PAY-SA</div>
        <div className='flex items-center'>
            <p className='pr-2 pt-1'>Hello,{user.firstname}</p>
            <div className="rounded-full h-8 w-8 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-lg">
                    {user.firstname[0]}{user.lastname[0]}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Appbar