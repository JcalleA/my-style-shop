import React from "react";
import Button from 'react-bootstrap/Button';
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";


const Home = ({ user }) => {
    
    console.log(user)
    return (
        <h1> welcome home</h1>
            // user ? (
            // <div>
            //     <h1> Welcome {name}</h1>

            //     <button onClick={Navigate("/login")} > Sign Out</button>
            // </div>
            // ) : (
            // <div>
            //     <h1>Welcome Tienes Cuesta Logueate </h1>
            //     <button onClick={Navigate("/login")}>Sign In</button>
            // </div>
            // )
        
    )






};

export default Home;

