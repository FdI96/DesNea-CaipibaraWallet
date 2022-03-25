import React from 'react'

// import { Routes, Route} from 'react-router-dom'

import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import Sidebar from '../sidebar/Sidebar'
// import Contact from '../contact/Contact'

export default function Layout(props) {
  return (
    <div id='Layout'>
          <Navbar/>
          <Sidebar/>
            {props.children}
          <Footer/>
      </div>
  )
}
