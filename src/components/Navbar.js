import React, { useState } from 'react'
import './navbar.css'

export default function Navbar( {current, setCurrent} ) {

  const handleCurrentChange = (value) => {
    
    setCurrent(value)
  }
  
  return (
    <nav className="navbar">
    <div className="left">
      <h1 className="main-title">M.O.R.U.S</h1>
     
    </div>
    <div className="right">
      <ul className='nav-container'>
        <li >
          <p className = {current === "about" ? "nav-link current" : "nav-link"} onClick={() => handleCurrentChange('about')}>About</p>
        </li>
        <li>
          <p className = {current === "zine" ? "nav-link current" : "nav-link"} onClick={() => handleCurrentChange('zine')}>Zine Collection</p>
        </li>
        <li>
          <p className = {current === "submit" ? "nav-link current" : "nav-link"} onClick={() => handleCurrentChange('submit')} >Submissions</p>
        </li>
      </ul>
    </div>
  </nav>
  )
}
