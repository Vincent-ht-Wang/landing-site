import React, { Component } from 'react';
import {FormControl} from 'react-bootstrap';
import {FormGroup} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Overlay, Popover} from 'react-bootstrap';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBPiP8-8tUjJnPOdwGZaHeWmEJtAohdn5Y",
    authDomain: "grubsnatch.firebaseapp.com",
    databaseURL: "https://grubsnatch.firebaseio.com",
    projectId: "grubsnatch",
    storageBucket: "grubsnatch.appspot.com",
    messagingSenderId: "490013699307"
};

firebase.initializeApp(config); 

var database = firebase.database()

function writeUserData(userId, name, email) {
    database.ref('users/' + userId).set({
        userName: name,
        email: email
    })
}

class CustomerForm extends Component {
    constructor(props) {
        super(props)
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handlePassChange = this.handlePassChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleNameChange = this.handleNameChange.bind(this)
        this.state = {
            passValue: "",  
            emailValue: "",
            name: "",
            error: null,
            showErrorMessage: false
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        firebase.auth()
        .createUserWithEmailAndPassword(this.state.emailValue, this.state.passValue) 
        .then(() => {
            this.setState({
                showErrorMessage: false
            })
            var user = firebase.auth().currentUser;
            writeUserData(user.uid, this.state.name, this.state.emailValue)
        })   
        .catch((error) => {
            this.setState({
                error: error,
                showErrorMessage: true,
            })
            console.error(error)
        })

    }

    componentWillMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                window.location = "thank-you"
            } 
        })
    }

    handlePassChange(e) {
        this.setState({
            passValue: e.target.value
        })
    }

    handleEmailChange(e) {
        this.setState({
            emailValue: e.target.value
        })
    }

    handleNameChange(e) {
        this.setState({
            name: e.target.value
        })
    }

    render() {
        let error = this.state.error
        if (error != null) {
            error = this.state.error
        } else {
            error = "test"
        }
        return(
            <form>
                <div className="customerFormBlock">
                    <FormGroup className="customerInput">
                        <FormControl
                            type="email"
                            value={this.state.name}
                            placeholder="Full Name"
                            onChange={this.handleNameChange}
                            />
                    </FormGroup>
                    <FormGroup className="customerInput">
                        <FormControl
                            type="email"
                            value={this.state.emailValue}
                            placeholder="Email"
                            onChange={this.handleEmailChange}
                        >
                        </FormControl>
                    </FormGroup>
                    <FormGroup className="customerInput">
                        <FormControl
                            type="password"
                            value={this.state.nameValue}
                            placeholder="Password"
                            onChange={this.handlePassChange}
                        >
                        </FormControl>
                    </FormGroup>
                </div>
                    <div className="customerSubmitAdjustor">
                        <Button 
                        type="submit"
                        className="submitButton"
                        block
                        onClick={this.handleSubmit}
                        >
                            Get Early Access 
                        </Button>
                    </div>
                    <Overlay
                        show={this.state.showErrorMessage}
                        placement="bottom"
                        container={this}
                    >
                        <Popover id="popover-contained" title="Woops!">
                            {error.message}
                        </Popover>
                    </Overlay>
            </form>
        )
    }
}

export default CustomerForm;