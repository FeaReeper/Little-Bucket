import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Register from './components/Register'
import LogIn from './components/LogIn'
import Dashboard from './components/Dashboard'
import DisplayList from './components/DisplayList'

function App() {
  const [movies, setMovies] = useState([])

  return (
    <div className='text-center w-50 mx-auto p-3 '>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/logIn' element={<LogIn/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/dashboard/movies' element={<DisplayList movies={movies} setMovies={setMovies}/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
