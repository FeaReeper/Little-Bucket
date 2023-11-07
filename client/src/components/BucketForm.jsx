import axios from "axios";
import React, { useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { userContext } from '../context/UserContext'



const BucketForm = (props) => {
  const {currentUser} = useContext(userContext)
  const { setLoaded } = props
  


  const [bucket, setBucket] = useState({
    title: '',
    age: '',
    description: '',
    notes: '',
    tag: '',
    userId: currentUser._id
  })


  const handleChange = (e) => {
    setBucket({
      ...bucket,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post('http://localhost:8000/api/newBucket', bucket)
      .then((res) => {
        console.log(res)
        setLoaded(false)
      })
      .catch((err) => {
        console.log(err)
        
      })
    setBucket({
      title: '',
      age: '',
      description: '',
      notes: '',
      tag: '',
      userId: currentUser._id
      })
  }




  return (
    <div>
      <h1 className="sub-title">Add to Bucket List</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input
              className="form-control"
              type="text"
              id="title"
              name="title"
              value={bucket.title}
              onChange={handleChange}
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="age">Age to Show:</label>
            <input
              className="form-control"
              type="number"
              id="age"
              name="age"
              value={bucket.age}
              onChange={handleChange}
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="description">Description:</label>
            <textarea className="form-control" name="description" id="description" onChange={handleChange}></textarea>
          </div>
          <div className="form-group mt-3">
            <label htmlFor="notes">Notes:</label>
            <textarea className="form-control" name="notes" id="notes" onChange={handleChange}></textarea>
          </div>
          <div className="form-group mt-3">
            <label htmlFor="tag">Tag:</label>
            <input
              className="form-control"
              type="string"
              id="tag"
              name="tag"
              value={bucket.tag}
              onChange={handleChange}
            />
          </div>
          <button className="btn btn-primary mt-3">Create</button>
        </form>
      </div>
    </div>
  );
};

export default BucketForm;
