import React, { useState } from 'react'
import Heading from '../components/Heading'
const Send = () => {
  const [reciversName, setReciverName] = useState({
    firstname: "Farman",
    lastname: "Ali"
  })
  return (
    <div className='fixed inset-0 bg-black bg-opacity-10 flex items-center flex-col pt-36'>
      <div className='bg-white p-6  shadow-md w-96 place-content-center rounded-lg'>
        <div className='font-bold m-4 text-center text-3xl '>
          Send Money
        </div>
        <div className='flex pt-2 items-center'>
          <div className='bg-green-500 text-white w-11 h-11 rounded-full flex items-center justify-center' >
            <div>
              {reciversName.firstname[0]}{reciversName.lastname[0]}
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
          <input className='p-2 my-2 w-full border-2 box-border border-slate-200 rounded-md' type="number" placeholder='Enter Amount' />
          <button className='w-full rounded-md p-2 my-2 bg-green-500 text-white'>Initiate Transfer</button>
        </div>

      </div>

    </div>
  )
}

export default Send