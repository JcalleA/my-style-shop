import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import FormRegistroNegocio from "../components/RegistroNegocio/FormRegistroNegocio";
import AuthContext from "../contexts/AuthContext";


const NegocioRoute = () => {


    const { auth } = useContext(AuthContext);

    if (auth) {

        const Token = auth.usuario.token
        const [negocio, setNegocio] = useState([])
        useEffect(() => {
            axios
                .get("https://backstyleshop.herokuapp.com/api/negocio/getnegocio", {
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

                <div className=" mt-3 text-center">
                    <div className="card bg-dark border-white text-white">
                        <img height="300" width="auto" src={negocio.imagenUrl} className="rounded mx-auto d-block" />
                        <div className="card-body">
                            <h5 className="card-title">{negocio.nombre}</h5>
                            <p className="card-text auto pe-2">{negocio.ciudad}</p>
                            <p className="card-text auto pe-2">{negocio.telefono}</p>
                        </div>
                    </div>
                    <h1>Registra Negocio</h1>
                    <FormRegistroNegocio></FormRegistroNegocio>
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

export default NegocioRoute;