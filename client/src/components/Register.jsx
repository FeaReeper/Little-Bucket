import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { userContext } from "../context/UserContext";


const Register = () => {
  const [error, setError] = useState({})
  const { currentUser, setCurrentUser } = useContext(userContext)
  const navigate = useNavigate();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    
    axios
      .post("http://localhost:8000/api/newUser", user, {withCredentials: true})
      .then((res) => {
        // console.log(res.data);
        localStorage.setItem('currentUser', JSON.stringify(res.data))
        setCurrentUser(res.data)
        navigate(`/dashboard`);
      })
      .catch((err) => {
        console.log(err);
        // create an err message for validations
        setError(err.response.data.error.errors)
      });
  };

  return (
    <div className="text-center w-50 mx-auto p-3 ">
      <Link className='mx-3 link-white-no-decor' to={"/"}>Home</Link>
      <div className="border p-3 bg-light mt-5">
        <h2 className="text-dark font-weight-bold">Register</h2>
        <div className="mt-3">
          <form onSubmit={handleSubmit} className="text-dark font-weight-bold">
            <div className="form-group">
              <label htmlFor="firstName" >First Name:</label>
              <input
                className="form-control"
                type="text"
                id="firstName"
                name="firstName"
                value={user.firstName}
                onChange={handleChange}
              />
              {
                error.firstName ? <p>{error.firstName.message}</p> : null
              }
            </div>
            <div className="form-group mt-3">
              <label htmlFor="lastName">Last Name:</label>
              <input
                className="form-control"
                type="text"
                id="lastName"
                name="lastName"
                value={user.lastName}
                onChange={handleChange}
              />
              {
                error.lastName ? <p>{error.lastName.message}</p> : null
              }
            </div>
            <div className="form-group mt-3">
              <label htmlFor="email">Email:</label>
              <input
                className="form-control"
                type="text"
                id="email"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
              {
                error.email ? <p>{error.email.message}</p> : null
              }
            </div>
            <div className="form-group mt-3">
              <label htmlFor="password">Password:</label>
              <input
                className="form-control"
                type="password"
                id="password"
                name="password"
                value={user.password}
                onChange={handleChange}
              />
              {
                error.password ? <p>{error.password.message}</p> : null
              }
            </div>
            <div className="form-group mt-3">
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                className="form-control"
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={user.confirmPassword}
                onChange={handleChange}
              />
              {
                error.confirmPassword ? <p>{error.confirmPassword.message}</p> : null
              }
            </div>
            <button className="btn btn-primary mt-3">Register</button>
          </form>
        </div>
      </div>
      <div style={{height:'220px'}}></div>
    </div>
  );
};

export default Register;
