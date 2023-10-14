import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Register from './components/Register'
import Dashboard from './components/Dashboard'
import DisplayList from './components/DisplayList'
import Logo from './assets/Logo.png'

// export const Context = React.createContext()


function App() {
  const [movies, setMovies] = useState([])
  const [userId, setUserId] = useState('')

  return (
    <div className='text-center w-50 mx-auto p-3 '>
    <BrowserRouter>
    <img src={Logo} alt="Little Buckets Logo" className='mt-5 mb-3 ' />
      <Routes>
        {/* <Context.Provider value={[userId, setUserId]}> */}
          <Route index element={<Home userId={userId} setUserId={setUserId}/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/dashboard' element={<Dashboard userId={userId} setUserId={setUserId}/>}/>
          <Route path='/dashboard/movies' element={<DisplayList userId={userId} setUserId={setUserId} movies={movies} setMovies={setMovies}/>}/>
        {/* </Context.Provider> */}
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
