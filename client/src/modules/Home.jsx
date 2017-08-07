import React, { Component } from 'react';
import SectionOne from './SectionOne.jsx';
import SectionTwo from './SectionTwo.jsx';
import SectionThree from './SectionThree.jsx';
import ThankYou from './ThankYou.jsx'

class Home extends Component {
    constructor(props) {
        super(props)
        this.onSignIn = this.onSignIn.bind(this)
        this.state = {
            signedIn: false
        }
    }

    onSignIn(signedIn) {
        if (signedIn) {
            this.setState({
                signedIn: true
            })
        } else {
            this.setState({
                signedIn: false
            })
        }
    }

    render() {
        let signedIn = this.state.signedIn
        let home = null;

        if (signedIn) {
            home = <ThankYou/>
        } else {
            home = 
                <div>
                    <SectionOne onSignIn={this.onSignIn}/>
                    <SectionTwo/>
                    <SectionThree/>
                </div>
        }
        return( 
            <div>
                {home}
            </div>
        )
    }
}

export default Home;