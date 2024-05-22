import React from "react";
import { useNavigate } from "react-router-dom";
import "../../Stylesheet/Footer_stylesheets/Footerpages.css";
import back from "../../Assets/Images/Icons/backward-solid.svg";

function Termscondition() {
  const navigate = useNavigate();
  function onback() {
    navigate(-1);
  }
  return (
    <>
      <div className="chest_main">
        <div className="heading">
          <img src={back} alt="loading" className="back" onClick={onback} />
          <h1>Terms & Conditions</h1>
        </div>
        <div className="contentview">
          <p className="pp">
            By using the FitFlow platform, you agree to the following terms and
            conditions: <br /><br/>
            Age Requirement: You must be at least 18 years old to use the
            platform. Information Accuracy: The information provided on FitFlow
            should be accurate and up-to-date. Educational Use: The information
            provided on FitFlow is for educational and informational purposes
            only and should not be considered medical advice. Assumption of
            Risk: FitFlow is not responsible for any injuries or health issues
            that may result from following the recommendations provided on the
            platform. Physical Condition: Users are responsible for ensuring
            that they are in good physical condition before engaging in any
            physical activity recommended by FitFlow.
          </p>
        </div>
      </div>
    </>
  );
}

export default Termscondition;
