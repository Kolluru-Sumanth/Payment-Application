import React from 'react'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import Input from '../components/Input'
import Button from '../components/Button'
import LoginSwitch from '../components/LoginSwitch'
const Signup = () => {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex-col justify-center'>
      <div className='bg-white shadow-md place-self-center my-10 rounded-xl'>
        <div className='flex flex-col items-center w-80 p-4'>
        <Heading label={"Sign Up"}></Heading>
        <SubHeading text={"Enter your information to create an account"}></SubHeading>
        <Input title={"Firstname"} inputPlaceHolder={"John"}></Input>
        <Input title={"Lastname"} inputPlaceHolder={"Doe"}></Input>
        <Input title={"Username"} inputPlaceHolder={"Johndoe@example.com"}></Input>
        <Input title={"Password"}></Input>
        <Button title={"Sign Up"}></Button>
        <LoginSwitch text={"Already have an account?"} buttonText={"Signin"} path={"/signin"} ></LoginSwitch>
        </div>
    </div>
    </div>
  )
}

export default Signup