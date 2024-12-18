import React from 'react'
import './Topbar.css'
import { Link } from 'react-router-dom'

export const Topbar = () => {
  return (
    <div className='topbar' >
    <div className="topbarwrapper">
      <div className="topleft">
        <span className="logo">
          Canteen 
          Management System
        </span>
      </div>
     
      <div className='topright'>
      
        <button ><Link to={'/'}>Log Out</Link></button>
        
       
       
      </div>

    </div>
  </div>
  )
}
