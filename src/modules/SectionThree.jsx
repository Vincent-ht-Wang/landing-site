import React, { Component } from 'react';
import {Jumbotron} from 'react-bootstrap';
import HowItWorks from './HowItWorks.jsx';

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