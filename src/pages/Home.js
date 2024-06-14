import React, { useState } from 'react'
import Navbar from '../components/Navbar.js'
import './home.css'

export default function Home(zineData) {
  const [current, setCurrent] = useState('about')

  return (
    <div>
      <Navbar current={current} setCurrent={setCurrent}></Navbar>
      <div className='about-container'>
       
      </div>
    </div>
  )
}
