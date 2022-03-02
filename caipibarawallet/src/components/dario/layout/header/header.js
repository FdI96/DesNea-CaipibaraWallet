import * as React from 'react'
import "./header.css"

export default class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render () {
        return (
            <React.Fragment>
            <div id='header'>
                Header
                <hr />
            </div>
            </React.Fragment>
            
        )
        
    }
}