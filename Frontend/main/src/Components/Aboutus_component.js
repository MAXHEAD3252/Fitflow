import React from 'react'
import ourimage from '../Assets/Images/Fitflow-white.png'
import '../Stylesheet/Aboutus_component.css'
import back from '../Assets/Images/Icons/backward-solid-blue.svg'
import {useNavigate} from 'react-router-dom'


function Aboutus_component() {
  const navigate = useNavigate()
  function onback(){navigate(-1)}
  return (
    <>
      <section class="hero">
       <div class="about-heading">
       <img src={back} alt="loading" onClick={onback}/>
        <h1>About Us</h1>
       </div>
       <div class="about-container">
         <div class="hero-content">
            <h2>Welcome to our site</h2>
            <p>FitFlow's team is comprised of dedicated professionals with expertise in artificial intelligence, nutrition, exercise science, and user experience. Led by our CEO and Founder, our team works tirelessly to ensure that FitFlow delivers the best possible experience for our users. Meet the minds behind FitFlow
            </p>
         </div>
         <div class="hero-image">
            <img src={ourimage} alt='loading'/>
         </div>
       </div>
    </section>

    </>
  )
}

export default Aboutus_component
