import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      <h3>My Lists</h3>
      <Link to={'/dashboard/movies'}>Movies and TV Shows</Link>
    </div>
  )
}

export default Dashboard