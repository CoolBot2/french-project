import React,{useState} from "react";
import "./map.css";
import Button from "react-bootstrap/Button";
const Map = () => {
  const [color, setColor] = useState("#195D9C");
  const design={
    backgroundColor: 'white',
    transition: "ease all 500ms",
    color:'#195D9C'
  }
  return (
    <div>
      <div className="map">
        <div className="icon">
          <img
          width='70px'
            src="https://www.marseille.fr/sites/default/files/iconsglobalcarte.png"
            alt=""
          />
        </div>
        <div className='top-paragraph'>
          <h1>Vous cherchez un équipement dans Sfax ?</h1>
        </div>
        <div className='subpar'>
          <h3>
            Trouver une école, une piscine, une crèche, un centre de loisirs...
          </h3>
        </div>
        <div className='btn0'>
          <a className='batoon' href="https://www.google.com/maps/place/Sfax/@34.7613744,10.6630584,12z/data=!3m1!4b1!4m5!3m4!1s0x13002cda1486c695:0x22dfe0a62c50ce6f!8m2!3d34.739822!4d10.7600196">
            <Button class='btnnn' style={design} size='lg'    > Explorer la ville.</Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Map;
