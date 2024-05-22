import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import '../../../Stylesheet/Personalised_recom_stylesheet/Forms/Exercise_form.css'

function Exercise_form() {
    const navigate = useNavigate()
    function onback(){navigate('/personalisedcerecom')}

    const [level,setLevel] = useState('Beginner')
    const [bodypart,setBodypart] = useState('Chest')

    const handleSubmit = (e)=>{
      e.preventDefault()
      
      axios.post('http://localhost:5000/api/data/exercise',{ method: 'POST',
      headers: { 'Content-Type': 'application/json' },body: JSON.stringify({level,bodypart})})
      .then(result => {console.log(result)
        navigate('/exerciseresult')
      })
      .catch(err => console.log(err))
    }
    
  return (
    <>
      <div className="exercisemain">
      <div className="exerciseform-container">
        <div className="exercise-welcome-text">
          <h1>Exercises</h1>
        </div>
        <div className="login-form" onSubmit={handleSubmit} >
          <form action="#" method="POST">
          <div className="form-group">
              <label>Body Part</label>
              <select id='bodypart' onChange={(e)=> setBodypart(e.target.value)}>
                <option>Chest</option>
                <option>Shoulders</option>
                <option>Back</option>
                <option>Legs</option>
                <option>Biceps</option>
                <option>Triceps</option>
                <option>Abs</option>
                <option>Glutes</option>
                <option>Forearms</option>
              </select>
            </div>
            <div className="form-group">
              <label>Exercise Level</label>
              <select id='level' onChange={(e)=> setLevel(e.target.value)}>
                <option>Beginner</option>
                <option>Medium</option>
                <option>Advance</option>
              </select>
            </div>
            <button className='submit' type='submit'>Submit</button>
            <button className='exerciseback' onClick={onback}>Back</button>
          </form>
        </div>
      </div>
      </div>
    </>
  )
}

export default Exercise_form
