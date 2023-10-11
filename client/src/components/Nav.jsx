import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='text-center w-50 mx-auto p-3 d-flex justify-content-around '>
      <Link to={'/register'}>Register</Link>
      <Link to={'/login'}>Log-In</Link>
    </div>
  )
}

export default Nav