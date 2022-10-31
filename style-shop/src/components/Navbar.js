import React from 'react';
import './components.css'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';



const Barranav = () => {
    
    return (
        
        <Navbar bg='primary' variant='dark'>
            <Container>
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
                        <Link to='/'>
                            <Button className='nav-button'>
                                Home
                            </Button>
                        </Link>
                        <Link to="/servicios">
                            <Button>
                                Servicios
                            </Button>
                        </Link>
                        <Link to="/registro">
                            <Button>
                                Registrarse
                            </Button>
                        </Link>
                        <Link to="/login">
                            <Button>
                                Login
                            </Button>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        
    );

};
export default Barranav;
