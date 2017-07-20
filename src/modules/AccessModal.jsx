import React, { Component } from 'react';
import {PropTypes} from 'prop-types'
import {Button} from 'react-bootstrap';
import {Modal} from 'react-bootstrap';
import CustomerForm from './CustomerForm.jsx'

class AccessModal extends Component {
    constructor(props) {
        super(props);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.state = {
            isOpen: false
        }
    }

    openModal() {
        this.setState({
            isOpen: true
        })
    }

    closeModal() {
        this.setState({
            isOpen: false
        })
    }

    render() {
        return(
            <div>
                <Button
                    bsSize={this.props.buttonSize}
                    onClick={this.openModal}
                    className="accessButton"
                >
                Get Early Access
                </Button>

                <Modal show={this.state.isOpen} onHide={this.closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Get Early Access</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="modalTitleBlock">
                            <h4 className="modalTitleText">
                                We're <span id="excited">excited</span> to <span id="saveModal">save</span> you money on meals, while you save the planet.
                            </h4>
                        </div>
                        <CustomerForm/>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}

AccessModal.propTypes = {
    buttonSize: PropTypes.string
}

export default AccessModal;