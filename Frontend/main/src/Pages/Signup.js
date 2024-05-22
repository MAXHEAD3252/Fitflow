import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import '../Stylesheet/Signup.css'
import axios from 'axios'

export default function Signup() {

  const [name,setName] = useState(null)
  const [email,setEmail] = useState(null)
  const [password,setPassword] = useState(null)
  const navigate = useNavigate()

  const handleSubmit = (e)=>{
    e.preventDefault()
    
    axios.post('http://localhost:3001/signup',{name,email,password})
    .then(result => {console.log(result)
      navigate('/home')
    })
    .catch(err => console.log(err))
  }

  return (
    <>
    <div className="logi">
       <div className="signup-container" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <form action="#" method="POST">
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" id="fullname" name="fullname" onChange={(e)=> setName(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" id="email" name="email" onChange={(e)=> setEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" id="password" name="password" onChange={(e)=> setPassword(e.target.value)} required />
          </div>
          <button type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
      </div>
    </>
  )
}
