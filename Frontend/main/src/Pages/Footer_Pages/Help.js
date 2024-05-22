import React from 'react'
import { useNavigate } from "react-router-dom"
import back from "../../Assets/Images/Icons/backward-solid.svg";


function Help() {
  const navigate = useNavigate();
  function onback() {
    navigate(-1);}
  return (
    <>
      <div className="chest_main">
        <div className="heading">
          <img src={back} alt="loading" className="back" onClick={onback} />
          <h1>FAQ</h1>
        </div>
        <div className="contentview">
        <div className="Questions">
        <h1>Q: What is FitFlow? </h1>
          <p>
            FitFlow is a comprehensive platform that offers
            personalized health and fitness recommendations tailored to each
            user's needs and goals. Whether you're just starting your fitness
            journey or looking to take your workouts to the next level, FitFlow
            is designed to guide you every step of the way.
          </p>
          </div>
          <div className="Questions">
          <h1>Q: How does FitFlow work? </h1>
          <p>
            FitFlow utilizes advanced algorithms to
            analyze user-provided information such as age, gender, weight,
            height, fitness goals, dietary preferences, and existing health
            conditions. Based on this information, FitFlow generates customized
            workout plans, meal suggestions, and lifestyle recommendations to
            help users achieve their wellness goals.
          </p>
          </div>
          <div className="Questions">
          <h1> Q: What sets FitFlow apart from other health and fitness platforms?</h1>
          <p>
            FitFlow stands out for its AI-powered capabilities that enable it to
            provide highly personalized recommendations. By harnessing the
            latest advancements in technology, FitFlow delivers tailored
            guidance to optimize users' well-being, whether they're seeking
            workout plans, nutritional advice, or mindfulness practices.
          </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Help
