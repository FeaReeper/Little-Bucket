import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import DisplayBucketList from "./components/DisplayBucketList";
import Logo from "./assets/Logo.png";
import DisplayOneBucket from "./components/DisplayOneBucket";
import UpdateBucket from "./components/UpdateBucket";
import Kids from "./components/Kids";

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
        {/* Buckets List and Routes */}
        <Route path="/dashboard/buckets" element={<DisplayBucketList />} />
        <Route path="/bucket/:id" element={<DisplayOneBucket />} />
        <Route path="/bucket/update/:id" element={<UpdateBucket />} />
        {/* Kids Routes */}
        <Route path="/myLittleOnes" element={<Kids />} />
      </Routes>
    </div>
  );
}

export default App;
