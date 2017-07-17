import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {NavItem} from 'react-bootstrap';
import AccessModal from './AccessModal.jsx';

class MyNavbar extends Component {
    render() {
        return(
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/"> grood </a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav pullRight={true} bsStyle="tabs">
                        <NavItem eventKey={1} href="#"> 
                            <AccessModal />
                        </NavItem>
                        <NavItem eventKey={2} href="/eateries"> For Eateries </NavItem>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

export default MyNavbar;