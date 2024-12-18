import React from 'react'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className="sidebar">
        <ul>
        <a href='/home'><li>HOME</li></a>
       <ul>Add</ul>
        <a href='/Category'><li>Category</li></a>
        <a href='/Food'><li>Food</li></a>
       
      <ul>View</ul>
       <a href="/Categoryview"><li>Category Details</li></a>
       <a href="/Foodview"><li>Food Details</li></a>
      
      </ul>
      
    </div>
  )
}

export default Sidebar