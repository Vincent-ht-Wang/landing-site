import React, {Component} from 'react';
import {Jumbotron} from 'react-bootstrap';
import {Grid, Col, Row} from 'react-bootstrap';
import {Image} from 'react-bootstrap';

class SectionFive extends Component {
    render() {
        return(
            <div>
                <Jumbotron id="jumbotronFive">
                    <h3 className="benefitsIntro">
                        Get more <span className="greenText">exposure</span>, <span className="redText">sell more</span> food
                    </h3>
                        <Grid>
                            <Row>
                                <Col md={4} lg={4}>
                                    <Image src="/assets/temporaryIcon.jpg"/>
                                </Col>
                                <Col md={4} lg={4}>
                                    <Image src="/assets/temporaryIcon.jpg"/>
                                </Col>
                                <Col md={4} lg={4}>
                                    <Image src="/assets/temporaryIcon.jpg"/>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={4} lg={4}>
                                    <h3 className="benefitsText">
                                        More profits
                                    </h3>
                                    <h4 className="benefitsText">
                                        Make money you would've otherwise lost
                                    </h4>
                                </Col>
                                <Col md={4} lg={4}>
                                    <h3 className="benefitsText">
                                        Free promotion
                                    </h3>
                                    <h4 className="benefitsText">
                                        Make you store known across our network of hungry customers
                                    </h4>
                                </Col>
                                <Col md={4} lg={4}>
                                    <h3 className="benefitsText">
                                        Improved branding 
                                    </h3>
                                    <h4 className="benefitsText">
                                        Contribute to a global environmental initiative
                                    </h4>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={4} lg={4}>
                                </Col>
                                <Col md={4} lg={4}>
                                    <Image src="/assets/temporaryIcon.jpg"/>
                                </Col>
                                <Col md={4} lg={4}>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={4} lg={4}>
                                </Col>
                                <Col md={4} lg={4}>
                                    <h3 className="benefitsText">
                                        Risk free
                                    </h3>
                                    <h4 className="benefitsText">
                                        Cancel anytime with no conditions attached
                                    </h4>
                                </Col>
                                <Col md={4} lg={4}>
                                </Col>
                            </Row>
                        </Grid>
                </Jumbotron>
            </div>
        )
    }
}

export default SectionFive;