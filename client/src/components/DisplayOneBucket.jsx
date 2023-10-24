import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import axios from 'axios'

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
      <Link to={'/dashboard'} style={{textDecoration: 'none', color: 'white'}}>Dashboard</Link>
      <div className='mt-5'>
        <h3>Title: {bucket.title}</h3>
        <p>Age to Show: {bucket.age}</p>
        <p>Description: {bucket.description}</p>
        <p>Notes: {bucket.notes}</p>
        <p>Tag: {bucket.tag}</p>
      </div>
      <div>
        <Link to={`/bucket/update/${id}`} className="btn btn-primary m-3">Edit</Link>
        <button className="btn btn-danger m-3" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  )
}

export default DisplayOneBucket