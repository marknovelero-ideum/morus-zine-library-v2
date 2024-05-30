import React, { useState } from 'react'
import Navbar from '../components/Navbar.js'

export default function Home() {
  const [current, setCurrent] = useState('about')

  return (
    <div>
      <Navbar current={current} setCurrent={setCurrent}></Navbar>
    </div>
  )
}
