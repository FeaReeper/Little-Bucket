import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import axios from 'axios'
import Nav from './Nav'

const DisplayOneBucket = () => {
  const {id} = useParams()
  const [bucket, setBucket] = useState({})
  const navigate = useNavigate()

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

  const handleDelete = () => {
    axios
      .delete(`http://localhost:8000/api/deleteBucket/${id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
    navigate('/dashboard/buckets')
  };


  return (
    <div>
      <div className='d-flex justify-content-around align-items-center'>
        <Link to={'/dashboard'} className='link-white-no-decor'>Dashboard</Link>
        <Link to={'/dashboard/buckets'} className='link-white-no-decor'>Back to List</Link>
        <Nav/>
      </div>
      <div className='border bg-light p-3 w-50 mx-auto'>
        <div className='mt-5 text-black font-weight-bold h4'>
          <h3 className='display-6'>Title: <span>{bucket.title}</span></h3>
          <p>Age to Show: <span>{bucket.age}</span></p>
          <p>Description: <span>{bucket.description}</span></p>
          <p>Notes: <span>{bucket.notes}</span></p>
          <p>Tag: <span>{bucket.tag}</span></p>
        </div>
        <div>
          <Link to={`/bucket/update/${id}`} className="btn btn-primary m-3">Edit</Link>
          <button className="btn btn-danger m-3" onClick={handleDelete}>Delete</button>
        </div>
      </div>
      <div style={{height: "90px"}}>

      </div>
    </div>
  )
}

export default DisplayOneBucket