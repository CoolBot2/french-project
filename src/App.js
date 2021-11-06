import Carosl from './websiteContainer/home/Carosl'
import React from "react";
import { render } from "react-dom";
import "./App.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState } from 'react';
import Home from "./websiteContainer/home/Home";
import ButtonList from './websiteContainer/home/ButtonList';
import PicList from './websiteContainer/home/PicList';
import Map from './websiteContainer/home/Map';
import Foote from './websiteContainer/home/Footer/Foote';
function App() {

  return (
    <div className="App">
        <Home/>
        <PicList/>
        <Map/>
        <Foote/>
        
    </div>
  );
}


export default App;
