import React, {Component} from 'react';
import {Jumbotron} from 'react-bootstrap';
import * as firebase from 'firebase';

class ThankYou extends Component {
    componentWillMount() {
        firebase.auth().signOut()
    }

    render() {
        return(
            <div>
                <Jumbotron id="thankYouJumbotron">
                    <h1 className="thankYouMessage"> Thanks for signing up! </h1>
                    <h2 className="thankYouMessage thankYouColor"><strong><span className="redText">grubsnatch</span></strong> will be available here soon, we'll flick you an email when it's up!</h2>
                </Jumbotron>
            </div>
        )
    }
}

export default ThankYou;