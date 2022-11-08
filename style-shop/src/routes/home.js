import React from "react";
import { Button } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";

const Home = ({ user }) => {
    return (
        user ? (
            <div>
                <h1> Welcome {user.usuario.nombre}</h1>
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

