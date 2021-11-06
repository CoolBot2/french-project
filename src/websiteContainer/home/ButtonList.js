import React, { useState } from "react";
import './button.css'
const ButtonList = () => {
  const [color, setColor] = useState("#195D9C");
  const design={
    backgroundColor: `${color}`,
    transition: "ease all 500ms",
    
  }
  return (
    <div>
      <div className='list-container'>
        <div className='parent'>

      <ul style={{listStyle:'none',display:'flex',alignItems: 'center',
  alignContent:' center'}}>
       
      <li>    <button 
        style={design}  
        
        className="rounded-circle"
      >
        <img width='60px' height='61px' src="https://cdn-icons.flaticon.com/png/128/2311/premium/2311603.png?token=exp=1636145640~hmac=2e2b3cd02eedaa595b2142f86ce73f8b" alt="" />
      </button><a href="#">legend</a></li>
      <li><button style={design} className="rounded-circle"  > <img width='60px' height='61px' src="https://cdn-icons.flaticon.com/png/128/3639/premium/3639103.png?token=exp=1636145640~hmac=696e201db8f28a345d02b4603b36619f" sizes='50px' alt="" /> </button> <a href="#">legend</a></li>
      <li><button style={design}  className="rounded-circle">  <img src="https://cdn-icons.flaticon.com/png/128/2311/premium/2311603.png?token=exp=1636145640~hmac=2e2b3cd02eedaa595b2142f86ce73f8b" width='60px' height='61px' alt="" /></button><a href="#">legend</a></li>
      <li><button style={design}  className="rounded-circle">  <img src="https://cdn-icons.flaticon.com/png/128/2311/premium/2311603.png?token=exp=1636145640~hmac=2e2b3cd02eedaa595b2142f86ce73f8b" width='60px' height='61px' alt="" /></button><a href="#">legend</a></li>
      <li><button style={design}  className="rounded-circle">  <img src="https://cdn-icons.flaticon.com/png/128/2311/premium/2311603.png?token=exp=1636145640~hmac=2e2b3cd02eedaa595b2142f86ce73f8b" width='60px' height='61px' alt="" /></button><a href="#">legend</a></li>
   
      <li></li>
      </ul>
      
    
        </div>
      </div>
    </div>
  );
};

export default ButtonList;
// onMouseOver={(Color) => setColor((color==="#195D9C")?"green":"#195D9C")}
