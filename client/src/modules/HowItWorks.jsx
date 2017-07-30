import React, { Component } from 'react';
import {Image} from 'react-bootstrap';
import {Grid} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import AccessModal from './AccessModal';

class HowItWorks extends Component {
    render() {
        return(
            <div className="howItWorksBlock">
                <Grid fluid>
                    <Row>
                        <Col md={4} lg={4}>
                            <Image src="http://imgur.com/jyJBOjZ.jpg" className="stepIcon"responsive/>
                        </Col>
                        <Col md={4} lg={4}>
                            <Image src="http://imgur.com/iIn4MFv.jpg" className="stepIcon"responsive/>
                        </Col>
                        <Col md={4} lg={4}>
                            <Image src="http://imgur.com/s8i5tWh.jpg" className="eatIcon"responsive/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4} lg={4}>
                            <p>
                                Easily <span className="redText">find </span>a closing eatery nearby that suits your taste
                            </p>
                        </Col>
                        <Col md={4} lg={4}>
                            <p>
                                <span className="redText">Order</span> and purchase your meal through the web-app
                            </p>
                        </Col>
                        <Col md={4} lg={4}>
                            <p>
                                <span className="greenText">Grab</span> your meal at the eatery knowing you <span className="greenText">saved</span> money and the planet
                            </p>
                        </Col>
                    </Row>
                </Grid>
                <div className="finalAccessButton">
                    <AccessModal buttonSize="large"/>
                </div>
            </div>
        )
    }
}

export default HowItWorks;
