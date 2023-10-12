import React from 'react'
import Nav from './Nav'
import Event from '../assets/events.jpg'
import Movies from '../assets/movies.jpg'
import Travel from '../assets/travel.jpg'
import LogIn from './LogIn'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>Little Buckets</h1>
      <Nav/>
      <div>
        <LogIn/>
      </div>
      <div>
        <h3>Remember Big Plans for your Little One(s)</h3>
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
            <img className='w-75 mt-5 ' src={Travel} alt="travel picture" />
            <p>Save Destinations to Travel to With Them!</p>
          </div>
        </div>
        <p>Inspired by Nyalee Emilia</p>
      </div>
    </div>
  )
}

export default Home