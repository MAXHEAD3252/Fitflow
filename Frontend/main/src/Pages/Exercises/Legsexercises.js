import React from 'react'
import back from '../../Assets/Images/Icons/backward-solid.svg'
import {useNavigate} from 'react-router-dom'


function Legsexercises() {
  const navigate = useNavigate()
  function onback(){navigate(-1)}
  return (
    <>

    <div className="chest_main">
      <div className="heading">
      <img src={back} alt="loading" className='back' onClick={onback} />
        <h1>Legs Exercise</h1>
      </div>
      <div className="Exerciseview">


      <div className="chestcard">
      <video src="https://media.musclewiki.com/media/uploads/videos/branded/male-Bodyweight-bodyweight-squat-front.mp4#t=0.1" autoPlay loop muted />
      <video src="https://media.musclewiki.com/media/uploads/videos/branded/male-Bodyweight-bodyweight-squat-side.mp4#t=0.1" autoPlay loop muted />
      <div className="chestcardcontainer">
        <h1>Bodyweight Squat</h1>
      </div>
      </div>

      <div className="chestcard">
      <video src="https://media.musclewiki.com/media/uploads/videos/branded/male-Bodyweight-forward-lunges-front.mp4#t=0.1" autoPlay loop muted />
      <video src="https://media.musclewiki.com/media/uploads/videos/branded/male-Bodyweight-forward-lunges-side.mp4#t=0.1" autoPlay loop muted />
      <div className="chestcardcontainer">
        <h1>Forward Lunges</h1>
      </div>
      </div>

      <div className="chestcard">
      <video src="https://media.musclewiki.com/media/uploads/videos/branded/male-Bodyweight-jump-squats-front.mp4#t=0.1" autoPlay loop muted />
      <video src="https://media.musclewiki.com/media/uploads/videos/branded/male-Bodyweight-jump-squats-side.mp4#t=0.1" autoPlay loop muted />
      <div className="chestcardcontainer">
        <h1>Jump Squats</h1>
      </div>
      </div>

      <div className="chestcard">
      <video src="https://media.musclewiki.com/media/uploads/videos/branded/male-Bodyweight-bulgarian-split-squat-front.mp4#t=0.1" autoPlay loop muted />
      <video src="https://media.musclewiki.com/media/uploads/videos/branded/male-Bodyweight-bulgarian-split-squat-side.mp4#t=0.1" autoPlay loop muted />
      <div className="chestcardcontainer">
        <h1>Bulgarian Split Squat</h1>
      </div>
      </div>

      

      <div className="chestcard">
      <video src="https://media.musclewiki.com/media/uploads/videos/branded/male-Bodyweight-nordic-hamstring-curl-front.mp4#t=0.1" autoPlay loop muted />
      <video src="https://media.musclewiki.com/media/uploads/videos/branded/male-Bodyweight-nordic-hamstring-curl-side.mp4#t=0.1" autoPlay loop muted />
      <div className="chestcardcontainer">
        <h1>Nordic Hamstring Curl</h1>
      </div>
      </div>

      <div className="chestcard">
      <video src="https://media.musclewiki.com/media/uploads/videos/branded/male-Recovery-hamstring-bridge-isometric-open-angle-front.mp4#t=0.1" autoPlay loop muted />
      <video src="https://media.musclewiki.com/media/uploads/videos/branded/male-Recovery-hamstring-bridge-isometric-open-angle-side.mp4#t=0.1" autoPlay loop muted />
      <div className="chestcardcontainer">
        <h1>Hamstring Open Angle</h1>
      </div>
      </div>

      </div>
      </div>
      
    </>
  )
}

export default Legsexercises