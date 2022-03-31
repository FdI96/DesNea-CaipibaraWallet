import * as React from 'react'
import Layout from '../layout/layout'
import Home from '../home/home'
import {Routes, Route} from "react-router-dom"
import AboutUs from '../pages/about'
import Contact from '../pages/contact'

function DarioRoutes(props) {

    return (
        <Routes>
            <Route path='/home' element={ <Home /> }></Route>
            <Route path='/about' element={ <AboutUs />}></Route>
            <Route path='/contact' element={ <Contact />}></Route>
        </Routes>
        
    )
}

export default DarioRoutes