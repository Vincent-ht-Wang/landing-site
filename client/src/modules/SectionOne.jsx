import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Jumbotron} from 'react-bootstrap';
import AccessModal from './AccessModal.jsx';


class SectionOne extends Component {
    render() {
        return(
            <Jumbotron id="jumbotronOne">
                <h1 className="sectionOneHeader">
                Find unsold food at a discount from eateries during closing time
                </h1>
                <AccessModal buttonSize="large"/>  
            </Jumbotron>
        )   
    }
}

export default SectionOne;