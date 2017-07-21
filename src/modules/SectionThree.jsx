import React, { Component } from 'react';
import {Jumbotron} from 'react-bootstrap';
import HowItWorks from './howItWorks.jsx';
import AccessModal from './AccessModal.jsx'

class SectionThree extends Component {
    render() {
        return(
            <Jumbotron id="jumbotronThree">
                <HowItWorks/>
            </Jumbotron>
        )
    }
}

export default SectionThree;