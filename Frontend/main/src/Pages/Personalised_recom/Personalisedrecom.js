import React from 'react'
import '../../Stylesheet/Personalised_recom_stylesheet/Personalised_recom.css'
import back from '../../Assets/Images/Icons/backward-solid-blue.svg'
import {useNavigate} from 'react-router-dom'
import imageleft from '../../Assets/Images/Personalised_recom/exercise.jpeg'
import imageright from '../../Assets/Images/Personalised_recom/salad.jpg'

function Personalisedrecom() {
  const navigate = useNavigate()
  function onback(){navigate('/')}
  function mealform(){navigate('/mealform')}
  function exerciseform(){navigate('/exerciseform')}

  return (
    <>
    <div className="per_main">
      <div className="heading">
      <img src={back} alt="loading"  onClick={onback}/>
        <h1>Personalised Recommendations</h1>
      </div>
      <div className="options">
      <div className="per_left" style={{backgroundImage: "url(" + imageleft + ")"}}>
      <button onClick={exerciseform}>Exercises</button>
      </div>
      <div className="per_right" style={{backgroundImage: "url(" + imageright + ")"}}>
      <button onClick={mealform}>Meal</button>
      </div>
      </div>
    </div>
    </>
  )
}


export default Personalisedrecom
