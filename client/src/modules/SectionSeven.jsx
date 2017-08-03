import React, {Component} from 'react';
import {Jumbotron} from 'react-bootstrap';
import PartnershipModal from './PartnershipModal.jsx'

class SectionSeven extends Component {
    render() {
        return(
            <div>
                <Jumbotron id="jumbotronSeven">
                    <PartnershipModal buttonSize="large"/>
                </Jumbotron>
            </div>
        )
    }
}

export default SectionSeven;