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

  // useEffect(() => {
  //   axios
  //     .get('http://localhost:8000/api/allUsers')
  //     .then((res) => {

  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }, [])
  
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    axios
      .post('http://localhost:8000/api/login', user, {withCredentials: true})
      .then((res) => {
        console.log(res.data);
        setId(res.data._id)
        navigate(`/dashboard/${id}`);
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
            <input className="form-control" type="text" id='email' onChange={handleChange} />
          </div>
          <div className="form-group mt-3 ">
            <label htmlFor="password">Password:</label>
            <input className="form-control" type="password" id='password' onChange={handleChange} />
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