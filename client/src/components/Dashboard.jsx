import React, {useContext, useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import { userContext } from '../context/UserContext'
import axios from 'axios'
import Bucket from '../assets/BlueBucket.png'




const Dashboard = () => {
  const {currentUser, setCurrentUser} = useContext(userContext)
  const [kids, setKids] = useState([])


  useEffect(() => {
    axios
      .get("https://little-bucket-api.vercel.app/api/allKids")
      .then((res) => {
        console.log(res.data)
        setKids(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const getAge = (birthDateNotObject) => {
    const birthDate = new Date(birthDateNotObject)
    // Get the current date
    const currentDate = new Date();
    // Get the birth year
    const birthYear = birthDate.getFullYear();
    // Calculate the age by subtracting the birth year from the current year
    const age = currentDate.getFullYear() - birthYear;
    // Check if the birthday has passed this year
    const hasBirthdayPassed = currentDate.getMonth() > birthDate.getMonth() ||
                        (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() >= birthDate.getDate());
    // Return the calculated age with a message depending on the birthday
    return hasBirthdayPassed ? age : age - 1;
  }


  return (
    <div>
      <Nav/>
      <div className='card mt-2'>
        <h3 style={{color: '#1499ef'}} className='card-header'>Proud Parent: <span className='font-weight-bold display-6'>{currentUser.firstName} {currentUser.lastName}</span></h3>
        <div className='card-body d-flex justify-content-between '>
          <div className='card-body w-50'>
            <p className='card-body h4'>My Little Ones</p>
            <div className=''>
              {
                kids.map((kid) => {
                  const age = getAge(kid.kidBirthDay)
                  if (kid.userId == currentUser._id)
                    return (
                      <div key={kid._id}>
                        <p className='sub-title'>{kid.kidFirstName}</p>
                        <img src={`http://localhost:8000/images/${kid.kidImage}`} alt="" className='w-25 rounded-circle'/>
                        <p className='mt-3 sub-title'>Age: {age}</p>
                      </div>
                    )
                })
              }
            </div>
          <div className='mt-3'>
            <Link className='card-body link-white-no-decor' to={'/myLittleOnes'}>Add A Little One</Link>
          </div>
          </div>
          <div className='m-5 w-50'>
            <Link to={'/dashboard/buckets'} className='mt-3'><img src={Bucket} alt="" className='w-25' /></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard