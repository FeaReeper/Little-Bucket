import { useState } from "react";
import {  Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import DisplayList from "./components/DisplayList";
import Logo from "./assets/Logo.png";
import DisplayOneMovie from "./components/DisplayOneMovie";
import UpdateMovie from "./components/UpdateMovie";


function App() {
  const [movies, setMovies] = useState([]);

  return (
    <div className="text-center w-50 mx-auto p-3 ">
        <img src={Logo} alt="Little Buckets Logo" className="mt-5 mb-3 " />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route
              path="/dashboard/movies"
              element={<DisplayList movies={movies} setMovies={setMovies} />}
            />
            <Route path="movie/:id" element={ <DisplayOneMovie/> }/>
            <Route path="movie/update/:id" element={<UpdateMovie/>}/>
          </Routes>
    </div>
  );
}

export default App;
