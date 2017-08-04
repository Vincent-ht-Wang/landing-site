import React, {Component} from 'react';
import {Panel} from 'react-bootstrap';
import {Grid, Col, Row} from 'react-bootstrap';

class Faq extends Component {
    render() {
        return(
            <Grid id="faqGrid">
                <Row>
                    <Col md={4} lg={4}>
                        <Panel header="How do I become a partner?">
                            Just quickly fill out the form and we’ll get in touch with you
                        </Panel>
                    </Col>
                    <Col md={4} lg={4}>
                        <Panel header="Is the setup complicated?">
                            Nope. Just list the typical items you have leftover, the time window you want to sell at, and set your own price. 
                        </Panel>
                    </Col>
                    <Col md={4} lg={4}>
                        <Panel header="What will I need to do to list my unsold food on a particular day?">
                            Open the web-app, adjust the portions you have left, and tap a button that says you’re active
                        </Panel>
                    </Col>
                </Row>
                <Row>
                    <Col md={4} lg={4}>
                        <Panel header="I’ll be selling in the small time window before I close, what if nobody comes?">
                            We pre-notify customers 1.5 hours before that window to give them a bigger window to find you
                        </Panel>
                    </Col>
                    <Col md={4} lg={4}>
                        <Panel header="Will you need a portion of the sale?">
                            Yes, we take a 15% royalty on each additional sale we bring to you<br></br>(not your regular ones)
                        </Panel>
                    </Col>
                    <Col md={4} lg={4}>
                        <Panel header="Can I still sell my unsold food in store? ">
                            Of course, all we're doing is bringing you external customers who wouldn’t have otherwise found your store 
                        </Panel>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default Faq;