import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'


const Nav = () => {

  const logoutUser = () => {
    axios
      .post('http://localhost:8000/api/logout', {}, {withCredentials: true})
  }

  return (
    <div className='text-center w-50 mx-auto p-3 d-flex justify-content-around '>
            <Link to={'/'} onClick={logoutUser}>Log-Out</Link>
    </div>
  )
}

export default Nav