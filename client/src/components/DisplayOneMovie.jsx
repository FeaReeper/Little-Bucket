import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import axios from 'axios'

const DisplayOneMovie = () => {
  const {id} = useParams()
  const [movie, setMovie] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/oneMovie/${id}`)
      .then((res) => {
        console.log(res.data)
        setMovie(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const handleDelete = () => {
    axios
      .delete(`http://localhost:8000/api/deleteMovie/${id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
    navigate('/dashboard/movies')
  };


  return (
    <div>
      <Link to={'/dashboard'}>Home</Link>
      <div>
        <h3>Title: {movie.title}</h3>
        <p>Film Type: {movie.filmType}</p>
        <p>Genre: {movie.genre}</p>
        <p>Age to Show: {movie.age}</p>
        <p>Notes: {movie.notes}</p>
      </div>
      <div>
        <Link to={`/movie/update/${id}`} className="btn btn-primary m-3">Edit</Link>
        <button className="btn btn-danger m-3" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  )
}

export default DisplayOneMovie