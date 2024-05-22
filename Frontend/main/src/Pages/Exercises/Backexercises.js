import React from 'react'
import back from '../../Assets/Images/Icons/backward-solid.svg'
import {useNavigate} from 'react-router-dom'


function Backexercises() {
  const navigate = useNavigate()
  function onback(){navigate(-1)}
  return (
    <>
      
      <div className="chest_main">
      <div className="heading">
      <img src={back} alt="loading" className='back' onClick={onback} />
        <h1>Back Exercise</h1>
      </div>
      <div className="Exerciseview">


      <div className="chestcard">
      <video src="https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-pullup-front.mp4#t=0.1" autoPlay loop muted />
      <video src="https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-pullup-side.mp4#t=0.1" autoPlay loop muted />
      <div className="chestcardcontainer">
        <h1>Pull Ups</h1>
      </div>
      </div>

      <div className="chestcard">
      <video src="https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-chinup-front.mp4#t=0.1" autoPlay loop muted />
      <video src="https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-chinup-side.mp4#t=0.1" autoPlay loop muted />
      <div className="chestcardcontainer">
        <h1>Chin Ups</h1>
      </div>
      </div>

      <div className="chestcard">
      <video src="https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-reverse-row-front.mp4#t=0.1" autoPlay loop muted />
      <video src="https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-reverse-row-side.mp4#t=0.1" autoPlay loop muted />
      <div className="chestcardcontainer">
        <h1>Inverted Row</h1>
      </div>
      </div>

      <div className="chestcard">
      <video src="https://media.musclewiki.com/media/uploads/videos/branded/male-Bodyweight-elevated-pike-press-front.mp4#t=0.1" autoPlay loop muted />
      <video src="https://media.musclewiki.com/media/uploads/videos/branded/male-Bodyweight-elevated-pike-press-side.mp4#t=0.1" autoPlay loop muted />
      <div className="chestcardcontainer">
        <h1>Elevated Pike Press</h1>
      </div>
      </div>

      

      <div className="chestcard">
      <video src="https://media.musclewiki.com/media/uploads/videos/branded/male-Bodyweight-supermans-side.mp4#t=0.1" autoPlay loop muted />
      <video src="https://media.musclewiki.com/media/uploads/videos/branded/male-Bodyweight-supermans-front.mp4#t=0.1" autoPlay loop muted />
      <div className="chestcardcontainer">
        <h1>Supermans</h1>
      </div>
      </div>

      <div className="chestcard">
      <video src="https://media.musclewiki.com/media/uploads/videos/branded/male-Bodyweight-good-mornings-side.mp4#t=0.1" autoPlay loop muted />
      <video src="https://media.musclewiki.com/media/uploads/videos/branded/male-Bodyweight-good-mornings-front.mp4#t=0.1" autoPlay loop muted />
      <div className="chestcardcontainer">
        <h1>Good Mornings</h1>
      </div>
      </div>

      </div>
      </div>


    </>
  )
}

export default Backexercises
