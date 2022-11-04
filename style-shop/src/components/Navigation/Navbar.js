import React, {useState} from 'react';
//import './components.css'
import { Link } from 'react-router-dom';
import "../Navigation/Nabvar.css"
import {Form} from "react-bootstrap"

const Barranav = () => {
    let [collapsed , isCollapsed] = useState(true);
    let {isNavbarCollapsed} = useState(false)

    
    return (

        <div className='container-fluid'>
            <div className='header'>
                <nav className='navbar navbar-expand-lg navbar-ligth MainMenu navbar-responsive'>
                    <Link to='/'>
                        <img className="img-logo" src="https://www.seekpng.com/png/detail/816-8167410_logo-image-barbe-shop-barber-logo-barber-shop.png"
                            alt="Imagen del logo">
                        </img>
                    </Link>
                    <button onClick={ () => isCollapsed((collapsed) => !collapsed)} className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className='pages navbar-nav ml-3'>
                        <div className='home'>
                            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                                <Link to='/'>
                                    <a className='nav-link' >Home</a>
                                </Link>
                            </div>
                        </div>
                        <div className='products'>
                            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                                <Link to='/servicios'>
                                    <a className='nav-link' >Servicios</a>
                                </Link>
                            </div>
                        </div>
                        <div className='products'>
                            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                                <Link to='#'>
                                    <a className='nav-link' >About</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='search navbar-nav' >
                        <div className='collapse navbar-collpase' id='navbarSupportedContent'>
                            <div className='form-inline search'>
                                <form className='form-group'>
                                    <input  type='search' className='form-control' placeholder='search' aria-label='search'></input>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="end navbar-nav">
                        <div className="login">
                            <Link to="/login">
                            <a className="nav-link">
                                <p>Login</p>
                            </a>
                            </Link>
                        </div>
                        <div className="register">
                            <Link to='/registro'>
                                <a className="nav-link">
                                    <p>Sign up</p>
                                </a>
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>

       /* 
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
        </Navbar>*/

        
        
    );

};
export default Barranav;
