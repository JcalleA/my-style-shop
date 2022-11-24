import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../../styles/utilStyles";
import {
    ContainerCita,
    ContainerFotoCita,
    ContainerInformacionCita,
  } from "./styles";

import contextAuth from "../../contexts/contextAuth/ContextAuth";

const Cita = ({ cita }) => {
    const fecha = new Date(cita.fecha).toLocaleString();
    const Expiracion = new Date(cita.fecha).getTime() - new Date().getTime();
    const noDisponible = cita.estado === "rechazada" || Expiracion < 0;

    const navigation = useNavigate();
    const {
        user: { type },
        user: { perfil }
    } = useContext(contextAuth);

    const handleRedirectProfile = () => {
        navigation(`/barberos${cita.barbero._id || cita.barbero}`);     
    };

    return (
        <ContainerCita noDisponible={noDisponible} estado={cita.estado}>
            <h3>{cita.estado}</h3>
            <div>
                <ContainerFotoCita>
                    <img
                    src={cita.barbero.perfil?.foto || perfil?.foto || userEmpty}
                    alt="Foto de barbero"
                    />
                    <Button
                    tabIndex={noDisponible ? -1:0}
                    onClick={handleRedirectProfile}
                    >
                    {type === "empleado" ? "Mi perfil" : "Ver perfil"}
                    </Button>
                </ContainerFotoCita>
                <ContainerInformacionCita>
                    <div>
                        <strong>{type === "empleado" ? "cliente": "Barbero:"}</strong>
                            <p>
                                {type === "empleado" ? cita.cliente.nombre : cita.barbero.nombre}
                            </p>
                    </div>
                    <div>
                        <strong>Fecha y hora: </strong>
                        <p>{fecha}</p>
                    </div>
                    <div>
                        <strong>Observaciones: </strong>
                        <p>{cita.observaciones}</p>
                    </div>
                </ContainerInformacionCita>
            </div>
        </ContainerCita>
    );
};

export default Cita;