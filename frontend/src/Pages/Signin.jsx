import React from 'react'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import Input from '../components/Input'
import Button from '../components/Button'
import LoginSwitch from '../components/LoginSwitch'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Signin = () => {
  const [username,SetUsername]=useState("");
  const [password,SetPassword]=useState("");
  const navigate=useNavigate();
  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex-col justify-center'>
      <div className='bg-white shadow-md place-self-center my-10 rounded-xl'>
        <div className='flex flex-col items-center w-80 p-4'>
        <Heading label={"Sign In"}></Heading>
        <SubHeading text={"Enter your credentials to access your account"}></SubHeading>
        <Input onchange={(e)=>{
          SetUsername(e.target.value)
        }} title={"Username"} inputPlaceHolder={"Johndoe@example.com"}></Input>
        <Input onchange={e=>SetPassword(e.target.value)} title={"Password"}></Input>
        <Button onClick={()=>{

          axios.post("http://localhost:3000/api/v1/user/signin",{
            username,
            password
          }).then((response)=>{
            console.log(response)
            localStorage.setItem("token","Bearer "+ response.data.token)
            navigate("/dashboard")
          }).catch((err)=>{
            console.log(err)})
        }} title={"Sign In"}></Button>
        <LoginSwitch text={"Don't have an account?"} buttonText={"Signup"} path={"/signup"} ></LoginSwitch>
        </div>
    </div>
    </div>

  )
}

export default Signin