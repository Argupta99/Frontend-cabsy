import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import img from "../images/cabsy-logo.png";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import {UserDataContext} from '../context/UserContext'

{/*axios is used to connect data to the server*/} 

const UserSignup = () => {

const [email, setEmail] = useState('') 
const [password, setPassword] = useState('') 
const [firstName, setFirstName] = useState('')
const [lastName, setLastName] = useState('')

const [userData, setUserData] = useState({})

const navigate = useNavigate()
const { user, setUser } = useContext(UserDataContext)

  //two way binding to save the input value
  const submitHandler = async (e) => {
    //to prevent loading of the page
e.preventDefault();
const newUser = {
  fullname: {
    firstname: firstName,
    lastname: lastName
  },

  email: email,
  password: password
}

const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)

if (response.status === 201) 
{
  const data = response.data
setUser(data.user)
localStorage.setItem('token', data.token)
navigate('/start')
}


setEmail('')
setFirstName('')
setLastName('')
setPassword('')
  }

  
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <img className= " w-20 mb-1" src= {img} alt='Cabsy Logo'/>
  <div>
  <form onSubmit={(e) => 
    { submitHandler(e) }
  }>

    <h3 className='text-lg font-medium mb-2'>Enter your name</h3>
    <div className='flex gap-4 mb-5'>
    <input 
    required
    className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-sm '
    type="text" 
    placeholder="First name"
    value = {firstName}
      onChange = 
      {(e) => {
        setFirstName(e.target.value)
      }}
      />

    {/* second input field*/}
    <input 
    required
    className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-sm'
    type="text" 
    placeholder="Last name"
    value = {lastName}
      onChange = 
      {(e) => {
        setLastName(e.target.value)
      }}
      />
      
    

    </div>


    <h3 className='text-xl mb-2 font-medium'>What's your email</h3>
    <input 
    required
    value={email} 
    onChange = 
      {(e) => {
        setEmail(e.target.value)
      }}
    className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-sm mb-7'
    type="email" 
    placeholder="email@example.com"

    />

    <h3 className='text-xl mb-2 font-medium'>Enter password</h3>
    <input 
    required 
    value={password}
    onChange = 
    {(e) => {
      setPassword(e.target.value)
    }}
    className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-sm mb-7'
    type="password" 
    placeholder="password" />

   

<button
className='bg-[#111] text-white font-semibold  rounded px-4 py-2 border w-full text-lg placeholder:text-base mb-2'
>Create Account</button>
</form>

<p className='text-center'>Already have an account?<Link to = '/login' className='text-blue-600'>Login here</Link></p>
  </div>

  <div>
  <p className='text-[10px] mt-6 leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
  Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
  </div>
    </div>

    
  )
}

export default UserSignup