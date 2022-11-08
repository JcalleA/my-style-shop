import React, { useContext } from "react";
import './App.css';
import { Route, Routes } from "react-router-dom";
import Barranav from './components/Navigation/Navbar';
import Home from './routes/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Servicios from './routes/servicios';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './components/Login/FormLogin';
import Registro from "./components/Registro/Registro";
import AuthContext from "./contexts/AuthContext";


function App() {

    const { auth } = useContext(AuthContext);

    return (
        <Container-fluid className="app-container">

            <Barranav></Barranav>
            <Container></Container>
            <Routes>
                <Route path="/servicios" element={<Servicios user={auth} />} />
                <Route path="/registro" element={<Registro />} />
                <Route exact path="/" element={<Home user={auth} />} />
                <Route path="/login" element={<Login />} />
            </Routes>

        </Container-fluid>
    );
}

export default App;
