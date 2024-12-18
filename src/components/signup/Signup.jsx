import React, { useState } from 'react'

import './signup.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import baseurl from '../../Api';

const Signup = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  

  const navigate = useNavigate();

  const handleSignup = async(e) =>{
    e.preventDefault();
   
    const response =await axios.post(baseurl+'/login/signup',{
        firstname:firstname,
        lastname:lastname,
      username:username,
      password:password,
    } );
    console.log(response)
    
    if(response.data.success){
      alert(response.data.message);
      navigate('/')
    
    }
    else
  {
    
    setError('Invalid...,Please try again.');
    alert(response.data.message);

  }

  }

  
  

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <form >
      <div className="form-group">
          <label htmlFor="firstname">Firstname</label>
          <input
            type="text"
            id="firstname"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}

            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Lastname</label>
          <input
            type="text"
            id="lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}

            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}

            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}

            required
          />
        </div>
        <button onClick={handleSignup} type="submit">Signup</button>
       
       
        
        {error &&<p style={{marginTop:9,color:'red'}}>{error}</p>}
      </form>
    </div>
  )
}

export default Signup