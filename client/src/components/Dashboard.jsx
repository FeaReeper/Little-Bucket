import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import { userContext } from '../context/UserContext'
import Parents from '../assets/parents.jpg'





const Dashboard = () => {
  const {currentUser, setCurrentUser} = useContext(userContext)
  console.log(currentUser)


  return (
    <div>
      <Nav/>
      <div className='card mt-5'>
        <h3 style={{color: '#1499ef'}} className='card-header'>{currentUser.firstName} {currentUser.lastName}</h3>
        <div className='card-body d-flex mx-auto w-100'>
          <Link className='card-body link-white-no-decor' to={'/myLittleOnes'}>My Little Ones</Link>
          <Link className='card-body link-white-no-decor' to={'/dashboard/buckets'}>Little Bucket List</Link>
        </div>
      </div>
      <div>
        <img className='w-75 mt-5' src={Parents} alt="" />
      </div>
    </div>
  )
}

export default Dashboard