import React from 'react'
import {Link} from "react-router-dom"
import {Navbar, Container, Nav} from "react-bootstrap";
const NavBar = () => {
    return (
        <div>
            
            
            <Navbar bg="light" variant="light">
    <Container className="Nav">
    <Navbar.Brand href="#home">Social Cards</Navbar.Brand>
    <Nav className="me-auto">
    <Nav.Link href="/">Home</Nav.Link>
    <Nav.Link href="/users">Users</Nav.Link>
    </Nav>
    </Container>
            </Navbar>    
        </div>
    );
};

export default NavBar