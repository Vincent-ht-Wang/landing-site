import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import {Modal} from 'react-bootstrap';
import PropTypes from 'prop-types';
import PartnershipForm from './PartnershipForm.jsx';

class PartnershipModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
        this.open = this.open.bind(this)
        this.close = this.close.bind(this)
    }

    open() {
        this.setState({
            isOpen: true
        })
    }

    close() {
        this.setState({
            isOpen: false
        })
    }

    render() {
       return(
            <div>
                <Button
                    bsSize={this.props.buttonSize}
                    onClick={this.open}
                    bsStyle="success"
                    className="partnershipButton"
                >
                    Be a Partner
                </Button>

                <Modal show={this.state.isOpen} onHide={this.close}>
                    <Modal.Body>
                        <h4 className="modalTitleText">
                            We'd <span className="redText">love</span> to help you <span className="greenText">sell more</span> food
                        </h4>
                        <PartnershipForm/>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}

PartnershipModal.defaultProps = {
    buttonSize: "medium"
}

PartnershipModal.propTypes = {
    buttonSize: PropTypes.string
}

export default PartnershipModal;