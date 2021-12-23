import React, { useState } from "react";
import './button.css'
import ButtonData from "./ButtonsData";
import { Route, Switch, } from "react-router";
import { Link } from "react-router-dom";
const ButtonList = () => {
  const [color, setColor] = useState("#195D9C");
  const [color1, setColor1] = useState("#195D9C");
  const [color2, setColor2] = useState("#195D9C");
  const [color3, setColor3] = useState("#195D9C");
  const [color4, setColor4] = useState("#195D9C");
  
  const design={
    backgroundColor: `${color}`,
    transition: "ease all 500ms",
    
  }
  const design1={
    backgroundColor: `${color1}`,
    transition: "ease all 500ms",
    
  }
  const design2={
    backgroundColor: `${color2}`,
    transition: "ease all 500ms",
    
  }
  const design3={
    backgroundColor: `${color3}`,
    transition: "ease all 500ms",
    
  }
  const design4={
    backgroundColor: `${color4}`,
    transition: "ease all 500ms",
    
  }

  return (
    <div>
        {ButtonData.map(el=>
        <Link to={`/${el.name}`} >

      <div className='list-container'>
        <div className='parent' >

          <img style={ { width:'100px', height:'100px'}} src={el.icon} alt="" />
          <span style={{}}>{el.name}</span>

        </div>
      </div>
        </Link>
        
        )}

    
    </div>
  );
};

export default ButtonList;
// onMouseOver={(Color) => setColor((color==="#195D9C")?"green":"#195D9C")}
