import React from "react";
import Button from 'react-bootstrap/Button';
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";


const Home = ({ user }) => {

    console.log(user)
    return (
        user ? (
        <div>
            <h1> Welcome {user.nombre}</h1>

            <button onClick={Navigate("/logout")} > Sign Out</button>
        </div>
    ) : (
        <div>
            <h1>Welcome Tienes Cuesta Logueate </h1>
            <button onClick={Navigate("/login")}>Sign In</button>
        </div>
    )
        
    )






};

export default Home;

