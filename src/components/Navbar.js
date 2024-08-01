import React, { useState } from 'react'
import {motion} from 'framer-motion'
import {useNavigate} from 'react-router-dom'
import './navbar.css'

export default function Navbar( { toCollection, toAbout, current, setCurrent} ) {

  
  return (
    <motion.nav 
      className="top-nav">
      <div className="navbar-container">
        <div className="left">
          <h1 className="main-title">MoRUS</h1> 
          <h2 className='subtitle'>Zine Library</h2>
        </div>
        <div className="right">
          <ul className='nav-container'>
            <li >
              <p className = {current === "" ? "nav-link current" : "nav-link"} onClick={() => toAbout()}>About</p>
            </li>
            <li>
              <p className = {current === "collection" ? "nav-link current" : "nav-link"} onClick={() => toCollection()}>Zine Collection</p>
            </li>
            <li>
              <p className = {current === "submit" ? "nav-link current" : "nav-link"}>Submissions</p>
            </li>
          </ul>
      </div>
    </div>
  </motion.nav>
  )
}
