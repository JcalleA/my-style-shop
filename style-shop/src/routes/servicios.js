import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";


const Servicios = ({ user }) => {

    if (user) {
        
        const Token = useState(user.usuario.token)
        const [servicios, setServicios] = useState([])
        useEffect(() => {
            const headers = {
                headers: {
                    'Authorization': `Bearer ${Token}`
                }
            }
            axios
                .get("http://localhost:3001/users/getuser", headers)
                .then((res) => {
                    const { data } = res;
                    setServicios(data)
                })
                .catch((error) => console.log(error))
        }, [Token]);
        
        return (
            user ? (
                <div>
                    <h1> Welcome {servicios.nombre}</h1>
                    <h1> apellido {servicios.apellido}</h1>
                    <h1> correo {servicios.correo}</h1>
                    <h1> id {user.usuario.id}</h1>
                    <button onClick={() => Navigate("/logout")} > Sign Out</button>
                </div>
            ) : (
                <div>
                    <h1>Welcome Tienes Cuenta Logueate </h1>
                    <button onClick={() => Navigate("/login")}>Sign In</button>
                </div>
            )
        )

    }else {
        return (
            user ? (
                <div>
                    <h1> Welcome {user.usuario.id}</h1>
                    <button onClick={() => Navigate("/logout")} > Sign Out</button>
                </div>
            ) : (
                <div>
                    <h1>Welcome Tienes Cuenta Logueate </h1>
                    <button onClick={() => Navigate("/login")}>Sign In</button>
                </div>
            )
        )

    }


};

export default Servicios;