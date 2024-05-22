import React from 'react'
import back from '../../Assets/Images/Icons/backward-solid.svg'
import {useNavigate} from 'react-router-dom'


function Bicepexercises() {
  
const navigate = useNavigate()
function onback(){navigate(-1)}
  return (
    <>
    
    <div className="chest_main">
      <div className="heading">
      <img src={back} alt="loading" className='back' onClick={onback} />
        <h1>Bicep Exercise</h1>
      </div>
      <div className="Exerciseview">


      <div className="chestcard">
      <video src="https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-chinup-front.mp4#t=0.1" autoPlay loop muted />
      <video src="https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-chinup-side.mp4#t=0.1" autoPlay loop muted />
      <div className="chestcardcontainer">
        <h1>Chin Ups</h1>
      </div>
      </div>

      <div className="chestcard">
      <video src="https://media.musclewiki.com/media/uploads/videos/branded/male-Bodyweight-bodyweight-close-grip-inverted-curl-front.mp4#t=0.1" autoPlay loop muted />
      <video src="https://media.musclewiki.com/media/uploads/videos/branded/male-Bodyweight-bodyweight-close-grip-inverted-curl-side.mp4#t=0.1" autoPlay loop muted />
      <div className="chestcardcontainer">
        <h1>BodyWeight Close Grip Inverted Curl</h1>
      </div>
      </div>

      <div className="chestcard">
      <video src="https://media.musclewiki.com/media/uploads/videos/branded/male-Bodyweight-bodyweight-inverted-curl-front.mp4#t=0.1" autoPlay loop muted />
      <video src="https://media.musclewiki.com/media/uploads/videos/branded/male-Bodyweight-bodyweight-inverted-curl-side.mp4#t=0.1" autoPlay loop muted />
      <div className="chestcardcontainer">
        <h1>BodyWeight Inverted Curl</h1>
      </div>
      </div>

      <div className="chestcard">
      <video src="https://media.musclewiki.com/media/uploads/videos/branded/male-Bodyweight-bodyweight-concentration-curl-side.mp4#t=0.1" autoPlay loop muted />
      <video src="https://media.musclewiki.com/media/uploads/videos/branded/male-Bodyweight-bodyweight-concentration-curl-front.mp4#t=0.1" autoPlay loop muted />
      <div className="chestcardcontainer">
        <h1>BodyWeight Concentration Curl</h1>
      </div>
      </div>


      </div>
      </div>


    </>
  )
}

export default Bicepexercises
