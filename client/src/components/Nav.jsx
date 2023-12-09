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
    <div>
      <div className=' w-100 mx-auto p-3 d-flex justify-content-end '>
              <Link className='link-white-no-decor' to={'/'} onClick={logoutUser}>Log Out</Link>
      </div>
    </div>
  )
}

export default Nav