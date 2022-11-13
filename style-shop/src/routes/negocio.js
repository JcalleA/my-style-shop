import React, { useEffect, useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import AuthContext from "../contexts/AuthContext";
import FormRegistroNegocio from "../components/RegistroNegocio/FormRegistroNefocio";

const Negocio = () => {

    const { auth } = useContext(AuthContext);

    if (auth) {
        
        const Token = auth.usuario.token
        const [negocio, setNegocio] = useState([])
        useEffect(() => {
            axios
                .get("http://localhost:3001/negocio/getnegocio", {
                    headers: {
                        'Authorization': `Bearer ${Token}`
                    }
                })
                .then((res) => {
                    const { data } = res;
                    setNegocio(data)
                })
                .catch((error) => console.log(error))
                .catch((res) => {
                    const { datos } = res;
                    setNegocio(datos)
                })
        }, []);

        return (
            auth ? (
                <div>
                    <div className="card" style={{width: '18rem'}}>
                        {/* <img className="card-img-top" src={servicios.imagenUrl} alt="Card image cap"></img> */}
                        <div className="card-body">
                            <h5 className="card-title">Nombre Negocio {negocio.nombre}</h5>
                            <h5 className="card-title">Direccion {negocio.ciudad}</h5>
                            <h5 className="card-title">Telefono Negocio {negocio.telefono}</h5>

                            <button type="button" className="btn btn-primary">Primary</button>
                            <button onClick={() => Navigate("/logout")} > Sign Out</button>

                            <FormRegistroNegocio></FormRegistroNegocio>
                        </div>
                    </div>
                </div>

            ) : (
                <div>
                    <h1>Welcome Tienes Cuenta Logueate </h1>
                    <button onClick={() => Navigate("/login")}>Sign In</button>
                </div>
            )
        )
    } else {
        return (
            auth ? (
                <div>
                    <h1> Welcome {auth.usuario.id}</h1>
                    <button onClick={() => Navigate("/logout")} > Sign Out</button>
                </div>
            ) : (
                <Navigate to="/" />
            )
            
        )
    }
};

export default Negocio;