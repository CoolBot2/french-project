import React from 'react'
import Profile from './Profile'
import Foote from './Footer/Foote'
import './Home.css'

const Home = () => {
  return (
    <div className="home-container">
      <Profile/>
      <Foote/>
    </div>
  )
}

export default Home
