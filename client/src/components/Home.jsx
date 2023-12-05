import React, { useState } from 'react'
import Nav from './Nav'
import Event from '../assets/events.jpg'
import Movies from '../assets/movies.jpg'
import Travel from '../assets/travel.jpg'
import Parents from '../assets/parents.jpg'
import Slogan from '../assets/Slogan.png'
import LogIn from './LogIn'
import { Link } from 'react-router-dom'
import SimpleImageSlider from 'react-simple-image-slider'



const Home = () => {
const slides = [Event, Movies, Travel, Parents]
const [imageNum, setImageNum] = useState(0)
const [subtext, setSubtext] = useState([
  'Save events to take them to',
  'Remember films to show them',
  'Plan travel destinations',
  'Teach them life lessons'
])

// Displays Link to Register as well as Imports Log-In Component
  return (
    <div>
      <Link className='mx-5 link-white-no-decor' to={'/register'}>Register</Link>
      <Link className='mx-5 link-white-no-decor' to={'/logIn'}>Log In</Link>
      <div>
        {/* <img src={Slogan} alt="slogan" style={{width: '600px'}} className='mt-5'/> */}
        <div className='d-flex align-items-center'>
          {
            <div className='mx-auto mt-4 border p-4 bg-white'>
              <SimpleImageSlider
                width={800}
                height={550}
                images={slides}
                showNavs={true}
                autoPlay={true}
                onStartSlide={(index, length) => {
                  setImageNum(index - 1)
                }}
                autoPlayDelay={3}
              />
              <div>
                <p className='mt-1 text-dark display-5'>{subtext[imageNum]}</p>
              </div>
            </div>
          }
        </div>
        {/* <div className='d-flex justify-content-center '>
          <div className='mt-5 border' style={{width:'400px'}}>
            <LogIn/>
            <Link className='mx-3 link-white-no-decor' to={'/register'}>Click to Register</Link>
          </div>
        </div> */}
        <p className='mt-5 text-dark'>Inspired by Nyalee Emilia</p>
      </div>
    </div>
  )
}

export default Home