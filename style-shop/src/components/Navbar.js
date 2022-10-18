import React from 'react';
import '../App.css'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';



const Barranav = () => {
    
    return (
        <Navbar className="nav-bar" expand='lg'>
            <Container className="nav navbar-nav navbar-center">
                <Navbar.Brand >
                <Link to='/'>
                    <img className="img-logo" src="https://www.seekpng.com/png/detail/816-8167410_logo-image-barbe-shop-barber-logo-barber-shop.png"
                        alt="Logo">
                    </img>
                </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to='/'> Inicio </Link>
                        <Link to="/servicios"> Servicios </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        
    );

};
export default Barranav;
