import React from "react";
import './App.css';
import { Route, Routes } from "react-router-dom";
import Barranav from './components/Navigation/Navbar';
import Home from './routes/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Servicios from './routes/servicios';
import Login from './components/Login/FormLogin';
import Registro from "./components/Registro/Registro";
import Negocio from "./routes/negocio";



function App() {

    return (
        <Container-fluid className="app-container">

            <Barranav></Barranav>
            <Container></Container>
            <Routes >
                <Route path="/servicios" element={<Servicios  />} />
                <Route path="/registro" element={<Registro />} />
                <Route exact path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/negocio" element={<Negocio />} />
            </Routes>
        </Container-fluid>
    );
}

export default App;
