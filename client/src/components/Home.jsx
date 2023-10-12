import React from 'react'
import Nav from './Nav'
import Event from '../assets/events.jpg'
import Movies from '../assets/movies.jpg'
import Travel from '../assets/travel.jpg'
import Logo from '../assets/Logo.png'
import Slogan from '../assets/Slogan.png'
import LogIn from './LogIn'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <img src={Logo} alt="Little Buckets Logo" className='mt-5 mb-3 ' />
      <Nav/>
      <div>
        <LogIn/>
      </div>
      <div>
        <img src={Slogan} alt="slogan" style={{width: '600px'}}/>
        <div>
          <div>
            <img className='w-75 mt-5 ' src={Event} alt="events picture" />
            <p>Save Events to Take Them to!</p>
          </div>
          <div>
            <img className='w-75 mt-5' src={Movies} alt="movies picture" />
            <p>Save Movies and TV Shows to Show Them!</p>
          </div>
          <div>
            <img style={{height: '500px'}} className='w-75 mt-5 ' src={Travel} alt="travel picture" />
            <p>Save Destinations to Travel to With Them!</p>
          </div>
        </div>
        <p>Inspired by Nyalee Emilia</p>
      </div>
    </div>
  )
}

export default Home