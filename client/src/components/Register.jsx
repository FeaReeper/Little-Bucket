import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";

const Register = () => {
  const [confirmError, setConfirmError] = useState('')
  const {userId} = useParams()
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
        console.log(res.data);

        navigate(`/dashboard`);
      })
      .catch((err) => {
        console.log(err);
        // create an err message for validations. This grabs the error message in the model
        // setError(err.response.data.error.errors)
      });
  };

  return (
    <div className="text-center w-50 mx-auto p-3 ">
      <Link to={"/"}>Home</Link>
      <h2 className="mt-5">Register</h2>
      <div className="mt-3">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              className="form-control"
              type="text"
              id="firstName"
              name="firstName"
              value={user.firstName}
              onChange={handleChange}
            />
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
          </div>
          <button className="btn btn-primary mt-3">Create</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
