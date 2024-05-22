import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import '../Stylesheet/Login.css'
import axios from 'axios'

export default function Login() {

  const [email,setEmail] = useState(null)
  const [password,setPassword] = useState(null)
  const navigate = useNavigate()

  const handleSubmit = (e)=>{
    e.preventDefault()
    
    axios.post('http://localhost:3001/login',{email,password})
    .then(result => {console.log(result)
      if(result.data ==='success'){
      navigate('/')
    }if(result.data ==='password incorrect'){
      alert('password incorrect try again...')
    }if(result.data==='user not exist'){
      alert('User does not exist...')
    }
    })
    .catch(err => console.log(err))
  }


  return (
    <>
    <div className="logi">
      <div className="login-container">
        <div className="welcome-text">
          <h1>Welcome to FitFlow</h1>
          <p>
            Providing Knowledge and Advice For Betterment Of Your Health
          </p>
        </div>
        <div className="login-form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <form action="#" method="POST">
            <div className="form-group">
              <label>Email</label>
              <input type="text" id="email" name="email" onChange={(e)=> setEmail(e.target.value)} required />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" id="password" name="password" onChange={(e)=> setPassword(e.target.value)} required />
            </div>
            <button type="submit">Login</button>
          </form>
          <p><Link to="/">Forgot Password</Link>
          </p>
          <p>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
      </div>
    </>
  )
}
