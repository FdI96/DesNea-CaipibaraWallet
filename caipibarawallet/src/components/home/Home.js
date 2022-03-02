import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'

import Footer from '../footer/footer'

export default function Home() {
  return (
    <div id={"home"}>
<<<<<<< HEAD
      <h1>Caipibara Home</h1>
      <h3>Click one of the buttons below to enter the different versions of Caipibara Wallet</h3>
      <div id='links'>
        <Link to={"/victor"}>
            <button id={'home-btn-victor'}>
              Victor App
            </button>
        </Link>
        <Link to={"/federico"}>
            <button id={'home-btn-fede'}>
              Fede App
            </button>
        </Link>
      </div>
      <Footer />
=======
    <h1>Caipibara Home</h1>
    <h3>Click one of the buttons below to enter the different versions of Caipibara Wallet</h3>
    <Link to={"/victor"}>
        <button id={'home-btn-victor'}>
          Victor App
        </button>
    </Link>
    <Link to={"/dario"}>
        <button id={'home-btn-dario'}>
          Dario App
        </button>
    </Link>
    <Footer />
>>>>>>> b80fe8f8f3997907be2ca8d74c5c9ff6f8a17efa
    </div>
  )
}
