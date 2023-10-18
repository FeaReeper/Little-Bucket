import React, {useState} from 'react'


const UpdateMovie = () => {
  const [movie, setMovie] = useState({})

  const handleChange = (e) => {
    setMovie({
      ...movie,
      [e.target.name]: e.target.value
    })
  }

const handleSubmit = (e) => {

}

  return (
    <div>
      <h1 style={{color: '#1499ef'}}>Add a Movie or TV Show</h1>
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
            <select className="form-control" name="filmType" id="filmType" onChange={handleChange}>
              <option value=""></option>
              <option value="Movie">Movie</option>
              <option value="TV Show">TV Show</option>
            </select>
          </div>
          <div className="form-group mt-3">
            <label htmlFor="genre">Genre:</label>
            <select className="form-control" name="genre" id="genre" onChange={handleChange}>
              <option value=""></option>
              <option value="Family">Family</option>
              <option value="Comedy">Comedy</option>
              <option value="Action">Action</option>
              <option value="Scary">Scary</option>
              <option value="Mystery">Mystery</option>
              <option value="SciFi">Sci-Fi</option>
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
          <div className="form-group mt-4">
            <label htmlFor="notes">Notes:</label>
            <textarea onChange={handleChange} name="notes" id="notes" cols="60" rows="4" value={movie.notes}>{movie.notes}</textarea>
          </div>
          <button className="btn btn-primary mt-3">Create</button>
        </form>
      </div>
    </div>
  )
}

export default UpdateMovie