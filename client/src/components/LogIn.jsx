import { React, useState, useContext } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { userContext } from "../context/UserContext";

const LogIn = () => {
  const { setCurrentUser } = useContext(userContext)
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
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
      .post("http://localhost:8000/api/loginUser", user, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        // Set local storage to the current user that is logged in. 
        // Then in UserContext.jsx I stored the local storage as the currentUser to use across application
        localStorage.setItem("currentUser", JSON.stringify(res.data));
        setCurrentUser(res.data)
        navigate(`/dashboard`);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.data.error)
        // create an err message for validations
        setError(err.response.data.error.errors);
      });
  };

  return (
    <div>
      <Link className='mx-3 link-white-no-decor' to={'/'}>Home</Link>
      <div className="text-center w-50 mx-auto p-3 mt-4">
        <h2 className="text-dark font-weight-bold">Log In</h2>
        <div className="w-75 mx-auto">
          <form onSubmit={handleSubmit} className="font-weight-bold">
            <div className="form-group mt-3 ">
              <label htmlFor="email" className="text-dark">Email:</label>
              <input
                className="form-control"
                type="text"
                id="email"
                name="email"
                onChange={handleChange}
              />
              {/* {error.email ? <p>{error.email.message}</p> : null} */}
            </div>
            <div className="form-group mt-3 ">
              <label htmlFor="password" className="text-dark">Password:</label>
              <input
                className="form-control"
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
              />
              {/* {error.password ? <p>{error.password.message}</p> : null} */}
            </div>
            <div>
              <button className="btn btn-primary mt-3 mx-3">Login</button>
            </div>
          </form>
        </div>
      </div>
      <div style={{height:'360px'}}></div>
    </div>
  );
};

export default LogIn;
