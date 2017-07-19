import React, { Component } from 'react';
import {FormControl} from 'react-bootstrap';
import {FormGroup} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {ControlLabel} from 'react-bootstrap';

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
                    <FormGroup>
                        <ControlLabel>
                            Full Name:
                        </ControlLabel>
                        <FormControl
                            type="text"
                            value={this.state.nameValue}
                            placeholder="Full Name"
                            onChange={this.handleNameChange}
                        >
                        </FormControl>
                    </FormGroup>
                </div>
                <FormGroup>
                    <ControlLabel>
                        Email:
                    </ControlLabel>
                    <FormControl
                        type="text"
                        value={this.state.emailValue}
                        placeholder="Enter email"
                        onChange={this.handleEmailChange}
                    >
                    </FormControl>
                </FormGroup>
                <div className="customerFormSubmit">
                    <Button 
                    type="submit"
                    bsStyle="success"
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