import React from "react";
import { useNavigate } from "react-router-dom";
import "../../Stylesheet/Footer_stylesheets/Footerpages.css";
import back from "../../Assets/Images/Icons/backward-solid.svg";

function Our_team() {
  const navigate = useNavigate();
  function onback() {
    navigate(-1);
  }
  return (
    <>
      <div className="chest_main">
        <div className="heading">
          <img src={back} alt="loading" className="back" onClick={onback} />
          <h1>Our Team</h1>
        </div>
        <div className="contentview">
          <p className="pp">
            FitFlow's team is comprised of dedicated professionals with
            expertise in artificial intelligence, nutrition, exercise science,
            and user experience. Led by our CEO and Founder, our team works
            tirelessly to ensure that FitFlow delivers the best possible
            experience for our users. Meet the minds behind FitFlow:
          </p>
          <p className="pp">
            CEO and Founder: [Name] <br/>
            Chief Technology Officer: [Name] <br/>
            Head of Nutrition: [Name] <br/>
            Head of Fitness: [Name] <br/>
            Head of User Experience: [Name] <br/>
          </p>
        </div>
      </div>
    </>
  );
}

export default Our_team;
