import React, { useContext, useState } from "react";
import { userContext } from "../context/UserContext";
import axios from "axios";
import {useNavigate} from 'react-router-dom'

const Kids = () => {
  const { currentUser } = useContext(userContext);
  const navigate = useNavigate()
  const [kid, setKid] = useState({
    kidFirstName: "",
    gender: "",
    kidBirthDay: "",
    kidImage: "",
    userId: currentUser._id,
  });
  console.log(kid)

  const handleChange = (e) => {
    setKid({
      ...kid,
      [e.target.name]: e.target.value
    });
  };

  const handlePhoto = (e) => {
    setKid({...kid, kidImage: e.target.files[0]})
    console.log(kid.kidImage)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('kidImage', kid.kidImage)
    formData.append('kidFirstName', kid.kidFirstName)
    formData.append('kidBirthDay', kid.kidBirthDay)
    formData.append('gender', kid.gender)
    formData.append('userId', kid.userId)

    axios
    .post('http://localhost:8000/api/newKid', formData)
    .then((res) => {
      console.log(res)
      navigate('/dashboard')
    })
    .catch((err) => {
      console.log(err)
    })
  }

  return (
    <div>
      <h1 style={{ color: "#1499ef" }}>Add a Little One</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="kidFirstName">Name:</label>
            <input
              className="form-control"
              type="text"
              id="kidFirstName"
              name="kidFirstName"
              value={kid.kidFirstName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="gender">Boy or Girl:</label>
            <select
              className="form-control"
              name="gender"
              id="gender"
              onChange={handleChange}
            >
              <option value=""></option>
              <option value="Boy">Boy</option>
              <option value="Girl">Girl</option>
            </select>
          </div>
          <div className="form-group mt-4 d-flex justify-content-around  gap-5 ">
            <label  htmlFor="kidBirthDay">Birth Date:</label>
            <input
              type="date"
              name="kidBirthDay"
              id="kidBirthDay"
              onChange={handleChange}
            />
          </div>
          <div className="form-group mt-4 d-flex justify-content-around gap-5 ">
            <label style={{marginLeft: '30px'}} htmlFor="kidImage">Add Photo:</label>
            <input type="file" accept='.png, .jpg, .jpeg' className="w-25" name="kidImage" id='kidImage' onChange={handlePhoto}/>
          </div>
          <button className="btn btn-primary mt-4">Add</button>
        </form>
      </div>
    </div>
  );
};

export default Kids;
