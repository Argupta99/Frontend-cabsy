import React, { createContext } from 'react'
import { useState } from 'react'

{/*we use context to wrap our whole application*/}

//creating a context for user data
export const UserDataContext = createContext()
const UserContext = ({children}) => {

   const [user, setUser] = useState({
    email: '',
    fullname: {
        firstname: '',
        lastname: ''
    }
   })
  return (
    
    <div>

        {/*we wrap our whole application with the context provider*/}
        {/*to send the data everywhere we use .Provider to provide the data*/}
        <UserDataContext.Provider value={{user, setUser}}>
            {children}
        </UserDataContext.Provider>
    </div>
  )
}

export default UserContext