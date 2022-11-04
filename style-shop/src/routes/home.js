import React from "react";
import { Navigate } from "react-router-dom";

const Home = ({ user }) => {
    return (
        user ? (
        <div>
            <h1> Welcome {user.nombre}</h1>
            <button onClick={() => Navigate("/logout")} > Sign Out</button>
        </div>
    ) : (
        <div>
            <h1>Welcome Tienes Cuesta Logueate </h1>
            <button onClick={() => Navigate("/login")}>Sign In</button>
        </div>
    )
    )
};

export default Home;

