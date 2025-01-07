import React from 'react'

const Appbar = () => {
  return (
    <div className='flex justify-between p-2 shadow'>
        <div className='ml-2 pt-1'>PAYTM</div>
        <div className='flex'>
            <p className='pr-2 pt-1'>Hello</p>
            <div className="rounded-full h-7 w-7 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-lg">
                    U
                </div>
            </div>
        </div>
    </div>
  )
}

export default Appbar