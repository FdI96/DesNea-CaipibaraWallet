import React from 'react'

// import { Routes, Route} from 'react-router-dom'

import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'

// import Contact from '../contact/Contact'

export default function Layout(props) {
  return (
    <div id='Layout'>
          <Navbar/>
            {props.children}
          <Footer/>
      </div>
  )
}
