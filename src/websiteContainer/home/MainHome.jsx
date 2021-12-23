import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import Foote from './Footer/Foote'
import Home from './Home'
import Map from './Map'
import PicList from './PicList'

const MainHome = () => {
  return (
    <div>
      <Home/>
          <PicList/>
          <Map/>
          <Foote/>
    </div>
  )
}

export default MainHome
