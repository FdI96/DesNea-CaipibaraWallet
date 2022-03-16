import * as React from 'react'
import Footer from './footer/footer'
import Header from './header/header'

export default class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render () {
        return (
            <div id='dariolayout'>
            <Header />
                <div style={{padding: '10px 10px'}}>
                    {this.props.children}
                </div>
            <Footer />
        </div>
        )
        
    }
}