import React, { useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import MovieForm from './MovieForm'





const DisplayList = (props) => {
  const { movies, setMovies} = props



  useEffect(() => {
    axios
      .get("http://localhost:8000/api/allMovies")
      .then((res) => {
        console.log(res.data)
        setMovies(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  })



  return (
    <div className='container text-center w-100 mx-auto p-3 '>
            <Link to={'/dashboard'}>Home</Link>
      <div className='d-flex'>
        <div className='m-5 col'>
          <MovieForm/>
        </div>
        <div className='col m-5'>
          <div>
            <h2 style={{color: '#1499ef'}}>All Movies and TV Shows</h2>
          </div>
          {
            movies.map((movie) => {
              return(
                <div key={movie._id} className='m-5'>
                  <div>
                    <h3>Title: {movie.title}</h3>
                  </div>
                  <Link to={`/movie/${movie._id}`}>View Details</Link>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default DisplayList