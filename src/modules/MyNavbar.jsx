import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {NavItem} from 'react-bootstrap';
import {Image} from 'react-bootstrap';
import AccessModal from './AccessModal.jsx';

class MyNavbar extends Component {
    render() {
        return(
            <div>
                <Navbar fixedTop fluid>
                    <Navbar.Header>
                        <a href="/">
                            <Image src="http://imgur.com/eP4aSzV.jpg" id="navbarLogo" className="navbar-left"/>
                        </a>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight={true} bsStyle="tabs">
                            <NavItem eventKey={1} href="#"> 
                                <AccessModal/>
                            </NavItem>
                            <NavItem eventKey={2} href="/eateries"> 
                                For Eateries 
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
};  

export default MyNavbar;