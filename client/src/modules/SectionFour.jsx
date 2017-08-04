import React, {Component} from 'react';
import {Jumbotron} from 'react-bootstrap';
import PartnershipModal from './PartnershipModal.jsx'

class SectionFour extends Component {
    render() {
        return(
            <div>
                <Jumbotron id="jumbotronFour">
                    <h1>Gain more revenue by selling your unsold food left during closing time</h1>
                    <PartnershipModal buttonSize="large"/>
                </Jumbotron>
            </div>
        )
    }
}

export default SectionFour;