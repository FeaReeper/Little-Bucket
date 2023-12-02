import React, { useContext, useState } from "react";
import { userContext } from "../context/UserContext";
import axios from "axios";

const Kids = () => {
  const { currentUser } = useContext(userContext);
  const [kid, setKid] = useState({
    kidFirstName: "",
    gender: "",
    kidBirthDay: "",
    kidImage: null,
    userId: currentUser._id,
  });

  const handleChange = (e) => {
    setKid({
      ...kid,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('kidImage', kid.kidImage)

    axios
    .post('http://localhost:8000/api/newKid', kid)
    .then((res) => {
      console.log(res)
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
            <input type="file" className="w-25" name="kidImage" id='kidImage' onChange={handleChange}/>
          </div>
          <button className="btn btn-primary mt-4">Add</button>
        </form>
      </div>
    </div>
  );
};

export default Kids;
