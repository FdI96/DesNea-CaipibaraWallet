import * as React from 'react'
import Layout from '../layout/layout'
import Home from '../home/home'
import {Routes, Route} from "react-router-dom"
import AboutUs from '../pages/about'

function DarioRoutes(props) {

    return (
        <React.Fragment>
            <Routes>
                <Route path='/' element={ <Home /> }></Route>
                <Route path='/aboutus' element={ <AboutUs />}></Route>
            </Routes>
        </React.Fragment>
        
    )
}

export default DarioRoutes