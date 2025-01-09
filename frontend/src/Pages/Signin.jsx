import React from 'react'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import Input from '../components/Input'
import Button from '../components/Button'
import LoginSwitch from '../components/LoginSwitch'

const Signin = () => {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex-col justify-center'>
      <div className='bg-white shadow-md place-self-center my-10 rounded-xl'>
        <div className='flex flex-col items-center w-80 p-4'>
        <Heading label={"Sign In"}></Heading>
        <SubHeading text={"Enter your credentials to access your account"}></SubHeading>
        <Input title={"Username"} inputPlaceHolder={"Johndoe@example.com"}></Input>
        <Input title={"Password"}></Input>
        <Button title={"Sign Up"}></Button>
        <LoginSwitch text={"Don't have an account?"} buttonText={"Signup"} path={"/signup"} ></LoginSwitch>
        </div>
    </div>
    </div>

  )
}

export default Signin