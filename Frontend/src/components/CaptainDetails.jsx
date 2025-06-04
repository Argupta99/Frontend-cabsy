import React, { useContext } from 'react'
import {CaptainDataContext} from '../context/CaptainContext'

const CaptainDetails = () => {

  const {captain} = useContext(CaptainDataContext)
  return (
    <div>
        <div className='flex items-center justify-between'>
        
                  <div className='flex items-center justify-start gap-3'>
                <img className='h-10 w-10 rounded-full object-cover' src="https://i.pinimg.com/736x/ef/df/fe/efdffe579aeae9cae1bbedea7e474ba0.jpg" alt="" />
                <h4 className='text-lg font-medium'>{captain.fullname.firstname + " " + captain.fullname.lastname}</h4>
                   </div>
                   
        
                    <div>
                      <h4 className='text-xl font-semibold'>Rs. 300</h4>
                      <p className='text-sm text-gray-600'>Earned</p>
                    </div>
                    </div>
                 
        
                  <div className='flex justify-center gap-5 items-start p-3 rounded-xl bg-gray-100 mt-2'>
                    <div className='text-center'>
                      <i className='text-2xl mb-2 font-thin ri-timer-2-line'></i>
                      <h5 className='text-lg font-medium'>10.2</h5>
                      <p className='text-sm text-gray-600'>Hours Online</p>
        
                    </div>
                    <div className='text-center'>
                      <i className='text-2xl mb-2 font-thin ri-speed-up-line'></i>
                      <h5 className='text-lg font-medium'>10.2</h5>
                      <p className='text-sm text-gray-600'>Hours Online</p>
        
                    </div>
                    <div className='text-center'>
                      <i className='text-2xl mb-2 font-thin ri-booklet-line'></i>
                      <h5 className='text-lg font-medium'>10.2</h5>
                      <p className='text-sm text-gray-600'>Hours Online</p>
        
                    </div>
              </div>
              </div>

  )
}

export default CaptainDetails