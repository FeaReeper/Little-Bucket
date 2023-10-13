import axios from 'axios'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Nav = () => {
  const navigate = useNavigate()

  const logoutUser = () => {
    axios
      .post('http://localhost:8000/api/logout', {}, {withCredentials: true})
      .then((res) => {
        navigate("/")
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className='text-center w-50 mx-auto p-3 d-flex justify-content-around '>
            <Link to={'/'} onClick={logoutUser}>Log-Out</Link>
    </div>
  )
}

export default Nav