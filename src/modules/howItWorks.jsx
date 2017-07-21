import React, { Component } from 'react';
import {Image} from 'react-bootstrap';
import {Grid} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import AccessModal from './AccessModal';

class HowItWorks extends Component {
    render() {
        return(
            <div>
                <Grid fluid>
                    <Row>
                        <Col md={4}>
                            <div className="searchIcon">
                                <Image responsive/>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="payIcon">
                                <Image responsive/>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="eatIcon">
                                <Image responsive/>
                            </div>
                        </Col>
                    </Row>
                    <Row id="temporary">
                        <Col md={4}>
                            <p>
                                Easily <span id="easily">find </span>a closing eatery nearby that suits your taste
                            </p>
                        </Col>
                        <Col md={4}>
                            <p>
                                <span id="order">Order</span> and purchase your meal through the web-app
                            </p>
                        </Col>
                        <Col md={4}>
                            <p>
                                <span id="grab">Grab</span> your meal at the eatery knowing you <span id="saved">saved</span> money and the planet
                            </p>
                        </Col>
                    </Row>
                </Grid>
                <div id="sectionThreeModal">
                    <AccessModal buttonSize="large"/>
                </div>
            </div>
        )
    }
}

export default HowItWorks;
