import React from 'react'
import './home.css'

export default function Home() {
  return (
    <div id={'home'}>
        <h2>Welcome to the Homepage!</h2>
      <nav>
        <Link to="/victor">Victor</Link>
      </nav>
    </div> 
  )
}
