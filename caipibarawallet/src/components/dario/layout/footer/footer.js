import * as React from 'react'
import "./footer.css"

export default class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render () {
        return (
            <div id='dariofooter' style={{backgroundColor: 'lightgray', lineHeight:'50px'}}> 
                <hr />
                Footer
            </div>
        )
        
    }
}