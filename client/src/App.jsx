import { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import DisplayList from "./components/DisplayList";
import Logo from "./assets/Logo.png";

export const UserIdContext = createContext();

function App() {
  const [movies, setMovies] = useState([]);
  const [userId, setUserId] = useState("");

  return (
    <div className="text-center w-50 mx-auto p-3 ">
      <BrowserRouter>
        <img src={Logo} alt="Little Buckets Logo" className="mt-5 mb-3 " />
        <UserIdContext.Provider value={[userId, setUserId]}>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route
              path="/dashboard/movies"
              element={<DisplayList movies={movies} setMovies={setMovies} />}
            />
          </Routes>
        </UserIdContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
