import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import img from "../images/cabsy-logo.png";
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CaptainSignup = () => {

  const navigate = useNavigate()

const [email, setEmail] = useState('') 
const [password, setPassword] = useState('') 
const [firstName, setFirstName] = useState('')
const [lastName, setLastName] = useState('')
const [ vehicleColor, setVehicleColor ] = useState('')
const [ vehiclePlate, setVehiclePlate ] = useState('')
const [ vehicleCapacity, setVehicleCapacity ] = useState('')
const [ vehicleType, setVehicleType ] = useState('')


const {captain, setCaptain} = React.useContext(CaptainDataContext)

  //two way binding to save the input value
  const submitHandler = async (e) => {
    //to prevent loading of the page
e.preventDefault();
const captainData =  {
  fullname: {
    firstname: firstName,
    lastname: lastName
  },

  email: email,
  password: password,
  vehicle: {
    color: vehicleColor,
    plate: vehiclePlate,
    capacity: vehicleCapacity,
    vehicleType: vehicleType
  }
}

const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)

if (response.status === 201) {
  const data = response.data
  setCaptain(data.captain)
  localStorage.setItem('token', data.token)
  navigate('/captain-home')
}


setEmail('')
setFirstName('')
setLastName('')
setPassword('')
setVehicleColor('')
    setVehiclePlate('')
    setVehicleCapacity('')
    setVehicleType('')
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
      }} />
      
  

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
      }} />
      
    

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
    placeholder="email@example.com" />

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

<h3 className='text-lg font-medium mb-2'>Vehicle Information</h3>
          <div className='flex gap-4 mb-7'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="text"
              placeholder='Vehicle Color'
              value={vehicleColor}
              onChange={(e) => {
                setVehicleColor(e.target.value)
              }}
            />
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="text"
              placeholder='Vehicle Plate'
              value={vehiclePlate}
              onChange={(e) => {
                setVehiclePlate(e.target.value)
              }}
            />
          </div>
          <div className='flex gap-4 mb-7'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="number"
              placeholder='Vehicle Capacity'
              value={vehicleCapacity}
              onChange={(e) => {
                setVehicleCapacity(e.target.value)
              }}
            />
            <select
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              value={vehicleType}
              onChange={(e) => {
                setVehicleType(e.target.value)
              }}
            >
              <option value="" disabled>Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="bike">Bike</option>
            </select>
          </div>

    

    

<button
className='bg-[#111] text-white font-semibold  rounded px-4 py-2 border w-full text-lg placeholder:text-base mb-2'
>Create Captain Account</button>
</form>

<p className='text-center'>Already have an account?<Link to = '/captain-login' className='text-blue-600'>Login here</Link></p>
  </div>

  <div>
  <p className='text-[10px] mt-6 leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
  Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
  </div>
    </div>

    
  )
}

export default CaptainSignup