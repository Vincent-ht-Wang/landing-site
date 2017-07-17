import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import {Modal} from 'react-bootstrap';

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
                    bsStyle="success"
                    onClick={this.openModal}
                >
                Get Early Access
                </Button>

                <Modal show={this.state.isOpen} onHide={this.closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Get Early Access</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>
                            We're excited to save you money on meals, while you save the planet.
                        </h4>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}

export default AccessModal;