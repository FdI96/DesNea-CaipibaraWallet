import * as React from 'react'
import "./header.css"
import { Link } from 'react-router-dom'

export default class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render () {
        return (
            <div id='header'>
                <div>
                    <Link to={"/dario/home"} className="link">
                        Operations
                    </Link>
                    <span> / </span>
                    <Link to={"/dario/about"} className="link">
                        About Us
                    </Link>
                    <span> / </span>
                    <Link to={"/dario/contact"} className="link">
                        Contact
                    </Link>
                </div>
            </div>
            
        )
        
    }
}