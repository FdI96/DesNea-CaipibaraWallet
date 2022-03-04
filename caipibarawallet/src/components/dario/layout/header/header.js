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
            <div id='darioheader' style={{backgroundColor: 'lightgray', lineHeight: '50px'}}>
                <div>
                    <Link to={"/"}>
                        Operations
                    </Link>
                    <span> / </span>
                    <Link to={"/"}>
                        About Us
                    </Link>
                    <span> / </span>
                    <Link to={"/"}>
                        Contact
                    </Link>
                </div>
                <hr />
            </div>
            
        )
        
    }
}