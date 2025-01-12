import React, { useState } from 'react'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import Input from '../components/Input'
import Button from '../components/Button'
import LoginSwitch from '../components/LoginSwitch'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Signup = () => {
  const navigate=useNavigate();
  const [firstname,SetFirstname]=useState("");
  const [lastname,SetLastname]=useState("");
  const [username,SetUsername]=useState("");
  const [password,SetPassword]=useState("");
  
  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex-col justify-center'>
      <div>
      {firstname}
      {lastname}
      {username}
      {password}
      </div>
      <div className='bg-white shadow-md place-self-center my-10 rounded-xl'>
        <div className='flex flex-col items-center w-80 p-4'>
        <Heading label={"Sign Up"}></Heading>
        <SubHeading text={"Enter your information to create an account"}></SubHeading>
        <Input onchange={e=>{
          console.log(e)
          SetFirstname(e.target.value)
        }} title={"Firstname"} inputPlaceHolder={"John"}></Input>
        <Input onchange={e=>{
          console.log(e)
          SetLastname(e.target.value)
        }} title={"Lastname"} inputPlaceHolder={"Doe"}></Input>
        <Input onchange={e=>{
          console.log(e)
          SetUsername(e.target.value)
        }} title={"Username"} inputPlaceHolder={"Johndoe@example.com"}></Input>
        <Input onchange={e=>{
          console.log(e)
          SetPassword(e.target.value)
        }} title={"Password"}></Input>
        <Button onClick={async()=>{
          const response= await axios.post("http://localhost:3000/api/v1/user/signup",{
            firstname,
            lastname,
            username,password
          });
          console.log(response);
          localStorage.setItem("token","Bearer "+ response.data.token)
          navigate("/dashboard")
        }} title={"Sign Up"}></Button>
        <LoginSwitch text={"Already have an account?"} buttonText={"Signin"} path={"/signin"} ></LoginSwitch>
        </div>
    </div>
    </div>
  )
}

export default Signup