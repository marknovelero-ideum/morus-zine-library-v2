import React from 'react'
import './navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
    <div className="left">
      <h1 className="main-title">M.O.R.U.S</h1>
      <h2 className="sub-title">Digital Zine Library</h2>
    </div>
    <div className="right">
      <ul className='nav-container'>
        <li><a href="#">About</a></li>
        <li><a href="#">Zine Collection</a></li>
        <li><a href="#">Submissions</a></li>
      </ul>
    </div>
  </nav>
  )
}
