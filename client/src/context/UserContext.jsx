import {createContext, useState} from 'react'

export const userContext = createContext()

export const UserContextProvider = (props) => {
  const [currentUser, setCurrentUser] = useState({
    _id: '',
    firstName: '',
    lastName: '',
    email: '',
  });

  return (
    <userContext.Provider value={{ currentUser, setCurrentUser}}>
      {props.children}
    </userContext.Provider>
  )
}