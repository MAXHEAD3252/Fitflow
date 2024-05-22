import React from 'react'
import '../Stylesheet/Exercise_component.css'
import {useNavigate} from 'react-router-dom'

import chest from '../Assets/Images/Exercises/chest.jpg'
import biceps from '../Assets/Images/Exercises/biceps.jpg'
import shoulders from '../Assets/Images/Exercises/shoulders.jpg'
import back from '../Assets/Images/Exercises/back.jpg'
import legs from '../Assets/Images/Exercises/legs.jpg'
import tricep from '../Assets/Images/Exercises/tricep.jpg'
import abs from '../Assets/Images/Exercises/abs.jpg'
import glutes from '../Assets/Images/Exercises/glutes.jpg'
import forearms from '../Assets/Images/Exercises/forearms.jpg'


function Exercise_component() {

  const navigate = useNavigate()

  function chestClick(){navigate('/chestexercises')}
  function bicepClick(){navigate('/bicepexercises')}
  function shoulderClick(){navigate('/shoulderexercises')}
  function backClick(){navigate('/backexercises')}
  function legsClick(){navigate('/legsexercise')}
  function tricepClick(){navigate('/tricepexercises')}
  function absClick(){navigate('/absexercises')}
  function glutesClick(){navigate('/glutesexercises')}
  function forearmsClick(){navigate('/forearmsexercises')}

  return (
    <>
    <div className="exercise_main" id='#exercises'>
    <div className="heading">
    <h1>Our Programs</h1>
    <p>Build Your Best Body</p> 
    </div>


    <div className="cardview">

    <div className = "card" onClick={chestClick}>
    <img src={chest} alt="loading"/>
    <div className="card-content">
      <h2>Chest</h2>
      <p>
      Enhances Upper Body Strength and Definition 
      </p>
      
    </div>
  </div>

  <div className = "card" onClick={bicepClick}>
    <img src={biceps} alt="loading"/>
    <div className="card-content">
      <h2>Bicep</h2>
      <p>
      Develops Well-Defined and Strong Bicep Muscles 
      </p>
      
    </div>
  </div>



  <div className = "card" onClick={shoulderClick}>
    <img src={shoulders} alt="loading"/>
    <div className="card-content">
      <h2>Shoulder</h2>
      <p>
      Enhances Shoulder Definition and Overall Strength 
      </p>
      
    </div>
  </div>



    </div>


    <div className="cardview">




<div className = "card" onClick={backClick}>
<img src={back} alt="loading"/>
<div className="card-content">
  <h2>Back</h2>
  <p>
  Strengthens Back Muscles for Posture Support 
  </p>
  
</div>
</div>



<div className = "card" onClick={legsClick}>
<img src={legs} alt="loading"/>
<div className="card-content">
  <h2>Legs</h2>
  <p>
  Increases Lower Body Strength and Stability 
  </p>
  
</div>
</div>

<div className = "card" onClick={tricepClick}>
    <img src={tricep} alt="loading"/>
    <div className="card-content">
      <h2>Tricep</h2>
      <p>
      Tones and Defines the Back of Arms 
      </p>
      
    </div>
  </div>

</div>






    
    <div className="cardview">

   

  <div className = "card" onClick={absClick}>
    <img src={abs} alt="loading"/>
    <div className="card-content">
      <h2>Abs</h2>
      <p>
      Creates a Strong and Defined Core 
      </p>
      
    </div>
  </div>



  <div className = "card" onClick={glutesClick}>
    <img src={glutes} alt="loading"/>
    <div className="card-content">
      <h2>Glutes</h2>
      <p>
      Builds Firm and Shapely Glute Muscles 
      </p>
      
    </div>
  </div>






  <div className = "card" onClick={forearmsClick}>
    <img src={forearms} alt="loading"/>
    <div className="card-content">
      <h2>Forearms</h2>
      <p>
      Builds Muscular Arms for Functional Strength 
      </p>
      
    </div>
  </div>



    </div>
    </div>
    </>
  )
}

export default Exercise_component

