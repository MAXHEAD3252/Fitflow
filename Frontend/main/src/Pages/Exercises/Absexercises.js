import React from 'react'
import back from '../../Assets/Images/Icons/backward-solid.svg'
import {useNavigate} from 'react-router-dom'

function Absexercises() {
  
  const navigate = useNavigate()
  function onback(){navigate(-1)}

  return (
    <>
      
      <div className="chest_main">
      <div className="heading">
      <img src={back} alt="loading" className='back'  onClick={onback}/>
        <h1>Abs Exercise</h1>
        </div>

      <div className="Exerciseview">
      
      <div className="chestcard">
      <video src="https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-crunch-front.mp4#t=0.1" type="video/mp4" autoPlay loop muted />
      <video src="https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-crunch-side.mp4#t=0.1" type="video/mp4" autoPlay loop muted />
      <div className="chestcardcontainer">
        <h1>Crunches</h1>
      </div>
      </div>

      <div className="chestcard">
      <video src="https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-leg-raises-front.mp4#t=0.1" type="video/mp4" autoPlay loop muted />
      <video src="https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-leg-raises-side.mp4#t=0.1" type="video/mp4" autoPlay loop muted />
      <div className="chestcardcontainer">
        <h1>Laying Leg Raises</h1>
      </div>
      </div>

      <div className="chestcard">
      <video src="https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-long-lever-plank-front.mp4#t=0.1" type="video/mp4" autoPlay loop muted />
      <video src="https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-long-lever-plank-side.mp4#t=0.1" type="video/mp4" autoPlay loop muted />
      <div className="chestcardcontainer">
        <h1>Long Lever Plank</h1>
      </div>
      </div>

      <div className="chestcard">
      <video src="https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-hanging-knee-raises-front.mp4#t=0.1" type="video/mp4" autoPlay loop muted />
      <video src="https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-hanging-knee-raises-side.mp4#t=0.1" type="video/mp4" autoPlay loop muted />
      <div className="chestcardcontainer">
        <h1>Hanging Knee Raises</h1>
      </div>
      </div>

      

      <div className="chestcard">
      <video src="https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-forearm-plank-front.mp4#t=0.1" type="video/mp4" autoPlay loop muted />
      <video src="https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-forearm-plank-side.mp4#t=0.1" type="video/mp4" autoPlay loop muted />
      <div className="chestcardcontainer">
        <h1>Forearm Plank</h1>
      </div>
      </div>

      <div className="chestcard">
      <video src="https://media.musclewiki.com/media/uploads/videos/branded/male-Bodyweight-bicycle-crunch-side.mp4#t=0.1" type="video/mp4" autoPlay loop muted />
      <video src="https://media.musclewiki.com/media/uploads/videos/branded/male-Bodyweight-bicycle-crunch-front.mp4#t=0.1" type="video/mp4" autoPlay loop muted />
      <div className="chestcardcontainer">
        <h1>Bicycle Crunches</h1>
      </div>
      </div>

      

      </div>
      </div>

    </>
  )
}

export default Absexercises
