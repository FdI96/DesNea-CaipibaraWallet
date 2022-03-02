import React from 'react'
import BodyGTS from '../body/body'
import FooterGTS from '../footer/footer'
import Navbar from '../navbar/navbar'

export default function Layout()
{
    return (
        <div id="Layout">
        <Navbar/>
        <BodyGTS/>
        <FooterGTS/>
    </div>
    )
}
