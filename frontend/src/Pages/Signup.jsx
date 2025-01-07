import React from 'react'

const Signup = () => {
  return (
    <div className='shadow-md place-self-center my-10 rounded-2xl'>
        <h1 className='font-bold text-center text-4xl p-3'>Sign Up</h1>
        <p className='text-gray-500 p-4'>Enter your information to create an account</p>
        <p className='font-bold p-2'>First name</p>
        <input className='border-2 m-2 rounded-md p-2' type="text" placeholder='John' />
        <p>Last name</p>
        <input type="text" placeholder='Doe' />
        <p>Email</p>
        <input type="text" placeholder='JohnDoe@example.com' />
        <p>Password</p>
        <input type="password" />
    </div>
  )
}

export default Signup