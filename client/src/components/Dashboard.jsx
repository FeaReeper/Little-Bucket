import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import { userContext } from '../context/UserContext'





const Dashboard = () => {
  const {currentUser, setCurrentUser} = useContext(userContext)
  console.log(currentUser)


  return (
    <div>
      <h2>{currentUser.firstName} {currentUser.lastName}'s Dashboard</h2>
      <Nav/>
      <h3>My Lists</h3>
      <Link to={'/dashboard/movies'}>Movies and TV Shows</Link>
    </div>
  )
}

export default Dashboard