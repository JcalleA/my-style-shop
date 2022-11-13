import React, {useContext, use} from "react";
import { Button } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

const Home = () => {
    
    const { auth } = useContext(AuthContext);
    return (
        auth ? (
            <div>
                <h1> Welcome {auth.usuario.nombre}</h1>
                <button onClick={() => Navigate("/logout")} > Sign Out</button>
            </div>
        ) : (
            <div>
                <h1>Bienvenido Tienes Cuenta Logueate </h1>
                <Link to="/login">
                    <Button>
                        Login
                    </Button>
                </Link>
                <h1>Registrate </h1>
                <Link to="/registro">
                    <Button>
                        Registrarse
                    </Button>
                </Link>
            </div>
        )
    )
};

export default Home;

