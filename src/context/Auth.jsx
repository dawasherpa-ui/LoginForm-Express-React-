import React, { useState } from 'react'
import { createContext } from 'react';
export const MyContext = createContext();
function Auth({children}) {
  const [user,setUser]=useState(false)
  return (
    <MyContext.Provider value={{user,setUser}}>
      {children}
    </MyContext.Provider>
  )
}

export default Auth
