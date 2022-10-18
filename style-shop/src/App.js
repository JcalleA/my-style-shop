
import './App.css';
import { Route, Routes } from "react-router-dom";
import Barranav from './components/Navbar';
import Home from './routes/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from './components/Loguin'
import LogoutButton from './components/Logout'
import Profile from "./components/Profile";
import Container from 'react-bootstrap/Container';
import Servicios from './routes/servicios';


function App() {
    const { isAuthenticated } = useAuth0();

    return (
        <Container>
                <Barranav></Barranav>
            <Container className='profile'>
                {isAuthenticated ? (
                    <>
                        <Profile />
                        <LogoutButton />
                    </>
                ) : (
                    <LoginButton />
                )}
            </Container>
            <Routes>
                <Route exact path="/"  element={<Home/>} />
                <Route  path="/servicios"  element={<Servicios/>} />
            </Routes>
        </Container>
    );
}

export default App;
