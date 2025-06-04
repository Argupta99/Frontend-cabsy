import React from 'react'
import img from "../images/cabsy-logo.png";
import { Link } from 'react-router-dom';
import bg1 from "../images/bg-home.jpg";


const Home = () => {
  return (
    <div>
        <div
  className="h-screen pt-5 w-full justify-between flex flex-col"
  style={{
    backgroundImage: `url(${bg1})`,
    backgroundSize: 'contain', // Ensures the entire image fits within the container
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat', // Prevents tiling
  }}
>

          <img className= " w-20 ml-8" src= {img} alt='Cabsy Logo'/>
        
          <div className="bg-white py-4 px-4 pb-6">
            <h2 className='text-3xl font-bold'>Get Started with Cabsy</h2>
            {/*link tag is not a block element, it is an inline element */}
            <Link to = '/login' className=' flex justify-center items-center w-full bg-black text-white py-3 rounded-lg mt-4'>Continue</Link>
          </div>
        </div>
    </div>
  )
}

export default Home