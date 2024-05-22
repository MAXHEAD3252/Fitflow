import React from 'react'
import '../Stylesheet/Footer.css'
import {useNavigate} from 'react-router-dom'


import instagram from '../Assets/Images/Icons/Instagram.png'
import facebook from '../Assets/Images/Icons/Facebook.png'
import twitter from '../Assets/Images/Icons/Twitter.png'
import whatsapp from '../Assets/Images/Icons/WhatsApp.png'

function Footer() {
  const navigate = useNavigate()
  function contactus(){navigate('/contactus')}
  function faq(){navigate('/faq')}
  function help(){navigate('/help')}
  function ourstory(){navigate('/ourstory')}
  function ourteam(){navigate('/ourteam')}
  function privacypolicy(){navigate('/privacypolicy')}
  function termsconditions(){navigate('/termsandconditions')}
  function exercises(){navigate('/exercises')}
  function personalisedrecom(){navigate('/personalisedcerecom')}
  return (
    <>
     <div className="last" id='#footer'>
        <div className="title">
            <h1>FITFLOW</h1>
            <p>Ultimate destination for personalized health and fitness<br/>
             recommendations! Whether you're a beginner or a seasoned enthusiast, <br/>
             our platform is here to guide you on your wellness journey.
             </p>
            <span className='icons'>
                <img src={instagram} alt='icon-insta' className='insta'/>
                <img src={facebook} alt='icon-facebook' className='facebook'/>
                <img src={twitter} alt='icon-twitter' className='twitter'/>
                <img src={whatsapp} alt='icon-whatsapp' className='whatsapp'/>
            </span>
        </div>
        <div className="about">
        <h1>About</h1>
            <li onClick={faq}>FAQ</li>
            <li onClick={ourstory}>Our Story</li>
            <li onClick={ourteam}>Our Team</li>
            <li onClick={termsconditions}>Terms & Conditions</li>
            <li onClick={privacypolicy}>Privacy Policy</li>
        </div>
        <div className="services">
        <h1>Services</h1>
            <li onClick={exercises}>Exercise</li>
            <li onClick={personalisedrecom}>Personalized Recommendation</li>
            <li>Order Status</li>
            <li>Promo</li>
            <li>Donate Us</li>
        </div>
        <div className="other">
        <h1>Others</h1>
            <li onClick={contactus}>Contact Us</li>
            <li>Visit Us</li>
            <li onClick={help}>Help</li>
        </div>
        
      </div> 
      <div className="footer">
      <p className='cp'>© Copyright 2023 Made by FitFlow Team</p>
    </div>
      
    </>
  )
}

export default Footer
