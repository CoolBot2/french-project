import React, { useState } from "react";
import Typical from "react-typical";
import Button from "react-bootstrap/Button";
import "./Profile.css";
const Profile = () => {
  const [count, setCount] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const onClick = () => setShowResults(!showResults);
  const handleCount = () => setCount(count + 1);

  const handleClick = {
    display: "block",
  };
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="#">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-google-plus-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>
          <div>
            
            <div className="profile-details-role">
              <span className="primary-text">
                {" "}
                <h1>
                  {" "}
                  <Typical
                    loop={Infinity}
                    steps={[
                      "deuxième ville en Tunisie 🏢",
                      1000,
                      "producteur d'huile d'olive 🕊️",
                      1000,
                      "possède le plus grand port de pêche en Tunisie 🐟",
                      1000,
                      "pole pour le traitement des phosphates🏭",
                      1000,
                      "a la deuxième plus grande ile en tunisie 🏝️",
                      1000,
                    ]}
                  />
                </h1>
                <span className="profile-role-tagline">
                  SFAX est considérée comme le cœur battant de l'économie
                  tunisienne. Les activités principales économiques de Sfax sont
                  les industries agro-alimentaire , l'agriculture , la pêche et le commerce.{" "}
                </span>
              </span>
            </div>
          </div>
          <div className="profile-options">
          
            <a href="duh.html">
                <Button className="btn1"  variant="secondary">
              {" "}
               voir plus
            </Button>
            </a>
            

            <Button style={{backgroundColor:'transparent' ,border:'transparent'}} disabled className="btn2" variant="danger">
             
            </Button>
            <a
              href="#some wikipedia article that i will turn into pdf"
              download="pdf"
            ></a>
          </div>{" "}
        </div>
      </div>
      <div className="profile-picture">
        <div className="profile-picture-background"></div>
      </div>
    </div>
  );
};

export default Profile;
