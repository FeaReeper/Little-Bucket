import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import DisplayMovieList from "./components/DisplayMovieList";
import Logo from "./assets/Logo.png";
import DisplayOneMovie from "./components/DisplayOneMovie";
import UpdateMovie from "./components/UpdateMovie";
import Kids from "./components/Kids";
import DisplayEventList from "./components/DisplayEventList";
import DisplayTravelList from "./components/DisplayTravelList";
import DisplayOneEvent from "./components/DisplayOneEvent";
import DisplayOneTravel from "./components/DisplayOneTravel";
import UpdateEvent from "./components/UpdateEvent";
import UpdateTravel from "./components/UpdateTravel";

function App() {
  return (
    <div className="text-center w-50 mx-auto p-3 ">
      <img src={Logo} alt="Little Buckets Logo" className="mt-5 mb-3 " />
      <Routes>
        {/* Register and Log-In Routes */}
        <Route index element={<Home />} />
        <Route path="/register" element={<Register />} />
        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Movies List and Routes */}
        <Route path="/dashboard/movies" element={<DisplayMovieList />} />
        <Route path="/movie/:id" element={<DisplayOneMovie />} />
        <Route path="/movie/update/:id" element={<UpdateMovie />} />
        {/* Events List and Routes */}
        <Route path="/dashboard/events" element={<DisplayEventList/>}/>
        <Route path="/event/:id" element={<DisplayOneEvent/>}/>
        <Route path="/event/update/:id" element={<UpdateEvent/>}/>
        {/* Travel List and Routes */}
        <Route path="/dashboard/travel" element={<DisplayTravelList/>}/>
        <Route path="/travel/:id" element={<DisplayOneTravel/>}/>
        <Route path="/travel/update/:id" element={<UpdateTravel/>}/>
        {/* Kids Routes */}
        <Route path="/myLittleOnes" element={<Kids />} />
      </Routes>
    </div>
  );
}

export default App;
