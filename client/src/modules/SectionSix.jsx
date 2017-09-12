import React, {Component} from 'react';
import {Jumbotron} from 'react-bootstrap';
import PartnershipModal from './PartnershipModal.jsx'
import Faq from './Faq.jsx'

class SectionSeven extends Component {
    render() {
        return(
            <div>
                <Jumbotron id="jumbotronSix">
                    <h1>Before you ask</h1>
                    <Faq/>
                    <div className="faqButtonOne">
                        <PartnershipModal buttonSize="large"/>
                    </div>
                </Jumbotron>
            </div>
        )
    }
}

export default SectionSeven;