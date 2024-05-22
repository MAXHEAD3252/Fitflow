import { useState } from 'react'
import React from 'react'
import '../../Stylesheet/Footer_stylesheets/Contactus.css'
import { useNavigate } from "react-router-dom"


function Contactus() {
    
  const navigate = useNavigate();
  function onback() {navigate(-1);}

  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSendEmail = () => {

    // Construct a "mailto" URL with email, subject, and body
    const mailtoLink = `mailto:joshiak3252@gmail.com?subject=Contact Request from ${name}&body=${message}`;
    
    // Open the default email client with the pre-filled email
    window.location.href = mailtoLink;
  };

  return (
    <>
     <div class="contact-container">
        <div class="contact-form">
            <h2>Get in touch</h2>
            <form action="#" >
                <div class="contact-group">
                    <input className='text' type="text" id="name" name="name" placeholder="Name" required onChange={(e) => setName(e.target.value)}/>
                </div>
                <div class="contact-group">
                    <input type="text" id="subject" name="subject" placeholder="Subject" required/>
                </div>
                <div class="contact-group">
                    <textarea id="message" name="message" placeholder="Message" rows={9} required onChange={(e) => setMessage(e.target.value)}/>
                </div>
                <button className="contactsubmit" onClick={handleSendEmail}>Send Message</button>
                <button className='contactback' onClick={onback}>Back</button>
            </form>
        </div>
        <div class="contact-info">
            <h2>Contact us</h2>
            <ul>
                <li><i class="fa fa-map-marker"></i> <label style={{fontWeight : 600,}}>Address:</label>D.Y.Patil International University, Akurdi</li>
                <li><i class="fa fa-map-marker"></i> Pune, Maharashtra, India</li>
                <li><i class="fa fa-phone"></i> <label style={{fontWeight : 600,}}>Phone:</label> +1235 2355 98</li>
                <li><i class="fa fa-envelope"></i> <label style={{fontWeight : 600,}}>Email:</label> info@yoursite.com</li>
                <li><i class="fa fa-globe"></i> <label style={{fontWeight : 600,}}>Website:</label> yoursite.com</li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Contactus
