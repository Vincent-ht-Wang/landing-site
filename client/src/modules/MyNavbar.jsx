import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Navbar} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {NavItem} from 'react-bootstrap';
import {Image} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import AccessModal from './AccessModal.jsx';

class MyNavbar extends Component {
    render() {
        return(
            <div>
                <Navbar fixedTop fluid>
                    <Navbar.Header>
                        <Link to="/">
                            <Image src="/assets/logo/png/color_logo_transparent@2x.png" id="navbarLogo" className="navbar-left"/>
                        </Link>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight={true} bsStyle="tabs">
                            <NavItem eventKey={1} href="#"> 
                                <AccessModal/>
                            </NavItem>
                            <NavItem href="/eateries">
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