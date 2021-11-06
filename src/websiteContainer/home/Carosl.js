import React from "react";
import { Carousel } from "react-responsive-carousel";

function Carosl() {
  return (
    <Carousel className="caro" autoPlay>
      <div
        style={{ backgroundImage: 'url("../../assets//Home/Untitled-1.png")' }}
      >
        <img alt="" src="medina.jpg" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img alt="" src="sfax.jpg" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img alt="" src="kasbah.jpg" />
        <p className="legend">Legend 3</p>
      </div>
      <div>
        <img alt="" src="logo512.png" />
        <p className="legend">Legend 4</p>
      </div>
      <div>
        <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-5.jpg" />
        <p className="legend">Legend 5</p>
      </div>
      <div>
        <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-6.jpg" />
        <p className="legend">Legend 6</p>
      </div>
      <div>
        <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-7.jpg" />
        <p className="legend">Legend 7</p>
      </div>
      <div>
        <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-8.jpg" />
        <p className="legend">Legend 8</p>
      </div>
      <div>
        <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-9.jpg" />
        <p className="legend">Legend 9</p>
      </div>
      <div>
        <img
          alt=""
          src="http://lorempixel.com/output/cats-q-c-640-480-10.jpg"
        />
        <p className="legend">Legend 10</p>
      </div>
      <div>
        <img
          alt=""
          src="http://lorempixel.com/output/cats-q-c-640-480-11.jpg"
        />
        <p className="legend">Legend 11</p>
      </div>
      <div>
        <img
          alt=""
          src="http://lorempixel.com/output/cats-q-c-640-480-12.jpg"
        />
        <p className="legend">Legend 12</p>
      </div>
      <div>
        <img
          alt=""
          src="http://lorempixel.com/output/cats-q-c-640-480-13.jpg"
        />
        <p className="legend">Legend 13</p>
      </div>
      <div>
        <img
          alt=""
          src="http://lorempixel.com/output/cats-q-c-640-480-14.jpg"
        />
        <p className="legend">Legend 14</p>
      </div>
    </Carousel>
  );
}

export default Carosl;
