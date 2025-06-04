import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import img from "../images/cabsy-logo.png";
import { UserDataContext } from '../context/UserContext';
import axios from 'axios';


const UserLogin = () => {

  //two way binding to save the input value
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  //to get user data after login
  const [userData, setUserData] = useState({})
  const {user, setUser} = useContext(UserDataContext)
  const navigate = useNavigate()

  

  ///function to handle form submission
  const submitHandler = async(e) => {
    //to prevent default form submission
    e.preventDefault();
    //to get the user data
    const userData = {
      email: email,
      password: password
    }

    const response =  await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData)

    if (response.status === 200) {
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token', data.token)
      navigate('/start')

    }
    //we do this because after form submission we want to clear the input fields
    setEmail('')
    setPassword('')

  }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <img className= " w-20 " src= {img} alt='Cabsy Logo'/>
  <div>
  <form onSubmit={(e) => 
    { submitHandler(e) }
  }>
    <h3 className='text-xl mb-2'>What's your email</h3>
    <input 
    required
    value={email} 
    onChange = 
      {(e) => {
        setEmail(e.target.value)
      }}
    className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base mb-7'
    type="email" 
    placeholder="email@example.com"></input>

    <h3>Enter Password</h3>
    <input 
    required 
    value={password}
    onChange = 
      {(e) => {
        setPassword(e.target.value)
      }}
    className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base mb-7'
    type="password" 
    placeholder="password">

    </input>

<button
className='bg-[#111] text-white font-semibold  rounded px-4 py-2 border w-full text-lg placeholder:text-base mb-2'
>Login</button>
</form>

<p className='text-center'>New here?<Link to = '/signup' className='text-blue-600'> Create new account</Link></p>
  </div>

  <div>
    <Link to='/captain-login' className='bg-[#10b641] flex items-center justify-center text-white font-semibold  rounded px-4 py-2 border w-full text-lg placeholder:text-base mb-7'>Sign in as Captain</Link>
  </div>
    </div>

    
  )
}

export default UserLogin