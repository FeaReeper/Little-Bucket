import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import { userContext } from '../context/UserContext'





const Dashboard = () => {
  const {currentUser, setCurrentUser} = useContext(userContext)
  console.log(currentUser)


  return (
    <div>
      <Nav/>
      <div className='d-flex justify-content-between mt-5'>
        <div className='col-5'>
          <h2 className='d-flex'>{currentUser.firstName} {currentUser.lastName}</h2>
          <div className='d-flex justify-content-start'>
            <Link style={{color: 'white', textDecoration: 'none', marginTop: '10px'}} to={'/myLittleOnes'}>My Little Ones</Link>
          </div>
        </div>
        <div className='col-5'>
          <div className='card'>
            <h3 style={{color: '#1499ef'}} className='card-header'>My Lists</h3>
            <Link style={{textDecoration: 'none'}} className='card-body' to={'/dashboard/movies'}>Movies and TV Shows</Link>
            <Link style={{textDecoration: 'none'}} className='card-body' to={'/dashboard/events'}>Events</Link>
            <Link style={{textDecoration: 'none'}} className='card-body' to={'/dashboard/travelDestinations'}>Travel Destinations</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard