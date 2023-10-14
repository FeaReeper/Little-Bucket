import React, { useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import MovieForm from './MovieForm'

const DisplayList = (props) => {
  const {userId, setUserId, movies, setMovies} = props

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
  }, [])

  console.log(userId)


  return (
    <div className='text-center w-50 mx-auto p-3 '>
      <div className='m-5'>
        <MovieForm userId={userId} setUserId={setUserId}/>
      </div>
      <div>
        <div>
          <h2>All Movies and TV Shows</h2>
        </div>
        {
          movies.map((movie) => {
            return(
              <div key={movie._id} className='m-5'>
                <div>
                  <h3>Title: {movie.title}</h3>
                  <p>Film Type: {movie.filmType}</p>
                  <p>Genre: {movie.genre}</p>
                  <p>Age to Show: {movie.age}</p>
                  <p>Notes: {movie.notes}</p>
                </div>
                <Link to={`/movie/${movie._id}`}>Edit</Link>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default DisplayList