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
          <div className='card mt-5'>
            <h3 style={{color: '#1499ef'}} className='card-header'>{currentUser.firstName} {currentUser.lastName}</h3>
            <Link style={{color: 'white', textDecoration: 'none', marginTop: '10px'}} to={'/myLittleOnes'}>My Little Buckets</Link>
            <Link style={{textDecoration: 'none'}} className='card-body' to={'/dashboard/buckets'}>Little Bucket List</Link>
          </div>
    </div>
  )
}

export default Dashboard