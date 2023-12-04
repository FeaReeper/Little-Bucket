import React, {useContext, useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import { userContext } from '../context/UserContext'
import axios from 'axios'



const Dashboard = () => {
  const {currentUser, setCurrentUser} = useContext(userContext)
  const [kids, setKids] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/allKids")
      .then((res) => {
        console.log(res.data)
        setKids(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])


  return (
    <div>
      <Nav/>
      <div className='card mt-5'>
        <h3 style={{color: '#1499ef'}} className='card-header'>{currentUser.firstName} {currentUser.lastName}</h3>
        <div className='card-body d-flex'>
          {/* <Link className='card-body link-white-no-decor' to={'/myLittleOnes'}>Add A Little One</Link> */}
          <div className='card-body'>
            <p className='card-body'>My Little Ones</p>
            {
              kids.map((kid) => {
                if (kid.userId == currentUser._id)
                  return (
                    <div key={kid._id}>
                      <p className='sub-title'>{kid.kidFirstName}</p>
                    </div>
                  )
              })
            }
          </div>
          <div className='card-body d-flex '>
            <Link className='card-body link-white-no-decor' to={'/dashboard/buckets'}>Little Bucket List</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard