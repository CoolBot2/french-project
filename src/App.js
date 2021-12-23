
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
import { BrowserRouter, Route, Link, Routes } from "react-router-dom"; //import the package
import Culture from './websiteContainer/buttons/Culture';
import Commerce from './websiteContainer/buttons/Commerce';
import MainHome from "./websiteContainer/home/MainHome";
import Agriculture from "./websiteContainer/buttons/Agriculture";
function App() {

  return (
    <div className="App">

        <BrowserRouter>
        <Routes>

          <Route path="/" element={<MainHome />} />
         < Route path='/Agriculture' element={<Agriculture/>} />
         <Route path = '/Commerce' element ={<Commerce/>}/>

        </Routes>
        </BrowserRouter>
      
    </div>
  );
}


export default App;
