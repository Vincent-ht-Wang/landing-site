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
                    <Row className="text-center">
                        <Col md={4} lg={4} sm={4} xs={4}>
                            <Image src="/assets/icons/lens.png" className="searchIcon center-block" />
                            <h3 className="howItWorksSubtext">
                                Easily <span className="redText">find </span>a closing eatery nearby that suits your taste
                            </h3>
                        </Col>
                        <Col md={4} lg={4} sm={4} xs={4}>
                            <Image src="/assets/icons/card.png" className="cardIcon center-block"/>
                            <h3 className="howItWorksSubtext">
                                <span className="redText">Order</span> and purchase your meal through the web-app
                            </h3>
                        </Col>
                        <Col md={4} lg={4} sm={4} xs={4}>
                            <Image src="/assets/icons/container_600.png" className="eatIcon center-block"/>
                            <h3 className="howItWorksSubtext">
                                <span className="greenText">Grab</span> your meal at the eatery knowing you <span className="greenText">saved</span> money and the planet
                            </h3>
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
