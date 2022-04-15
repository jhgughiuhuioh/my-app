import React, { Component } from 'react';
import { Container, Form, FormControl, Nav, Navbar, Button} from 'react-bootstrap'
import logo from './logo192.png';
import {BrowserRouter as Router, Switch,Route, Link } from "react-router-dom"




export default class Header extends Component {
    render() {
        return (
            <>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                           src={logo}
                           height="90"
                           width="90"
                           className="d-inline-block align-top"
                           alt="Logo"
                        />

                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" >
                            <Nav className="me-auto my-2 my-lg-0">  
                            <Nav.Link href="/"> Main page </Nav.Link>
                            <Nav.Link href="/about"> Summary </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

          
            </>
        );
    }
}

