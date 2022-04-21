import * as React from 'react'
import Layout from '../layout/layout'
import Home from '../home/home'
import {Routes, Route} from "react-router-dom"
import AboutUs from '../pages/about'
import Contact from '../pages/contact'
import TreatOperation from '../pages/treatoperation'

function DarioRoutes(props) {

    return (
        <Routes>
            <Route path='/home' element={ <Home /> }></Route>
            <Route path='/about' element={ <AboutUs />}></Route>
            <Route path='/contact' element={ <Contact />}></Route>
            <Route path='/home/operation/edit/:operationId' element={ <TreatOperation />}></Route>
            <Route path='/home/operation/add' element={ <TreatOperation />}></Route>

        </Routes>
        
    )
}

export default DarioRoutes