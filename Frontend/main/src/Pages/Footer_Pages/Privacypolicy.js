import React from "react";
import { useNavigate } from "react-router-dom";
import "../../Stylesheet/Footer_stylesheets/Footerpages.css";
import back from "../../Assets/Images/Icons/backward-solid.svg";

function Privacypolicy() {
  const navigate = useNavigate();
  function onback() {
    navigate(-1);
  }
  return (
    <>
      <div className="chest_main">
        <div className="heading">
          <img src={back} alt="loading" className="back" onClick={onback} />
          <h1>Privacy Policy</h1>
        </div>
        <div className="contentview">
          <p className="pp">
            FitFlow is committed to protecting your privacy. Our privacy policy
            outlines how we collect, use, and disclose your personal
            information. By using FitFlow, you consent to the collection, use,
            and disclosure of your personal information as outlined in
            our privacy policy.
          </p>
        </div>
      </div>
    </>
  );
}

export default Privacypolicy;
