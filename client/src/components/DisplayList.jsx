import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import MovieForm from "./MovieForm";
import { userContext } from "../context/UserContext";
import Nav from "./Nav";

const DisplayList = (props) => {
  const { movies, setMovies } = props;
  const [loaded, setLoaded] = useState(false);
  const { currentUser, setCurrentUser } = useContext(userContext);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/allMovies")
      .then((res) => {
        console.log(res.data);
        setMovies(res.data);
        setLoaded(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [loaded]);

  return (
    <div className="container text-center w-100 mx-auto p-3 ">
      <div className="d-flex justify-content-between ">
        <Link style={{color: 'white'}} className="d-flex align-items-center" to={"/dashboard"}>Home</Link>
        <Nav />
      </div>
      <div className="d-flex">
        <div className="m-5 col">
          <MovieForm loaded={loaded} setLoaded={setLoaded} />
        </div>
        <div className="col m-5">
          <div>
            <h2 style={{ color: "#1499ef" }}>All Movies and TV Shows</h2>
          </div>
          {movies.map((movie) => {
            if (movie.userId == currentUser._id)
              return (
                <div key={movie._id} className="m-5">
                  <div>
                    <h3>Title: {movie.title}</h3>
                  </div>
                  <Link to={`/movie/${movie._id}`}>View Details</Link>
                </div>
              );
          })}
        </div>
      </div>
    </div>
  );
};

export default DisplayList;
