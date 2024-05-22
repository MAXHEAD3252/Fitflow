import React from 'react'
import back from '../../Assets/Images/Icons/backward-solid.svg'
import {useNavigate} from 'react-router-dom'


function Tricepexercises() {
  const navigate = useNavigate()
    function onback(){navigate(-1)}
  return (
    <>

<div className="chest_main">
      <div className="heading">
      <img src={back} alt="loading" className='back' onClick={onback} />
        <h1>Tricep Exercise</h1>
      </div>
      <div className="Exerciseview">


      <div className="chestcard">
      <video src="https://media.musclewiki.com/media/uploads/videos/branded/male-Bodyweight-dips-front.mp4#t=0.1" autoPlay loop muted />
      <video src="https://media.musclewiki.com/media/uploads/videos/branded/male-Bodyweight-dips-side.mp4#t=0.1" autoPlay loop muted />
      <div className="chestcardcontainer">
        <h1>Box Dips</h1>
      </div>
      </div>

      
      <div className="chestcard">
      <video src="https://media.musclewiki.com/media/uploads/videos/branded/male-Bodyweight-incline-push-up-front.mp4#t=0.1" autoPlay loop muted />
      <video src="https://media.musclewiki.com/media/uploads/videos/branded/male-Bodyweight-incline-push-up-side.mp4#t=0.1" autoPlay loop muted />
      <div className="chestcardcontainer">
        <h1>Incline Push Ups</h1>
      </div>
      </div>

      <div className="chestcard">
      <video src="https://media.musclewiki.com/media/uploads/videos/branded/male-Bodyweight-decline-push-up-front.mp4#t=0.1" autoPlay loop muted />
      <video src="https://media.musclewiki.com/media/uploads/videos/branded/male-Bodyweight-decline-push-up-side.mp4#t=0.1" autoPlay loop muted />
      <div className="chestcardcontainer">
        <h1>Decline Push Ups</h1>
      </div>
      </div>


      <div className="chestcard">
      <video src="https://media.musclewiki.com/media/uploads/videos/branded/male-Bodyweight-diamond-push-ups-front.mp4#t=0.1" autoPlay loop muted />
      <video src="https://media.musclewiki.com/media/uploads/videos/branded/male-Bodyweight-diamond-push-ups-side.mp4#t=0.1" autoPlay loop muted />
      <div className="chestcardcontainer">
        <h1>Diamond Push Ups</h1>
      </div>
      </div>
      

      <div className="chestcard">
      <video src="https://media.musclewiki.com/media/uploads/videos/branded/male-Bodyweight-parralel-bar-dips-front.mp4#t=0.1" autoPlay loop muted />
      <video src="https://media.musclewiki.com/media/uploads/videos/branded/male-Bodyweight-parralel-bar-dips-side.mp4#t=0.1" autoPlay loop muted />
      <div className="chestcardcontainer">
        <h1>Parralel Bar Dips</h1>
      </div>
      </div>

      <div className="chestcard">
      <video src="https://media.musclewiki.com/media/uploads/videos/branded/male-Bodyweight-bodyweight-box-assisted-dips-side.mp4#t=0.1" autoPlay loop muted />
      <video src="https://media.musclewiki.com/media/uploads/videos/branded/male-Bodyweight-bodyweight-box-assisted-dips-front.mp4#t=0.1" autoPlay loop muted />
      <div className="chestcardcontainer">
        <h1>Bodyweight Box Assisted Dips</h1>
      </div>
      </div>

      </div>
      </div>
      
    </>
  )
}

export default Tricepexercises
