import React, { Component } from 'react';
import {FormControl} from 'react-bootstrap';
import {FormGroup} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {ControlLabel} from 'react-bootstrap';
import {FieldGroup} from 'react-bootstrap';

class CustomerForm extends Component {
    constructor(props) {
        super(props)
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handleNameChange = this.handleNameChange.bind(this)
        this.state = {
            nameValue: "",  
            emailValue: ""
        }
    }

    handleNameChange(e) {
        this.setState({
            nameValue: e.target.value
        })
    }

    handleEmailChange(e) {
        this.setState({
            emailValue: e.target.value
        })
    }

    render() {
        return(
            <form>
                <div className="customerFormBlock">
                    <FormGroup className="emailInput">
                        <FormControl
                            type="email"
                            value={this.state.emailValue}
                            placeholder="Email"
                            onChange={this.handleEmailChange}
                        >
                        </FormControl>
                    </FormGroup>
                    <FormGroup className="passwordInput">
                        <FormControl
                            type="password"
                            value={this.state.nameValue}
                            placeholder="Password"
                            onChange={this.handleNameChange}
                        >
                        </FormControl>
                    </FormGroup>
                </div>
                <div className="customerFormSubmit">
                    <Button 
                    type="submit"
                    className="customerSubmitButton"
                    block
                    >
                        Submit 
                    </Button>
                </div>
            </form>
        )
    }
}

export default CustomerForm;