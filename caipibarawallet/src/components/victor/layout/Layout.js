import React from 'react'

import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'

export default function Layout(props) {
  return (
    <div id='Layout'>
          <Navbar/>
            {props.children}
          <Footer/>
      </div>
  )
}
