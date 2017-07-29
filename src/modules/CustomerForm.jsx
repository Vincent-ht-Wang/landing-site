import React, { Component } from 'react';
import {FormControl} from 'react-bootstrap';
import {FormGroup} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

class CustomerForm extends Component {
    constructor(props) {
        super(props)
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handlePassChange = this.handlePassChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            PassValue: "",  
            emailValue: ""
        }
    }

    handleSubmit(e) {
        e.preventDefault();
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

    render() {
        return(
            <form>
                <div className="customerFormBlock">
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
                        className="customerSubmitButton"
                        block
                        onClick={this.handleSubmit}
                        >
                            Submit 
                        </Button>
                    </div>
            </form>
        )
    }
}

export default CustomerForm;