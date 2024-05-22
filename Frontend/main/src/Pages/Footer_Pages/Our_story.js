import React from "react";
import { useNavigate } from "react-router-dom";
import "../../Stylesheet/Footer_stylesheets/Footerpages.css";
import back from "../../Assets/Images/Icons/backward-solid.svg";

function Our_story() {
  const navigate = useNavigate();
  function onback() {
    navigate(-1);
  }
  return (
    <>
      <div className="chest_main">
        <div className="heading">
          <img src={back} alt="loading" className="back" onClick={onback} />
          <h1>Our Story</h1>
        </div>
        <div className="contentview">
          <p className="pp">
            FitFlow was born out of a passion for revolutionizing the way
            individuals approach their health and fitness goals. Our team
            recognized the need for a platform that could offer personalized
            guidance to users of all fitness levels, from beginners to seasoned
            enthusiasts. With this vision in mind, FitFlow was developed to
            provide users with the tools and support they need to embark on
            their wellness journey with confidence.
          </p>
        </div>
      </div>
    </>
  );
}

export default Our_story;
