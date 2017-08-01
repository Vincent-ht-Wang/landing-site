import React, {Component} from 'react';
import {Jumbotron} from 'react-bootstrap';
import AccessModal from './AccessModal.jsx';

class SectionFour extends Component {
    render() {
        return(
            <div>
                <Jumbotron id="jumbotronFour">
                    <h1>Gain more revenue by selling your unsold food left during closing time</h1>
                    <AccessModal buttonSize="large"/>
                </Jumbotron>
            </div>
        )
    }
}

export default SectionFour;