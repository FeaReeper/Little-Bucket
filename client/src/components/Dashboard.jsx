import React from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'

const Dashboard = (props) => {
  const {userId, setUserId} = props
  console.log(userId)


  return (
    <div>
      <Nav/>
      <h3>My Lists</h3>
      <Link to={'/dashboard/movies'}>Movies and TV Shows</Link>
    </div>
  )
}

export default Dashboard