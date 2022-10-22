import React, { useEffect, useState, useParams } from "react";
import './App.css';
import { Route, Routes } from "react-router-dom";
import Barranav from './components/Navbar';
import Home from './routes/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Servicios from './routes/servicios';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './components/Login';
import Registro from "./components/Registro";
import User from "./components/User";



function App() {
    const user = User.user;
    console.log("Imprimiendo usuario");
    console.log(user);
    return (
        
        <Container>
        
            <Barranav></Barranav>
            <Container >
            </Container>
            <Routes>
                <Route element={<ProtectedRoute user={user} />}>
                    <Route path="/servicios" element={<Servicios />} />
                </Route>
                <Route path="/registro" element={<Registro />} />
                <Route exact path="/" element={<Home user={user} />} />
                <Route path="/login" element={<Login />} />
            </Routes>

        </Container>
    );
}

export default App;
