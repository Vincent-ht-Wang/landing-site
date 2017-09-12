import React, {Component} from 'react';
import {FormGroup} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import * as firebase from 'firebase';

let database = firebase.database();

function writeEateryData(eateryId, ownerName, storeName, storeType, address, email) {
    database.ref('eateries/' + eateryId).set({
        ownerName: ownerName,
        storeName: storeName,
        storeType: storeType,
        address: address,
        email: email,
    })
}

class PartnershipForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ownerName: "",
            storeName: "",
            storeType: "",
            address: "",
            email: "",
        }
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleStoreChange = this.handleStoreChange.bind(this)
        this.handleAddressChange = this.handleAddressChange.bind(this)
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleCatChange = this.handleCatChange.bind(this)
    }

    handleCatChange(e) {
        this.setState({
            storeType: e.target.value
        })
    }

    handleNameChange(e) {
        this.setState({
            ownerName: e.target.value
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
        firebase.auth().signInAnonymously().catch((error)=>{
            console.error(error)
        })
    }

    componentWillMount() {
        firebase.auth().onAuthStateChanged((user)=>{
            if (user) {
                writeEateryData(user.uid, this.state.ownerName, this.state.storeName, this.state.storeType, this.state.address, this.state.email)
                window.location = 'thank-you-eatery'
            }
        })
    }

    render() {
        return(
            <div>
                <form>
                    <div className="eateryInput">
                        <FormGroup>
                            <FormControl
                                type="text"
                                value={this.state.ownerName}
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
                                onChange={this.handleCatChange}
                            >
                                <option value="placeholder">Choose eatery type...</option>
                                <option value="cafe">Cafe</option>
                                <option value="bakery">Bakery</option>
                                <option value="pizza">Pizza store</option>
                                <option value="sushi">Sushi store</option>
                                <option value="buffet">Buffet</option>
                                <option value="donut">Donut store</option>
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