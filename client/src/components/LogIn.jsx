import { React, useContext, useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import { UserIdContext } from '../App'

const LogIn = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useContext(UserIdContext)
  const [user, setUser] = useState({
    email: "",
    password: ""
  });
  
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    axios
      .post('http://localhost:8000/api/loginUser', user, {withCredentials: true})
      .then((res) => {
        console.log(res.data);
        setUserId(res.data._id)
        console.log(userId)
        navigate(`/dashboard`);
      })
      .catch((err) => {
        console.log(err);
        // create an err message for validations. This grabs the error message in the model
        // setError(err.response.data.error.errors)
      });
      
    
    }
    
  return (
    <div className='text-center w-50 mx-auto p-3 '>
      <h2>Log-In</h2>
      <div>
        <form onSubmit={handleSubmit}>
        <div className="form-group mt-3 ">
            <label htmlFor="email">Email:</label>
            <input className="form-control" type="text" id='email' name='email' onChange={handleChange} />
          </div>
          <div className="form-group mt-3 ">
            <label htmlFor="password">Password:</label>
            <input className="form-control" type="password" id='password' name='password' onChange={handleChange} />
          </div>
          <div>
            <button className="btn btn-primary mt-3 mx-3">Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LogIn
