import React, {Component} from 'react'
import {Jumbotron} from 'react-bootstrap';
import * as firebase from 'firebase';


class ThankYouEatery extends Component {
    componentWillMount() {
        firebase.auth().signOut()
    }
    
    render() {
        return(
            <Jumbotron className="thankYouJumbotron">
                <h1>
                    <h1 className="thankYouMessage"> Thanks for signing up! </h1>
                    <h2 className="thankYouSubtext thankYouColor"><strong><span className="redText">grubsnatch</span></strong> will be available here soon, we'll send an email about some next steps to join shortly</h2>
                </h1>
            </Jumbotron>
        )
    }
}

export default ThankYouEatery;