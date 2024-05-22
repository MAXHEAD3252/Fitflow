import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import '../../../Stylesheet/Personalised_recom_stylesheet/Forms/Meal_form.css'

function Meal_form() {
    const navigate = useNavigate()
    function onback(){navigate('/personalisedcerecom')}

    const [age,setAge] = useState()
    const [height,setHeight] = useState()
    const [weight,setWeight] = useState()
    const [plan,setPlan] = useState('Weight Loss')


    const handleSubmit = (e)=>{
      e.preventDefault()
      
      axios.post('http://localhost:5000/api/data',{ method: 'POST',
      headers: { 'Content-Type': 'application/json' },body: JSON.stringify({age,height,weight,plan})})
      .then(result => {console.log(result)
        navigate('/mealresult')
      })
      .catch(err => console.log(err))
    }

  return (
    <>
      <div className="mealmain">
      <div className="mealform-container">
        <div className="Meal-welcome-text">
          <h1>Meal Plan</h1>
          <p>
            Enter Your Information
          </p>
        </div>
        <div className="Meal-form" onSubmit={handleSubmit} >
          <form action="#" method="POST">
            <div className="mealmealform-group">
              <label>Age</label>
              <input type='number' id="email" name="age" placeholder='Years' onChange={(e)=> setAge(e.target.value)}  required />
            </div>
            <div className="mealform-group">
              <label>Height</label>
              <input type='number' id="password" name="height" placeholder='Metre' onChange={(e)=> setHeight(e.target.value)} required />
            </div>
            <div className="mealform-group">
              <label>Weight</label>
              <input type='number' id="password" name="weight" placeholder='Kg' onChange={(e)=> setWeight(e.target.value)} required />
            </div>
            <div className="mealform-group">
              <label>Diet Plan Options</label>
              <select id='plan' onChange={(e)=> setPlan(e.target.value)}>
                <option>Weight Loss</option>
                <option>Weight Gain</option>
                <option>Healthy</option>
              </select>
            </div>
            <button className="submit" type='submit'>Submit</button>
            <button className='mealback' onClick={onback}>Back</button>
          </form>
        </div>
      </div>
      </div>
    </>
  )
}

export default Meal_form
