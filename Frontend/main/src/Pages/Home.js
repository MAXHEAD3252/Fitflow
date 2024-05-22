import React from 'react'
import '../Stylesheet/Home.css'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-scroll';
import axios from 'axios'


import logo from '../Assets/Images/Fitflow-white.png'
import Video1 from '../Assets/Videos/running.mp4'
import Downarrow from '../Assets/Images/Icons/downarrow.png'
import Exercisecomponent from '../Components/Exercise_component'
import Articlescomponent from '../Components/Articles_component'
import Footer from '../Components/Footer'



function Home() {

  const navigate = useNavigate()
  function log(){navigate('/login')}
  function sign(){navigate('/signup')}
  function about(){navigate('/aboutus')}
  function contactus(){navigate('/contactus')}

  const ProtectedPage = () => {
      axios.get('http://localhost:3001/')
        .then(response => {
          if(response.data.message){
          alert(response.data.message);
          navigate('/personalisedcerecom')}
        })
        .catch(error => {
          console.error('Error:', error.response.data.message);
          // Handle unauthorized access, redirect to login page, etc.
        });
    }

  
  return (
    <>
      <video autoPlay loop muted className="video_bg">
    <source src={Video1} type="video/mp4" />
  </video>


    <nav>
    <div className="image">
    <img src={logo} alt="Logo" className='logo'/>
    </div>
    <div className="list">
    <li><Link to='#home' spy={true}  smooth={true} offset={10} duration={500} >Home</Link></li>
    <li><Link to='#exercises' spy={true} smooth={true} offset={10} duration={500} >Exercises</Link></li>
    <li onClick={ProtectedPage}>Personalised Recommendation</li>
    <li><Link to='#articles' spy={true} smooth={true} offset={0} duration={500} >Articles</Link></li>
    <li onClick={contactus}>Contact Us</li>
    <div className="nav_buttons">
    <button className='button1' onClick={log}>Login</button>
    <button className='button2' onClick={sign}>Signup</button>
    </div>
    </div>
    </nav>

    <div className="section_main" id='#home'>
    <div className="slogan">
      <h1>Improve Your Fitness,</h1>
      <p>Experience Fitness Like Never Before</p>
    </div>
    <div className="buttons">
    <button onClick={about}>Know More</button>
    </div>
    <div className="down">
    <Link to='#footer' spy={true} smooth={true} offset={40} duration={800}>
    <img src={Downarrow} alt="loading"/></Link>
    </div>
    </div>

    <Exercisecomponent/>
    <Articlescomponent/>  
    <Footer/>
    </>
  )
}

export default Home
