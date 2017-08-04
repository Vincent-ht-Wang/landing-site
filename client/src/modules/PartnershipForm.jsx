import React, {Component} from 'react';
import {FormGroup} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

class PartnershipForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fullName: "",
            storeName: ""
        }
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleStoreChange = this.handleStoreChange.bind(this)
        this.handleAddressChange = this.handleAddressChange.bind(this)
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleNameChange(e) {
        this.setState({
            fullName: e.target.value
        })
    }

    handleStoreChange(e) {
        this.setState({
            storeName: e.target.value
        })
    }

    handleAddressChange(e) {
        this.setState({
            address: e.target.value
        })
    }

    handleEmailChange(e) {
        this.setState({
            email: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        return(
            <div>
                <form>
                    <div className="eateryInput">
                        <FormGroup>
                            <FormControl
                                type="text"
                                value={this.state.fullName}
                                placeholder="Owner's full name"
                                onChange={this.handleNameChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormControl
                                type="text"
                                value={this.state.storeName}
                                placeholder="Store or Franchise"
                                onChange={this.handleStoreChange}
                            /> 
                        </FormGroup>
                        <FormGroup>
                            <FormControl
                                componentClass="select"
                                placeholder="Store type"
                            >
                                <option value="cafe">Cafe</option>
                                <option value="bakery">Bakery</option>
                                <option value="pizza">Pizza store</option>
                                <option value="sushi">Sushi store</option>
                                <option value="buffet">Buffet</option>
                                <option value="other">Other</option>
                            </FormControl>
                        </FormGroup>
                        <FormGroup>
                            <FormControl
                                type="text"
                                value={this.state.address}
                                placeholder="Address | Town | City"
                                onChange={this.handleAddressChange}
                            />
                        </FormGroup>
                        <FormGroup> 
                            <FormControl
                                type="email"
                                value={this.state.email}
                                placeholder="Email"
                                onChange={this.handleEmailChange}
                            /> 
                        </FormGroup>
                    </div>

                    <Button type="submit" bsStyle="success" className="submitButton" onClick={this.handleSubmit} block>
                        Submit
                    </Button>
                </form>
            </div>
        )
    }
}

export default PartnershipForm;