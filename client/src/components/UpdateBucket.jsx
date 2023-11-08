import React, {useEffect, useState} from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import axios from 'axios'
import Nav from './Nav'


const UpdateBucket = () => {
  const [bucket, setBucket] = useState({
    title: '',
    age: '',
    description: '',
    notes: '',
    tag: ''
  })
  const { id } = useParams()
  const navigate = useNavigate()
  const [error, setError] = useState({})


  useEffect(() => {
    axios
    .get(`http://localhost:8000/api/oneBucket/${id}`)
    .then((res) => {
      console.log(res.data)
      setBucket(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])

  const handleChange = (e) => {
    setBucket({
      ...bucket,
      [e.target.name]: e.target.value
    })
  }

const handleSubmit = (e) => {
  e.preventDefault();

  axios
    .patch(`http://localhost:8000/api/updateBucket/${id}`, bucket)
    .then((res) => {
      console.log(res.data);
      navigate(`/bucket/${id}`);
    })
    .catch((err) => {
      console.log(err);
      setError(err.response.data.error.errors)
    });

}

  return (
    <div>
      <div className='d-flex justify-content-around align-items-center'>
        <Link to={'/dashboard'} className='link-white-no-decor'>Dashboard</Link>
        <Link to={'/dashboard/buckets'} className='link-white-no-decor'>Back to List</Link>
        <Nav/>
      </div>
      <h1 className='sub-title'>Update Your Bucket Item</h1>
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
            {
              error.title ? <p>{error.title.message}</p> : null
            }
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
            {
              error.age ? <p>{error.age.message}</p> : null
            }
          </div>
          <div className="form-group mt-3">
            <label htmlFor="description">Description:</label>
            <textarea className="form-control" name="description" id="description" onChange={handleChange} defaultValue={bucket.description}></textarea>
          </div>
          <div className="form-group mt-3">
            <label htmlFor="notes">Notes:</label>
            <textarea className="form-control" name="notes" id="notes" onChange={handleChange} defaultValue={bucket.notes}></textarea>
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
            {
              error.tag ? <p>{error.tag.message}</p> : null
            }
          </div>
          <button className="btn btn-primary mt-3">Update</button>
        </form>
      </div>
    </div>
  )
}

export default UpdateBucket