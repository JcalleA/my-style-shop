import React, { useEffect, useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import AuthContext from "../contexts/AuthContext";
import FormRegistroNegocio from "../components/RegistroNegocio/FormRegistroNegocio";

const Negocio = () => {

    const { auth } = useContext(AuthContext);

    if (auth) {

        const Token = auth.usuario.token
        const [negocio, setNegocio] = useState([])
        useEffect(() => {
            axios
                .get("http://localhost:3001/api/negocio/getnegocio", {
                    headers: {
                        'Authorization': `Bearer ${Token}`
                    }
                })
                .then((res) => {
                    const { data } = res;
                    if (data.mensaje === "No se encontro Negocio") {
                        setNegocio(null)
                    } else {
                        setNegocio(data)
                    }

                })
                .catch((error) => console.log(error))
        }, []);

        return (
            negocio ? (
                <div className="row">
                    
                            <div className="card bg-dark border-white text-white">
                                <img height="250" width="auto" src={negocio.imagenUrl} className="card-img" />
                                <div className="card-img-overlay">
                                    <h5 className="card-title">{negocio.nombre}</h5>
                                    <p className="card-text auto pe-2">{negocio.ciudad}</p>
                                    <p className="card-text auto pe-2">{negocio.telefono}</p>
                                </div>
                            </div>
                        </div>
                    
                

            ) : (
                <div >
                    <h1>No tienes negocio Registra Uno</h1>
                    <FormRegistroNegocio></FormRegistroNegocio>
                </div>
            )
        )

    }
};

export default Negocio;