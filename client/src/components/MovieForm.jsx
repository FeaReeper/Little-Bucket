import axios from "axios";
import React, { useState } from "react";

const MovieForm = (props) => {
  const {userId, setUserId} = props
console.log(userId)
  const [movie, setMovie] = useState({
    title: '',
    filmType: '',
    genre: '',
    age: '',
    notes: ''
  })
  const [user, setUser] = useState({
    _id: userId,
    movies: []
  })


  const handleChange = (e) => {
    setMovie({
      ...movie,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    axios
      .post('http://localhost:8000/api/newMovie', movie)
      .then((res) => {
        console.log(res)
        setUser(res.data.movie._id)
      .catch((err) => {
        console.log(err)
      })
        axios
          .patch('http://localhost:8000/api/addMovieId', user)
          .then((res) => {
            console.log(res)
          })
          .catch((err) => {
            console.log(err)
          })
      })
  }




  return (
    <div>
      <h1>Add a Movie or TV Show</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input
              className="form-control"
              type="text"
              id="title"
              name="title"
              value={movie.title}
              onChange={handleChange}
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="filmType">Movie or TV Show:</label>
            <select className="form-control" name="filmType" id="filmType" onChange={handleChange} value={movie.filmType}>
              <option value="movie">Movie</option>
              <option value="tvShow">TV Show</option>
            </select>
          </div>
          <div className="form-group mt-3">
            <label htmlFor="genre">Genre:</label>
            <select className="form-control" name="genre" id="genre" onChange={handleChange} value={movie.genre}>
              <option value="family">Family</option>
              <option value="comedy">Comedy</option>
              <option value="action">Action</option>
              <option value="scary">Scary</option>
              <option value="mystery">Mystery</option>
              <option value="sciFi">Sci-Fi</option>
            </select>
          </div>
          <div className="form-group mt-3">
            <label htmlFor="age">Age to Show:</label>
            <input
              className="form-control"
              type="number"
              id="age"
              name="age"
              value={movie.age}
              onChange={handleChange}
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="notes">Notes:</label>
            <textarea onChange={handleChange} name="notes" id="notes" cols="40" rows="4" value={movie.notes}>{movie.notes}</textarea>
          </div>
          <button className="btn btn-primary mt-3">Create</button>
        </form>
      </div>
    </div>
  );
};

export default MovieForm;
