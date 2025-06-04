import React, {Children, useContext, useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext'
import axios from 'axios'

const UserProtectWrapper = ({children}
) => {
//this jsx file is using for to move logged in user on start page
//this high order function will accept a children and then will check whether user is available or not
//if user exists then it will return that children and if does not, it will navigate back to login
const token = localStorage.getItem('token')
  const navigate = useNavigate()
  const { user, setUser } = useContext(UserDataContext)
    const [ isLoading, setIsLoading ] = useState(true)

  useEffect(() => {
    if (!token) {
        navigate('/login')
    }

    axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
      headers: {
          Authorization: `Bearer ${token}`
      }
  }).then(response => {
      if (response.status === 200) {
          setUser(response.data)
          setIsLoading(false)
      }
  })
      .catch(err => {
          console.log(err)
          localStorage.removeItem('token')
          navigate('/login')
      })
}, [ token ])

if (isLoading) {
  return (
      <div>Loading...</div>
  )
}

  return (
    <>
        {children}
    </>
)
}

//by doing this ....after logout i can't go to start page, i have to login then i can proceed to start page 

export default UserProtectWrapper