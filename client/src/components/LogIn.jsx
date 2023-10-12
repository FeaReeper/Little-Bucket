import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate, Link } from 'react-router-dom'

const LogIn = () => {
  const {userId} = useParams()
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/allUsers')
      .then((res) => {

      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()


  }


  return (
    <div className='text-center w-50 mx-auto p-3 '>
      <h2>Log-In</h2>
      <div>
        <form>
        <div className="form-group mt-3 ">
            <label htmlFor="email">Email:</label>
            <input className="form-control" type="text" id='email' onChange={handleChange} />
          </div>
          <div className="form-group mt-3 ">
            <label htmlFor="password">Password:</label>
            <input className="form-control" type="password" id='password' onChange={handleChange} />
          </div>
          <div>
            <button className="btn btn-primary mt-3 mx-3">Login</button>
            <Link className='mx-3' to={'/register'}>Register</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LogIn