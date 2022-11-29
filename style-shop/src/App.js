import React, { Suspense } from "react";
import './App.css';
import { Route, Routes, Outlet} from "react-router-dom";
import Barranav from './components/Navigation/Navbar';
import Home from './routes/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Servicios from './routes/servicios';
import Login from './components/Login/FormLogin';
import Registro from "./components/Registro/Registro";
import Footer from "./components/Footer/Footer";
import { Spinner } from "react-bootstrap";
import NegocioRoute from "./routes/negocio";


function App() {
const CitasUsers = React.lazy(() => 
    import("../src/components/CitasUsers/CitasUsers")
);

const nuevaCita = React.lazy(() => 
    import("../src/components/CitasUsers/NuevaCita")
);
    return (
        <Container-fluid className="app-container">

            <Barranav/>
            <Container></Container>
            <Suspense fallback={<Spinner/>}>
                <Routes >
                    <Route path="/servicios" element={<Servicios  />} />
                    <Route path="/registro" element={<Registro />} />
                    <Route exact path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/negocio" element={<NegocioRoute />} />
                    <Route path="/citas" element={<CitasUsers />} />
                    <Route path="/newCita" element={<nuevaCita />} />
                </Routes>
            </Suspense>
            <Outlet />
            <Footer className="mt-4" /> 
        </Container-fluid>
    );
}

export default App;
